// AI Agent System Types

export interface Agent {
  id: string
  name: string
  role: AgentRole
  level: number
  description: string
  personality: AgentPersonality
  status: AgentStatus
  currentTasks: Task[]
  completedTasks: Task[]
  capabilities: string[]
  reportsTo?: string
  directReports: string[]
  createdAt: Date
  updatedAt: Date
}

export type AgentRole = 
  | 'ceo'
  | 'cto' 
  | 'engineering-manager'
  | 'senior-fullstack'
  | 'frontend-specialist'
  | 'backend-architect'
  | 'qa-lead'
  | 'security-officer'
  | 'devops-engineer'
  | 'technical-writer'
  | 'product-manager'
  | 'hr-manager'

export type AgentStatus = 
  | 'active'
  | 'busy'
  | 'idle'
  | 'offline'
  | 'error'

export interface AgentPersonality {
  communicationStyle: 'formal' | 'casual' | 'technical' | 'friendly'
  decisionMaking: 'analytical' | 'intuitive' | 'collaborative' | 'directive'
  workStyle: 'detail-oriented' | 'big-picture' | 'innovative' | 'systematic'
  preferredLanguage: 'japanese' | 'english' | 'mixed'
  catchphrase?: string
  background: string
}

export interface Task {
  id: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  status: 'pending' | 'in-progress' | 'completed' | 'blocked' | 'cancelled'
  assignedTo: string
  createdBy: string
  estimatedHours: number
  actualHours?: number
  dueDate?: Date
  dependencies: string[]
  tags: string[]
  progress: number // 0-100
  createdAt: Date
  updatedAt: Date
}

export interface AgentMessage {
  id: string
  fromAgent: string
  toAgent: string | 'all'
  type: MessageType
  content: string
  metadata?: Record<string, any>
  timestamp: Date
  isRead: boolean
}

export type MessageType =
  | 'task-assignment'
  | 'status-update'
  | 'question'
  | 'decision-request'
  | 'code-review'
  | 'meeting-request'
  | 'alert'
  | 'general'

export interface AgentMetrics {
  agentId: string
  tasksCompleted: number
  averageTaskTime: number
  qualityScore: number
  collaborationScore: number
  innovationScore: number
  period: {
    start: Date
    end: Date
  }
}

export interface WorkflowStep {
  id: string
  name: string
  description: string
  assignedRole: AgentRole
  requiredApprovals: AgentRole[]
  automationLevel: 'manual' | 'semi-automatic' | 'automatic'
  estimatedDuration: number
  dependencies: string[]
}

export interface Workflow {
  id: string
  name: string
  description: string
  triggerConditions: string[]
  steps: WorkflowStep[]
  isActive: boolean
  createdAt: Date
}

export interface AgentCapability {
  name: string
  description: string
  skillLevel: 1 | 2 | 3 | 4 | 5
  category: 'technical' | 'management' | 'communication' | 'analysis' | 'creative'
}

export interface Decision {
  id: string
  title: string
  description: string
  options: DecisionOption[]
  decidedBy: string
  decidedAt?: Date
  reasoning?: string
  impact: 'low' | 'medium' | 'high' | 'critical'
  stakeholders: string[]
  status: 'pending' | 'decided' | 'implemented' | 'cancelled'
}

export interface DecisionOption {
  id: string
  title: string
  description: string
  pros: string[]
  cons: string[]
  estimatedCost: number
  estimatedTime: number
  riskLevel: 'low' | 'medium' | 'high'
}

export interface AgentLearning {
  agentId: string
  experienceType: 'success' | 'failure' | 'feedback' | 'observation'
  description: string
  keyTakeaways: string[]
  actionItems: string[]
  confidence: number // 0-1
  timestamp: Date
}

export interface SystemHealth {
  overallStatus: 'healthy' | 'warning' | 'critical'
  activeAgents: number
  totalAgents: number
  activeTasks: number
  completedTasksToday: number
  averageResponseTime: number
  errorRate: number
  lastUpdated: Date
}