// AIエージェントシステムの型定義

export type AgentRole = 
  | 'ceo'
  | 'cto'
  | 'engineering-manager'
  | 'security-officer'
  | 'qa-lead'
  | 'devops-engineer'
  | 'senior-fullstack-engineer'
  | 'frontend-specialist'
  | 'backend-architect'
  | 'technical-writer'
  | 'product-manager'
  | 'hr-manager';

export type AgentLevel = 1 | 2 | 3 | 4 | 5;

export type TaskPriority = 'P0' | 'P1' | 'P2' | 'P3';

export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'blocked';

export interface Agent {
  id: string;
  role: AgentRole;
  name: string;
  level: AgentLevel;
  responsibilities: string[];
  authorities: string[];
  reportingTo?: AgentRole;
  directReports?: AgentRole[];
  skills: string[];
  currentTasks: Task[];
  isActive: boolean;
  lastActivity: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: AgentRole;
  createdBy: AgentRole;
  priority: TaskPriority;
  status: TaskStatus;
  estimatedHours?: number;
  actualHours?: number;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  dependencies?: string[];
  tags: string[];
  approvals?: Approval[];
}

export interface Approval {
  approver: AgentRole;
  approved: boolean;
  timestamp: Date;
  comment?: string;
}

export interface Message {
  id: string;
  from: AgentRole;
  to: AgentRole | AgentRole[];
  channel: string;
  content: string;
  timestamp: Date;
  priority: TaskPriority;
  taskId?: string;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
}

export interface DailyStandup {
  id: string;
  agent: AgentRole;
  date: string;
  completedTasks: string[];
  plannedTasks: string[];
  blockers: string[];
  metrics: Record<string, number>;
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: 'detected' | 'investigating' | 'mitigating' | 'resolved' | 'postmortem';
  assignedTo: AgentRole;
  reportedBy: AgentRole;
  affectedSystems: string[];
  timeline: IncidentTimelineEntry[];
  createdAt: Date;
  resolvedAt?: Date;
}

export interface IncidentTimelineEntry {
  id: string;
  timestamp: Date;
  agent: AgentRole;
  action: string;
  description: string;
}

export interface OrganizationMetrics {
  codeQualityScore: number;
  testCoverage: number;
  bugEscapeRate: number;
  meanTimeToRecovery: number;
  deploymentFrequency: number;
  leadTimeForChanges: number;
  teamSatisfactionScore: number;
  knowledgeSharingIndex: number;
}