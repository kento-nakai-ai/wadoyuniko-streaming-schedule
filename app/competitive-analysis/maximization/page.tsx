import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, Play, Mic, Radio, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'セミナー参加者最大化戦術 - 競合分析',
  description: '競合から学んだセミナー参加者を最大化するための動画・音声コンテンツ戦略',
}

export default function MaximizationStrategyPage() {
  const contentStrategies = [
    {
      title: 'セミナー推しポイント動画',
      competitor: 'ケンさん',
      description: 'セミナーの価値を短時間で効果的に伝える動画コンテンツ',
      specs: {
        duration: '3-5分',
        content: ['バイブコーディングの独自性', '30万円の価値説明', '成功事例・実績', '限定特典の魅力'],
        format: 'YouTube + Twitter動画',
        timing: '8月21日公開'
      },
      icon: Play
    },
    {
      title: '音声コンテンツ解説',
      competitor: '寝稼ぎさん',
      description: '移動中でも聞けるコース魅力の音声解説',
      specs: {
        duration: '10-15分',
        content: ['コースの核心ポイント', '他社との差別化', '参加者体験談', 'セミナー限定情報'],
        format: 'Podcast + Voicy',
        timing: '8月23日配信'
      },
      icon: Mic
    },
    {
      title: 'リアルタイム実況',
      competitor: 'せいぬさん',
      description: 'オプチャでのセミナー中継・実況でエンゲージメント向上',
      specs: {
        duration: 'セミナー全期間',
        content: ['参加者数リアルタイム報告', '質問・コメント紹介', 'ハイライト実況', '感想シェア'],
        format: 'Discord + Twitter',
        timing: 'セミナー開催中'
      },
      icon: Radio
    }
  ]

  const participationBarriers = [
    {
      barrier: '時間的制約',
      solution: '複数日程・時間帯の設定',
      details: ['平日夜19:00-21:00', '土日昼13:00-15:00', '早朝7:00-9:00']
    },
    {
      barrier: '技術的不安',
      solution: 'アーカイブ視聴・音声のみ参加',
      details: ['7日間限定アーカイブ', '音声のみ参加可能', '倍速再生対応']
    },
    {
      barrier: '参加への躊躇',
      solution: '段階的情報開示・期待値管理',
      details: ['第1弾：開催発表', '第2弾：講師発表', '第3弾：特典発表']
    }
  ]

  const engagementTactics = [
    {
      phase: 'セミナー30分前',
      actions: ['参加者カウント発表', 'オプチャ盛り上げ開始', '最終準備案内']
    },
    {
      phase: 'セミナー開始直前',
      actions: ['「まだ間に合います」最終告知', '参加URL再配布', '運営メンバー声かけ']
    },
    {
      phase: 'セミナー中',
      actions: ['リアルタイム実況', '質問・コメント紹介', 'チャット監視・即時対応']
    },
    {
      phase: 'セミナー休憩中',
      actions: ['感想シェア促進', '次セクション予告', 'Q&A整理']
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ナビゲーション */}
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/competitive-analysis">
            <ArrowLeft className="mr-2 h-4 w-4" /> 競合分析トップに戻る
          </Link>
        </Button>
      </div>

      {/* ヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">セミナー参加者最大化戦術</h1>
        <p className="text-xl text-muted-foreground mb-6">
          動画・音声コンテンツとリアルタイム盛り上げで参加者1,000名突破
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">申込目標: 1,500名</Badge>
          <Badge variant="secondary">実参加目標: 1,000名</Badge>
          <Badge variant="secondary">完走目標: 700名</Badge>
        </div>
      </div>

      {/* コンテンツ戦略 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">コンテンツ戦略</h2>
        <div className="space-y-8">
          {contentStrategies.map((strategy, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                <div className="flex items-center gap-3">
                  <strategy.icon className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl">{strategy.title}</CardTitle>
                    <CardDescription className="text-base">
                      <Badge variant="outline" className="mr-2">{strategy.competitor}</Badge>
                      {strategy.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">コンテンツ内容</h4>
                    <ul className="space-y-2">
                      {strategy.specs.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">仕様・配信情報</h4>
                      <div className="bg-muted p-4 rounded-lg space-y-2">
                        <p><span className="font-medium">長さ:</span> {strategy.specs.duration}</p>
                        <p><span className="font-medium">配信:</span> {strategy.specs.format}</p>
                        <p><span className="font-medium">公開:</span> {strategy.specs.timing}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 参加障壁軽減策 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">参加障壁軽減策</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {participationBarriers.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-red-600">{item.barrier}</CardTitle>
                <CardDescription className="text-lg font-medium text-green-600">
                  {item.solution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* リアルタイム盛り上げ戦術 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">リアルタイム盛り上げ戦術</h2>
        <div className="space-y-4">
          {engagementTactics.map((tactic, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {tactic.phase}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {tactic.actions.map((action, idx) => (
                    <div key={idx} className="bg-muted p-3 rounded-lg text-center">
                      <span className="text-sm font-medium">{action}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3日間完走支援 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">3日間完走支援策</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>日別テーマ設定</CardTitle>
              <CardDescription>明確な学習目標で継続を促進</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Day 1: 基礎</h4>
                <p className="text-sm text-muted-foreground">AI開発の基本概念と環境構築</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">Day 2: 実践</h4>
                <p className="text-sm text-muted-foreground">実際のプロジェクト制作</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Day 3: 応用</h4>
                <p className="text-sm text-muted-foreground">高度な技術とキャリア設計</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>モチベーション維持</CardTitle>
              <CardDescription>継続参加を促す仕組み作り</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span className="text-sm">各日異なる成功者の体験談</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm">すぐに使えるテクニック提供</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">長期的な成長イメージ提示</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-sm">グループチャットでの仲間づくり</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 数値目標 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">数値目標・KPI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">67%</CardTitle>
              <CardDescription>申込→実参加率</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">1,500名申込→1,000名参加</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">70%</CardTitle>
              <CardDescription>3日間完走率</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">1,000名参加→700名完走</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">30%</CardTitle>
              <CardDescription>チャット参加率</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">300名がアクティブ参加</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">100件</CardTitle>
              <CardDescription>1日あたり質問数</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">高いエンゲージメント維持</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ナビゲーション */}
      <div className="flex justify-between items-center">
        <Button asChild variant="outline">
          <Link href="/competitive-analysis/pre-seminar">
            <ArrowLeft className="mr-2 h-4 w-4" /> 事前盛り上げ戦略
          </Link>
        </Button>
        <Button asChild>
          <Link href="/competitive-analysis/follow-up">
            セミナー後フォロー <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}