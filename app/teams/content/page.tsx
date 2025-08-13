"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, Target } from "lucide-react"

export default function ContentTeamPage() {
  const teamInfo = {
    name: "Content（コンテンツ制作）チーム",
    members: "ゆき、ちょこ、こばやし ゆうた",
    description: "顧客に提供する価値あるコンテンツの企画・制作を行います。セミナー資料、ボーナス特典、教材などを担当します。",
    color: "bg-green-500"
  }

  const responsibilities = [
    "セミナー資料の作成",
    "ボーナス特典コンテンツの制作", 
    "教材・ガイドの作成",
    "動画スクリプトの作成",
    "マンガ・イラストコンテンツの制作",
    "技術ドキュメントの作成"
  ]

  const documentCategories = [
    {
      title: "🎯 ボーナス特典・プレゼント資料",
      path: "present",
      description: "メインボーナスコンテンツ",
      items: ["Claude Code完全ガイド", "AIエージェント定義集", "バイブコーディング入門", "技術マニュアル"]
    },
    {
      title: "📚 セミナー資料",
      path: "seminar-slides", 
      description: "セミナースライドとスクリプト",
      items: ["詳細セミナー構成", "セミナースクリプト", "統合セミナー構成"]
    },
    {
      title: "🎁 無料特典・ギフト",
      path: "free-gifts",
      description: "無料配布コンテンツ",
      items: ["無料ギフト概要", "実装計画", "チーム別ギフト"]
    },
    {
      title: "🔧 技術ガイド・マニュアル", 
      path: "dify-specials",
      description: "技術解説コンテンツ",
      items: ["Dify完全ガイド", "ワークフローサンプル", "Claude-Dify統合"]
    },
    {
      title: "📖 マンガ・イラストコンテンツ",
      path: "manga",
      description: "ビジュアルコンテンツ",
      items: ["マンガコンテンツ", "イラスト素材", "プロジェクト振り返り"]
    },
    {
      title: "💻 開発関連コンテンツ",
      path: "develop",
      description: "開発者向けコンテンツ",
      items: ["AIプロジェクトスターターキット", "開発ツール解説"]
    }
  ]

  const qualityStandards = [
    "価値提供: 顧客に実用的な価値を提供する",
    "分かりやすさ: 初心者でも理解できる内容", 
    "実用性: すぐに使える実践的な内容",
    "独自性: 他では得られない特別な情報"
  ]

  const keyDates = [
    { date: "8月21日", event: "セミナー資料完成", status: "critical" },
    { date: "8月25日", event: "ボーナス特典完成", status: "important" },
    { date: "8月28日", event: "セミナー開始", status: "launch" }
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
            メンバー: {teamInfo.members}
          </Badge>
          <Badge variant="outline">
            制作チーム
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
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* コンテンツ制作ガイドライン */}
          <Card>
            <CardHeader>
              <CardTitle>品質基準</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {qualityStandards.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
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
                        📁 teams/content/{category.path}/
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
          {/* 納期管理 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                納期管理
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {keyDates.map((item, index) => (
                  <div key={index} className={`border-l-2 pl-3 ${
                    item.status === 'critical' ? 'border-red-500' :
                    item.status === 'important' ? 'border-orange-500' :
                    'border-green-500'
                  }`}>
                    <div className={`text-sm font-medium ${
                      item.status === 'critical' ? 'text-red-600 dark:text-red-400' :
                      item.status === 'important' ? 'text-orange-600 dark:text-orange-400' :
                      'text-green-600 dark:text-green-400'
                    }`}>
                      {item.date}
                    </div>
                    <div className="text-sm">{item.event}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 制作フロー */}
          <Card>
            <CardHeader>
              <CardTitle>制作フロー</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div><strong>1. 企画:</strong> テーマと目的を明確化</div>
                <div><strong>2. 構成:</strong> 章立てと流れを設計</div>
                <div><strong>3. 執筆:</strong> 初稿作成</div>
                <div><strong>4. レビュー:</strong> チーム内レビューと修正</div>
                <div><strong>5. 最終確認:</strong> PMチームと最終確認</div>
                <div><strong>6. 公開:</strong> 適切なタイミングで公開</div>
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
                <div><strong>チームメンバー:</strong> ゆき、ちょこ、こばやし ゆうた</div>
                <div><strong>報告先:</strong> PMチーム（中井健登）</div>
                <div><strong>緊急時:</strong> コンテンツチャンネル</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* フッター */}
      <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
        <p>最終更新: 2025年8月13日</p>
        <p className="mt-1">
          詳細なドキュメントは /teams/content/ フォルダ内を参照してください
        </p>
      </div>
    </div>
  )
}