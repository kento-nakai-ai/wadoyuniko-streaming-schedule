import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Bot, Code2, Users, Zap, Shield, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4" variant="secondary">
              AI組織運用システム v0.1.0
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl">
              バイブコーディング
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              AIエージェントが協調して動く次世代の開発プラットフォーム
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2">
                  ダッシュボードへ
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline">
                  ドキュメント
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            AI組織の特徴
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Bot className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>12のAIエージェント</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  CEO、CTO、エンジニア、QAなど、専門的な役割を持つAIエージェントが協調して動作
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>自動協調システム</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  エージェント間で自動的にタスクを割り振り、効率的な開発を実現
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>セキュリティファースト</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Security Officerが常時監視し、脆弱性を自動検出・修正
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code2 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>高品質なコード</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  複数のエージェントによるレビューで、80%以上のテストカバレッジを保証
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>高速な開発</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  並列処理とインテリジェントなタスク分割で、開発速度を大幅に向上
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>リアルタイム分析</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  開発メトリクスとパフォーマンスを常時監視し、継続的な改善を実現
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI組織構造 */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            AI組織構造
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { role: 'CEO', level: 5, description: '戦略立案・最終決定' },
              { role: 'CTO', level: 4, description: '技術戦略・アーキテクチャ' },
              { role: 'Engineering Manager', level: 3, description: '開発チーム管理' },
              { role: 'Security Officer', level: 2, description: 'セキュリティ監査' },
              { role: 'QA Lead', level: 2, description: '品質保証戦略' },
              { role: 'Senior Fullstack', level: 2, description: '技術設計・実装' },
              { role: 'Frontend Specialist', level: 1, description: 'UI/UX実装' },
              { role: 'Backend Architect', level: 1, description: 'API設計' },
              { role: 'DevOps Engineer', level: 2, description: 'インフラ管理' },
              { role: 'Technical Writer', level: 1, description: 'ドキュメント作成' },
              { role: 'Product Manager', level: 3, description: 'プロダクト戦略' },
              { role: 'HR Manager', level: 3, description: '組織文化・人材管理' },
            ].map((agent) => (
              <Card key={agent.role} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{agent.role}</CardTitle>
                    <Badge variant={agent.level >= 4 ? 'default' : agent.level >= 2 ? 'secondary' : 'outline'}>
                      Level {agent.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{agent.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">
            今すぐAI組織を体験
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            12のAIエージェントがあなたの開発を加速させます
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="gap-2">
              無料で始める
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}