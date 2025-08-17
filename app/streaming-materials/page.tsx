"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, FileText, MessageSquare, Calendar } from "lucide-react"
import Link from 'next/link'

const streamingMaterials = [
  {
    id: '8-18-dify-nocode',
    title: '8/18 Dify配信：ノーコードAI開発プラットフォーム徹底解説',
    description: 'コード1行も書かずに本格AIアプリが完成！RAGとAIエージェントの仕組みを理解',
    date: '8/18',
    type: '実践編',
    materials: [
      { name: '配信台本・資料', file: '8-18-dify-nocode.md', size: '約50KB' }
    ]
  },
  {
    id: '8-19-google-ai-studio',
    title: '8/19 Google AI Studio build機能配信',
    description: '初心者必見！プログラミング不要でAIアプリ開発ができる超初心者向け配信',
    date: '8/19',
    type: '基礎編',
    materials: [
      { name: '配信台本・資料', file: '8-19-google-ai-studio.md', size: '約45KB' }
    ]
  },
  {
    id: '8-20-genspark-development',
    title: '8/20 Genspark開発配信',
    description: '次世代AI開発で開発の常識が変わる。音声入力での開発フローを体験',
    date: '8/20',
    type: '実践編',
    materials: [
      { name: '配信台本・資料', file: '8-20-genspark-development.md', size: '約48KB' }
    ]
  },
  {
    id: '8-24-manus-development',
    title: '8/24 Manus開発配信',
    description: '自律型AIエージェントで業務自動化！競合価格調査、カスタマーサポートなど',
    date: '8/24',
    type: '実践編',
    materials: [
      { name: '配信台本・資料', file: '8-24-manus-development.md', size: '約52KB' }
    ]
  },
  {
    id: '8-25-gemini-claude-code',
    title: '8/25 Gemini CLI + Claude Code配信',
    description: 'CLI入門でツール開発 + 大規模開発の常識を変える。最強の開発環境を構築',
    date: '8/25',
    type: '実践編',
    materials: [
      { name: '配信台本・資料', file: '8-25-gemini-claude-code.md', size: '約55KB' }
    ]
  },
  {
    id: '8-26-codex-cli',
    title: '8/26 Codex CLI配信',
    description: 'OpenAIでターミナルを最強の開発環境に。プロダクション品質のツール開発',
    date: '8/26',
    type: '実践編',
    materials: [
      { name: '配信台本・資料', file: '8-26-codex-cli.md', size: '約58KB' }
    ]
  },
  {
    id: '8-31-cursor-obsidian',
    title: '8/31 Cursor × Obsidian配信',
    description: '知識管理と開発を完全に融合。メモからコード自動生成のワークフローを構築',
    date: '8/31',
    type: '実践編',
    materials: [
      { name: '配信台本・資料', file: '8-31-cursor-obsidian.md', size: '約60KB' }
    ]
  }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case "基礎編": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "実践編": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "応用編": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  }
}

export default function StreamingMaterialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              配信資料ダウンロード
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              YouTube配信の台本・資料を無料ダウンロード 📁
            </p>
            <p className="text-lg text-muted-foreground">
              各配信の詳細な台本、タイムスケジュール、実装手順書
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* 概要カード */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <FileText className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>7つの配信資料</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                配信台本、タイムスケジュール、実装手順が含まれます
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <MessageSquare className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>X告知文テンプレート</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                事前告知、当日告知、事後報告の文例集
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Calendar className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>配信スケジュール</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                実際の配信日程と時間の詳細情報
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* 特別資料 */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              X(Twitter)告知文テンプレート集
            </CardTitle>
            <CardDescription>
              全配信の事前告知、当日告知、事後報告の文例を完全収録
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button asChild>
                <a href="/streaming-materials/x-announcements.md" download>
                  <Download className="w-4 h-4 mr-2" />
                  X告知文集をダウンロード
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/streaming-materials/x-announcements.md" target="_blank" rel="noopener noreferrer">
                  プレビューを見る
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* 配信資料一覧 */}
        <div className="grid lg:grid-cols-2 gap-6">
          {streamingMaterials.map((material) => (
            <Card key={material.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getTypeColor(material.type)}>{material.type}</Badge>
                  <Badge variant="outline">{material.date}</Badge>
                </div>
                <CardTitle className="text-lg">{material.title}</CardTitle>
                <CardDescription>{material.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {material.materials.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium text-sm">{file.name}</p>
                          <p className="text-xs text-muted-foreground">{file.size}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href={`/streaming-materials/${file.file}`} target="_blank" rel="noopener noreferrer">
                            プレビュー
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a href={`/streaming-materials/${file.file}`} download>
                            <Download className="w-3 h-3 mr-1" />
                            ダウンロード
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link href={`/streaming-schedule/${material.id.replace(/^\d+-\d+-/, 'day')}`}>
                      配信詳細ページを見る
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-purple-600/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">配信スケジュールもチェック！</h2>
          <p className="text-muted-foreground mb-6">
            全配信の詳細スケジュールと参加方法をご確認ください
          </p>
          <Button size="lg" asChild>
            <Link href="/streaming-schedule">
              配信スケジュールを見る
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}