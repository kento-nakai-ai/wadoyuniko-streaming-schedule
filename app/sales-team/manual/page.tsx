import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { FileDown, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SalesManualPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/sales-team">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              セールスチームホームに戻る
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            バイブコーディング セールスマニュアル
          </h1>
          <div className="flex gap-2">
            <Badge variant="default">90%初心者戦略</Badge>
            <Badge variant="secondary">成約率60%目標</Badge>
          </div>
        </div>

        <Tabs defaultValue="consultation" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="consultation">個別面談</TabsTrigger>
            <TabsTrigger value="objections">反論処理</TabsTrigger>
            <TabsTrigger value="stories">成功事例</TabsTrigger>
            <TabsTrigger value="roleplay">ロープレ</TabsTrigger>
            <TabsTrigger value="tracking">成約管理</TabsTrigger>
          </TabsList>

          <TabsContent value="consultation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle id="individual-consultation">個別面談 6ステップ法</CardTitle>
                <CardDescription>
                  90%が初心者という事実を最大活用したセールスプロセス
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Step 1: 信頼関係構築（5分）</h3>
                  <div className="space-y-3">
                    <p><strong>目的:</strong> 第一印象を良くし、相手をリラックスさせる</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                      <p className="font-medium">トークスクリプト例:</p>
                      <blockquote className="mt-2 text-gray-700 dark:text-gray-300">
                        「本日はお忙しい中、お時間をいただきありがとうございます。私、バイブコーディングスクールの〇〇と申します。
                        実は、私たちのスクールは他とは大きく違う特徴があります。それは受講生の90%以上がプログラミング完全初心者ということです。
                        つまり、みなさん同じスタートラインから始めて、成功されているんです。安心してお聞きくださいね。」
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Step 2: 現状把握（10分）</h3>
                  <div className="space-y-3">
                    <p><strong>目的:</strong> 相手の悩みや現状を深掘りし、共感する</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                      <p className="font-medium">ヒアリング質問例:</p>
                      <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• プログラミングに興味を持ったきっかけは？</li>
                        <li>• 今の仕事や生活で困っていることは？</li>
                        <li>• プログラミングで実現したいことは？</li>
                        <li>• これまで挫折した経験はありますか？</li>
                        <li>• 一番の不安や心配事は何ですか？</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Step 3: 理想との差の明確化（5分）</h3>
                  <div className="space-y-3">
                    <p><strong>目的:</strong> 現状と理想のギャップを可視化し、行動の必要性を感じてもらう</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-yellow-500">
                      <p className="font-medium">ギャップ可視化例:</p>
                      <blockquote className="mt-2 text-gray-700 dark:text-gray-300">
                        「つまり、現在は〇〇でお困りで、3ヶ月後には××を実現したいということですね。
                        でも、今のままではその理想に近づくのは難しそうですよね。
                        実は、同じような状況だった方が90%以上いらして、みなさん3ヶ月で理想を実現されています。」
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Step 4: バイブコーディングの価値提示（8分）</h3>
                  <div className="space-y-3">
                    <p><strong>目的:</strong> 独自性と価値を伝え、欲しいと思ってもらう</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                      <p className="font-medium">価値提示の流れ:</p>
                      <ol className="mt-2 space-y-1 text-gray-700 dark:text-gray-300 list-decimal list-inside">
                        <li>90%が初心者という安心感</li>
                        <li>AIとの対話による簡単さ</li>
                        <li>3ヶ月で実用レベルの早さ</li>
                        <li>無期限サポートの安心感</li>
                        <li>501名の実績という信頼感</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Step 5: 独学の限界を伝える（5分）</h3>
                  <div className="space-y-3">
                    <p><strong>目的:</strong> 独学の危険性を理解してもらい、緊急性を感じてもらう</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-red-500">
                      <p className="font-medium">独学の問題点:</p>
                      <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• 挫折率90%という現実</li>
                        <li>• エラーで詰まって時間浪費</li>
                        <li>• 何から始めればいいかわからない</li>
                        <li>• 実際に稼げるスキルが身につかない</li>
                        <li>• モチベーション維持が困難</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Step 6: クロージング（7分）</h3>
                  <div className="space-y-3">
                    <p><strong>目的:</strong> 決断を促し、成約に導く</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-indigo-500">
                      <p className="font-medium">クロージング手順:</p>
                      <ol className="mt-2 space-y-1 text-gray-700 dark:text-gray-300 list-decimal list-inside">
                        <li>価格と特典の説明（30万円、分割月1万円〜）</li>
                        <li>今始める理由（早い者勝ち、3ヶ月で回収可能）</li>
                        <li>安心の保証（満足保証、無期限サポート）</li>
                        <li>決断を促す質問「いかがでしょうか？」</li>
                        <li>申込手続きのサポート</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="objections" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle id="objection-handling">よくある反論と対処法</CardTitle>
                <CardDescription>
                  初心者の不安を解消する25の回答例
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                      Q: 本当に初心者でも大丈夫ですか？
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      A: はい、むしろ初心者の方が有利です。なぜなら受講生の90%以上が完全初心者だからです。
                      みんな同じスタートラインで、変な癖もついていないので、素直に学べば必ず成果が出ます。
                      実際、60代の方でも3ヶ月で立派なアプリを作られています。
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">
                      Q: 時間がないのですが...
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      A: 1日30分あれば大丈夫です。通勤時間や昼休み、お子さんが寝た後など、
                      スキマ時間を活用されている方がほとんどです。むしろ集中して短時間で学ぶ方が効率的です。
                      実際、忙しい主婦の方が3ヶ月で月15万円稼げるようになった例もあります。
                    </p>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
                      Q: 料金が高くないですか？
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      A: 30万円は確かに大きな金額ですが、投資として考えてみてください。
                      平均2ヶ月で初案件を獲得し、3ヶ月で月10万円稼げれば、
                      すぐに回収できます。その後は全て利益になり、スキルは一生ものです。
                      分割払いなら月1万円からスタートできます。
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                      Q: 他社と比較検討中なのですが...
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      A: ぜひ比較してください。ただし、90%が初心者で成功しているスクールは他にありません。
                      多くのスクールは経験者向けか、初心者でも挫折率が高いのが現実です。
                      初心者専門で501名の実績があるのは私たちだけです。
                      安心感を重視されるなら、間違いなく私たちです。
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                      Q: 本当に稼げるようになりますか？
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      A: 絶対とは言えませんが、きちんと学習すれば高確率で稼げます。
                      実際、受講生の平均初案件獲得期間は2ヶ月です。
                      50代主婦で月15万円、60代男性で月10万円など、年齢に関係なく成果を出されています。
                      もちろん、学習をしなければ結果は出ませんが、私たちが全力でサポートします。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stories" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle id="success-stories">成功事例 10選</CardTitle>
                <CardDescription>
                  初心者から始めて成果を出した受講生の実例
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
                    <h4 className="font-bold text-lg">事例1: 50代主婦 Aさん</h4>
                    <div className="mt-2">
                      <p><strong>Before:</strong> パソコン操作も不安、子育てで忙しい</p>
                      <p><strong>After:</strong> ECサイト運営、月15万円の副収入</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        「最初は不安でしたが、同じような主婦の方がたくさんいて心強かったです。
                        今では家計にゆとりができて、子供に習い事をさせてあげられます。」
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
                    <h4 className="font-bold text-lg">事例2: 60代男性 Bさん</h4>
                    <div className="mt-2">
                      <p><strong>Before:</strong> 定年退職後、時間を持て余していた</p>
                      <p><strong>After:</strong> コンサルタント業、月10万円の安定収入</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        「年金だけでは不安でしたが、今は毎月旅行に行けます。
                        年齢は関係ないと実感しています。」
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
                    <h4 className="font-bold text-lg">事例3: 30代会社員 Cさん</h4>
                    <div className="mt-2">
                      <p><strong>Before:</strong> 文系営業、プログラミング挫折3回</p>
                      <p><strong>After:</strong> 社内ツール開発、昇進・年収100万円UP</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        「過去の挫折が嘘のように、すんなりと理解できました。
                        AIのおかげで楽しく学べて、会社でも重宝されています。」
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-r-lg">
                    <h4 className="font-bold text-lg">事例4: 40代元事務職 Dさん</h4>
                    <div className="mt-2">
                      <p><strong>Before:</strong> リストラで転職活動中</p>
                      <p><strong>After:</strong> フリーランス、月30万円の収入</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        「まさか事務職の私がプログラマーになるとは思いませんでした。
                        今では会社員時代より収入も自由度も上がりました。」
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-4 bg-teal-50 dark:bg-teal-900/20 p-4 rounded-r-lg">
                    <h4 className="font-bold text-lg">事例5: 20代子育てママ Eさん</h4>
                    <div className="mt-2">
                      <p><strong>Before:</strong> 外で働けない、家計が苦しい</p>
                      <p><strong>After:</strong> 在宅ワーク、月20万円の安定収入</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        「子供が小さくて外で働けませんでしたが、家でこんなに稼げるなんて。
                        保育園に預けるより効率的です。」
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roleplay" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ロールプレイング台本</CardTitle>
                <CardDescription>
                  実践的な練習用シナリオ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">シナリオ1: 慎重派の初心者</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">顧客設定</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 45歳女性、事務職</li>
                          <li>• プログラミング完全初心者</li>
                          <li>• とても慎重で心配性</li>
                          <li>• 質問が多い</li>
                          <li>• 失敗を恐れている</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">対応ポイント</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 90%初心者を強調</li>
                          <li>• 同年代の成功事例</li>
                          <li>• 丁寧に説明</li>
                          <li>• 安心感を与える</li>
                          <li>• 無期限サポートをアピール</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">シナリオ2: 価格に敏感な人</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">顧客設定</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 35歳男性、会社員</li>
                          <li>• 転職を考えている</li>
                          <li>• 家計が厳しい</li>
                          <li>• 30万円を高いと感じる</li>
                          <li>• 他社と比較している</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">対応ポイント</h4>
                        <ul className="text-sm space-y-1">
                          <li>• ROIを明確に示す</li>
                          <li>• 分割払いの提案</li>
                          <li>• 転職成功事例</li>
                          <li>• 他社との違いを明確化</li>
                          <li>• 投資としての価値</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">シナリオ3: 時間がない人</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">顧客設定</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 40歳女性、子育て中</li>
                          <li>• フルタイム勤務</li>
                          <li>• 家事育児で忙しい</li>
                          <li>• 学習時間が確保できるか不安</li>
                          <li>• 継続できるか心配</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">対応ポイント</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 1日30分でOKを強調</li>
                          <li>• スキマ時間活用法</li>
                          <li>• 同じ境遇の成功事例</li>
                          <li>• 効率的な学習方法</li>
                          <li>• サポート体制の充実</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">シナリオ4: 挫折経験者</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">顧客設定</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 28歳男性、フリーター</li>
                          <li>• 独学で3回挫折</li>
                          <li>• プログラミングに苦手意識</li>
                          <li>• また挫折することを恐れている</li>
                          <li>• 自信がない</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">対応ポイント</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 挫折理由を分析</li>
                          <li>• AIによる違いを説明</li>
                          <li>• 同じ経験者の成功例</li>
                          <li>• サポートの手厚さ</li>
                          <li>• 自信を持たせる</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>成約率追跡システム</CardTitle>
                <CardDescription>
                  日次・週次・月次の詳細な成果管理
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">📊 KPI ダッシュボード</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-white dark:bg-gray-800 rounded">
                        <div className="text-2xl font-bold text-blue-600">__%</div>
                        <div className="text-sm text-gray-600">成約率</div>
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-gray-800 rounded">
                        <div className="text-2xl font-bold text-green-600">__件</div>
                        <div className="text-sm text-gray-600">成約数</div>
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-gray-800 rounded">
                        <div className="text-2xl font-bold text-purple-600">__万円</div>
                        <div className="text-sm text-gray-600">売上</div>
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-gray-800 rounded">
                        <div className="text-2xl font-bold text-orange-600">__件</div>
                        <div className="text-sm text-gray-600">面談数</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">📈 日次追跡表</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">日付</th>
                            <th className="text-left p-2">面談数</th>
                            <th className="text-left p-2">成約数</th>
                            <th className="text-left p-2">成約率</th>
                            <th className="text-left p-2">売上</th>
                            <th className="text-left p-2">担当者</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">2025/1/13</td>
                            <td className="p-2">5件</td>
                            <td className="p-2">3件</td>
                            <td className="p-2">60%</td>
                            <td className="p-2">90万円</td>
                            <td className="p-2">〇〇</td>
                          </tr>
                          <tr className="border-b text-gray-400">
                            <td className="p-2">2025/1/14</td>
                            <td className="p-2">-</td>
                            <td className="p-2">-</td>
                            <td className="p-2">-</td>
                            <td className="p-2">-</td>
                            <td className="p-2">-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">🎯 目標達成状況</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>月間成約数</span>
                          <span>__/100件</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '0%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>月間売上</span>
                          <span>__/1,080万円</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '0%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>成約率</span>
                          <span>__/60%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '0%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Download Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>📥 資料ダウンロード</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-12">
                <FileDown className="w-4 h-4 mr-2" />
                完全マニュアル PDF
              </Button>
              <Button variant="outline" className="h-12">
                <FileDown className="w-4 h-4 mr-2" />
                ロープレ台本集
              </Button>
              <Button variant="outline" className="h-12">
                <FileDown className="w-4 h-4 mr-2" />
                成約率測定シート
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}