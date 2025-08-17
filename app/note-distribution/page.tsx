'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Download, 
  ExternalLink, 
  Copy, 
  Send, 
  Users, 
  Calendar,
  Star,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function NoteDistributionPage() {
  const [selectedArticle, setSelectedArticle] = useState('free')
  const [distributionMessage, setDistributionMessage] = useState('')

  const articles = {
    free: {
      title: 'AI開発完全未経験が30分で感動体験！月収5万円への最短ロードマップ',
      description: 'プログラミング未経験でもたった30分でAIアプリを作って感動できる最短コース',
      price: '無料',
      targetAudience: 'プログラミング初心者・AI開発に興味がある人',
      estimatedReads: '5,000-10,000',
      conversionTarget: 'オープンチャット参加',
      keyFeatures: [
        '30分でAIチャットボット作成体験',
        '月収5万円までの具体的ロードマップ',
        '成功者事例とよくある失敗パターン',
        '無料で使える最強ツール集',
        'オープンチャット参加特典'
      ],
      urgency: '今すぐ体験可能',
      cta: 'オープンチャット参加でさらなる特典'
    },
    paid: {
      title: 'AIが常識を覆した瞬間。なぜ90%の人は「書く時代」で止まっているのか？',
      description: '「書く→対話する時代」への革命的変化と業界タブーの完全攻略法',
      price: '100円',
      targetAudience: '本気でAI開発を学びたい人・セミナー参加検討者',
      estimatedReads: '500-1,000',
      conversionTarget: 'セミナー申込み',
      keyFeatures: [
        'バイブコーディング革命の本質',
        '95%が犯している致命的な間違い',
        '業界タブーとされる攻略法の暴露',
        '2025年市場予測と最後のチャンス',
        '個別戦略セッション特典'
      ],
      urgency: '参入可能期間は残り6ヶ月',
      cta: '24時間以内の行動が人生を変える'
    }
  }

  const distributionChannels = [
    {
      name: 'オープンチャット',
      platform: 'LINE',
      primaryRole: 'メイン配布',
      audience: '1,000名',
      engagement: '高',
      timing: '毎日21:00',
      format: 'ノート記事URL + 解説文',
      expectations: '無料記事500DL/日、有料記事20購入/日'
    },
    {
      name: 'X (Twitter)',
      platform: 'X',
      primaryRole: '拡散・誘導',
      audience: '28,000フォロワー',
      engagement: '中',
      timing: '7:00, 12:00, 20:00',
      format: 'スレッド + 記事リンク',
      expectations: 'リーチ10万、オプチャ誘導200名/日'
    },
    {
      name: 'YouTube',
      platform: 'YouTube',
      primaryRole: '信頼構築',
      audience: '12,000登録者',
      engagement: '高',
      timing: '配信後',
      format: '概要欄 + 動画内告知',
      expectations: '視聴者の15%が記事閲覧'
    },
    {
      name: '公式LINE',
      platform: 'LINE',
      primaryRole: '個別フォロー',
      audience: '5,000登録者',
      engagement: '最高',
      timing: '記事公開日',
      format: 'パーソナライズメッセージ',
      expectations: '開封率80%、クリック率45%'
    }
  ]

  const scheduleData = [
    {
      date: '2025-08-18',
      day: '月',
      theme: '基礎編',
      freeArticle: 'AI開発30分体験',
      paidArticle: 'パラダイムシフト解説',
      mainEvent: 'DIFY活用術配信',
      target: 'プログラミング初心者',
      estimatedReach: '2,000人',
      status: 'scheduled'
    },
    {
      date: '2025-08-21',
      day: '木',
      theme: '実践編',
      freeArticle: '月収5万円ロードマップ',
      paidArticle: 'バイブコーディング革命',
      mainEvent: 'ローンチ動画公開',
      target: '副業希望者',
      estimatedReach: '3,500人',
      status: 'scheduled'
    },
    {
      date: '2025-08-24',
      day: '日',
      theme: '応用編',
      freeArticle: 'セミナー予告編',
      paidArticle: '業界タブー暴露版',
      mainEvent: 'セミナー最終告知',
      target: 'セミナー検討者',
      estimatedReach: '5,000人',
      status: 'scheduled'
    }
  ]

  const messagingTemplates = {
    openChat: {
      free: `🚀【期間限定】AI開発30分で感動体験！

\\n\\n📢 プログラミング完全未経験でも
30分でAIアプリを作れる
感動の瞬間を体験してください！

\\n\\n✨ この記事で得られるもの：
• 30分でAIチャットボット作成
• 月収5万円への具体的ステップ  
• 成功者の事例と共通点
• 無料ツール一覧（総額30万円相当）

\\n\\n🎁 読者限定特典：
• 個別コンサル90分（10万円相当）
• 実践ワークブック150P
• 秘密コミュニティ招待

\\n\\n👇 今すぐ体験スタート
[記事URL]

\\n\\n#AI開発 #プログラミング初心者 #30分チャレンジ`,

      paid: `💎【100円で人生変革】パラダイムシフトの真実

\\n\\n⚠️ 警告：この記事は危険です

\\n\\n年商3,000万円突破の手法
業界タブーとされる攻略法  
95%が犯す致命的な間違い
2025年最後のチャンス

\\n\\nすべてを100円で公開。

\\n\\n🔥 なぜ100円なのか？
• 本気度のフィルタリング
• 業界への挑戦状
• 最後のチャンス（残り6ヶ月）

\\n\\n💰 通常300万円のコンサル内容が
たった100円で手に入ります。

\\n\\n⚡ 24時間以内に行動してください
市場参入のタイミングは今が最後

\\n\\n👇 今すぐ購入
[記事URL]

\\n\\n人生を変える決断は一瞬です。`
    },
    twitter: {
      free: `🧵【スレッド】AI開発30分で感動体験

\\n1/5 プログラミング未経験の私が
30分でAIアプリを作れた瞬間
人生が変わりました

\\n2/5 実際に作ったのは：
• AIチャットボット
• 感情分析アプリ  
• 簡単翻訳ツール
• ポートフォリオサイト

\\n3/5 必要だったのは
高度な技術力ではなく
「対話力」でした

\\n4/5 この体験を記事にまとめました
30分で誰でも再現可能です

\\n5/5 完全無料で公開中👇
[記事URL]

\\n#AI開発 #プログラミング #30分チャレンジ`,

      paid: `🚨【緊急】AIが常識を覆した瞬間

\\n「書く時代」は終わった
「対話する時代」が始まった

\\n95%の人がまだ気づいていない
パラダイムシフトの真実

\\n• なぜ技術力は20%しか重要じゃないのか？
• 大手企業が隠している本当の狙い
• 個人でも年商3,000万円突破する方法
• 2025年が最後のチャンスである理由

\\n通常300万円の情報を100円で公開

\\n⚠️ 24時間以内に行動しないと
手遅れになります

\\n👇 人生を変える100円
[記事URL]

\\n#AIビジネス #パラダイムシフト #最後のチャンス`
    }
  }

  const currentArticle = articles[selectedArticle as keyof typeof articles]
  const currentTemplate = messagingTemplates.openChat[selectedArticle as keyof typeof messagingTemplates.openChat]

  return (
    <div className=\"min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50\">
      {/* ヘッダー */}
      <header className=\"bg-white/80 backdrop-blur-md border-b sticky top-0 z-50\">
        <div className=\"container mx-auto px-4 py-4\">
          <div className=\"flex items-center justify-between\">
            <div>
              <h1 className=\"text-2xl font-bold text-gray-900\">note記事配布管理</h1>
              <p className=\"text-gray-600\">戦略的配布でセミナー参加者最大化</p>
            </div>
            <div className=\"flex gap-2\">
              <Button size=\"sm\" variant=\"outline\">
                <Calendar className=\"w-4 h-4 mr-2\" />
                配布スケジュール
              </Button>
              <Button size=\"sm\">
                <Send className=\"w-4 h-4 mr-2\" />
                即時配布
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className=\"container mx-auto px-4 py-8\">
        <Tabs defaultValue=\"articles\" className=\"space-y-8\">
          <TabsList className=\"grid w-full grid-cols-4\">
            <TabsTrigger value=\"articles\">記事管理</TabsTrigger>
            <TabsTrigger value=\"distribution\">配布実行</TabsTrigger>
            <TabsTrigger value=\"schedule\">スケジュール</TabsTrigger>
            <TabsTrigger value=\"analytics\">効果測定</TabsTrigger>
          </TabsList>

          {/* 記事管理タブ */}
          <TabsContent value=\"articles\" className=\"space-y-6\">
            <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-6\">
              {/* 無料記事 */}
              <Card className={`border-2 cursor-pointer transition-all ${selectedArticle === 'free' ? 'border-green-500 bg-green-50' : 'border-green-200 hover:border-green-300'}`}
                    onClick={() => setSelectedArticle('free')}>
                <CardHeader>
                  <div className=\"flex items-center justify-between\">
                    <Badge variant=\"secondary\" className=\"bg-green-100 text-green-800\">無料</Badge>
                    <div className=\"flex gap-2\">
                      <Button size=\"sm\" variant=\"outline\">
                        <ExternalLink className=\"w-4 h-4\" />
                      </Button>
                      <Button size=\"sm\" variant=\"outline\">
                        <Copy className=\"w-4 h-4\" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className=\"text-lg line-clamp-2\">{articles.free.title}</CardTitle>
                  <CardDescription className=\"line-clamp-2\">{articles.free.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-3\">
                    <div className=\"grid grid-cols-2 gap-4 text-sm\">
                      <div>
                        <div className=\"font-medium text-gray-700\">想定読者数</div>
                        <div className=\"text-gray-600\">{articles.free.estimatedReads}</div>
                      </div>
                      <div>
                        <div className=\"font-medium text-gray-700\">変換目標</div>
                        <div className=\"text-gray-600\">{articles.free.conversionTarget}</div>
                      </div>
                    </div>
                    <div className=\"flex gap-2\">
                      <Button size=\"sm\" className=\"flex-1\" onClick={() => setSelectedArticle('free')}>
                        <Download className=\"w-4 h-4 mr-2\" />
                        詳細確認
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 有料記事 */}
              <Card className={`border-2 cursor-pointer transition-all ${selectedArticle === 'paid' ? 'border-purple-500 bg-purple-50' : 'border-purple-200 hover:border-purple-300'}`}
                    onClick={() => setSelectedArticle('paid')}>
                <CardHeader>
                  <div className=\"flex items-center justify-between\">
                    <Badge variant=\"secondary\" className=\"bg-purple-100 text-purple-800\">100円</Badge>
                    <div className=\"flex gap-2\">
                      <Button size=\"sm\" variant=\"outline\">
                        <ExternalLink className=\"w-4 h-4\" />
                      </Button>
                      <Button size=\"sm\" variant=\"outline\">
                        <Copy className=\"w-4 h-4\" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className=\"text-lg line-clamp-2\">{articles.paid.title}</CardTitle>
                  <CardDescription className=\"line-clamp-2\">{articles.paid.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-3\">
                    <div className=\"grid grid-cols-2 gap-4 text-sm\">
                      <div>
                        <div className=\"font-medium text-gray-700\">想定読者数</div>
                        <div className=\"text-gray-600\">{articles.paid.estimatedReads}</div>
                      </div>
                      <div>
                        <div className=\"font-medium text-gray-700\">変換目標</div>
                        <div className=\"text-gray-600\">{articles.paid.conversionTarget}</div>
                      </div>
                    </div>
                    <div className=\"flex gap-2\">
                      <Button size=\"sm\" className=\"flex-1\" onClick={() => setSelectedArticle('paid')}>
                        <Download className=\"w-4 h-4 mr-2\" />
                        詳細確認
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 選択記事の詳細 */}
            <Card>
              <CardHeader>
                <CardTitle className=\"flex items-center gap-2\">
                  <Star className=\"w-5 h-5\" />
                  選択記事詳細: {currentArticle.price}記事
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-6\">
                  <div className=\"space-y-4\">
                    <div>
                      <h4 className=\"font-medium text-gray-900 mb-2\">記事タイトル</h4>
                      <p className=\"text-sm text-gray-700 bg-gray-50 p-3 rounded-lg\">{currentArticle.title}</p>
                    </div>
                    <div>
                      <h4 className=\"font-medium text-gray-900 mb-2\">ターゲット読者</h4>
                      <p className=\"text-sm text-gray-600\">{currentArticle.targetAudience}</p>
                    </div>
                    <div>
                      <h4 className=\"font-medium text-gray-900 mb-2\">緊急性</h4>
                      <p className=\"text-sm text-orange-600 font-medium\">{currentArticle.urgency}</p>
                    </div>
                    <div>
                      <h4 className=\"font-medium text-gray-900 mb-2\">行動喚起</h4>
                      <p className=\"text-sm text-blue-600 font-medium\">{currentArticle.cta}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className=\"font-medium text-gray-900 mb-2\">主要コンテンツ</h4>
                    <ul className=\"space-y-2\">
                      {currentArticle.keyFeatures.map((feature, index) => (
                        <li key={index} className=\"flex items-start gap-2 text-sm\">
                          <CheckCircle className=\"w-4 h-4 text-green-500 mt-0.5 flex-shrink-0\" />
                          <span className=\"text-gray-700\">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 配布実行タブ */}
          <TabsContent value=\"distribution\" className=\"space-y-6\">
            <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-6\">
              {/* 配布チャネル */}
              <Card>
                <CardHeader>
                  <CardTitle>配布チャネル選択</CardTitle>
                  <CardDescription>プラットフォーム別の最適化配布</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-4\">
                    {distributionChannels.map((channel, index) => (
                      <div key={index} className=\"flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50\">
                        <div className=\"flex items-center gap-3\">
                          <div className={`w-3 h-3 rounded-full ${channel.engagement === '最高' ? 'bg-green-500' : channel.engagement === '高' ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
                          <div>
                            <div className=\"font-medium\">{channel.name}</div>
                            <div className=\"text-sm text-gray-600\">{channel.primaryRole} • {channel.audience}</div>
                          </div>
                        </div>
                        <Button size=\"sm\" variant=\"outline\">
                          選択
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* メッセージ作成 */}
              <Card>
                <CardHeader>
                  <CardTitle>配布メッセージ作成</CardTitle>
                  <CardDescription>オープンチャット向けメッセージ</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-4\">
                    <div>
                      <label className=\"text-sm font-medium text-gray-700 mb-2 block\">
                        配布記事選択
                      </label>
                      <div className=\"flex gap-2\">
                        <Button
                          variant={selectedArticle === 'free' ? 'default' : 'outline'}
                          size=\"sm\"
                          onClick={() => setSelectedArticle('free')}
                        >
                          無料記事
                        </Button>
                        <Button
                          variant={selectedArticle === 'paid' ? 'default' : 'outline'}
                          size=\"sm\"
                          onClick={() => setSelectedArticle('paid')}
                        >
                          100円記事
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className=\"text-sm font-medium text-gray-700 mb-2 block\">
                        配布メッセージ
                      </label>
                      <Textarea
                        placeholder=\"配布メッセージを入力...\"
                        value={distributionMessage || currentTemplate}
                        onChange={(e) => setDistributionMessage(e.target.value)}
                        rows={12}
                        className=\"font-mono text-sm\"
                      />
                    </div>

                    <div className=\"flex gap-2\">
                      <Button size=\"sm\" variant=\"outline\" onClick={() => setDistributionMessage(currentTemplate)}>
                        <Copy className=\"w-4 h-4 mr-2\" />
                        テンプレート使用
                      </Button>
                      <Button size=\"sm\">
                        <Send className=\"w-4 h-4 mr-2\" />
                        今すぐ配布
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* プラットフォーム別テンプレート */}
            <Card>
              <CardHeader>
                <CardTitle>プラットフォーム別テンプレート</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue=\"openChat\" className=\"w-full\">
                  <TabsList className=\"grid w-full grid-cols-4\">
                    <TabsTrigger value=\"openChat\">オープンチャット</TabsTrigger>
                    <TabsTrigger value=\"twitter\">X (Twitter)</TabsTrigger>
                    <TabsTrigger value=\"youtube\">YouTube</TabsTrigger>
                    <TabsTrigger value=\"line\">公式LINE</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value=\"openChat\" className=\"space-y-4\">
                    <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-4\">
                      <div>
                        <h4 className=\"font-medium mb-2\">無料記事用</h4>
                        <div className=\"bg-gray-50 p-3 rounded-lg text-sm font-mono whitespace-pre-line\">
                          {messagingTemplates.openChat.free}
                        </div>
                      </div>
                      <div>
                        <h4 className=\"font-medium mb-2\">100円記事用</h4>
                        <div className=\"bg-gray-50 p-3 rounded-lg text-sm font-mono whitespace-pre-line\">
                          {messagingTemplates.openChat.paid}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value=\"twitter\" className=\"space-y-4\">
                    <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-4\">
                      <div>
                        <h4 className=\"font-medium mb-2\">無料記事用スレッド</h4>
                        <div className=\"bg-gray-50 p-3 rounded-lg text-sm font-mono whitespace-pre-line\">
                          {messagingTemplates.twitter.free}
                        </div>
                      </div>
                      <div>
                        <h4 className=\"font-medium mb-2\">100円記事用投稿</h4>
                        <div className=\"bg-gray-50 p-3 rounded-lg text-sm font-mono whitespace-pre-line\">
                          {messagingTemplates.twitter.paid}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          {/* スケジュールタブ */}
          <TabsContent value=\"schedule\" className=\"space-y-6\">
            <Card>
              <CardHeader>
                <CardTitle className=\"flex items-center gap-2\">
                  <Calendar className=\"w-5 h-5\" />
                  配布スケジュール管理
                </CardTitle>
                <CardDescription>8月18日〜31日の戦略的配布計画</CardDescription>
              </CardHeader>
              <CardContent>
                <div className=\"space-y-4\">
                  {scheduleData.map((schedule, index) => (
                    <Card key={index} className=\"border-l-4 border-l-blue-500\">
                      <CardHeader className=\"pb-3\">
                        <div className=\"flex items-center justify-between\">
                          <div className=\"flex items-center gap-3\">
                            <Badge variant=\"outline\">{schedule.date} ({schedule.day})</Badge>
                            <Badge variant=\"secondary\">{schedule.theme}</Badge>
                            <span className=\"text-sm text-gray-600\">予想リーチ: {schedule.estimatedReach}</span>
                          </div>
                          <div className=\"flex items-center gap-2\">
                            <Badge variant={schedule.status === 'scheduled' ? 'secondary' : 'default'}>
                              {schedule.status === 'scheduled' ? '予定' : '完了'}
                            </Badge>
                            <Button size=\"sm\" variant=\"outline\">
                              <Clock className=\"w-4 h-4\" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className=\"grid grid-cols-1 md:grid-cols-3 gap-4\">
                          <div className=\"bg-green-50 p-3 rounded-lg\">
                            <div className=\"text-sm font-medium text-green-800 mb-1\">無料記事</div>
                            <div className=\"text-sm text-green-600\">{schedule.freeArticle}</div>
                          </div>
                          <div className=\"bg-purple-50 p-3 rounded-lg\">
                            <div className=\"text-sm font-medium text-purple-800 mb-1\">100円記事</div>
                            <div className=\"text-sm text-purple-600\">{schedule.paidArticle}</div>
                          </div>
                          <div className=\"bg-blue-50 p-3 rounded-lg\">
                            <div className=\"text-sm font-medium text-blue-800 mb-1\">メインイベント</div>
                            <div className=\"text-sm text-blue-600\">{schedule.mainEvent}</div>
                          </div>
                        </div>
                        <div className=\"mt-3 flex gap-2\">
                          <Button size=\"sm\" variant=\"outline\">
                            詳細編集
                          </Button>
                          <Button size=\"sm\">
                            即時実行
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 分析タブ */}
          <TabsContent value=\"analytics\" className=\"space-y-6\">
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4\">
              <Card>
                <CardContent className=\"p-4\">
                  <div className=\"flex items-center gap-2 mb-2\">
                    <Users className=\"w-4 h-4 text-blue-500\" />
                    <span className=\"text-sm font-medium\">総リーチ</span>
                  </div>
                  <div className=\"text-2xl font-bold\">45,672</div>
                  <div className=\"text-xs text-green-500\">+18% vs 昨日</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className=\"p-4\">
                  <div className=\"flex items-center gap-2 mb-2\">
                    <Download className=\"w-4 h-4 text-green-500\" />
                    <span className=\"text-sm font-medium\">無料DL</span>
                  </div>
                  <div className=\"text-2xl font-bold\">3,421</div>
                  <div className=\"text-xs text-green-500\">CVR 7.5%</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className=\"p-4\">
                  <div className=\"flex items-center gap-2 mb-2\">
                    <Heart className=\"w-4 h-4 text-purple-500\" />
                    <span className=\"text-sm font-medium\">有料購入</span>
                  </div>
                  <div className=\"text-2xl font-bold\">187</div>
                  <div className=\"text-xs text-purple-500\">CVR 5.5%</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className=\"p-4\">
                  <div className=\"flex items-center gap-2 mb-2\">
                    <TrendingUp className=\"w-4 h-4 text-orange-500\" />
                    <span className=\"text-sm font-medium\">売上</span>
                  </div>
                  <div className=\"text-2xl font-bold\">¥18,700</div>
                  <div className=\"text-xs text-orange-500\">単価 ¥100</div>
                </CardContent>
              </Card>
            </div>

            <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-6\">
              <Card>
                <CardHeader>
                  <CardTitle>プラットフォーム別パフォーマンス</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-4\">
                    {distributionChannels.map((channel, index) => (
                      <div key={index} className=\"flex items-center justify-between p-3 bg-gray-50 rounded-lg\">
                        <div>
                          <div className=\"font-medium\">{channel.name}</div>
                          <div className=\"text-sm text-gray-600\">{channel.expectations}</div>
                        </div>
                        <div className=\"text-right\">
                          <div className={`text-sm font-medium ${channel.engagement === '最高' ? 'text-green-600' : channel.engagement === '高' ? 'text-blue-600' : 'text-yellow-600'}`}>
                            {channel.engagement}エンゲージメント
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>目標達成状況</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-4\">
                    <div className=\"flex items-center justify-between p-3 bg-green-50 rounded-lg\">
                      <div>
                        <div className=\"font-medium text-green-900\">オープンチャット参加</div>
                        <div className=\"text-sm text-green-600\">目標: 1,000名</div>
                      </div>
                      <div className=\"text-right\">
                        <div className=\"text-lg font-bold text-green-700\">892名</div>
                        <div className=\"text-xs text-green-500\">89.2%</div>
                      </div>
                    </div>

                    <div className=\"flex items-center justify-between p-3 bg-orange-50 rounded-lg\">
                      <div>
                        <div className=\"font-medium text-orange-900\">セミナー申込</div>
                        <div className=\"text-sm text-orange-600\">目標: 1,500名</div>
                      </div>
                      <div className=\"text-right\">
                        <div className=\"text-lg font-bold text-orange-700\">456名</div>
                        <div className=\"text-xs text-orange-500\">30.4%</div>
                      </div>
                    </div>

                    <div className=\"flex items-center justify-between p-3 bg-blue-50 rounded-lg\">
                      <div>
                        <div className=\"font-medium text-blue-900\">記事総閲覧数</div>
                        <div className=\"text-sm text-blue-600\">目標: 50,000</div>
                      </div>
                      <div className=\"text-right\">
                        <div className=\"text-lg font-bold text-blue-700\">45,672</div>
                        <div className=\"text-xs text-blue-500\">91.3%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}