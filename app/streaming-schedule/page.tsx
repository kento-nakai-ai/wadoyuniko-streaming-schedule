"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, Users, Zap, Star, Trophy, Gift, Target, BookOpen, Lightbulb, ExternalLink } from "lucide-react"
import { streamingData, weeklyThemes, type StreamingEvent } from './data/streaming-data'

// カウントダウン機能
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  
  useEffect(() => {
    const targetDate = new Date('2024-08-13T20:00:00+09:00')
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  return (
    <div className="flex justify-center items-center space-x-4 my-8">
      <div className="text-center">
        <div className="text-4xl font-bold text-primary">{timeLeft.days}</div>
        <div className="text-sm text-muted-foreground">日</div>
      </div>
      <div className="text-2xl">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary">{timeLeft.hours}</div>
        <div className="text-sm text-muted-foreground">時間</div>
      </div>
      <div className="text-2xl">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary">{timeLeft.minutes}</div>
        <div className="text-sm text-muted-foreground">分</div>
      </div>
      <div className="text-2xl">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary">{timeLeft.seconds}</div>
        <div className="text-sm text-muted-foreground">秒</div>
      </div>
    </div>
  )
}

// 配信カードコンポーネント
const StreamCard = ({ stream }: { stream: StreamingEvent }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
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
    <Card className={`transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${stream.special ? 'ring-2 ring-primary shadow-lg' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1 mr-4">
            <CardTitle className="text-lg font-bold leading-tight">{stream.title}</CardTitle>
            <CardDescription className="flex items-center space-x-2 mt-2">
              <CalendarDays className="w-4 h-4" />
              <span>{stream.date}（{stream.day}）</span>
              <Clock className="w-4 h-4 ml-2" />
              <span>{stream.time}</span>
              {stream.youtubeUrl && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="ml-2 h-6 px-2 text-xs"
                  asChild
                >
                  <a href={stream.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    視聴
                  </a>
                </Button>
              )}
            </CardDescription>
          </div>
          <div className="flex flex-col space-y-1">
            <Badge className={getDifficultyColor(stream.difficulty)}>{stream.difficulty}</Badge>
            <Badge className={getTypeColor(stream.type)}>{stream.type}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{stream.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">今日のゴール:</span>
            <span className="text-sm font-semibold text-primary">{stream.goal}</span>
          </div>
          
          <div className="flex items-start space-x-2">
            <Users className="w-4 h-4 text-primary mt-0.5" />
            <span className="text-sm font-medium">使用ツール:</span>
            <div className="flex flex-wrap gap-1">
              {stream.tools.map((tool: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">{tool}</Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Lightbulb className="w-4 h-4 text-primary mt-0.5" />
            <span className="text-sm font-medium">主な機能:</span>
            <div className="flex flex-wrap gap-1">
              {stream.features.slice(0, 3).map((feature: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs">{feature}</Badge>
              ))}
              {stream.features.length > 3 && (
                <Badge variant="secondary" className="text-xs">+{stream.features.length - 3}個</Badge>
              )}
            </div>
          </div>
        </div>

        {stream.special && (
          <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg border border-primary/20">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">特別配信</span>
            </div>
            <p className="text-xs text-muted-foreground">
              通常の配信とは異なる特別企画です
            </p>
          </div>
        )}

        {/* 詳細表示ボタン */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 w-full text-xs"
        >
          {isExpanded ? '詳細を閉じる' : '詳細を見る'}
        </Button>

        {/* 展開可能な詳細情報 */}
        {isExpanded && (
          <div className="mt-4 space-y-3 p-3 bg-muted/50 rounded-lg">
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                学習目標
              </h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                {stream.learningOutcomes.map((outcome, index) => (
                  <li key={index}>• {outcome}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">事前準備</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                {stream.prerequisites.map((prerequisite, index) => (
                  <li key={index}>• {prerequisite}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function StreamingSchedulePage() {
  const [selectedWeek, setSelectedWeek] = useState("all")
  
  const filteredStreams = selectedWeek === "all" 
    ? streamingData 
    : streamingData.filter(stream => stream.week === parseInt(selectedWeek))
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* ヘッダー */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AI駆動開発YouTube配信スケジュール
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              19日間連続配信チャレンジ！🚀
            </p>
            <p className="text-lg text-muted-foreground">
              8月13日〜31日 | 毎日20:00スタート
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* カウントダウン */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">配信開始まで</h2>
          <Countdown />
          <div className="mt-6">
            <Button size="lg" className="mr-4" asChild>
              <a href="https://youtube.com/live/3PvXS1DN3Ec" target="_blank" rel="noopener noreferrer">
                YouTubeで視聴予約
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#schedule">スケジュールを見る</a>
            </Button>
          </div>
        </div>
        
        {/* 概要カード */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Trophy className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>19日間完走目標</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                全配信参加でAI開発者レベル到達
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Zap className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>1日1アプリ完成</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                実用的なAIアプリを毎日作成
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Gift className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>完全無料参加</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Google AI Studio Build中心の無料ツール
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* フィルター */}
        <div id="schedule" className="mb-8">
          <Tabs value={selectedWeek} onValueChange={setSelectedWeek}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">全て</TabsTrigger>
              <TabsTrigger value="1">Week 1</TabsTrigger>
              <TabsTrigger value="2">Week 2</TabsTrigger>
              <TabsTrigger value="3">Week 3</TabsTrigger>
              <TabsTrigger value="4">Week 4</TabsTrigger>
            </TabsList>
            
            {/* 週別テーマ表示 */}
            {selectedWeek !== "all" && weeklyThemes[parseInt(selectedWeek) as keyof typeof weeklyThemes] && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">
                  {weeklyThemes[parseInt(selectedWeek) as keyof typeof weeklyThemes].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {weeklyThemes[parseInt(selectedWeek) as keyof typeof weeklyThemes].description}
                </p>
              </div>
            )}
          </Tabs>
        </div>
        
        {/* 配信スケジュール */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredStreams.map((stream, index) => (
            <StreamCard key={index} stream={stream} />
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-purple-600/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">今すぐ参加登録しよう！</h2>
          <p className="text-muted-foreground mb-6">
            19日間でAI開発者になる旅が、8月13日20:00からスタート！
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <a href="https://youtube.com/@wadoyuniko" target="_blank" rel="noopener noreferrer">
                チャンネル登録
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://line.me/ti/g/example" target="_blank" rel="noopener noreferrer">
                LINEでサポート
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}