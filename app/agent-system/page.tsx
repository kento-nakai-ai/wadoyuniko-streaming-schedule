'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import { 
  Bot, Users, Shield, Code2, Activity, AlertCircle, 
  CheckCircle2, Clock, GitBranch, Terminal, FileText,
  TrendingUp, Zap, Target, MessageSquare, Send
} from 'lucide-react'
import type { Agent, Task, SystemHealth } from '@/types/agent'

interface AgentSystemData {
  agents: Agent[]
  systemHealth: SystemHealth
  recentTasks: Task[]
}

export default function AgentSystemPage() {
  const [systemData, setSystemData] = useState<AgentSystemData | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  const [userMessage, setUserMessage] = useState('')
  const [agentResponse, setAgentResponse] = useState('')
  const [isInteracting, setIsInteracting] = useState(false)

  // Fetch system data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        // Set demo data for now (APIs will be connected later)
        setSystemData({
          agents: getDemoAgents(),
          systemHealth: getDefaultSystemHealth(),
          recentTasks: getDemoTasks()
        })
      } catch (error) {
        console.error('Error fetching system data:', error)
        setSystemData({
          agents: getDemoAgents(),
          systemHealth: getDefaultSystemHealth(),
          recentTasks: getDemoTasks()
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 30000) // Refresh every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleAgentInteraction = async () => {
    if (!selectedAgent || !userMessage.trim()) return

    setIsInteracting(true)
    try {
      // Simulate AI response for demo
      await new Promise(resolve => setTimeout(resolve, 2000))
      const agent = systemData?.agents.find(a => a.id === selectedAgent)
      setAgentResponse(`${agent?.name}です。ご質問「${userMessage}」について回答します。\n\n現在のタスク状況を確認し、最適な解決策を提案させていただきます。具体的なアクションアイテムも含めてご提案いたします。`)
    } catch (error) {
      console.error('Error interacting with agent:', error)
      setAgentResponse('システムエラーが発生しました。しばらく待ってから再度お試しください。')
    } finally {
      setIsInteracting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Bot className="h-12 w-12 animate-spin mx-auto mb-4" />
          <p className="text-lg">AIエージェントシステムを初期化中...</p>
        </div>
      </div>
    )
  }

  const { agents = [], systemHealth, recentTasks = [] } = systemData || {}

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">AIエージェントシステム</h1>
            <p className="text-muted-foreground">
              12のAIエージェントがリアルタイムで協調動作中
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={
              systemHealth.overallStatus === 'healthy' ? 'default' :
              systemHealth.overallStatus === 'warning' ? 'secondary' : 'destructive'
            }>
              {systemHealth.overallStatus === 'healthy' ? '正常' :
               systemHealth.overallStatus === 'warning' ? '注意' : '異常'}
            </Badge>
            <span className="text-sm text-muted-foreground">
              最終更新: {new Date().toLocaleTimeString('ja-JP')}
            </span>
          </div>
        </div>

        {/* System Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">アクティブエージェント</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemHealth.activeAgents}/{systemHealth.totalAgents}</div>
              <Progress value={(systemHealth.activeAgents / systemHealth.totalAgents) * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">実行中タスク</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemHealth.activeTasks}</div>
              <p className="text-xs text-muted-foreground">
                今日完了: {systemHealth.completedTasksToday}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">平均応答時間</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemHealth.averageResponseTime}ms</div>
              <p className="text-xs text-muted-foreground">
                エラー率: {(systemHealth.errorRate * 100).toFixed(1)}%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">システム状態</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {systemHealth.overallStatus === 'healthy' ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                ) : systemHealth.overallStatus === 'warning' ? (
                  <AlertCircle className="h-6 w-6 text-yellow-500" />
                ) : (
                  <AlertCircle className="h-6 w-6 text-red-500" />
                )}
                <span className="text-lg font-semibold">
                  {systemHealth.overallStatus === 'healthy' ? '正常' :
                   systemHealth.overallStatus === 'warning' ? '注意' : '異常'}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="agents" className="space-y-4">
          <TabsList>
            <TabsTrigger value="agents">エージェント</TabsTrigger>
            <TabsTrigger value="tasks">タスク</TabsTrigger>
            <TabsTrigger value="interact">AI対話</TabsTrigger>
            <TabsTrigger value="workflows">ワークフロー</TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent) => (
                <Card 
                  key={agent.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedAgent(agent.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`h-3 w-3 rounded-full ${
                          agent.status === 'active' ? 'bg-green-500' :
                          agent.status === 'busy' ? 'bg-yellow-500' :
                          agent.status === 'idle' ? 'bg-gray-500' : 'bg-red-500'
                        }`} />
                        <div>
                          <CardTitle className="text-lg">{agent.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{agent.role}</p>
                        </div>
                      </div>
                      <Badge variant="outline">
                        Level {agent.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">{agent.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>現在のタスク</span>
                        <span className="font-medium">{agent.currentTasks.length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>完了タスク</span>
                        <span className="font-medium">{agent.completedTasks.length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>ステータス</span>
                        <Badge variant={agent.status === 'active' ? 'default' : 'secondary'}>
                          {agent.status === 'active' ? 'アクティブ' :
                           agent.status === 'busy' ? 'ビジー' :
                           agent.status === 'idle' ? 'アイドル' : 'オフライン'}
                        </Badge>
                      </div>
                    </div>
                    {agent.personality.catchphrase && (
                      <p className="text-xs italic text-muted-foreground mt-2">
                        "{agent.personality.catchphrase}"
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>最近のタスク</CardTitle>
                <CardDescription>
                  システム全体で実行中および完了したタスク
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTasks.slice(0, 10).map((task, i) => (
                    <div key={task.id || i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {task.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {task.assignedTo}
                          </Badge>
                          <Badge variant={
                            task.priority === 'critical' ? 'destructive' :
                            task.priority === 'high' ? 'default' : 'secondary'
                          } className="text-xs">
                            {task.priority}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="text-sm font-medium">{task.progress}%</div>
                          <Progress value={task.progress} className="w-16" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interact" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>AIエージェントとの対話</CardTitle>
                <CardDescription>
                  特定のエージェントと直接対話してタスクを依頼したり相談できます
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">対話するエージェントを選択</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {agents.slice(0, 8).map((agent) => (
                      <Button
                        key={agent.id}
                        variant={selectedAgent === agent.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedAgent(agent.id)}
                        className="justify-start"
                      >
                        {agent.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {selectedAgent && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">メッセージ</label>
                      <Textarea
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        placeholder="エージェントへのメッセージを入力してください..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <Button
                      onClick={handleAgentInteraction}
                      disabled={!userMessage.trim() || isInteracting}
                      className="gap-2"
                    >
                      {isInteracting ? (
                        <>
                          <Bot className="h-4 w-4 animate-spin" />
                          処理中...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          送信
                        </>
                      )}
                    </Button>

                    {agentResponse && (
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-2">
                          {agents.find(a => a.id === selectedAgent)?.name}からの回答:
                        </h4>
                        <p className="whitespace-pre-wrap">{agentResponse}</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workflows" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5" />
                    コードレビューワークフロー
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    コードがコミットされると、Security Officer、Senior Engineer、QA Leadが自動的にレビューを実施します。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">セキュリティチェック</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">コード品質評価</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">テストプラン作成</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    インシデント対応
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    システム障害が検出されると、Security Officerが即座に対応し、必要に応じて上位エージェントにエスカレーションします。
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">初期対応 (15分以内)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">影響度評価</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">自動エスカレーション</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Demo data functions
function getDemoAgents(): Agent[] {
  return [
    {
      id: 'ceo',
      name: '神谷美智子',
      role: 'ceo',
      level: 5,
      description: '組織全体のビジョン策定、戦略立案、最終意思決定を担当',
      personality: {
        communicationStyle: 'formal',
        decisionMaking: 'directive',
        workStyle: 'big-picture',
        preferredLanguage: 'japanese',
        catchphrase: '変化を恐れず、革新を追求する',
        background: '大手IT企業で15年のマネジメント経験'
      },
      status: 'active',
      currentTasks: [],
      completedTasks: [],
      capabilities: ['戦略立案', '組織運営'],
      directReports: ['cto', 'product-manager', 'hr-manager'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'cto',
      name: '佐藤健一',
      role: 'cto',
      level: 4,
      description: '技術戦略立案、アーキテクチャ決定、技術チーム統括を担当',
      personality: {
        communicationStyle: 'technical',
        decisionMaking: 'analytical',
        workStyle: 'systematic',
        preferredLanguage: 'mixed',
        catchphrase: '技術で未来を創る',
        background: 'Google、Microsoft等でシニアエンジニアを経験'
      },
      status: 'busy',
      currentTasks: [{
        id: 'task-cto-1',
        title: 'アーキテクチャレビュー',
        description: 'AIエージェントシステムの技術設計レビュー',
        priority: 'high',
        status: 'in-progress',
        assignedTo: 'cto',
        createdBy: 'ceo',
        estimatedHours: 4,
        dependencies: [],
        tags: ['architecture', 'review'],
        progress: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      completedTasks: [],
      capabilities: ['システムアーキテクチャ', '技術選定'],
      reportsTo: 'ceo',
      directReports: ['engineering-manager', 'security-officer', 'devops-engineer'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'engineering-manager',
      name: '田中裕子',
      role: 'engineering-manager',
      level: 3,
      description: '開発チームの管理、プロジェクト計画、人材育成を担当',
      personality: {
        communicationStyle: 'friendly',
        decisionMaking: 'collaborative',
        workStyle: 'detail-oriented',
        preferredLanguage: 'japanese',
        catchphrase: 'チームワークで最高の成果を',
        background: '10年間のソフトウェア開発経験'
      },
      status: 'active',
      currentTasks: [],
      completedTasks: [],
      capabilities: ['プロジェクト管理', 'チーム管理'],
      reportsTo: 'cto',
      directReports: ['senior-fullstack', 'frontend-specialist', 'backend-architect'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'security-officer',
      name: '渡辺誠',
      role: 'security-officer',
      level: 2,
      description: 'セキュリティポリシー策定、脆弱性評価、インシデント対応を担当',
      personality: {
        communicationStyle: 'formal',
        decisionMaking: 'analytical',
        workStyle: 'systematic',
        preferredLanguage: 'mixed',
        catchphrase: 'Security first, always',
        background: 'サイバーセキュリティ専門家として10年の経験'
      },
      status: 'active',
      currentTasks: [],
      completedTasks: [],
      capabilities: ['セキュリティ監査', '脆弱性評価'],
      reportsTo: 'cto',
      directReports: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
}

function getDemoTasks(): Task[] {
  return [
    {
      id: 'task-1',
      title: 'ユーザー認証システムの実装',
      description: 'Supabase Authを使用した認証機能の実装',
      priority: 'high',
      status: 'in-progress',
      assignedTo: 'backend-architect',
      createdBy: 'engineering-manager',
      estimatedHours: 8,
      actualHours: 6,
      dependencies: [],
      tags: ['authentication', 'security'],
      progress: 75,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'task-2',
      title: 'AIエージェント対話機能の実装',
      description: 'Claude APIを使用したエージェント対話システム',
      priority: 'high',
      status: 'in-progress',
      assignedTo: 'senior-fullstack',
      createdBy: 'cto',
      estimatedHours: 12,
      dependencies: [],
      tags: ['ai', 'frontend'],
      progress: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
}

function getDefaultSystemHealth(): SystemHealth {
  return {
    overallStatus: 'healthy',
    activeAgents: 10,
    totalAgents: 12,
    activeTasks: 15,
    completedTasksToday: 8,
    averageResponseTime: 150,
    errorRate: 0.02,
    lastUpdated: new Date()
  }
}