'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { postsData, categories, type Post } from '@/lib/posts-data';
import { Copy, Check, Twitter, TrendingUp, Clock, Users } from 'lucide-react';

export default function XPostsPage() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPosts = selectedCategory === 'すべて' 
    ? postsData 
    : postsData.filter(post => post.category === selectedCategory);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  };

  const copyThreadToClipboard = async (post: Post) => {
    if (post.type === 'thread' && post.threadParts) {
      const threadText = [post.content, ...post.threadParts].join('\n\n');
      await copyToClipboard(threadText, post.id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Twitter className="h-8 w-8 text-blue-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              バイブコーディング X投稿集
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            8月31日リリースに向けた戦略的投稿コンテンツ。コピペしてそのまま投稿できるよう最適化済み。
          </p>
        </div>

        {/* 統計情報 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">総投稿数</p>
                  <p className="text-2xl font-bold text-gray-900">{postsData.length}</p>
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
                  <p className="text-sm text-gray-600">推定総リーチ</p>
                  <p className="text-2xl font-bold text-gray-900">150万+</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">カテゴリー数</p>
                  <p className="text-2xl font-bold text-gray-900">{categories.length - 1}</p>
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
            {categories.map((category) => (
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
                    {postsData.filter(post => post.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* 投稿リスト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
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
                        variant={post.type === 'thread' ? 'secondary' : 'default'}
                        className="text-xs"
                      >
                        {post.type === 'thread' ? 'ツリー投稿' : '単体投稿'}
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
                      {post.type === 'thread' ? 'ツリー1投稿目:' : '投稿内容:'}
                    </p>
                    <div className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                      {post.content}
                    </div>
                  </div>

                  {/* ツリー投稿の続きを表示 */}
                  {post.type === 'thread' && post.threadParts && (
                    <div className="space-y-3">
                      {post.threadParts.map((part, index) => (
                        <div key={index}>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            ツリー{index + 2}投稿目:
                          </p>
                          <div className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                            {part}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 dark:text-gray-400">
                  <div>
                    <span className="font-medium">推定リーチ:</span> {post.estimatedReach}
                  </div>
                  <div>
                    <span className="font-medium">最適投稿時間:</span> {post.bestTime}
                  </div>
                </div>

                {/* コピーボタン */}
                <div className="flex gap-2">
                  <Button
                    onClick={() => copyToClipboard(post.content, post.id)}
                    className="flex-1"
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
                        {post.type === 'thread' ? '1投稿目をコピー' : '投稿をコピー'}
                      </>
                    )}
                  </Button>

                  {post.type === 'thread' && (
                    <Button
                      onClick={() => copyThreadToClipboard(post)}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      全ツリーをコピー
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 使い方ガイド */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Twitter className="h-5 w-5 text-blue-500" />
              使い方ガイド
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">📝 投稿のコピー方法</h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• 「投稿をコピー」ボタンでクリップボードにコピー</li>
                  <li>• ツリー投稿は個別または全体をコピー可能</li>
                  <li>• Xに貼り付けて投稿</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">⏰ 投稿タイミング</h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• 各投稿に最適投稿時間を記載</li>
                  <li>• エンゲージメントが高い時間帯を選択</li>
                  <li>• 継続的な投稿でリーチを最大化</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                💡 <strong>Tips:</strong> カテゴリーごとに投稿を分散させ、異なる時間帯に投稿することで最大のリーチを獲得できます。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* フッター */}
        <div className="text-center mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            バイブコーディング 8月31日リリース • Xチーム共有用
          </p>
        </div>
      </div>
    </div>
  );
}