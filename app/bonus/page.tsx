'use client'

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function BonusPage() {
  useEffect(() => {
    // カウントアップアニメーション
    const animateCount = () => {
      const counters = document.querySelectorAll('.count-animation');
      counters.forEach(counter => {
        const target = parseInt(counter.textContent || '0');
        if (!isNaN(target)) {
          let count = 0;
          const increment = target / 100;
          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              counter.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(count).toLocaleString();
            }
          }, 10);
        }
      });
    };

    animateCount();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">🎁 バイブコーディングスクール特典リスト</h1>
            <p className="text-lg opacity-90">総額840万円相当・104個の特典を完全公開</p>
          </div>
        </div>
      </header>

      {/* ナビゲーション */}
      <nav className="bg-white shadow-md sticky top-24 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 py-3 text-sm justify-center">
            {[
              { id: 'overview', label: '概要' },
              { id: 'basic', label: '基礎学習' },
              { id: 'tools', label: '開発ツール' },
              { id: 'monetize', label: '収益化' },
              { id: 'prompt', label: 'プロンプト' },
              { id: 'community', label: 'コミュニティ' },
              { id: 'course', label: '専門講座' },
              { id: 'live', label: '動画配信' },
              { id: 'limited', label: '限定特典' }
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:bg-purple-100"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        {/* 概要セクション */}
        <section id="overview" className="mb-12">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                圧倒的な特典でAI開発をマスター
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* 統計情報 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                  <div className="text-4xl font-bold text-purple-600 count-animation">104</div>
                  <div className="text-sm text-gray-600">総特典数</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-4xl font-bold text-pink-600 count-animation">840</div>
                  <div className="text-sm text-gray-600">万円相当</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                  <div className="text-4xl font-bold text-orange-600 count-animation">8</div>
                  <div className="text-sm text-gray-600">カテゴリ</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-green-600">∞</div>
                  <div className="text-sm text-gray-600">可能性</div>
                </div>
              </div>

              {/* 配布タイミング */}
              <Card className="bg-gradient-to-r from-purple-100 to-pink-100">
                <CardHeader>
                  <CardTitle className="text-xl">🎯 特典配布タイミング</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { phase: 'Phase 1', description: '無料登録時：基礎学習コンテンツ10個' },
                    { phase: 'Phase 2', description: 'セミナー参加：ツール・収益化コンテンツ40個' },
                    { phase: 'Phase 3', description: '購入決済後：全アクセス権限94個' },
                    { phase: 'Phase 4', description: '48時間限定：緊急特典10個' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Badge variant="secondary">{item.phase}</Badge>
                      <span>{item.description}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </section>

        {/* カテゴリ別特典リスト */}
        {[
          {
            id: 'basic',
            title: 'AI開発基礎・学習系特典',
            icon: '🚀',
            count: 13,
            description: 'プログラミング未経験者から上級者まで対応した学習コンテンツ',
            bonuses: [
              '初心者から月収100万円！12週間ロードマップ',
              'AI開発スキルピラミッド完全攻略',
              'CLI最強活用術で開発効率10倍アップ',
              '完全初心者向けファーストステップ',
              'AI開発者ロードマップ2025年版',
              '必須アプリ開発スキル習得ガイド',
              '初心者のための前提スキル完全ガイド',
              '0円から始めるAI開発スターターキット',
              '30分でできるAI開発クイックスタート',
              'AI開発エラー解決完全マニュアル',
              'バイブコーディング環境構築完全ガイド',
              '最新AI技術トレンド完全解説',
              '次世代開発ツール活用マスターガイド'
            ]
          },
          {
            id: 'tools',
            title: '開発ツール・環境系特典',
            icon: '🛠️',
            count: 20,
            description: '最新のAI開発ツールと環境構築の完全ガイド',
            bonuses: [
              'Cursor×Claude Code完全連携マスター',
              'Claude Code完全ガイド',
              'Cursor完全攻略マニュアル',
              'Dify完全攻略マニュアル',
              'Gemini CLI・Codex CLI活用ガイド',
              'MCP完全実践ガイド',
              'n8n自動化完全マスターガイド',
              'Google AI Studio Build徹底解説',
              'わどAI BOT機能解説マニュアル',
              '無料ツール環境構築完全ガイド',
              'プラットフォーム比較ガイド',
              '予算別代替ツールガイド',
              '開発環境トラブルシューティング大全',
              'AI開発ツールキット厳選集',
              'tmux完全活用ガイド',
              'VSCode AI拡張機能コレクション',
              'Docker & Kubernetes入門',
              'GitHub Copilot活用術',
              '開発効率化ツールチェーン構築',
              '実プロジェクトテンプレート集'
            ]
          },
          {
            id: 'monetize',
            title: '収益化・ビジネス系特典',
            icon: '💰',
            count: 15,
            description: 'AI開発スキルを収益に変える実践的ノウハウ',
            bonuses: [
              'AI副業7つの収益化モデル完全攻略',
              'AI駆動開発ビジネス完全講座',
              'note有料記事テンプレート集50選',
              'AIツール収益化戦略ガイド',
              '成功事例集50選',
              'AIバイラルコンテンツ作成システム',
              'AI開発者のためのSNSマーケティング術',
              'ランチャー戦略特別マニュアル',
              'ファネル最適化完全ガイド',
              'AI開発案件獲得保証プログラム',
              '月収100万円達成ロードマップ',
              '企業導入事例＆提案書テンプレート',
              'AIコンサルティング開業マニュアル',
              '個人SaaS開発・運営ガイド',
              'AI教材ビジネス構築術'
            ]
          }
        ].map((category) => (
          <section key={category.id} id={category.id} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-2">
                <span className="text-3xl">{category.icon}</span>
                {category.title}
                <Badge variant="default">{category.count}個</Badge>
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.bonuses.map((bonus, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base leading-tight">
                      {index + 1}. {bonus}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI開発・収益化に特化した実践的コンテンツ
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* 限定特典セクション */}
        <section id="limited" className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-2">
              <span className="text-3xl">🚀</span>
              限定・緊急特典
              <Badge variant="destructive">4個</Badge>
            </h2>
            <p className="text-gray-600">今だけの特別オファー</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'ユニコnote全記事永久アクセス権',
              'チームユニコ最新ノウハウ限定コンテンツ',
              'わどユニコ認定証発行システム',
              '完全返金保証＋成果保証ダブル特典'
            ].map((bonus, index) => (
              <Card key={index} className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {index + 101}. {bonus}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    期間限定の特別特典
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA セクション */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">今すぐ特典を手に入れよう！</h2>
              <p className="text-xl mb-6">総額840万円相当の特典があなたを待っています</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button size="lg" variant="secondary" className="text-purple-600 font-bold">
                  無料登録で特典GET
                </Button>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                  セミナーに申し込む
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 価値総額表 */}
        <section className="mb-12">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">特典価値総額</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3">カテゴリ</th>
                      <th className="text-center py-3">特典数</th>
                      <th className="text-right py-3">通常価格</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { category: 'AI開発基礎・学習系', count: 13, price: '65万円相当' },
                      { category: '開発ツール・環境系', count: 20, price: '100万円相当' },
                      { category: '収益化・ビジネス系', count: 15, price: '150万円相当' },
                      { category: 'プロンプト・テンプレート系', count: 15, price: '75万円相当' },
                      { category: 'コミュニティ・サポート系', count: 15, price: '100万円相当' },
                      { category: '専門講座・教材系', count: 12, price: '200万円相当' },
                      { category: 'ライブ配信・動画系', count: 10, price: '50万円相当' },
                      { category: '限定・緊急特典', count: 4, price: '100万円相当' }
                    ].map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3">{row.category}</td>
                        <td className="text-center">{row.count}個</td>
                        <td className="text-right font-semibold">{row.price}</td>
                      </tr>
                    ))}
                    <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                      <td className="py-4 font-bold text-lg">合計</td>
                      <td className="text-center font-bold text-lg">104個</td>
                      <td className="text-right font-bold text-2xl text-purple-600">840万円相当</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}