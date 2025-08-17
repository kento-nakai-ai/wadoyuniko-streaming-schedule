'use client'

import { Calendar, Clock, Users, Play, Sparkles, Video, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface StreamEvent {
  id: string
  date: string
  time: string
  title: string
  theme: string
  target: string
  type: 'tech' | 'entertainment' | 'space' | 'seminar'
  platform: 'youtube' | 'twitter'
  duration: string
  description: string[]
  dayOfWeek: string
}

const streamEvents: StreamEvent[] = [
  {
    id: '1',
    date: '8/18',
    dayOfWeek: '日',
    time: '20:30-21:30',
    title: 'Dify配信',
    theme: 'ノーコードAI開発プラットフォーム「Dify」徹底解説',
    target: 'エンジニア・PM・非エンジニア',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['RAGとAIエージェント', 'ChatGPT風アプリ構築デモ', '業務効率化ツールの内製化']
  },
  {
    id: '2',
    date: '8/19',
    dayOfWeek: '月',
    time: '20:00-21:00',
    title: 'Google AI Studio',
    theme: '初心者必見！Google AI Studio の build機能を使ってアプリ開発',
    target: 'プログラミング初心者・AI興味層',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['プログラミング不要でのAIアプリ開発', '30分でチャットボット構築', 'GeminiをGUIで簡単活用']
  },
  {
    id: '3',
    date: '8/20',
    dayOfWeek: '火',
    time: '21:00-22:00',
    title: 'Genspark開発',
    theme: '次世代AI開発「Genspark」で開発の常識が変わる',
    target: '先進的開発手法に興味があるエンジニア',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['設計書からコード自動生成', '音声入力での開発フロー', 'AIネイティブな開発スタイル']
  },
  {
    id: '4',
    date: '8/21',
    dayOfWeek: '水',
    time: '19:00-20:00',
    title: 'マリオカート配信',
    theme: 'ゲーム配信（エンタメ）',
    target: '一般視聴者・ファンコミュニティ',
    type: 'entertainment',
    platform: 'youtube',
    duration: '60分',
    description: ['視聴者参加型レース', '雑談交流', '技術の話はお休み']
  },
  {
    id: '5',
    date: '8/22',
    dayOfWeek: '木',
    time: '21:00-22:30',
    title: 'わど×ユニコ 𝕏スペース（第1回）',
    theme: '最新AI開発完全攻略 - 次世代AIアプリの作り方',
    target: 'AI開発に興味がある全層',
    type: 'space',
    platform: 'twitter',
    duration: '90分',
    description: ['AIトレンド最新情報', '開発事例紹介', 'Q&A', 'バイブコーディング予告']
  },
  {
    id: '6',
    date: '8/23',
    dayOfWeek: '金',
    time: '14:00-15:00',
    title: 'バイブコーディングセミナー',
    theme: 'わどスクオフ会 バイブコーディング本セミナー',
    target: 'セミナー参加者',
    type: 'seminar',
    platform: 'youtube',
    duration: '60分',
    description: ['バイブコーディング講座', '実践ワークショップ', 'オフ会としての告知']
  },
  {
    id: '7',
    date: '8/24',
    dayOfWeek: '土',
    time: '20:00-21:00',
    title: 'Manus開発',
    theme: '自律型AIエージェント「Manus」で業務自動化',
    target: 'ビジネスパーソン・エンジニア',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['ブラウザ自動操作エージェント構築', 'Web調査・データ入力の自動化', 'エージェント連携実装']
  },
  {
    id: '8',
    date: '8/25',
    dayOfWeek: '日',
    time: '21:00-22:00',
    title: 'Gemini CLI',
    theme: 'Gemini CLI入門でツール開発',
    target: 'CLI慣れ開発者・業務効率化興味層',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['Gitコミットメッセージ自動生成', '業務効率化ツール作成', 'ターミナルからAI活用']
  },
  {
    id: '9',
    date: '8/25',
    dayOfWeek: '日',
    time: '21:00-22:00',
    title: 'Claude Code',
    theme: 'Claude Codeで大規模開発の常識を変える',
    target: '大規模コードベース扱いエンジニア',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['20万行のコード解析デモ', 'リファクタリング実践', 'AIペアプログラミング実演']
  },
  {
    id: '10',
    date: '8/26',
    dayOfWeek: '月',
    time: '21:00-22:00',
    title: 'Codex CLI',
    theme: 'OpenAIの「Codex CLI」でターミナルを最強の開発環境に',
    target: 'CLI効率追求エンジニア・OpenAI興味層',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['シェル統合でコマンド忘れ解決', 'リファクタリング・テスト生成', 'Gemini CLIとの比較']
  },
  {
    id: '11',
    date: '8/27',
    dayOfWeek: '火',
    time: '21:00-23:00',
    title: 'わど×ユニコ 𝕏スペース（第2回）',
    theme: '未経験からアイデアを形に - 明日から始めるAI開発への第一歩',
    target: 'AI開発初心者',
    type: 'space',
    platform: 'twitter',
    duration: '120分',
    description: ['初心者の落とし穴回避', '学習ロードマップ', 'セミナー最終案内']
  },
  {
    id: '12',
    date: '8/31',
    dayOfWeek: '土',
    time: '20:00-21:00',
    title: 'Cursor × Obsidian',
    theme: 'CursorとObsidianで実現する知識駆動開発',
    target: '開発効率と知識管理両立志向エンジニア',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['メモからコード自動生成', '知識管理と開発の融合', '雑なアイデアをアプリ化実験']
  }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case 'tech': return 'bg-blue-500 text-white'
    case 'entertainment': return 'bg-green-500 text-white'
    case 'space': return 'bg-purple-500 text-white'
    case 'seminar': return 'bg-orange-500 text-white'
    default: return 'bg-gray-500 text-white'
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'tech': return <Sparkles className="w-4 h-4" />
    case 'entertainment': return <Play className="w-4 h-4" />
    case 'space': return <Users className="w-4 h-4" />
    case 'seminar': return <Calendar className="w-4 h-4" />
    default: return <Clock className="w-4 h-4" />
  }
}

const getPlatformIcon = (platform: string) => {
  return platform === 'youtube' ? 
    <Video className="w-4 h-4 text-red-500" /> : 
    <MessageCircle className="w-4 h-4 text-blue-400" />
}

const getTypeName = (type: string) => {
  switch (type) {
    case 'tech': return '技術系'
    case 'entertainment': return 'エンタメ'
    case 'space': return 'スペース'
    case 'seminar': return 'セミナー'
    default: return '配信'
  }
}

export default function LiveCalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            📅 ライブ配信カレンダー
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            2025年8月 - AI開発とバイブコーディング特別配信月間
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/70 dark:bg-slate-800/70 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-600">8本</div>
              <div className="text-sm text-muted-foreground">技術系配信</div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-600">2本</div>
              <div className="text-sm text-muted-foreground">𝕏スペース</div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-orange-600">1本</div>
              <div className="text-sm text-muted-foreground">セミナー</div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-green-600">1本</div>
              <div className="text-sm text-muted-foreground">エンタメ</div>
            </div>
          </div>
        </div>

        {/* Calendar Timeline */}
        <div className="space-y-6">
          {streamEvents.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline line */}
              {index !== streamEvents.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-blue-300 to-purple-300 dark:from-blue-600 dark:to-purple-600 z-0" />
              )}
              
              {/* Event card */}
              <div className="relative flex items-start space-x-6">
                {/* Date circle */}
                <div className="flex-shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white text-xs font-bold shadow-lg">
                    <div>{event.date.split('/')[1]}</div>
                    <div className="text-[10px]">{event.dayOfWeek}</div>
                  </div>
                </div>

                {/* Event content */}
                <Card className="flex-1 hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`p-1.5 rounded-full ${getTypeColor(event.type)}`}>
                            {getTypeIcon(event.type)}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {getTypeName(event.type)}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {getPlatformIcon(event.platform)}
                            <span className="text-xs text-muted-foreground">
                              {event.platform === 'youtube' ? 'YouTube Live' : '𝕏 Space'}
                            </span>
                          </div>
                        </div>
                        
                        <CardTitle className="text-lg leading-tight mb-1">
                          {event.title}
                        </CardTitle>
                        
                        <CardDescription className="text-sm">
                          {event.theme}
                        </CardDescription>
                      </div>
                      
                      <div className="flex-shrink-0 text-right">
                        <div className="flex items-center gap-1 text-sm font-medium mb-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          {event.time}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {event.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{event.target}</span>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-muted-foreground">配信内容:</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {event.description.map((item, index) => (
                            <div key={index} className="flex items-start gap-1 text-sm">
                              <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                              <span className="leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="flex-1"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          配信を見る
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          リマインダー
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-none">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                バイブコーディング特別月間
              </CardTitle>
              <CardDescription className="text-base">
                AI開発スキルを身につけて、未来のエンジニアになろう！<br />
                各配信では実践的なハンズオンと限定特典をご用意しています。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4">
                <Button asChild>
                  <a href="https://youtube.com/@wadoyuniko" target="_blank" rel="noopener noreferrer">
                    <Video className="w-4 h-4 mr-2" />
                    チャンネル登録
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://twitter.com/wado_dev" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    𝕏をフォロー
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}