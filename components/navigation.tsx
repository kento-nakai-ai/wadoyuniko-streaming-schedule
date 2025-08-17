"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Home, 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp, 
  Settings, 
  Menu, 
  X,
  Target,
  Presentation,
  Gift,
  BarChart3
} from 'lucide-react'

const navigationItems = [
  {
    title: "ダッシュボード",
    href: "/dashboard",
    icon: Home,
    description: "プロジェクト全体の概要"
  },
  {
    title: "チーム管理",
    href: "/teams",
    icon: Users,
    description: "チーム別ダッシュボード",
    badge: "6チーム"
  },
  {
    title: "配信スケジュール",
    href: "/streaming-schedule",
    icon: Calendar,
    description: "ライブ配信・動画管理"
  },
  {
    title: "セミナー管理",
    href: "/seminar-script",
    icon: Presentation,
    description: "セミナー台本・スライド"
  },
  {
    title: "特典管理",
    href: "/bonus",
    icon: Gift,
    description: "ボーナス特典・配布管理"
  },
  {
    title: "戦略ダッシュボード",
    href: "/strategy-dashboard",
    icon: BarChart3,
    description: "マーケティング戦略・分析"
  },
  {
    title: "note配信管理",
    href: "/note-distribution",
    icon: FileText,
    description: "note記事配布戦略"
  },
  {
    title: "KPI追跡",
    href: "/dashboard",
    icon: TrendingUp,
    description: "リアルタイム数値管理"
  }
]

const teamLinks = [
  { name: "PM", href: "/teams/pm", color: "bg-blue-500" },
  { name: "Content", href: "/teams/content", color: "bg-green-500" },
  { name: "Marketing", href: "/teams/marketing", color: "bg-purple-500" },
  { name: "Design", href: "/teams/design", color: "bg-pink-500" },
  { name: "Live", href: "/teams/live", color: "bg-red-500" },
  { name: "X", href: "/teams/x", color: "bg-gray-800" }
]

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* モバイルメニューボタン */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white shadow-lg"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* オーバーレイ（モバイル用） */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* サイドバー */}
      <nav className={`
        ${className}
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 
        transition-transform duration-300 ease-in-out z-50 lg:static lg:z-0
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* ロゴ・プロジェクト名 */}
          <div className="mb-8">
            <Link href="/" className="block">
              <h1 className="text-xl font-bold text-gray-900 mb-1">
                わどユニコ
              </h1>
              <p className="text-sm text-gray-600">
                バイブコーディング
              </p>
              <p className="text-xs text-gray-500 mt-1">
                ローンチプロジェクト
              </p>
            </Link>
          </div>

          {/* プロジェクト統計 */}
          <div className="mb-6 p-3 bg-blue-50 rounded-lg">
            <div className="text-xs text-blue-600 font-medium mb-2">
              プロジェクト進捗
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-blue-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
              <span className="text-sm font-bold text-blue-700">78%</span>
            </div>
            <div className="text-xs text-blue-600 mt-1">
              8月28日ローンチまで
            </div>
          </div>

          {/* メインナビゲーション */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              メイン機能
            </h3>
            <ul className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
                        ${active 
                          ? 'bg-blue-100 text-blue-700 font-medium' 
                          : 'text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                    {active && (
                      <p className="text-xs text-gray-500 px-10 py-1">
                        {item.description}
                      </p>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* チームクイックアクセス */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              チームアクセス
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {teamLinks.map((team) => (
                <Link
                  key={team.href}
                  href={team.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs hover:bg-gray-100 transition-colors"
                >
                  <div className={`w-3 h-3 rounded-full ${team.color}`}></div>
                  <span>{team.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 重要な期日 */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              重要な期日
            </h3>
            <div className="space-y-2">
              <div className="p-2 bg-orange-50 rounded-lg">
                <div className="text-xs font-medium text-orange-700">8月14日</div>
                <div className="text-xs text-orange-600">大型コラボ告知</div>
              </div>
              <div className="p-2 bg-red-50 rounded-lg">
                <div className="text-xs font-medium text-red-700">8月28-30日</div>
                <div className="text-xs text-red-600">セミナー実施</div>
              </div>
            </div>
          </div>

          {/* フッター */}
          <div className="text-xs text-gray-500 border-t pt-4">
            <div className="mb-2">
              <strong>管理者:</strong> 中井健登
            </div>
            <div className="mb-2">
              <strong>最終更新:</strong> 2025-01-13
            </div>
            <div>
              <Link href="/teams/docs" className="text-blue-600 hover:underline">
                📚 ドキュメント
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
