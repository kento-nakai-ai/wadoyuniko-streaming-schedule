import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Navigation from '@/components/navigation'

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
          <div className="flex h-screen">
            {/* サイドバーナビゲーション */}
            <Navigation />
            
            {/* メインコンテンツ */}
            <main className="flex-1 overflow-y-auto lg:ml-0">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}