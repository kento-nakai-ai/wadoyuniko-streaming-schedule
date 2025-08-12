import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, Clock, Users, Zap, Trophy, Gift, Youtube, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-primary/10 via-purple-500/5 to-background px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4" variant="secondary">
              8月13日〜31日 19日間連続配信
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AI駆動開発<br />19日間チャレンジ
            </h1>
            <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
              プログラミング初心者でもAI開発者になれる！<br />
              Google AI Studio Buildから始めて、実用アプリ完成まで
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/streaming-schedule">
                <Button size="lg" className="gap-2">
                  配信スケジュールを見る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" asChild>
                <a href="https://youtube.com/live/3PvXS1DN3Ec" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Youtube className="h-4 w-4" />
                  YouTube で視聴予約
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 配信概要 */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">配信概要</h2>
            <p className="text-muted-foreground text-lg">
              毎日20:00から、AIと一緒に実用的なアプリを作っていきます
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Calendar className="mx-auto h-8 w-8 text-primary mb-2" />
                <CardTitle>19日間</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  8月13日〜31日<br />
                  連続配信チャレンジ
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="mx-auto h-8 w-8 text-primary mb-2" />
                <CardTitle>毎日20:00</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  平日：20:00-21:30<br />
                  週末：特別企画あり
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="mx-auto h-8 w-8 text-primary mb-2" />
                <CardTitle>1日1アプリ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  毎日実用的な<br />
                  AIアプリを完成
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Gift className="mx-auto h-8 w-8 text-primary mb-2" />
                <CardTitle>完全無料</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Google AI Studio<br />
                  中心の無料ツール
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4週間の構成 */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            4週間の学習構成
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-100 text-blue-800">Week 1</Badge>
                  <span className="text-sm text-muted-foreground">8/13-17</span>
                </div>
                <CardTitle className="text-lg">基礎編</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Google AI Studio Build中心の初心者向けスタート
                </CardDescription>
                <ul className="text-sm space-y-1">
                  <li>• チャットボット作成</li>
                  <li>• メール自動返信</li>
                  <li>• コンテンツ生成</li>
                  <li>• ワークフロー構築</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-100 text-purple-800">Week 2</Badge>
                  <span className="text-sm text-muted-foreground">8/18-24</span>
                </div>
                <CardTitle className="text-lg">実践編</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  本格的な開発ツールでスキルアップ
                </CardDescription>
                <ul className="text-sm space-y-1">
                  <li>• Claude Code開発</li>
                  <li>• Codex CLI活用</li>
                  <li>• データ分析</li>
                  <li>• 自動化スクリプト</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-orange-100 text-orange-800">Week 3</Badge>
                  <span className="text-sm text-muted-foreground">8/25-31</span>
                </div>
                <CardTitle className="text-lg">応用編</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  フルスタック開発と本番デプロイ
                </CardDescription>
                <ul className="text-sm space-y-1">
                  <li>• Next.js アプリ開発</li>
                  <li>• データベース連携</li>
                  <li>• Vercel デプロイ</li>
                  <li>• 収益化実装</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-200 ring-2 ring-primary">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">Final</Badge>
                  <span className="text-sm text-muted-foreground">8/31</span>
                </div>
                <CardTitle className="text-lg">Demo Day</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  成果発表と打ち上げの感動フィナーレ
                </CardDescription>
                <ul className="text-sm space-y-1">
                  <li>• 作品発表会</li>
                  <li>• 優秀作品表彰</li>
                  <li>• ネットワーキング</li>
                  <li>• オンライン打ち上げ</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            なぜこの配信なのか？
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">初心者フレンドリー</h3>
              <p className="text-muted-foreground">
                プログラミング未経験でもOK！ブラウザだけで始められて、
                エラーが出ても一緒に解決していきます。
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">AI相談形式</h3>
              <p className="text-muted-foreground">
                分からないことはリアルタイムでAIに相談しながら進めます。
                まるでAIとペアプログラミングしているみたい！
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">実用的なゴール</h3>
              <p className="text-muted-foreground">
                毎日必ず動くアプリが完成します。19日後には
                ポートフォリオがいっぱいに！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="bg-gradient-to-r from-primary/10 to-purple-500/10 px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">
            8月13日20:00、AI開発の旅が始まります！
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            19日間でプログラミング初心者からAI開発者へ
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/streaming-schedule">
              <Button size="lg" className="gap-2">
                詳細スケジュールを見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" asChild>
              <a href="https://line.me/ti/g/example" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                LINEで参加
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}