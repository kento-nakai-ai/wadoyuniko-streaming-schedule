import { AgentRole, Message, TaskPriority } from '@/types/agent'

export interface CommunicationChannel {
  id: string
  name: string
  description: string
  participants: AgentRole[]
  isPrivate: boolean
  messageHistory: Message[]
}

export interface NotificationRule {
  id: string
  trigger: 'task_created' | 'task_updated' | 'task_escalated' | 'incident_created' | 'approval_required'
  recipients: AgentRole[]
  channel: string
  priority: TaskPriority
}

export class CommunicationService {
  private channels: Map<string, CommunicationChannel> = new Map()
  private notificationRules: NotificationRule[] = []

  constructor() {
    this.initializeChannels()
    this.initializeNotificationRules()
  }

  private initializeChannels() {
    const channelConfigs: Omit<CommunicationChannel, 'messageHistory'>[] = [
      {
        id: 'team-chat',
        name: 'Team Chat',
        description: '全チーム向けの一般的な議論',
        participants: [
          'ceo', 'cto', 'engineering-manager', 'product-manager', 'hr-manager',
          'security-officer', 'qa-lead', 'devops-engineer', 'senior-fullstack-engineer',
          'frontend-specialist', 'backend-architect', 'technical-writer'
        ],
        isPrivate: false
      },
      {
        id: 'daily-standup',
        name: 'Daily Standup',
        description: '日次進捗報告',
        participants: [
          'engineering-manager', 'senior-fullstack-engineer', 'frontend-specialist',
          'backend-architect', 'qa-lead', 'devops-engineer'
        ],
        isPrivate: false
      },
      {
        id: 'leadership-council',
        name: 'Leadership Council',
        description: '経営陣の戦略議論',
        participants: ['ceo', 'cto', 'product-manager', 'hr-manager'],
        isPrivate: true
      },
      {
        id: 'technical-architecture',
        name: 'Technical Architecture',
        description: '技術アーキテクチャの議論',
        participants: ['cto', 'engineering-manager', 'senior-fullstack-engineer', 'backend-architect', 'security-officer'],
        isPrivate: false
      },
      {
        id: 'security-alerts',
        name: 'Security Alerts',
        description: 'セキュリティインシデントと対応',
        participants: ['security-officer', 'cto', 'ceo', 'devops-engineer'],
        isPrivate: true
      },
      {
        id: 'incidents',
        name: 'Incident Response',
        description: 'インシデント対応チャンネル',
        participants: ['security-officer', 'devops-engineer', 'cto', 'engineering-manager'],
        isPrivate: false
      },
      {
        id: 'pr-discussions',
        name: 'PR Discussions',
        description: 'プルリクエストとコードレビュー',
        participants: [
          'engineering-manager', 'senior-fullstack-engineer', 'frontend-specialist',
          'backend-architect', 'qa-lead', 'security-officer'
        ],
        isPrivate: false
      },
      {
        id: 'product-planning',
        name: 'Product Planning',
        description: 'プロダクト戦略と計画',
        participants: ['product-manager', 'ceo', 'engineering-manager', 'frontend-specialist'],
        isPrivate: false
      },
      {
        id: 'retrospectives',
        name: 'Retrospectives',
        description: '振り返りと改善提案',
        participants: [
          'engineering-manager', 'senior-fullstack-engineer', 'frontend-specialist',
          'backend-architect', 'qa-lead', 'devops-engineer', 'hr-manager'
        ],
        isPrivate: false
      }
    ]

    channelConfigs.forEach(config => {
      const channel: CommunicationChannel = {
        ...config,
        messageHistory: []
      }
      this.channels.set(config.id, channel)
    })
  }

  private initializeNotificationRules() {
    this.notificationRules = [
      {
        id: 'p0-incident-alert',
        trigger: 'incident_created',
        recipients: ['security-officer', 'cto', 'ceo'],
        channel: 'security-alerts',
        priority: 'P0'
      },
      {
        id: 'task-escalation-alert',
        trigger: 'task_escalated',
        recipients: ['engineering-manager', 'cto'],
        channel: 'team-chat',
        priority: 'P1'
      },
      {
        id: 'approval-required-alert',
        trigger: 'approval_required',
        recipients: ['cto', 'engineering-manager'],
        channel: 'technical-architecture',
        priority: 'P2'
      },
      {
        id: 'high-priority-task-alert',
        trigger: 'task_created',
        recipients: ['engineering-manager'],
        channel: 'team-chat',
        priority: 'P1'
      }
    ]
  }

  // チャンネル管理
  getChannel(channelId: string): CommunicationChannel | undefined {
    return this.channels.get(channelId)
  }

  getAllChannels(): CommunicationChannel[] {
    return Array.from(this.channels.values())
  }

  getChannelsForAgent(agentRole: AgentRole): CommunicationChannel[] {
    return Array.from(this.channels.values())
      .filter(channel => channel.participants.includes(agentRole))
  }

  // メッセージ送信
  sendMessage(
    from: AgentRole,
    channelId: string,
    content: string,
    priority: TaskPriority = 'P3',
    taskId?: string
  ): Message | null {
    const channel = this.channels.get(channelId)
    if (!channel) return null

    if (!channel.participants.includes(from)) {
      throw new Error(`Agent ${from} is not authorized to send messages to channel ${channelId}`)
    }

    const message: Message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      from,
      to: channel.participants.filter(p => p !== from),
      channel: channelId,
      content,
      priority,
      timestamp: new Date(),
      taskId
    }

    channel.messageHistory.push(message)
    return message
  }

  // ブロードキャストメッセージ
  broadcastMessage(
    from: AgentRole,
    content: string,
    priority: TaskPriority = 'P3',
    excludeChannels: string[] = []
  ): Message[] {
    const availableChannels = this.getChannelsForAgent(from)
      .filter(channel => !excludeChannels.includes(channel.id))

    const messages: Message[] = []
    
    availableChannels.forEach(channel => {
      const message = this.sendMessage(from, channel.id, content, priority)
      if (message) {
        messages.push(message)
      }
    })

    return messages
  }

  // 直接メッセージ（プライベートチャンネル作成）
  sendDirectMessage(
    from: AgentRole,
    to: AgentRole,
    content: string,
    priority: TaskPriority = 'P3'
  ): Message {
    const dmChannelId = this.getOrCreateDirectMessageChannel(from, to)
    
    const message = this.sendMessage(from, dmChannelId, content, priority)
    if (!message) {
      throw new Error('Failed to send direct message')
    }

    return message
  }

  private getOrCreateDirectMessageChannel(agent1: AgentRole, agent2: AgentRole): string {
    const channelId = `dm-${[agent1, agent2].sort().join('-')}`
    
    if (!this.channels.has(channelId)) {
      const channel: CommunicationChannel = {
        id: channelId,
        name: `Direct Message: ${agent1} ↔ ${agent2}`,
        description: 'Private direct message channel',
        participants: [agent1, agent2],
        isPrivate: true,
        messageHistory: []
      }
      this.channels.set(channelId, channel)
    }

    return channelId
  }

  // 通知システム
  triggerNotification(
    trigger: NotificationRule['trigger'],
    priority: TaskPriority,
    data: {
      taskId?: string
      incidentId?: string
      message: string
      initiatedBy: AgentRole
    }
  ): Message[] {
    const applicableRules = this.notificationRules.filter(rule => 
      rule.trigger === trigger && rule.priority === priority
    )

    const notifications: Message[] = []

    applicableRules.forEach(rule => {
      const notification = this.sendMessage(
        data.initiatedBy,
        rule.channel,
        `[${trigger.toUpperCase()}] ${data.message}`,
        priority,
        data.taskId || data.incidentId
      )
      
      if (notification) {
        notifications.push(notification)
      }
    })

    return notifications
  }

  // メッセージ履歴
  getChannelHistory(channelId: string, limit: number = 50): Message[] {
    const channel = this.channels.get(channelId)
    if (!channel) return []

    return channel.messageHistory
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit)
  }

  // 未読メッセージ（簡易実装）
  getUnreadMessages(agentRole: AgentRole, since: Date): Message[] {
    const unreadMessages: Message[] = []

    this.getChannelsForAgent(agentRole).forEach(channel => {
      const channelUnread = channel.messageHistory.filter(msg => 
        msg.timestamp > since && 
        msg.from !== agentRole &&
        (Array.isArray(msg.to) ? msg.to.includes(agentRole) : msg.to === agentRole)
      )
      unreadMessages.push(...channelUnread)
    })

    return unreadMessages.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
  }

  // メンション検索
  getMessagesMentioning(agentRole: AgentRole, channelId?: string): Message[] {
    const mentionPattern = new RegExp(`@${agentRole}\\b`, 'i')
    let messages: Message[] = []

    if (channelId) {
      const channel = this.channels.get(channelId)
      messages = channel?.messageHistory || []
    } else {
      // 全チャンネルから検索
      this.channels.forEach(channel => {
        messages.push(...channel.messageHistory)
      })
    }

    return messages.filter(msg => mentionPattern.test(msg.content))
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
  }

  // エスカレーション通信
  initiateEscalation(
    taskId: string,
    from: AgentRole,
    to: AgentRole,
    reason: string
  ): Message {
    const message = `タスク ${taskId} をエスカレーションします。\n理由: ${reason}\n@${to} 対応をお願いします。`
    
    // 直接メッセージで通知
    const escalationMessage = this.sendDirectMessage(from, to, message, 'P1')
    
    // チーム全体にも通知（プライバシーに配慮した形で）
    this.sendMessage(
      from,
      'team-chat',
      `タスク ${taskId} がエスカレーションされました。詳細は @${to} にお問い合わせください。`,
      'P2',
      taskId
    )

    // 通知ルールも実行
    this.triggerNotification('task_escalated', 'P1', {
      taskId,
      message: `Task ${taskId} escalated from ${from} to ${to}: ${reason}`,
      initiatedBy: from
    })

    return escalationMessage
  }

  // 承認フロー通信
  requestApproval(
    taskId: string,
    requester: AgentRole,
    approvers: AgentRole[],
    description: string
  ): Message[] {
    const messages: Message[] = []

    approvers.forEach(approver => {
      const message = this.sendDirectMessage(
        requester,
        approver,
        `承認をお願いします:\nタスク: ${taskId}\n内容: ${description}\n\n承認の場合は「APPROVE ${taskId}」\n却下の場合は「REJECT ${taskId} [理由]」と返信してください。`,
        'P2'
      )
      messages.push(message)
    })

    return messages
  }

  // 統計情報
  getChannelStats(channelId: string) {
    const channel = this.channels.get(channelId)
    if (!channel) return null

    const messages = channel.messageHistory
    const messagesByAgent = new Map<AgentRole, number>()
    
    messages.forEach(msg => {
      messagesByAgent.set(msg.from, (messagesByAgent.get(msg.from) || 0) + 1)
    })

    const priorityDistribution = {
      P0: messages.filter(m => m.priority === 'P0').length,
      P1: messages.filter(m => m.priority === 'P1').length,
      P2: messages.filter(m => m.priority === 'P2').length,
      P3: messages.filter(m => m.priority === 'P3').length
    }

    return {
      totalMessages: messages.length,
      activeParticipants: messagesByAgent.size,
      messagesByAgent: Object.fromEntries(messagesByAgent),
      priorityDistribution,
      averageMessagesPerDay: this.calculateAverageMessagesPerDay(messages),
      lastActivity: messages.length > 0 ? Math.max(...messages.map(m => m.timestamp.getTime())) : null
    }
  }

  private calculateAverageMessagesPerDay(messages: Message[]): number {
    if (messages.length === 0) return 0

    const sortedMessages = messages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
    const firstMessage = sortedMessages[0].timestamp
    const lastMessage = sortedMessages[sortedMessages.length - 1].timestamp
    
    const daysDiff = Math.ceil((lastMessage.getTime() - firstMessage.getTime()) / (1000 * 60 * 60 * 24))
    return daysDiff > 0 ? messages.length / daysDiff : messages.length
  }
}