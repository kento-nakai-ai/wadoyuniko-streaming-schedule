'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Calendar, 
  Target, 
  TrendingUp, 
  Briefcase, 
  Code,
  MessageSquare,
  FileText,
  Video,
  Megaphone,
  Monitor,
  Camera,
  Crown,
  Star,
  Zap,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

// Team member data
const teamMembers = [
  {
    name: '中井健登',
    role: 'プロジェクトマネージャー・CTO',
    avatar: '👨‍💼',
    status: 'active',
    responsibilities: ['プロジェクト統括', 'AI技術責任者', 'チーム調整'],
    currentTasks: ['ローンチ準備最終調整', 'セミナー構成確認', 'システム監視'],
    expertise: ['AI開発', 'プロジェクト管理', '技術戦略'],
    workload: 95
  },
  {
    name: 'わど',
    role: 'AI界隈マスコット・SNS責任者',
    avatar: '🐕',
    status: 'active',
    responsibilities: ['X(Twitter)運営', 'コミュニティ管理', 'バイラル施策'],
    currentTasks: ['セミナー集客投稿', 'フォロワー増加施策', 'エンゲージメント最適化'],
    expertise: ['SNSマーケティング', 'コミュニティ運営', 'バイラル戦略'],
    workload: 88
  },
  {
    name: 'ゆき',
    role: 'コンテンツ制作・映像担当',
    avatar: '🎬',
    status: 'active',
    responsibilities: ['動画制作', 'スライド作成', 'ビジュアル素材'],
    currentTasks: ['セミナー最終スライド', 'プロモーション動画', 'ローンチ映像'],
    expertise: ['映像制作', 'デザイン', 'プレゼン資料'],
    workload: 82
  },
  {
    name: 'ちょこ',
    role: 'コンテンツ制作・ライティング',
    avatar: '✍️',
    status: 'active',
    responsibilities: ['記事執筆', 'コピーライティング', 'コンテンツ企画'],
    currentTasks: ['セールス資料更新', 'FAQ作成', 'ローンチコンテンツ'],
    expertise: ['ライティング', 'コンテンツ企画', 'マーケティング'],
    workload: 78
  },
  {
    name: 'こばやし ゆうた',
    role: 'コンテンツ制作・技術サポート',
    avatar: '🛠️',
    status: 'active',
    responsibilities: ['技術記事', 'サポート資料', 'チュートリアル'],
    currentTasks: ['技術ドキュメント', 'サポート体制', 'Q&A準備'],
    expertise: ['技術ライティング', 'サポート', 'ドキュメント'],
    workload: 75
  },
  {
    name: '中上裕三',
    role: 'セミナー実行・営業リーダー',
    avatar: '🎯',
    status: 'active',
    responsibilities: ['セミナー運営', '営業戦略', 'クロージング'],
    currentTasks: ['セミナー最終準備', '営業スクリプト', 'チーム指導'],
    expertise: ['セミナー運営', '営業', 'クロージング'],
    workload: 92
  },
  {
    name: 'Yui Mitsui',
    role: 'セミナー実行・カスタマーサクセス',
    avatar: '🌟',
    status: 'active',
    responsibilities: ['参加者対応', 'カスタマーケア', '満足度向上'],
    currentTasks: ['参加者フォロー', 'アフターケア', '満足度調査'],
    expertise: ['カスタマーサクセス', '顧客対応', 'ホスピタリティ'],
    workload: 85
  },
  {
    name: 'ユニコーン社',
    role: 'パートナー・コンテンツ提供',
    avatar: '🦄',
    status: 'partner',
    responsibilities: ['コンテンツ提供', 'Discord運営', '技術サポート'],
    currentTasks: ['最終コンテンツ納品', 'Discord準備', 'サポート体制'],
    expertise: ['技術コンテンツ', 'コミュニティ', 'プラットフォーム'],
    workload: 70
  }
];

const projectKPIs = [
  {
    metric: '売上目標',
    current: '2,850万円',
    target: '3,000万円',
    progress: 95,
    status: 'good',
    trend: 'up'
  },
  {
    metric: '参加者数',
    current: '89名',
    target: '100名',
    progress: 89,
    status: 'good',
    trend: 'up'
  },
  {
    metric: 'コンバージョン率',
    current: '24.5%',
    target: '25%',
    progress: 98,
    status: 'excellent',
    trend: 'up'
  },
  {
    metric: 'タスク完了率',
    current: '87%',
    target: '90%',
    progress: 97,
    status: 'good',
    trend: 'stable'
  }
];

const urgentTasks = [
  {
    task: 'セミナー最終リハーサル',
    assignee: '中上裕三',
    deadline: '8月28日',
    priority: 'high',
    status: 'in_progress'
  },
  {
    task: 'プロモーション動画完成',
    assignee: 'ゆき',
    deadline: '8月27日',
    priority: 'high',
    status: 'in_progress'
  },
  {
    task: 'Discord環境設定',
    assignee: 'ユニコーン社',
    deadline: '8月26日',
    priority: 'medium',
    status: 'pending'
  },
  {
    task: 'FAQ最終更新',
    assignee: 'ちょこ',
    deadline: '8月25日',
    priority: 'medium',
    status: 'completed'
  },
  {
    task: 'システム負荷テスト',
    assignee: '中井健登',
    deadline: '8月29日',
    priority: 'high',
    status: 'completed'
  }
];

const teamAreas = [
  {
    name: 'プロジェクト管理',
    icon: Target,
    members: ['中井健登'],
    description: 'プロジェクト全体の統括・進捗管理・リスク対応',
    color: 'blue'
  },
  {
    name: 'コンテンツ制作',
    icon: Video,
    members: ['ゆき', 'ちょこ', 'こばやし ゆうた'],
    description: '動画・記事・スライド・資料の制作',
    color: 'purple'
  },
  {
    name: 'マーケティング',
    icon: Megaphone,
    members: ['わど'],
    description: 'SNS運営・コミュニティ管理・バイラル施策',
    color: 'orange'
  },
  {
    name: 'セールス実行',
    icon: Briefcase,
    members: ['中上裕三', 'Yui Mitsui'],
    description: 'セミナー運営・営業・顧客対応',
    color: 'green'
  },
  {
    name: 'パートナー',
    icon: Users,
    members: ['ユニコーン社'],
    description: 'コンテンツ提供・技術サポート・プラットフォーム',
    color: 'pink'
  }
];

export default function TeamOverviewPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in_progress': return <Clock className="h-4 w-4 text-blue-500" />;
      case 'pending': return <AlertCircle className="h-4 w-4 text-orange-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              チーム総合ダッシュボード
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            バイブコーディングプロジェクト • 全チーム情報 • リアルタイム進捗
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge className="bg-blue-600 text-white">8名のチーム</Badge>
            <Badge variant="outline">ローンチまで15日</Badge>
            <Badge className="bg-green-600 text-white">進捗順調</Badge>
          </div>
        </div>

        {/* KPIダッシュボード */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {projectKPIs.map((kpi, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">{kpi.metric}</span>
                  <TrendingUp className={`h-4 w-4 ${kpi.trend === 'up' ? 'text-green-500' : 'text-gray-400'}`} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">{kpi.current}</span>
                    <span className="text-sm text-gray-500">/ {kpi.target}</span>
                  </div>
                  <Progress value={kpi.progress} className="h-2" />
                  <span className="text-xs text-gray-500">{kpi.progress}% 達成</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">チーム概要</TabsTrigger>
            <TabsTrigger value="members">メンバー詳細</TabsTrigger>
            <TabsTrigger value="tasks">タスク状況</TabsTrigger>
            <TabsTrigger value="areas">担当エリア</TabsTrigger>
          </TabsList>

          {/* チーム概要 */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* チームサマリー */}
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    チームサマリー
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">8</div>
                      <div className="text-sm text-blue-600">チームメンバー</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">5</div>
                      <div className="text-sm text-green-600">担当エリア</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">85%</div>
                      <div className="text-sm text-purple-600">平均稼働率</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">15</div>
                      <div className="text-sm text-orange-600">残り日数</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 直近の重要タスク */}
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-red-500" />
                    重要タスク（今週）
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {urgentTasks.slice(0, 4).map((task, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(task.status)}
                        <div>
                          <div className="font-medium text-sm">{task.task}</div>
                          <div className="text-xs text-gray-500">{task.assignee} • {task.deadline}</div>
                        </div>
                      </div>
                      <Badge variant={getPriorityColor(task.priority)}>
                        {task.priority === 'high' ? '高' : task.priority === 'medium' ? '中' : '低'}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* メンバー詳細 */}
          <TabsContent value="members" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{member.avatar}</div>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={member.status === 'active' ? 'default' : 'secondary'}
                        className="flex items-center gap-1"
                      >
                        {member.status === 'active' ? (
                          <>
                            <Zap className="h-3 w-3" />
                            アクティブ
                          </>
                        ) : (
                          <>
                            <Users className="h-3 w-3" />
                            パートナー
                          </>
                        )}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 稼働率 */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>稼働率</span>
                        <span>{member.workload}%</span>
                      </div>
                      <Progress value={member.workload} className="h-2" />
                    </div>

                    {/* 担当領域 */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">担当領域</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.responsibilities.map((resp, respIndex) => (
                          <Badge key={respIndex} variant="outline" className="text-xs">
                            {resp}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* 現在のタスク */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">現在のタスク</h4>
                      <ul className="space-y-1">
                        {member.currentTasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="text-xs text-gray-600 flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 専門分野 */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">専門分野</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* タスク状況 */}
          <TabsContent value="tasks" className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  重要タスク一覧
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {urgentTasks.map((task, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        {getStatusIcon(task.status)}
                        <div>
                          <h4 className="font-medium">{task.task}</h4>
                          <p className="text-sm text-gray-600">担当: {task.assignee} | 期限: {task.deadline}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getPriorityColor(task.priority)}>
                          {task.priority === 'high' ? '高優先度' : task.priority === 'medium' ? '中優先度' : '低優先度'}
                        </Badge>
                        <Badge variant={task.status === 'completed' ? 'default' : 'outline'}>
                          {task.status === 'completed' ? '完了' : task.status === 'in_progress' ? '進行中' : '待機'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 担当エリア */}
          <TabsContent value="areas" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-${area.color}-100 rounded-lg`}>
                          <IconComponent className={`h-5 w-5 text-${area.color}-600`} />
                        </div>
                        <CardTitle className="text-lg">{area.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600">{area.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">担当メンバー</h4>
                        <div className="space-y-2">
                          {area.members.map((memberName, memberIndex) => {
                            const member = teamMembers.find(m => m.name === memberName);
                            return (
                              <div key={memberIndex} className="flex items-center gap-2">
                                <span className="text-lg">{member?.avatar}</span>
                                <span className="text-sm font-medium">{memberName}</span>
                                <Badge variant="outline" className="text-xs ml-auto">
                                  {member?.workload}%
                                </Badge>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* フッター */}
        <div className="text-center mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            チーム総合ダッシュボード • バイブコーディングプロジェクト • 最終更新: 2025年8月13日
          </p>
        </div>
      </div>
    </div>
  );
}