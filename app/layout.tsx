import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'バイブコーディング ローンチプロジェクト',
  description: 'AI開発教育プログラム「バイブコーディング」のローンチ戦略管理システム。note記事配布、セミナー運営、効果測定を統合管理。',
  keywords: ['AI', 'プログラミング', '教育', 'バイブコーディング', 'ローンチ', 'note配布', 'セミナー', 'wadoyuniko'],
  authors: [{ name: 'wadoyuniko' }],
  openGraph: {
    title: 'バイブコーディング ローンチプロジェクト',
    description: 'AI開発教育プログラム「バイブコーディング」のローンチ戦略管理システム',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* グローバルナビゲーション */}
          <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-primary">
                wadoyuniko
              </Link>
              <div className="hidden lg:flex space-x-4">
                <Button variant="ghost" asChild>
                  <Link href="/">ホーム</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/dashboard">ダッシュボード</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/note-campaign">note記事キャンペーン</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/note-distribution">記事配布管理</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/strategy-dashboard">戦略ダッシュボード</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/bonus">特典リスト</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/bonus-schedule">特典配布</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/streaming-schedule">配信スケジュール</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/streaming-materials">配信資料</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/live-calendar">ライブカレンダー</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/teams">チームドキュメント</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/launch-strategy">ローンチ戦略</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/competitive-analysis">競合分析</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/seminar-script">セミナー台本</Link>
                </Button>
              </div>
              <div className="lg:hidden">
                <Button variant="ghost" asChild>
                  <Link href="/note-campaign">note記事</Link>
                </Button>
              </div>
            </div>
          </nav>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}