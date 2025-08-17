'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Clock, Users, Target, Gift, Star, CheckCircle } from 'lucide-react'

// データ定義
const scheduleData = {
  week1: [
    {
      date: '8/18',
      day: '月',
      bonuses: ['セミナー台本BOT', 'AIマンガコンセプトジェネレーター', 'ショート動画企画＆台本作成プロンプト集'],
      event: 'DIFY活用術 - ノーコードAI開発入門',
      time: '21:00',
      platform: 'YouTube Live',
      target: 'プログラミング初心者・AIアプリ開発希望者',
      status: 'upcoming'
    },
    {
      date: '8/19',
      day: '火',
      bonuses: ['AI画像生成ツール', 'CLI・開発ツール攻略マニュアル'],
      event: 'Google AI Studio Build - 30分でAIアプリ開発',
      time: '21:00',
      platform: 'YouTube Live',
      target: '非エンジニア・プロトタイプ開発者',
      status: 'upcoming'
    },
    {
      date: '8/20',
      day: '水',
      bonuses: ['SNSコンテンツ自動生成プロンプト', 'Obsidian情報整理術'],
      event: 'GENSPARK実演 - 設計書→コード自動生成',
      time: '21:00',
      platform: 'YouTube Live',
      target: 'AIネイティブ開発・高速開発志向',
      status: 'upcoming'
    },
    {
      date: '8/21',
      day: '木',
      bonuses: ['AIゲームクイズ', '漫画ストーリー作成プロンプト'],
      event: 'ゲーム配信（マリオカート）',
      time: '21:00',
      platform: 'ゲーム配信',
      target: 'クリエイター・マネタイズ学習者',
      status: 'upcoming'
    }
  ],
  week2: [
    {
      date: '8/22',
      day: '金',
      bonuses: ['AI開発スキル完全ガイド'],
      event: 'わどユニコXスペース - ローンチ動画技術解説',
      time: '21:00',
      platform: 'X Spaces',
      target: 'AI開発学習者・スキルアップ志向',
      status: 'upcoming'
    },
    {
      date: '8/23',
      day: '土',
      bonuses: ['🎯バイブコーディング完全ロードマップ（限定）'],
      event: 'わどスクオフ会 - バイブコーディングセミナー',
      time: '午後',
      platform: 'オフライン+配信',
      target: 'セミナー参加者・実践コミット層',
      status: 'featured'
    },
    {
      date: '8/24',
      day: '日',
      bonuses: ['セミナースライド骨子をもとにしたnote販売'],
      event: 'MANUS実演 - AIエージェント開発',
      time: '21:00',
      platform: 'YouTube Live',
      target: '業務自動化志向・エージェント開発',
      status: 'upcoming'
    }
  ],
  week3: [
    {
      date: '8/25',
      day: '月',
      bonuses: ['図解作成BOT（サムネ作成）'],
      event: 'Claude Code + Gemini CLI - 大規模開発効率化',
      time: '21:00',
      platform: 'YouTube Live',
      target: '上級開発者・効率化追求',
      status: 'upcoming'
    },
    {
      date: '8/26',
      day: '火',
      bonuses: ['CODEX CLI完全攻略'],
      event: 'CODEX CLI実演 - ターミナル×AI活用',
      time: '21:00',
      platform: 'YouTube Live',
      target: 'CLI開発者・OpenAI活用者',
      status: 'upcoming'
    },
    {
      date: '8/27',
      day: '水',
      bonuses: ['セミナー事前資料'],
      event: 'わどユニコXスペース - セミナー最終告知',
      time: '21:00',
      platform: 'X Spaces',
      target: 'セミナー参加検討者',
      status: 'upcoming'
    },
    {
      date: '8/28-30',
      day: '木-土',
      bonuses: ['🔥セミナー参加者限定特典'],
      event: '🎯開発ローンチセミナー - 3日間集中プログラム',
      time: '全日',
      platform: 'メイン会場',
      target: '全参加者',
      status: 'main-event'
    },
    {
      date: '8/31',
      day: '日',
      bonuses: ['セミナーフォローアップ特典'],
      event: 'Cursor×Obsidian - 知識駆動開発',
      time: '21:00',
      platform: 'YouTube Live',
      target: 'セミナー参加者・継続学習者',
      status: 'upcoming'
    }
  ]
}

const bonusList = [
  "バイブコーディング完全ロードマップ",
  "Obsidianを活用した情報整理術", 
  "Codex CLI完全攻略マニュアル",
  "AI開発に必要なスキル完全ガイド",
  "CLI・開発ツール完全攻略マニュアル",
  "Cursor×Claude Code実践マスターガイド",
  "AI開発者のための収益化戦略大全",
  "AI画像生成ツールプロンプト最適化集",
  "SNS用コンテンツ自動生成企画プロンプト集",
  "AIゲーム＆クイズ作成プロンプト集"
]

const strategies = [
  {
    title: "段階的レベルアップ",
    description: "初心者→実践者→上級者の順で誘導",
    icon: Target
  },
  {
    title: "毎日配信",
    description: "継続的エンゲージメントでセミナーへの期待値醸成",
    icon: Calendar
  },
  {
    title: "限定性演出",
    description: "オプチャ参加者限定配布で希少価値創出",
    icon: Star
  },
  {
    title: "重要タッチポイント",
    description: "8/23わどスクオフ会での最重要特典配布",
    icon: CheckCircle
  }
]

function getStatusBadge(status: string) {
  switch (status) {
    case 'featured':
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">🎯 重要</Badge>
    case 'main-event':
      return <Badge className="bg-red-500 hover:bg-red-600">🔥 メインイベント</Badge>
    case 'completed':
      return <Badge variant="secondary">✅ 完了</Badge>
    default:
      return <Badge variant="outline">📅 予定</Badge>
  }
}

function getPlatformIcon(platform: string) {
  if (platform.includes('YouTube')) return '🎥'
  if (platform.includes('X Spaces')) return '🎤'
  if (platform.includes('オフライン')) return '🏢'
  if (platform.includes('ゲーム')) return '🎮'
  return '📺'
}

export default function BonusSchedulePage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🎁 8月無料特典配布スケジュール
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          バイブコーディングローンチプロジェクト - 特典配布計画
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>配布期間: 8月18日〜31日</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Gift className="h-4 w-4" />
            <span>合計10個の無料特典</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Target className="h-4 w-4" />
            <span>セミナー開催: 8/28-30</span>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="overview" className="text-xs sm:text-sm">概要</TabsTrigger>
          <TabsTrigger value="week1" className="text-xs sm:text-sm">第1週</TabsTrigger>
          <TabsTrigger value="week2" className="text-xs sm:text-sm">第2週</TabsTrigger>
          <TabsTrigger value="week3" className="text-xs sm:text-sm">第3週</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((strategy, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <strategy.icon className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">{strategy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5" />
                事前配布特典一覧
              </CardTitle>
              <CardDescription>
                8月期間中に配布される10個の無料特典
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {bonusList.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold flex items-center justify-center">
                      {index + 1}
                    </div>
                    <span className="text-sm">{bonus}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {['week1', 'week2', 'week3'].map((week, weekIndex) => (
          <TabsContent key={week} value={week} className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                第{weekIndex + 1}週: {weekIndex === 0 ? '基礎編' : weekIndex === 1 ? '実践編' : '応用編'}
              </h2>
              <p className="text-muted-foreground">
                {weekIndex === 0 && '基礎ツール＋簡単プロンプトで初心者をサポート'}
                {weekIndex === 1 && '収益化＋実用ツールで実践者を育成'}
                {weekIndex === 2 && '開発環境＋効率化で上級者を満足させる'}
              </p>
            </div>

            <div className="grid gap-6">
              {(scheduleData as any)[week].map((item: any, index: number) => (
                <Card key={index} className={item.status === 'featured' ? 'border-yellow-400 shadow-lg' : item.status === 'main-event' ? 'border-red-400 shadow-lg' : ''}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="text-center flex-shrink-0">
                          <div className="text-2xl font-bold text-blue-600">{item.date}</div>
                          <div className="text-sm text-muted-foreground">{item.day}曜日</div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                            {getPlatformIcon(item.platform)}
                            <span className="truncate">{item.event}</span>
                          </CardTitle>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {item.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span className="truncate">{item.platform}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center sm:justify-end">
                        {getStatusBadge(item.status)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Gift className="h-4 w-4" />
                          配布特典
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.bonuses.map((bonus: string, bonusIndex: number) => (
                            <Badge key={bonusIndex} variant="secondary" className="text-xs">
                              {bonus}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          ターゲット
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.target}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}