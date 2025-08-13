# 🎯 特典3: CLI・開発ツール完全攻略マニュアル

## コマンドライン恐怖症を克服！AI開発を10倍速にする最強ツール集

---

## 🚀 この特典で得られるもの

### 30日後のあなた
- ✅ **黒い画面が怖くなくなる**（むしろカッコいいと思える）
- ✅ **開発速度が10倍速**になる（マウス操作の90%削減）
- ✅ **プロっぽい開発環境**が構築できる
- ✅ **エラーが出ても冷静**に対処できる
- ✅ **自動化で楽をする**スキルが身につく

---

## 📊 CLI習得レベル診断

### Level 0: 完全初心者
```bash
# こんな画面を見ると固まってしまう
$ npm install
bash: npm: command not found
```
→ **大丈夫！このガイドで必ずマスターできます**

### Level 1: 初級者
```bash
# 基本コマンドは知っている
$ cd Documents
$ ls
$ mkdir my-project
```

### Level 2: 中級者
```bash
# パッケージ管理やGitが使える
$ npm install express
$ git add .
$ git commit -m "Update"
```

### Level 3: 上級者
```bash
# パイプやリダイレクトを使いこなす
$ cat file.txt | grep "error" | wc -l
$ curl -X POST https://api.example.com/data
```

---

## 🖥️ 第1章: ターミナル基礎完全マスター

### そもそもターミナル（CLI）とは？

```markdown
## ターミナルの利点
1. **速い**: マウス操作の10倍速
2. **自動化できる**: 繰り返し作業を1コマンドに
3. **カッコいい**: プロっぽく見える
4. **どこでも同じ**: Windows/Mac/Linux共通
5. **リモート操作**: サーバー管理が可能
```

### 環境別セットアップガイド

#### 🍎 Mac編
```bash
# 1. iTerm2のインストール（標準ターミナルより高機能）
# https://iterm2.com/ からダウンロード

# 2. Homebrewのインストール（パッケージ管理）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 3. 必須ツールのインストール
brew install git node wget curl jq tree
```

#### 🪟 Windows編
```powershell
# 1. Windows Terminal のインストール
# Microsoft Store から「Windows Terminal」を検索してインストール

# 2. WSL2 のセットアップ
wsl --install

# 3. Ubuntu環境での作業
# Windows Terminalで Ubuntu タブを開く
sudo apt update
sudo apt install git nodejs npm curl wget jq tree
```

#### 🐧 Linux編
```bash
# Ubuntu/Debian系
sudo apt update
sudo apt install git nodejs npm curl wget jq tree build-essential

# CentOS/RHEL系
sudo yum install git nodejs npm curl wget jq tree gcc-c++ make
```

### 絶対に覚えるべき基本コマンド30選

#### ファイル・ディレクトリ操作
```bash
# 1. 現在地を確認
pwd     # Print Working Directory
# 出力例: /Users/username/Documents

# 2. ファイル一覧表示
ls      # 基本表示
ls -la  # 詳細表示（隠しファイル含む）
ls -lh  # 人間が読みやすいサイズ表示

# 3. ディレクトリ移動
cd Documents        # Documentsフォルダへ
cd ..              # 一つ上へ
cd ~               # ホームディレクトリへ
cd -               # 直前のディレクトリへ

# 4. ディレクトリ作成
mkdir my-project              # 単一ディレクトリ
mkdir -p path/to/nested/dir  # 階層作成

# 5. ファイル作成
touch index.html    # 空ファイル作成
echo "Hello" > file.txt  # 内容付きで作成

# 6. コピー
cp file.txt backup.txt       # ファイルコピー
cp -r folder/ backup/        # フォルダコピー

# 7. 移動・リネーム
mv old.txt new.txt           # リネーム
mv file.txt Documents/       # 移動

# 8. 削除（要注意！）
rm file.txt                  # ファイル削除
rm -rf folder/              # フォルダ強制削除（危険）

# 9. ファイル内容表示
cat file.txt                # 全体表示
head -n 10 file.txt         # 先頭10行
tail -n 10 file.txt         # 末尾10行
less file.txt               # ページング表示（qで終了）

# 10. ファイル検索
find . -name "*.js"         # 現在地以下のJSファイル
grep "error" log.txt        # ファイル内文字列検索
grep -r "TODO" ./           # ディレクトリ内検索
```

### CLI操作のショートカット（効率10倍）

```bash
# カーソル移動
Ctrl + A    # 行頭へ
Ctrl + E    # 行末へ
Ctrl + F    # 1文字右へ（→キーと同じ）
Ctrl + B    # 1文字左へ（←キーと同じ）
Alt + F     # 1単語右へ
Alt + B     # 1単語左へ

# 編集操作
Ctrl + D    # カーソル位置の文字削除
Ctrl + H    # カーソル左の文字削除（Backspaceと同じ）
Ctrl + W    # カーソル左の単語削除
Ctrl + K    # カーソル位置から行末まで削除
Ctrl + U    # 行全体削除
Ctrl + Y    # 削除した内容を貼り付け

# 履歴操作
Ctrl + R    # コマンド履歴検索
↑ / ↓      # 履歴を遡る/進む
!!          # 直前のコマンド実行
!npm        # npmで始まる直前のコマンド実行

# 画面制御
Ctrl + L    # 画面クリア（clearコマンドと同じ）
Ctrl + C    # 実行中のコマンド中断
Ctrl + Z    # プロセス一時停止
Ctrl + D    # ログアウト/終了
```

---

## 🛠️ 第2章: 開発必須ツール完全ガイド

### Git - バージョン管理の王様

#### 初期設定
```bash
# ユーザー情報設定
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# エディタ設定
git config --global core.editor "code --wait"  # VSCode
git config --global core.editor "cursor --wait" # Cursor

# 便利なエイリアス設定
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.lg "log --oneline --graph --all"
```

#### 実践的なGitワークフロー
```bash
# 1. プロジェクト開始
git init
git remote add origin https://github.com/username/repo.git

# 2. 日常の開発フロー
git status                    # 状態確認
git add .                     # 全ファイルステージング
git add -p                    # 対話的に選択してステージング
git commit -m "Add feature"  # コミット
git push origin main          # プッシュ

# 3. ブランチ操作
git branch feature/new-ai    # ブランチ作成
git checkout -b feature/chat # 作成して移動
git merge feature/chat       # マージ
git branch -d feature/chat   # ブランチ削除

# 4. 困ったときのコマンド
git stash                     # 一時退避
git stash pop                 # 退避を戻す
git reset --hard HEAD~1      # 直前のコミット取り消し（危険）
git revert HEAD              # 安全な取り消し
git cherry-pick abc123       # 特定コミットを取り込み

# 5. 履歴確認
git log --oneline -10        # 簡潔な履歴
git log --stat               # 変更統計付き
git blame file.txt           # 行ごとの変更者
git diff HEAD~1              # 差分確認
```

### Node.js & npm - JavaScript実行環境

#### バージョン管理（nvm使用）
```bash
# nvmインストール（Mac/Linux）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Node.jsインストール
nvm install node              # 最新版
nvm install 20.10.0          # 特定バージョン
nvm use 20.10.0              # バージョン切り替え
nvm alias default 20.10.0   # デフォルト設定

# バージョン確認
node --version
npm --version
```

#### npm完全攻略
```bash
# プロジェクト初期化
npm init -y                   # デフォルト設定で初期化
npm init                      # 対話的に初期化

# パッケージインストール
npm install express          # 通常依存
npm install -D nodemon       # 開発依存
npm install -g vercel        # グローバル
npm ci                       # package-lock.json通りにインストール

# パッケージ管理
npm list                     # インストール済み一覧
npm outdated                 # 更新可能なパッケージ
npm update                   # パッケージ更新
npm audit                    # セキュリティ監査
npm audit fix               # 脆弱性修正

# スクリプト実行
npm run dev                  # package.jsonのscripts実行
npm start                    # startスクリプト実行
npm test                     # テスト実行

# 便利なコマンド
npx create-next-app@latest  # パッケージを一時的に実行
npm view express versions    # 利用可能バージョン確認
npm docs express            # ドキュメントを開く
```

### Docker - コンテナ仮想化

#### 基本操作
```bash
# イメージ操作
docker pull node:20          # イメージ取得
docker images                # イメージ一覧
docker rmi image_id          # イメージ削除

# コンテナ操作
docker run -it node:20 bash # 対話的に実行
docker ps                    # 実行中のコンテナ
docker ps -a                 # 全コンテナ
docker stop container_id     # 停止
docker rm container_id       # 削除

# Docker Compose
docker-compose up            # 起動
docker-compose up -d         # バックグラウンド起動
docker-compose down          # 停止・削除
docker-compose logs -f       # ログ確認
```

#### 実践的なDockerfile
```dockerfile
# Node.js アプリケーション用
FROM node:20-alpine

WORKDIR /app

# 依存関係のキャッシュ活用
COPY package*.json ./
RUN npm ci --only=production

# アプリケーションコード
COPY . .

# ビルド
RUN npm run build

# ポート公開
EXPOSE 3000

# 実行
CMD ["npm", "start"]
```

---

## 🎨 第3章: AI開発特化ツール

### Claude Code - AI駆動開発

#### インストールと設定
```bash
# インストール（Mac）
brew install claude-code

# インストール（その他）
npm install -g @anthropic/claude-code

# 初期設定
claude-code init
claude-code auth login
```

#### 実践的な使い方
```bash
# プロジェクト作成
claude-code create my-ai-app

# AI支援コーディング
claude-code generate "Create a chat interface with streaming"
claude-code fix "Fix the TypeScript errors"
claude-code refactor "Optimize this function for performance"

# コードレビュー
claude-code review src/
claude-code security-check

# デバッグ支援
claude-code debug "User login is failing"
claude-code explain src/utils/auth.js
```

### OpenAI CLI - GPT操作

```bash
# インストール
pip install openai-cli

# 設定
export OPENAI_API_KEY="your-key-here"

# 基本使用
openai api completions.create \
  -m gpt-4 \
  -p "Explain quantum computing"

# ファイル処理
openai api files.create -f data.jsonl -p fine-tune
openai api fine_tunes.create -t file-abc123
```

### Vercel CLI - デプロイ自動化

```bash
# インストール
npm i -g vercel

# デプロイ
vercel              # 対話的デプロイ
vercel --prod       # 本番デプロイ
vercel --force      # キャッシュ無視

# 環境変数管理
vercel env add DATABASE_URL
vercel env pull .env.local

# ドメイン管理
vercel domains add example.com
vercel alias set my-app.vercel.app example.com
```

---

## 💻 第4章: 生産性爆上げ設定集

### Zsh + Oh My Zsh（Mac/Linux）

#### インストールと設定
```bash
# Oh My Zshインストール
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# テーマ変更（~/.zshrc編集）
ZSH_THEME="agnoster"  # or "powerlevel10k/powerlevel10k"

# プラグイン追加
plugins=(
  git
  npm
  docker
  zsh-autosuggestions
  zsh-syntax-highlighting
  web-search
)

# 設定反映
source ~/.zshrc
```

### エイリアス設定（作業効率化）

```bash
# ~/.zshrc or ~/.bashrc に追加

# Git エイリアス
alias gs='git status'
alias ga='git add'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline -10'
alias gd='git diff'

# npm エイリアス
alias ni='npm install'
alias nr='npm run'
alias nrd='npm run dev'
alias nrb='npm run build'
alias nrt='npm run test'

# ディレクトリ移動
alias ..='cd ..'
alias ...='cd ../..'
alias proj='cd ~/Projects'
alias dl='cd ~/Downloads'

# その他便利コマンド
alias ll='ls -lahF'
alias c='clear'
alias h='history'
alias reload='source ~/.zshrc'
alias myip='curl http://ipecho.net/plain; echo'
alias weather='curl wttr.in/Tokyo'

# Docker エイリアス
alias dps='docker ps'
alias dpsa='docker ps -a'
alias dimg='docker images'
alias dcu='docker-compose up'
alias dcd='docker-compose down'
alias dcl='docker-compose logs -f'

# 開発サーバー起動
alias dev='npm run dev'
alias start='npm start'
alias build='npm run build'

# ファイル作成ショートカット
alias touch-js='touch index.js && echo "console.log(\"Hello World\")" > index.js'
alias touch-html='touch index.html && echo "<!DOCTYPE html><html><head><title>New Page</title></head><body><h1>Hello World</h1></body></html>" > index.html'
```

### 関数定義（複雑な処理を簡単に）

```bash
# ~/.zshrc or ~/.bashrc に追加

# プロジェクト作成関数
function create-project() {
  mkdir $1
  cd $1
  git init
  npm init -y
  touch README.md
  echo "# $1" > README.md
  code .
}

# Git コミット＆プッシュ
function gcp() {
  git add .
  git commit -m "$1"
  git push
}

# ポート使用確認
function port() {
  lsof -i :$1
}

# ポートキル
function killport() {
  kill -9 $(lsof -t -i:$1)
}

# プロジェクト検索・移動
function proj-find() {
  cd $(find ~/Projects -type d -name "*$1*" | head -1)
}

# APIテスト関数
function test-api() {
  curl -X $1 \
    -H "Content-Type: application/json" \
    -d "$3" \
    $2 | jq '.'
}

# 使用例: test-api POST http://localhost:3000/api/users '{"name":"John"}'
```

---

## 🚨 第5章: トラブルシューティング

### よくあるエラーと解決法

#### npm関連
```bash
# Error: EACCES: permission denied
sudo npm install -g package-name  # 一時的解決
# または
npm config set prefix ~/.npm-global  # 恒久的解決
export PATH=~/.npm-global/bin:$PATH

# Error: Cannot find module
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Error: ENOENT: no such file or directory
npm init -y  # package.jsonがない場合
```

#### Git関連
```bash
# fatal: not a git repository
git init

# error: failed to push some refs
git pull --rebase origin main
git push

# fatal: refusing to merge unrelated histories
git pull origin main --allow-unrelated-histories

# Permission denied (publickey)
ssh-keygen -t ed25519 -C "your.email@example.com"
cat ~/.ssh/id_ed25519.pub  # GitHubに登録
```

#### ポート関連
```bash
# Error: Port 3000 is already in use
lsof -i :3000  # 使用中のプロセス確認
kill -9 [PID]  # プロセス強制終了

# または環境変数で別ポート指定
PORT=3001 npm run dev
```

### デバッグテクニック

```bash
# ログ出力を詳細に
npm install --verbose
DEBUG=* node app.js

# エラーのスタックトレース表示
node --trace-warnings app.js

# メモリ使用量監視
node --max-old-space-size=4096 app.js

# プロセス監視
top -pid $(pgrep node)
htop  # より見やすい（要インストール）
```

---

## 🎮 第6章: 実践演習

### 演習1: プロジェクトセットアップ自動化

```bash
#!/bin/bash
# setup-project.sh として保存

echo "🚀 プロジェクトセットアップを開始します"

# プロジェクト名入力
read -p "プロジェクト名を入力: " project_name

# ディレクトリ作成・移動
mkdir $project_name && cd $project_name

# Git初期化
git init

# npm初期化
npm init -y

# 必要パッケージインストール
npm install express dotenv cors
npm install -D nodemon typescript @types/node

# 基本ファイル作成
cat > .gitignore << EOF
node_modules/
.env
.DS_Store
dist/
*.log
EOF

cat > .env.example << EOF
PORT=3000
DATABASE_URL=
API_KEY=
EOF

cat > README.md << EOF
# $project_name

## セットアップ
\`\`\`bash
npm install
cp .env.example .env
npm run dev
\`\`\`
EOF

# TypeScript設定
npx tsc --init

# package.json更新
npm pkg set scripts.dev="nodemon src/index.ts"
npm pkg set scripts.build="tsc"
npm pkg set scripts.start="node dist/index.js"

echo "✅ セットアップ完了！"
echo "📂 cd $project_name でプロジェクトに移動してください"
```

### 演習2: AI API連携スクリプト

```bash
#!/bin/bash
# ai-chat.sh

# OpenAI APIを使った対話スクリプト
function ai_chat() {
  local prompt="$1"
  
  curl -s https://api.openai.com/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
      "model": "gpt-4",
      "messages": [{"role": "user", "content": "'"$prompt"'"}],
      "temperature": 0.7
    }' | jq -r '.choices[0].message.content'
}

# 使用例
echo "AIに質問: "
read user_input
response=$(ai_chat "$user_input")
echo "AI回答: $response"
```

### 演習3: デプロイ自動化

```bash
#!/bin/bash
# deploy.sh

echo "🚀 デプロイを開始します"

# テスト実行
echo "📝 テストを実行中..."
npm test
if [ $? -ne 0 ]; then
  echo "❌ テストが失敗しました"
  exit 1
fi

# ビルド
echo "🔨 ビルドを実行中..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ ビルドが失敗しました"
  exit 1
fi

# Git操作
echo "📤 Gitにプッシュ中..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

# Vercelデプロイ
echo "☁️ Vercelにデプロイ中..."
vercel --prod

echo "✅ デプロイ完了！"
```

---

## 📊 チートシート

### 最重要コマンド一覧表

| 操作 | コマンド | 説明 |
|------|---------|------|
| **移動** | `cd path` | ディレクトリ移動 |
| **一覧** | `ls -la` | ファイル一覧（詳細） |
| **作成** | `mkdir name` | フォルダ作成 |
| **作成** | `touch file` | ファイル作成 |
| **削除** | `rm -rf name` | 強制削除（注意） |
| **コピー** | `cp -r src dst` | 再帰的コピー |
| **移動** | `mv old new` | 移動/リネーム |
| **検索** | `find . -name "*.js"` | ファイル検索 |
| **Git追加** | `git add .` | 全ファイル追加 |
| **Gitコミット** | `git commit -m "msg"` | コミット |
| **Gitプッシュ** | `git push` | リモートへ送信 |
| **npm開始** | `npm init -y` | プロジェクト初期化 |
| **npmインストール** | `npm i package` | パッケージ追加 |
| **npm実行** | `npm run script` | スクリプト実行 |
| **プロセス確認** | `ps aux | grep node` | Node.js確認 |
| **ポート確認** | `lsof -i :3000` | ポート使用確認 |
| **強制終了** | `kill -9 PID` | プロセス終了 |

---

## 🎯 30日間マスタープラン

### Week 1: 基礎固め
- Day 1-2: ターミナル基本操作
- Day 3-4: ファイル操作マスター
- Day 5-7: Git基礎

### Week 2: 開発環境構築
- Day 8-10: Node.js/npm完全理解
- Day 11-12: エディタ連携
- Day 13-14: 環境カスタマイズ

### Week 3: 実践開発
- Day 15-17: プロジェクト作成自動化
- Day 18-19: デバッグ技術
- Day 20-21: CI/CD基礎

### Week 4: 応用・効率化
- Day 22-24: Docker入門
- Day 25-26: クラウドデプロイ
- Day 27-28: 自動化スクリプト作成
- Day 29-30: 総復習・実践プロジェクト

---

## 💡 最後のアドバイス

### CLIマスターになるための3原則

1. **怖がらない**: エラーは学習のチャンス
2. **調べる癖をつける**: `man command` や `command --help`
3. **自動化を考える**: 2回以上やることは自動化

### 次のステップ
- シェルスクリプトを書いてみる
- Dockerで開発環境を構築
- GitHub Actionsで自動化
- 自分用のdotfilesリポジトリ作成

---

*このガイドは継続的にアップデートされます*
*最終更新: 2025年1月*
*バージョン: 1.0*

**黒い画面を恐れず、プロの開発者への第一歩を踏み出しましょう！**