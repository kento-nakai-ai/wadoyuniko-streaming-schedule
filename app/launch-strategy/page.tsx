"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Calendar, Target, Users, Lightbulb, TrendingUp, MessageSquare, Zap, Brain, CheckCircle, AlertTriangle, Star } from "lucide-react"

export default function LaunchStrategyPage() {
  const [activePhase, setActivePhase] = useState("phase1")
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              ローンチ投稿戦略ガイド
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              効果的なローンチの呼吸で売上を最大化 🚀
            </p>
            <p className="text-lg text-muted-foreground">
              段階的に期待感を高め、理想客を育成する完全マニュアル
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* 概要カード */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Calendar className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>3つのフェーズ</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                2-3週間にわたる段階的アプローチ
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Brain className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>6つの必須教育</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                読者を理想客に変える核心要素
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Zap className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>6つの強化教育</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                効果を最大化する補強要素
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>売上最大化</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                初速から継続まで完全攻略
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">概要</TabsTrigger>
            <TabsTrigger value="phases">3フェーズ</TabsTrigger>
            <TabsTrigger value="essential">必須教育</TabsTrigger>
            <TabsTrigger value="enhancement">強化教育</TabsTrigger>
            <TabsTrigger value="examples">投稿例</TabsTrigger>
          </TabsList>

          {/* 概要 */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  ローンチの呼吸とは
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">
                  商品リリースの約2〜3週間前から始まり、段階的に期待感を高めていく手法です。
                  読者の価値観を変化させ、商品を必要とする状態に導く「パターンゲーム」を構築します。
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">目標</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      読者を「絶望客」から「理想客」へ変化させ、自然な購買へ誘導
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">効果</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      初速売上の最大化と継続的なファン化の実現
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ローンチタイムライン</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <Badge className="bg-blue-100 text-blue-800">フェーズ1</Badge>
                    <span className="font-medium">15-20日前</span>
                    <span className="text-muted-foreground">興味づけ・問題点指摘</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <Badge className="bg-purple-100 text-purple-800">フェーズ2</Badge>
                    <span className="font-medium">2週間前</span>
                    <span className="text-muted-foreground">解決策・再現性提示</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <Badge className="bg-orange-100 text-orange-800">フェーズ3</Badge>
                    <span className="font-medium">1週間前</span>
                    <span className="text-muted-foreground">マインド強化・予告</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <Badge className="bg-red-100 text-red-800">リリース</Badge>
                    <span className="font-medium">当日</span>
                    <span className="text-muted-foreground">販売開始・売れ感創出</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 3フェーズ */}
          <TabsContent value="phases" className="space-y-6">
            <div className="grid gap-6">
              {/* フェーズ1 */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800">フェーズ1</Badge>
                    <CardTitle>興味づけ・問題点指摘（15-20日前）</CardTitle>
                  </div>
                  <CardDescription>
                    読者の興味を惹きつけ、新たな知識を学ぶ余地を作り、問題意識を喚起する
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        興味づけポスト
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 「何かすごい」実績の提示</li>
                        <li>• 読者の共感を呼ぶ問いかけ</li>
                        <li>• 目を引く数字や成果</li>
                        <li>• 常識破壊エピソード</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        問題点指摘ポスト
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 現状への問題提起</li>
                        <li>• 根本原因の指摘</li>
                        <li>• 問題放置の危険性</li>
                        <li>• 仮想敵の設定</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* フェーズ2 */}
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-100 text-purple-800">フェーズ2</Badge>
                    <CardTitle>解決策・再現性提示（2週間前）</CardTitle>
                  </div>
                  <CardDescription>
                    解決策を示し、読者に希望と行動への意欲を与える
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        おすすめ手段ポスト
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 他手法の否定と自手法の強調</li>
                        <li>• リスクからの誘導</li>
                        <li>• 自社商品の優位性説明</li>
                        <li>• 選択肢の絞り込み</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        再現性ポスト
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 第三者の実績紹介</li>
                        <li>• 自身のダメ過去公開</li>
                        <li>• 平凡な人の成功例</li>
                        <li>• ギャップの解消</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* フェーズ3 */}
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-orange-100 text-orange-800">フェーズ3</Badge>
                    <CardTitle>マインド強化・予告（1週間前）</CardTitle>
                  </div>
                  <CardDescription>
                    読者のマインドを理想客に近づけ、最終的な購買意欲を高める
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-3">教育ポスト</h4>
                      <p className="text-sm text-muted-foreground">
                        6つの必須教育・強化教育の要素を組み込んだ投稿
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">予告ポスト</h4>
                      <p className="text-sm text-muted-foreground">
                        商品リリースが近いことを示唆し、期待感を高める
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">リアルタイム投稿</h4>
                      <p className="text-sm text-muted-foreground">
                        ローンチ準備の進捗や感情をリアルタイムで共有
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* リリース当日 */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-red-100 text-red-800">リリース当日</Badge>
                    <CardTitle>販売開始・売れ感創出</CardTitle>
                  </div>
                  <CardDescription>
                    商品の販売を開始し、初速の売上を最大化する
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-3">ローンチポスト</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 実績と期待値の提示</li>
                        <li>• 行動喚起と限定性</li>
                        <li>• 明確な販売情報</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">売れ感創出</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 購入通知の共有</li>
                        <li>• リアルタイム売上報告</li>
                        <li>• 感想の拡散</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 6つの必須教育 */}
          <TabsContent value="essential" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>6つの必須教育</CardTitle>
                <CardDescription>
                  読者を「絶望客」から「理想客」へと導くための基本的な6つの要素
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    {
                      title: "目的の教育",
                      description: "読者に理想のゴールを具体的にイメージさせ、「こうなりたい」という欲求を引き起こす",
                      examples: ["理想のライフスタイル描写", "お金・時間・人間関係の自由", "過去からの変化を示す"]
                    },
                    {
                      title: "信用の教育", 
                      description: "読者が持つ不信感を解消し、発信者の話を聞いてもらえる状態を作る",
                      examples: ["自身の過去ストーリー", "理念の共有", "無料で有料級の価値提供"]
                    },
                    {
                      title: "問題点の教育",
                      description: "読者が理想の状態にいない根本的な原因を指摘し、問題意識を煽る", 
                      examples: ["気づいていない原因の指摘", "問題放置の危険性", "仮想敵の設定"]
                    },
                    {
                      title: "手段の教育",
                      description: "問題の解決策を提示し、その手段が理想の未来に繋がるイメージを湧かせる",
                      examples: ["成功要因の単純化", "ステップの明確化", "他手法との差別化"]
                    },
                    {
                      title: "投資の教育",
                      description: "環境や知識に投資することの重要性を伝え、時間短縮や機会損失を防ぐ大切さを教える",
                      examples: ["自己投資の重要性", "機会損失の提示", "お金の使い方変革"]
                    },
                    {
                      title: "行動の教育",
                      description: "すぐに行動することの重要性を伝え、読者の行動力を高める",
                      examples: ["自身の行動による説得", "行動しない損失", "行動の希少性"]
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">{index + 1}. {item.title}</h3>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.examples.map((example, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{example}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 6つの強化教育 */}
          <TabsContent value="enhancement" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>6つの強化教育</CardTitle>
                <CardDescription>
                  6つの必須教育の効果をさらに高めるための要素
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    {
                      title: "読む・見る教育",
                      description: "読者の離脱を減らし、コンテンツに多くの可処分時間を使ってもらう",
                      examples: ["読者のメリット強調", "集中を促す工夫", "繰り返し学習推奨"]
                    },
                    {
                      title: "変化の教育",
                      description: "変化への恐怖を打ち破り、「成長痛」として捉えるように促す",
                      examples: ["安定を捨てる勇気", "環境変化の推奨", "ドリームキラー対策"]
                    },
                    {
                      title: "素直の教育",
                      description: "自己流ではなく、学んだことを素直に実践することの重要性を伝える",
                      examples: ["素直な人の成功事例", "自己流の失敗例", "成功者から学ぶ重要性"]
                    },
                    {
                      title: "アウトプットの教育",
                      description: "記事や動画のアウトプットを促す",
                      examples: ["アウトプットのメリット", "記憶定着効果", "口コミ集客効果"]
                    },
                    {
                      title: "基準値の教育",
                      description: "極端な行動を見せることで、読者の「当たり前」の基準値をバグらせる",
                      examples: ["圧倒的な作業量", "極端な自己投資", "常識外れな行動"]
                    },
                    {
                      title: "覚悟の教育",
                      description: "自身の覚悟を見せることで、読者のグダ（躊躇）をなくす",
                      examples: ["金銭的困窮からの覚悟", "困難からの回復", "極限状況での決断"]
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">{index + 1}. {item.title}</h3>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.examples.map((example, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{example}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 投稿例 */}
          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>投稿例集</CardTitle>
                <CardDescription>
                  各フェーズ・教育要素の具体的な投稿例
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  
                  {/* フェーズ1の例 */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800">フェーズ1</Badge>
                      興味づけ・問題指摘の投稿例
                    </h3>
                    <div className="grid gap-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <h4 className="font-medium mb-2">興味づけポスト例</h4>
                        <p className="text-sm italic">
                          「←実は昨日始めたばかりのアフィリエイトで早速日給7万円叩き出しちゃった人。
                          アフィやったことなかったけど実践したことはたった２つ。知りたい人いる？？」
                        </p>
                      </div>
                      <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                        <h4 className="font-medium mb-2">問題指摘ポスト例</h4>
                        <p className="text-sm italic">
                          「稼げてない原因は圧倒的に資産になる行動をしてないこと、資産になるコンテンツがないこと。
                          稼げない人＝時給労働をしている。お金持ち＝資産を作る行動をする。」
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* フェーズ2の例 */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Badge className="bg-purple-100 text-purple-800">フェーズ2</Badge>
                      解決策・再現性の投稿例
                    </h3>
                    <div className="grid gap-4">
                      <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                        <h4 className="font-medium mb-2">解決策ポスト例</h4>
                        <p className="text-sm italic">
                          「知識ゲー」「パターンゲー」「ルールに沿ってやってるだけ」
                          「テンプレがあるんです」「知ってれば誰でもできます」「攻略法があります」
                        </p>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                        <h4 className="font-medium mb-2">再現性ポスト例</h4>
                        <p className="text-sm italic">
                          「スキルなし貯金3万円のゴミくそニート大学生でした」
                          「読書感想文を真面目に書いたのに再提出求められるくらい下手でした」
                          →今何者でもなくてもチャンスはある！
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* リリース当日の例 */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Badge className="bg-red-100 text-red-800">リリース当日</Badge>
                      販売・売れ感の投稿例
                    </h3>
                    <div className="grid gap-4">
                      <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                        <h4 className="font-medium mb-2">ローンチポスト例</h4>
                        <p className="text-sm italic">
                          「ついに・・・史上最強のX運用tips販売開始！！Twitter歴8年」
                          「5日で1000部販売」「1垢で月間最高売上1798万円」
                          「3ヶ月で月収100万円も夢じゃない？？購読はお早めに↓」
                        </p>
                      </div>
                      <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                        <h4 className="font-medium mb-2">売れ感創出例</h4>
                        <p className="text-sm italic">
                          「あ、売れてるわ」（Space中に自然に発言）
                          購入通知のスクリーンショット投稿
                          読者からの熱い感想ツイートをリツイート
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-purple-600/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">実践で効果を確認しよう</h2>
          <p className="text-muted-foreground mb-6">
            このローンチ戦略を実際の投稿に活用し、売上最大化を実現してください
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/x-posts">
                X投稿集を見る
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/streaming-materials">
                配信資料を確認
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}