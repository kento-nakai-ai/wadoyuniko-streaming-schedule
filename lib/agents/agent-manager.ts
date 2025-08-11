import type { Agent, AgentRole, Task, AgentMessage, AgentMetrics, SystemHealth } from '@/types/agent'
import { AGENT_DEFINITIONS } from './agent-definitions'
import { ClaudeClient } from './claude-client'

export class AgentManager {
  private agents: Map<string, Agent> = new Map()
  private tasks: Map<string, Task> = new Map()
  private messages: AgentMessage[] = []
  private claudeClient: ClaudeClient

  constructor() {
    this.initializeAgents()
    this.claudeClient = new ClaudeClient()
  }

  private initializeAgents() {
    Object.entries(AGENT_DEFINITIONS).forEach(([role, definition]) => {
      const agent: Agent = {
        id: role,
        ...definition,
        currentTasks: [],
        completedTasks: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      this.agents.set(role, agent)
    })
  }

  // Agent operations
  getAgent(id: string): Agent | undefined {
    return this.agents.get(id)
  }

  getAllAgents(): Agent[] {
    return Array.from(this.agents.values())
  }

  updateAgentStatus(agentId: string, status: Agent['status']) {
    const agent = this.agents.get(agentId)
    if (agent) {
      agent.status = status
      agent.updatedAt = new Date()
      this.agents.set(agentId, agent)
    }
  }

  // Task operations
  async createTask(taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> {
    const task: Task = {
      id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...taskData,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    this.tasks.set(task.id, task)
    
    // Assign task to agent
    const agent = this.agents.get(task.assignedTo)
    if (agent) {
      agent.currentTasks.push(task)
      this.updateAgentStatus(task.assignedTo, 'busy')
    }

    // Send notification message
    await this.sendMessage({
      fromAgent: task.createdBy,
      toAgent: task.assignedTo,
      type: 'task-assignment',
      content: `新しいタスクが割り当てられました: ${task.title}\n\n説明: ${task.description}\n優先度: ${task.priority}\n期限: ${task.dueDate ? task.dueDate.toLocaleDateString('ja-JP') : '未設定'}`,
      metadata: { taskId: task.id }
    })

    return task
  }

  async updateTaskProgress(taskId: string, progress: number, status?: Task['status']) {
    const task = this.tasks.get(taskId)
    if (!task) return

    task.progress = progress
    if (status) task.status = status
    task.updatedAt = new Date()

    // If task is completed
    if (status === 'completed' || progress >= 100) {
      const agent = this.agents.get(task.assignedTo)
      if (agent) {
        // Move from current to completed tasks
        agent.currentTasks = agent.currentTasks.filter(t => t.id !== taskId)
        agent.completedTasks.push(task)
        
        // Update agent status
        if (agent.currentTasks.length === 0) {
          this.updateAgentStatus(task.assignedTo, 'active')
        }
      }

      // Notify completion
      await this.sendMessage({
        fromAgent: task.assignedTo,
        toAgent: task.createdBy,
        type: 'status-update',
        content: `タスク「${task.title}」が完了しました。\n\n完了時間: ${task.actualHours || task.estimatedHours}時間\n品質スコア: 85/100`,
        metadata: { taskId: task.id, completed: true }
      })
    }

    this.tasks.set(taskId, task)
  }

  // Messaging system
  async sendMessage(messageData: Omit<AgentMessage, 'id' | 'timestamp' | 'isRead'>): Promise<AgentMessage> {
    const message: AgentMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...messageData,
      timestamp: new Date(),
      isRead: false
    }

    this.messages.push(message)
    return message
  }

  getMessagesForAgent(agentId: string, limit = 50): AgentMessage[] {
    return this.messages
      .filter(msg => msg.toAgent === agentId || msg.toAgent === 'all')
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit)
  }

  // AI-powered agent response
  async processAgentInteraction(
    agentRole: AgentRole,
    userMessage: string,
    context?: {
      currentTasks?: Task[]
      recentMessages?: AgentMessage[]
      systemStatus?: any
    }
  ): Promise<string> {
    const agent = this.getAgent(agentRole)
    if (!agent) {
      throw new Error(`Agent ${agentRole} not found`)
    }

    // Build context string
    let contextString = `現在の状況:\n`
    contextString += `- ステータス: ${agent.status}\n`
    contextString += `- 現在のタスク数: ${agent.currentTasks.length}\n`
    contextString += `- 完了タスク数: ${agent.completedTasks.length}\n`

    if (context?.currentTasks && context.currentTasks.length > 0) {
      contextString += `\n現在のタスク:\n`
      context.currentTasks.forEach((task, i) => {
        contextString += `${i + 1}. ${task.title} (進捗: ${task.progress}%, 優先度: ${task.priority})\n`
      })
    }

    if (context?.recentMessages && context.recentMessages.length > 0) {
      contextString += `\n最近のメッセージ:\n`
      context.recentMessages.slice(0, 3).forEach(msg => {
        contextString += `- ${msg.fromAgent}: ${msg.content.substring(0, 100)}...\n`
      })
    }

    try {
      const response = await this.claudeClient.generateAgentResponse(
        agent.name,
        agent.personality,
        contextString,
        userMessage
      )

      // Log the interaction
      await this.sendMessage({
        fromAgent: 'system',
        toAgent: agentRole,
        type: 'general',
        content: `ユーザーとの会話: ${userMessage.substring(0, 50)}...`,
        metadata: { userInteraction: true }
      })

      return response
    } catch (error) {
      console.error(`Error processing agent interaction for ${agentRole}:`, error)
      return `申し訳ありませんが、現在システムに問題が発生しています。しばらく待ってから再度お試しください。`
    }
  }

  // Analytics and metrics
  getSystemHealth(): SystemHealth {
    const allAgents = this.getAllAgents()
    const activeAgents = allAgents.filter(a => a.status === 'active' || a.status === 'busy').length
    const activeTasks = Array.from(this.tasks.values()).filter(t => t.status === 'in-progress').length
    
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const completedToday = Array.from(this.tasks.values()).filter(t => 
      t.status === 'completed' && t.updatedAt >= today
    ).length

    const recentMessages = this.messages.filter(m => 
      m.timestamp >= new Date(Date.now() - 1000 * 60 * 60) // Last hour
    )
    const averageResponseTime = recentMessages.length > 0 ? 30 : 0 // Simulated

    const errorMessages = recentMessages.filter(m => m.content.includes('error') || m.content.includes('エラー'))
    const errorRate = recentMessages.length > 0 ? errorMessages.length / recentMessages.length : 0

    return {
      overallStatus: errorRate > 0.1 ? 'warning' : activeAgents === allAgents.length ? 'healthy' : 'warning',
      activeAgents,
      totalAgents: allAgents.length,
      activeTasks,
      completedTasksToday: completedToday,
      averageResponseTime,
      errorRate,
      lastUpdated: new Date()
    }
  }

  getAgentMetrics(agentId: string, periodDays = 30): AgentMetrics {
    const agent = this.getAgent(agentId)
    if (!agent) {
      throw new Error(`Agent ${agentId} not found`)
    }

    const periodStart = new Date(Date.now() - periodDays * 24 * 60 * 60 * 1000)
    const completedInPeriod = agent.completedTasks.filter(t => t.updatedAt >= periodStart)
    
    const totalHours = completedInPeriod.reduce((sum, task) => sum + (task.actualHours || task.estimatedHours), 0)
    const averageTaskTime = completedInPeriod.length > 0 ? totalHours / completedInPeriod.length : 0

    return {
      agentId,
      tasksCompleted: completedInPeriod.length,
      averageTaskTime,
      qualityScore: 85 + Math.random() * 10, // Simulated
      collaborationScore: 80 + Math.random() * 15, // Simulated
      innovationScore: 75 + Math.random() * 20, // Simulated
      period: {
        start: periodStart,
        end: new Date()
      }
    }
  }

  // Advanced workflows
  async executeWorkflow(workflowName: string, triggerData: any): Promise<void> {
    switch (workflowName) {
      case 'code-review':
        await this.executeCodeReviewWorkflow(triggerData)
        break
      case 'incident-response':
        await this.executeIncidentResponseWorkflow(triggerData)
        break
      case 'feature-development':
        await this.executeFeatureDevelopmentWorkflow(triggerData)
        break
      default:
        throw new Error(`Unknown workflow: ${workflowName}`)
    }
  }

  private async executeCodeReviewWorkflow(data: { code: string, language: string, author: string }) {
    // 1. Security Officer reviews for security issues
    await this.createTask({
      title: 'セキュリティレビュー',
      description: `${data.author}によるコードのセキュリティレビューを実施`,
      priority: 'high',
      status: 'in-progress',
      assignedTo: 'security-officer',
      createdBy: 'system',
      estimatedHours: 1,
      dependencies: [],
      tags: ['code-review', 'security'],
      progress: 0
    })

    // 2. Senior engineer reviews for code quality
    await this.createTask({
      title: 'コード品質レビュー',
      description: `${data.author}によるコードの品質レビューを実施`,
      priority: 'high',
      status: 'pending',
      assignedTo: 'senior-fullstack',
      createdBy: 'system',
      estimatedHours: 2,
      dependencies: [],
      tags: ['code-review', 'quality'],
      progress: 0
    })

    // 3. QA Lead creates test plan
    await this.createTask({
      title: 'テストプラン作成',
      description: `新機能のテストプランを作成し、自動テストを実装`,
      priority: 'medium',
      status: 'pending',
      assignedTo: 'qa-lead',
      createdBy: 'system',
      estimatedHours: 3,
      dependencies: [],
      tags: ['testing', 'automation'],
      progress: 0
    })
  }

  private async executeIncidentResponseWorkflow(data: { severity: string, description: string }) {
    const isHighSeverity = data.severity === 'critical' || data.severity === 'high'

    // Immediate response by Security Officer
    await this.createTask({
      title: 'インシデント初期対応',
      description: `緊急インシデント対応: ${data.description}`,
      priority: 'critical',
      status: 'in-progress',
      assignedTo: 'security-officer',
      createdBy: 'system',
      estimatedHours: 1,
      dependencies: [],
      tags: ['incident', 'emergency'],
      progress: 0
    })

    if (isHighSeverity) {
      // Escalate to CTO
      await this.sendMessage({
        fromAgent: 'system',
        toAgent: 'cto',
        type: 'alert',
        content: `🚨 重大インシデント発生\n\n詳細: ${data.description}\n\nSecurity Officerが初期対応中です。`,
        metadata: { severity: data.severity, incident: true }
      })

      // Notify CEO for critical incidents
      if (data.severity === 'critical') {
        await this.sendMessage({
          fromAgent: 'system',
          toAgent: 'ceo',
          type: 'alert',
          content: `🚨 クリティカルインシデント報告\n\n${data.description}\n\n対応チームが緊急対応中です。状況の報告をお待ちください。`,
          metadata: { severity: data.severity, incident: true }
        })
      }
    }
  }

  private async executeFeatureDevelopmentWorkflow(data: { feature: string, requirements: string[] }) {
    // 1. Product Manager creates detailed specs
    await this.createTask({
      title: `${data.feature}の詳細仕様作成`,
      description: `新機能「${data.feature}」の詳細な仕様書を作成`,
      priority: 'high',
      status: 'pending',
      assignedTo: 'product-manager',
      createdBy: 'system',
      estimatedHours: 4,
      dependencies: [],
      tags: ['spec', 'planning'],
      progress: 0
    })

    // 2. Backend Architect designs system architecture
    await this.createTask({
      title: `${data.feature}のアーキテクチャ設計`,
      description: `新機能のバックエンドアーキテクチャとAPIを設計`,
      priority: 'high',
      status: 'pending',
      assignedTo: 'backend-architect',
      createdBy: 'system',
      estimatedHours: 6,
      dependencies: [],
      tags: ['architecture', 'design'],
      progress: 0
    })

    // 3. Frontend Specialist designs UI/UX
    await this.createTask({
      title: `${data.feature}のUI/UX設計`,
      description: `新機能のユーザーインターフェースを設計`,
      priority: 'medium',
      status: 'pending',
      assignedTo: 'frontend-specialist',
      createdBy: 'system',
      estimatedHours: 5,
      dependencies: [],
      tags: ['ui', 'ux', 'design'],
      progress: 0
    })
  }
}