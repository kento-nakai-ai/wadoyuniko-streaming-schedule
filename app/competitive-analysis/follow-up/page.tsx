import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, Calendar, MessageCircle, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'セミナー後フォロー戦略 - 競合分析',
  description: '競合から学んだセミナー後の効果的なフォロー戦略と追加開催手法',
}

export default function FollowUpStrategyPage() {
  const followUpStrategies = [
    {
      title: '追加開催戦略',
      competitor: 'せいぬさん',
      description: '「人気すぎたので追加開催」で限定感と緊急性を演出',
      timeframe: 'セミナー終了後24-48時間',
      tactics: [
        '参加者の熱い要望により追加決定',
        '追加枠は限定30名のみ',
        '追加開催限定の特別ボーナス',
        '申し込み期限の明確化（7日間）'
      ],
      kpi: '追加開催参加率: 20%',
      icon: Calendar
    },
    {
      title: 'セグメント別フォロー',
      competitor: '複数競合',
      description: '関心度別に最適化されたアプローチで成約率向上',
      timeframe: 'セミナー後〜2週間',
      tactics: [
        '高関心者: 30分無料コンサル',
        '中関心者: 詳細カリキュラム説明',
        '低関心者: 継続的な価値提供',
        '段階的なエンゲージメント設計'
      ],
      kpi: '全体成約率: 10-15%',
      icon: Target
    },
    {
      title: 'コミュニティ誘導',
      competitor: '業界ベストプラクティス',
      description: 'Discord参加促進で長期的な関係構築',
      timeframe: '継続的',
      tactics: [
        'コミュニティ限定コンテンツ提供',
        '同期生との繋がり構築支援',
        '定期的な勉強会・交流会',
        '成果共有・称賛の仕組み'
      ],
      kpi: 'コミュニティ参加率: 50%',
      icon: MessageCircle
    }
  ]

  const segmentDetails = [
    {
      segment: '高関心者（購入検討中）',
      percentage: '25%',
      approach: '個別対応・クロージング強化',
      tactics: [
        '30分無料コンサル提供',
        '類似受講生の成果紹介',
        '分割払い・支払い方法提案',
        '期間限定特別価格提案'
      ],
      expectedConversion: '40%'
    },
    {
      segment: '中関心者（検討中）',
      percentage: '50%',
      approach: '情報提供・信頼構築',
      tactics: [
        'より詳細なカリキュラム説明',
        '一部コンテンツの先行体験',
        '同じ状況の受講生体験談',
        '軽いコミットから始める提案'
      ],
      expectedConversion: '15%'
    },
    {
      segment: '低関心者（情報収集段階）',
      percentage: '25%',
      approach: '長期的関係構築',
      tactics: [
        '無料価値提供コンテンツ',
        'メルマガ・SNS継続接触',
        '急がない信頼関係構築',
        '将来的な参加機会案内'
      ],
      expectedConversion: '5%'
    }
  ]

  const timelinePhases = [
    {
      phase: '即時フォロー（24時間以内）',
      actions: [
        '感謝メッセージ + アーカイブ配信',
        '3日間完走証明書 + 限定ボーナス',
        '満足度・購入意向アンケート',
        '個別回答 + 追加資料提供'
      ]
    },
    {
      phase: '追加開催判断（48時間以内）',
      actions: [
        '参加者反応・要望の分析',
        '追加開催の決定・告知',
        '限定感・緊急性の演出',
        '特別特典の追加発表'
      ]
    },
    {
      phase: '個別フォロー（3日-1週間）',
      actions: [
        'セグメント別アプローチ開始',
        '高関心者への個別相談案内',
        '中関心者への詳細情報提供',
        '低関心者への価値提供継続'
      ]
    },
    {
      phase: '最終クロージング（2週間）',
      actions: [
        '最終オファー・限定特典',
        '申し込み期限の明確化',
        '今期最後の募集告知',
        '次回募集は価格改定予告'
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
        <h1 className="text-4xl font-bold mb-4">セミナー後フォロー戦略</h1>
        <p className="text-xl text-muted-foreground mb-6">
          追加開催とセグメント別アプローチで成約率10-15%を実現
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">成約目標: 100-150名</Badge>
          <Badge variant="secondary">売上目標: 3,000-4,500万円</Badge>
          <Badge variant="secondary">フォロー期間: 2週間</Badge>
        </div>
      </div>

      {/* フォロー戦略 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">主要フォロー戦略</h2>
        <div className="space-y-8">
          {followUpStrategies.map((strategy, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                <div className="flex items-center gap-3">
                  <strategy.icon className="h-8 w-8 text-primary" />
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{strategy.title}</CardTitle>
                    <CardDescription className="text-base">
                      <Badge variant="outline" className="mr-2">{strategy.competitor}</Badge>
                      {strategy.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {strategy.kpi}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">実施手法</h4>
                    <ul className="space-y-2">
                      {strategy.tactics.map((tactic, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">実施タイミング</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-medium text-primary mb-2">{strategy.timeframe}</p>
                      <p className="text-sm text-muted-foreground">
                        効果測定と改善を継続的に実施
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* セグメント別詳細戦略 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">セグメント別詳細戦略</h2>
        <div className="space-y-6">
          {segmentDetails.map((segment, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{segment.segment}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">{segment.percentage} of participants</Badge>
                    <Badge variant="default">{segment.expectedConversion} conversion</Badge>
                  </div>
                </div>
                <CardDescription className="text-lg font-medium">
                  {segment.approach}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {segment.tactics.map((tactic, idx) => (
                    <div key={idx} className="bg-muted p-3 rounded-lg">
                      <span className="text-sm font-medium">{tactic}</span>
                    </div>
                  ))}
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
          {timelinePhases.map((phase, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {phase.phase}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {phase.actions.map((action, idx) => (
                    <div key={idx} className="border border-border p-3 rounded-lg">
                      <span className="text-sm">{action}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 限定特典・オファー */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">限定特典・オファー戦略</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>セミナー参加者限定特典</CardTitle>
              <CardDescription>参加者のみの特別オファー</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">早期申込割引</h4>
                <p className="text-sm text-muted-foreground">セミナー後48時間限定価格</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">分割払い無金利</h4>
                <p className="text-sm text-muted-foreground">6回まで分割手数料無料</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">追加ボーナス</h4>
                <p className="text-sm text-muted-foreground">通常では提供しない特別教材</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold">個別サポート</h4>
                <p className="text-sm text-muted-foreground">3ヶ月間の無料相談権</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>希少性・緊急性の演出</CardTitle>
              <CardDescription>購買動機を高める心理的要因</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold">定員制</h4>
                <p className="text-sm text-muted-foreground">今期の募集は30名限定</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold">期間限定</h4>
                <p className="text-sm text-muted-foreground">申し込み受付は7日間のみ</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold">価格上昇予告</h4>
                <p className="text-sm text-muted-foreground">次回募集時は価格改定予定</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold">機会損失</h4>
                <p className="text-sm text-muted-foreground">同じ条件での募集は当分なし</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 期待成果 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">期待成果・KPI</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">12%</CardTitle>
              <CardDescription>全体成約率</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">1,000名参加→120名成約</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">3,600万円</CardTitle>
              <CardDescription>売上目標</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">120名×30万円</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">20%</CardTitle>
              <CardDescription>追加開催参加率</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">200名が追加参加</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">50%</CardTitle>
              <CardDescription>コミュニティ参加率</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">500名が継続エンゲージ</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ナビゲーション */}
      <div className="flex justify-between items-center">
        <Button asChild variant="outline">
          <Link href="/competitive-analysis/maximization">
            <ArrowLeft className="mr-2 h-4 w-4" /> 参加者最大化戦術
          </Link>
        </Button>
        <Button asChild>
          <Link href="/competitive-analysis/pricing">
            価格・価値提案戦略 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}