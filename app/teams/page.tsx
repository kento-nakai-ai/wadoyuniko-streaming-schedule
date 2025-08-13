"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, Target, AlertTriangle } from "lucide-react"

export default function TeamsPage() {
  const teams = [
    {
      id: "pm",
      name: "PM（プロジェクト管理）",
      leader: "中井健登",
      description: "プロジェクト全体の管理・調整、スケジュール管理、KPI追跡",
      color: "bg-blue-500",
      members: 1,
      documents: ["会議議事録", "KPIダッシュボード", "進捗管理", "タスク管理"]
    },
    {
      id: "content",
      name: "Content（コンテンツ制作）",
      leader: "ゆき、ちょこ、こばやし ゆうた",
      description: "セミナー資料、ボーナス特典、教材、技術ドキュメントの制作",
      color: "bg-green-500",
      members: 3,
      documents: ["セミナー資料", "ボーナス特典", "技術ガイド", "マンガコンテンツ"]
    },
    {
      id: "marketing",
      name: "Marketing（マーケティング）",
      leader: "わど、中上裕三、Yui Mitsui",
      description: "セミナー実行、販売戦略、SNSマーケティング、顧客獲得",
      color: "bg-purple-500",
      members: 3,
      documents: ["販売スクリプト", "競合分析", "Instagram戦略", "LP設計"]
    },
    {
      id: "design",
      name: "Design（デザイン）",
      leader: "デザインチーム",
      description: "ブランディング、マーケティング素材、配信用ビジュアル制作",
      color: "bg-pink-500",
      members: null,
      documents: ["ブランドガイドライン", "デザインテンプレート", "ビジュアルアセット"]
    },
    {
      id: "live",
      name: "Live（配信）",
      leader: "配信チーム",
      description: "YouTube配信、セミナーライブ、配信環境構築・運用",
      color: "bg-red-500",
      members: null,
      documents: ["配信スケジュール", "技術セットアップ", "配信チェックリスト"]
    },
    {
      id: "x",
      name: "X（SNS）",
      leader: "SNSチーム",
      description: "Xマーケティング、アルゴリズム最適化、インフルエンサー連携",
      color: "bg-gray-800",
      members: null,
      documents: ["投稿戦略", "アルゴリズム分析", "個人アカウント戦略"]
    }
  ]

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
      {/* プロジェクト概要 */}
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
        <h2 className="text-2xl font-bold mb-4">チーム一覧</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Link key={team.id} href={`/teams/${team.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${team.color}`}></div>
                    <CardTitle className="text-lg">{team.name}</CardTitle>
                  </div>
                  <CardDescription>
                    <div className="mb-2"><strong>担当:</strong> {team.leader}</div>
                    {team.members && (
                      <div className="mb-2 flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {team.members}名
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">{team.description}</p>
                  <div className="flex flex-wrap gap-1">
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* 共通ドキュメント */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">共通リソース</h2>
        <div className="grid md:grid-cols-2 gap-6">
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
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">製品仕様</Badge>
                  <Badge variant="secondary" className="text-xs">技術アーキテクチャ</Badge>
                  <Badge variant="secondary" className="text-xs">緊急対応</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔗 外部リンク
              </CardTitle>
              <CardDescription>
                関連サービス・ツール
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>📺 <strong>配信:</strong> YouTube Live</div>
                <div>💬 <strong>コミュニティ:</strong> Discord</div>
                <div>📱 <strong>SNS:</strong> X (Twitter)</div>
                <div>📊 <strong>管理:</strong> Notion</div>
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