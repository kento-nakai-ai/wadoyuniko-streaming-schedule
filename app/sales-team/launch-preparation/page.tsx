import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, Calendar, Users, Settings, FileText, Mic, Target, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function LaunchPreparationPage() {
  const preparationDays = [
    {
      day: "Day 1-2",
      title: "セールスチーム研修",
      icon: Users,
      color: "bg-blue-500",
      status: "completed",
      description: "6ステップ法の習得、ロープレ練習、90%初心者戦略のマスター",
      keyTasks: [
        "基礎トレーニング（9:00-12:00）",
        "初心者対応マスター（13:00-15:00）",
        "成功事例インプット（15:00-17:00）",
        "フルロールプレイング（10:00-12:00）",
        "難易度の高い顧客対応練習",
        "決起集会・目標設定"
      ]
    },
    {
      day: "Day 3-4",
      title: "システム構築",
      icon: Settings,
      color: "bg-green-500",
      status: "completed",
      description: "LINE公式アカウント設定、メール自動化、CRM連携",
      keyTasks: [
        "LINE公式アカウント構築",
        "7日間ステップ配信設定",
        "自動応答メッセージ作成",
        "メールシステム構築",
        "CRMシステム連携",
        "効果測定システム設置"
      ]
    },
    {
      day: "Day 5-6",
      title: "コンテンツ仕上げ",
      icon: FileText,
      color: "bg-purple-500",
      status: "completed",
      description: "セミナースライド50枚、3大特典コンテンツの完成",
      keyTasks: [
        "セミナースライド最終調整（50枚）",
        "特典1: 個別サポート3回の設計",
        "特典2: AI活用テンプレート集",
        "特典3: 収益化ロードマップ",
        "会員サイト構築",
        "配布システム設定"
      ]
    },
    {
      day: "Day 7",
      title: "最終リハーサル",
      icon: Mic,
      color: "bg-orange-500",
      status: "completed",
      description: "全システム動作確認、セミナーリハーサル、緊急対応練習",
      keyTasks: [
        "最終チェックリスト確認",
        "セミナーフルリハーサル",
        "システム動作確認",
        "セールスロープレ最終確認",
        "緊急対応シミュレーション",
        "決起集会・最終ブリーフィング"
      ]
    },
    {
      day: "ローンチ当日",
      title: "本番運営",
      icon: Target,
      color: "bg-red-500",
      status: "pending",
      description: "7:00-19:00の完全スケジュール、目標：50名参加・15件成約",
      keyTasks: [
        "7:00-9:00 準備フェーズ",
        "9:00-10:00 受付フェーズ",
        "10:00-11:30 セミナー実施",
        "11:30-18:00 個別相談",
        "18:00-19:00 締めフェーズ",
        "結果集計・振り返り"
      ]
    }
  ]

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
            7日間ローンチ準備プログラム
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="default">売上目標: 1,080万円</Badge>
            <Badge variant="secondary">成約目標: 100名</Badge>
            <Badge variant="outline">成約率: 60%</Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              準備進捗状況
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>全体進捗</span>
                  <span>4/5 完了</span>
                </div>
                <Progress value={80} className="w-full" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {preparationDays.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-white text-sm ${
                      day.status === 'completed' ? 'bg-green-500' : 
                      day.status === 'pending' ? 'bg-gray-400' : day.color
                    }`}>
                      {day.status === 'completed' ? <CheckCircle className="w-4 h-4" /> : index + 1}
                    </div>
                    <div className="text-xs mt-1">{day.day}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preparation Days */}
        <div className="space-y-6">
          {preparationDays.map((day, index) => {
            const IconComponent = day.icon
            return (
              <Card key={index} className={`${day.status === 'completed' ? 'border-green-200 bg-green-50/50 dark:bg-green-900/10' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg text-white ${day.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          {day.day}: {day.title}
                          {day.status === 'completed' && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                        </div>
                        <CardDescription className="mt-1">
                          {day.description}
                        </CardDescription>
                      </div>
                    </CardTitle>
                    <Badge variant={day.status === 'completed' ? 'default' : 'secondary'}>
                      {day.status === 'completed' ? '完了' : '未実施'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">主要タスク</h4>
                      <ul className="space-y-2">
                        {day.keyTasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-sm">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              day.status === 'completed' ? 'bg-green-500' : 'bg-gray-400'
                            }`}></div>
                            <span className={day.status === 'completed' ? 'text-green-700 dark:text-green-400' : ''}>
                              {task}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">関連資料</h4>
                      <div className="space-y-2">
                        {day.day === "Day 1-2" && (
                          <div className="space-y-1">
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              📋 研修プログラム詳細
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              🎭 ロープレ台本集
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              ✅ スキルチェックシート
                            </Button>
                          </div>
                        )}
                        {day.day === "Day 3-4" && (
                          <div className="space-y-1">
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              📱 LINE設定マニュアル
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              📧 メール配信テンプレート
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              🔧 システム連携手順
                            </Button>
                          </div>
                        )}
                        {day.day === "Day 5-6" && (
                          <div className="space-y-1">
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              🎨 スライドテンプレート
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              🎁 特典コンテンツ一覧
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              💻 会員サイト設定
                            </Button>
                          </div>
                        )}
                        {day.day === "Day 7" && (
                          <div className="space-y-1">
                            <Button variant="outline" size="sm" className="w-full justify-start" id="day7">
                              ✅ 最終チェックリスト
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              🎬 リハーサル手順
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              🚨 緊急時対応フロー
                            </Button>
                          </div>
                        )}
                        {day.day === "ローンチ当日" && (
                          <div className="space-y-1">
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              ⏰ 当日タイムスケジュール
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              👥 役割分担表
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start">
                              📊 成果測定シート
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Success Metrics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🎯 成功基準</CardTitle>
            <CardDescription>ローンチ成功のための目標値</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">最低ライン</h3>
                <div className="space-y-1 text-sm">
                  <div>セミナー参加: 30名</div>
                  <div>個別相談: 15件</div>
                  <div>成約: 9件</div>
                  <div className="font-bold text-lg">300万円</div>
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">目標ライン</h3>
                <div className="space-y-1 text-sm">
                  <div>セミナー参加: 50名</div>
                  <div>個別相談: 25件</div>
                  <div>成約: 15件</div>
                  <div className="font-bold text-lg">450万円</div>
                </div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">ストレッチ</h3>
                <div className="space-y-1 text-sm">
                  <div>セミナー参加: 70名</div>
                  <div>個別相談: 35件</div>
                  <div>成約: 21件</div>
                  <div className="font-bold text-lg">630万円</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🚨 緊急連絡先</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">内部連絡先</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>統括責任者</span>
                    <span className="font-mono">090-0000-0000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>営業責任者</span>
                    <span className="font-mono">080-0000-0000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>システム担当</span>
                    <span className="font-mono">070-0000-0000</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">外部連絡先</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Zoomサポート</span>
                    <span className="font-mono">0120-000-000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>決済会社</span>
                    <span className="font-mono">0120-111-111</span>
                  </div>
                  <div className="flex justify-between">
                    <span>サーバー会社</span>
                    <span className="font-mono">03-0000-0000</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}