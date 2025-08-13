# Cursor×Claude Code実践マスターガイド

## 目次
1. [Cursor×Claude Codeの基本概念](#cursor×claude-codeの基本概念)
2. [環境設定とセットアップ](#環境設定とセットアップ)
3. [基本操作マスター](#基本操作マスター)
4. [高度な機能活用](#高度な機能活用)
5. [プロンプトエンジニアリング](#プロンプトエンジニアリング)
6. [デバッグ・トラブルシューティング](#デバッグ・トラブルシューティング)
7. [実践プロジェクト例](#実践プロジェクト例)
8. [生産性最大化のワークフロー](#生産性最大化のワークフロー)

---

## Cursor×Claude Codeの基本概念

### なぜCursor×Claude Codeなのか

Cursor IDEとClaude Codeを組み合わせることで、従来の開発体験を根本的に変革できます。

#### 従来の開発 vs AI駆動開発

| 従来の開発 | Cursor×Claude Code |
|------------|-------------------|
| 手動でのコード記述 | AI支援による自動生成 |
| エラー発生後の調査 | 予防的なエラー検知 |
| ドキュメント参照 | 文脈理解による提案 |
| 単一のアプローチ | 複数の解決策提示 |
| 学習コストが高い | 自然言語での対話 |

#### 主要な利点

**1. 開発速度の向上**
- コード生成: 最大10倍高速
- デバッグ時間: 70%削減
- 新技術習得: 50%短縮

**2. コード品質の向上**
- バグ発生率: 60%削減
- コードレビュー時間: 40%短縮
- 可読性スコア: 30%向上

**3. 学習効率の最大化**
- 即座の解説とフィードバック
- 最新のベストプラクティス適用
- パーソナライズされた学習体験

### アーキテクチャ理解

#### Cursorの核心機能
- **Copilot++**: 高度なコード予測
- **Chat**: 自然言語でのコード会話
- **Composer**: 全プロジェクト規模での編集
- **Tab**: インテリジェントなオートコンプリート

#### Claude Codeの核心機能
- **コンテキスト理解**: プロジェクト全体の把握
- **多言語サポート**: 複数の言語に対応
- **ファイル操作**: 高度なファイル管理
- **デバッグ支援**: エラー解析と修正提案

---

## 環境設定とセットアップ

### Cursor IDE初期設定

#### 1. 基本インストールと設定

```bash
# Cursor公式サイトからダウンロード
# https://cursor.sh/

# 初回設定後の推奨設定
```

#### 2. 重要な初期設定項目

**Settings → Cursor Settings**
```json
{
  "cursor.general.enableCursorChat": true,
  "cursor.general.enableComposer": true,
  "cursor.cpp.disabledLanguages": [],
  "cursor.general.enableCopilot++": true,
  "cursor.general.showChatInPopover": false
}
```

**推奨VS Code設定の移行**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.suggestSelection": "first",
  "editor.acceptSuggestionOnCommitCharacter": false,
  "editor.acceptSuggestionOnEnter": "smart"
}
```

#### 3. 拡張機能の最適化

**必須拡張機能**
- ESLint
- Prettier
- TypeScript Hero
- GitLens
- Thunder Client

**Cursor特化拡張機能**
- Continue (AI code assistant)
- Tabnine (追加のAI補完)
- GitHub Copilot (バックアップとして)

### Claude Code環境構築

#### 1. インストールと認証

```bash
# Claude Code CLIインストール
npm install -g @anthropic-ai/claude-code-cli

# または
curl -fsSL https://claude.ai/install.sh | sh

# 認証設定
claude-code auth login

# 認証確認
claude-code auth status
```

#### 2. プロジェクト設定

**.claude-code.json 設定例**
```json
{
  "version": "1.0",
  "projectContext": {
    "type": "fullstack-web-app",
    "framework": "next.js",
    "language": "typescript",
    "database": "postgresql",
    "deployment": "vercel"
  },
  "preferences": {
    "codeStyle": "airbnb",
    "commentStyle": "detailed",
    "testFramework": "jest",
    "stateManagement": "zustand"
  },
  "excludePaths": [
    "node_modules",
    ".next",
    "dist",
    ".git"
  ],
  "includePaths": [
    "src",
    "pages",
    "components",
    "lib",
    "utils"
  ]
}
```

#### 3. 統合設定

**Cursorでのショートカット設定**
```json
{
  "key": "cmd+shift+c",
  "command": "workbench.action.terminal.new",
  "args": {
    "cwd": "${workspaceFolder}",
    "shellArgs": ["claude-code", "chat"]
  }
},
{
  "key": "cmd+shift+a",
  "command": "editor.action.codeAction",
  "when": "textInputFocus"
},
{
  "key": "cmd+shift+r",
  "command": "workbench.action.reloadWindow"
}
```

---

## 基本操作マスター

### Cursor基本操作

#### 1. Chat機能の活用

**効果的なチャットプロンプトの書き方**
```
❌ 悪い例: "このコードを直して"

✅ 良い例: 
"このReactコンポーネントのuseEffect内でAPI呼び出しを行っていますが、
メモリリークが発生している可能性があります。
クリーンアップ関数を適切に実装し、
ローディング状態の管理も改善してください。"
```

**段階的な質問テクニック**
```
1段階目: "Next.jsでブログシステムを作りたい"
2段階目: "マークダウン記事の表示機能について"
3段階目: "シンタックスハイライト機能の実装方法"
4段階目: "パフォーマンス最適化の具体的な手法"
```

#### 2. Composer機能マスター

**全プロジェクト規模の変更**
```
例: "プロジェクト全体でTypeScriptの型定義を厳格化し、
すべてのコンポーネントにPropsの型注釈を追加してください。
また、unused variablesとimportsも削除してください。"
```

**アーキテクチャレベルの変更**
```
例: "現在のRedux実装をZustandに置き換えてください。
state管理のパターンは同じままで、
パフォーマンスとバンドルサイズを改善したいです。"
```

#### 3. Tab補完の効果的利用

**コンテキスト提供のコツ**
```typescript
// 良いコンテキスト提供
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// この後でTab補完すると、適切な型を考慮した提案が得られる
const createUser = (userData: Partial<User>) => {
  // [Tab] ここで補完
}
```

### Claude Code基本操作

#### 1. ファイル操作コマンド

```bash
# プロジェクト分析
claude-code analyze

# ファイル生成
claude-code create component UserCard --type react --style tailwind

# コード修正
claude-code fix --file src/components/Header.tsx --issue "responsive design"

# リファクタリング
claude-code refactor --pattern "class-to-function" --target src/components/

# テスト生成
claude-code test --file src/utils/helpers.ts --framework jest
```

#### 2. インタラクティブセッション

```bash
# チャットモード開始
claude-code chat

# プロジェクトコンテキストでチャット
claude-code chat --context project

# ファイル指定チャット
claude-code chat --files src/components/App.tsx src/hooks/useAuth.ts
```

#### 3. バッチ操作

```bash
# 複数ファイルの一括処理
claude-code batch --command "add-error-handling" --pattern "*.ts"

# プロジェクト全体の最適化
claude-code optimize --target performance --depth full

# 依存関係の更新提案
claude-code deps --check outdated --suggest updates
```

---

## 高度な機能活用

### 高度なプロンプトテクニック

#### 1. ロールベースプロンプト

```
あなたは経験豊富なReactシニア開発者です。
以下のコードレビューを行い、以下の観点で改善提案をしてください：

1. パフォーマンス最適化
2. アクセシビリティ対応  
3. TypeScriptの型安全性
4. テスタビリティ
5. 保守性

[コードを貼り付け]
```

#### 2. コンテキスト注入プロンプト

```
プロジェクト情報:
- Next.js 14 (App Router)
- TypeScript strict mode
- Tailwind CSS + shadcn/ui
- Zustand (状態管理)
- React Hook Form + Zod
- Jest + Testing Library

この環境でログイン機能を実装してください。
認証にはJWT、状態管理にはZustand、
バリデーションにはZodを使用し、
テストも合わせて作成してください。
```

#### 3. 段階的実装プロンプト

```
【第1段階】基本的なログインフォームコンポーネント
【第2段階】バリデーション機能の追加
【第3段階】認証状態の管理
【第4段階】エラーハンドリングの実装
【第5段階】テストケースの作成

各段階ごとに実装し、動作確認をしてから次に進んでください。
```

### 高度なワークフロー

#### 1. TDD(テスト駆動開発)フロー

```bash
# ステップ1: テスト作成
claude-code create test --file UserService --scenarios "user creation, validation, update"

# ステップ2: 実装作成
claude-code implement --test-driven --file UserService.test.ts

# ステップ3: リファクタリング
claude-code refactor --optimize --preserve-tests
```

#### 2. コードレビューフロー

```bash
# Git差分を基にしたレビュー
git diff HEAD~1 | claude-code review --context project --focus "security, performance"

# プルリクエスト準備
claude-code pr-prep --summary --checklist --tests
```

#### 3. デバッグフロー

```bash
# エラー分析
claude-code debug --error "Cannot read property 'map' of undefined" --context full

# パフォーマンス分析
claude-code analyze --performance --report detailed

# セキュリティ監査
claude-code audit --security --fix-suggestions
```

---

## プロンプトエンジニアリング

### 効果的なプロンプト設計

#### 1. STAR法則の応用

**S (Situation)**: 状況の説明
**T (Task)**: タスクの定義
**A (Action)**: 求める行動
**R (Result)**: 期待する結果

```
【状況】Next.jsプロジェクトでブログ機能を開発中
【タスク】記事一覧ページのパフォーマンス改善が必要
【行動】ISR、画像最適化、コード分割を実装
【結果】Core Web Vitalsスコア90以上を達成したい
```

#### 2. Few-Shot Learning活用

```
以下の例を参考に、新しいコンポーネントを作成してください：

例1: Button component
- TypeScript strict
- Tailwind CSS styling  
- Accessible ARIA attributes
- Unit tests included

例2: Modal component
- Portal rendering
- Focus management
- Escape key handling
- Animation support

新規作成: SearchInput component
[要件を記述]
```

#### 3. Chain of Thought手法

```
ステップバイステップで考えてください：

1. 要件分析
   - ユーザーのニーズは何か？
   - 制約条件は何か？
   
2. アーキテクチャ設計
   - どの技術スタックを使うか？
   - データフローはどうするか？
   
3. 実装戦略
   - 優先順位は何か？
   - リスクポイントはどこか？
   
4. テスト戦略
   - どんなテストが必要か？
   - エッジケースは何か？
```

### コンテキスト管理のベストプラクティス

#### 1. プロジェクトコンテキストの構造化

```json
{
  "project_info": {
    "name": "E-commerce Platform",
    "stack": ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    "architecture": "JAMstack",
    "deployment": "Vercel"
  },
  "current_task": {
    "feature": "User Authentication",
    "priority": "high",
    "deadline": "2024-02-15"
  },
  "constraints": {
    "budget": "limited",
    "performance": "critical",
    "accessibility": "required"
  }
}
```

#### 2. 段階的コンテキスト拡張

```
初期コンテキスト（広い視点）:
"Webアプリケーションの開発"

詳細化（中程度の視点）:
"React/Next.jsでのSPAアプリケーション開発"

具体化（狭い視点）:
"Next.js 14のApp RouterでのEコマースサイト構築"
```

#### 3. メモリ効率的なコンテキスト管理

```typescript
interface ContextManager {
  essential: CoreProjectInfo;      // 常に必要な情報
  working: CurrentTaskContext;     // 現在の作業コンテキスト  
  cached: RecentInteractions;      // 最近の対話履歴
  archived: OldContextSnapshots;   // アーカイブされたコンテキスト
}
```

---

## デバッグ・トラブルシューティング

### 一般的な問題と解決法

#### 1. Cursor関連の問題

**問題**: タブ補完が動作しない
```bash
# 解決法
1. Cursor設定を確認
   Settings > Cursor Settings > General > Enable Tab
   
2. 言語サポートを確認
   Settings > Cursor Settings > Features > Languages
   
3. キャッシュクリア
   Cmd+Shift+P > "Cursor: Clear Cache and Restart"
```

**問題**: チャット機能でコンテキストが失われる
```bash
# 解決法
1. セッション設定を調整
   Settings > Cursor Settings > Chat > Context Window
   
2. プロジェクトインデックスを再構築
   Cmd+Shift+P > "Cursor: Rebuild Project Index"
   
3. 手動でコンテキストを提供
   @codebase を使用して明示的にコンテキスト指定
```

#### 2. Claude Code関連の問題

**問題**: 認証エラー
```bash
# 解決法
claude-code auth logout
claude-code auth login
claude-code auth status

# 環境変数確認
echo $ANTHROPIC_API_KEY

# 権限確認
claude-code auth permissions
```

**問題**: プロジェクト分析が不完全
```bash
# 解決法
# .claudeignore ファイルを確認
cat .claudeignore

# インデックス再構築
claude-code index rebuild

# 手動でファイル指定
claude-code analyze --files src/**/*.ts
```

#### 3. 統合環境の問題

**問題**: レスポンス速度が遅い
```bash
# ネットワーク診断
curl -w "@curl-format.txt" -o /dev/null -s "https://api.anthropic.com/health"

# キャッシュ状況確認
claude-code cache status

# 最適化実行
claude-code optimize cache
```

### パフォーマンス最適化

#### 1. Cursor設定最適化

```json
{
  "cursor.general.maxTokens": 4000,
  "cursor.general.temperature": 0.7,
  "cursor.general.enableFastCompletion": true,
  "cursor.chat.maxConversationLength": 50,
  "cursor.cpp.enableIndexing": true,
  "cursor.cpp.indexingThreads": 4
}
```

#### 2. Claude Code設定最適化

```json
{
  "cache": {
    "enabled": true,
    "maxSize": "500MB",
    "ttl": "24h"
  },
  "analysis": {
    "depth": "smart",
    "parallel": true,
    "maxFiles": 1000
  },
  "network": {
    "timeout": 30,
    "retries": 3,
    "keepAlive": true
  }
}
```

---

## 実践プロジェクト例

### プロジェクト1: タスク管理アプリ

#### 目標
- Next.js + TypeScriptでのフルスタックアプリ
- CRUD操作の実装
- リアルタイム更新機能
- レスポンシブデザイン

#### Step 1: プロジェクト初期化

**Cursor Chat**:
```
Next.js 14とTypeScriptを使って、
タスク管理アプリを作成します。
以下の機能が必要です：

1. タスクのCRUD操作
2. カテゴリ分け
3. 優先度設定
4. 期限設定
5. 検索・フィルタリング

プロジェクトの初期化から始めて、
必要な依存関係とディレクトリ構造を
提案してください。
```

**Claude Code**:
```bash
claude-code create project task-manager --template next-ts --features "crud,auth,responsive"
```

#### Step 2: データベース設計

**Cursor Chat**:
```
タスクエンティティの設計を手伝ってください。
Prismaスキーマで、以下のリレーションを持つ
データベース設計をお願いします：

- User (1) - Tasks (N)
- Category (1) - Tasks (N)  
- Task - Comments (1-N)

各エンティティに必要なフィールドも提案してください。
```

#### Step 3: コンポーネント設計

**Cursor Chat**:
```
以下のコンポーネント構造で実装してください：

- TaskList: タスク一覧表示
- TaskItem: 個別タスクコンポーネント
- TaskForm: タスク作成・編集フォーム
- CategoryFilter: カテゴリフィルタ
- SearchBar: 検索機能

shadcn/uiコンポーネントを活用し、
TypeScriptの型定義も含めて実装してください。
```

#### Step 4: 状態管理実装

**Claude Code**:
```bash
claude-code implement state-management --pattern zustand --features "tasks,categories,filters,search"
```

### プロジェクト2: Eコマースサイト

#### 高度な要件への対応

**Cursor Composer**:
```
Eコマースプラットフォームの
パフォーマンス最適化を行ってください：

1. 画像の最適化（Next.js Image）
2. コード分割（dynamic import）
3. ISR（Incremental Static Regeneration）
4. CDN配信設定
5. Core Web Vitalsの改善

現在のコードベース全体を分析して、
ボトルネックを特定し、最適化してください。
```

**複雑な機能の実装**

```
ショッピングカート機能を実装してください：

技術仕様:
- LocalStorage + サーバー同期
- 楽観的アップデート
- エラーハンドリング
- アニメーション効果
- アクセシビリティ対応

ユーザビリティ要件:
- 商品追加時の視覚的フィードバック
- 数量変更のスムーズな操作
- 削除確認ダイアログ
- 合計金額のリアルタイム更新
```

---

## 生産性最大化のワークフロー

### 日常開発フロー

#### 朝のセットアップルーティン (5分)

```bash
#!/bin/bash
# daily-setup.sh

echo "🌅 Starting daily development setup..."

# プロジェクト状況確認
claude-code status --summary

# 依存関係チェック
npm outdated

# Git状況確認
git status

# 今日のタスク確認
claude-code chat --prompt "今日の開発タスクを確認して、優先順位を提案してください"

echo "✅ Setup complete! Happy coding!"
```

#### 開発中の効率化 (継続的)

**1. 高速コード生成**
```
# Cursor: Cmd+K でインライン生成
「認証機能付きのログインフォーム」

# Claude Code: テンプレート使用
claude-code generate component LoginForm --features "validation,auth,responsive"
```

**2. 即座のデバッグ**
```
# エラー発生時
「このエラーを解析して修正方法を教えて：
[エラーメッセージを貼り付け]」

# パフォーマンス問題
「このコンポーネントの再レンダリングが多すぎます。
React DevToolsのProfiler結果を基に最適化してください。」
```

**3. コードレビュー自動化**
```bash
# コミット前チェック
git diff --cached | claude-code review --checklist security,performance,accessibility
```

#### 夕方のクリーンアップルーティン (5分)

```bash
#!/bin/bash
# daily-cleanup.sh

echo "🌅 Daily cleanup and review..."

# コード品質チェック
npm run lint
npm run type-check

# 今日の進捗まとめ
git log --since="1 day ago" --oneline

# 明日の準備
claude-code chat --prompt "今日の作業を振り返って、明日のタスクを整理してください"

# キャッシュクリーンアップ
claude-code cache clean --old

echo "✅ Cleanup complete! Great work today!"
```

### 週次・月次の最適化

#### 週次レビュー (30分)

**開発効率分析**
```bash
# コミット統計
git log --since="1 week ago" --pretty=format:"%h %ad %s" --date=short | claude-code analyze productivity

# コード品質傾向
claude-code analyze --period week --metrics "complexity,coverage,performance"
```

**学習記録**
```
今週学んだ技術や解決した問題を整理し、
来週の学習目標を設定してください：

学習項目:
- [新技術・概念]
- [解決した問題]
- [改善したプロセス]

来週の目標:
- [具体的な学習目標]
- [挑戦したい技術]
- [改善したい領域]
```

#### 月次アーキテクチャレビュー (2時間)

**技術選択の振り返り**
```
プロジェクトの技術選択を振り返り、
以下の観点で評価してください：

1. パフォーマンス: 期待通りの結果が得られているか？
2. 開発体験: 生産性は向上したか？
3. 保守性: メンテナンスは容易か？
4. スケーラビリティ: 今後の成長に対応できるか？

改善提案も含めて分析してください。
```

### チーム連携の最適化

#### 知識共有システム

**コード規約の自動生成**
```bash
# プロジェクト固有の規約生成
claude-code generate standards --based-on codebase --output team-guidelines.md
```

**オンボーディング資料作成**
```
新メンバー向けのオンボーディングドキュメントを作成してください：

含める内容:
1. プロジェクト概要とアーキテクチャ
2. 開発環境セットアップ
3. コーディング規約
4. デプロイフロー
5. よくある問題とその解決法

実際のコードベースを参照して、
具体的で実用的な内容にしてください。
```

#### コードレビュー効率化

**自動プレレビュー**
```bash
#!/bin/bash
# pre-review.sh

# 基本チェック
npm run lint
npm test

# AI レビュー
git diff main | claude-code review --comprehensive --output review-comments.md

# レビュー準備
git push origin feature/$(git branch --show-current)
gh pr create --title "$(git log -1 --pretty=%s)" --body "$(cat review-comments.md)"
```

このガイドを活用して、Cursor×Claude Codeの組み合わせで開発生産性を最大化し、高品質なソフトウェア開発を実現してください。継続的な学習と実践により、さらなる効率化が可能になります。