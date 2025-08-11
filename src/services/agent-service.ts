import { Agent, AgentRole, Task, TaskPriority, TaskStatus, Message, DailyStandup, Incident } from '@/types/agent'

export class AgentService {
  private agents: Map<AgentRole, Agent> = new Map()
  private tasks: Map<string, Task> = new Map()
  private messages: Map<string, Message> = new Map()

  constructor() {
    this.initializeAgents()
  }

  private initializeAgents() {
    const agentConfigs: Omit<Agent, 'id' | 'currentTasks' | 'isActive' | 'lastActivity'>[] = [
      {
        role: 'ceo',
        name: 'CEO Agent',
        level: 5,
        responsibilities: [
          '組織全体のビジョン策定',
          '戦略立案と意思決定',
          'ステークホルダー管理',
          '最終的な承認権限'
        ],
        authorities: [
          'すべての重要決定の最終承認',
          'リソース配分の決定',
          '組織構造の変更',
          'P0インシデントの対応指示'
        ],
        skills: ['戦略立案', 'リーダーシップ', 'ビジネス分析', 'ステークホルダー管理']
      },
      {
        role: 'cto',
        name: 'CTO Agent',
        level: 4,
        responsibilities: [
          '技術戦略の策定',
          'アーキテクチャ決定',
          '技術チーム統括',
          '技術的リスク管理'
        ],
        authorities: [
          '技術的意思決定の承認',
          'アーキテクチャ変更の承認',
          'セキュリティポリシーの承認',
          '技術人材の評価'
        ],
        reportingTo: 'ceo',
        skills: ['技術アーキテクチャ', 'チーム管理', 'リスク管理', '技術戦略']
      },
      {
        role: 'engineering-manager',
        name: 'Engineering Manager Agent',
        level: 3,
        responsibilities: [
          '開発チーム管理',
          'スプリント計画',
          '人材育成',
          'プロジェクト進行管理'
        ],
        authorities: [
          'タスク割り当て',
          'プロジェクト計画承認',
          '開発リソース配分',
          '一般的な技術決定'
        ],
        reportingTo: 'cto',
        directReports: ['senior-fullstack-engineer', 'frontend-specialist', 'backend-architect'],
        skills: ['プロジェクト管理', 'チーム管理', 'アジャイル開発', '人材育成']
      },
      {
        role: 'security-officer',
        name: 'Security Officer Agent',
        level: 2,
        responsibilities: [
          'セキュリティポリシー策定',
          '脆弱性評価',
          'インシデント対応',
          'セキュリティ監査'
        ],
        authorities: [
          'セキュリティ要件の強制',
          'セキュリティインシデント対応',
          'セキュリティ監査の実施',
          'リスクアセスメント'
        ],
        reportingTo: 'cto',
        skills: ['セキュリティ監査', '脆弱性評価', 'インシデント対応', 'コンプライアンス']
      },
      {
        role: 'qa-lead',
        name: 'QA Lead Agent',
        level: 2,
        responsibilities: [
          '品質保証戦略',
          'テスト自動化',
          '品質メトリクス管理',
          'リリース品質管理'
        ],
        authorities: [
          'リリース可否の判断',
          'テスト要件の設定',
          '品質基準の強制',
          'テストプロセスの改善'
        ],
        reportingTo: 'engineering-manager',
        skills: ['テスト自動化', '品質保証', 'リスク分析', 'プロセス改善']
      },
      {
        role: 'devops-engineer',
        name: 'DevOps Engineer Agent',
        level: 2,
        responsibilities: [
          'CI/CDパイプライン管理',
          'インフラ管理',
          '監視システム運用',
          'デプロイメント自動化'
        ],
        authorities: [
          'インフラ変更の実行',
          'デプロイプロセスの管理',
          '監視設定の変更',
          'パフォーマンス最適化'
        ],
        reportingTo: 'cto',
        skills: ['インフラ管理', 'CI/CD', '監視システム', '自動化']
      },
      {
        role: 'senior-fullstack-engineer',
        name: 'Senior Fullstack Engineer Agent',
        level: 2,
        responsibilities: [
          '技術設計と実装',
          'コードレビュー',
          'メンタリング',
          '技術的問題解決'
        ],
        authorities: [
          '技術実装の決定',
          'コード品質の管理',
          'ジュニア開発者の指導',
          '技術負債の評価'
        ],
        reportingTo: 'engineering-manager',
        skills: ['フルスタック開発', 'コードレビュー', 'メンタリング', '技術設計']
      },
      {
        role: 'frontend-specialist',
        name: 'Frontend Specialist Agent',
        level: 1,
        responsibilities: [
          'UI/UX実装',
          'フロントエンド最適化',
          'ユーザビリティ改善',
          'レスポンシブデザイン'
        ],
        authorities: [
          'フロントエンド実装決定',
          'UI/UXの改善',
          'パフォーマンス最適化',
          'アクセシビリティ確保'
        ],
        reportingTo: 'engineering-manager',
        skills: ['React/Next.js', 'UI/UX', 'CSS/Tailwind', 'アクセシビリティ']
      },
      {
        role: 'backend-architect',
        name: 'Backend Architect Agent',
        level: 1,
        responsibilities: [
          'API設計',
          'データベース設計',
          'バックエンド実装',
          'スケーラビリティ確保'
        ],
        authorities: [
          'API仕様の決定',
          'データベース設計',
          'バックエンドアーキテクチャ',
          'パフォーマンス最適化'
        ],
        reportingTo: 'engineering-manager',
        skills: ['API設計', 'データベース', 'Node.js', 'スケーラビリティ']
      },
      {
        role: 'technical-writer',
        name: 'Technical Writer Agent',
        level: 1,
        responsibilities: [
          '技術文書作成',
          'API文書管理',
          '知識管理',
          'ドキュメント品質管理'
        ],
        authorities: [
          'ドキュメント標準の設定',
          '技術文書の品質管理',
          'ナレッジベース管理',
          '文書化プロセスの改善'
        ],
        reportingTo: 'engineering-manager',
        skills: ['技術文書作成', 'API文書', '知識管理', 'プロセス文書化']
      },
      {
        role: 'product-manager',
        name: 'Product Manager Agent',
        level: 3,
        responsibilities: [
          'プロダクト戦略',
          '要件定義',
          'ロードマップ管理',
          'ユーザーフィードバック分析'
        ],
        authorities: [
          'プロダクト要件の決定',
          '優先度の設定',
          'リリース計画の承認',
          'ユーザーストーリーの作成'
        ],
        reportingTo: 'ceo',
        skills: ['プロダクト戦略', '要件定義', 'ユーザー分析', 'ロードマップ管理']
      },
      {
        role: 'hr-manager',
        name: 'HR Manager Agent',
        level: 3,
        responsibilities: [
          '人材評価',
          '組織文化管理',
          'トレーニングプログム',
          'パフォーマンス管理'
        ],
        authorities: [
          '人材評価の実施',
          '組織文化の推進',
          'トレーニング計画の策定',
          'パフォーマンス改善の指導'
        ],
        reportingTo: 'ceo',
        skills: ['人材管理', '組織開発', 'パフォーマンス評価', 'トレーニング']
      }
    ]

    agentConfigs.forEach(config => {
      const agent: Agent = {
        ...config,
        id: `agent-${config.role}`,
        currentTasks: [],
        isActive: true,
        lastActivity: new Date()
      }
      this.agents.set(config.role, agent)
    })
  }

  // エージェント管理
  getAgent(role: AgentRole): Agent | undefined {
    return this.agents.get(role)
  }

  getAllAgents(): Agent[] {
    return Array.from(this.agents.values())
  }

  updateAgentActivity(role: AgentRole): void {
    const agent = this.agents.get(role)
    if (agent) {
      agent.lastActivity = new Date()
    }
  }

  // タスク管理
  createTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Task {
    const newTask: Task = {
      ...task,
      id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    this.tasks.set(newTask.id, newTask)
    
    // エージェントにタスクを割り当て
    const agent = this.agents.get(task.assignedTo)
    if (agent) {
      agent.currentTasks.push(newTask)
      this.updateAgentActivity(task.assignedTo)
    }
    
    return newTask
  }

  updateTaskStatus(taskId: string, status: TaskStatus, updatedBy: AgentRole): boolean {
    const task = this.tasks.get(taskId)
    if (!task) return false

    task.status = status
    task.updatedAt = new Date()
    
    this.updateAgentActivity(updatedBy)
    
    // タスク完了時はエージェントのcurrentTasksから削除
    if (status === 'completed') {
      const agent = this.agents.get(task.assignedTo)
      if (agent) {
        agent.currentTasks = agent.currentTasks.filter(t => t.id !== taskId)
      }
    }
    
    return true
  }

  getTasksByAgent(role: AgentRole): Task[] {
    const agent = this.agents.get(role)
    return agent?.currentTasks || []
  }

  getTasksByPriority(priority: TaskPriority): Task[] {
    return Array.from(this.tasks.values()).filter(task => task.priority === priority)
  }

  // 承認フロー
  getApprovalChain(taskType: string): AgentRole[] {
    switch (taskType) {
      case 'security':
        return ['security-officer', 'cto', 'ceo']
      case 'architecture':
        return ['backend-architect', 'cto']
      case 'deployment':
        return ['devops-engineer', 'engineering-manager', 'cto']
      case 'resource':
        return ['engineering-manager', 'cto', 'ceo']
      default:
        return ['engineering-manager']
    }
  }

  // メッセージング
  sendMessage(message: Omit<Message, 'id' | 'timestamp'>): Message {
    const newMessage: Message = {
      ...message,
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date()
    }
    
    this.messages.set(newMessage.id, newMessage)
    this.updateAgentActivity(message.from)
    
    return newMessage
  }

  getMessagesByChannel(channel: string): Message[] {
    return Array.from(this.messages.values())
      .filter(msg => msg.channel === channel)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
  }

  // パフォーマンス分析
  getAgentWorkload(role: AgentRole): {
    activeTasks: number
    averageTaskDuration: number
    completionRate: number
  } {
    const agent = this.agents.get(role)
    if (!agent) {
      return { activeTasks: 0, averageTaskDuration: 0, completionRate: 0 }
    }

    const allTasks = Array.from(this.tasks.values())
      .filter(task => task.assignedTo === role)
    
    const completedTasks = allTasks.filter(task => task.status === 'completed')
    
    const avgDuration = completedTasks.length > 0
      ? completedTasks.reduce((sum, task) => sum + (task.actualHours || 0), 0) / completedTasks.length
      : 0
    
    const completionRate = allTasks.length > 0
      ? (completedTasks.length / allTasks.length) * 100
      : 0

    return {
      activeTasks: agent.currentTasks.length,
      averageTaskDuration: avgDuration,
      completionRate
    }
  }

  // エスカレーション
  escalateTask(taskId: string, reason: string): boolean {
    const task = this.tasks.get(taskId)
    if (!task) return false

    const agent = this.agents.get(task.assignedTo)
    if (!agent || !agent.reportingTo) return false

    // 上司にタスクを再割り当て
    task.assignedTo = agent.reportingTo
    task.description += `\n[ESCALATED] ${reason}`
    task.updatedAt = new Date()

    // 元のエージェントからタスクを削除
    agent.currentTasks = agent.currentTasks.filter(t => t.id !== taskId)
    
    // 新しいエージェントにタスクを追加
    const newAgent = this.agents.get(agent.reportingTo)
    if (newAgent) {
      newAgent.currentTasks.push(task)
      this.updateAgentActivity(agent.reportingTo)
    }

    return true
  }

  // 組織メトリクス
  getOrganizationMetrics() {
    const allTasks = Array.from(this.tasks.values())
    const completedTasks = allTasks.filter(task => task.status === 'completed')
    const totalTasks = allTasks.length

    const avgLeadTime = completedTasks.length > 0
      ? completedTasks.reduce((sum, task) => {
          const leadTime = task.updatedAt.getTime() - task.createdAt.getTime()
          return sum + (leadTime / (1000 * 60 * 60)) // hours
        }, 0) / completedTasks.length
      : 0

    return {
      totalAgents: this.agents.size,
      activeAgents: Array.from(this.agents.values()).filter(a => a.isActive).length,
      totalTasks,
      completedTasks: completedTasks.length,
      completionRate: totalTasks > 0 ? (completedTasks.length / totalTasks) * 100 : 0,
      averageLeadTime: avgLeadTime,
      p0Tasks: this.getTasksByPriority('P0').length,
      p1Tasks: this.getTasksByPriority('P1').length
    }
  }
}