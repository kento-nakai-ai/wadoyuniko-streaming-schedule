"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Instagram, Users, TrendingUp, Heart, MessageSquare, Share2, Eye, Calendar, Target, Activity, ExternalLink } from "lucide-react"

export default function InstagramPage() {
  const instagramStats = {
    followers: 12500,
    posts: 45,
    engagement: 8.5,
    weeklyGrowth: 12.3,
    reach: 45600,
    impressions: 89200
  }

  const recentPosts = [
    {
      id: 1,
      content: "バイブコーディング体験動画公開！",
      timestamp: "2時間前",
      likes: 156,
      comments: 23,
      shares: 12,
      reach: 2400,
      image: "📱"
    },
    {
      id: 2,
      content: "AI開発の新常識について解説",
      timestamp: "1日前",
      likes: 203,
      comments: 31,
      shares: 18,
      reach: 3200,
      image: "🤖"
    },
    {
      id: 3,
      content: "セミナー参加者限定特典について",
      timestamp: "2日前",
      likes: 178,
      comments: 27,
      shares: 15,
      reach: 2800,
      image: "🎁"
    },
    {
      id: 4,
      content: "プログラミング初心者向け解説動画",
      timestamp: "3日前",
      likes: 234,
      comments: 42,
      shares: 25,
      reach: 4100,
      image: "💻"
    }
  ]

  const contentStrategy = [
    {
      category: "教育コンテンツ",
      description: "AI開発・プログラミング学習に関する教育的投稿",
      frequency: "週3回",
      engagement: "高",
      examples: ["チュートリアル動画", "技術解説", "学習ロードマップ"]
    },
    {
      category: "実績・証拠",
      description: "受講生の成果や実際の開発事例を紹介",
      frequency: "週2回",
      engagement: "中",
      examples: ["受講生インタビュー", "開発事例", "Before/After"]
    },
    {
      category: "セミナー告知",
      description: "バイブコーディングセミナーの告知・準備状況",
      frequency: "毎日",
      engagement: "高",
      examples: ["カウントダウン", "特典紹介", "準備風景"]
    },
    {
      category: "エンゲージメント",
      description: "フォロワーとの交流を促進する投稿",
      frequency: "週1回",
      engagement: "最高",
      examples: ["質問募集", "投票機能", "コメント返信"]
    }
  ]

  const upcomingCampaigns = [
    {
      name: "8月ローンチキャンペーン",
      startDate: "2025-08-14",
      endDate: "2025-08-30",
      budget: "50万円",
      targetReach: "10万人",
      status: "準備中"
    },
    {
      name: "セミナー直前告知",
      startDate: "2025-08-25",
      endDate: "2025-08-30",
      budget: "20万円",
      targetReach: "5万人",
      status: "企画中"
    }
  ]

  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case '最高': return 'bg-red-500'
      case '高': return 'bg-orange-500'
      case '中': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* ヘッダー */}
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" />
          ホームに戻る
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <Instagram className="h-8 w-8 text-pink-600" />
          <h1 className="text-3xl font-bold">Instagram戦略管理</h1>
        </div>
        
        <p className="text-muted-foreground mb-6">
          バイブコーディングプロジェクトのInstagram運用戦略とパフォーマンス分析
        </p>
      </div>

      {/* 統計ダッシュボード */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-pink-600">{instagramStats.followers.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">フォロワー</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{instagramStats.posts}</div>
            <div className="text-sm text-muted-foreground">投稿数</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{instagramStats.engagement}%</div>
            <div className="text-sm text-muted-foreground">エンゲージメント率</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">+{instagramStats.weeklyGrowth}%</div>
            <div className="text-sm text-muted-foreground">週間成長率</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{instagramStats.reach.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">リーチ</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-cyan-600">{instagramStats.impressions.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">インプレッション</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {/* 最近の投稿 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              最近の投稿パフォーマンス
            </h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{post.image}</div>
                        <div>
                          <CardTitle className="text-lg">{post.content}</CardTitle>
                          <CardDescription>{post.timestamp}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-500" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 className="h-4 w-4 text-green-500" />
                        <span>{post.shares}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-purple-500" />
                        <span>{post.reach}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        投稿を表示
                      </Button>
                      <Button variant="outline" size="sm">
                        分析詳細
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* コンテンツ戦略 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5" />
              コンテンツ戦略
            </h2>
            <div className="grid gap-4">
              {contentStrategy.map((strategy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{strategy.category}</CardTitle>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getEngagementColor(strategy.engagement)}`}></div>
                        <Badge variant="outline">{strategy.engagement}</Badge>
                      </div>
                    </div>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <span className="text-sm font-medium">投稿頻度: </span>
                      <Badge variant="secondary">{strategy.frequency}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {strategy.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 進行中のキャンペーン */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                進行中のキャンペーン
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingCampaigns.map((campaign, index) => (
                  <div key={index} className="border-l-2 border-pink-500 pl-3">
                    <div className="font-medium">{campaign.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {campaign.startDate} - {campaign.endDate}
                    </div>
                    <div className="text-sm">
                      予算: {campaign.budget} | 目標: {campaign.targetReach}
                    </div>
                    <Badge 
                      variant={campaign.status === '準備中' ? 'default' : 'outline'}
                      className="text-xs mt-1"
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* クイックアクション */}
          <Card>
            <CardHeader>
              <CardTitle>クイックアクション</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="default">
                <Instagram className="h-4 w-4 mr-2" />
                新規投稿作成
              </Button>
              <Button className="w-full" variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                分析レポート
              </Button>
              <Button className="w-full" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                フォロワー分析
              </Button>
              <Button className="w-full" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                投稿スケジュール
              </Button>
            </CardContent>
          </Card>

          {/* 目標設定 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                8月目標
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div><strong>フォロワー:</strong> 15,000名</div>
                <div><strong>エンゲージメント率:</strong> 10%</div>
                <div><strong>リーチ:</strong> 10万人/月</div>
                <div><strong>セミナー誘導:</strong> 500名</div>
              </div>
            </CardContent>
          </Card>

          {/* 重要リンク */}
          <Card>
            <CardHeader>
              <CardTitle>関連リソース</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/teams/marketing" className="block">
                <Button variant="ghost" className="w-full justify-start">
                  マーケティングチーム
                </Button>
              </Link>
              <Link href="/teams/design" className="block">
                <Button variant="ghost" className="w-full justify-start">
                  デザインチーム
                </Button>
              </Link>
              <Link href="/strategy-dashboard" className="block">
                <Button variant="ghost" className="w-full justify-start">
                  戦略ダッシュボード
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* フッター */}
      <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
        <p>Instagram戦略管理 | 最終更新: 2025年1月13日</p>
        <p className="mt-1">
          投稿・キャンペーンについてはマーケティングチームまでお問い合わせください
        </p>
      </div>
    </div>
  )
}
