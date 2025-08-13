# 配信環境構築ガイド＆必要ツール一覧

## 🎥 配信環境セットアップ

### 必須ソフトウェア

#### 1. OBS Studio（配信ソフト）
```bash
# インストール
- Windows: https://obsproject.com/ja/download
- Mac: brew install --cask obs
- Linux: sudo apt install obs-studio

# 推奨設定
解像度: 1920x1080
FPS: 30
ビットレート: 3000-6000 Kbps
エンコーダ: x264 or NVENC（GPU利用可能な場合）
```

#### 2. YouTube Studio設定
```
配信設定:
- ストリームキー取得
- 低遅延モード: ON
- DVR: ON（巻き戻し可能）
- チャット: モデレート設定
- 自動字幕: ON
```

### OBS シーン構成
```
シーン1: 待機画面
├── 画像: ロゴ・アジェンダ
├── テキスト: 開始時刻カウントダウン
└── BGM: Suno AI生成音楽

シーン2: メイン配信
├── ディスプレイキャプチャ: VSCode
├── ウィンドウキャプチャ: ブラウザ
├── ウェブカメラ: 顔出し（オプション）
└── オーディオ: マイク＋デスクトップ音声

シーン3: スライド説明
├── ウィンドウキャプチャ: PowerPoint/Keynote
└── ウェブカメラ: ワイプ表示

シーン4: Q&A
├── ブラウザソース: YouTube チャット
└── ディスプレイキャプチャ: 回答画面
```

## 💻 開発環境構築

### 基本環境

#### Node.js & npm
```bash
# インストール（推奨: v20 LTS）
# Mac
brew install node

# Windows (Chocolatey)
choco install nodejs

# Linux
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 確認
node --version  # v20.x.x
npm --version   # 10.x.x
```

#### Git
```bash
# インストール
# Mac
brew install git

# Windows
winget install Git.Git

# Linux
sudo apt install git

# 初期設定
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### VSCode
```bash
# 拡張機能（必須）
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- GitLens
- GitHub Copilot (有料)
- Thunder Client（API テスト）

# 推奨設定 (settings.json)
{
  "editor.fontSize": 16,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "terminal.integrated.fontSize": 14,
  "workbench.colorTheme": "GitHub Dark Default"
}
```

## 🤖 AI開発ツール

### 無料ツール

#### 1. Google AI Studio
```
アクセス: https://aistudio.google.com
要件: Googleアカウント
制限: 
- 1分間60リクエスト
- 1日1500リクエスト
- 無料枠内で十分な開発可能
```

#### 2. Gemini CLI
```bash
# インストール
npm install -g @google/generative-ai-cli

# 設定
export GEMINI_API_KEY="your-api-key-here"

# テスト
gemini-cli generate "Hello World"
```

#### 3. Dify (Docker版)
```yaml
# docker-compose.yml
version: '3.8'
services:
  dify:
    image: langgenius/dify:latest
    ports:
      - "3000:3000"
    volumes:
      - ./data:/app/data
    environment:
      - MODE=standalone
      - LOG_LEVEL=INFO
    restart: unless-stopped

# 起動
docker-compose up -d
# アクセス: http://localhost:3000
```

#### 4. n8n
```bash
# Docker インストール
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n

# npm インストール（グローバル）
npm install n8n -g
n8n start

# アクセス: http://localhost:5678
```

### 有料ツール

#### 1. Claude Code
```bash
# 料金: $20/月
# 申込: https://claude.ai/code

# 使用方法
claude-code init
claude-code chat "プロジェクトを作成して"
```

#### 2. Codex CLI (ChatGPT Plus必要)
```bash
# 料金: ChatGPT Plus ($20/月)
# Chrome拡張機能インストール必須

# 基本コマンド
codex create "React Todo App"
codex explain "このコードを説明"
codex fix "エラーを修正"
```

## 🛠 補助ツール

### Docker Desktop
```bash
# インストール
# https://www.docker.com/products/docker-desktop/

# 動作確認
docker --version
docker-compose --version
docker run hello-world
```

### PostgreSQL (Supabase)
```bash
# Supabase CLI
npm install -g supabase

# プロジェクト初期化
supabase init
supabase start

# 接続情報
# URL: postgresql://postgres:postgres@localhost:54322/postgres
```

### Redis
```bash
# Docker で起動
docker run -d -p 6379:6379 redis:alpine

# 接続テスト
redis-cli ping  # PONG が返れば OK
```

## 📦 プロジェクトテンプレート

### Next.js スターターキット
```bash
# プロジェクト作成
npx create-next-app@latest yunico-app \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

cd yunico-app

# 追加パッケージ
npm install @supabase/supabase-js
npm install @tanstack/react-query
npm install zustand
npm install zod
npm install -D @types/node
```

### 環境変数テンプレート (.env.local)
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# AI APIs
OPENAI_API_KEY=your_openai_key
GEMINI_API_KEY=your_gemini_key
ANTHROPIC_API_KEY=your_claude_key

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Redis
REDIS_URL=redis://localhost:6379

# Stripe (課金用)
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public
```

## 🔧 トラブルシューティング環境

### ログ監視ツール
```bash
# Logtrail (VSCode拡張)
# リアルタイムログ監視

# Better Comments (VSCode拡張)
# コメントの視認性向上
```

### ネットワークツール
```bash
# ngrok（ローカル環境公開）
npm install -g ngrok
ngrok http 3000

# localtunnel（代替）
npm install -g localtunnel
lt --port 3000
```

## 📱 配信用追加機器

### 推奨ハードウェア
```
必須:
- マイク: Blue Yeti or Audio-Technica AT2020
- ウェブカメラ: Logitech C920以上
- 安定したインターネット: 上り10Mbps以上

推奨:
- 外部モニター: デュアルディスプレイ
- ストリームデッキ: シーン切り替え用
- 照明: リングライト or キーライト
```

## 🚀 配信前チェックリスト

### 30分前
- [ ] OBS起動・シーン確認
- [ ] マイクテスト
- [ ] 画面共有テスト
- [ ] インターネット速度確認
- [ ] 配布資料アップロード

### 10分前
- [ ] YouTube Studio配信開始
- [ ] 待機画面表示
- [ ] BGM開始
- [ ] チャット確認

### 5分前
- [ ] 開発環境起動
- [ ] サンプルコード準備
- [ ] ブラウザタブ整理
- [ ] 通知OFF

### 配信開始時
- [ ] 録画開始
- [ ] シーン切り替え確認
- [ ] 音声レベル確認
- [ ] チャットモデレーター確認

## 📝 バックアップ計画

### 技術トラブル対策
```
Plan A: メイン PC + 光回線
Plan B: サブ PC + モバイル回線
Plan C: 録画済み動画配信
```

### データバックアップ
```bash
# Git自動コミット
git add -A
git commit -m "Live coding backup $(date)"
git push origin main

# クラウドバックアップ
# Google Drive / Dropbox 同期設定
```

## 🔐 セキュリティ設定

### 配信時の注意
```
必須:
- APIキーは環境変数で管理
- .env ファイルは .gitignore に追加
- 画面共有時は必要な画面のみ
- パスワードは絶対に表示しない

推奨:
- 専用配信アカウント使用
- VPN経由での配信
- 2段階認証設定
```

## 📚 参考リソース

### 公式ドキュメント
- [Next.js](https://nextjs.org/docs)
- [Google AI Studio](https://ai.google.dev/docs)
- [Dify](https://docs.dify.ai)
- [n8n](https://docs.n8n.io)
- [Claude API](https://docs.anthropic.com)
- [Supabase](https://supabase.com/docs)

### コミュニティ
- GitHub: wadoyuniko/ai-handson-series
- Discord: 準備中
- LINEオープンチャット: 配信内で案内

## 🎯 最終確認

配信準備完了度チェック:
- [ ] 全ツールインストール完了
- [ ] サンプルプロジェクト動作確認
- [ ] 配信環境テスト完了
- [ ] バックアップ準備完了
- [ ] トラブルシューティング準備完了

準備完了したら、素晴らしい配信を！🚀