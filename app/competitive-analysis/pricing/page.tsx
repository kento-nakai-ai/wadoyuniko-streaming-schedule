import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, DollarSign, Gift, Shield, TrendingDown } from 'lucide-react'

export const metadata: Metadata = {
  title: '価格・価値提案戦略 - 競合分析',
  description: '競合から学んだ給付金制度活用と段階的価格開示による効果的な価格戦略',
}

export default function PricingStrategyPage() {
  const pricingStrategies = [
    {
      title: '給付金制度活用',
      competitor: '競合6社分析',
      description: '教育訓練給付金で実質負担を大幅軽減',
      beforeAfter: {
        before: '300,000円',
        after: '90,000円',
        reduction: '70%還付'
      },
      benefits: [
        '教育訓練給付金（最大70%還付）',
        '人材開発支援助成金（企業向け）',
        '自治体補助金（地域支援）',
        '申請サポート体制完備'
      ],
      icon: Shield
    },
    {
      title: '段階的価格開示',
      competitor: 'なまいきくん',
      description: '期待値コントロールで驚きと価値感を演出',
      phases: [
        '「通常100万円相当の内容を...」',
        '「特別価格50万円で提供」',
        '「セミナー参加者限定30万円」',
        '「給付金適用で実質9万円」'
      ],
      psychology: 'アンカリング効果 + 損失回避',
      icon: TrendingDown
    },
    {
      title: 'ボーナス戦略',
      competitor: '業界ベストプラクティス',
      description: '295万円相当の圧倒的なボーナス教材',
      bonusTypes: [
        '33種類の教育ボーナス',
        '4時間特典動画',
        '個別サポート権',
        'コミュニティアクセス'
      ],
      valueProposition: '実質価値595万円（投資の20倍）',
      icon: Gift
    }
  ]

  const pricingComparison = [
    {
      competitor: 'A社',
      price: '800,000円',
      period: '6ヶ月',
      subsidy: '×',
      support: '△',
      bonus: '10万円相当',
      guarantee: '×'
    },
    {
      competitor: 'B社',
      price: '600,000円',
      period: '3ヶ月',
      subsidy: '△',
      support: '○',
      bonus: '50万円相当',
      guarantee: '×'
    },
    {
      competitor: 'バイブコーディング',
      price: '300,000円',
      period: '3ヶ月',
      subsidy: '○',
      support: '○',
      bonus: '295万円相当',
      guarantee: '○'
    }
  ]

  const psychologyTactics = [
    {
      tactic: 'アンカリング効果',
      description: '最初に高い価格を提示して基準点を設定',
      implementation: '「通常100万円相当」→「特別30万円」',
      effect: '大幅な割安感の演出'
    },
    {
      tactic: '損失回避',
      description: '機会を逃すことの損失を強調',
      implementation: '期間限定・数量限定・価格改定予告',
      effect: '今すぐ行動したい動機の創出'
    },
    {
      tactic: '社会的証明',
      description: '他の人の成功事例で安心感を提供',
      implementation: '受講生の成果報告・体験談',
      effect: '購買決定への後押し'
    },
    {
      tactic: '希少性',
      description: '限定性による価値の向上',
      implementation: '30名限定・年2回のみ開催',
      effect: '特別感と緊急性の演出'
    }
  ]

  const paymentOptions = [
    {
      method: '一括払い',
      price: '285,000円',
      benefit: '5%割引適用',
      audience: '資金に余裕のある層'
    },
    {
      method: '分割払い（12回）',
      price: '25,000円/月',
      benefit: '金利0%',
      audience: '月々の負担を軽減したい層'
    },
    {
      method: 'ボーナス払い',
      price: '150,000円×2回',
      benefit: '6月・12月払い',
      audience: 'ボーナス活用層'
    },
    {
      method: '給付金後払い',
      price: '90,000円',
      benefit: '給付金受給後',
      audience: '実質負担重視層'
    }
  ]

  const valueStack = [
    { item: 'バイブコーディング基本コース', value: '300,000円' },
    { item: '33種類教育ボーナス', value: '295万円相当' },
    { item: '4時間特典動画', value: '50,000円相当' },
    { item: '3ヶ月個別サポート', value: '100,000円相当' },
    { item: 'コミュニティアクセス', value: '50,000円相当' },
    { item: '就職転職保証', value: 'プライスレス' }
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
        <h1 className="text-4xl font-bold mb-4">価格・価値提案戦略</h1>
        <p className="text-xl text-muted-foreground mb-6">
          給付金制度活用と心理的価格戦略で30万円を9万円の実質負担に
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">通常価格: 30万円</Badge>
          <Badge variant="secondary">給付金適用: 9万円</Badge>
          <Badge variant="secondary">総価値: 595万円</Badge>
        </div>
      </div>

      {/* 価格戦略 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">主要価格戦略</h2>
        <div className="space-y-8">
          {pricingStrategies.map((strategy, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-green-50 dark:from-yellow-950 dark:to-green-950">
                <div className="flex items-center gap-3">
                  <strategy.icon className="h-8 w-8 text-primary" />
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{strategy.title}</CardTitle>
                    <CardDescription className="text-base">
                      <Badge variant="outline" className="mr-2">{strategy.competitor}</Badge>
                      {strategy.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {strategy.beforeAfter && (
                  <div className="mb-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-center gap-8">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">通常価格</p>
                        <p className="text-2xl font-bold line-through text-red-500">{strategy.beforeAfter.before}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">実質負担</p>
                        <p className="text-3xl font-bold text-green-600">{strategy.beforeAfter.after}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">軽減率</p>
                        <p className="text-xl font-bold text-blue-600">{strategy.beforeAfter.reduction}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {strategy.benefits && (
                  <div>
                    <h4 className="font-semibold mb-3">制度活用メリット</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {strategy.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950 rounded">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {strategy.phases && (
                  <div>
                    <h4 className="font-semibold mb-3">価格開示フェーズ</h4>
                    <div className="space-y-2">
                      {strategy.phases.map((phase, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 border-l-4 border-primary pl-4">
                          <span className="font-medium text-sm">Step {idx + 1}:</span>
                          <span className="text-sm">{phase}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      <strong>心理効果:</strong> {strategy.psychology}
                    </p>
                  </div>
                )}
                
                {strategy.bonusTypes && (
                  <div>
                    <h4 className="font-semibold mb-3">ボーナス内容</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {strategy.bonusTypes.map((bonus, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-950 rounded">
                          <Gift className="h-4 w-4 text-yellow-600" />
                          <span className="text-sm">{bonus}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-lg font-bold text-center text-primary">
                      {strategy.valueProposition}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 競合比較表 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">競合比較表</h2>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted">
                    <th className="p-4 text-left">項目</th>
                    {pricingComparison.map((comp, idx) => (
                      <th key={idx} className={`p-4 text-center ${comp.competitor === 'バイブコーディング' ? 'bg-primary text-primary-foreground' : ''}`}>
                        {comp.competitor}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">価格</td>
                    {pricingComparison.map((comp, idx) => (
                      <td key={idx} className={`p-4 text-center ${comp.competitor === 'バイブコーディング' ? 'bg-green-50 dark:bg-green-950 font-bold' : ''}`}>
                        {comp.price}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">期間</td>
                    {pricingComparison.map((comp, idx) => (
                      <td key={idx} className="p-4 text-center">{comp.period}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">給付金対応</td>
                    {pricingComparison.map((comp, idx) => (
                      <td key={idx} className="p-4 text-center">{comp.subsidy}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">個別サポート</td>
                    {pricingComparison.map((comp, idx) => (
                      <td key={idx} className="p-4 text-center">{comp.support}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">ボーナス教材</td>
                    {pricingComparison.map((comp, idx) => (
                      <td key={idx} className={`p-4 text-center ${comp.competitor === 'バイブコーディング' ? 'bg-yellow-50 dark:bg-yellow-950 font-bold' : ''}`}>
                        {comp.bonus}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">就職保証</td>
                    {pricingComparison.map((comp, idx) => (
                      <td key={idx} className="p-4 text-center">{comp.guarantee}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 心理的価格戦術 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">心理的価格戦術</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {psychologyTactics.map((tactic, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{tactic.tactic}</CardTitle>
                <CardDescription>{tactic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">実装方法</h4>
                    <p className="text-sm bg-muted p-2 rounded">{tactic.implementation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">期待効果</h4>
                    <p className="text-sm text-green-600">{tactic.effect}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 支払い方法 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">支払い方法の最適化</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentOptions.map((option, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{option.method}</CardTitle>
                <CardDescription className="text-2xl font-bold text-primary">
                  {option.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="mb-3">{option.benefit}</Badge>
                <p className="text-sm text-muted-foreground">{option.audience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 価値スタック */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">価値スタック（総額595万円）</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {valueStack.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="font-medium">{item.item}</span>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {item.value}
                  </Badge>
                </div>
              ))}
              <div className="border-t-2 border-primary pt-4">
                <div className="flex items-center justify-between text-xl font-bold">
                  <span>合計価値</span>
                  <Badge variant="default" className="text-xl px-4 py-2">
                    595万円相当
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-lg mt-2">
                  <span>あなたの投資</span>
                  <span className="text-green-600 font-bold">30万円（実質9万円）</span>
                </div>
                <div className="text-center mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">投資回収率: 約20倍</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ナビゲーション */}
      <div className="flex justify-between items-center">
        <Button asChild variant="outline">
          <Link href="/competitive-analysis/follow-up">
            <ArrowLeft className="mr-2 h-4 w-4" /> セミナー後フォロー
          </Link>
        </Button>
        <Button asChild>
          <Link href="/competitive-analysis">
            競合分析トップに戻る <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}