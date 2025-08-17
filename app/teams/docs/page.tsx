"use client"

import { useState } from 'react'
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, FileText, Folder, Calendar, User, Download, ExternalLink } from "lucide-react"

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const documentCategories = [
    { id: 'all', name: '全て', count: 365 },
    { id: 'product', name: '製品仕様', count: 25 },
    { id: 'technical', name: '技術仕様', count: 45 },
    { id: 'emergency', name: '緊急対応', count: 8 },
    { id: 'launch', name: 'ローンチ', count: 32 },
    { id: 'api', name: 'API仕様', count: 15 }
  ]

  const documents = [
    {
      id: 1,
      title: "製品仕様書 - バイブコーディング",
      description: "バイブコーディングの詳細な製品仕様とコンセプト",
      category: "product",
      lastModified: "2025-01-13",
      author: "中井健登",
      size: "2.3 MB",
      type: "markdown",
      path: "/teams/docs/product/vibecoding.md",
      tags: ["製品", "仕様", "コンセプト"]
    },
    {
      id: 2,
      title: "技術アーキテクチャ設計書",
      description: "システム全体のアーキテクチャと技術スタック",
      category: "technical",
      lastModified: "2025-01-12",
      author: "開発チーム",
      size: "1.8 MB",
      type: "markdown",
      path: "/teams/docs/architecture.md",
      tags: ["技術", "アーキテクチャ", "システム"]
    },
    {
      id: 3,
      title: "緊急時対応マニュアル",
      description: "プロジェクト緊急事態の対応プロトコル",
      category: "emergency",
      lastModified: "2025-01-10",
      author: "PMチーム",
      size: "850 KB",
      type: "markdown",
      path: "/teams/docs/emergency-messages/",
      tags: ["緊急", "対応", "プロトコル"]
    },
    {
      id: 4,
      title: "ローンチプロジェクト計画書",
      description: "8月ローンチに向けた詳細プロジェクト計画",
      category: "launch",
      lastModified: "2025-01-13",
      author: "PMチーム",
      size: "3.2 MB",
      type: "markdown",
      path: "/teams/docs/launch-projects/",
      tags: ["ローンチ", "計画", "スケジュール"]
    },
    {
      id: 5,
      title: "API仕様書",
      description: "システム間連携のAPI仕様定義",
      category: "api",
      lastModified: "2025-01-11",
      author: "技術チーム",
      size: "1.2 MB",
      type: "markdown",
      path: "/teams/docs/api-specification.md",
      tags: ["API", "仕様", "連携"]
    }
  ]

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'markdown': return '📝'
      case 'pdf': return '📄'
      case 'html': return '🌐'
      default: return '📄'
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
          <FileText className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">ドキュメントライブラリ</h1>
        </div>
        
        <p className="text-muted-foreground mb-6">
          プロジェクト全体の重要なドキュメントを一元管理・閲覧できます。
        </p>

        {/* 検索とフィルター */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="ドキュメントを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {documentCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="text-xs"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* 統計情報 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{documents.length}</div>
            <div className="text-sm text-muted-foreground">総ドキュメント数</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{documentCategories.length - 1}</div>
            <div className="text-sm text-muted-foreground">カテゴリー数</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{filteredDocuments.length}</div>
            <div className="text-sm text-muted-foreground">検索結果</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">2025-01-13</div>
            <div className="text-sm text-muted-foreground">最終更新</div>
          </CardContent>
        </Card>
      </div>

      {/* ドキュメント一覧 */}
      <div className="grid gap-4">
        {filteredDocuments.map((doc) => (
          <Card key={doc.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="text-2xl">{getTypeIcon(doc.type)}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {doc.description}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {documentCategories.find(cat => cat.id === doc.category)?.name}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {doc.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {doc.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {doc.lastModified}
                  </div>
                  <div className="flex items-center gap-1">
                    <Folder className="h-4 w-4" />
                    {doc.size}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="default" size="sm">
                  <FileText className="h-4 w-4 mr-1" />
                  ドキュメント表示
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  ダウンロード
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  外部リンク
                </Button>
              </div>

              <div className="text-xs text-muted-foreground mt-2">
                📁 {doc.path}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 検索結果が空の場合 */}
      {filteredDocuments.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">ドキュメントが見つかりません</h3>
            <p className="text-muted-foreground mb-4">
              検索条件を変更するか、カテゴリーを「全て」に設定してください。
            </p>
            <Button variant="outline" onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
            }}>
              検索条件をリセット
            </Button>
          </CardContent>
        </Card>
      )}

      {/* フッター */}
      <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
        <p>ドキュメントライブラリ | 最終更新: 2025年1月13日</p>
        <p className="mt-1">
          新しいドキュメントの追加やアクセス権限については PMチームまでお問い合わせください
        </p>
      </div>
    </div>
  )
}
