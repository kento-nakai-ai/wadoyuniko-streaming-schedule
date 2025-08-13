'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { nakaiPosts, nakaiCategories, type NakaiPost } from '@/lib/nakai-posts';
import { Copy, Check, Twitter, Brain, Briefcase, TrendingUp, Users, Code, Target } from 'lucide-react';

export default function NakaiPostsPage() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPosts = selectedCategory === 'すべて' 
    ? nakaiPosts 
    : nakaiPosts.filter(post => post.category === selectedCategory);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  };

  const getAuthorityColor = (authority: string) => {
    switch (authority) {
      case 'technical': return 'default';
      case 'business': return 'secondary';
      case 'industry': return 'outline';
      default: return 'outline';
    }
  };

  const getAuthorityIcon = (authority: string) => {
    switch (authority) {
      case 'technical': return Code;
      case 'business': return Briefcase;
      case 'industry': return TrendingUp;
      default: return Brain;
    }
  };

  const getAudienceColor = (audience: string) => {
    switch (audience) {
      case 'engineers': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'business': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'general': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              中井健登専用 X投稿集
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            @nakai_kento_ai アカウント用 • AI開発リーダー • 技術的権威性投稿
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge className="bg-blue-600 text-white">AI開発リーダー</Badge>
            <Badge variant="outline">@nakai_kento_ai</Badge>
            <Badge className="bg-purple-600 text-white">技術的権威性</Badge>
          </div>
        </div>

        {/* 統計情報 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Twitter className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">総投稿数</p>
                  <p className="text-2xl font-bold text-gray-900">{nakaiPosts.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Code className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">技術系投稿</p>
                  <p className="text-2xl font-bold text-indigo-600">
                    {nakaiPosts.filter(p => p.authority === 'technical').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Briefcase className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">ビジネス系</p>
                  <p className="text-2xl font-bold text-green-600">
                    {nakaiPosts.filter(p => p.authority === 'business').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">業界分析</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {nakaiPosts.filter(p => p.authority === 'industry').length}
                  </p>
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
            {nakaiCategories.map((category) => (
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
                    {nakaiPosts.filter(post => post.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* 投稿リスト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPosts.map((post) => {
            const AuthorityIcon = getAuthorityIcon(post.authority);
            
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
                          variant={getAuthorityColor(post.authority)}
                          className="text-xs flex items-center gap-1"
                        >
                          <AuthorityIcon className="h-3 w-3" />
                          {post.authority === 'technical' ? '技術' :
                           post.authority === 'business' ? 'ビジネス' : '業界'}
                        </Badge>
                        <Badge 
                          className={`text-xs ${getAudienceColor(post.audience)}`}
                        >
                          {post.audience === 'engineers' ? 'エンジニア向け' :
                           post.audience === 'business' ? 'ビジネス向け' : '一般向け'}
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
                      <Target className="h-3 w-3" />
                      <span>最適投稿時間: {post.targetTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-3 w-3" />
                      <span>対象読者: {
                        post.audience === 'engineers' ? 'エンジニア' :
                        post.audience === 'business' ? 'ビジネスパーソン' : '一般'
                      }</span>
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
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-500" />
              中井健登専用投稿ガイド
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Code className="h-4 w-4 text-blue-600" />
                  技術的権威性
                </h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• 最新技術の検証・解説</li>
                  <li>• 実装ノウハウの共有</li>
                  <li>• コード例付きの解説</li>
                  <li>• パフォーマンス最適化</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-green-600" />
                  ビジネス戦略
                </h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• AI導入戦略の提案</li>
                  <li>• 組織変革の洞察</li>
                  <li>• 人材市場の分析</li>
                  <li>• バイブコーディング紹介</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                  業界リーダーシップ
                </h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• 業界トレンドの予測</li>
                  <li>• 規制・法律への言及</li>
                  <li>• 教育・メンタリング</li>
                  <li>• コミュニティ貢献</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                💡 <strong>Tips:</strong> @nakai_kento_aiアカウントは技術的権威性を重視し、AI開発業界のリーダーとしての発信を心がけてください。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* フッター */}
        <div className="text-center mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            中井健登専用 X投稿管理 • @nakai_kento_ai • AI開発リーダー
          </p>
        </div>
      </div>
    </div>
  );
}