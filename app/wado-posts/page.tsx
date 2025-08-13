'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { wadoPosts, wadoCategories, type WadoPost } from '@/lib/wado-posts';
import { Copy, Check, Twitter, TrendingUp, Clock, Users, Zap, Target } from 'lucide-react';

export default function WadoPostsPage() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPosts = selectedCategory === 'すべて' 
    ? wadoPosts 
    : wadoPosts.filter(post => post.category === selectedCategory);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  const getEngagementIcon = (engagement: string) => {
    switch (engagement) {
      case 'viral': return TrendingUp;
      case 'conversion': return Target;
      case 'authority': return Users;
      default: return Zap;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
              <Twitter className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              わど専用 X投稿集
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            @wad0427 アカウント用 • AI界隈マスコット • セミナー集客最大化投稿
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge className="bg-orange-600 text-white">AI界隈マスコット</Badge>
            <Badge variant="outline">@wad0427</Badge>
            <Badge className="bg-red-600 text-white">バイブコーディング</Badge>
          </div>
        </div>

        {/* 統計情報 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Twitter className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">総投稿数</p>
                  <p className="text-2xl font-bold text-gray-900">{wadoPosts.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Target className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">高緊急度</p>
                  <p className="text-2xl font-bold text-red-600">
                    {wadoPosts.filter(p => p.urgency === 'high').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">バイラル狙い</p>
                  <p className="text-2xl font-bold text-green-600">
                    {wadoPosts.filter(p => p.engagement === 'viral').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">カテゴリー数</p>
                  <p className="text-2xl font-bold text-purple-600">{wadoCategories.length - 1}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* カテゴリーフィルター */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            カテゴリー別フィルター
          </h2>
          <div className="flex flex-wrap gap-2">
            {wadoCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
                size="sm"
              >
                {category}
                {category !== 'すべて' && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {wadoPosts.filter(post => post.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* 投稿リスト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPosts.map((post) => {
            const EngagementIcon = getEngagementIcon(post.engagement);
            
            return (
              <Card key={post.id} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-800 mb-2">
                        {post.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <Badge 
                          variant={getUrgencyColor(post.urgency)}
                          className="text-xs"
                        >
                          {post.urgency === 'high' ? '高緊急度' : 
                           post.urgency === 'medium' ? '中緊急度' : '低緊急度'}
                        </Badge>
                        <Badge variant="secondary" className="text-xs flex items-center gap-1">
                          <EngagementIcon className="h-3 w-3" />
                          {post.engagement === 'viral' ? 'バイラル' :
                           post.engagement === 'conversion' ? 'コンバージョン' : '権威性'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* 投稿内容 */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        投稿内容:
                      </p>
                      <div className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                        {post.content}
                      </div>
                    </div>
                  </div>

                  {/* ハッシュタグ */}
                  <div className="flex flex-wrap gap-1">
                    {post.hashtags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* メタ情報 */}
                  <div className="grid grid-cols-1 gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>最適投稿時間: {post.targetTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-3 w-3" />
                      <span>エンゲージメント: {post.engagement}</span>
                    </div>
                  </div>

                  {/* コピーボタン */}
                  <Button
                    onClick={() => copyToClipboard(post.content, post.id)}
                    className="w-full"
                    variant="outline"
                    size="sm"
                  >
                    {copiedId === post.id ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        コピー完了!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        投稿をコピー
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 使い方ガイド */}
        <Card className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Twitter className="h-5 w-5 text-orange-500" />
              わど専用投稿ガイド
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">🎯 投稿戦略</h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• AI界隈マスコットとしてのキャラ維持</li>
                  <li>• セミナー集客を最優先</li>
                  <li>• 親しみやすさと専門性のバランス</li>
                  <li>• バイラル要素を意識した投稿</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">⏰ 投稿タイミング</h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• 高緊急度: セミナー前後の集客投稿</li>
                  <li>• 中緊急度: 日常的なエンゲージメント</li>
                  <li>• 低緊急度: ブランディング投稿</li>
                  <li>• 最適時間を参考に投稿スケジューリング</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                💡 <strong>Tips:</strong> @wad0427アカウントはAI界隈のマスコット的立ち位置を維持し、技術的すぎず親しみやすい投稿を心がけてください。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* フッター */}
        <div className="text-center mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            わど専用 X投稿管理 • @wad0427 • AI界隈マスコット
          </p>
        </div>
      </div>
    </div>
  );
}