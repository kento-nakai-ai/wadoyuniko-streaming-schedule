'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Users, 
  Zap, 
  Trophy, 
  Gift, 
  Youtube, 
  MessageSquare,
  Rocket,
  Target,
  TrendingUp,
  AlertCircle,
  BookOpen,
  BarChart3,
  Sparkles,
  Star,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const launch = new Date('2025-08-31T20:00:00');
      const now = new Date();
      const diff = launch.getTime() - now.getTime();
      
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: '売上目標', value: '3,000万円', icon: TrendingUp, color: 'text-green-600' },
    { label: '受講生目標', value: '100名', icon: Users, color: 'text-blue-600' },
    { label: 'セミナー申込', value: '127名', icon: CheckCircle2, color: 'text-purple-600' },
    { label: '残り日数', value: `${countdown.days}日`, icon: Clock, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション - 改善版 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-pink-600/20 px-4 py-24">
        {/* アニメーション背景 */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container relative mx-auto max-w-7xl">
          <div className="text-center">
            {/* ステータスバッジ */}
            <div className="flex justify-center gap-2 mb-6">
              <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-4 py-1">
                <Sparkles className="h-3 w-3 mr-1" />
                8月31日リリース
              </Badge>
              <Badge variant="outline" className="border-purple-600 text-purple-600">
                AI革命
              </Badge>
            </div>

            {/* メインタイトル */}
            <h1 className="mb-6 text-6xl lg:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                バイブコーディング
              </span>
            </h1>
            
            <p className="mb-4 text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
              AIと会話するだけで開発できる新時代
            </p>
            
            <p className="mb-10 text-lg text-muted-foreground max-w-3xl mx-auto">
              プログラミング知識ゼロから3週間で月収30万円を目指す、次世代AI開発メソッド
            </p>

            {/* カウントダウン */}
            <div className="mb-10 flex justify-center gap-4">
              {Object.entries(countdown).map(([key, value]) => (
                <div key={key} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg min-w-[80px]">
                  <div className="text-3xl font-bold text-purple-600">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* CTAボタン */}
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/teams">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl">
                  <Rocket className="h-5 w-5" />
                  チームダッシュボード
                </Button>
              </Link>
              <Link href="/bonus">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl">
                  <Gift className="h-5 w-5" />
                  特典リスト
                </Button>
              </Link>
              <Link href="/x-posts">
                <Button size="lg" variant="outline" className="gap-2 border-2 hover:bg-purple-50 dark:hover:bg-purple-950">
                  <MessageSquare className="h-5 w-5" />
                  X投稿キャンペーン
                </Button>
              </Link>
              <Link href="/streaming-schedule">
                <Button size="lg" variant="outline" className="gap-2 border-2 hover:bg-blue-50 dark:hover:bg-blue-950">
                  <Youtube className="h-5 w-5" />
                  配信スケジュール
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* リアルタイム統計 */}
      <section className="px-4 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <Badge className="mb-4" variant="outline">
              <BarChart3 className="h-3 w-3 mr-1" />
              LIVE STATS
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              プロジェクト進捗状況
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    <Badge variant="outline" className="text-xs">LIVE</Badge>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* プログレスバー */}
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">総合進捗率</h3>
                  <p className="text-sm text-muted-foreground">ローンチまでの準備状況</p>
                </div>
                <div className="text-3xl font-bold text-purple-600">42%</div>
              </div>
              <Progress value={42} className="h-3" />
              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                <div>
                  <div className="text-sm text-muted-foreground">コンテンツ</div>
                  <div className="font-semibold">35%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">マーケティング</div>
                  <div className="font-semibold">58%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">システム</div>
                  <div className="font-semibold">72%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ナビゲーションカード */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">クイックアクセス</h2>
            <p className="text-lg text-muted-foreground">
              チームメンバー専用の内部リソース
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* チームダッシュボード */}
            <Link href="/teams">
              <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-purple-400">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <Badge className="bg-purple-600 text-white">必須</Badge>
                  </div>
                  <CardTitle>チームダッシュボード</CardTitle>
                  <CardDescription>
                    メンバー情報、タスク管理、KPI追跡
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">8名のメンバー</span>
                    <ArrowRight className="h-4 w-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* 特典リスト */}
            <Link href="/bonus">
              <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-orange-400">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg group-hover:scale-110 transition-transform">
                      <Gift className="h-6 w-6 text-orange-600" />
                    </div>
                    <Badge className="bg-orange-600 text-white">人気</Badge>
                  </div>
                  <CardTitle>特典リスト</CardTitle>
                  <CardDescription>
                    104個・総額840万円相当の特典
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">8カテゴリ</span>
                    <ArrowRight className="h-4 w-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* X投稿管理 */}
            <Link href="/x-posts">
              <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-blue-400">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:scale-110 transition-transform">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge className="bg-blue-600 text-white">HOT</Badge>
                  </div>
                  <CardTitle>X投稿キャンペーン</CardTitle>
                  <CardDescription>
                    戦略的投稿テンプレート集
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">20+ テンプレート</span>
                    <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* 配信スケジュール */}
            <Link href="/streaming-schedule">
              <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-green-400">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg group-hover:scale-110 transition-transform">
                      <Youtube className="h-6 w-6 text-green-600" />
                    </div>
                    <Badge className="bg-green-600 text-white">配信中</Badge>
                  </div>
                  <CardTitle>配信スケジュール</CardTitle>
                  <CardDescription>
                    YouTube Live配信予定表
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">19日間連続</span>
                    <ArrowRight className="h-4 w-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* 追加リソース */}
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                  <div>
                    <CardTitle>緊急タスク</CardTitle>
                    <CardDescription>本日対応が必要な項目</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-sm">ユニコーン社特典確認（遅延中）</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm">オプチャ詳細設計（本日締切）</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-sm">Xスペースタイトル決定</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                  <div>
                    <CardTitle>重要ドキュメント</CardTitle>
                    <CardDescription>プロジェクト関連資料</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span className="text-sm">商品企画書</span>
                    <Badge variant="outline" className="text-xs">更新</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-sm">セールススクリプト</span>
                    <Badge variant="outline" className="text-xs">新規</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-sm">KPIトラッカー</span>
                    <Badge variant="outline" className="text-xs">必読</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 特別セクション */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white px-4 py-20">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-5 w-5 text-yellow-300" />
            <span className="font-semibold">Team Exclusive</span>
            <Star className="h-5 w-5 text-yellow-300" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            一緒に歴史を作ろう
          </h2>
          
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            バイブコーディングは単なる商品ではありません。
            AI時代の新しい教育スタンダードを作る挑戦です。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Trophy className="h-10 w-10 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold mb-2">ミッション</h3>
              <p className="text-sm text-white/80">
                プログラミング教育の民主化
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Target className="h-10 w-10 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold mb-2">ビジョン</h3>
              <p className="text-sm text-white/80">
                誰もがAI開発者になれる世界
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Zap className="h-10 w-10 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold mb-2">バリュー</h3>
              <p className="text-sm text-white/80">
                革新・共創・実践主義
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-100 dark:bg-gray-900 px-4 py-8 border-t">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              バイブコーディング プロジェクト • 内部チーム専用ポータル
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 wadoyuniko. All rights reserved. • 最終更新: {new Date().toLocaleString('ja-JP')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}