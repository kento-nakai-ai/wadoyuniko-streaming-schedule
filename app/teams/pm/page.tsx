"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, Target } from "lucide-react"

export default function PMTeamPage() {
  const teamInfo = {
    name: "PM（プロジェクト管理）チーム",
    leader: "中井健登",
    description: "プロジェクト全体の管理・調整を担当するチームです。スケジュール管理、進捗管理、KPI追跡を行います。",
    color: "bg-blue-500"
  }

  const responsibilities = [
    "プロジェクト全体のスケジュール管理",
    "各チームの進捗状況の把握と調整", 
    "KPIの設定と追跡",
    "リスク管理と対策",
    "会議の企画・運営",
    "タスク管理とアサイン",
    "プロジェクトドキュメントの管理"
  ]

  const documentCategories = [
    {
      title: "📅 アジェンダ・会議資料",
      path: "agenda",
      description: "会議のアジェンダとフォローアップ",
      items: ["キックオフミーティング", "セミナースライド会議", "オールハンズミーティング", "PM会議"]
    },
    {
      title: "📝 議事録",
      path: "minutes", 
      description: "各種会議の議事録",
      items: ["キックオフ議事録", "リーダーミーティング", "ローンチムービー会議", "ユニコ会議"]
    },
    {
      title: "📊 プロジェクト管理",
      path: "project-management",
      description: "PM戦略と管理",
      items: ["ローンチ改善提案", "PM戦略レポート", "チームメンバーマトリックス"]
    },
    {
      title: "📈 進捗管理", 
      path: "progress-management",
      description: "進捗管理システム",
      items: ["デイリースタンドアップ", "進捗可視化", "ブロッカー報告システム"]
    },
    {
      title: "📊 KPI・ダッシュボード",
      path: "kpi-dashboard",
      description: "KPI追跡とダッシュボード", 
      items: ["日次KPI追跡", "タスク進捗自動化", "リスク可視化", "日次チェックリスト"]
    },
    {
      title: "✅ タスク管理",
      path: "task",
      description: "タスク管理とアクションプラン",
      items: ["中井健登アクションプラン", "今日のチェックリスト", "システムタスク"]
    }
  ]

  const keyDates = [
    { date: "8月14日", event: "大規模コラボレーション発表" },
    { date: "8月21日", event: "ローンチポストキャンペーン開始" },
    { date: "8月28-30日", event: "3日間セミナー実施" }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* ヘッダー */}
      <div className="mb-6">
        <Link href="/teams" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" />
          チーム一覧に戻る
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-6 h-6 rounded-full ${teamInfo.color}`}></div>
          <h1 className="text-3xl font-bold">{teamInfo.name}</h1>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <Badge variant="outline" className="gap-1">
            <Users className="h-4 w-4" />
            リーダー: {teamInfo.leader}
          </Badge>
        </div>
        
        <p className="text-muted-foreground">{teamInfo.description}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {/* 責任範囲 */}
          <Card>
            <CardHeader>
              <CardTitle>主な責任範囲</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* ドキュメント一覧 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">ドキュメント一覧</h2>
            <div className="grid gap-4">
              {documentCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Badge variant="outline" className="text-xs">
                        📁 teams/pm/{category.path}/
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 重要な期日 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                重要な期日
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {keyDates.map((item, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-3">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {item.date}
                    </div>
                    <div className="text-sm">{item.event}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* KPI目標 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                KPI目標
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div><strong>売上目標:</strong> 3000万円</div>
                <div><strong>受講者目標:</strong> 100名</div>
                <div><strong>セミナー登録:</strong> 1000名</div>
                <div><strong>プロジェクト成功率:</strong> 100%</div>
              </div>
            </CardContent>
          </Card>

          {/* 連絡先 */}
          <Card>
            <CardHeader>
              <CardTitle>連絡先</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div><strong>チームリーダー:</strong> 中井健登</div>
                <div><strong>重要事項の報告:</strong> PMチャンネル</div>
                <div><strong>緊急時:</strong> 直接連絡</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* フッター */}
      <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
        <p>最終更新: 2025年8月13日</p>
        <p className="mt-1">
          詳細なドキュメントは /teams/pm/ フォルダ内を参照してください
        </p>
      </div>
    </div>
  )
}