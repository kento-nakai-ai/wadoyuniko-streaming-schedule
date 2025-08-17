# バイブコーディング（Vibe Coding）ローンチプロジェクト 🚀

**「アイデアを、最速でカタチに。」**

> **2025年8月28-30日ローンチ | 売上目標3,000万円 | 受講者目標100名**

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://wadoyuniko.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 📌 プロジェクト概要

**バイブコーディング**は、プログラミング経験の少ない方や過去に挫折した方を対象とした、AIを活用した革新的な開発教育プログラムです。`Cursor`や`Claude`などの最新AI開発ツールを使用し、自然言語での対話を通じて直感的にアプリケーション開発を学べるオンラインスクールです。

### 🎯 プロジェクトの目標
- **売上目標**: 3,000万円
- **受講者目標**: 100名  
- **価格設定**: 
  - バイブコーディングスクール: 30万円
  - セット版（プロンプトエンジニアリング込み）: 50万円
- **ローンチ期間**: 2025年8月28日〜30日

### 🤝 主催・協力
- **主催**: wadoyuniko（和道ユニコ）
- **技術パートナー**: ユニコーン社（既存501名の受講生実績）
- **形態**: 共同ローンチプロジェクト

## ✨ 特徴

- **🎯 実績あるコンテンツ**: 既に501名の受講生が成果を上げている実証済みプログラム（90%が未経験からスタート）
- **🤖 AI開発特化**: 複雑なコード記述ではなく、AIとの対話でアプリ開発
- **⚡ 実践重視**: 実際のツール開発を通じたハンズオン学習
- **♾️ 永久会員制**: 追加料金なし、新コンテンツも永久無料
- **💰 収益化支援**: 学んだスキルでクライアントワークや副業に活用
- **📱 現代的な管理システム**: Next.js 15 + TypeScript で構築された統合管理システム

## 📁 プロジェクト構造

```
wadoyuniko/
├── 📱 app/                      # Next.js Webアプリケーション
│   ├── teams/                   # チームドキュメントダッシュボード  
│   ├── streaming-schedule/      # 配信スケジュール管理
│   └── dashboard/               # KPI・進捗ダッシュボード
├── 👥 teams/                    # チーム別ドキュメント（統合済み）
│   ├── pm/                      # プロジェクト管理（中井健登）
│   ├── content/                 # コンテンツ制作（ゆき、ちょこ、ゆうた）
│   ├── marketing/               # マーケティング（わど、中上、Yui）
│   ├── design/                  # デザインチーム
│   ├── live/                    # 配信チーム
│   ├── x/                       # SNSチーム
│   └── docs/                    # 共通ドキュメント
├── 📊 docs/                     # レガシードキュメント（参考用）
├── ⚙️ components/               # UIコンポーネント（shadcn/ui）
└── 🔧 lib/                      # ユーティリティ・設定
```

## 🛠️ 技術スタック

### 🎨 フロントエンド
- **Next.js 15** (App Router) - React ベースフルスタックフレームワーク
- **TypeScript** (strict mode) - 型安全性保証
- **Tailwind CSS + shadcn/ui** - モダンUI・デザインシステム
- **Lucide React** - アイコンライブラリ
- **next-themes** - ダーク/ライトテーマ切り替え

### 🚀 デプロイメント & インフラ
- **Vercel** - 本番環境（自動デプロイ対応）
- **GitHub Actions** - CI/CD パイプライン
- **静的サイト出力** - `output: 'export'` 設定済み

### 🔧 開発・品質管理
- **ESLint + Prettier** - コード品質・フォーマット
- **TypeScript** - 静的型チェック
- **Git Hooks** - コミット前品質チェック

### 📊 データ管理
- **JSON ベース** - 軽量データストレージ
- **TypeScript 型定義** - データ構造の型安全性
- **動的ルーティング** - Next.js App Router 活用

## 🚀 クイックスタート

### 1. 🛠️ 環境セットアップ
```bash
# リポジトリをクローン
git clone https://github.com/kento-nakai-ai/wadoyuniko-streaming-schedule.git
cd wadoyuniko

# 依存関係をインストール
npm install
```

### 2. 🌐 開発サーバーの起動
```bash
# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:3000 を開く
```

### 3. 📊 主要機能の確認
```bash
# 本番ビルド＆プレビュー
npm run build
npm run start

# アクセス可能なページ:
# - ダッシュボード: http://localhost:3000/dashboard
# - チームドキュメント: http://localhost:3000/teams
# - 配信スケジュール: http://localhost:3000/streaming-schedule
# - セミナー管理: http://localhost:3000/seminar-script
```

## 👥 プロジェクト体制

### 🎯 統括・マネジメント
- **中井健登（PM）**: プロジェクト全体統括、技術アーキテクチャ設計、セミナー実施（8/30）

### 🎨 コンテンツ制作チーム
- **ゆき（リード）**: セミナースライド制作、UI/UXデザイン、サムネイル制作
- **ちょこ**: ローンチ動画編集（縦型/横型）、MV動画構成・編集
- **こばやし ゆうた**: MV動画台本作成・編集、コンテンツ企画

### 📈 マーケティング・セールス
- **わど**: セミナー実施（8/28-29）、Xスペース配信、ブランディング
- **中上裕三**: 競合分析、特典企画・制作、KPI数値管理
- **Yui Mitsui**: LINE配信管理、決済システム（mosh）管理、顧客サポート

### 🤝 外部パートナー
- **ユニコーン社**: コンテンツ提供、特典制作、Discord運営、既存受講生サポート

## 📊 ローンチスケジュール

### 🎯 重要マイルストーン
- **8月14日**: 大型コラボ告知・オプチャ公開
- **8月21日**: ローンチ投稿開始
- **8月22日**: Xスペース実施
- **8月27日**: スペース実施（わどユニコ）
- **8月28日〜30日**: セミナー実施（3日間）

### 📊 目標数値
- **セミナー着席者**: 1,000名
- **CVR目標**: 10%（セミナー着席者から）
- **LINE登録目標**: 1,200名
- **個別面談**: 100件

## 🎁 商品・サービス内容

### メイン商品：Vibe Codingコース（30万円）
- **学習方法**: AIとの対話でコード生成・最適化
- **期間**: 90日間メインプログラム + 永久会員
- **サポート**: 週9時間のライブ講義、Discord無期限サポート
- **実績**: 501名のコミュニティ、90%が未経験からスタート

### サブ商品：プロンプトエンジニアリング学習コース（30万円）
- **コンセプト**: 「AIを"ガチャ"から"意のままの相棒"へ」
- **学習形式**: 独自Webサイトでの課題進行
- **内容**: 体系的プロンプト設計技術、高品質プロンプト集

### セット販売（50万円）
- 両コース同時受講で10万円お得
- 総合的なAI人材を目指す方向け

### 共同開発特典：Wado AI
- **目的**: ローンチ・スクール運営ノウハウのボット化
- **機能例**:
  - 高エンゲージメントなXポスト自動生成
  - セミナー台本・スライド構成案作成
  - マーケティング活動効率化ツール

## 📚 システム・ドキュメント構造

### 🌐 **[統合Webダッシュボード](https://wadoyuniko.vercel.app/)**
Next.js 15で構築された現代的な管理システム：

| 機能 | URL | 説明 |
|------|-----|------|
| 🏠 **メインダッシュボード** | `/dashboard` | KPI、進捗、全体概要 |
| 👥 **チーム管理** | `/teams` | 各チーム別ドキュメント統合 |
| 📺 **配信スケジュール** | `/streaming-schedule` | ライブ配信・動画制作管理 |
| 📝 **セミナー管理** | `/seminar-script` | セミナー台本・スライド管理 |
| 🎁 **特典管理** | `/bonus` | 特典コンテンツ・配布管理 |
| 📊 **戦略ダッシュボード** | `/strategy-dashboard` | マーケティング戦略・分析 |

### 📁 **チーム別ドキュメント**
- **[PMチーム](/teams/pm/)** - プロジェクト管理、スケジュール、KPI追跡
- **[Contentチーム](/teams/content/)** - セミナー資料、特典制作、技術ガイド
- **[Marketingチーム](/teams/marketing/)** - 販売戦略、SNS運用、LP制作
- **[Designチーム](/teams/design/)** - ブランドガイドライン、ビジュアル制作
- **[Liveチーム](/teams/live/)** - 配信企画、動画制作、技術サポート
- **[Xチーム](/teams/x/)** - SNS戦略、アルゴリズム最適化

### 📖 **技術ドキュメント**
- **[CLAUDE.md](./CLAUDE.md)** - AI開発プロジェクト指示書
- **[components.json](./components.json)** - shadcn/ui設定ファイル
- **[package.json](./package.json)** - 依存関係・スクリプト定義

## 📋 開発・運用コマンド

### 🛠️ 開発環境
```bash
npm run dev          # 開発サーバー起動 (http://localhost:3000)
npm run build        # プロダクションビルド（静的サイト生成）
npm run start        # プロダクションサーバー起動
```

### 🔍 品質管理
```bash
npm run lint         # ESLintによるコードチェック
npm run lint:fix     # ESLintエラー自動修正
npm run type-check   # TypeScript型チェック
```

### 🚀 デプロイメント
```bash
# Vercelへの自動デプロイ（mainブランチプッシュ時）
git push origin main

# 手動デプロイ確認
vercel --prod
```

### 📊 プロジェクト管理
```bash
# ファイル構造確認
tree -I 'node_modules|.next|.git'

# 依存関係確認
npm list --depth=0
```

## 🔧 環境変数・設定

### 📝 環境変数設定
`.env.local` ファイルを作成（オプション）:

```bash
# アプリケーション基本設定
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Vibe Coding Launch Project"

# 今後の拡張用（現在は不要）
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### ⚙️ 重要な設定ファイル
- **`next.config.js`**: Next.js設定（静的エクスポート有効）
- **`tailwind.config.js`**: Tailwind CSS カスタマイズ
- **`tsconfig.json`**: TypeScript strict mode設定
- **`components.json`**: shadcn/ui コンポーネント設定

## 📊 プロジェクト進捗・成果

### ✅ 完了済み（2025年1月13日時点）
- **🏗️ システム基盤**: Next.js 15 + TypeScript 統合管理システム構築
- **📁 プロジェクト整理**: チーム別ドキュメント統合・重複ファイル削除
- **🌐 Webダッシュボード**: 全32ページの機能的なダッシュボード完成
- **🚀 自動デプロイ**: Vercel連携・CI/CD パイプライン構築
- **🔧 技術修正**: ビルドエラー修正・Next.js 15対応完了

### 🚧 進行中・次のステップ
- **📝 セミナー資料**: スライド・台本の最終調整
- **🎁 特典制作**: 5大特典コンテンツの完成
- **🎬 動画制作**: ローンチMV・プロモーション動画
- **📈 KPI管理**: リアルタイム数値追跡システム運用開始

## 🤝 サポート・問い合わせ

### 🔧 技術的問題
| 問題の種類 | 対処方法 | コマンド |
|------------|----------|----------|
| **開発エラー** | コード品質チェック | `npm run lint && npm run type-check` |
| **ビルドエラー** | ビルドログ確認 | `npm run build` |
| **型エラー** | TypeScript確認 | `npx tsc --noEmit` |

### 👥 プロジェクト問い合わせ
- **🎯 プロジェクト統括**: 中井健登（PM）- 技術・全体戦略
- **📞 緊急連絡**: Discord #開発ローンチch
- **📚 ドキュメント**: [統合管理システム](https://wadoyuniko.vercel.app/)

### 🌐 主要リンク
| サービス | URL | 用途 |
|----------|-----|------|
| **🏠 本番サイト** | https://wadoyuniko.vercel.app | メインダッシュボード |
| **👥 チーム管理** | https://wadoyuniko.vercel.app/teams | チーム別ドキュメント |
| **📺 配信管理** | https://wadoyuniko.vercel.app/streaming-schedule | ライブ配信・動画管理 |
| **📊 戦略分析** | https://wadoyuniko.vercel.app/strategy-dashboard | KPI・戦略ダッシュボード |

## 🗓️ ローンチカウントダウン

### 📍 重要マイルストーン（2025年）
| 日付 | イベント | 重要度 | 担当 |
|------|----------|--------|------|
| **8月14日** | 🎯 大型コラボ告知・オプチャ公開 | 🔥 **最重要** | わど・中井 |
| **8月21日** | 📢 ローンチ投稿開始 | 🔥 高 | Marketing Team |
| **8月22日** | 📡 Xスペース実施 | 🔥 高 | わど |
| **8月27日** | 📡 わどユニコスペース | 🔥 高 | わど・ユニコ |
| **8月28-30日** | 🎯 セミナー実施・成約フェーズ | 🔥 **最重要** | 全チーム |

### 🚨 クリティカルパス
| 優先度 | タスク | 期限 | 状況 |
|--------|--------|------|------|
| 🔥 **最高** | 特典コンテンツ完成 | 8月10日 | 🚧 進行中 |
| 🔥 **最高** | セミナースライド・台本完成 | 8月12日 | 🚧 進行中 |
| 🔴 **高** | ローンチ動画制作 | 8月15日 | 📋 準備中 |
| 🟡 **中** | システム最適化 | 8月20日 | ✅ 完了 |

## 🎯 プロジェクト成功指標

### 📊 KPI ダッシュボード
| 指標 | 目標 | 現状 | 達成率 | 進捗 |
|------|------|------|--------|------|
| 💰 **総売上** | 3,000万円 | - | 0% | 🚧 準備中 |
| 👥 **受講者数** | 100名 | - | 0% | 🚧 準備中 |
| 📺 **セミナー登録** | 1,000名 | - | 0% | 🚧 準備中 |
| 📱 **LINE登録** | 1,200名 | - | 0% | 🚧 準備中 |

### 🏆 技術的成果
- ✅ **システム構築**: Next.js 15 統合管理システム完成
- ✅ **自動化**: CI/CD パイプライン・自動デプロイ構築
- ✅ **品質保証**: TypeScript strict mode・ESLint導入
- ✅ **UI/UX**: shadcn/ui によるモダンデザインシステム

---

## 🚀 Next Steps

### 📈 今後の展開
1. **リアルタイムKPI追跡**: 数値の自動更新システム
2. **顧客管理システム**: CRM機能の追加
3. **決済システム連携**: moshとの統合強化
4. **AI機能拡張**: Wado AI の本格運用

---

<div align="center">

**🌟 Created by wadoyuniko team**  
*Powered by Vibe Coding Launch Project v3.0*

**「AIで月収100万円を実現する」- その夢を、わどユニコが現実にします。**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kento-nakai-ai/wadoyuniko-streaming-schedule)

</div>