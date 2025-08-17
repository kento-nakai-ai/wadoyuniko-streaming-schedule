import React from 'react'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CalendarDays, Clock, Users, Target, BookOpen, Lightbulb, ExternalLink, ArrowLeft, Play, Download } from "lucide-react"
import { streamingData, type StreamingEvent } from '../data/streaming-data'
import Link from 'next/link'

interface StreamingDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function StreamingDetailPage({ params }: StreamingDetailPageProps) {
  const { id } = await params
  const stream = streamingData.find(s => s.id === id)
  
  if (!stream) {
    notFound()
  }
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "★☆☆": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "★★☆": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "★★★": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case "基礎編": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "実践編": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "応用編": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "ビジネス編": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "特別編": return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
      case "フィナーレ": return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/streaming-schedule">
                <ArrowLeft className="w-4 h-4 mr-2" />
                配信スケジュールに戻る
              </Link>
            </Button>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center gap-2 mb-4">
              <Badge className={getDifficultyColor(stream.difficulty)}>{stream.difficulty}</Badge>
              <Badge className={getTypeColor(stream.type)}>{stream.type}</Badge>
              {stream.special && (
                <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white">特別配信</Badge>
              )}
            </div>
            
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
              {stream.title}
            </h1>
            
            <div className="flex justify-center items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span>{stream.date}（{stream.day}）</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{stream.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* 概要 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  配信概要
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {stream.description}
                </p>
              </CardContent>
            </Card>
            
            {/* 学習目標 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  学習目標
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {stream.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* 主な機能・内容 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  主な機能・内容
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {stream.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* 配信資料リンク */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  配信資料
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href={`/streaming-materials/${getStreamingMaterialFileName(stream.id)}`} download>
                      <Download className="w-4 h-4 mr-2" />
                      配信台本・資料をダウンロード
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/streaming-materials/x-announcements.md" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      X(Twitter)告知文例
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* 配信情報 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  配信情報
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">今日のゴール</h4>
                  <p className="text-sm text-primary font-semibold bg-primary/10 p-2 rounded">
                    {stream.goal}
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">使用ツール</h4>
                  <div className="flex flex-wrap gap-2">
                    {stream.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">事前準備</h4>
                  <ul className="space-y-1">
                    {stream.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                        {prerequisite}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {stream.youtubeUrl && (
                  <>
                    <Separator />
                    <Button className="w-full" asChild>
                      <a href={stream.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        YouTubeで視聴
                      </a>
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
            
            {/* 週テーマ */}
            <Card>
              <CardHeader>
                <CardTitle>Week {stream.week} テーマ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Week {stream.week}</Badge>
                  <p className="text-sm text-muted-foreground">
                    この配信は Week {stream.week} の一部として、
                    {stream.type}の内容を扱います。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// 配信資料のファイル名を取得する関数
function getStreamingMaterialFileName(id: string): string {
  const materialMap: Record<string, string> = {
    'day6': '8-18-dify-nocode.md',
    'day7': '8-19-google-ai-studio.md', 
    'day8': '8-20-genspark-development.md',
    'day12-special': '8-24-manus-development.md',
    'day13': '8-25-gemini-claude-code.md',
    'day14': '8-26-codex-cli.md',
    'day19-finale': '8-31-cursor-obsidian.md'
  }
  
  return materialMap[id] || `${id}-material.md`
}