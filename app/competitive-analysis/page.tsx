import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BarChart3, Target, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: '競合分析 - バイブコーディングローンチ戦略',
  description: '競合他社の成功事例を分析し、バイブコーディングローンチに活用する具体的な戦略をまとめました。',
}

export default function CompetitiveAnalysisPage() {
  const strategies = [
    {
      title: 'セミナー前盛り上げ戦略',
      description: '巻き込み型エンゲージメントと期待値コントロール',
      icon: TrendingUp,
      link: '/competitive-analysis/pre-seminar',
      highlights: ['スペース開催時間ヒアリング', '価格サプライズ演出', 'コミュニティ参加型企画']
    },
    {
      title: 'セミナー参加者最大化',
      description: '動画・音声コンテンツとリアルタイム盛り上げ',
      icon: Users,
      link: '/competitive-analysis/maximization',
      highlights: ['推しポイント動画', 'リアルタイム実況', '複数開催オプション']
    },
    {
      title: 'セミナー後フォロー',
      description: '追加開催戦略とセグメント別アプローチ',
      icon: Target,
      link: '/competitive-analysis/follow-up',
      highlights: ['人気につき追加開催', '個別相談対応', 'コミュニティ誘導']
    },
    {
      title: '価格・価値提案戦略',
      description: '給付金制度活用と段階的価格開示',
      icon: BarChart3,
      link: '/competitive-analysis/pricing',
      highlights: ['給付金で実質9万円', '295万円相当ボーナス', '4時間特典動画']
    }
  ]

  const competitorInsights = [
    {
      name: 'なまいきくん',
      insights: ['声の抑揚・勢いの重要性', '合宿型対話でのコンテンツ生成', '運営メンバーの声あり参加'],
      category: 'セミナー運営'
    },
    {
      name: 'ぽにょさん',
      insights: ['巻き込み型で盛り上げる', 'オプチャでのヒアリング活用', '一緒に作る感覚の演出'],
      category: '事前盛り上げ'
    },
    {
      name: 'せいぬさん',
      insights: ['人気すぎたので追加開催', 'オプチャリアルタイム実況', '限定感の演出'],
      category: '事後フォロー'
    },
    {
      name: 'ケンさん',
      insights: ['セミナー推しポイント動画', '短時間での価値訴求', 'ビジュアル重視の説明'],
      category: 'コンテンツ戦略'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダーセクション */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">競合分析レポート</h1>
        <p className="text-xl text-muted-foreground mb-6">
          成功する競合の戦略を分析し、バイブコーディングローンチに活用
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="secondary">売上目標: 3,000万円</Badge>
          <Badge variant="secondary">参加者目標: 1,000名</Badge>
          <Badge variant="secondary">成約率目標: 10-15%</Badge>
        </div>
      </div>

      {/* 戦略概要セクション */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">実装戦略</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <strategy.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{strategy.title}</CardTitle>
                </div>
                <CardDescription>{strategy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {strategy.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={strategy.link}>
                    詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AI開発講座 競合分析セクション */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">🤖 AI開発講座 競合分析</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">開発系講座・スクール</CardTitle>
              <CardDescription>プログラミング教育市場の動向</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">価格帯分析</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• 低単価講座: 5-30万円（基礎学習中心）</li>
                    <li>• 高単価スクール: 50-100万円（転職保証付き）</li>
                    <li>• サブスク型: 月1-5万円（継続学習型）</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">差別化ポイント</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• AI特化 × 実践重視</li>
                    <li>• 90日短期集中プログラム</li>
                    <li>• 100個Bot開発の圧倒的ボリューム</li>
                    <li>• 「書く」から「対話」へのパラダイムシフト</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="text-xl text-green-700">バイブコーディングの優位性</CardTitle>
              <CardDescription>競合との明確な違い</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">独自の強み</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• リアルタイム開発 × 生配信サポート</li>
                    <li>• わど × ユニコーン社の強力タッグ</li>
                    <li>• 実際のローンチ業務でBot活用実例</li>
                    <li>• 2段階ローンチによる継続収益</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">市場ポジショニング</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• 初心者向け × 即実践 × 高収益</li>
                    <li>• 革新的学習法による時間短縮</li>
                    <li>• コミュニティドリブンな学習環境</li>
                    <li>• 成果保証レベルのサポート体制</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 競合インサイトセクション */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">競合から学んだ成功要因</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {competitorInsights.map((competitor, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{competitor.name}</CardTitle>
                  <Badge>{competitor.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {competitor.insights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 重要数値セクション */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">目標数値・KPI</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">2,000名</CardTitle>
              <CardDescription>オープンチャット目標</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                セミナー申込1,500名<br />
                オープンチャット2,000名達成
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">100名</CardTitle>
              <CardDescription>AI開発講座 受講目標</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                第1回ローンチ目標<br />
                90日で収益化達成
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">3,000万円</CardTitle>
              <CardDescription>売上目標</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                100名×30万円<br />
                粗利率85%（2,550万円）
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* アクションセクション */}
      <section className="text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">実装スケジュール</CardTitle>
            <CardDescription>競合分析を基にした具体的な実行計画</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div>
                <h4 className="font-semibold mb-2">8月14日まで</h4>
                <ul className="text-sm space-y-1">
                  <li>• セミナー動画制作</li>
                  <li>• 巻き込み企画開始</li>
                  <li>• メルマガ配信開始</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">8月21日〜</h4>
                <ul className="text-sm space-y-1">
                  <li>• X戦略実行</li>
                  <li>• 推しポイント動画公開</li>
                  <li>• 実況準備</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">8月28-30日</h4>
                <ul className="text-sm space-y-1">
                  <li>• セミナー実施</li>
                  <li>• リアルタイム対応</li>
                  <li>• 追加開催判断</li>
                </ul>
              </div>
            </div>
            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/competitive-analysis/pre-seminar">
                  戦略詳細を確認する <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}