'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Calendar, 
  Users, 
  Target, 
  Briefcase, 
  MessageSquare,
  BookOpen,
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';

interface Document {
  title: string;
  path: string;
  category: string;
  description: string;
  lastUpdated: string;
  tags: string[];
}

const documents: Document[] = [
  // Project Management
  {
    title: '重要アクションアイテム',
    path: '/docs/urgent-action-items.md',
    category: 'プロジェクト管理',
    description: '緊急度の高いタスクと対応状況',
    lastUpdated: '2025-08-13',
    tags: ['緊急', 'タスク管理']
  },
  {
    title: 'プロジェクト管理計画',
    path: '/docs/project-management-plan.md',
    category: 'プロジェクト管理',
    description: '全体のプロジェクト計画とマイルストーン',
    lastUpdated: '2025-08-13',
    tags: ['計画', 'マイルストーン']
  },
  {
    title: 'PM戦略レポート',
    path: '/docs/project-management/pm-strategy-report.md',
    category: 'プロジェクト管理',
    description: 'プロジェクトマネージャーの戦略分析',
    lastUpdated: '2025-08-13',
    tags: ['戦略', 'レポート']
  },
  {
    title: 'チームメンバーマトリックス',
    path: '/docs/project-management/team-member-matrix.md',
    category: 'プロジェクト管理',
    description: 'チーム構成と役割分担',
    lastUpdated: '2025-08-13',
    tags: ['チーム', '役割']
  },
  {
    title: 'ローンチ改善提案',
    path: '/docs/project-management/launch-improvement-proposal.md',
    category: 'プロジェクト管理',
    description: 'ローンチ戦略の改善案',
    lastUpdated: '2025-08-13',
    tags: ['ローンチ', '改善']
  },

  // Sales & Marketing
  {
    title: '個別相談スクリプト',
    path: '/docs/sales-scripts/individual-consultation-script.md',
    category: 'セールス',
    description: '個別相談時の営業スクリプト',
    lastUpdated: '2025-08-13',
    tags: ['セールス', 'スクリプト']
  },
  {
    title: 'セミナー→個別相談スクリプト',
    path: '/docs/sales-scripts/seminar-to-consultation-script.md',
    category: 'セールス',
    description: 'セミナーから個別相談への誘導スクリプト',
    lastUpdated: '2025-08-13',
    tags: ['セミナー', '誘導']
  },
  {
    title: 'FAQ完全ガイド',
    path: '/docs/sales-scripts/faq-complete-guide.md',
    category: 'セールス',
    description: 'よくある質問と回答集',
    lastUpdated: '2025-08-13',
    tags: ['FAQ', 'ガイド']
  },
  {
    title: 'ターゲット読者インサイト',
    path: '/docs/sales-scripts/target-audience-insights.md',
    category: 'セールス',
    description: 'ターゲット読者の分析と洞察',
    lastUpdated: '2025-08-13',
    tags: ['ターゲット', '分析']
  },
  {
    title: 'コンバージョン追跡シート',
    path: '/docs/sales-scripts/conversion-tracking-sheet.md',
    category: 'セールス',
    description: 'コンバージョン率の追跡と分析',
    lastUpdated: '2025-08-13',
    tags: ['コンバージョン', '追跡']
  },

  // Product & Strategy
  {
    title: 'ローンチプロジェクト詳細',
    path: '/docs/launch-projects/launch-project.md',
    category: 'プロダクト',
    description: 'バイブコーディングローンチの詳細計画',
    lastUpdated: '2025-08-13',
    tags: ['ローンチ', 'プロダクト']
  },
  {
    title: '競合調査リスト',
    path: '/docs/competition/competition-list.md',
    category: 'プロダクト',
    description: '競合他社の分析と調査結果',
    lastUpdated: '2025-08-13',
    tags: ['競合', '調査']
  },

  // Technical
  {
    title: 'API仕様書',
    path: '/docs/api-specification.md',
    category: '技術',
    description: 'システムのAPI仕様と実装詳細',
    lastUpdated: '2025-08-13',
    tags: ['API', '技術']
  },
  {
    title: 'アーキテクチャ設計',
    path: '/docs/architecture.md',
    category: '技術',
    description: 'システム全体のアーキテクチャ設計',
    lastUpdated: '2025-08-13',
    tags: ['アーキテクチャ', '設計']
  },
  {
    title: 'Claude Code マニュアル',
    path: '/docs/claude-code-manual.md',
    category: '技術',
    description: 'Claude Codeの使用方法とベストプラクティス',
    lastUpdated: '2025-08-13',
    tags: ['Claude', 'マニュアル']
  },

  // Daily Reports
  {
    title: '作業報告書（8月13日）',
    path: '/docs/day/20250813-work-report.md',
    category: '日報',
    description: '2025年8月13日の作業報告書',
    lastUpdated: '2025-08-13',
    tags: ['日報', '作業報告']
  },
  {
    title: '週次レポート（8/5-8/11）',
    path: '/docs/day/weekly-report-0805-0811.md',
    category: '日報',
    description: '8月第2週の週次作業レポート',
    lastUpdated: '2025-08-11',
    tags: ['週報', 'レポート']
  },
  {
    title: '総合作業レポート',
    path: '/docs/day/comprehensive-work-report.md',
    category: '日報',
    description: 'プロジェクト全体の包括的作業レポート',
    lastUpdated: '2025-08-13',
    tags: ['総合', 'レポート']
  },

  // Meeting Minutes
  {
    title: 'キックオフミーティング議事録',
    path: '/docs/minutes/250802kickoff.md',
    category: '議事録',
    description: '8月2日キックオフミーティングの議事録',
    lastUpdated: '2025-08-02',
    tags: ['キックオフ', '議事録']
  },
  {
    title: 'ユニコ社ミーティング議事録',
    path: '/docs/minutes/250809yunikomtg-organized.md',
    category: '議事録',
    description: '8月9日ユニコ社とのミーティング議事録',
    lastUpdated: '2025-08-09',
    tags: ['ユニコ', 'パートナー']
  },

  // Special Content
  {
    title: 'Dify完全ガイド',
    path: '/docs/dify-specials/01_dify-complete-guide.md',
    category: '特別コンテンツ',
    description: 'Difyの完全活用ガイド',
    lastUpdated: '2025-08-13',
    tags: ['Dify', 'ガイド']
  },
  {
    title: '無料特典実装計画',
    path: '/docs/free-gifts/implementation-plan.md',
    category: '特別コンテンツ',
    description: '無料特典の実装と配布計画',
    lastUpdated: '2025-08-13',
    tags: ['特典', '実装']
  },
  {
    title: '緊急メッセージ索引',
    path: '/docs/emergency-messages/00_message-index.md',
    category: '緊急対応',
    description: '緊急時の連絡体制とメッセージテンプレート',
    lastUpdated: '2025-08-13',
    tags: ['緊急', '連絡']
  }
];

const categories = [
  'すべて',
  'プロジェクト管理',
  'セールス',
  'プロダクト',
  '技術',
  '日報',
  '議事録',
  '特別コンテンツ',
  '緊急対応'
];

const categoryIcons: { [key: string]: any } = {
  'プロジェクト管理': Target,
  'セールス': Briefcase,
  'プロダクト': BookOpen,
  '技術': FileText,
  '日報': Calendar,
  '議事録': MessageSquare,
  '特別コンテンツ': Users,
  '緊急対応': Target
};

export default function DocsPage() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'すべて' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryStats = () => {
    const stats: { [key: string]: number } = {};
    categories.forEach(cat => {
      if (cat === 'すべて') {
        stats[cat] = documents.length;
      } else {
        stats[cat] = documents.filter(doc => doc.category === cat).length;
      }
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              プロジェクトドキュメント
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            バイブコーディングプロジェクトの全ドキュメント • チーム内情報共有
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge className="bg-blue-600 text-white">プロジェクト資料</Badge>
            <Badge variant="outline">チーム共有</Badge>
            <Badge className="bg-purple-600 text-white">リアルタイム更新</Badge>
          </div>
        </div>

        {/* 統計情報 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">総ドキュメント数</p>
                  <p className="text-2xl font-bold text-gray-900">{documents.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">プロジェクト管理</p>
                  <p className="text-2xl font-bold text-green-600">
                    {categoryStats['プロジェクト管理']}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Briefcase className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">セールス資料</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {categoryStats['セールス']}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">最終更新</p>
                  <p className="text-lg font-bold text-purple-600">8/13</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 検索とフィルター */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="ドキュメントを検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">フィルター:</span>
            </div>
          </div>

          {/* カテゴリーフィルター */}
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
                <Badge variant="secondary" className="ml-2 text-xs">
                  {categoryStats[category]}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* ドキュメント一覧 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDocuments.map((doc, index) => {
            const IconComponent = categoryIcons[doc.category] || FileText;
            
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                        <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {doc.title}
                        </CardTitle>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {doc.category}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {doc.lastUpdated}
                        </Badge>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {doc.description}
                  </p>

                  {/* タグ */}
                  <div className="flex flex-wrap gap-1">
                    {doc.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* アクションボタン */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(doc.path, '_blank')}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      ドキュメントを開く
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">ドキュメントが見つかりません</h3>
            <p className="text-gray-500">検索条件を変更してお試しください。</p>
          </div>
        )}

        {/* 使い方ガイド */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              ドキュメント活用ガイド
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  プロジェクト管理
                </h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• タスクとマイルストーンの確認</li>
                  <li>• チーム役割分担の把握</li>
                  <li>• 進捗状況のトラッキング</li>
                  <li>• リスク管理と対策</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-green-600" />
                  セールス資料
                </h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• 営業スクリプトの確認</li>
                  <li>• FAQ対応の学習</li>
                  <li>• ターゲット分析の理解</li>
                  <li>• コンバージョン最適化</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-purple-600" />
                  進捗共有
                </h3>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• 日次・週次レポート</li>
                  <li>• ミーティング議事録</li>
                  <li>• 作業実績の記録</li>
                  <li>• チーム間連携</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                💡 <strong>Tips:</strong> 各ドキュメントはリアルタイムで更新されます。重要な変更はチームSlackで通知されます。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* フッター */}
        <div className="text-center mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            プロジェクトドキュメント管理 • バイブコーディングプロジェクト • PM: 中井健登
          </p>
        </div>
      </div>
    </div>
  );
}