# 【特典】Cursor完全攻略ガイド
## AI時代の最強エディター Cursor を使いこなして開発効率を10倍にする完全マニュアル

---

## 🎯 このガイドの価値

### Before（従来のエディター）
- コード書くのに時間がかかる
- バグ修正に半日費やす
- ドキュメント作成が面倒
- リファクタリングが怖い

### After（Cursor活用後）
- コード生成が瞬時に完了
- バグ修正が5分で終わる
- ドキュメントが自動生成
- 安全なリファクタリング

**開発効率1000%向上を実現！**

---

## 📂 目次

1. [Cursor基礎知識](#cursor基礎知識)
2. [インストールと初期設定](#インストールと初期設定)
3. [AIペアプログラミング基礎](#aiペアプログラミング基礎)
4. [高度な活用テクニック](#高度な活用テクニック)
5. [Claude Code連携](#claude-code連携)
6. [生産性向上のベストプラクティス](#生産性向上のベストプラクティス)
7. [チーム開発での活用](#チーム開発での活用)
8. [トラブルシューティング](#トラブルシューティング)

---

## 🚀 Cursor基礎知識

### Cursorとは？

Cursorは**AI-first**のコードエディターです。GPT-4/Claude等のAIモデルを統合し、自然言語でコーディングができる革新的なツールです。

### 従来エディターとの違い

| 機能 | VSCode | Cursor | 優位性 |
|------|--------|--------|--------|
| **コード生成** | 拡張機能頼み | ネイティブAI | **10倍高速** |
| **エラー修正** | 手動検索 | AI自動修正 | **瞬時解決** |
| **リファクタリング** | 手動作業 | AI提案 | **安全・確実** |
| **ドキュメント** | 手動作成 | 自動生成 | **100%カバー** |

### 主要機能

#### 1. **Tab補完**
```javascript
// 入力: "function calculateTax"
// Tab補完結果:
function calculateTax(income, rate = 0.2) {
  if (income <= 0) return 0;
  return income * rate;
}
```

#### 2. **Chat機能**
```
👤 "ユーザー認証APIを作って"

🤖 FastAPIでJWT認証を実装しました:
- login_for_access_token エンドポイント
- JWT生成・検証
- パスワードハッシュ化
- セキュリティ依存関係
```

#### 3. **Composer**
```
複数ファイルを横断した大規模変更:
1. モデル定義の変更
2. API実装の更新  
3. テストコードの修正
4. ドキュメントの更新
```

---

## ⚡ インストールと初期設定

### Step 1: インストール

```bash
# 公式サイトからダウンロード
https://cursor.sh/

# または Homebrew (Mac)
brew install --cask cursor

# Windows
winget install Cursor.Cursor
```

### Step 2: 初期設定

#### 基本設定
```json
{
  "cursor.chat.model": "gpt-4",
  "cursor.tab.model": "claude-3.5-sonnet",
  "cursor.general.disableTelemetry": true,
  "cursor.cpp.enableAutoIncludes": true
}
```

#### VS Code設定移行
```bash
# 設定をインポート
Cursor > Settings > Import from VS Code

# 拡張機能同期
Extensions > Install from VS Code
```

### Step 3: APIキー設定

#### Cursor Pro契約（推奨）
```bash
月額 $20/月
- 無制限Tab補完
- 高品質AIモデル
- 優先サポート
```

#### 自分のAPIキー使用
```bash
Settings > Cursor Settings > API Keys
- OpenAI API Key
- Anthropic API Key
- Google AI API Key
```

---

## 🤖 AIペアプログラミング基礎

### Tab補完の活用

#### 1. **関数実装**
```python
# 入力: def fibonacci
# 結果: ↓
def fibonacci(n: int) -> int:
    """Calculate Fibonacci number recursively with memoization."""
    if n <= 1:
        return n
    
    cache = {}
    def fib_helper(num):
        if num in cache:
            return cache[num]
        cache[num] = fib_helper(num-1) + fib_helper(num-2)
        return cache[num]
    
    return fib_helper(n)
```

#### 2. **クラス設計**
```typescript
// 入力: class UserRepository
// 結果: ↓
class UserRepository {
    private db: Database;

    constructor(database: Database) {
        this.db = database;
    }

    async findById(id: string): Promise<User | null> {
        const result = await this.db.query(
            'SELECT * FROM users WHERE id = $1',
            [id]
        );
        return result.rows[0] || null;
    }

    async create(userData: CreateUserRequest): Promise<User> {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const result = await this.db.query(
            'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING *',
            [userData.email, hashedPassword, userData.name]
        );
        return result.rows[0];
    }
}
```

### Chat機能の活用

#### 基本的な使い方

```bash
# Chatを開く
Cmd+L (Mac) / Ctrl+L (Windows)

# ファイル指定チャット
Cmd+K (Mac) / Ctrl+K (Windows)

# コード範囲指定
選択 → Cmd+K
```

#### 実用的なプロンプト例

<details>
<summary>🔧 コード生成</summary>

```
"React Hooksを使ってTodoアプリを作って。
- useState for state management
- TypeScript対応
- 追加・削除・完了機能
- ローカルストレージ保存"
```
</details>

<details>
<summary>🐛 バグ修正</summary>

```
"このコードのメモリリークを修正して:
- useEffectのクリーンアップ関数追加
- イベントリスナーの削除
- タイマーのクリア"
```
</details>

<details>
<summary>📝 ドキュメント生成</summary>

```
"この関数のJSDocを詳細に作成して:
- パラメータの説明
- 戻り値の説明
- 使用例
- エラーハンドリング"
```
</details>

<details>
<summary>🧪 テストコード</summary>

```
"このAPIのJestテストを作成して:
- 正常系ケース
- 異常系ケース
- モック使用
- カバレッジ90%以上"
```
</details>

---

## 🎯 高度な活用テクニック

### Composer機能

Composerは**複数ファイル同時編集**の革命的機能です。

#### 使用方法
```bash
# Composer起動
Cmd+I (Mac) / Ctrl+I (Windows)

# プロンプト例
"ユーザー管理機能を実装して:
1. models/user.py - Userモデル
2. routes/users.py - CRUD API
3. tests/test_users.py - テストケース
4. docs/api.md - API仕様書"
```

#### 実践例：認証機能実装

```markdown
**プロンプト:**
"JWT認証機能を実装して"

**結果:**
✅ auth/models.py - Userモデル作成
✅ auth/routes.py - 認証エンドポイント
✅ auth/middleware.py - JWT検証ミドルウェア
✅ auth/utils.py - ユーティリティ関数
✅ tests/auth/ - 完全なテストスイート
✅ docs/auth.md - 認証API仕様書
```

### コンテキスト指定

#### ファイル指定
```bash
# 特定ファイルをコンテキストに含める
@filename.py "この設計を改善して"

# 複数ファイル指定
@user.py @auth.py "認証機能をリファクタリング"
```

#### フォルダ指定
```bash
# ディレクトリ全体をコンテキストに
@src/models/ "モデル間の関係を最適化"

# サブディレクトリも含める
@tests/**/*.py "全テストケースを更新"
```

### Rules機能

プロジェクト固有のコーディング規則を定義できます。

#### .cursorrules作成
```bash
# プロジェクトルートに作成
touch .cursorrules
```

#### ルール例
```markdown
# Python プロジェクトルール

## コーディング規約
- PEP 8に準拠
- 型ヒント必須
- docstring必須（Google形式）
- 100文字以内の行長

## アーキテクチャ
- Clean Architecture採用
- Dependency Injection使用
- Repository Pattern実装

## テスト
- pytest使用
- カバレッジ90%以上
- モック使用でDB分離

## セキュリティ
- SQLインジェクション対策
- 認証・認可の実装
- ログに機密情報含めない
```

---

## 🔗 Claude Code連携

### 連携の価値

```markdown
Cursor: 高速コード生成
Claude Code: 組織的開発管理
= 最強の開発環境
```

### 連携設定

#### 1. Claude Codeプロジェクト準備
```bash
# Claude Codeプロジェクト初期化
claude init

# エージェント設定
mkdir -p .claude/agents
cp .claude/agents/*.md ./
```

#### 2. Cursor設定
```json
{
  "cursor.general.projectRoot": "./",
  "cursor.chat.contextFiles": [
    ".claude/agents/*.md",
    "CLAUDE.md",
    ".cursorrules"
  ]
}
```

### 実践的な連携ワークフロー

#### Phase 1: 戦略立案（Claude Code）
```bash
# Claude Code起動
claude

# 戦略立案
"@ceo で新機能の戦略を立案"
"@product-manager で要件定義"
"@cto でアーキテクチャ設計"
```

#### Phase 2: 実装（Cursor）
```bash
# Cursor起動
cursor .

# Composer使用
Cmd+I: "Claude Codeの要件を基に機能実装"
```

#### Phase 3: レビュー（Claude Code + Cursor）
```bash
# Claude Code
"@qa-lead でコードレビュー"
"@security-officer でセキュリティチェック"

# Cursor
Chat: "レビュー指摘を修正"
```

### 自動連携スクリプト

```bash
#!/bin/bash
# sync-with-claude.sh

echo "🔄 Claude Code連携開始..."

# Claude Codeで戦略取得
claude "@ceo で今日のタスク確認" > today-tasks.md

# Cursorでタスク実装
cursor --chat "today-tasks.mdのタスクを実装"

echo "✅ 連携完了"
```

---

## 📈 生産性向上のベストプラクティス

### Daily Workflow

#### 朝の開始ルーチン
```bash
# 1. Claude Codeで全体状況確認
claude "@engineering-manager で今日のタスク確認"

# 2. CursorでIDE起動
cursor .

# 3. 昨日のコード確認
Chat: "昨日のコミットを分析して改善点教えて"

# 4. 今日のタスク着手
Cmd+I: "今日実装すべき機能の骨子を作成"
```

#### 実装中のテクニック

<details>
<summary>🚀 高速コード生成</summary>

```bash
# コメント駆動開発
# TODO: ユーザー認証機能を実装
# - JWT生成
# - パスワードハッシュ化
# - 権限チェック
# [Tab] → 完全実装生成

# テスト駆動開発
# この関数のテストケースを生成
# [Cmd+K] → 包括的テストスイート生成
```
</details>

<details>
<summary>🔍 デバッグ支援</summary>

```bash
# エラー調査
Chat: "このエラーの原因と修正方法教えて"
[エラーメッセージをコピペ]

# パフォーマンス分析
Chat: "この関数の実行時間を最適化して"
[問題のコードを選択]
```
</details>

<details>
<summary>📚 ドキュメント自動化</summary>

```bash
# API仕様書生成
Chat: "このAPIのOpenAPI仕様を作成"

# README更新
Chat: "プロジェクトのREADMEを最新の状態に更新"

# コメント追加
Cmd+K: "このコードに詳細なコメントを追加"
```
</details>

### プロンプトライブラリ

#### 🎨 UI/UX関連
```
"レスポンシブでアクセシブルなログインフォームを作成:
- モバイルファースト
- WCAG 2.1準拠
- バリデーション付き
- ローディング状態
- エラーハンドリング"
```

#### ⚡ パフォーマンス最適化
```
"このReactコンポーネントを最適化:
- memo化
- useMemo/useCallback活用
- 仮想化実装
- 遅延読み込み
- Bundle Analyzer推奨"
```

#### 🔒 セキュリティ強化
```
"このAPIのセキュリティを強化:
- 入力検証
- SQLインジェクション対策
- XSS対策
- レート制限
- CORS設定"
```

#### 🧪 テスト網羅
```
"包括的なテストスイートを作成:
- ユニットテスト (90%カバレッジ)
- 統合テスト
- E2Eテスト
- パフォーマンステスト
- セキュリティテスト"
```

---

## 👥 チーム開発での活用

### チーム設定

#### 共通Rules設定
```bash
# チーム共通の .cursorrules
git add .cursorrules
git commit -m "feat: Add team Cursor rules"
git push
```

#### コーディング規約統一
```markdown
# .cursorrules

## チーム規約
- ESLint + Prettier使用
- 型安全性重視（TypeScript）
- コミットメッセージ: Conventional Commits
- PR前に自動テスト実行必須

## レビュー基準
- 可読性
- 保守性
- パフォーマンス
- セキュリティ
- テストカバレッジ
```

### ペアプログラミング

#### リアルタイム共同編集
```bash
# Live Share使用
Ctrl+Shift+P → "Live Share: Start Collaboration Session"

# Cursor AI活用
Chat: "このコードの改善案を3つ提案して"
→ ペアと議論しながら最適解選択
```

#### コードレビューAI活用
```bash
# プルリクエスト前チェック
Chat: "この変更をコードレビューして:
- ベストプラクティス遵守
- パフォーマンス影響
- セキュリティリスク
- テストカバレッジ"
```

### 知識共有

#### AIドキュメント生成
```bash
# アーキテクチャ図生成
Chat: "このシステム構成をMermaidで図示"

# オンボーディング資料
Chat: "新メンバー向けのセットアップガイド作成"

# トラブルシューティング
Chat: "よくある問題と解決策のFAQ作成"
```

---

## ❌ トラブルシューティング

### よくある問題と解決

#### Q1: Tab補完が動作しない

**症状:** Tabを押しても何も起こらない

**解決策:**
```bash
# 1. 設定確認
Settings > Cursor > Tab: Enabled ✅

# 2. モデル設定確認
Tab Model: claude-3.5-sonnet (推奨)

# 3. API制限確認
Usage > Token Usage確認

# 4. 再起動
Cmd+Shift+P > "Reload Window"
```

#### Q2: Chat応答が遅い/エラー

**症状:** AIの応答に時間がかかる、またはエラー

**解決策:**
```bash
# 1. ネットワーク確認
ping api.openai.com

# 2. API Key確認
Settings > API Keys > 有効性テスト

# 3. 使用量確認
Dashboard > Usage確認

# 4. モデル変更
Chat Model: gpt-4 → gpt-3.5-turbo
```

#### Q3: Composerが期待通りに動作しない

**症状:** 複数ファイル編集が不完全

**解決策:**
```bash
# 1. プロンプト改善
❌ "コードを修正"
✅ "users.py, tests/test_users.py, docs/api.mdを更新"

# 2. コンテキスト明確化
@existing_file.py "この設計を基に新機能追加"

# 3. 段階的実行
Phase 1: モデル作成
Phase 2: API実装
Phase 3: テスト追加
```

#### Q4: VSCode拡張機能が動作しない

**症状:** インストールした拡張機能が使えない

**解決策:**
```bash
# 1. VS Code互換性確認
Extensions > "Compatible with VS Code"

# 2. 手動インストール
.vsix ファイルから直接インストール

# 3. 代替拡張機能検索
Cursor Extensions Marketplace確認
```

### パフォーマンス最適化

#### メモリ使用量削減
```bash
# 大きなファイルの分割
Chat: "この5000行のファイルを機能別に分割"

# インデックス最適化
Settings > Search > Index Configuration

# 自動保存無効化（必要に応じて）
Auto Save: off
```

#### 応答速度向上
```bash
# 軽量モデル使用
Tab Model: claude-instant-1
Chat Model: gpt-3.5-turbo

# コンテキスト制限
Chat Context: 最新20メッセージ
```

---

## 🔗 参考リソース

### 公式リソース
- [Cursor公式サイト](https://cursor.sh/)
- [公式ドキュメント](https://cursor.sh/docs)
- [Discord コミュニティ](https://discord.gg/cursor)

### コミュニティ
- [Reddit - r/cursor](https://reddit.com/r/cursor)
- [GitHub Discussions](https://github.com/getcursor/cursor/discussions)
- [YouTube チュートリアル](https://youtube.com/cursor-tutorials)

### 学習リソース
- 初心者向けガイド
- 上級者向けTips
- 業界別活用事例

---

## 🎉 まとめ

### Cursorで実現できること

✅ **開発速度10倍向上**
- コード生成の自動化
- バグ修正の高速化
- リファクタリングの安全性

✅ **品質向上**
- AI支援のコードレビュー
- 自動テスト生成
- セキュリティチェック

✅ **学習効率向上**
- ベストプラクティス提案
- 即座の解説とサポート
- 新技術の迅速習得

### Next Steps

1. **今すぐCursorをダウンロード**
2. **本ガイドの設定を実行**
3. **小さなプロジェクトで練習**
4. **チーム導入の検討**
5. **Claude Code連携実装**

**今日から始めて、明日には開発効率が劇的に向上しているでしょう！**

---

*Cursor完全攻略ガイド - AI時代の開発者必携*  
*最終更新: 2025年1月11日*  
*次回アップデート予定: 2025年2月11日*