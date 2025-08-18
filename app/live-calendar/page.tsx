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
  platform: 'youtube' | 'twitter' | 'offline'
  duration: string
  description: string[]
  dayOfWeek: string
}

const streamEvents: StreamEvent[] = [
  {
    id: '1',
    date: '8/18',
    dayOfWeek: '月',
    time: '20:30-21:30',
    title: '🚀 コード書けなくてもOK！',
    theme: 'Difyで30分でChatGPT風アプリを作ろう！プログラミング不要のAI開発入門',
    target: 'プログラミング未経験者・AI初心者',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['コード1行も書かずにAIアプリ完成', '実際に動くチャットボットをその場で作成', 'あなたのアイデアを30分でアプリ化する方法']
  },
  {
    id: '2',
    date: '8/19',
    dayOfWeek: '火',
    time: '20:00-21:00',
    title: '✨ 魔法のようなAI開発体験！',
    theme: 'Google AI Studioで誰でも簡単！話しかけるだけでアプリが完成する未来の開発法',
    target: 'プログラミング初心者・AI興味層',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['クリックだけで本格AIアプリ完成', '画面を見ながら一緒に作れる実演', 'GeminiAIを使った驚きの簡単開発']
  },
  {
    id: '3',
    date: '8/20',
    dayOfWeek: '水',
    time: '21:00-22:00',
    title: '🎯 話すだけでアプリが完成！？',
    theme: 'Genspark革命！音声で指示するだけで設計からコードまで自動生成する衝撃体験',
    target: 'AI開発の最新手法に興味がある方',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['音声で「こんなアプリ作って」と言うだけ', '設計書も自動、コードも自動の驚き体験', '未来の開発スタイルを先取り体験']
  },
  {
    id: '4',
    date: '8/21',
    dayOfWeek: '木',
    time: '19:00-20:00',
    title: '🎮 息抜きマリオカート大会！',
    theme: 'みんなでワイワイ！技術の話はお休みして楽しく交流しよう',
    target: '視聴者のみなさん・コミュニティメンバー',
    type: 'entertainment',
    platform: 'youtube',
    duration: '60分',
    description: ['視聴者参加型レースで盛り上がろう', '普段聞けない裏話や雑談タイム', 'リラックスした雰囲気で交流']
  },
  {
    id: '5',
    date: '8/22',
    dayOfWeek: '金',
    time: '21:00-23:00',
    title: '⚡ わど&ユニコの特別企画Xスペース配信！！',
    theme: '最新AI開発完全攻略 - 次世代AIアプリの作り方',
    target: 'AI開発に興味がある全ての方',
    type: 'space',
    platform: 'twitter',
    duration: '120分',
    description: ['AIトレンドの最新情報を生解説', '実際の開発事例を具体的に紹介', '参加者からの質問に即答でお答え']
  },
  {
    id: '6',
    date: '8/23',
    dayOfWeek: '土',
    time: '14:00-15:00',
    title: '🎓 わどスク合同オフ会限定セミナー',
    theme: 'オフライン限定！バイブコーディング特別セミナー - 参加者だけの特別体験',
    target: 'わどスク合同オフ会参加者限定',
    type: 'seminar',
    platform: 'offline',
    duration: '60分',
    description: ['オフライン限定バイブコーディング実践', '参加者同士の直接交流とネットワーキング', 'わど&ユニコとの特別対面セッション']
  },
  {
    id: '7',
    date: '8/24',
    dayOfWeek: '日',
    time: '20:00-21:00',
    title: '🤖 あなたの代わりに働くAI秘書',
    theme: 'Manusで作る自律型AIエージェント！面倒な作業を全部お任せする魔法の仕組み',
    target: '作業効率化したい方・ビジネスパーソン',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['クリック作業を自動化するAI作成', 'Web調査やデータ入力が勝手に完了', '複数のAIエージェントを連携させる方法']
  },
  {
    id: '8',
    date: '8/25',
    dayOfWeek: '月',
    time: '21:00-22:00',
    title: '💡 黒い画面が最強ツールに変身！',
    theme: 'Gemini CLIで始める！ターミナル嫌いでもできる超効率AI活用術',
    target: '作業効率化に興味がある方・開発者',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['コミットメッセージをAIが自動作成', '面倒な作業をコマンド一発で解決', 'ターミナルからAIを自由自在に操る方法']
  },
  {
    id: '9',
    date: '8/25',
    dayOfWeek: '月',
    time: '22:00-23:00',
    title: '🔥 20万行のコードも一瞬で理解！',
    theme: 'Claude Codeの衝撃！巨大なプログラムも怖くない、AIペアプログラミングの世界',
    target: '大規模開発に興味がある方・エンジニア',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['巨大コードベースの解析をライブ実演', 'リファクタリングをAIと一緒に実践', 'AIとペアプログラミングする未来体験']
  },
  {
    id: '10',
    date: '8/26',
    dayOfWeek: '火',
    time: '21:00-22:00',
    title: '⚡ ターミナルが最強開発環境に！',
    theme: 'Codex CLIでコマンド忘れも怖くない！OpenAI搭載の魔法のターミナル体験',
    target: '開発効率を上げたい方・OpenAI活用に興味がある方',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['コマンドを忘れてもAIが教えてくれる', 'リファクタリング・テスト生成も自動', 'Gemini CLIとの違いを実演比較']
  },
  {
    id: '11',
    date: '8/27',
    dayOfWeek: '水',
    time: '21:00-22:30',
    title: '🌟 セミナー直前！わど&ユニコのXスペース配信！「未経験からアイデアを形に - 明日から始めるAI開発への第一歩」',
    theme: '未経験からアイデアを形に - 明日から始めるAI開発への第一歩',
    target: 'AI開発初心者・未経験者',
    type: 'space',
    platform: 'twitter',
    duration: '90分',
    description: ['初心者が陥りやすい落とし穴と回避法', '成功する学習ロードマップを完全公開', 'バイブコーディングで得られる明るい未来']
  },
  {
    id: '12',
    date: '8/31',
    dayOfWeek: '日',
    time: '20:00-21:00',
    title: '📝 メモがアプリに変身する魔法',
    theme: 'Cursor × Obsidian 究極コラボ！雑なメモからプロ級アプリが生まれる驚きの開発法',
    target: 'アイデアをアプリ化したい方・知識管理に興味がある方',
    type: 'tech',
    platform: 'youtube',
    duration: '60分',
    description: ['走り書きメモから本格アプリを自動生成', 'アイデア管理と開発を完全統合', '「こんなの欲しい」を即座にアプリ化']
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
  switch (platform) {
    case 'youtube':
      return <Video className="w-4 h-4 text-red-500" />
    case 'twitter':
      return <MessageCircle className="w-4 h-4 text-blue-400" />
    case 'offline':
      return <Users className="w-4 h-4 text-green-500" />
    default:
      return <Video className="w-4 h-4 text-red-500" />
  }
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
                              {event.platform === 'youtube' ? 'YouTube Live' : 
                               event.platform === 'twitter' ? '𝕏 Space' : 
                               'オフライン限定'}
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