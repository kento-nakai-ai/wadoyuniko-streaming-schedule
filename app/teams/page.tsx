"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Users, Target, AlertTriangle, FileText, ExternalLink, Activity, TrendingUp, MessageSquare, Instagram, Twitter } from "lucide-react"

export default function TeamsPage() {
  const teams = [
    {
      id: "pm",
      name: "PM（プロジェクト管理）",
      leader: "中井健登",
      description: "プロジェクト全体の管理・調整、スケジュール管理、KPI追跡",
      color: "bg-blue-500",
      members: 1,
      documents: ["会議議事録", "KPIダッシュボード", "進捗管理", "タスク管理"],
      documentCount: 45,
      lastUpdate: "2025-01-13",
      status: "active",
      socialLinks: []
    },
    {
      id: "content",
      name: "Content（コンテンツ制作）",
      leader: "ゆき、ちょこ、こばやし ゆうた",
      description: "セミナー資料、ボーナス特典、教材、技術ドキュメントの制作",
      color: "bg-green-500",
      members: 3,
      documents: ["セミナー資料", "ボーナス特典", "技術ガイド", "マンガコンテンツ"],
      documentCount: 120,
      lastUpdate: "2025-01-13",
      status: "active",
      socialLinks: []
    },
    {
      id: "marketing",
      name: "Marketing（マーケティング）",
      leader: "わど、中上裕三、Yui Mitsui",
      description: "セミナー実行、販売戦略、SNSマーケティング、顧客獲得",
      color: "bg-purple-500",
      members: 3,
      documents: ["販売スクリプト", "競合分析", "Instagram戦略", "LP設計"],
      documentCount: 78,
      lastUpdate: "2025-01-13",
      status: "active",
      socialLinks: [
        { platform: "Instagram", url: "#", icon: Instagram },
        { platform: "X", url: "#", icon: Twitter }
      ]
    },
    {
      id: "design",
      name: "Design（デザイン）",
      leader: "デザインチーム",
      description: "ブランディング、マーケティング素材、配信用ビジュアル制作",
      color: "bg-pink-500",
      members: 2,
      documents: ["ブランドガイドライン", "デザインテンプレート", "ビジュアルアセット"],
      documentCount: 32,
      lastUpdate: "2025-01-12",
      status: "active",
      socialLinks: []
    },
    {
      id: "live",
      name: "Live（配信）",
      leader: "配信チーム",
      description: "YouTube配信、セミナーライブ、配信環境構築・運用",
      color: "bg-red-500",
      members: 3,
      documents: ["配信スケジュール", "技術セットアップ", "配信チェックリスト"],
      documentCount: 25,
      lastUpdate: "2025-01-13",
      status: "active",
      socialLinks: []
    },
    {
      id: "x",
      name: "X（SNS）",
      leader: "SNSチーム",
      description: "Xマーケティング、アルゴリズム最適化、インフルエンサー連携",
      color: "bg-gray-800",
      members: 2,
      documents: ["投稿戦略", "アルゴリズム分析", "個人アカウント戦略"],
      documentCount: 65,
      lastUpdate: "2025-01-13",
      status: "active",
      socialLinks: [
        { platform: "X", url: "#", icon: Twitter }
      ]
    }
  ]

  const quickStats = {
    totalDocuments: 365,
    activeTeams: 6,
    lastActivity: "2025-01-13",
    projectProgress: 78
  }

  const projectInfo = {
    name: "わどユニコプロジェクト",
    subtitle: "バイブコーディング（Vibe Coding）ローンチ",
    period: "2025年8月14日 - 9月7日",
    revenue_target: "3000万円",
    student_target: "100名",
    launch_date: "8月28-30日"
  }

  const milestones = [
    {
      date: "8月14日",
      title: "大規模コラボレーション発表",
      description: "プロジェクト認知度向上",
      status: "upcoming"
    },
    {
      date: "8月21日", 
      title: "ローンチポストキャンペーン開始",
      description: "セミナー登録者1000名獲得",
      status: "upcoming"
    },
    {
      date: "8月28-30日",
      title: "3日間セミナー実施",
      description: "100名受講者獲得、3000万円売上",
      status: "critical"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* ヘッダー */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2">{projectInfo.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{projectInfo.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="outline" className="gap-1">
              <CalendarDays className="h-4 w-4" />
              {projectInfo.period}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Target className="h-4 w-4" />
              売上目標: {projectInfo.revenue_target}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Users className="h-4 w-4" />
              受講者目標: {projectInfo.student_target}
            </Badge>
          </div>
        </div>

        {/* クイック統計 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{quickStats.totalDocuments}</div>
              <div className="text-sm text-muted-foreground">総ドキュメント数</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{quickStats.activeTeams}</div>
              <div className="text-sm text-muted-foreground">アクティブチーム</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{quickStats.projectProgress}%</div>
              <div className="text-sm text-muted-foreground">プロジェクト進捗</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">
                <Activity className="h-6 w-6 mx-auto mb-1" />
              </div>
              <div className="text-sm text-muted-foreground">最終更新: {quickStats.lastActivity}</div>
            </CardContent>
          </Card>
        </div>

        {/* 重要スケジュール */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              重要スケジュール
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  milestone.status === 'critical' 
                    ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950' 
                    : 'border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950'
                }`}>
                  <div className={`text-sm font-medium ${
                    milestone.status === 'critical' ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {milestone.date}
                  </div>
                  <div className="font-semibold mt-1">{milestone.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{milestone.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* チーム一覧 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="h-6 w-6" />
          チーム別ダッシュボード
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Card key={team.id} className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${team.color}`}></div>
                    <CardTitle className="text-lg">{team.name}</CardTitle>
                  </div>
                  <Badge variant={team.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                    {team.status === 'active' ? 'アクティブ' : '非アクティブ'}
                  </Badge>
                </div>
                <CardDescription>
                  <div className="mb-2"><strong>担当:</strong> {team.leader}</div>
                  <div className="flex items-center gap-4 text-sm">
                    {team.members && (
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {team.members}名
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {team.documentCount}件
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">{team.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {team.documents.slice(0, 3).map((doc, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {doc}
                    </Badge>
                  ))}
                  {team.documents.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{team.documents.length - 3}
                    </Badge>
                  )}
                </div>
                
                {/* ソーシャルリンク */}
                {team.socialLinks.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {team.socialLinks.map((social, index) => (
                      <Button key={index} variant="ghost" size="sm" className="p-1 h-8 w-8">
                        <social.icon className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                )}

                {/* アクション */}
                <div className="flex gap-2">
                  <Link href={`/teams/${team.id}`} className="flex-1">
                    <Button variant="default" size="sm" className="w-full">
                      <FileText className="h-4 w-4 mr-1" />
                      ダッシュボード
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="text-xs text-muted-foreground mt-2">
                  最終更新: {team.lastUpdate}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 共通リソース・ドキュメントライブラリ */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="h-6 w-6" />
          ドキュメントライブラリ & リソース
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/teams/docs">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📚 共通ドキュメント
                </CardTitle>
                <CardDescription>
                  全チーム共通の基本情報・仕様書
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">製品仕様、技術仕様、プロジェクト基本情報、緊急時対応プロトコル</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="secondary" className="text-xs">製品仕様</Badge>
                  <Badge variant="secondary" className="text-xs">技術アーキテクチャ</Badge>
                  <Badge variant="secondary" className="text-xs">緊急対応</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <FileText className="h-4 w-4 mr-1" />
                  ドキュメント閲覧
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📊 統合ダッシュボード
              </CardTitle>
              <CardDescription>
                プロジェクト全体の統計・分析
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>KPI追跡</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  <span>リアルタイム統計</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>進捗管理</span>
                </div>
              </div>
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="w-full">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  ダッシュボード表示
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔗 外部サービス連携
              </CardTitle>
              <CardDescription>
                関連ツール・プラットフォーム
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>📺 YouTube Live</span>
                  <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>💬 Discord</span>
                  <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>📱 X (Twitter)</span>
                  <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                    <Twitter className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>📷 Instagram</span>
                  <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                    <Instagram className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* フッター */}
      <div className="text-center text-sm text-muted-foreground border-t pt-6">
        <p>最終更新: 2025年8月13日 | 管理責任者: 中井健登（PM）</p>
        <p className="mt-2">
          緊急時は PMチーム（中井健登）まで直接連絡してください
        </p>
      </div>
    </div>
  )
}