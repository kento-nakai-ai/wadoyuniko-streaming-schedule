# ⚡ 黒い画面を味方につける！『Codex CLI』完全攻略マニュアル

## 恐怖の黒い画面が最強の開発パートナーに変わる革命的ガイド

**バイブコーディング 事前配布特典**

---

## 🎯 この特典で得られるもの

### 30日後のあなた
- ✅ **黒い画面が怖くなくなる**（むしろ楽しく感じる）
- ✅ **AI CLIツールを自在に操れる**ようになる
- ✅ **開発速度が5倍以上向上**する
- ✅ **コマンド操作がプロレベル**に到達
- ✅ **自動化スクリプトを書ける**ようになる

---

## 📊 CLI恐怖症レベル診断

### Level 0: 完全恐怖症
```bash
# こんな画面を見ると心拍数が上がる
$ claude-code generate "Create a web app"
Generating web application...
```
→ **大丈夫！このガイドで克服できます**

### Level 1: 基本コマンド
```bash
# 基本操作はできる
$ ls
$ cd Documents
$ mkdir my-project
```

### Level 2: AI CLI初級
```bash
# AI CLIを少し使える
$ claude-code help
$ cursor --version
$ npm install
```

### Level 3: 中級ユーザー
```bash
# 複雑なコマンドも組み合わせられる
$ claude-code generate component --type=react --style=tailwind
$ find . -name "*.js" | xargs grep "TODO"
```

### Level 4: 上級ユーザー
```bash
# 自動化スクリプトを書ける
$ ./deploy.sh --env=production --auto-test
```

---

## 🖥️ 第1章: CLI基礎の基礎

### なぜCLIが重要なのか？

```markdown
## CLI使用による生産性向上
1. **速度**: GUIより10倍速い操作
2. **自動化**: 繰り返し作業を1行で実行
3. **正確性**: 人的エラーの削減
4. **スケーラブル**: 大量データの一括処理
5. **プロフェッショナル**: エンジニアの必須スキル
```

### 環境別セットアップ完全ガイド

#### 🍎 macOS編
```bash
# 1. Homebrewインストール（パッケージマネージャー）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. 基本開発ツール
brew install git nodejs npm python3 curl wget jq tree bat fd ripgrep
brew install --cask iterm2 visual-studio-code

# 3. Claude Code
brew install claude-code
# または
npm install -g @anthropic/claude-code

# 4. シェル設定（zsh推奨）
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### 🪟 Windows編
```powershell
# 1. Windows Terminal のインストール
winget install Microsoft.WindowsTerminal

# 2. WSL2 のセットアップ
wsl --install
wsl --set-default-version 2

# 3. Ubuntu環境での開発ツール
# （WSL内で実行）
sudo apt update && sudo apt upgrade -y
sudo apt install git nodejs npm python3 curl wget jq tree bat fd-find ripgrep

# 4. Claude Code（WSL内）
npm install -g @anthropic/claude-code
```

#### 🐧 Linux編
```bash
# Ubuntu/Debian系
sudo apt update
sudo apt install git nodejs npm python3 curl wget jq tree bat fd-find ripgrep build-essential

# Fedora/RHEL系
sudo dnf install git nodejs npm python3 curl wget jq tree bat fd-find ripgrep @development-tools

# Arch Linux
sudo pacman -S git nodejs npm python curl wget jq tree bat fd ripgrep base-devel
```

### 絶対に覚えるべき基本コマンド50選

#### ファイル・ディレクトリ操作（必須度: ★★★★★）
```bash
# 1-10: 基本中の基本
pwd                    # 現在地確認
ls                     # ファイル一覧
ls -la                 # 詳細一覧（隠しファイル含む）
cd path                # ディレクトリ移動
cd ..                  # 一つ上のディレクトリ
cd ~                   # ホームディレクトリ
cd -                   # 前回のディレクトリ
mkdir dirname          # ディレクトリ作成
mkdir -p path/to/dir   # 階層作成
touch filename         # ファイル作成

# 11-20: コピー・移動・削除
cp file1 file2         # ファイルコピー
cp -r dir1 dir2        # ディレクトリコピー
mv old new             # 移動・リネーム
rm file                # ファイル削除
rm -rf directory       # ディレクトリ強制削除（危険）
ln -s target link      # シンボリックリンク作成
find . -name "*.js"    # ファイル検索
which command          # コマンドの場所
type command           # コマンドの種類
file filename          # ファイル種類確認
```

#### テキスト処理（必須度: ★★★★☆）
```bash
# 21-30: ファイル内容表示・編集
cat file               # ファイル全体表示
head -n 10 file        # 先頭10行表示
tail -n 10 file        # 末尾10行表示
tail -f file           # リアルタイム監視
less file              # ページング表示
grep "pattern" file    # パターン検索
grep -r "pattern" dir  # ディレクトリ内検索
sed 's/old/new/g' file # 文字列置換
awk '{print $1}' file  # 列抽出
sort file              # ソート

# 31-40: 高度なテキスト処理
uniq file              # 重複削除
wc -l file             # 行数カウント
cut -d',' -f1 file     # CSV列抽出
tr 'a-z' 'A-Z' < file # 文字変換
paste file1 file2      # ファイル結合
join file1 file2       # ファイル結合（キー）
diff file1 file2       # ファイル差分
comm file1 file2       # ファイル比較
tee file               # 出力分岐
xargs command          # 引数変換
```

#### システム・ネットワーク（必須度: ★★★☆☆）
```bash
# 41-50: システム情報・ネットワーク
ps aux                 # プロセス一覧
top                    # システム監視
htop                   # 改良版top
df -h                  # ディスク使用量
du -sh *               # ディレクトリサイズ
free -h                # メモリ使用量
kill PID               # プロセス終了
killall process        # プロセス名で終了
curl URL               # HTTP リクエスト
wget URL               # ファイルダウンロード
```

---

## 🤖 第2章: Claude Code完全マスター

### Claude Codeの革命的な特徴

```javascript
const claudeCodeAdvantages = {
  AI統合: {
    特徴: "自然言語でコード生成",
    メリット: "思考をそのままコードに変換",
    効果: "開発速度10倍向上"
  },
  プロジェクト理解: {
    特徴: "全体構造を把握",
    メリット: "文脈に応じた適切な提案",
    効果: "品質の高いコード生成"
  },
  自動化機能: {
    特徴: "複雑なタスクを一発実行",
    メリット: "手作業の大幅削減",
    効果: "エラー率90%削減"
  },
  学習支援: {
    特徴: "コード説明・改善提案",
    メリット: "スキル向上の加速",
    効果: "学習効率5倍向上"
  }
};
```

### インストールと初期設定

```bash
# 公式インストール方法
# Mac
brew install claude-code

# npm経由（全OS対応）
npm install -g @anthropic/claude-code

# 初期設定
claude-code init
claude-code auth login

# API キー設定
export ANTHROPIC_API_KEY="your-api-key-here"
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.zshrc

# プロジェクト初期化
cd your-project
claude-code project init
```

### 設定ファイル最適化

```yaml
# ~/.claude-code/config.yml
version: "1.0"

# デフォルト設定
defaults:
  model: "claude-3-opus"
  temperature: 0.7
  max_tokens: 4000
  
# プロジェクト設定
project:
  language: "typescript"
  framework: "next.js"
  style: "tailwind"
  testing: "jest"
  
# AI動作設定
ai:
  context_length: 100000
  conversation_memory: true
  auto_optimize: true
  
# 出力設定
output:
  format: "markdown"
  include_comments: true
  include_tests: true
  
# 無視ファイル
ignore:
  - "node_modules/"
  - ".next/"
  - "dist/"
  - "*.log"
  - ".env*"
```

### Claude Code基本コマンド完全ガイド

#### プロジェクト管理
```bash
# プロジェクト作成・分析
claude-code create my-ai-app --template=nextjs
claude-code analyze                    # プロジェクト構造分析
claude-code structure                  # ファイル構造表示
claude-code summary                    # プロジェクト要約
claude-code dependencies               # 依存関係確認

# 設定管理
claude-code config list               # 設定一覧
claude-code config set language python
claude-code config get model
claude-code config reset              # 設定リセット
```

#### AI支援開発
```bash
# コード生成
claude-code generate "Create a React component for user authentication"
claude-code generate component UserDashboard --props="user,stats"
claude-code generate api /api/users --method=CRUD
claude-code generate test src/components/Button.tsx

# コード改善
claude-code refactor src/utils.js --focus=performance
claude-code optimize src/              # 全体最適化
claude-code modernize legacy/code.js   # モダンな書き方に変換
claude-code simplify complex-function.js

# コード説明・文書化
claude-code explain src/algorithm.js
claude-code document src/api/
claude-code readme generate
claude-code comments add src/utils.js
```

#### デバッグ・問題解決
```bash
# エラー解決
claude-code debug "TypeError: Cannot read property 'map' of undefined"
claude-code fix src/broken-code.js
claude-code troubleshoot npm-install-error.log

# セキュリティ・品質
claude-code security-scan
claude-code security-fix vulnerabilities.txt
claude-code lint-fix src/
claude-code type-check --strict

# パフォーマンス
claude-code performance-check src/
claude-code bundle-analyze
claude-code lighthouse-audit
```

### 実践プロジェクト: AIチャットアプリ開発

```bash
# Step 1: プロジェクト作成
claude-code create ai-chat-app <<EOF
要件:
- Next.js + TypeScript
- OpenAI API統合
- リアルタイムチャット
- ユーザー認証
- Tailwind CSS
EOF

# Step 2: 主要コンポーネント生成
claude-code generate <<EOF
ChatInterface component:
- メッセージ履歴表示
- 入力フォーム
- 送信ボタン
- タイピングインジケーター
- AIレスポンス表示
EOF

# Step 3: API実装
claude-code generate api <<EOF
/api/chat endpoint:
- POST method
- OpenAI API連携
- ストリーミング対応
- エラーハンドリング
- レート制限
EOF

# Step 4: 状態管理
claude-code generate <<EOF
Zustand store:
- messages state
- loading state
- error handling
- typing indicator
EOF

# Step 5: スタイリング
claude-code generate styles <<EOF
Tailwind CSS:
- ダークモード対応
- レスポンシブデザイン
- アニメーション
- チャットバブル
EOF
```

---

## ⚙️ 第3章: 最新AI CLIツール大全

### 必須AI CLIツール一覧

#### コード生成・編集
```bash
# GitHub Copilot CLI
gh copilot suggest "create a python web scraper"
gh copilot explain "git reset --hard HEAD~1"

# Cursor CLI
cursor --ai "refactor this function for better performance"
cursor --complete "function calculateTotal"

# Tabnine CLI
tabnine config set model=claude-3
tabnine predict "import pandas as pd"

# Codex CLI
codex generate "binary search algorithm in rust"
codex fix "syntax error in line 42"
```

#### AI開発支援
```bash
# OpenAI CLI
openai api completions.create -m gpt-4 -p "Explain quantum computing"
openai api chat.completions.create --stream

# Google AI CLI
gai generate "create a dockerfile for node.js app"
gai translate "こんにちは" --to=en

# Anthropic CLI
anthropic complete "Write a Python function to"
anthropic chat --context=project
```

#### 自動化・デプロイ
```bash
# Vercel CLI
vercel                    # デプロイ
vercel --prod            # 本番デプロイ
vercel env add DATABASE_URL
vercel logs --follow

# Railway CLI
railway login
railway deploy
railway logs
railway env set NODE_ENV=production

# Netlify CLI
netlify deploy
netlify functions:create
netlify env:set API_KEY=xxx
```

---

## 🛠️ 第4章: 自動化スクリプト作成術

### 日常タスク自動化

#### プロジェクト初期化スクリプト
```bash
#!/bin/bash
# setup-project.sh

PROJECT_NAME=$1
TEMPLATE=${2:-"nextjs"}

if [ -z "$PROJECT_NAME" ]; then
    echo "Usage: $0 <project-name> [template]"
    exit 1
fi

echo "🚀 プロジェクト初期化を開始します"

# 1. プロジェクト作成
echo "📁 プロジェクト作成中..."
claude-code create "$PROJECT_NAME" --template="$TEMPLATE"
cd "$PROJECT_NAME"

# 2. 依存関係インストール
echo "📦 依存関係をインストール中..."
npm install

# 3. 初期設定
echo "⚙️ 初期設定中..."
claude-code project init
git init
git add .
git commit -m "Initial commit"

# 4. 開発環境起動
echo "🔥 開発サーバーを起動中..."
code .
npm run dev

echo "✅ プロジェクト初期化完了！"
```

#### AI支援コードレビュー
```bash
#!/bin/bash
# ai-review.sh

BRANCH=${1:-"HEAD"}
OUTPUT_FILE="review-$(date +%Y%m%d-%H%M%S).md"

echo "🔍 AI支援コードレビューを開始します"

# 1. 変更ファイル取得
echo "📝 変更ファイルを取得中..."
git diff --name-only "$BRANCH"~1 "$BRANCH" > changed_files.txt

# 2. AI レビュー実行
echo "🤖 AIレビューを実行中..."
claude-code review $(cat changed_files.txt) > "$OUTPUT_FILE"

# 3. セキュリティチェック
echo "🔒 セキュリティチェック中..."
claude-code security-scan >> "$OUTPUT_FILE"

# 4. パフォーマンスチェック
echo "⚡ パフォーマンスチェック中..."
claude-code performance-check >> "$OUTPUT_FILE"

# 5. 結果表示
echo "✅ レビュー完了！結果: $OUTPUT_FILE"
cat "$OUTPUT_FILE"

# クリーンアップ
rm changed_files.txt
```

#### デプロイ自動化
```bash
#!/bin/bash
# deploy.sh

ENVIRONMENT=${1:-"staging"}
RUN_TESTS=${2:-"true"}

echo "🚀 デプロイを開始します"

# 1. プロジェクト分析
echo "📊 プロジェクト分析中..."
claude-code analyze

# 2. テスト実行
if [ "$RUN_TESTS" = "true" ]; then
    echo "🧪 テストを実行中..."
    npm test
    if [ $? -ne 0 ]; then
        echo "❌ テストが失敗しました"
        exit 1
    fi
fi

# 3. ビルド
echo "🔨 ビルド中..."
npm run build

# 4. セキュリティチェック
echo "🔒 セキュリティチェック中..."
claude-code security-scan

# 5. デプロイ実行
echo "🚀 デプロイ実行中..."
case $ENVIRONMENT in
    "production")
        vercel --prod
        ;;
    "staging")
        vercel
        ;;
    *)
        echo "❌ 無効な環境: $ENVIRONMENT"
        exit 1
        ;;
esac

echo "✅ デプロイ完了！"
```

---

## 🔧 第5章: トラブルシューティング

### よくあるエラーと解決法

#### CLI一般的なエラー
```bash
# Error: command not found
# 解決策1: パスの確認
echo $PATH
which claude-code

# 解決策2: 再インストール
brew reinstall claude-code
# または
npm install -g @anthropic/claude-code

# 解決策3: シェル設定リロード
source ~/.zshrc
# または
source ~/.bashrc
```

#### 権限エラー
```bash
# Error: Permission denied
# 解決策1: 適切な権限設定
chmod +x script.sh

# 解決策2: sudo使用（注意して使用）
sudo npm install -g @anthropic/claude-code

# 解決策3: ユーザー権限でのnpm設定
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
```

#### Claude Code特有のエラー
```bash
# Error: API key not found
# 解決策1: API キー設定確認
echo $ANTHROPIC_API_KEY

# 解決策2: 環境変数設定
export ANTHROPIC_API_KEY="your-key-here"
echo 'export ANTHROPIC_API_KEY="your-key-here"' >> ~/.zshrc

# 解決策3: 設定ファイル確認
claude-code config show
claude-code auth status

# Error: Project not initialized
# 解決策: プロジェクト初期化
claude-code project init

# Error: Context too large
# 解決策: 設定調整
claude-code config set max_tokens 2000
claude-code config set context_length 50000
```

### デバッグテクニック

```bash
# 詳細ログ出力
claude-code --verbose generate "test code"
DEBUG=* claude-code analyze

# 設定状況確認
claude-code config list
claude-code project status
claude-code auth status

# キャッシュクリア
claude-code cache clear
rm -rf ~/.claude-code/cache

# 設定リセット
claude-code config reset
claude-code project reset
```

---

## 🎮 第6章: 実践演習課題

### 7日間集中トレーニング

#### Day 1: 基礎固め
```bash
# 課題1: 環境構築完了チェック
claude-code --version
cursor --version
git --version
node --version

# 課題2: 基本コマンド練習（30回実行）
for i in {1..30}; do
  echo "Exercise $i"
  ls -la
  pwd
  cd ..
  cd -
done

# 課題3: 最初のプロジェクト作成
claude-code create hello-world
cd hello-world
claude-code generate "simple hello world web page"
```

#### Day 2: Claude Code基本操作
```bash
# 課題1: プロジェクト分析
claude-code analyze
claude-code structure
claude-code summary

# 課題2: コード生成練習
claude-code generate "calculator function in JavaScript"
claude-code generate "todo list component in React"
claude-code generate "API endpoint for user management"

# 課題3: コード改善
echo "function add(a,b){return a+b}" > simple.js
claude-code refactor simple.js
claude-code explain simple.js
```

#### Day 3: 自動化スクリプト
```bash
# 課題1: 簡単な自動化スクリプト作成
cat > daily-tasks.sh << 'EOF'
#!/bin/bash
echo "🌅 今日のタスク開始"
date
git status
npm run test
echo "✅ 日次タスク完了"
EOF

chmod +x daily-tasks.sh
./daily-tasks.sh
```

#### Day 4-7: 実践プロジェクト
```bash
# 大型プロジェクト: AI Todo アプリ

# Day 4: プロジェクト設計
claude-code create ai-todo-app
claude-code generate project-structure <<EOF
AI Todo App:
- Next.js + TypeScript
- Supabase database
- OpenAI integration
- Tailwind CSS
- User authentication
EOF

# Day 5: コンポーネント開発
claude-code generate component TodoList
claude-code generate component AddTodo
claude-code generate component AIAssistant

# Day 6: API開発
claude-code generate api /api/todos
claude-code generate api /api/ai-suggestions

# Day 7: テスト・デプロイ
claude-code generate tests
npm test
claude-code optimize
vercel deploy
```

---

## 💎 第7章: プロレベルテクニック

### 高度なエイリアス設定

```bash
# ~/.zshrc または ~/.bashrc に追加

# Claude Code エイリアス
alias cc='claude-code'
alias ccg='claude-code generate'
alias ccr='claude-code refactor'
alias cca='claude-code analyze'
alias ccd='claude-code debug'
alias cco='claude-code optimize'

# 開発ワークフロー
alias dev-start='npm run dev & claude-code watch'
alias dev-test='npm test && claude-code test-coverage'
alias dev-build='npm run build && claude-code validate-build'
alias dev-deploy='./scripts/deploy.sh'

# Git + AI
alias gai='git add . && claude-code generate commit-message'
alias gpr='git pull && claude-code review-changes'
```

### カスタム関数

```bash
# ~/.zshrc に追加

# AI支援関数
function ai_explain() {
  if [[ $# -eq 0 ]]; then
    echo "Usage: ai_explain <file_or_command>"
    return 1
  fi
  claude-code explain "$@"
}

# 智能错误解决
function ai_fix() {
  local error_log="$1"
  if [[ -f "$error_log" ]]; then
    claude-code debug "$(cat "$error_log")"
  else
    claude-code debug "$error_log"
  fi
}

# 项目快速启动
function quick_start() {
  local project_name="$1"
  local template="${2:-nextjs}"
  
  claude-code create "$project_name" --template="$template"
  cd "$project_name"
  code .
  npm run dev
}

# AI代码审查
function ai_review() {
  local files="${@:-.}"
  echo "🔍 AI代码审查开始..."
  claude-code review "$files" > review-$(date +%Y%m%d-%H%M%S).md
  echo "✅ 审查完成，结果已保存到 review-*.md"
}

# 智能项目分析
function project_health() {
  echo "📊 项目健康检查..."
  echo "\n🔍 代码分析:"
  claude-code analyze
  echo "\n🔒 安全检查:"
  claude-code security-scan
  echo "\n⚡ 性能检查:"
  claude-code performance-check
  echo "\n📈 统计信息:"
  find . -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" | wc -l | xargs echo "总文件数:"
  git log --oneline | wc -l | xargs echo "提交次数:"
}
```

---

## 🚀 第8章: チーム開発でのCLI活用

### チーム標準化

```bash
# team-setup.sh - チーム共通環境構築
#!/bin/bash

echo "🏢 チーム開発環境を構築中..."

# 1. 共通ツールインストール
brew install claude-code cursor git nodejs
npm install -g @anthropic/claude-code

# 2. プロジェクト設定テンプレート
cat > .claude-code-team.yml << 'EOF'
# チーム共通設定
team:
  standards:
    language: "typescript"
    framework: "next.js"
    testing: "jest"
    linting: "eslint"
    formatting: "prettier"
  
  workflows:
    review: "automatic"
    testing: "required"
    deployment: "automatic"
  
  guidelines:
    commit_messages: "conventional"
    branch_naming: "feature/issue-number"
    code_style: "team-standard"
EOF

# 3. チーム用スクリプト配布
mkdir -p scripts/team
cp team-scripts/* scripts/team/

echo "✅ チーム環境構築完了"
```

### コードレビュー自動化

```bash
#!/bin/bash
# team-review.sh

PR_NUMBER=$1

if [ -z "$PR_NUMBER" ]; then
    echo "Usage: $0 <pr-number>"
    exit 1
fi

echo "🔍 PR #$PR_NUMBER の自動レビュー開始"

# 1. PR内容取得
gh pr diff $PR_NUMBER > pr-changes.diff

# 2. AI レビュー
claude-code review pr-changes.diff > review-$PR_NUMBER.md

# 3. セキュリティチェック
claude-code security-scan pr-changes.diff >> review-$PR_NUMBER.md

# 4. パフォーマンスチェック
claude-code performance-check pr-changes.diff >> review-$PR_NUMBER.md

# 5. チーム基準チェック
claude-code team-standards-check pr-changes.diff >> review-$PR_NUMBER.md

# 6. レビューコメント投稿
gh pr comment $PR_NUMBER --body-file review-$PR_NUMBER.md

echo "✅ 自動レビュー完了"
```

---

## 📊 第9章: 生産性測定とKPI

### CLI使用効率の測定

```bash
#!/bin/bash
# productivity-tracker.sh

LOG_FILE=~/.cli-productivity.log
DATE=$(date +%Y-%m-%d)

# コマンド実行記録
log_command() {
    echo "$DATE,$1,$(date +%H:%M:%S)" >> $LOG_FILE
}

# エイリアス設定（既存のaliasに追加）
alias cc='log_command "claude-code"; claude-code'
alias git='log_command "git"; command git'
alias npm='log_command "npm"; command npm'

# 日次レポート生成
daily_report() {
    echo "📊 今日の生産性レポート ($DATE)"
    echo "================================"
    
    # コマンド使用回数
    grep $DATE $LOG_FILE | cut -d',' -f2 | sort | uniq -c | sort -nr
    
    # 時間帯別使用量
    echo "\n⏰ 時間帯別使用量:"
    grep $DATE $LOG_FILE | cut -d',' -f3 | cut -d':' -f1 | sort | uniq -c
    
    # AI CLIツール使用率
    echo "\n🤖 AI CLIツール使用率:"
    ai_commands=$(grep $DATE $LOG_FILE | grep -E "claude-code|cursor|copilot" | wc -l)
    total_commands=$(grep $DATE $LOG_FILE | wc -l)
    if [ $total_commands -gt 0 ]; then
        echo "AI使用率: $(echo "scale=2; $ai_commands * 100 / $total_commands" | bc)%"
    fi
}
```

### スキル進捗追跡

```javascript
// cli-skill-tracker.js
const skillLevels = {
  基本操作: {
    ファイル操作: { current: 0, target: 100 },
    ディレクトリ移動: { current: 0, target: 100 },
    テキスト処理: { current: 0, target: 80 }
  },
  Git操作: {
    基本コマンド: { current: 0, target: 100 },
    ブランチ操作: { current: 0, target: 80 },
    競合解決: { current: 0, target: 60 }
  },
  AI_CLI: {
    claude_code: { current: 0, target: 90 },
    コード生成: { current: 0, target: 80 },
    デバッグ支援: { current: 0, target: 70 }
  },
  自動化: {
    シェルスクリプト: { current: 0, target: 60 },
    CI_CD: { current: 0, target: 50 },
    監視システム: { current: 0, target: 40 }
  }
};

// 進捗更新関数
function updateSkill(category, skill, increment = 1) {
  if (skillLevels[category] && skillLevels[category][skill]) {
    skillLevels[category][skill].current += increment;
    const current = skillLevels[category][skill].current;
    const target = skillLevels[category][skill].target;
    const progress = Math.min(100, (current / target) * 100);
    
    console.log(`📈 ${skill}: ${progress.toFixed(1)}% (${current}/${target})`);
    
    if (progress >= 100) {
      console.log(`🎉 ${skill} をマスターしました！`);
    }
  }
}

// 全体進捗表示
function showOverallProgress() {
  console.log("\n🎯 スキル習得進捗");
  
  Object.entries(skillLevels).forEach(([category, skills]) => {
    console.log(`\n${category}:`);
    Object.entries(skills).forEach(([skill, data]) => {
      const progress = Math.min(100, (data.current / data.target) * 100);
      const bar = '█'.repeat(Math.floor(progress / 5)) + '░'.repeat(20 - Math.floor(progress / 5));
      console.log(`  ${skill}: [${bar}] ${progress.toFixed(1)}%`);
    });
  });
}
```

---

## 🏆 第10章: マスターへの道

### 30日間習得プラン

#### Week 1: 基礎構築
```markdown
## Day 1-2: 環境構築
- [ ] 開発環境セットアップ完了
- [ ] Claude Code インストール・設定
- [ ] 基本コマンド50個の練習
- [ ] 最初のプロジェクト作成

## Day 3-4: 基本操作マスター
- [ ] ファイル操作の完全習得
- [ ] Git基本操作の習得
- [ ] Claude Code基本コマンドの習得
- [ ] 簡単な自動化スクリプト作成

## Day 5-7: 実践練習
- [ ] 3つのミニプロジェクト完成
- [ ] エラー対処法の習得
- [ ] チーム開発フロー理解
```

#### Week 2: AI CLI特化
```markdown
## Day 8-10: Claude Code深掘り
- [ ] 高度なコマンドオプション習得
- [ ] プロジェクト設定のカスタマイズ
- [ ] AI支援デバッグ技術
- [ ] コード品質自動化

## Day 11-14: 他AI CLI連携
- [ ] GitHub Copilot CLI習得
- [ ] Cursor CLI統合
- [ ] OpenAI CLI活用
- [ ] マルチAI環境構築
```

#### Week 3: 自動化マスター
```markdown
## Day 15-17: スクリプト作成
- [ ] 複雑な自動化スクリプト作成
- [ ] エラーハンドリング実装
- [ ] ログシステム構築
- [ ] 監視機能実装

## Day 18-21: ワークフロー最適化
- [ ] CI/CD パイプライン構築
- [ ] チーム用ツール開発
- [ ] 生産性測定システム
- [ ] 品質管理自動化
```

#### Week 4: エキスパートレベル
```markdown
## Day 22-25: 高度な技術
- [ ] カスタムプラグイン開発
- [ ] API統合自動化
- [ ] セキュリティ自動化
- [ ] パフォーマンス監視

## Day 26-30: 知識の体系化
- [ ] 個人用CLIツール開発
- [ ] ドキュメント作成
- [ ] チーム研修資料作成
- [ ] 継続改善システム構築
```

### 習熟度テスト

```bash
#!/bin/bash
# cli-mastery-test.sh

SCORE=0
TOTAL=20

test_command() {
    local cmd="$1"
    local description="$2"
    
    echo "📝 テスト: $description"
    if eval "$cmd" &>/dev/null; then
        echo "✅ 合格"
        ((SCORE++))
    else
        echo "❌ 不合格"
    fi
}

echo "🎯 CLI習熟度テスト開始"
echo "========================"

# 基本コマンドテスト
test_command "ls -la" "ファイル一覧表示"
test_command "pwd" "現在地確認"
test_command "cd ~ && cd -" "ディレクトリ移動"

# Git操作テスト
test_command "git status" "Git状態確認"
test_command "git log --oneline -5" "コミット履歴確認"

# Claude Code テスト
test_command "claude-code --version" "Claude Code動作確認"
test_command "claude-code config list" "設定確認"

# 結果表示
echo "========================"
echo "📊 テスト結果: $SCORE/$TOTAL ($(echo "scale=1; $SCORE * 100 / $TOTAL" | bc)%)"

if [ $SCORE -ge 18 ]; then
    echo "🏆 エキスパートレベル！"
elif [ $SCORE -ge 15 ]; then
    echo "🥇 上級者レベル！"
elif [ $SCORE -ge 10 ]; then
    echo "🥈 中級者レベル"
else
    echo "📚 更なる練習が必要です"
fi
```

---

## 🎁 特別ボーナス

### 限定テンプレート集
1. **AI開発用スクリプト集**（20種類）
2. **自動化テンプレート**（15種類）
3. **チーム開発用設定ファイル**（10種類）
4. **セキュリティチェックスクリプト**（8種類）
5. **パフォーマンス監視ツール**（5種類）

### カスタムCLIツール
- 個人用タスク管理CLI
- プロジェクト生成器
- コード品質チェッカー
- デプロイ自動化ツール

### 専用サポート
- 月2回のグループコーチング
- Slack質問チャンネル
- カスタムスクリプト作成支援
- 企業導入コンサルティング

---

## 🚀 今すぐ始める3ステップ

### Step 1: 環境準備（今日中）
```bash
# Claude Code インストール
brew install claude-code
# または
npm install -g @anthropic/claude-code

# 初期設定
claude-code init
claude-code auth login
```

### Step 2: 最初のコマンド（明日）
```bash
# プロジェクト作成
claude-code create my-first-project
cd my-first-project

# 最初のコード生成
claude-code generate "simple web page with greeting"
```

### Step 3: 継続的学習（今週中）
- 毎日1つ新しいコマンドを覚える
- 小さな自動化スクリプトを作成
- CLI操作の記録・振り返り

---

## 🎁 バイブコーディング特典情報

この特典は**バイブコーディング 事前配布特典**です。

### さらなるサポート
- ✅ CLI操作ハンズオンセミナー
- ✅ 個別自動化スクリプト作成支援
- ✅ チーム導入コンサルティング
- ✅ 最新AI CLIツール情報配信
- ✅ 上級者向けコミュニティアクセス

**詳細**: [wadoyuniko.com](https://wadoyuniko.com)

---

**⚡ 黒い画面を味方につけて、AI開発者として次のレベルへ！**

*最終更新: 2025年1月*
*バージョン: 1.0*