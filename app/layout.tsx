import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'wadoyuniko AI Platform - バイブコーディング',
  description: 'AIを活用した次世代のプログラミング教育プラットフォーム',
  keywords: ['AI', 'プログラミング', '教育', 'バイブコーディング', 'wadoyuniko'],
  authors: [{ name: 'wadoyuniko' }],
  openGraph: {
    title: 'wadoyuniko AI Platform',
    description: 'AIを活用した次世代のプログラミング教育プラットフォーム',
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
                  <Link href="/bonus">特典リスト</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/bonus-schedule">特典配布</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/streaming-schedule">配信スケジュール</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/live-calendar">ライブカレンダー</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/teams">チームドキュメント</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/x-posts">X投稿集</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/wado-posts">わど投稿</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/nakai-posts">中井投稿</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/team-overview">チーム総合</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/docs">ドキュメント</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/sales-team">セールスチーム</Link>
                </Button>
              </div>
              <div className="lg:hidden">
                <Button variant="ghost" asChild>
                  <Link href="/bonus-schedule">特典配布</Link>
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