"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, TrendingUp, Instagram, Twitter, MessageSquare, Eye, Heart, Share2, Calendar, Target, Activity } from "lucide-react"

export default function MarketingTeamPage() {
  const teamInfo = {
    name: "Marketing（マーケティング）チーム",
    leader: "わど、中上裕三、Yui Mitsui",
    description: "セミナー実行、販売戦略、SNSマーケティング、顧客獲得を担当するチームです。",
    color: "bg-purple-500"
  }

  const socialStats = {
    instagram: {
      followers: 12500,
      posts: 45,
      engagement: 8.5,
      weeklyGrowth: 12.3
    },
    twitter: {
      followers: 8900,
      tweets: 128,
      engagement: 6.2,
      weeklyGrowth: 8.7
    },
    line: {
      friends: 3400,
      messages: 15,
      openRate: 78.5,
      weeklyGrowth: 15.2
    }
  }

  const campaigns = [
    {
      id: 1,
      name: "8月ローンチキャンペーン",
      platform: "Instagram",
      status: "active",
      startDate: "2025-08-14",
      endDate: "2025-08-30",
      budget: "50万円",
      currentSpend: "28万円",
      leads: 450,
      conversions: 23
    },
    {
      id: 2,
      name: "Xスペース告知",
      platform: "Twitter",
      status: "scheduled",
      startDate: "2025-08-22",
      endDate: "2025-08-22",
      budget: "10万円",
      currentSpend: "0円",
      leads: 0,
      conversions: 0
    },
    {
      id: 3,
      name: "LINE特別配信",
      platform: "LINE",
      status: "planning",
      startDate: "2025-08-25",
      endDate: "2025-08-28",
      budget: "15万円",
      currentSpend: "0円",
      leads: 0,
      conversions: 0
    }
  ]

  const recentPosts = [
    {
      platform: "Instagram",
      content: "バイブコーディング体験動画公開！",
      timestamp: "2時間前",
      likes: 156,
      comments: 23,
      shares: 12,
      engagement: 8.2
    },
    {
      platform: "Twitter",
      content: "セミナー参加者限定特典について",
      timestamp: "4時間前",
      likes: 89,
      comments: 15,
      shares: 34,
      engagement: 6.8
    },
    {
      platform: "LINE",
      content: "今週のセミナー準備状況をお知らせ",
      timestamp: "1日前",
      likes: 0,
      comments: 0,
      shares: 0,
      engagement: 78.5
    }
  ]

  const documentCategories = [
    {
      title: "📱 Instagram戦略",
      path: "Instagram",
      description: "Instagram運用戦略とコンテンツ企画",
      items: ["コンテンツテンプレート", "ローンチスケジュール", "KPIアクションプラン"],
      documentCount: 15
    },
    {
      title: "🐦 X（Twitter）戦略",
      path: "sns",
      description: "X投稿戦略とエンゲージメント最適化",
      items: ["8月投稿計画", "アルゴリズム分析", "インフルエンサー連携"],
      documentCount: 12
    },
    {
      title: "💼 販売戦略",
      path: "sales-scripts",
      description: "セミナー販売とクロージング戦略",
      items: ["販売スクリプト", "FAQ対応", "個別相談マニュアル"],
      documentCount: 21
    },
    {
      title: "🎬 ローンチ動画",
      path: "launch-movie",
      description: "ローンチ用動画コンテンツ",
      items: ["5つの理由動画", "証拠資料", "動画台本"],
      documentCount: 16
    },
    {
      title: "🏆 競合分析",
      path: "competition",
      description: "市場分析と競合調査",
      items: ["競合リスト", "市場調査レポート", "差別化戦略"],
      documentCount: 8
    },
    {
      title: "📊 効果測定",
      path: "tracking",
      description: "マーケティング効果の測定と分析",
      items: ["顧客獲得ダッシュボード", "ローンチ指標", "ROI分析"],
      documentCount: 6
    }
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return Instagram
      case 'Twitter': return Twitter
      case 'LINE': return MessageSquare
      default: return MessageSquare
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'scheduled': return 'bg-blue-500'
      case 'planning': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* ヘッダー */}
      <div className="mb-6">
        <Link href="/teams" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" />
          チーム一覧に戻る
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-6 h-6 rounded-full ${teamInfo.color}`}></div>
          <h1 className="text-3xl font-bold">{teamInfo.name}</h1>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <Badge variant="outline" className="gap-1">
            <Users className="h-4 w-4" />
            リーダー: {teamInfo.leader}
          </Badge>
        </div>
        
        <p className="text-muted-foreground">{teamInfo.description}</p>
      </div>

      {/* SNS統計ダッシュボード */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="h-6 w-6" />
          SNS統合ダッシュボード
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Instagram */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-pink-600" />
                Instagram
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">フォロワー</span>
                  <span className="font-bold">{socialStats.instagram.followers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">投稿数</span>
                  <span className="font-bold">{socialStats.instagram.posts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">エンゲージメント率</span>
                  <span className="font-bold">{socialStats.instagram.engagement}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">週間成長率</span>
                  <span className="font-bold text-green-600">+{socialStats.instagram.weeklyGrowth}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Twitter/X */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Twitter className="h-5 w-5 text-blue-600" />
                X (Twitter)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">フォロワー</span>
                  <span className="font-bold">{socialStats.twitter.followers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">ツイート数</span>
                  <span className="font-bold">{socialStats.twitter.tweets}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">エンゲージメント率</span>
                  <span className="font-bold">{socialStats.twitter.engagement}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">週間成長率</span>
                  <span className="font-bold text-green-600">+{socialStats.twitter.weeklyGrowth}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LINE */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-green-600" />
                LINE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">友だち数</span>
                  <span className="font-bold">{socialStats.line.friends.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">配信数</span>
                  <span className="font-bold">{socialStats.line.messages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">開封率</span>
                  <span className="font-bold">{socialStats.line.openRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">週間成長率</span>
                  <span className="font-bold text-green-600">+{socialStats.line.weeklyGrowth}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {/* 進行中のキャンペーン */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5" />
              進行中のキャンペーン
            </h2>
            <div className="space-y-4">
              {campaigns.map((campaign) => {
                const PlatformIcon = getPlatformIcon(campaign.platform)
                return (
                  <Card key={campaign.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <PlatformIcon className="h-5 w-5" />
                          {campaign.name}
                        </CardTitle>
                        <Badge variant="outline" className={`${getStatusColor(campaign.status)} text-white`}>
                          {campaign.status === 'active' && 'アクティブ'}
                          {campaign.status === 'scheduled' && 'スケジュール済み'}
                          {campaign.status === 'planning' && '計画中'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">期間</div>
                          <div className="font-medium">{campaign.startDate} - {campaign.endDate}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">予算</div>
                          <div className="font-medium">{campaign.budget}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">リード数</div>
                          <div className="font-medium">{campaign.leads}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">コンバージョン</div>
                          <div className="font-medium">{campaign.conversions}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* ドキュメント一覧 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">マーケティング資料</h2>
            <div className="grid gap-4">
              {documentCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {category.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs">
                        📁 teams/marketing/{category.path}/
                      </Badge>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {category.documentCount}件
                        </Badge>
                        <Button variant="outline" size="sm" className="text-xs h-6">
                          ドキュメント閲覧
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 最近の投稿 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                最近の投稿
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post, index) => {
                  const PlatformIcon = getPlatformIcon(post.platform)
                  return (
                    <div key={index} className="border-l-2 border-purple-500 pl-3">
                      <div className="flex items-center gap-2 mb-1">
                        <PlatformIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">{post.platform}</span>
                        <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                      </div>
                      <div className="text-sm mb-2">{post.content}</div>
                      <div className="flex gap-3 text-xs text-muted-foreground">
                        {post.platform !== 'LINE' && (
                          <>
                            <div className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {post.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              {post.comments}
                            </div>
                            <div className="flex items-center gap-1">
                              <Share2 className="h-3 w-3" />
                              {post.shares}
                            </div>
                          </>
                        )}
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.engagement}%
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* KPI目標 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                マーケティングKPI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div><strong>LINE登録目標:</strong> 1,200名</div>
                <div><strong>セミナー登録:</strong> 1,000名</div>
                <div><strong>Instagram フォロワー:</strong> 15,000名</div>
                <div><strong>コンバージョン率:</strong> 10%</div>
              </div>
            </CardContent>
          </Card>

          {/* 重要な期日 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                重要な期日
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-2 border-purple-500 pl-3">
                  <div className="text-sm font-medium text-purple-600">8月14日</div>
                  <div className="text-sm">大型コラボ告知</div>
                </div>
                <div className="border-l-2 border-purple-500 pl-3">
                  <div className="text-sm font-medium text-purple-600">8月21日</div>
                  <div className="text-sm">ローンチ投稿開始</div>
                </div>
                <div className="border-l-2 border-red-500 pl-3">
                  <div className="text-sm font-medium text-red-600">8月28-30日</div>
                  <div className="text-sm">セミナー実施</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* フッター */}
      <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
        <p>最終更新: 2025年1月13日 | マーケティングチーム</p>
        <p className="mt-1">
          SNS運用・マーケティング戦略についてはチームリーダーまでお問い合わせください
        </p>
      </div>
    </div>
  )
}
