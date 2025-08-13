import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, Calendar, FileText, Target, TrendingUp, MessageSquare } from 'lucide-react'

export default function SalesTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            バイブコーディング セールスチーム
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            月末ローンチ準備 - 売上目標1,080万円達成に向けて
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              目標成約率: 60%
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              目標受講生: 100名
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              90%が初心者
            </Badge>
          </div>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                セールスマニュアル
              </CardTitle>
              <CardDescription>
                完全版マニュアル・FAQ・ロープレ台本
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/sales-team/manual">
                <Button className="w-full">
                  マニュアルを見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                7日間準備プログラム
              </CardTitle>
              <CardDescription>
                Day1-7の詳細スケジュールと実行計画
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/sales-team/launch-preparation">
                <Button className="w-full">
                  準備計画を見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                LINE・メール戦略
              </CardTitle>
              <CardDescription>
                自動化システムとフォローアップ戦略
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/sales-team/automation">
                <Button className="w-full">
                  自動化戦略を見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>クイックアクセス</CardTitle>
            <CardDescription>よく使う資料へのショートカット</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/sales-team/manual#individual-consultation">
                <Button variant="outline" className="w-full h-16 flex flex-col">
                  <span className="text-sm">個別面談</span>
                  <span className="text-xs text-gray-500">スクリプト</span>
                </Button>
              </Link>
              <Link href="/sales-team/manual#success-stories">
                <Button variant="outline" className="w-full h-16 flex flex-col">
                  <span className="text-sm">成功事例</span>
                  <span className="text-xs text-gray-500">10選</span>
                </Button>
              </Link>
              <Link href="/sales-team/manual#objection-handling">
                <Button variant="outline" className="w-full h-16 flex flex-col">
                  <span className="text-sm">反論処理</span>
                  <span className="text-xs text-gray-500">FAQ</span>
                </Button>
              </Link>
              <Link href="/sales-team/launch-preparation#day7">
                <Button variant="outline" className="w-full h-16 flex flex-col">
                  <span className="text-sm">最終リハーサル</span>
                  <span className="text-xs text-gray-500">チェックリスト</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600">90%</div>
              <div className="text-sm text-gray-600">初心者率</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600">501名</div>
              <div className="text-sm text-gray-600">受講実績</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600">30万円</div>
              <div className="text-sm text-gray-600">講座価格</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600">60%</div>
              <div className="text-sm text-gray-600">目標成約率</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Updates */}
        <Card>
          <CardHeader>
            <CardTitle>最新の更新</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div>
                  <div className="font-medium">ローンチ当日運営マニュアル完成</div>
                  <div className="text-sm text-gray-600">分刻みのタイムスケジュール公開</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <div>
                  <div className="font-medium">セミナースライド50枚完成</div>
                  <div className="text-sm text-gray-600">90%初心者戦略を組み込み済み</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div>
                  <div className="font-medium">LINE自動化システム設計完了</div>
                  <div className="text-sm text-gray-600">7日間ステップ配信シナリオ</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <h3 className="font-bold text-red-800 dark:text-red-400 mb-2">🚨 緊急連絡先</h3>
          <div className="text-sm text-red-700 dark:text-red-300">
            <p>セールスマネージャー: 090-xxxx-xxxx</p>
            <p>システム担当: 080-xxxx-xxxx</p>
            <p>LINE: @vibecoding-sales</p>
          </div>
        </div>
      </div>
    </div>
  )
}