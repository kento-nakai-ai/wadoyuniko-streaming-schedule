'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  TrendingUp, 
  Users, 
  Target, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Zap,
  DollarSign,
  UserPlus,
  MessageSquare,
  Eye,
  Download,
  ShoppingCart,
  RefreshCw
} from 'lucide-react'

export default function StrategyDashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeAlert, setActiveAlert] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // AI開発講座ローンチKPI
  const campaignKPIs = {
    totalRevenue: { current: 1380, target: 3000, unit: '万円' },
    seminarSignups: { current: 456, target: 1500, unit: '名' },
    openChatMembers: { current: 892, target: 2000, unit: '名' },
    noteViews: { current: 45672, target: 50000, unit: '回' },
    freeDownloads: { current: 3421, target: 5000, unit: 'DL' },
    paidPurchases: { current: 187, target: 500, unit: '購入' },
    conversionRate: { current: 5.5, target: 8.0, unit: '%' },
    attendanceRate: { current: 67, target: 70, unit: '%' },
    botDevelopment: { current: 10, target: 20, unit: '個' },
    courseEnrollment: { current: 0, target: 100, unit: '名' }
  }

  // デイリートレンド
  const dailyTrends = [
    { date: '8/17', views: 2340, downloads: 89, purchases: 12, openchat: 45 },
    { date: '8/18', views: 3280, downloads: 156, purchases: 18, openchat: 78 },
    { date: '8/19', views: 4120, downloads: 234, purchases: 24, openchat: 92 },
    { date: '8/20', views: 5890, downloads: 298, purchases: 31, openchat: 134 },
    { date: '8/21', views: 7234, downloads: 387, purchases: 42, openchat: 167 },
    { date: '8/22', views: 8456, downloads: 445, purchases: 38, openchat: 156 },
    { date: '8/23', views: 9123, downloads: 512, purchases: 48, openchat: 189 }
  ]

  // リアルタイムアラート
  const alerts = [
    {
      type: 'success',
      title: 'オープンチャット目標間近',
      message: '残り108名でオープンチャット目標1,000名達成',
      timestamp: '5分前',
      priority: 'high'
    },
    {
      type: 'warning',
      title: 'セミナー申込ペース遅延',
      message: '現在のペースでは目標1,500名に対し1,044名不足',
      timestamp: '12分前',
      priority: 'high'
    },
    {
      type: 'info',
      title: '100円記事好調',
      message: '過去24時間で48購入、CVR 5.8%で目標上回る',
      timestamp: '25分前',
      priority: 'medium'
    },
    {
      type: 'success',
      title: 'note記事拡散中',
      message: 'X（Twitter）で1,234RTを記録、リーチ数拡大中',
      timestamp: '1時間前',
      priority: 'medium'
    }
  ]

  // ファネル分析
  const funnelData = [
    { stage: 'note記事閲覧', count: 45672, percentage: 100, color: 'bg-blue-500' },
    { stage: '無料記事DL', count: 3421, percentage: 7.5, color: 'bg-green-500' },
    { stage: '有料記事購入', count: 187, percentage: 5.5, color: 'bg-purple-500' },
    { stage: 'オープンチャット参加', count: 892, percentage: 19.5, color: 'bg-orange-500' },
    { stage: 'セミナー申込', count: 456, percentage: 51.1, color: 'bg-red-500' }
  ]

  // 戦略的アクション項目
  const strategicActions = [
    {
      category: '緊急対応',
      items: [
        { task: 'セミナー申込促進施策実行', status: 'pending', priority: 'high', deadline: '8/24' },
        { task: '100円記事の拡散強化', status: 'in-progress', priority: 'high', deadline: '8/23' },
        { task: 'オープンチャット活性化', status: 'completed', priority: 'medium', deadline: '8/22' }
      ]
    },
    {
      category: '中期戦略',
      items: [
        { task: 'セミナーコンテンツ最終調整', status: 'in-progress', priority: 'high', deadline: '8/26' },
        { task: '追加特典の準備', status: 'pending', priority: 'medium', deadline: '8/25' },
        { task: '競合分析アップデート', status: 'completed', priority: 'low', deadline: '8/20' }
      ]
    }
  ]

  // プラットフォーム別分析
  const platformAnalysis = [
    {
      platform: 'オープンチャット',
      members: 892,
      engagement: 85,
      dailyActive: 456,
      conversionToSeminar: 51.1,
      status: 'excellent'
    },
    {
      platform: 'X (Twitter)',
      followers: 28000,
      engagement: 3.2,
      dailyReach: 15000,
      conversionToOpenchat: 2.1,
      status: 'good'
    },
    {
      platform: 'YouTube',
      subscribers: 12000,
      engagement: 8.5,
      dailyViews: 8500,
      conversionToOpenchat: 4.2,
      status: 'good'
    },
    {
      platform: 'note',
      totalViews: 45672,
      engagement: 12.3,
      dailyViews: 5890,
      conversionToPaid: 5.5,
      status: 'excellent'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500'
      case 'good': return 'bg-blue-500'
      case 'warning': return 'bg-yellow-500'
      case 'danger': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500'
    if (percentage >= 70) return 'bg-blue-500'
    if (percentage >= 50) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* ヘッダー */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">戦略ダッシュボード</h1>
                <p className="text-sm text-gray-300">バイブコーディング ローンチ戦略 - リアルタイム監視</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <div className="text-sm">
                <div className="font-medium">{currentTime.toLocaleDateString('ja-JP')}</div>
                <div className="text-gray-300">{currentTime.toLocaleTimeString('ja-JP')}</div>
              </div>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <RefreshCw className="w-4 h-4 mr-2" />
                更新
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-black/20 border-white/10">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-white/20">概要</TabsTrigger>
            <TabsTrigger value="course-strategy" className="text-white data-[state=active]:bg-white/20">🎓 講座戦略</TabsTrigger>
            <TabsTrigger value="funnel" className="text-white data-[state=active]:bg-white/20">ファネル分析</TabsTrigger>
            <TabsTrigger value="platforms" className="text-white data-[state=active]:bg-white/20">プラットフォーム</TabsTrigger>
            <TabsTrigger value="actions" className="text-white data-[state=active]:bg-white/20">アクション</TabsTrigger>
          </TabsList>

          {/* 概要タブ */}
          <TabsContent value="overview" className="space-y-8">
            {/* リアルタイムアラート */}
            <Card className="bg-black/20 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  リアルタイムアラート
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.slice(0, 3).map((alert, index) => (
                    <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${alert.type === 'success' ? 'bg-green-500/20' : alert.type === 'warning' ? 'bg-yellow-500/20' : 'bg-blue-500/20'}`}>
                      <div className={`w-2 h-2 rounded-full mt-2 ${alert.type === 'success' ? 'bg-green-400' : alert.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'}`}></div>
                      <div className="flex-1">
                        <div className="font-medium">{alert.title}</div>
                        <div className="text-sm text-gray-300">{alert.message}</div>
                        <div className="text-xs text-gray-400 mt-1">{alert.timestamp}</div>
                      </div>
                      <Badge variant={alert.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                        {alert.priority === 'high' ? '緊急' : '中'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 主要KPI */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(campaignKPIs).map(([key, kpi]) => {
                const percentage = (kpi.current / kpi.target) * 100
                const isOnTrack = percentage >= 70
                
                return (
                  <Card key={key} className="bg-black/20 border-white/10 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-300 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        {isOnTrack ? (
                          <ArrowUp className="w-4 h-4 text-green-400" />
                        ) : (
                          <ArrowDown className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                      <div className="text-2xl font-bold mb-1">
                        {kpi.current.toLocaleString()}{kpi.unit}
                      </div>
                      <div className="text-xs text-gray-400 mb-2">
                        目標: {kpi.target.toLocaleString()}{kpi.unit}
                      </div>
                      <Progress 
                        value={Math.min(percentage, 100)} 
                        className={`h-2 ${getProgressColor(percentage)}`}
                      />
                      <div className="text-xs text-gray-300 mt-1">
                        {percentage.toFixed(1)}% 達成
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* デイリートレンド */}
            <Card className="bg-black/20 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  過去7日間のトレンド
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* 閲覧数とダウンロード数 */}
                  <div>
                    <h4 className="font-medium mb-3">閲覧数 & ダウンロード数</h4>
                    <div className="space-y-2">
                      {dailyTrends.map((day, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded">
                          <span className="text-sm w-12">{day.date}</span>
                          <div className="flex-1 mx-4">
                            <div className="flex items-center gap-2 text-xs">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3 text-blue-400" />
                                <span>{day.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Download className="w-3 h-3 text-green-400" />
                                <span>{day.downloads}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-400">
                            CVR {((day.downloads / day.views) * 100).toFixed(1)}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 購入数とオープンチャット参加 */}
                  <div>
                    <h4 className="font-medium mb-3">購入数 & オープンチャット参加</h4>
                    <div className="space-y-2">
                      {dailyTrends.map((day, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded">
                          <span className="text-sm w-12">{day.date}</span>
                          <div className="flex-1 mx-4">
                            <div className="flex items-center gap-2 text-xs">
                              <div className="flex items-center gap-1">
                                <ShoppingCart className="w-3 h-3 text-purple-400" />
                                <span>{day.purchases}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <UserPlus className="w-3 h-3 text-orange-400" />
                                <span>{day.openchat}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-400">
                            ¥{(day.purchases * 100).toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI開発講座戦略タブ */}
          <TabsContent value="course-strategy" className="space-y-8">
            {/* 2段階ローンチ戦略 */}
            <Card className="bg-black/20 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🚀 2段階ローンチ戦略
                </CardTitle>
                <CardDescription className="text-gray-300">
                  AI開発講座の段階的ローンチ計画と進捗
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-primary/20 rounded-lg border border-primary/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-green-100 text-green-800">実行中</Badge>
                      <h3 className="font-bold">第1回ローンチ</h3>
                    </div>
                    <div className="text-sm space-y-2">
                      <div><strong>期間:</strong> 2025年8月28-30日</div>
                      <div><strong>ターゲット:</strong> AI開発を学びたい人</div>
                      <div><strong>商品:</strong> 開発講座（Bot作成スキル習得）</div>
                      <div><strong>目標:</strong> 100名受講・3000万円売上</div>
                      <div className="mt-3">
                        <div className="text-xs mb-1">進捗率</div>
                        <Progress value={78} className="h-2" />
                        <div className="text-xs mt-1">78% 完了</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-gray-100 text-gray-600">計画中</Badge>
                      <h3 className="font-bold">第2回ローンチ</h3>
                    </div>
                    <div className="text-sm space-y-2">
                      <div><strong>期間:</strong> 2025年9-10月（予定）</div>
                      <div><strong>ターゲット:</strong> Botだけ欲しい人（開発不要）</div>
                      <div><strong>商品:</strong> 完成した100個のBot販売</div>
                      <div><strong>目標:</strong> Bot販売・継続収益</div>
                      <div className="mt-3">
                        <div className="text-xs mb-1">準備状況</div>
                        <Progress value={15} className="h-2" />
                        <div className="text-xs mt-1">15% 完了</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bot開発プロジェクト進捗 */}
            <Card className="bg-black/20 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🤖 Bot開発プロジェクト進捗
                </CardTitle>
                <CardDescription className="text-gray-300">
                  100個のBot開発の現在の状況
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400">10</div>
                    <div className="text-sm text-green-300">開発完了</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                    <div className="text-2xl font-bold text-yellow-400">10</div>
                    <div className="text-sm text-yellow-300">開発中</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                    <div className="text-2xl font-bold text-gray-400">80</div>
                    <div className="text-sm text-gray-300">計画中</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>全体進捗</span>
                    <span>20/100 (20%)</span>
                  </div>
                  <Progress value={20} className="h-3" />
                </div>
                
                <div className="mt-4 space-y-2 text-sm">
                  <div>• ローンチ業務用Bot: 10個完成（SNS投稿、分析、管理）</div>
                  <div>• 教育用Bot: 5個開発中（学習サポート、質問回答）</div>
                  <div>• ビジネス用Bot: 5個開発中（営業支援、顧客管理）</div>
                </div>
              </CardContent>
            </Card>

            {/* 告知スケジュール管理 */}
            <Card className="bg-black/20 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📅 告知スケジュール管理
                </CardTitle>
                <CardDescription className="text-gray-300">
                  各SNS・LINEチームの必須対応事項
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <h4 className="font-semibold text-red-300">前日告知</h4>
                        <Badge className="bg-red-100 text-red-800 text-xs">必須</Badge>
                      </div>
                      <p className="text-xs text-red-200">各SNS・LINEで事前告知を実施</p>
                    </div>
                    
                    <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-red-400" />
                        <h4 className="font-semibold text-red-300">当日告知</h4>
                        <Badge className="bg-red-100 text-red-800 text-xs">必須</Badge>
                      </div>
                      <p className="text-xs text-red-200">リアルタイムでの盛り上げ投稿</p>
                    </div>
                    
                    <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <h4 className="font-semibold text-blue-300">翌日フォロー</h4>
                        <Badge className="bg-blue-100 text-blue-800 text-xs">推奨</Badge>
                      </div>
                      <p className="text-xs text-blue-200">「盛り上がりました」等の成果報告</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                    <h4 className="font-semibold text-yellow-300 mb-2">⚠️ 重要注意事項</h4>
                    <ul className="text-xs text-yellow-200 space-y-1">
                      <li>• スケジュールに合わせた告知を徹底</li>
                      <li>• ターゲット層の違いを意識した訴求</li>
                      <li>• 訴求ポイントを明確に差別化</li>
                      <li>• 2商品の同時展開は避け、AI開発講座を中心に</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 講座KPI */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-black/20 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🎯 講座専用KPI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Bot開発進捗</span>
                      <div className="text-right">
                        <div className="font-bold">{campaignKPIs.botDevelopment.current}/{campaignKPIs.botDevelopment.target}</div>
                        <div className="text-xs text-gray-400">個</div>
                      </div>
                    </div>
                    <Progress value={(campaignKPIs.botDevelopment.current / campaignKPIs.botDevelopment.target) * 100} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span>講座申込数</span>
                      <div className="text-right">
                        <div className="font-bold">{campaignKPIs.courseEnrollment.current}/{campaignKPIs.courseEnrollment.target}</div>
                        <div className="text-xs text-gray-400">名</div>
                      </div>
                    </div>
                    <Progress value={(campaignKPIs.courseEnrollment.current / campaignKPIs.courseEnrollment.target) * 100} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span>オープンチャット</span>
                      <div className="text-right">
                        <div className="font-bold">{campaignKPIs.openChatMembers.current}/{campaignKPIs.openChatMembers.target}</div>
                        <div className="text-xs text-gray-400">名</div>
                      </div>
                    </div>
                    <Progress value={(campaignKPIs.openChatMembers.current / campaignKPIs.openChatMembers.target) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/20 border-white/10 text-white">
                <CardHeader>
                  <CardTitle>クイックアクション</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button asChild className="w-full justify-start" variant="outline">
                      <a href="/project-strategy" className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        重要方針を確認
                      </a>
                    </Button>
                    <Button asChild className="w-full justify-start" variant="outline">
                      <a href="/competitive-analysis" className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        競合分析を確認
                      </a>
                    </Button>
                    <Button asChild className="w-full justify-start" variant="outline">
                      <a href="/note-campaign" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        note記事キャンペーン
                      </a>
                    </Button>
                    <Button asChild className="w-full justify-start" variant="outline">
                      <Link href="/streaming-schedule" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        配信スケジュール
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ファネル分析タブ */}
          <TabsContent value="funnel" className="space-y-8">
            <Card className="bg-black/20 border-white/10 text-white">
              <CardHeader>
                <CardTitle>ユーザー行動ファネル分析</CardTitle>
                <CardDescription className="text-gray-300">
                  note記事閲覧からセミナー申込までの変換率
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {funnelData.map((stage, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center gap-4">
                        <div className="w-24 text-sm text-gray-300">{stage.stage}</div>
                        <div className="flex-1">
                          <div className={`h-8 ${stage.color} rounded-lg flex items-center px-4`} 
                               style={{ width: `${Math.max(stage.percentage, 10)}%` }}>
                            <span className="text-white font-medium text-sm">
                              {stage.count.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="w-16 text-sm text-gray-300 text-right">
                          {stage.percentage.toFixed(1)}%
                        </div>
                      </div>
                      {index < funnelData.length - 1 && (
                        <div className="flex items-center gap-4 mt-2 mb-2">
                          <div className="w-24"></div>
                          <div className="text-xs text-gray-400">
                            変換率: {index === 0 ? 'ベース' : 
                                   index === 1 ? `${((funnelData[1].count / funnelData[0].count) * 100).toFixed(1)}%` :
                                   index === 2 ? `${((funnelData[2].count / funnelData[1].count) * 100).toFixed(1)}%` :
                                   index === 3 ? `${((funnelData[3].count / funnelData[0].count) * 100).toFixed(1)}%` :
                                   `${((funnelData[4].count / funnelData[3].count) * 100).toFixed(1)}%`}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ファネル最適化提案 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/20 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">ボトルネック分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                      <div className="font-medium text-red-400">最大のボトルネック</div>
                      <div className="text-sm text-gray-300 mt-1">
                        note閲覧→無料DL: 7.5% (目標: 15%)
                      </div>
                      <div className="text-xs text-gray-400 mt-2">
                        改善により最大4,000DL追加可能
                      </div>
                    </div>
                    
                    <div className="p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                      <div className="font-medium text-yellow-400">注意が必要</div>
                      <div className="text-sm text-gray-300 mt-1">
                        オープンチャット→セミナー: 51.1% (目標: 70%)
                      </div>
                      <div className="text-xs text-gray-400 mt-2">
                        168名の追加申込が可能
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">改善施策</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-500/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-sm">note記事の体験価値向上</div>
                        <div className="text-xs text-gray-400 mt-1">
                          30分体験の分かりやすさ改善 → CVR 7.5%→12%目標
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-500/20 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-sm">オープンチャット活性化</div>
                        <div className="text-xs text-gray-400 mt-1">
                          セミナー予告・限定特典でエンゲージメント向上
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-500/20 rounded-lg">
                      <Zap className="w-5 h-5 text-purple-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-sm">緊急性の演出</div>
                        <div className="text-xs text-gray-400 mt-1">
                          "参入最後のチャンス"メッセージ強化
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* プラットフォーム分析タブ */}
          <TabsContent value="platforms" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {platformAnalysis.map((platform, index) => (
                <Card key={index} className="bg-black/20 border-white/10 text-white">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{platform.platform}</CardTitle>
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(platform.status)}`}></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-400">フォロワー/メンバー</div>
                        <div className="text-xl font-bold">{platform.members?.toLocaleString() || platform.followers?.toLocaleString() || platform.subscribers?.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">エンゲージメント</div>
                        <div className="text-xl font-bold">{platform.engagement}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">デイリーアクティブ</div>
                        <div className="text-lg font-bold">{(platform.dailyActive || platform.dailyReach || platform.dailyViews)?.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">変換率</div>
                        <div className="text-lg font-bold">
                          {(platform.conversionToSeminar || platform.conversionToOpenchat || platform.conversionToPaid)?.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-white/5 rounded-lg">
                      <div className="text-sm font-medium mb-2">パフォーマンス分析</div>
                      <div className="text-xs text-gray-400">
                        {platform.status === 'excellent' && '目標を大幅に上回る優秀な成果'}
                        {platform.status === 'good' && '目標達成ペースで順調に推移'}
                        {platform.status === 'warning' && '改善の余地あり、施策検討が必要'}
                        {platform.status === 'danger' && '緊急な改善措置が必要'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* プラットフォーム間連携分析 */}
            <Card className="bg-black/20 border-white/10 text-white">
              <CardHeader>
                <CardTitle>プラットフォーム間連携分析</CardTitle>
                <CardDescription className="text-gray-300">
                  各プラットフォームからの流入とコンバージョン
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-500/20 rounded-lg">
                    <div className="text-2xl font-bold">X → note</div>
                    <div className="text-sm text-gray-300 mt-1">15,000 → 1,200</div>
                    <div className="text-xs text-blue-400">8.0% 流入率</div>
                  </div>
                  
                  <div className="text-center p-4 bg-red-500/20 rounded-lg">
                    <div className="text-2xl font-bold">YouTube → note</div>
                    <div className="text-sm text-gray-300 mt-1">8,500 → 850</div>
                    <div className="text-xs text-red-400">10.0% 流入率</div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-500/20 rounded-lg">
                    <div className="text-2xl font-bold">note → オプチャ</div>
                    <div className="text-sm text-gray-300 mt-1">45,672 → 892</div>
                    <div className="text-xs text-green-400">2.0% 変換率</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-500/20 rounded-lg">
                    <div className="text-2xl font-bold">オプチャ → セミナー</div>
                    <div className="text-sm text-gray-300 mt-1">892 → 456</div>
                    <div className="text-xs text-purple-400">51.1% 変換率</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* アクションタブ */}
          <TabsContent value="actions" className="space-y-8">
            {strategicActions.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-black/20 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            item.status === 'completed' ? 'bg-green-400' :
                            item.status === 'in-progress' ? 'bg-blue-400' :
                            'bg-gray-400'
                          }`}></div>
                          <div>
                            <div className="font-medium">{item.task}</div>
                            <div className="text-sm text-gray-400">期限: {item.deadline}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={
                            item.priority === 'high' ? 'destructive' :
                            item.priority === 'medium' ? 'default' :
                            'secondary'
                          } className="text-xs">
                            {item.priority === 'high' ? '高' : item.priority === 'medium' ? '中' : '低'}
                          </Badge>
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            {item.status === 'completed' ? '完了' :
                             item.status === 'in-progress' ? '進行中' :
                             '開始'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* 予測分析 */}
            <Card className="bg-black/20 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  予測分析
                </CardTitle>
                <CardDescription className="text-gray-300">
                  現在のペースでの8月31日時点の予測値
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="text-sm text-green-400 mb-2">オープンチャット参加者</div>
                    <div className="text-2xl font-bold">1,125名</div>
                    <div className="text-xs text-gray-400 mt-1">目標1,000名を12.5%上回る</div>
                    <Badge variant="default" className="mt-2 bg-green-500">目標達成</Badge>
                  </div>

                  <div className="text-center p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                    <div className="text-sm text-yellow-400 mb-2">セミナー申込者</div>
                    <div className="text-2xl font-bold">1,247名</div>
                    <div className="text-xs text-gray-400 mt-1">目標1,500名まで253名不足</div>
                    <Badge variant="secondary" className="mt-2 bg-yellow-500">要改善</Badge>
                  </div>

                  <div className="text-center p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <div className="text-sm text-blue-400 mb-2">予測売上</div>
                    <div className="text-2xl font-bold">2,494万円</div>
                    <div className="text-xs text-gray-400 mt-1">目標3,000万円まで506万円不足</div>
                    <Badge variant="secondary" className="mt-2 bg-blue-500">追加施策必要</Badge>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <div className="font-medium text-blue-400 mb-2">目標達成のための推奨アクション</div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• セミナー申込促進: 限定特典追加で+253名獲得</li>
                    <li>• 単価向上: セット販売強化で平均単価30万円→35万円</li>
                    <li>• 追加セミナー: 8月30日に追加回開催検討</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}