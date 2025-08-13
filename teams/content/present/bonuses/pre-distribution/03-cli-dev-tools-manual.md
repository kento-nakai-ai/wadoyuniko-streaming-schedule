# CLI・開発ツール完全攻略マニュアル

## 目次
1. [ターミナル・CLI基礎](#ターミナル・cli基礎)
2. [Git完全マスター](#git完全マスター)
3. [npm/yarn実践活用](#npmyarn実践活用)
4. [VS Code拡張機能厳選](#vs-code拡張機能厳選)
5. [Docker基礎から実践まで](#docker基礎から実践まで)
6. [開発生産性向上のTips](#開発生産性向上のtips)
7. [トラブルシューティング](#トラブルシューティング)

---

## ターミナル・CLI基礎

### 基本概念の理解

CLIは「Command Line Interface」の略で、テキストベースでコンピュータと対話するインターフェースです。GUI（グラフィカルユーザーインターフェース）と比較して、以下の利点があります：

- **高速操作**: マウスを使わずにキーボードのみで操作可能
- **自動化**: スクリプトによる作業の自動化が容易
- **リモート操作**: SSH接続でのリモートサーバー管理
- **開発効率**: 開発ツールとの連携が優秀

### 必須コマンド一覧

#### ファイル・ディレクトリ操作
```bash
# 現在のディレクトリを表示
pwd

# ディレクトリの中身を一覧表示
ls
ls -la    # 詳細表示（隠しファイルも含む）
ls -lah   # ファイルサイズを人間が読みやすい形式で表示

# ディレクトリ移動
cd /path/to/directory  # 絶対パス
cd ../                 # 一つ上のディレクトリ
cd ~                   # ホームディレクトリ
cd -                   # 前のディレクトリに戻る

# ディレクトリ作成
mkdir new_directory
mkdir -p path/to/nested/directory  # 階層ディレクトリを一括作成

# ファイル・ディレクトリ削除
rm filename
rm -r directory_name    # ディレクトリを再帰的に削除
rm -rf directory_name   # 強制削除（注意して使用）

# ファイル・ディレクトリコピー
cp source destination
cp -r source_dir destination_dir  # ディレクトリをコピー

# ファイル・ディレクトリ移動・リネーム
mv old_name new_name
mv file /new/location/
```

#### テキスト処理
```bash
# ファイル内容表示
cat filename
less filename    # ページごとに表示
head filename    # 先頭10行表示
tail filename    # 末尾10行表示
tail -f filename # ファイルの末尾をリアルタイム監視

# 文字列検索
grep "search_term" filename
grep -r "search_term" directory/  # ディレクトリ内を再帰検索
grep -i "search_term" filename    # 大文字小文字を区別しない

# ファイル内の文字列置換
sed 's/old_text/new_text/g' filename
sed -i 's/old_text/new_text/g' filename  # ファイルを直接編集
```

#### システム情報・プロセス管理
```bash
# システム情報
uname -a        # システム情報表示
whoami          # 現在のユーザー名
id              # ユーザーID・グループID表示
df -h           # ディスク使用量表示
free -h         # メモリ使用量表示

# プロセス管理
ps aux          # 実行中のプロセス一覧
top             # プロセス使用状況をリアルタイム表示
htop            # topの高機能版（要インストール）
kill PID        # プロセス終了
killall process_name  # プロセス名で一括終了
```

### ショートカット・効率化技法

#### キーボードショートカット
```bash
Ctrl + C        # 現在のコマンド中断
Ctrl + Z        # プロセスを一時停止
Ctrl + A        # 行の先頭に移動
Ctrl + E        # 行の末尾に移動
Ctrl + R        # コマンド履歴検索
Ctrl + L        # 画面クリア（clear命令と同等）
Tab             # コマンド・ファイル名補完
!!              # 直前のコマンドを再実行
!$              # 直前のコマンドの最後の引数を使用
```

#### エイリアス設定
```bash
# ~/.bashrc または ~/.zshrc に追加
alias ll='ls -la'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'
alias grep='grep --color=auto'
alias cls='clear'
alias h='history'
alias df='df -h'
alias du='du -h'

# Git関連エイリアス
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git log --oneline'
alias gd='git diff'
```

---

## Git完全マスター

### Git基本概念

Gitは分散型バージョン管理システムで、ファイルの変更履歴を管理し、複数人での開発を効率化します。

#### 重要な概念
- **リポジトリ**: プロジェクトのファイルと履歴を保存する場所
- **コミット**: ファイルの変更を記録するスナップショット
- **ブランチ**: 開発の流れを分岐させる機能
- **マージ**: 複数のブランチを統合する操作

### 基本操作

#### 初期設定
```bash
# ユーザー情報設定
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# エディタ設定
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"          # Vim

# 設定確認
git config --list
```

#### リポジトリ操作
```bash
# 新規リポジトリ初期化
git init

# 既存リポジトリをクローン
git clone https://github.com/user/repository.git
git clone git@github.com:user/repository.git  # SSH

# リモートリポジトリ追加
git remote add origin https://github.com/user/repository.git
git remote -v  # リモートリポジトリ一覧表示
```

#### ファイル管理
```bash
# ファイルをステージング
git add filename
git add .              # 全ファイル
git add *.js           # 特定の拡張子
git add -A             # 削除も含めて全変更

# ステージング状態確認
git status
git status -s          # 短縮形式

# 変更差分確認
git diff               # ワーキングディレクトリとステージング
git diff --staged      # ステージングとコミット
git diff HEAD          # ワーキングディレクトリと最新コミット
```

#### コミット操作
```bash
# コミット実行
git commit -m "コミットメッセージ"
git commit -am "ステージング込みコミット"  # 追跡済みファイルのみ

# コミット修正
git commit --amend -m "修正されたメッセージ"
git commit --amend --no-edit  # メッセージ変更なし

# コミット履歴確認
git log
git log --oneline      # 一行表示
git log --graph        # グラフ表示
git log --stat         # 変更ファイル表示
```

### ブランチ管理

#### ブランチ操作
```bash
# ブランチ一覧
git branch
git branch -a          # リモートブランチも表示
git branch -r          # リモートブランチのみ

# 新規ブランチ作成
git branch feature-branch
git checkout -b feature-branch  # 作成と切り替えを同時実行
git switch -c feature-branch    # 新しいコマンド（Git 2.23+）

# ブランチ切り替え
git checkout branch-name
git switch branch-name          # 新しいコマンド

# ブランチ削除
git branch -d branch-name       # マージ済みブランチ削除
git branch -D branch-name       # 強制削除
```

#### マージとリベース
```bash
# マージ実行
git checkout main
git merge feature-branch

# リベース実行
git checkout feature-branch
git rebase main

# 対話的リベース
git rebase -i HEAD~3   # 直近3コミットを編集

# マージコンフリクト解決
git status             # コンフリクトファイル確認
# ファイル編集でコンフリクト解決
git add .
git commit
```

### リモートリポジトリ操作

```bash
# リモートから取得
git fetch origin       # 取得のみ
git pull origin main   # 取得とマージ
git pull --rebase      # リベースでマージ

# リモートにプッシュ
git push origin main
git push -u origin feature-branch  # 初回プッシュ時
git push --force-with-lease        # 安全な強制プッシュ

# リモートブランチ削除
git push origin --delete branch-name
```

### 高度なGit活用

#### スタッシュ機能
```bash
# 作業中の変更を一時保存
git stash
git stash save "作業の説明"

# スタッシュ一覧確認
git stash list

# スタッシュ復元
git stash pop           # 最新のスタッシュを復元・削除
git stash apply         # スタッシュを復元（削除はしない）
git stash apply stash@{2}  # 特定のスタッシュを復元

# スタッシュ削除
git stash drop stash@{1}
git stash clear         # 全スタッシュ削除
```

#### タグ管理
```bash
# タグ作成
git tag v1.0.0
git tag -a v1.0.0 -m "Version 1.0.0 release"

# タグ一覧
git tag
git tag -l "v1.*"      # パターンマッチ

# タグをリモートにプッシュ
git push origin v1.0.0
git push origin --tags  # 全タグをプッシュ
```

---

## npm/yarn実践活用

### パッケージマネージャー比較

| 機能 | npm | yarn |
|------|-----|------|
| インストール速度 | 普通 | 高速 |
| セキュリティ | 良好 | 良好 |
| オフライン対応 | 限定的 | 対応 |
| ワークスペース | 対応 | 対応 |
| 学習コスト | 低 | 中 |

### npm基本操作

#### プロジェクト初期化
```bash
# package.json作成
npm init
npm init -y            # デフォルト設定で作成

# 特定のテンプレートで初期化
npm init react-app my-app
npm init next-app my-next-app
```

#### パッケージ管理
```bash
# パッケージインストール
npm install package-name
npm install package-name@version  # 特定バージョン
npm install package-name@latest   # 最新版

# 開発依存関係としてインストール
npm install --save-dev package-name
npm install -D package-name

# グローバルインストール
npm install -g package-name

# package.jsonからインストール
npm install
npm ci                 # より高速・確実（CI環境推奨）
```

#### パッケージ管理コマンド
```bash
# インストール済みパッケージ一覧
npm list
npm list --depth=0     # トップレベルのみ
npm list -g            # グローバルパッケージ

# パッケージ情報確認
npm info package-name
npm view package-name versions  # 利用可能バージョン

# パッケージ更新
npm update package-name
npm update             # 全パッケージ更新
npm outdated           # 古いパッケージ確認

# パッケージ削除
npm uninstall package-name
npm uninstall -g package-name   # グローバル削除
```

#### スクリプト実行
```bash
# package.jsonのスクリプト実行
npm run script-name
npm start              # "start"スクリプト
npm test               # "test"スクリプト
npm run build          # "build"スクリプト

# スクリプト一覧表示
npm run
```

### yarn活用

#### 基本コマンド対応表
| 操作 | npm | yarn |
|------|-----|------|
| インストール | `npm install` | `yarn` |
| パッケージ追加 | `npm install pkg` | `yarn add pkg` |
| 開発依存追加 | `npm install -D pkg` | `yarn add -D pkg` |
| パッケージ削除 | `npm uninstall pkg` | `yarn remove pkg` |
| スクリプト実行 | `npm run script` | `yarn script` |
| 更新 | `npm update` | `yarn upgrade` |

#### yarn特有の機能
```bash
# ワークスペース設定
yarn workspaces info

# 依存関係の重複解決
yarn dedupe

# ライセンス確認
yarn licenses list

# 高速インストール（Plug'n'Play）
yarn install --pnp
```

### package.json最適化

#### scripts設定例
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write .",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf .next out dist",
    "analyze": "ANALYZE=true npm run build"
  }
}
```

#### 依存関係管理のベストプラクティス
```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=8.0.0"
  },
  "packageManager": "yarn@3.6.0"
}
```

---

## VS Code拡張機能厳選

### 必須拡張機能

#### 1. 言語サポート
- **TypeScript Hero**: TypeScript開発支援
- **JavaScript (ES6) code snippets**: ES6スニペット
- **Auto Rename Tag**: HTMLタグの自動リネーム
- **Bracket Pair Colorizer**: 括弧のペア色分け
- **indent-rainbow**: インデントの色分け

#### 2. コード品質
- **ESLint**: JavaScript/TypeScriptリンター
- **Prettier**: コードフォーマッター
- **SonarLint**: コード品質チェック
- **Code Spell Checker**: スペルチェック

#### 3. Git統合
- **GitLens**: Git履歴・注釈表示
- **Git History**: Gitログビューア
- **Git Graph**: ブランチグラフ表示

#### 4. 生産性向上
- **Auto Import - ES6**: 自動インポート
- **Path Intellisense**: パス補完
- **IntelliSense for CSS**: CSS補完
- **Emmet**: HTML/CSS高速入力

### フレームワーク特化拡張機能

#### React開発
```json
"recommendations": [
  "ms-vscode.vscode-typescript-next",
  "bradlc.vscode-tailwindcss",
  "formulahendry.auto-rename-tag",
  "christian-kohler.path-intellisense",
  "ms-vscode.vscode-json"
]
```

#### Next.js開発
- **Next.js snippets**: Next.js専用スニペット
- **Tailwind CSS IntelliSense**: Tailwind補完
- **Thunder Client**: API テスティング

#### Vue.js開発
- **Vetur**: Vue.js言語サポート
- **Vue 3 Snippets**: Vue3スニペット

### 設定ファイル最適化

#### settings.json設定例
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.autoSave": "onFocusChange",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "git.autofetch": true,
  "extensions.ignoreRecommendations": false
}
```

#### keybindings.json設定例
```json
[
  {
    "key": "ctrl+shift+f",
    "command": "workbench.action.findInFiles"
  },
  {
    "key": "ctrl+shift+r",
    "command": "workbench.action.reloadWindow"
  },
  {
    "key": "ctrl+k ctrl+s",
    "command": "workbench.action.openGlobalKeybindings"
  }
]
```

---

## Docker基礎から実践まで

### Docker基本概念

Dockerはコンテナ仮想化技術で、アプリケーションとその実行環境を軽量にパッケージ化します。

#### 主要概念
- **イメージ**: アプリケーションの実行環境テンプレート
- **コンテナ**: イメージから作成された実行中のインスタンス
- **Dockerfile**: イメージを作成するための設定ファイル
- **Docker Compose**: 複数コンテナアプリケーションの管理

### 基本操作

#### イメージ管理
```bash
# イメージ一覧表示
docker images
docker image ls

# イメージ検索
docker search nginx

# イメージ取得
docker pull nginx:latest
docker pull node:18-alpine

# イメージ削除
docker rmi image_name
docker image prune    # 未使用イメージ削除
```

#### コンテナ操作
```bash
# コンテナ実行
docker run nginx
docker run -d nginx                    # バックグラウンド実行
docker run -p 8080:80 nginx           # ポートマッピング
docker run -v /host/path:/container/path nginx  # ボリュームマウント

# 実行中コンテナ一覧
docker ps
docker ps -a          # 停止中も含む

# コンテナ停止・削除
docker stop container_id
docker rm container_id
docker container prune  # 停止中コンテナを一括削除
```

#### コンテナ内操作
```bash
# コンテナ内でコマンド実行
docker exec -it container_id bash
docker exec container_id ls /app

# ログ確認
docker logs container_id
docker logs -f container_id  # リアルタイム表示
```

### Dockerfile作成

#### Node.js アプリケーション例
```dockerfile
# ベースイメージ指定
FROM node:18-alpine

# 作業ディレクトリ設定
WORKDIR /app

# 依存関係ファイルコピー
COPY package*.json ./

# 依存関係インストール
RUN npm ci --only=production

# アプリケーションファイルコピー
COPY . .

# ポート公開
EXPOSE 3000

# ヘルスチェック
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000/health || exit 1

# 実行ユーザー設定
USER node

# 起動コマンド
CMD ["npm", "start"]
```

#### マルチステージビルド例
```dockerfile
# ビルドステージ
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 本番ステージ
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose活用

#### 基本設定（docker-compose.yml）
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
    volumes:
      - ./src:/app/src:ro
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

#### Docker Compose コマンド
```bash
# サービス起動
docker-compose up
docker-compose up -d      # バックグラウンド実行
docker-compose up --build # イメージ再ビルド

# サービス停止
docker-compose down
docker-compose down -v    # ボリュームも削除

# ログ確認
docker-compose logs
docker-compose logs -f web  # 特定サービス

# スケーリング
docker-compose up --scale web=3
```

### 開発環境での活用

#### 開発用Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

# パッケージファイルのみ先にコピー（キャッシュ効率化）
COPY package*.json ./
RUN npm install

# 開発時はボリュームマウントするため、コードコピーは不要
# COPY . .

EXPOSE 3000

# 開発サーバー起動（ホットリロード対応）
CMD ["npm", "run", "dev"]
```

#### 開発用docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules  # node_modulesを除外
    environment:
      - NODE_ENV=development
    stdin_open: true
    tty: true
```

---

## 開発生産性向上のTips

### ワークフロー最適化

#### 1. シェル環境の改善

**Oh My Zshの導入**
```bash
# Oh My Zsh インストール
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 便利なプラグインを有効化 (~/.zshrc)
plugins=(
  git
  npm
  node
  docker
  vscode
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```

**便利なエイリアス集**
```bash
# ~/.zshrc に追加
alias c='clear'
alias q='exit'
alias ..='cd ..'
alias ...='cd ../..'
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Git エイリアス
alias g='git'
alias gs='git status'
alias ga='git add'
alias gaa='git add .'
alias gc='git commit -m'
alias gca='git commit -am'
alias gp='git push'
alias gl='git pull'
alias gco='git checkout'
alias gb='git branch'
alias gm='git merge'
alias gd='git diff'
alias glog='git log --oneline --graph --decorate'

# Docker エイリアス
alias d='docker'
alias dc='docker-compose'
alias dps='docker ps'
alias dimg='docker images'
alias dstop='docker stop $(docker ps -q)'
alias drm='docker rm $(docker ps -aq)'

# npm/yarn エイリアス
alias ni='npm install'
alias ns='npm start'
alias nt='npm test'
alias nb='npm run build'
alias nr='npm run'
alias yi='yarn install'
alias ys='yarn start'
alias yt='yarn test'
alias yb='yarn build'
```

#### 2. 開発環境セットアップスクリプト

**プロジェクト初期化スクリプト**
```bash
#!/bin/bash
# setup-project.sh

PROJECT_NAME=$1

if [ -z "$PROJECT_NAME" ]; then
  echo "Usage: setup-project.sh <project-name>"
  exit 1
fi

echo "🚀 Setting up project: $PROJECT_NAME"

# プロジェクトディレクトリ作成
mkdir $PROJECT_NAME
cd $PROJECT_NAME

# Git初期化
git init
echo "node_modules/
.env
.env.local
dist/
build/
.DS_Store" > .gitignore

# パッケージ初期化
npm init -y

# 基本的な依存関係インストール
npm install -D eslint prettier husky lint-staged

# ESLint設定
npx eslint --init

# Prettier設定
echo '{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}' > .prettierrc

# package.json スクリプト追加
npm pkg set scripts.lint="eslint . --ext .js,.jsx,.ts,.tsx"
npm pkg set scripts.format="prettier --write ."

# README作成
echo "# $PROJECT_NAME

## Getting Started

\`\`\`bash
npm install
npm start
\`\`\`
" > README.md

echo "✅ Project setup complete!"
```

#### 3. 自動化スクリプト集

**デプロイスクリプト**
```bash
#!/bin/bash
# deploy.sh

echo "🔍 Running tests..."
npm test

if [ $? -ne 0 ]; then
  echo "❌ Tests failed. Deployment aborted."
  exit 1
fi

echo "🔧 Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Deployment aborted."
  exit 1
fi

echo "📤 Deploying to production..."
git add .
git commit -m "Deploy: $(date)"
git push origin main

echo "✅ Deployment complete!"
```

**環境クリーンアップスクリプト**
```bash
#!/bin/bash
# cleanup.sh

echo "🧹 Cleaning up development environment..."

# Node.js キャッシュクリア
npm cache clean --force

# Docker クリーンアップ
docker system prune -af
docker volume prune -f

# 不要なnode_modules削除
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

# Git ガベージコレクション
git gc --aggressive --prune=now

echo "✅ Cleanup complete!"
```

### IDE・エディタ設定の共有

#### VS Code設定同期
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

```json
// .vscode/extensions.json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

---

## トラブルシューティング

### 一般的な問題と解決法

#### 1. npm/yarn関連の問題

**依存関係の競合**
```bash
# package-lock.json / yarn.lock 削除
rm package-lock.json
rm -rf node_modules
npm install

# または
rm yarn.lock
rm -rf node_modules
yarn install
```

**権限エラー**
```bash
# npm グローバルディレクトリ変更
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
# ~/.bashrc に export PATH=~/.npm-global/bin:$PATH を追加
```

#### 2. Git関連の問題

**マージコンフリクト解決**
```bash
# コンフリクトファイル確認
git status

# コンフリクト解決後
git add .
git commit

# マージ取り消し
git merge --abort
```

**コミット履歴修正**
```bash
# 直前のコミット修正
git commit --amend

# 複数コミットの履歴修正
git rebase -i HEAD~3

# 特定のコミットを取り消し
git revert commit_hash
```

#### 3. Docker関連の問題

**コンテナが起動しない**
```bash
# ログ確認
docker logs container_name

# リソース使用量確認
docker stats

# ポート競合確認
netstat -tulpn | grep :8080
```

**イメージビルドエラー**
```bash
# キャッシュを使わずビルド
docker build --no-cache .

# ビルドコンテキスト確認
docker build --progress=plain .
```

#### 4. 開発環境の問題

**環境変数が読み込まれない**
```bash
# .env ファイルの確認
cat .env

# 権限確認
ls -la .env

# シェル再起動
source ~/.bashrc
# または
exec $SHELL
```

### パフォーマンス最適化

#### CLIコマンド高速化
```bash
# history検索高速化 (~/.bashrcに追加)
export HISTSIZE=10000
export HISTFILESIZE=20000
export HISTCONTROL=ignoredups:erasedups

# ディスクI/O最適化
alias ls='ls --color=auto'
alias grep='grep --color=auto'
```

#### Docker最適化
```dockerfile
# マルチステージビルドでイメージサイズ削減
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

このマニュアルを参考に、効率的な開発環境を構築し、日々の開発作業を大幅に改善してください。各ツールの組み合わせにより、開発生産性は飛躍的に向上します。