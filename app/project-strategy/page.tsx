"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Target, 
  Calendar, 
  Users, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Star,
  Rocket,
  Bot,
  GraduationCap,
  DollarSign,
  Clock,
  Megaphone,
  BarChart3,
  MessageSquare,
  Zap,
  Award,
  ArrowRight
} from "lucide-react"
import Link from 'next/link'

export default function ProjectStrategyPage() {
  // プロジェクト全体の進捗状況
  const overallProgress = 78

  // 重要なKPI目標
  const kpiTargets = [
    { title: "オープンチャット目標", current: 892, target: 2000, unit: "人", status: "progress" },
    { title: "セミナー着座数", current: 456, target: 1500, unit: "人", status: "warning" },
    { title: "ローンチまで", current: 11, target: 0, unit: "日", status: "urgent" },
    { title: "Bot開発完了", current: 10, target: 20, unit: "個", status: "progress" }
  ]

  // 2段階ローンチ戦略
  const launchPhases = [
    {
      phase: "第1回ローンチ",
      timing: "2025年8月28-30日",
      status: "active",
      target: "AI開発を学びたい人",
      product: "開発講座（Bot作成スキル習得）",
      feature: "開発プロセスから学べる",
      goal: "100名受講・3000万円売上"
    },
    {
      phase: "第2回ローンチ",
      timing: "2025年9-10月（予定）",
      status: "planning",
      target: "Botだけ欲しい人（開発不要）",
      product: "完成した100個のBot販売",
      feature: "すぐに使える完成品",
      goal: "Bot販売・継続収益"
    }
  ]

  // 告知スケジュール必須事項
  const announcementSchedule = [
    { timing: "前日告知", priority: "必須", description: "各SNS・LINEで事前告知を実施", status: "required" },
    { timing: "当日告知", priority: "必須", description: "リアルタイムでの盛り上げ投稿", status: "required" },
    { timing: "翌日フォロー", priority: "推奨", description: "「盛り上がりました」「反響がありました」等の成果報告", status: "recommended" }
  ]

  // チーム役割分担
  const teamRoles = [
    { member: "中井健登", role: "PM・全体統括", tasks: ["プロジェクト管理", "戦略立案", "調整業務"], status: "active" },
    { member: "わど", role: "マーケティング・セミナー", tasks: ["セミナー実施", "告知戦略", "SNS運営"], status: "active" },
    { member: "ユニコーン社", role: "コンテンツ提供", tasks: ["講座内容", "技術サポート", "Discord運営"], status: "active" },
    { member: "各SNSチーム", role: "集客・告知", tasks: ["コンテンツ制作", "フォロワー獲得", "誘導施策"], status: "active" }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent": return "text-red-600 bg-red-50"
      case "warning": return "text-yellow-600 bg-yellow-50"
      case "progress": return "text-blue-600 bg-blue-50"
      case "completed": return "text-green-600 bg-green-50"
      case "required": return "text-red-600"
      case "recommended": return "text-blue-600"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getProgressPercentage = (current: number, target: number) => {
    if (target === 0) return 100 - (current / 30) * 100 // カウントダウンの場合
    return (current / target) * 100
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* ヘッダー */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                🎯 プロジェクト重要方針
              </h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                AI開発講座ローンチ戦略 - 常時確認用
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-800">進行中</Badge>
              <Badge variant="outline">最終更新: 2025-01-17</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* 全体進捗と重要KPI */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* 全体進捗 */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                プロジェクト進捗
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{overallProgress}%</div>
                  <Progress value={overallProgress} className="h-3" />
                </div>
                <div className="text-sm text-muted-foreground text-center">
                  ローンチまで残り11日
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 重要KPI */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                重要KPI目標
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {kpiTargets.map((kpi, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{kpi.title}</span>
                      <span className={getStatusColor(kpi.status)}>
                        {kpi.current}/{kpi.target}{kpi.unit}
                      </span>
                    </div>
                    <Progress value={getProgressPercentage(kpi.current, kpi.target)} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* メインコンテンツタブ */}
        <Card>
          <CardHeader>
            <CardTitle>戦略詳細</CardTitle>
            <CardDescription>
              プロジェクトの重要な方針と実行計画
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="strategy" className="space-y-4">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="strategy">商品戦略</TabsTrigger>
                <TabsTrigger value="launch">ローンチ計画</TabsTrigger>
                <TabsTrigger value="schedule">告知スケジュール</TabsTrigger>
                <TabsTrigger value="team">チーム体制</TabsTrigger>
                <TabsTrigger value="targets">ターゲット</TabsTrigger>
              </TabsList>

              {/* 商品戦略タブ */}
              <TabsContent value="strategy" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* メイン商品 */}
                  <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <GraduationCap className="w-5 h-5" />
                        メイン商品
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg mb-2">AI開発講座</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          今回のローンチの中心商品
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-primary" />
                          <span className="text-sm">100個のBot開発プロジェクト</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="text-sm">講義動画 + 生配信サポート</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm">受講生と一緒にBot作成</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm">90日で収益化達成</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* サブ商品 */}
                  <Card className="border-blue-200 bg-blue-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-600">
                        <Bot className="w-5 h-5" />
                        サブ商品
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg mb-2">ワドAIボット</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          サブ商品として連携展開
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">現在20個開発中（目標100個）</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">ローンチ業務で実際に活用</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">解説動画・共有予定</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* 重要な注意点 */}
                <Card className="border-yellow-200 bg-yellow-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-700">
                      <AlertCircle className="w-5 h-5" />
                      重要な注意点
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-yellow-700">
                      <strong>2商品の同時展開は複雑になるため、AI開発講座を中心に進める</strong><br />
                      ワドAIボットは講座の実例・特典として位置づけ、メインの訴求は開発スキル習得に集中する
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ローンチ計画タブ */}
              <TabsContent value="launch" className="space-y-6">
                <div className="space-y-6">
                  {launchPhases.map((phase, index) => (
                    <Card key={index} className={`border-2 ${
                      phase.status === 'active' ? 'border-primary bg-primary/5' : 'border-gray-200'
                    }`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <Rocket className="w-5 h-5" />
                            {phase.phase}
                          </CardTitle>
                          <Badge className={phase.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}>
                            {phase.status === 'active' ? '実行中' : '計画中'}
                          </Badge>
                        </div>
                        <CardDescription>{phase.timing}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-sm mb-1">ターゲット</h4>
                              <p className="text-sm text-muted-foreground">{phase.target}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm mb-1">商品</h4>
                              <p className="text-sm text-muted-foreground">{phase.product}</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-sm mb-1">特徴</h4>
                              <p className="text-sm text-muted-foreground">{phase.feature}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm mb-1">目標</h4>
                              <p className="text-sm text-muted-foreground">{phase.goal}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* 告知スケジュールタブ */}
              <TabsContent value="schedule" className="space-y-6">
                <div className="grid gap-4">
                  {announcementSchedule.map((item, index) => (
                    <Card key={index} className={`border-l-4 ${
                      item.status === 'required' ? 'border-l-red-500 bg-red-50/50' : 'border-l-blue-500 bg-blue-50/50'
                    }`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Megaphone className="w-5 h-5" />
                            {item.timing}
                          </CardTitle>
                          <Badge className={item.status === 'required' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}>
                            {item.priority}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      各SNS・LINEチーム必須対応事項
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        <span className="text-sm">スケジュールに合わせた告知を徹底</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">ターゲット層の違いを意識した訴求</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">訴求ポイントを明確に差別化</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* チーム体制タブ */}
              <TabsContent value="team" className="space-y-6">
                <div className="grid gap-4">
                  {teamRoles.map((team, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            {team.member}
                          </CardTitle>
                          <Badge className="bg-green-100 text-green-800">{team.role}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">主要タスク</h4>
                          <div className="flex flex-wrap gap-2">
                            {team.tasks.map((task, taskIndex) => (
                              <Badge key={taskIndex} variant="outline" className="text-xs">
                                {task}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* ターゲットタブ */}
              <TabsContent value="targets" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      ターゲット層と訴求ポイント
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="border-blue-200 bg-blue-50/50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-blue-700">AI開発完全未経験</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm text-muted-foreground">メインターゲット</p>
                          <div className="space-y-1">
                            <div className="text-xs text-blue-600">✓ プログラミング経験なし</div>
                            <div className="text-xs text-blue-600">✓ AIに興味はあるが始め方不明</div>
                            <div className="text-xs text-blue-600">✓ 副収入・転職を考えている</div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200 bg-green-50/50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-green-700">エンジニア・開発者</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm text-muted-foreground">サブターゲット</p>
                          <div className="space-y-1">
                            <div className="text-xs text-green-600">✓ 基礎スキルはあるがAI未経験</div>
                            <div className="text-xs text-green-600">✓ 最新技術への対応が課題</div>
                            <div className="text-xs text-green-600">✓ 収入アップを目指している</div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200 bg-purple-50/50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-purple-700">ビジネスオーナー</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm text-muted-foreground">ニッチターゲット</p>
                          <div className="space-y-1">
                            <div className="text-xs text-purple-600">✓ 事業にAIを活用したい</div>
                            <div className="text-xs text-purple-600">✓ 開発チームの構築を検討</div>
                            <div className="text-xs text-purple-600">✓ 競争優位性を求めている</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="border-yellow-200 bg-yellow-50/50">
                      <CardHeader>
                        <CardTitle className="text-lg text-yellow-700">共通の訴求ポイント</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">革新的なアプローチ</h4>
                            <ul className="text-xs space-y-1 text-muted-foreground">
                              <li>• 従来のプログラミング学習の常識を覆す</li>
                              <li>• 「書く時代」から「対話時代」へのパラダイムシフト</li>
                              <li>• AIとの協働による効率的な開発手法</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">具体的な成果</h4>
                            <ul className="text-xs space-y-1 text-muted-foreground">
                              <li>• 90日で実用的なAIアプリケーション開発</li>
                              <li>• 在宅で月50万円以上の安定収益</li>
                              <li>• 家族に自慢できるスキルと実績</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* クイックアクション */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              関連ページへのクイックアクセス
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                <Link href="/dashboard">
                  <BarChart3 className="w-5 h-5" />
                  <span className="text-xs">ダッシュボード</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                <Link href="/note-campaign">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs">note記事</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                <Link href="/strategy-dashboard">
                  <Target className="w-5 h-5" />
                  <span className="text-xs">戦略分析</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                <Link href="/competitive-analysis">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-xs">競合分析</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                <Link href="/streaming-schedule">
                  <Calendar className="w-5 h-5" />
                  <span className="text-xs">配信予定</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}