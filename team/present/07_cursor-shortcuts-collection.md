# 【特典】Cursorショートカット完全コレクション
## 開発速度を劇的に向上させる必須ショートカット集

---

## 🎯 このガイドの価値

### 作業効率の変化

**Before（ショートカット未使用）**
- マウスで右クリック → メニュー選択（3秒）
- ファイル検索でフォルダを手動探索（30秒）
- コードフォーマットを手動実行（10秒）

**After（ショートカット活用）**
- 1秒でコマンド実行
- 瞬時にファイル発見
- 自動フォーマット

**作業効率300%向上！**

---

## 📂 目次

1. [基本ショートカット](#基本ショートカット)
2. [AI機能ショートカット](#ai機能ショートカット)
3. [ナビゲーション](#ナビゲーション)
4. [編集・選択](#編集選択)
5. [検索・置換](#検索置換)
6. [デバッグ・ターミナル](#デバッグターミナル)
7. [カスタムショートカット](#カスタムショートカット)
8. [チートシート](#チートシート)

---

## ⚡ 基本ショートカット

### ファイル操作

| ショートカット | 機能 | 使用頻度 |
|---------------|------|----------|
| `Cmd+N` / `Ctrl+N` | 新規ファイル | ⭐⭐⭐⭐⭐ |
| `Cmd+O` / `Ctrl+O` | ファイルを開く | ⭐⭐⭐⭐ |
| `Cmd+S` / `Ctrl+S` | 保存 | ⭐⭐⭐⭐⭐ |
| `Cmd+Shift+S` / `Ctrl+Shift+S` | 名前を付けて保存 | ⭐⭐⭐ |
| `Cmd+W` / `Ctrl+W` | タブを閉じる | ⭐⭐⭐⭐ |
| `Cmd+Shift+T` / `Ctrl+Shift+T` | 最近閉じたタブを復元 | ⭐⭐⭐ |

### 基本編集

| ショートカット | 機能 | 使用頻度 |
|---------------|------|----------|
| `Cmd+Z` / `Ctrl+Z` | 元に戻す | ⭐⭐⭐⭐⭐ |
| `Cmd+Shift+Z` / `Ctrl+Y` | やり直し | ⭐⭐⭐⭐ |
| `Cmd+C` / `Ctrl+C` | コピー | ⭐⭐⭐⭐⭐ |
| `Cmd+X` / `Ctrl+X` | 切り取り | ⭐⭐⭐⭐ |
| `Cmd+V` / `Ctrl+V` | 貼り付け | ⭐⭐⭐⭐⭐ |
| `Cmd+A` / `Ctrl+A` | 全選択 | ⭐⭐⭐⭐ |

---

## 🤖 AI機能ショートカット

### Cursor固有のAI機能

| ショートカット | 機能 | 詳細 |
|---------------|------|------|
| `Cmd+L` / `Ctrl+L` | **Chatを開く** | 新規チャット開始 |
| `Cmd+K` / `Ctrl+K` | **インライン編集** | 選択範囲をAIで編集 |
| `Cmd+I` / `Ctrl+I` | **Composer** | 複数ファイル同時編集 |
| `Tab` | **AI補完実行** | AI提案を受け入れ |
| `Esc` | **AI提案拒否** | 提案をキャンセル |
| `Cmd+Shift+L` / `Ctrl+Shift+L` | **チャット履歴** | 過去のチャット確認 |

### AI機能詳細活用

#### 🔥 Cmd+L（Chat）の活用パターン

```bash
# コード生成
"React Hooksを使ったTodoアプリを作成"

# バグ修正
"このエラーの原因と解決方法を教えて"
[エラーメッセージを貼り付け]

# リファクタリング
"このコードをより読みやすく改善"
[対象コードを選択してからCmd+L]

# テスト作成
"この関数の包括的なテストケースを作成"

# ドキュメント生成
"この API の OpenAPI 仕様書を作成"
```

#### ⚡ Cmd+K（インライン編集）の実践例

```javascript
// BEFORE: 選択してCmd+K
function calculate(x, y) {
    return x + y;
}

// プロンプト: "エラーハンドリングとJSDocを追加"

// AFTER:
/**
 * 二つの数値を加算します
 * @param {number} x - 最初の数値
 * @param {number} y - 二番目の数値
 * @returns {number} 加算結果
 * @throws {TypeError} 引数が数値でない場合
 */
function calculate(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('引数は数値である必要があります');
    }
    return x + y;
}
```

#### 🎯 Cmd+I（Composer）の実践例

```bash
# プロンプト例
"ユーザー認証機能を実装:
1. models/user.py - SQLAlchemyモデル
2. routes/auth.py - FastAPI認証ルート
3. services/auth_service.py - 認証ロジック
4. tests/test_auth.py - pytest テストケース"

# 結果: 4つのファイルが同時に作成・編集される
```

---

## 🧭 ナビゲーション

### ファイル・フォルダ移動

| ショートカット | 機能 | Tips |
|---------------|------|------|
| `Cmd+P` / `Ctrl+P` | **クイックオープン** | ファイル名検索 |
| `Cmd+Shift+P` / `Ctrl+Shift+P` | **コマンドパレット** | 全機能へのアクセス |
| `Cmd+Shift+E` / `Ctrl+Shift+E` | エクスプローラー表示 | ファイルツリー |
| `Cmd+Shift+F` / `Ctrl+Shift+F` | **全体検索** | プロジェクト全体検索 |
| `Cmd+Shift+G` / `Ctrl+Shift+G` | Git View | バージョン管理 |

### エディタ内移動

| ショートカット | 機能 | 使用場面 |
|---------------|------|----------|
| `Cmd+G` / `Ctrl+G` | **行番号へジャンプ** | 大きなファイル移動 |
| `Cmd+F` / `Ctrl+F` | ファイル内検索 | 特定文字列検索 |
| `Cmd+Shift+O` / `Ctrl+Shift+O` | **シンボル検索** | 関数・クラス検索 |
| `F12` | **定義へジャンプ** | 関数定義確認 |
| `Alt+F12` / `Opt+F12` | 定義をピーク表示 | インライン確認 |
| `Shift+F12` | **参照箇所検索** | 使用箇所確認 |

### 実践的ナビゲーション

#### 🔍 高速ファイル検索テクニック

```bash
# Cmd+P 活用法

# 部分一致検索
"user" → user.py, UserModel.js, userService.ts

# ファジー検索
"usrmdl" → UserModel.js

# フォルダ指定
"src/user" → src/components/User.jsx

# 拡張子指定
"*.test.js" → 全テストファイル
```

#### ⚡ シンボル検索（Cmd+Shift+O）活用

```typescript
// 大きなファイルでの関数検索
class UserService {
  createUser() { ... }      // "@createUser" で直接ジャンプ
  updateUser() { ... }      // "@updateUser" で直接ジャンプ
  deleteUser() { ... }      // "@deleteUser" で直接ジャンプ
  validateUser() { ... }    // "@validateUser" で直接ジャンプ
}
```

---

## ✏️ 編集・選択

### 高速選択

| ショートカット | 機能 | 実用例 |
|---------------|------|-------|
| `Cmd+D` / `Ctrl+D` | **同一単語を追加選択** | 変数名一括変更 |
| `Cmd+Shift+L` / `Ctrl+Shift+L` | **全ての同一単語を選択** | 一括置換 |
| `Alt+Click` / `Opt+Click` | **マルチカーソル** | 複数箇所同時編集 |
| `Cmd+Alt+↑/↓` / `Ctrl+Alt+↑/↓` | **列選択** | 縦方向選択 |
| `Shift+Alt+→/←` / `Shift+Alt+→/←` | **範囲選択拡張** | スマート選択 |

### 行編集

| ショートカット | 機能 | 使用場面 |
|---------------|------|----------|
| `Cmd+Shift+K` / `Ctrl+Shift+K` | **行削除** | 不要コード削除 |
| `Alt+↑/↓` / `Alt+↑/↓` | **行移動** | コード並び替え |
| `Shift+Alt+↑/↓` / `Shift+Alt+↑/↓` | **行複製** | 類似コード作成 |
| `Cmd+Enter` / `Ctrl+Enter` | **行下に新行** | コード挿入 |
| `Cmd+Shift+Enter` / `Ctrl+Shift+Enter` | **行上に新行** | コード挿入 |

### 実践的編集テクニック

#### 🎯 マルチカーソル活用例

```javascript
// BEFORE
const firstName = 'John';
const lastName = 'Doe';
const email = 'john@example.com';

// Cmd+D で userName を選択 → 全選択
// AFTER（一括編集）
const userFirstName = 'John';
const userLastName = 'Doe';
const userEmail = 'john@example.com';
```

#### ⚡ 列選択（Cmd+Alt+↑/↓）実例

```python
# BEFORE
user_name = "John"
user_email = "john@example.com"
user_age = 30

# 列選択で "user_" を選択削除
# AFTER
name = "John"
email = "john@example.com"
age = 30
```

---

## 🔍 検索・置換

### 検索機能

| ショートカット | 機能 | 高度な使用法 |
|---------------|------|-------------|
| `Cmd+F` / `Ctrl+F` | ファイル内検索 | 正規表現対応 |
| `Cmd+Shift+F` / `Ctrl+Shift+F` | **プロジェクト全体検索** | 複数ファイル横断 |
| `Cmd+H` / `Ctrl+H` | **置換** | 一括置換 |
| `Cmd+Shift+H` / `Ctrl+Shift+H` | **全体置換** | プロジェクト全体置換 |
| `F3` / `Ctrl+G` | **次を検索** | 検索結果移動 |
| `Shift+F3` / `Shift+Ctrl+G` | **前を検索** | 逆方向移動 |

### 正規表現検索

#### 実用的な正規表現パターン

```bash
# 検索ボックスで正規表現を有効化: Alt+R / Opt+R

# メールアドレス検索
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}

# 日付検索 (YYYY-MM-DD)
\d{4}-\d{2}-\d{2}

# 関数定義検索
function\s+\w+\s*\(

# TODO/FIXME検索
(TODO|FIXME|NOTE|BUG):.*

# 空行検索
^$

# 行末の空白検索
\s+$
```

### 高度な置換

#### 置換での正規表現活用

```bash
# キャプチャグループを使った置換

# BEFORE検索: (\w+)\s*=\s*require\(['"](.+)['"]\)
# AFTER置換: import $1 from '$2'

# 実行結果:
const fs = require('fs') → import fs from 'fs'
const path = require('path') → import path from 'path'
```

---

## 🐛 デバッグ・ターミナル

### デバッグ

| ショートカット | 機能 | 使用場面 |
|---------------|------|----------|
| `F5` | **デバッグ開始** | アプリ実行 |
| `Shift+F5` | **デバッグ停止** | 実行終了 |
| `Ctrl+Shift+F5` / `Cmd+Shift+F5` | **再起動** | リロード実行 |
| `F9` | **ブレークポイント** | 停止点設定 |
| `F10` | **ステップオーバー** | 次の行へ |
| `F11` | **ステップイン** | 関数内部へ |

### ターミナル

| ショートカット | 機能 | 活用法 |
|---------------|------|-------|
| `Ctrl+\`` | **ターミナル表示切替** | コマンド実行 |
| `Cmd+Shift+\`` / `Ctrl+Shift+\`` | **新規ターミナル** | 複数ターミナル |
| `Cmd+\` / `Ctrl+\`` | **ターミナル間切替** | タブ移動 |

### 問題パネル

| ショートカット | 機能 | 詳細 |
|---------------|------|------|
| `Cmd+Shift+M` / `Ctrl+Shift+M` | **問題パネル表示** | エラー・警告確認 |
| `F8` | **次の問題へ** | エラー間移動 |
| `Shift+F8` | **前の問題へ** | 逆方向移動 |

---

## ⚙️ カスタムショートカット

### キーバインド設定

```json
// settings.json でカスタムショートカット設定

{
  "keybindings": [
    {
      "key": "cmd+shift+d",
      "command": "editor.action.duplicateLinesDown"
    },
    {
      "key": "cmd+alt+f",
      "command": "editor.action.formatDocument"
    },
    {
      "key": "cmd+k cmd+c",
      "command": "editor.action.addCommentLine"
    }
  ]
}
```

### よく使うカスタムショートカット

#### 🎯 推奨カスタム設定

```json
{
  // 開発効率向上
  "cmd+shift+d": "行の複製",
  "cmd+alt+f": "フォーマット",
  "cmd+shift+/": "ブロックコメント",
  
  // AI機能強化
  "cmd+alt+l": "AI説明要求",
  "cmd+alt+r": "AI リファクタリング",
  "cmd+alt+t": "AIテスト生成",
  
  // ナビゲーション強化
  "cmd+1-9": "タブ切替",
  "cmd+alt+left/right": "タブグループ移動"
}
```

### 言語別ショートカット

#### JavaScript/TypeScript
```json
{
  "cmd+alt+i": "自動インポート",
  "cmd+shift+r": "シンボルリネーム",
  "cmd+alt+m": "関数抽出"
}
```

#### Python
```json
{
  "cmd+alt+p": "Python実行",
  "cmd+shift+i": "pip install",
  "cmd+alt+l": "リンター実行"
}
```

---

## 📋 チートシート

### 🔥 最重要ショートカット（毎日使用）

```bash
🤖 AI機能
Cmd+L     | AIチャット開始
Cmd+K     | インライン編集
Cmd+I     | Composer（複数ファイル編集）
Tab       | AI提案受け入れ

📁 ナビゲーション
Cmd+P     | ファイル検索
Cmd+Shift+P | コマンドパレット
Cmd+Shift+F | 全体検索
F12       | 定義へジャンプ

✏️ 編集
Cmd+D     | 同一単語選択
Cmd+Shift+K | 行削除
Alt+↑/↓   | 行移動
Cmd+/     | コメント切替

🔍 検索
Cmd+F     | ファイル内検索
Cmd+H     | 置換
F3        | 次を検索
```

### ⚡ 効率向上ショートカット（週に数回）

```bash
📂 ファイル操作
Cmd+N     | 新規ファイル
Cmd+W     | タブを閉じる
Cmd+Shift+T | 閉じたタブ復元

🎯 選択
Cmd+Shift+L | 全同一単語選択
Alt+Click | マルチカーソル
Cmd+Shift+→ | 単語選択拡張

⚙️ 表示
Cmd+B     | サイドバー切替
Cmd+J     | パネル切替
Cmd+Shift+E | エクスプローラー
```

### 🔧 専門ショートカット（必要時）

```bash
🐛 デバッグ
F5        | デバッグ開始
F9        | ブレークポイント
F10       | ステップオーバー

💻 ターミナル
Ctrl+`    | ターミナル表示
Cmd+Shift+` | 新規ターミナル

🔄 Git
Cmd+Shift+G | Git ビュー
Cmd+K Cmd+C | コミット
```

### プラットフォーム別対応表

| 機能 | Mac | Windows/Linux |
|------|-----|---------------|
| AIチャット | `Cmd+L` | `Ctrl+L` |
| インライン編集 | `Cmd+K` | `Ctrl+K` |
| Composer | `Cmd+I` | `Ctrl+I` |
| ファイル検索 | `Cmd+P` | `Ctrl+P` |
| 全体検索 | `Cmd+Shift+F` | `Ctrl+Shift+F` |
| ターミナル | `Ctrl+\`` | `Ctrl+\`` |
| 設定 | `Cmd+,` | `Ctrl+,` |

---

## 💡 実践的活用例

### 日常開発での活用フロー

#### 🌅 朝の開発開始（2分で環境準備）

```bash
1. Cmd+P → "main.py"        # メインファイルを開く
2. Cmd+Shift+F → "TODO"     # 今日のタスクを検索
3. Cmd+L → "今日の実装計画を立てて" # AI に相談
4. Ctrl+` → 開発サーバー起動
```

#### ⚡ 機能実装（高速開発）

```bash
1. Cmd+I → "ユーザー認証API実装" # Composer で骨組み作成
2. Tab連続 → AI提案を活用       # 詳細実装
3. Cmd+K → "エラーハンドリング追加" # 品質向上
4. Cmd+L → "テストケース作成"   # 品質保証
```

#### 🐛 バグ修正（高速解決）

```bash
1. Cmd+Shift+F → エラーメッセージ検索
2. F12 → エラー発生箇所へジャンプ
3. Cmd+L → "このエラーの原因と修正方法"
4. Cmd+K → AI提案で修正実装
5. F5 → デバッグ実行で確認
```

#### 📚 コードレビュー（品質確保）

```bash
1. Cmd+Shift+P → "Git: Compare with..."
2. Cmd+D → 修正が必要な箇所を選択
3. Cmd+K → "コードレビューして改善点を提案"
4. Tab → AI提案を適用
5. Cmd+Shift+K → 不要なコードを削除
```

### チーム開発での活用

#### 📋 コードレビュー効率化

```bash
# レビュアー視点
1. Cmd+P → 変更ファイルを順次確認
2. Cmd+L → "この変更の影響範囲を分析"
3. Shift+Alt+F12 → 関数の使用箇所確認
4. Cmd+K → "改善提案をコメントで追加"

# 作成者視点
1. Cmd+Shift+F → レビュー指摘箇所検索
2. Cmd+K → "指摘内容を修正"
3. Cmd+L → "修正内容の説明を作成"
```

#### 🤝 ペアプログラミング

```bash
# ナビゲーター
1. Cmd+Shift+O → 関数一覧で設計説明
2. Cmd+L → "実装方針を相談"
3. F12 → 関連コードを参照

# ドライバー
1. Tab → AI提案を活用して高速実装
2. Cmd+K → リアルタイムで改善
3. Alt+↑/↓ → コード構造を調整
```

---

## 🎓 習得ロードマップ

### Week 1: 基礎固め
```bash
✅ Cmd+L (AIチャット)
✅ Cmd+P (ファイル検索)  
✅ Cmd+S (保存)
✅ Cmd+Z (元に戻す)
✅ Cmd+F (検索)
```

### Week 2: AI機能マスター
```bash
✅ Cmd+K (インライン編集)
✅ Cmd+I (Composer)
✅ Tab (AI補完)
✅ Cmd+D (同一単語選択)
```

### Week 3: ナビゲーション強化
```bash
✅ F12 (定義ジャンプ)
✅ Cmd+Shift+F (全体検索)
✅ Cmd+Shift+O (シンボル検索)
✅ Shift+F12 (参照検索)
```

### Week 4: 上級テクニック
```bash
✅ Alt+Click (マルチカーソル)
✅ 正規表現検索
✅ カスタムショートカット設定
✅ デバッグショートカット
```

---

*Cursorショートカット完全コレクション*  
*最終更新: 2025年1月11日*  
*練習用プロジェクト付き - 今すぐ実践開始！*