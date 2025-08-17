"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Calendar, 
  Users, 
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  Megaphone,
  MessageSquare,
  Video,
  FileText,
  ExternalLink,
  Zap,
  Bell,
  Send,
  Eye,
  TrendingUp,
  ArrowRight
} from "lucide-react"
import Link from 'next/link'

export default function AnnouncementSchedulePage() {
  const [selectedTeam, setSelectedTeam] = useState("all")

  // 告知イベントスケジュール
  const announcementEvents = [
    {
      id: 1,
      title: "ローンチ動画投稿",
      date: "2025-08-22",
      time: "09:00",
      type: "content",
      priority: "high",
      status: "pending",
      description: "メインローンチ動画の投稿（22日・セミナー2日前）",
      teams: ["Instagram", "X", "YouTube", "LINE"]
    },
    {
      id: 2,
      title: "大型コラボ告知",
      date: "2025-08-14",
      time: "10:00", 
      type: "collaboration",
      priority: "urgent",
      status: "pending",
      description: "大型コラボレーション発表",
      teams: ["X", "Instagram", "YouTube"]
    },
    {
      id: 3,
      title: "セミナー前日告知",
      date: "2025-08-27",
      time: "19:00",
      type: "announcement",
      priority: "urgent",
      status: "pending",
      description: "8/28セミナー開始前の最終告知",
      teams: ["Instagram", "X", "YouTube", "LINE", "OpenChat"]
    },
    {
      id: 4,
      title: "セミナー当日告知",
      date: "2025-08-28",
      time: "08:00",
      type: "announcement", 
      priority: "urgent",
      status: "pending",
      description: "セミナー開始の当日告知",
      teams: ["Instagram", "X", "YouTube", "LINE", "OpenChat"]
    },
    {
      id: 5,
      title: "セミナー翌日フォロー",
      date: "2025-08-29",
      time: "10:00",
      type: "follow-up",
      priority: "recommended",
      status: "pending", 
      description: "「盛り上がりました」成果報告投稿",
      teams: ["Instagram", "X", "YouTube"]
    }
  ]

  // チーム別タスク状況
  const teamStatus = {
    "Instagram": { 
      pending: 5, 
      completed: 12, 
      engagement: "高", 
      reach: "15.2K",
      lastUpdate: "2時間前"
    },
    "X": { 
      pending: 3, 
      completed: 18, 
      engagement: "中", 
      reach: "8.7K",
      lastUpdate: "30分前"
    },
    "YouTube": { 
      pending: 2, 
      completed: 8, 
      engagement: "高", 
      reach: "25.3K",
      lastUpdate: "1時間前"
    },
    "LINE": { 
      pending: 4, 
      completed: 15, 
      engagement: "高", 
      reach: "2.1K",
      lastUpdate: "45分前"
    },
    "OpenChat": { 
      pending: 6, 
      completed: 22, 
      engagement: "非常に高", 
      reach: "892人",
      lastUpdate: "15分前"
    }
  }

  // 告知テンプレート
  const announcementTemplates = {
    "前日告知": {
      instagram: "明日はいよいよセミナー開始日！🚀\n3ヶ月でAI開発者に変革する\nバイブコーディング講座の詳細を\n明日お伝えします✨\n\n#バイブコーディング #AI開発",
      x: "🚨明日8/28 20:00〜\nバイブコーディング セミナー開始\n\n✅ AI開発完全未経験OK\n✅ 90日で月50万円の収益化\n✅ 100個のBot開発プロジェクト\n\n参加はこちら👇\n#バイブコーディング",
      youtube: "【明日開始】AI開発講座バイブコーディング\n完全未経験から90日で収益化を実現する\n革新的な学習プログラムを公開します"
    },
    "当日告知": {
      instagram: "🔥本日開始🔥\nバイブコーディング セミナー\n20:00スタート！\n\nAI開発の新時代が始まります\n皆さんの参加をお待ちしています✨",
      x: "🚀本日20:00〜 セミナー開始\n\nこれまでの常識を覆す\nAI開発学習法を公開\n\n参加リンクはプロフィールから\n#バイブコーディング",
      youtube: "【本日20:00開始】バイブコーディング\n革新的AI開発講座の全貌を公開\nライブ配信でお会いしましょう"
    },
    "翌日フォロー": {
      instagram: "昨日のセミナー、大盛況でした！🎉\n\n参加者の皆さん、ありがとうございました\n次回セミナーもお楽しみに✨\n\n#バイブコーディング #感謝",
      x: "セミナー大成功！🎉\n\n多数のご参加ありがとうございました\n「人生が変わりそう」\n「今すぐ始めたい」\nたくさんの声をいただきました\n\n#バイブコーディング",
      youtube: "【セミナー大成功】たくさんのご参加\nありがとうございました！\n次回の情報もお楽しみに"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "bg-red-100 text-red-800"
      case "high": return "bg-orange-100 text-orange-800"
      case "recommended": return "bg-blue-100 text-blue-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800"
      case "in-progress": return "bg-yellow-100 text-yellow-800"
      case "pending": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case "非常に高": return "text-green-600"
      case "高": return "text-green-500"
      case "中": return "text-yellow-500"
      case "低": return "text-red-500"
      default: return "text-gray-500"
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
                📅 告知スケジュール管理
              </h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                各SNS・LINEチームの必須対応事項管理
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-red-100 text-red-800">前日・当日・翌日必須</Badge>
              <Badge variant="outline">リアルタイム更新</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* 重要な告知ルール */}
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="w-5 h-5" />
              ⚠️ 必須告知ルール
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-red-600 text-white text-xs">必須</Badge>
                  <h4 className="font-semibold text-red-700">前日告知</h4>
                </div>
                <p className="text-sm text-red-600">各SNS・LINEで事前告知を実施</p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-red-600 text-white text-xs">必須</Badge>
                  <h4 className="font-semibold text-red-700">当日告知</h4>
                </div>
                <p className="text-sm text-red-600">リアルタイムでの盛り上げ投稿</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600 text-white text-xs">推奨</Badge>
                  <h4 className="font-semibold text-blue-700">翌日フォロー</h4>
                </div>
                <p className="text-sm text-blue-600">「盛り上がりました」等の成果報告</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* メインコンテンツ */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左側 - 告知スケジュール */}
          <div className="lg:col-span-2 space-y-6">
            {/* 告知イベント一覧 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  告知イベントスケジュール
                </CardTitle>
                <CardDescription>
                  重要な告知タイミングと担当チーム
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcementEvents.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getPriorityColor(event.priority)}>
                            {event.priority === 'urgent' ? '緊急' : 
                             event.priority === 'high' ? '高' : '推奨'}
                          </Badge>
                          <Badge className={getStatusColor(event.status)}>
                            {event.status === 'completed' ? '完了' : 
                             event.status === 'in-progress' ? '進行中' : '待機中'}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {event.teams.map((team) => (
                          <Badge key={team} variant="outline" className="text-xs">
                            {team}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 告知テンプレート */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  告知テンプレート
                </CardTitle>
                <CardDescription>
                  各プラットフォーム用の定型文テンプレート
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="前日告知" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="前日告知">前日告知</TabsTrigger>
                    <TabsTrigger value="当日告知">当日告知</TabsTrigger>
                    <TabsTrigger value="翌日フォロー">翌日フォロー</TabsTrigger>
                  </TabsList>

                  {Object.entries(announcementTemplates).map(([templateType, templates]) => (
                    <TabsContent key={templateType} value={templateType} className="space-y-4">
                      {Object.entries(templates).map(([platform, template]) => (
                        <div key={platform} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold capitalize">{platform}</h4>
                            <Button size="sm" variant="outline">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              コピー
                            </Button>
                          </div>
                          <p className="text-sm whitespace-pre-line bg-gray-50 p-3 rounded">
                            {template}
                          </p>
                        </div>
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* 右側 - チーム状況とツール */}
          <div className="space-y-6">
            {/* チーム状況 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  チーム状況
                </CardTitle>
                <CardDescription>
                  各チームの告知タスクの進捗状況
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(teamStatus).map(([team, status]) => (
                    <div key={team} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{team}</h4>
                        <Badge variant="outline" className="text-xs">
                          {status.lastUpdate}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                        <div>
                          <span className="text-muted-foreground">待機:</span>
                          <span className="ml-1 font-medium">{status.pending}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">完了:</span>
                          <span className="ml-1 font-medium">{status.completed}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">リーチ:</span>
                          <span className="ml-1 font-medium">{status.reach}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">エンゲージ:</span>
                          <span className={`ml-1 font-medium ${getEngagementColor(status.engagement)}`}>
                            {status.engagement}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-2">
                        <Progress value={(status.completed / (status.completed + status.pending)) * 100} className="h-2" />
                      </div>
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
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/project-strategy">
                    <Target className="w-4 h-4 mr-2" />
                    重要方針を確認
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/strategy-dashboard">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    戦略ダッシュボード
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/streaming-schedule">
                    <Calendar className="w-4 h-4 mr-2" />
                    配信スケジュール
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/teams">
                    <Users className="w-4 h-4 mr-2" />
                    チーム管理
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* 重要なリマインダー */}
            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-700">
                  <Bell className="w-5 h-5" />
                  重要リマインダー
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span>8/14 大型コラボ告知予定</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span>8/28-30 セミナー実施期間</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span>オープンチャット2000人目標</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>告知の一貫性を重視</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}