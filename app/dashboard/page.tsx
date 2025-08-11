'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  Bot, Users, Shield, Code2, Activity, AlertCircle, 
  CheckCircle2, Clock, GitBranch, Terminal, FileText,
  TrendingUp, Zap, Target, MessageSquare
} from 'lucide-react'

// AI Agents configuration
const agents = [
  { id: 'ceo', name: 'CEO', status: 'active', level: 5, tasks: 2, color: 'bg-purple-500' },
  { id: 'cto', name: 'CTO', status: 'active', level: 4, tasks: 5, color: 'bg-blue-500' },
  { id: 'eng-mgr', name: 'Engineering Manager', status: 'active', level: 3, tasks: 8, color: 'bg-green-500' },
  { id: 'security', name: 'Security Officer', status: 'active', level: 2, tasks: 3, color: 'bg-red-500' },
  { id: 'qa', name: 'QA Lead', status: 'active', level: 2, tasks: 6, color: 'bg-yellow-500' },
  { id: 'fullstack', name: 'Senior Fullstack', status: 'busy', level: 2, tasks: 12, color: 'bg-indigo-500' },
  { id: 'frontend', name: 'Frontend Specialist', status: 'active', level: 1, tasks: 4, color: 'bg-pink-500' },
  { id: 'backend', name: 'Backend Architect', status: 'active', level: 1, tasks: 7, color: 'bg-teal-500' },
  { id: 'devops', name: 'DevOps Engineer', status: 'idle', level: 2, tasks: 1, color: 'bg-gray-500' },
  { id: 'writer', name: 'Technical Writer', status: 'active', level: 1, tasks: 3, color: 'bg-amber-500' },
  { id: 'product', name: 'Product Manager', status: 'active', level: 3, tasks: 5, color: 'bg-cyan-500' },
  { id: 'hr', name: 'HR Manager', status: 'idle', level: 3, tasks: 0, color: 'bg-orange-500' },
]

// Sample metrics data
const metrics = {
  codeQuality: 92,
  testCoverage: 87,
  deploymentFreq: 12,
  mttr: 25,
  bugRate: 3,
  velocity: 85,
}

// Sample activity log
const activities = [
  { id: 1, agent: 'Security Officer', action: 'セキュリティスキャン完了', time: '5分前', type: 'security' },
  { id: 2, agent: 'QA Lead', action: 'テストスイート実行', time: '10分前', type: 'test' },
  { id: 3, agent: 'CTO', action: 'アーキテクチャレビュー承認', time: '15分前', type: 'review' },
  { id: 4, agent: 'Backend Architect', action: 'API設計更新', time: '30分前', type: 'code' },
  { id: 5, agent: 'Frontend Specialist', action: 'UIコンポーネント実装', time: '45分前', type: 'code' },
]

export default function DashboardPage() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">AI組織ダッシュボード</h1>
            <p className="text-muted-foreground">12のAIエージェントが協調して動作中</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Terminal className="h-4 w-4" />
              コマンド実行
            </Button>
            <Button className="gap-2">
              <MessageSquare className="h-4 w-4" />
              チャット開始
            </Button>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">コード品質</CardTitle>
              <Code2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.codeQuality}%</div>
              <Progress value={metrics.codeQuality} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">テストカバレッジ</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.testCoverage}%</div>
              <Progress value={metrics.testCoverage} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">デプロイ頻度</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.deploymentFreq}</div>
              <p className="text-xs text-muted-foreground">今週のデプロイ回数</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">MTTR</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.mttr}分</div>
              <p className="text-xs text-muted-foreground">平均復旧時間</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="agents" className="space-y-4">
          <TabsList>
            <TabsTrigger value="agents">エージェント</TabsTrigger>
            <TabsTrigger value="activity">アクティビティ</TabsTrigger>
            <TabsTrigger value="tasks">タスク</TabsTrigger>
            <TabsTrigger value="metrics">メトリクス</TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent) => (
                <Card 
                  key={agent.id}
                  className={`cursor-pointer transition-shadow hover:shadow-lg ${
                    selectedAgent === agent.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedAgent(agent.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`h-3 w-3 rounded-full ${agent.color}`} />
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                      </div>
                      <Badge variant={
                        agent.status === 'active' ? 'default' :
                        agent.status === 'busy' ? 'secondary' : 'outline'
                      }>
                        {agent.status === 'active' ? 'アクティブ' :
                         agent.status === 'busy' ? 'ビジー' : 'アイドル'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">レベル {agent.level}</span>
                      <span className="font-medium">{agent.tasks} タスク</span>
                    </div>
                    <Progress value={(agent.tasks / 15) * 100} className="mt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>最近のアクティビティ</CardTitle>
                <CardDescription>エージェントの活動ログ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`rounded-full p-2 ${
                          activity.type === 'security' ? 'bg-red-100 text-red-600' :
                          activity.type === 'test' ? 'bg-yellow-100 text-yellow-600' :
                          activity.type === 'review' ? 'bg-blue-100 text-blue-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {activity.type === 'security' ? <Shield className="h-4 w-4" /> :
                           activity.type === 'test' ? <CheckCircle2 className="h-4 w-4" /> :
                           activity.type === 'review' ? <GitBranch className="h-4 w-4" /> :
                           <Code2 className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="font-medium">{activity.agent}</p>
                          <p className="text-sm text-muted-foreground">{activity.action}</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>実行中のタスク</CardTitle>
                <CardDescription>現在進行中のタスクと進捗状況</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">認証システム実装</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">APIテスト作成</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">セキュリティ監査</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">ドキュメント更新</span>
                      <span className="text-sm text-muted-foreground">30%</span>
                    </div>
                    <Progress value={30} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>パフォーマンス指標</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">開発速度</span>
                    <div className="flex items-center gap-2">
                      <Progress value={metrics.velocity} className="w-24" />
                      <span className="text-sm font-medium">{metrics.velocity}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">バグ率</span>
                    <div className="flex items-center gap-2">
                      <Progress value={metrics.bugRate * 10} className="w-24" />
                      <span className="text-sm font-medium">{metrics.bugRate}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>チーム統計</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>アクティブエージェント</span>
                    <span className="font-medium">10 / 12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>完了タスク（今日）</span>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>保留中タスク</span>
                    <span className="font-medium">47</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>レビュー待ち</span>
                    <span className="font-medium">8</span>
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