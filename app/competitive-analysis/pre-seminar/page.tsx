import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, MessageSquare, TrendingUp, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'セミナー前盛り上げ戦略 - 競合分析',
  description: '競合分析から学んだセミナー前の効果的な盛り上げ戦略と巻き込み型エンゲージメント手法',
}

export default function PreSeminarStrategyPage() {
  const strategies = [
    {
      title: '巻き込み型エンゲージメント',
      competitor: 'ぽにょさん',
      description: 'スペース開催時間をオプチャでヒアリングし、一緒に作っていく感覚を演出',
      tactics: [
        'オプチャで開催時間の意見募集',
        'セミナー内容の一部を参加者と決定',
        'コミュニティメンバーの提案を実際に採用',
        '「みんなで作る」感覚の醸成'
      ],
      implementation: '8月14日〜21日に実施',
      icon: Users
    },
    {
      title: '期待値コントロール',
      competitor: 'なまいきくん',
      description: '高額商品のような盛り上げから破格価格への転換で驚きを演出',
      tactics: [
        'Xで「いよいよ公開します」と高額感を演出',
        '実際は100円という破格でnote販売',
        '期待値を上げてからのサプライズ',
        '3日間セミナー参加特典で本命に誘導'
      ],
      implementation: '8月21日〜27日に段階実施',
      icon: TrendingUp
    },
    {
      title: 'SNS戦略',
      competitor: '複数競合',
      description: 'Twitter/Xでの効果的な情報発信とエンゲージメント獲得',
      tactics: [
        'カウントダウン投稿で緊迫感演出',
        'ハッシュタグ企画で拡散促進',
        'RT企画でリーチ拡大',
        'セミナー内容のチラ見せ投稿'
      ],
      implementation: '8月14日〜継続実施',
      icon: MessageSquare
    }
  ]

  const timeline = [
    {
      date: '8月14日',
      milestone: 'コラボ発表',
      actions: [
        '巻き込み企画開始',
        'オプチャでのヒアリング開始',
        'セミナー動画コンテンツ制作開始'
      ]
    },
    {
      date: '8月17日',
      milestone: '中間チェック',
      actions: [
        'エンゲージメント状況確認',
        '参加予定者数の把握',
        'コンテンツ調整・追加制作'
      ]
    },
    {
      date: '8月21日',
      milestone: 'ローンチ投稿開始',
      actions: [
        '期待値コントロール投稿開始',
        'X戦略本格実行',
        'セミナー推しポイント動画公開'
      ]
    },
    {
      date: '8月25日',
      milestone: '最終盛り上げ',
      actions: [
        '「まもなく開催」投稿',
        '最終参加呼びかけ',
        '特典内容の最終発表'
      ]
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
        <h1 className="text-4xl font-bold mb-4">セミナー前盛り上げ戦略</h1>
        <p className="text-xl text-muted-foreground mb-6">
          競合成功事例から学ぶ効果的なエンゲージメント手法
        </p>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          実施期間: 8月14日〜27日
        </Badge>
      </div>

      {/* 戦略詳細 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">実装戦略</h2>
        <div className="space-y-8">
          {strategies.map((strategy, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
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
                    <h4 className="font-semibold mb-3 text-lg">具体的手法</h4>
                    <ul className="space-y-2">
                      {strategy.tactics.map((tactic, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Zap className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">実施スケジュール</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-medium text-primary">{strategy.implementation}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        効果測定を行いながら継続的に最適化
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 実施タイムライン */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">実施タイムライン</h2>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Badge variant="default" className="text-base px-3 py-1">
                    {item.date}
                  </Badge>
                  <CardTitle className="text-xl">{item.milestone}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {item.actions.map((action, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2 bg-muted rounded">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{action}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 期待効果 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">期待効果・KPI</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">1,500名</CardTitle>
              <CardDescription>セミナー申込目標</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                巻き込み型エンゲージメントと<br />
                期待値コントロールによる効果
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">30%</CardTitle>
              <CardDescription>SNSエンゲージメント率</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                ハッシュタグ企画とRT企画による<br />
                拡散効果の最大化
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">50%</CardTitle>
              <CardDescription>オプチャ参加率</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                コミュニティでの積極的な<br />
                意見交換・企画参加
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ナビゲーション */}
      <div className="flex justify-between items-center">
        <Button asChild variant="outline">
          <Link href="/competitive-analysis">
            <ArrowLeft className="mr-2 h-4 w-4" /> 戻る
          </Link>
        </Button>
        <Button asChild>
          <Link href="/competitive-analysis/maximization">
            参加者最大化戦術 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}