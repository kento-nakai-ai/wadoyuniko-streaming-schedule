import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, MessageSquare, Mail, Settings, BarChart3, Phone, Users } from 'lucide-react'
import Link from 'next/link'

export default function AutomationPage() {
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
            自動化システム戦略
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="default">LINE自動化</Badge>
            <Badge variant="secondary">メール配信</Badge>
            <Badge variant="outline">フォローアップ</Badge>
          </div>
        </div>

        <Tabs defaultValue="line" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="line">LINE戦略</TabsTrigger>
            <TabsTrigger value="email">メール戦略</TabsTrigger>
            <TabsTrigger value="crm">CRM連携</TabsTrigger>
            <TabsTrigger value="analytics">効果測定</TabsTrigger>
          </TabsList>

          <TabsContent value="line" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  LINE公式アカウント戦略
                </CardTitle>
                <CardDescription>
                  7日間ステップ配信で90%初心者戦略を最大活用
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Account Setup */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">🏗️ アカウント基本設定</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">プロフィール設定</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>アカウント名:</strong> わどバイブコーディングスクール【公式】</li>
                        <li><strong>ステータス:</strong> 🎯プログラミング初心者専門 ✨501名が成果達成</li>
                        <li><strong>プロフィール画像:</strong> ロゴマーク</li>
                        <li><strong>背景画像:</strong> 「90%が初心者で成功」ビジュアル</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">リッチメニュー（6分割）</h4>
                      <div className="grid grid-cols-3 gap-1 text-xs border rounded p-2">
                        <div className="bg-blue-100 p-2 text-center rounded">無料相談</div>
                        <div className="bg-green-100 p-2 text-center rounded">講座内容</div>
                        <div className="bg-purple-100 p-2 text-center rounded">成功事例</div>
                        <div className="bg-yellow-100 p-2 text-center rounded">よくある質問</div>
                        <div className="bg-orange-100 p-2 text-center rounded">料金案内</div>
                        <div className="bg-pink-100 p-2 text-center rounded">特典一覧</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Welcome Message */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">💬 友だち追加時メッセージ</h3>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                    <p className="text-sm mb-3">
                      ご登録ありがとうございます😊<br />
                      わどバイブコーディングスクールです！
                    </p>
                    <p className="text-sm mb-3">
                      ＼驚きの事実／<br />
                      受講生の90%以上が<br />
                      プログラミング完全初心者🔰
                    </p>
                    <p className="text-sm mb-3">
                      それでも3ヶ月後には<br />
                      アプリ開発できるように✨
                    </p>
                    <p className="text-sm">
                      まずは、あなたについて教えてください👇
                    </p>
                  </div>
                </div>

                {/* Auto-response Keywords */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">🤖 キーワード自動応答</h3>
                  <div className="grid gap-4">
                    <div className="border rounded p-3">
                      <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
                        「料金、価格、費用」→
                      </h4>
                      <p className="text-sm">
                        料金についてのお問い合わせですね💰<br />
                        バイブコーディングコース：30万円<br />
                        でも！分割払いもOK 月々1万円〜
                      </p>
                    </div>
                    <div className="border rounded p-3">
                      <h4 className="font-medium text-green-800 dark:text-green-300 mb-2">
                        「初心者、未経験」→
                      </h4>
                      <p className="text-sm">
                        初心者の方、大歓迎です！🎉<br />
                        なんと受講生の90%以上が完全初心者<br />
                        みんな同じスタートラインだから安心😊
                      </p>
                    </div>
                    <div className="border rounded p-3">
                      <h4 className="font-medium text-purple-800 dark:text-purple-300 mb-2">
                        「相談、質問、不安」→
                      </h4>
                      <p className="text-sm">
                        どんな小さな不安も無料相談で解決します💡<br />
                        30分無料相談で疑問を全て解消！
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7-Day Sequence */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">📅 7日間ステップ配信</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-3">
                      <h4 className="font-medium">Day1: 初心者が3ヶ月で変わった理由</h4>
                      <p className="text-xs text-gray-600">52歳主婦→ECサイトで月15万円</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-3">
                      <h4 className="font-medium">Day2: 「ToDoアプリ作って」→3分で完成</h4>
                      <p className="text-xs text-gray-600">AIとの対話の具体例を実演</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-3">
                      <h4 className="font-medium">Day3: 60代から始めて月10万円</h4>
                      <p className="text-xs text-gray-600">年齢は関係ない成功事例</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-3">
                      <h4 className="font-medium">Day4: 【重要】明日、特別なご案内が</h4>
                      <p className="text-xs text-gray-600">限定オファー予告</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-3">
                      <h4 className="font-medium">Day5: 【本日限定】特別価格＋3大特典</h4>
                      <p className="text-xs text-gray-600">15万円相当特典付きオファー</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-3">
                      <h4 className="font-medium">Day6: 【残り24時間】特典付きは明日まで</h4>
                      <p className="text-xs text-gray-600">締切前日の緊急性</p>
                    </div>
                    <div className="border-l-4 border-gray-500 pl-3">
                      <h4 className="font-medium">Day7: 【本日23:59まで】最後のご案内</h4>
                      <p className="text-xs text-gray-600">最終クロージング</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  メール自動化システム
                </CardTitle>
                <CardDescription>
                  見込み客育成とフォローアップの自動化
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email Tools */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">🛠️ 使用ツール</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">推奨ツール</h4>
                      <ul className="text-sm space-y-1">
                        <li>• MailChimp（海外向け）</li>
                        <li>• ConvertKit（マーケター向け）</li>
                        <li>• エキスパ（国産）</li>
                        <li>• Benchmark Email（コスパ重視）</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">必要機能</h4>
                      <ul className="text-sm space-y-1">
                        <li>• ステップメール配信</li>
                        <li>• 開封率・クリック率測定</li>
                        <li>• A/Bテスト機能</li>
                        <li>• セグメント配信</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Email Templates */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">📧 メールテンプレート</h3>
                  <div className="space-y-4">
                    <div className="border rounded p-3">
                      <h4 className="font-medium mb-2">件名パターン（開封率重視）</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 【驚愕】90%が初心者なのに成功する理由</li>
                        <li>• 3分でアプリが作れる証拠動画</li>
                        <li>• 【24時間限定】15万円相当の特典</li>
                        <li>• 【最終】23:59で締切ります</li>
                      </ul>
                    </div>
                    <div className="border rounded p-3">
                      <h4 className="font-medium mb-2">署名テンプレート</h4>
                      <div className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono">
                        ──────────────<br />
                        わどバイブコーディングスクール<br />
                        セールスマネージャー ○○<br />
                        <br />
                        「90%が初心者」の安心スクール<br />
                        501名が成果を出しています<br />
                        <br />
                        📧 info@vibecoding.com<br />
                        📱 LINE: @vibecoding<br />
                        ──────────────
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Sequence */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">🔄 自動配信シーケンス</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">1</div>
                      <div>
                        <div className="font-medium">セミナー申込→即時お礼メール</div>
                        <div className="text-xs text-gray-600">参加確認とZoomリンク送付</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">2</div>
                      <div>
                        <div className="font-medium">セミナー前日→リマインダー</div>
                        <div className="text-xs text-gray-600">開催時間と準備事項の確認</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">3</div>
                      <div>
                        <div className="font-medium">セミナー当日→開始1時間前</div>
                        <div className="text-xs text-gray-600">最終リマインド</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">4</div>
                      <div>
                        <div className="font-medium">個別相談予約→確認メール</div>
                        <div className="text-xs text-gray-600">日時確認と準備事項</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">5</div>
                      <div>
                        <div className="font-medium">相談後→フォローアップ</div>
                        <div className="text-xs text-gray-600">24時間後に自動送信</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crm" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  CRM・顧客管理システム
                </CardTitle>
                <CardDescription>
                  見込み客から成約まで一元管理
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Data Flow */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">🔄 データフロー</h3>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center">
                      <div className="font-medium">申込フォーム</div>
                      <div className="text-xs text-gray-600">基本情報入力</div>
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center">
                      <div className="font-medium">CRM自動登録</div>
                      <div className="text-xs text-gray-600">顧客情報管理</div>
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center">
                      <div className="font-medium">タグ付け</div>
                      <div className="text-xs text-gray-600">見込み度分類</div>
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded border text-center">
                      <div className="font-medium">フォローアップ</div>
                      <div className="text-xs text-gray-600">自動配信開始</div>
                    </div>
                  </div>
                </div>

                {/* Customer Tags */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">🏷️ 顧客タグ分類</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">レベル別タグ</h4>
                      <div className="space-y-1">
                        <Badge variant="secondary">#初心者</Badge>
                        <Badge variant="secondary">#経験者</Badge>
                        <Badge variant="secondary">#挫折経験あり</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">関心度タグ</h4>
                      <div className="space-y-1">
                        <Badge variant="default">#即決可能性高</Badge>
                        <Badge variant="outline">#検討中</Badge>
                        <Badge variant="destructive">#要フォロー</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automation Rules */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">⚙️ 自動化ルール</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">セミナー申込</div>
                        <div className="text-xs text-gray-600">→ 歓迎メール + LINEフォロー促進</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">資料ダウンロード</div>
                        <div className="text-xs text-gray-600">→ 関心度タグ付け + ステップメール開始</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">無料相談予約</div>
                        <div className="text-xs text-gray-600">→ 高関心タグ + リマインダー設定</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">相談後24時間</div>
                        <div className="text-xs text-gray-600">→ フォローメール + 特典案内</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">成約</div>
                        <div className="text-xs text-gray-600">→ お礼メール + 会員サイト案内</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Management */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">📊 ステータス管理</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded">
                      <div className="font-bold text-blue-800 dark:text-blue-300">見込み客</div>
                      <div className="text-xs">初回接触</div>
                    </div>
                    <div className="text-center p-3 bg-green-100 dark:bg-green-900/50 rounded">
                      <div className="font-bold text-green-800 dark:text-green-300">商談中</div>
                      <div className="text-xs">相談実施</div>
                    </div>
                    <div className="text-center p-3 bg-purple-100 dark:bg-purple-900/50 rounded">
                      <div className="font-bold text-purple-800 dark:text-purple-300">検討中</div>
                      <div className="text-xs">フォロー中</div>
                    </div>
                    <div className="text-center p-3 bg-orange-100 dark:bg-orange-900/50 rounded">
                      <div className="font-bold text-orange-800 dark:text-orange-300">成約</div>
                      <div className="text-xs">契約完了</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  効果測定・分析システム
                </CardTitle>
                <CardDescription>
                  KPI追跡とROI最適化
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* KPI Dashboard */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">📊 主要KPI</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                      <div className="text-2xl font-bold text-blue-600">__%</div>
                      <div className="text-sm">メール開封率</div>
                      <div className="text-xs text-gray-500">目標: 40%</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                      <div className="text-2xl font-bold text-green-600">__%</div>
                      <div className="text-sm">クリック率</div>
                      <div className="text-xs text-gray-500">目標: 10%</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                      <div className="text-2xl font-bold text-purple-600">__%</div>
                      <div className="text-sm">相談予約率</div>
                      <div className="text-xs text-gray-500">目標: 25%</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                      <div className="text-2xl font-bold text-orange-600">__%</div>
                      <div className="text-sm">成約率</div>
                      <div className="text-xs text-gray-500">目標: 60%</div>
                    </div>
                  </div>
                </div>

                {/* A/B Testing */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">🧪 A/Bテスト計画</h3>
                  <div className="space-y-4">
                    <div className="border rounded p-3">
                      <h4 className="font-medium mb-2">1. メール件名テスト</h4>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div>パターンA: 疑問形「プログラミングが簡単になる方法とは？」</div>
                        <div>パターンB: 数字入り「90%が初心者で成功した理由」</div>
                      </div>
                    </div>
                    <div className="border rounded p-3">
                      <h4 className="font-medium mb-2">2. 配信時間テスト</h4>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div>パターンA: 朝10:00配信</div>
                        <div>パターンB: 夜20:00配信</div>
                      </div>
                    </div>
                    <div className="border rounded p-3">
                      <h4 className="font-medium mb-2">3. CTA文言テスト</h4>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div>パターンA: 「今すぐ申し込む」</div>
                        <div>パターンB: 「詳細を見る」</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tracking Setup */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">📈 トラッキング設定</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">Google Analytics</div>
                        <div className="text-xs text-gray-600">Webサイト訪問・コンバージョン測定</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">UTMパラメータ</div>
                        <div className="text-xs text-gray-600">流入元別の効果測定</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">Facebook Pixel</div>
                        <div className="text-xs text-gray-600">広告効果の測定と最適化</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <div>
                        <div className="font-medium">LINE分析</div>
                        <div className="text-xs text-gray-600">友だち数・ブロック率・配信効果</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Analysis */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">💰 ROI分析</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                      <div className="text-lg font-bold">広告費用</div>
                      <div className="text-2xl text-red-600">__万円</div>
                      <div className="text-xs text-gray-500">月間投資額</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                      <div className="text-lg font-bold">売上</div>
                      <div className="text-2xl text-green-600">__万円</div>
                      <div className="text-xs text-gray-500">月間売上</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                      <div className="text-lg font-bold">ROI</div>
                      <div className="text-2xl text-blue-600">__%</div>
                      <div className="text-xs text-gray-500">投資対効果</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🚀 クイックアクション</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button className="h-16 flex flex-col gap-1">
                <MessageSquare className="w-5 h-5" />
                <span>LINE設定</span>
                <span className="text-xs opacity-75">管理画面を開く</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-1">
                <Mail className="w-5 h-5" />
                <span>メール配信</span>
                <span className="text-xs opacity-75">配信管理</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-1">
                <BarChart3 className="w-5 h-5" />
                <span>効果測定</span>
                <span className="text-xs opacity-75">レポート確認</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}