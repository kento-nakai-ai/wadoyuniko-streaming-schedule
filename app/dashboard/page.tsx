"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Calendar, 
  Users, 
  FileText, 
  TrendingUp, 
  Clock, 
  Target,
  CheckCircle,
  AlertCircle,
  PlayCircle,
  BookOpen,
  Megaphone,
  BarChart3,
  Rocket,
  Gift,
  Video,
  MessageSquare,
  Settings,
  Bell,
  Star,
  Zap,
  ArrowRight,
  ExternalLink
} from "lucide-react"
import Link from 'next/link'

export default function DashboardPage() {
  const [selectedTeam, setSelectedTeam] = useState("all")

  // ローンチプロジェクトの進捗状況
  const launchProgress = {
    overall: 75,
    streaming: 90,
    marketing: 80,
    content: 70,
    sales: 65
  }

  // チームメンバー情報
  const teamMembers = [
    { name: "中井健登", role: "PM", status: "online", tasks: 8 },
    { name: "わど", role: "マーケティング", status: "online", tasks: 6 },
    { name: "ユニコーン社", role: "コンテンツ", status: "away", tasks: 4 },
    { name: "ゆき", role: "デザイン", status: "online", tasks: 5 },
    { name: "ちょこ", role: "動画制作", status: "offline", tasks: 3 },
    { name: "こばやし ゆうた", role: "制作", status: "online", tasks: 7 }
  ]

  // 最近のアクティビティ
  const recentActivities = [
    { type: "new", title: "🎯 プロジェクト重要方針ページ作成完了", time: "1分前", user: "Claude Code" },
    { type: "new", title: "note記事配布キャンペーンシステム構築完了", time: "5分前", user: "中井健登" },
    { type: "complete", title: "無料・有料note記事制作完了", time: "10分前", user: "Claude Code" },
    { type: "new", title: "戦略ダッシュボードをリアルタイム監視対応", time: "15分前", user: "中井健登" },
    { type: "update", title: "配信資料が更新されました", time: "1時間前", user: "中井健登" },
    { type: "new", title: "新しいX投稿テンプレートが追加", time: "2時間前", user: "わど" },
    { type: "complete", title: "8/20配信のリハーサル完了", time: "3時間前", user: "ユニコーン社" },
    { type: "update", title: "ローンチ戦略ガイドを公開", time: "4時間前", user: "中井健登" }
  ]

  // 重要な指標
  const kpiData = [
    { title: "ローンチまで", value: "11日", change: "-1", status: "urgent" },
    { title: "オープンチャット", value: "892/2,000", change: "+156", status: "warning" },
    { title: "セミナー申込", value: "456/1,500", change: "+89", status: "warning" },
    { title: "note閲覧数", value: "45.7K", change: "+5.2K", status: "good" },
    { title: "有料記事購入", value: "187", change: "+48", status: "excellent" },
    { title: "配信完了", value: "4/7", change: "+1", status: "good" },
    { title: "進捗率", value: "75%", change: "+8%", status: "good" }
  ]

  const getStatusIcon = (type: string) => {
    switch (type) {
      case "update": return <FileText className="w-4 h-4 text-blue-500" />
      case "new": return <Star className="w-4 h-4 text-green-500" />
      case "complete": return <CheckCircle className="w-4 h-4 text-emerald-500" />
      default: return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500"
      case "away": return "bg-yellow-500"
      case "offline": return "bg-gray-400"
      case "excellent": return "text-green-600"
      case "good": return "text-green-500"
      case "warning": return "text-yellow-500"
      case "urgent": return "text-red-500"
      default: return "bg-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* ヘッダー */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                バイブコーディング ダッシュボード
              </h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                ローンチプロジェクト管理 - August 2025
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Bell className="w-4 h-4 mr-2" />
                通知
              </Button>
              <Button variant="outline" size="sm" className="sm:hidden">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Settings className="w-4 h-4 mr-2" />
                設定
              </Button>
              <Button variant="outline" size="sm" className="sm:hidden">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* KPI カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {kpi.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{kpi.value}</span>
                  <div className={`flex items-center gap-1 text-sm ${
                    kpi.status === 'good' ? 'text-green-600' : 
                    kpi.status === 'urgent' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    <TrendingUp className="w-4 h-4" />
                    {kpi.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* メインコンテンツ */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左側 - プロジェクト進捗とタスク */}
          <div className="lg:col-span-2 space-y-6">
            {/* プロジェクト進捗 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  ローンチプロジェクト進捗
                </CardTitle>
                <CardDescription>
                  August 28-30, 2025 ローンチに向けた各分野の進捗状況
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>全体進捗</span>
                    <span className="font-medium">{launchProgress.overall}%</span>
                  </div>
                  <Progress value={launchProgress.overall} className="h-3" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {Object.entries(launchProgress).slice(1).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">
                          {key === 'streaming' ? '配信' : 
                           key === 'marketing' ? 'マーケティング' :
                           key === 'content' ? 'コンテンツ' : '営業'}
                        </span>
                        <span className="font-medium">{value}%</span>
                      </div>
                      <Progress value={value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* クイックアクション */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  クイックアクション
                </CardTitle>
                <CardDescription>
                  よく使う機能への素早いアクセス
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                  <Button asChild variant="default" className="h-auto p-4 flex-col gap-2 bg-primary text-primary-foreground">
                    <Link href="/project-strategy">
                      <Target className="w-6 h-6" />
                      <span className="text-sm">🎯 重要方針</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/streaming-schedule">
                      <Video className="w-6 h-6" />
                      <span className="text-sm">配信スケジュール</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/streaming-materials">
                      <FileText className="w-6 h-6" />
                      <span className="text-sm">配信資料</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/x-posts">
                      <MessageSquare className="w-6 h-6" />
                      <span className="text-sm">X投稿集</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/bonus-schedule">
                      <Gift className="w-6 h-6" />
                      <span className="text-sm">特典配布</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/launch-strategy">
                      <Rocket className="w-6 h-6" />
                      <span className="text-sm">ローンチ戦略</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/note-campaign">
                      <FileText className="w-6 h-6" />
                      <span className="text-sm">note記事キャンペーン</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/note-distribution">
                      <MessageSquare className="w-6 h-6" />
                      <span className="text-sm">記事配布管理</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/strategy-dashboard">
                      <BarChart3 className="w-6 h-6" />
                      <span className="text-sm">戦略ダッシュボード</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/team-overview">
                      <Users className="w-6 h-6" />
                      <span className="text-sm">チーム総合</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/sales-team">
                      <Megaphone className="w-6 h-6" />
                      <span className="text-sm">営業チーム</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/competitive-analysis">
                      <BarChart3 className="w-6 h-6" />
                      <span className="text-sm">競合分析</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
                    <Link href="/announcement-schedule">
                      <Calendar className="w-6 h-6" />
                      <span className="text-sm">告知スケジュール</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 最近のアクティビティ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  最近のアクティビティ
                </CardTitle>
                <CardDescription>
                  チームの最新の活動状況
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      {getStatusIcon(activity.type)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.user} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button variant="ghost" size="sm" className="w-full">
                    すべてのアクティビティを見る
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右側 - チーム情報とツール */}
          <div className="space-y-6">
            {/* チームメンバー */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  チームメンバー
                </CardTitle>
                <CardDescription>
                  現在のチーム状況とタスク数
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="relative">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">
                            {member.name.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${getStatusColor(member.status)}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {member.tasks}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 重要なリンク */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  重要なリソース
                </CardTitle>
                <CardDescription>
                  プロジェクトに必要な主要リンク
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/teams">
                    <FileText className="w-4 h-4 mr-3" />
                    チームドキュメント
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/competitive-analysis">
                    <BarChart3 className="w-4 h-4 mr-3" />
                    競合分析
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/sales-team">
                    <Megaphone className="w-4 h-4 mr-3" />
                    営業チーム
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/live-calendar">
                    <Calendar className="w-4 h-4 mr-3" />
                    ライブカレンダー
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* ローンチカウントダウン */}
            <Card className="bg-gradient-to-br from-primary/10 to-purple-600/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Rocket className="w-5 h-5" />
                  ローンチカウントダウン
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold mb-2">11日</div>
                <p className="text-sm text-muted-foreground mb-4">
                  August 28, 2025まで
                </p>
                <Button size="sm" className="w-full">
                  最終準備チェック
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 下部 - 詳細情報タブ */}
        <Card>
          <CardHeader>
            <CardTitle>詳細情報</CardTitle>
            <CardDescription>
              プロジェクトの詳細な状況と分析
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="schedule" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="schedule">スケジュール</TabsTrigger>
                <TabsTrigger value="content">コンテンツ</TabsTrigger>
                <TabsTrigger value="marketing">マーケティング</TabsTrigger>
                <TabsTrigger value="analytics">分析</TabsTrigger>
              </TabsList>

              <TabsContent value="schedule" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">今週の配信</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                          <span className="text-sm">8/18 - Dify配信</span>
                          <Badge className="bg-green-100 text-green-800">完了</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                          <span className="text-sm">8/19 - Google AI Studio</span>
                          <Badge className="bg-blue-100 text-blue-800">進行中</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                          <span className="text-sm">8/20 - Genspark開発</span>
                          <Badge variant="outline">予定</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">重要なマイルストーン</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">配信資料作成完了</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">X投稿テンプレート完成</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <AlertCircle className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm">セミナー最終リハーサル</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">ローンチ最終準備</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="content" className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">配信コンテンツ</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">7/7</div>
                      <p className="text-sm text-muted-foreground">配信完了率</p>
                      <Progress value={100} className="mt-2" />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">特典コンテンツ</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">33/33</div>
                      <p className="text-sm text-muted-foreground">ボーナス作成完了</p>
                      <Progress value={100} className="mt-2" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">営業資料</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">85%</div>
                      <p className="text-sm text-muted-foreground">セミナー準備</p>
                      <Progress value={85} className="mt-2" />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">SNS戦略</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">X投稿テンプレート</span>
                          <Badge className="bg-green-100 text-green-800">完了</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">オープンチャット戦略</span>
                          <Badge className="bg-green-100 text-green-800">完了</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">ローンチ戦略ガイド</span>
                          <Badge className="bg-green-100 text-green-800">完了</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">競合分析</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">市場調査</span>
                          <Badge className="bg-green-100 text-green-800">完了</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">価格戦略</span>
                          <Badge className="bg-green-100 text-green-800">完了</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">差別化ポイント</span>
                          <Badge className="bg-blue-100 text-blue-800">進行中</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">目標売上</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">30M円</div>
                      <p className="text-sm text-muted-foreground">ローンチ目標</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">目標受講生</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">100名</div>
                      <p className="text-sm text-muted-foreground">初回ローンチ</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">コンテンツ価値</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">295M円</div>
                      <p className="text-sm text-muted-foreground">教材総価値</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}