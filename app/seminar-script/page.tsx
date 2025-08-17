import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Clock, Users, Target, Lightbulb, PlayCircle, CheckCircle2 } from 'lucide-react'

export default function SeminarScriptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            バイブコーディング開発ローンチセミナー
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            チーム共有用台本・デモ戦略資料
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-sm">
              <Clock className="w-4 h-4 mr-1" />
              総時間: 60分
            </Badge>
            <Badge variant="outline" className="text-sm">
              <Users className="w-4 h-4 mr-1" />
              目標参加者: 100名
            </Badge>
            <Badge variant="outline" className="text-sm">
              <Target className="w-4 h-4 mr-1" />
              購入率目標: 15%以上
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">概要</TabsTrigger>
            <TabsTrigger value="script">台本</TabsTrigger>
            <TabsTrigger value="demos">デモ戦略</TabsTrigger>
            <TabsTrigger value="timeline">タイムライン</TabsTrigger>
            <TabsTrigger value="feedback">フィードバック</TabsTrigger>
          </TabsList>

          {/* 概要タブ */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    セミナー目標
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✅ 購入率15%以上達成</li>
                    <li>✅ チャット参加率70%以上</li>
                    <li>✅ 最後まで視聴率80%以上</li>
                    <li>✅ 個別相談申込率30%以上</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PlayCircle className="w-5 h-5 mr-2 text-green-600" />
                    デモ構成
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><strong>冒頭3分:</strong> AI占い師Bot</li>
                    <li><strong>中盤30分:</strong> AI動画解析システム</li>
                    <li><strong>ツール:</strong> Google AI Studio + Claude Code</li>
                    <li><strong>バックアップ:</strong> 録画版準備済み</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
                    重要ポイント
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>🎯 100個Bot開発を中心軸</li>
                    <li>🎯 第1回限定性の強調</li>
                    <li>🎯 生配信価値の訴求</li>
                    <li>🎯 SNS連動で話題拡散</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>セミナー全体構造</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">3分</div>
                    <div className="text-sm">衝撃的オープニング</div>
                    <div className="text-xs text-gray-600">AI占い師Bot実演</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">45分</div>
                    <div className="text-sm">価値提供パート</div>
                    <div className="text-xs text-gray-600">未来を見せる</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">12分</div>
                    <div className="text-sm">クロージング</div>
                    <div className="text-xs text-gray-600">今日行動させる</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 台本タブ */}
          <TabsContent value="script" className="space-y-6">
            <ScriptSection />
          </TabsContent>

          {/* デモ戦略タブ */}
          <TabsContent value="demos" className="space-y-6">
            <DemoStrategySection />
          </TabsContent>

          {/* タイムラインタブ */}
          <TabsContent value="timeline" className="space-y-6">
            <TimelineSection />
          </TabsContent>

          {/* フィードバックタブ */}
          <TabsContent value="feedback" className="space-y-6">
            <FeedbackSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ScriptSection() {
  const scriptSections = [
    {
      title: "冒頭（3分）：衝撃的オープニング",
      time: "0-3分",
      color: "blue",
      content: [
        {
          subtitle: "1. 画面に大きく表示（30秒）",
          text: "「たった3分で、あなたの常識が崩れます」\n「プログラミング経験0の私が、今からアプリを作ります」"
        },
        {
          subtitle: "2. 【ミニデモ】Google AI Studio で瞬間AI占い師作成（2分）",
          text: "Google AI Studioを使って、瞬間でAI占い師を作ってみます\n→ ブラウザでAI Studioを開く\n→ 「名前占い師を作ってください」でプロンプト設定\n→ build実行：「見てください、もうできました」\n→ 「ユニコ濾」で実演→「参加者の名前も試してみましょう」"
        },
        {
          subtitle: "3. 衝撃の宣言（30秒）",
          text: "「プログラミングは、もう『勉強』するものではありません」\n「AIと『対話』するものです」\n「今日から、あなたもクリエイターになれます」"
        }
      ]
    },
    {
      title: "第1部（45分）：価値提供パート",
      time: "3-48分",
      color: "green",
      content: [
        {
          subtitle: "A. セミナールール設定（2分）",
          text: "今日のゴール：「AIの力で、今日から開発を始める」\n\n3つのお願い：\n1. 主役になる - チャットで積極的に参加\n2. \"初心者\"を楽しむ - 知らないことを恥じない\n3. 未来に集中 - スマホOFF、通知OFF"
        },
        {
          subtitle: "B. 自己紹介（3分）",
          text: "わど（1分30秒）：\n- 販売のプロ → AI開発で人生変革\n- 「売れるもの」を作る視点の重要性\n\nユニコ濾（1分30秒）：\n- 3ヶ月前：プログラミング完全未経験\n- 現在：100個以上のAIアプリ開発\n- 「未経験だからこそ、教えられることがある」"
        },
        {
          subtitle: "E. 【メインデモ】Claude Code でAI動画解析システム構築（30分）",
          text: "Phase 1: プロジェクト設計＆フロントエンド（10分）\n- Claude Codeを開いて新規プロジェクト作成\n- 「YouTube動画解析システムをReactで作ってください」\n\nPhase 2: バックエンドAPI開発（10分）\n- 並列でバックエンド開発開始\n- 「Express.jsでAPIサーバーを作って、YouTube Data APIと連携してください」\n\nPhase 3: AI機能統合＆デプロイ（10分）\n- OpenAI APIを統合\n- 実際にデプロイしてライブ環境で動作確認"
        }
      ]
    },
    {
      title: "第2部（12分）：商品紹介・クロージング",
      time: "48-60分",
      color: "purple",
      content: [
        {
          subtitle: "A. 商品の明確化（2分）",
          text: "「今日ご紹介するのは『AI開発講座』です」\n「100個のBot開発プロジェクト」が中心軸\n「ワドAIボットは卒業生特典として後日提供」"
        },
        {
          subtitle: "E. 緊急性とクロージング（4分）",
          text: "5大参加特典（1分30秒）：\n1. ローンチ支援AI「Wado AI」永久利用権（10万円相当）\n2. ユニコ濾本人マンツーマンZoom戦略セッション（5万円相当）\n3. 豪華コラボ講座見放題\n4. Bot作成リクエスト権＆100個作成伴走\n5. クライアントワーク最適化bot"
        }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {scriptSections.map((section, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{section.title}</span>
              <Badge variant="outline">{section.time}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="border-l-4 border-blue-200 pl-4">
                  <h4 className="font-semibold text-sm mb-2">{item.subtitle}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function DemoStrategySection() {
  const demoOptions = [
    {
      category: "現行デモ（推奨）",
      demos: [
        {
          name: "AI占い師Bot",
          tool: "Google AI Studio",
          time: "3分",
          stability: 95,
          impact: 85,
          description: "名前入力で性格診断・運勢表示。安定性抜群で参加者巻き込み効果大"
        },
        {
          name: "AI動画解析システム",
          tool: "Claude Code",
          time: "30分",
          stability: 80,
          impact: 95,
          description: "フルスタック開発をリアルタイム実演。技術力とビジネス価値を同時訴求"
        }
      ]
    },
    {
      category: "代替案（収益重視）",
      demos: [
        {
          name: "AI商品レビュー生成",
          tool: "Google AI Studio",
          time: "3分",
          stability: 90,
          impact: 80,
          description: "Amazon商品のレビュー自動生成。即収益化イメージを強烈に訴求"
        },
        {
          name: "AI価格最適化システム",
          tool: "Claude Code",
          time: "30分",
          stability: 75,
          impact: 90,
          description: "ECサイト向け動的価格調整。月収50-100万円の可能性を具体化"
        }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {demoOptions.map((category, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.demos.map((demo, demoIndex) => (
                <div key={demoIndex} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{demo.name}</h4>
                    <Badge variant="outline">{demo.time}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {demo.description}
                  </p>
                  <div className="text-xs text-gray-500 mb-2">
                    ツール: {demo.tool}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs">安定性</span>
                      <span className="text-xs">{demo.stability}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{width: `${demo.stability}%`}}
                      ></div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">インパクト</span>
                      <span className="text-xs">{demo.impact}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{width: `${demo.impact}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function TimelineSection() {
  const timeline = [
    { time: "0:00-0:30", section: "画面表示", content: "衝撃的タイトル表示" },
    { time: "0:30-2:30", section: "ミニデモ", content: "AI占い師Bot作成実演" },
    { time: "2:30-3:00", section: "宣言", content: "パラダイムシフト宣言" },
    { time: "3:00-5:00", section: "ルール設定", content: "セミナールール・ゴール設定" },
    { time: "5:00-8:00", section: "自己紹介", content: "わど・ユニコ濾紹介" },
    { time: "8:00-16:00", section: "パラダイム", content: "時代転換点・なぜ今なのか" },
    { time: "16:00-23:00", section: "従来の問題", content: "挫折率90%の真実・共感獲得" },
    { time: "23:00-53:00", section: "メインデモ", content: "Claude Code でAI動画解析システム開発" },
    { time: "53:00-58:00", section: "商品紹介", content: "100個Bot・3つの約束・特典" },
    { time: "58:00-60:00", section: "クロージング", content: "緊急性・行動促進" }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>詳細タイムライン（60分構成）</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
              <div className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                {item.time}
              </div>
              <div className="font-semibold text-sm min-w-[100px]">
                {item.section}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function FeedbackSection() {
  const feedbackItems = [
    {
      priority: "高",
      item: "現在のデモ構成で問題ないか？",
      status: "要確認",
      color: "red"
    },
    {
      priority: "高", 
      item: "セミナーのメインターゲット層は誰か？",
      status: "要確認",
      color: "red"
    },
    {
      priority: "中",
      item: "技術的準備で不安な部分はあるか？",
      status: "要確認", 
      color: "yellow"
    },
    {
      priority: "中",
      item: "時間配分（45分+12分+3分）で適切か？",
      status: "要確認",
      color: "yellow"
    },
    {
      priority: "低",
      item: "SNS連動特典の具体的内容",
      status: "検討中",
      color: "green"
    }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>フィードバック・確認事項</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {feedbackItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge 
                    variant={item.color === 'red' ? 'destructive' : item.color === 'yellow' ? 'default' : 'secondary'}
                  >
                    {item.priority}
                  </Badge>
                  <span className="text-sm">{item.item}</span>
                </div>
                <Badge variant="outline">{item.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>チームコメント機能</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm">ゆき（スライド制作）</span>
                <span className="text-xs text-gray-500">2時間前</span>
              </div>
              <p className="text-sm">メインデモの30分は集中力が心配です。途中で参加者の注意を引く仕掛けを増やしませんか？</p>
            </div>
            
            <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm">ちょこ（動画制作）</span>
                <span className="text-xs text-gray-500">1時間前</span>
              </div>
              <p className="text-sm">バックアップ動画の撮影準備できました。ライブデモが失敗した場合の切り替えタイミングを打ち合わせしましょう。</p>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <p className="text-sm text-gray-500 text-center">
                新しいコメントを追加...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}