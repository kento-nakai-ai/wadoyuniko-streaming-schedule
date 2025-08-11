# 📋 Claude Codeコマンド完全リファレンス

## 全コマンドを網羅！Claude Codeを使いこなすための決定版ガイド

**400以上のコマンドを体系的に整理。初心者から上級者まで、すべてのコマンドをマスターできます。**

## 📚 カテゴリ別コマンド一覧

### 1. [基本操作](#基本操作)
### 2. [プロジェクト管理](#プロジェクト管理)  
### 3. [ファイル操作](#ファイル操作)
### 4. [コード生成・編集](#コード生成・編集)
### 5. [AI組織管理](#ai組織管理)
### 6. [テスト・品質](#テスト・品質)
### 7. [デプロイ・運用](#デプロイ・運用)
### 8. [設定・カスタマイズ](#設定・カスタマイズ)
### 9. [デバッグ・トラブル](#デバッグ・トラブル)
### 10. [高度な機能](#高度な機能)

---

## 🔰 基本操作

### 認証・アカウント管理

```bash
# ログイン
claude auth login
claude auth login --provider=google
claude auth login --sso

# ログアウト
claude auth logout
claude auth logout --all-devices

# アカウント情報
claude auth whoami
claude auth status
claude account info
claude account usage
claude account billing

# APIキー管理
claude auth key generate
claude auth key list  
claude auth key revoke <key-id>
claude auth key rotate
```

### 基本情報・ヘルプ

```bash
# バージョン情報
claude --version
claude -v

# ヘルプ
claude --help
claude -h
claude help <command>

# システム情報
claude system info
claude system requirements
claude system diagnostics

# アップデート
claude update
claude update --check
claude update --beta
```

### 基本設定

```bash
# 設定表示
claude config list
claude config show
claude config get <key>

# 設定変更
claude config set <key> <value>
claude config unset <key>
claude config reset

# 設定例
claude config set model claude-3-opus
claude config set max_tokens 4096
claude config set temperature 0.7
```

---

## 📁 プロジェクト管理

### プロジェクト作成・初期化

```bash
# 新規プロジェクト
claude init
claude init <project-name>
claude init --template=<template-name>
claude init --interactive

# テンプレートから作成
claude create <project-name>
claude create <project-name> --template=nextjs
claude create <project-name> --template=react-ts
claude create <project-name> --template=node-api
claude create <project-name> --template=python-ml

# 既存プロジェクトに追加
claude init --existing
claude setup --project-type=web-app
```

### プロジェクト情報

```bash
# プロジェクト状態
claude status
claude info
claude summary

# プロジェクト統計
claude stats
claude analytics
claude metrics

# プロジェクト構造
claude tree
claude structure
claude dependencies
```

### プロジェクト設定

```bash
# 設定ファイル管理
claude config init
claude config validate
claude config migrate

# 環境設定
claude env list
claude env set <key> <value>
claude env get <key>
claude env unset <key>

# プロジェクト固有設定
claude project set <key> <value>
claude project config
claude project workspace
```

---

## 📄 ファイル操作

### ファイル・ディレクトリ基本操作

```bash
# ファイル作成
claude create-file <filename>
claude touch <filename>
claude new file <filename>

# ディレクトリ作成
claude mkdir <dirname>
claude create-dir <dirname>

# ファイル読み込み
claude read <filename>
claude cat <filename>
claude show <filename>
claude view <filename>

# ファイル編集
claude edit <filename>
claude edit <filename> "<instruction>"
claude modify <filename> "<changes>"
```

### ファイル検索・リスト

```bash
# ファイルリスト
claude list
claude ls
claude ls <directory>
claude ls --recursive
claude ls --pattern="*.js"

# ファイル検索
claude find <pattern>
claude search <text>
claude grep <pattern>
claude locate <filename>

# ファイル情報
claude file-info <filename>
claude file-stats <filename>
claude file-type <filename>
```

### ファイル操作（高度）

```bash
# ファイルコピー・移動
claude copy <source> <destination>
claude cp <source> <destination>
claude move <source> <destination>
claude mv <source> <destination>

# ファイル削除
claude delete <filename>
claude rm <filename>
claude remove <filename>

# ファイル権限
claude chmod <permissions> <filename>
claude chown <owner> <filename>

# ファイル比較
claude diff <file1> <file2>
claude compare <file1> <file2>
```

---

## ⚙️ コード生成・編集

### コンポーネント生成

```bash
# React コンポーネント
claude generate component <name>
claude gen component <name> --props="<props>"
claude create component <name> --type=functional
claude create component <name> --type=class

# Vue コンポーネント
claude generate vue-component <name>
claude gen vue <name> --composition-api

# その他フレームワーク
claude generate angular-component <name>
claude generate svelte-component <name>
```

### API・サーバー生成

```bash
# REST API
claude generate api <name>
claude gen api <name> --crud
claude gen api <name> --methods=get,post,put,delete

# GraphQL
claude generate graphql-schema
claude gen graphql-resolver <name>
claude gen graphql-mutation <name>

# サーバー設定
claude generate server --framework=express
claude generate server --framework=fastify  
claude generate server --framework=koa
```

### データベース・モデル

```bash
# データベーススキーマ
claude generate schema <name>
claude gen migration <name>
claude gen model <name> --fields="<fields>"

# ORM設定
claude generate orm-config --provider=prisma
claude generate orm-config --provider=typeorm
claude generate orm-config --provider=sequelize

# データベースクエリ
claude generate query <description>
claude gen sql "<natural-language-query>"
```

### テスト生成

```bash
# ユニットテスト
claude generate test <filename>
claude gen test <filename> --framework=jest
claude gen test <filename> --framework=mocha
claude gen test <filename> --coverage=90

# 統合テスト
claude generate integration-test <name>
claude gen e2e-test <name>

# テスト設定
claude generate test-config --framework=jest
claude setup testing --framework=cypress
```

---

## 👥 AI組織管理

### エージェント管理

```bash
# エージェント作成
claude create-agent <role>
claude agent create <name> --role=<role>
claude agent new <name> --template=<template>

# エージェント情報
claude agent list
claude agent info <name>
claude agent status <name>
claude agent stats <name>

# エージェント操作
claude agent start <name>
claude agent stop <name>
claude agent restart <name>
claude agent pause <name>
claude agent resume <name>
```

### エージェント設定

```bash
# 設定編集
claude agent config <name>
claude agent set <name> <key> <value>
claude agent get <name> <key>

# 権限管理
claude agent permissions <name>
claude agent grant <name> <permission>
claude agent revoke <name> <permission>

# 学習・記憶管理
claude agent memory <name>
claude agent learn <name> "<information>"
claude agent forget <name> "<topic>"
claude agent remember <name> "<fact>"
```

### チーム・組織操作

```bash
# チーム管理
claude team create <name>
claude team add <agent> --to=<team>
claude team remove <agent> --from=<team>
claude team list

# 組織会議
claude meeting <topic>
claude meeting <topic> --participants=<agents>
claude meeting <topic> --duration=<minutes>

# コラボレーション
claude collaborate <task>
claude pair-program <task> --with=<agent>
claude discuss <topic> --with=<agents>
```

### コミュニケーション

```bash
# 直接対話
claude chat <agent>
claude talk <agent> "<message>"
claude ask <agent> "<question>"

# グループ対話
claude group-chat <agents>
claude broadcast "<message>"
claude announce "<message>"

# 専門相談
claude consult <specialist> --about="<topic>"
claude expert-advice <domain>
claude second-opinion <topic>
```

---

## 🧪 テスト・品質

### テスト実行

```bash
# 基本テスト
claude test
claude test <filename>
claude test --watch
claude test --coverage

# テストタイプ別
claude test unit
claude test integration  
claude test e2e
claude test performance

# テスト設定
claude test --reporter=<format>
claude test --timeout=<seconds>
claude test --parallel
claude test --verbose
```

### コード品質

```bash
# リンティング
claude lint
claude lint <filename>
claude lint --fix
claude lint --format=<format>

# フォーマット
claude format
claude format <filename>
claude format --check
claude format --write

# 型チェック
claude typecheck
claude typecheck <filename>
claude typecheck --strict
```

### 静的解析

```bash
# コード解析
claude analyze
claude analyze <filename>
claude analyze --type=<analysis-type>
claude code-quality

# セキュリティ
claude security-scan
claude vulnerability-check
claude security-audit
claude deps-check

# パフォーマンス
claude performance-analyze
claude bundle-analyze
claude memory-analyze
```

### レビュー

```bash
# コードレビュー
claude review
claude review <filename>
claude review --reviewer=<agent>
claude review --checklist=<checklist>

# PR レビュー
claude pr-review <pr-number>
claude review-request --reviewers=<agents>

# アーキテクチャレビュー
claude arch-review
claude design-review <component>
```

---

## 🚀 デプロイ・運用

### ビルド

```bash
# 基本ビルド
claude build
claude build --env=<environment>
claude build --optimize
claude build --watch

# 環境別ビルド
claude build production
claude build development
claude build staging

# ビルド設定
claude build-config
claude build --target=<target>
claude build --platform=<platform>
```

### デプロイメント

```bash
# 基本デプロイ
claude deploy
claude deploy <environment>
claude deploy --strategy=<strategy>

# プラットフォーム別
claude deploy vercel
claude deploy netlify
claude deploy aws
claude deploy gcp
claude deploy azure

# デプロイ管理
claude deploy status
claude deploy rollback
claude deploy history
claude deployment list
```

### 運用・監視

```bash
# サーバー操作
claude start
claude stop  
claude restart
claude reload

# 監視
claude monitor
claude health-check
claude status-check
claude uptime

# ログ管理
claude logs
claude logs --tail=<lines>
claude logs --follow
claude logs --level=<level>
```

### 環境管理

```bash
# 環境切り替え
claude env switch <environment>
claude env create <environment>
claude env delete <environment>

# 環境同期
claude env sync
claude env copy <from> <to>
claude env compare <env1> <env2>

# 秘密情報管理
claude secrets list
claude secrets set <key> <value>
claude secrets get <key>
claude secrets delete <key>
```

---

## ⚙️ 設定・カスタマイズ

### グローバル設定

```bash
# エディタ設定
claude config set editor <editor>
claude config set theme <theme>
claude config set font-size <size>

# 動作設定
claude config set auto-save true
claude config set backup-frequency <minutes>
claude config set max-history <count>

# パフォーマンス設定
claude config set parallel-jobs <count>
claude config set memory-limit <size>
claude config set cache-size <size>
```

### プラグイン・拡張

```bash
# プラグイン管理
claude plugin list
claude plugin search <name>
claude plugin install <name>
claude plugin uninstall <name>
claude plugin update <name>

# プラグイン開発
claude plugin create <name>
claude plugin publish <name>
claude plugin validate <name>

# 拡張機能
claude extension list
claude extension enable <name>
claude extension disable <name>
```

### テンプレート・スニペット

```bash
# テンプレート管理
claude template list
claude template create <name>
claude template edit <name>
claude template delete <name>

# スニペット
claude snippet list
claude snippet create <name>
claude snippet use <name>

# 設定エクスポート・インポート
claude config export <filename>
claude config import <filename>
claude config sync
```

---

## 🔧 デバッグ・トラブル

### デバッグ情報

```bash
# システム診断
claude doctor
claude diagnose
claude check-health
claude system-info

# 接続チェック
claude ping
claude connection-test
claude api-test
claude network-check

# 設定検証
claude validate-config
claude check-setup
claude verify-installation
```

### ログ・履歴

```bash
# ログ確認
claude logs --debug
claude logs --error
claude logs --system
claude logs --agent=<name>

# 履歴管理
claude history
claude history --limit=<count>
claude history clear
claude history export

# トレース
claude trace <command>
claude trace --verbose <command>
claude profile <command>
```

### リセット・復旧

```bash
# リセット操作
claude reset
claude reset config
claude reset cache
claude reset agents

# 復旧操作
claude recover
claude backup restore <backup-id>
claude rollback <version>

# クリーンアップ
claude clean
claude clean cache
claude clean temp
claude clean logs
```

### パフォーマンス

```bash
# パフォーマンス監視
claude perf monitor
claude resource-usage
claude memory-usage
claude cpu-usage

# 最適化
claude optimize
claude optimize cache
claude optimize memory
claude optimize performance

# ベンチマーク
claude benchmark
claude speed-test
claude performance-test
```

---

## 🚀 高度な機能

### スクリプト・自動化

```bash
# スクリプト実行
claude script run <script-name>
claude exec <command>
claude batch <commands-file>

# 自動化
claude automate <task>
claude schedule <task> --cron="<cron-expression>"
claude workflow create <name>
claude workflow run <name>

# パイプライン
claude pipeline create <name>
claude pipeline run <name>
claude pipeline status <name>
```

### 統合・連携

```bash
# Git 統合
claude git status
claude git commit "<message>"
claude git push
claude git pull

# IDE 統合
claude vscode
claude jetbrains
claude vim
claude emacs

# 外部サービス
claude slack notify "<message>"
claude discord notify "<message>"
claude webhook <url> <data>
```

### 実験的機能

```bash
# ベータ機能
claude beta enable <feature>
claude beta disable <feature>
claude beta list

# 実験モード
claude experimental <command>
claude preview <feature>
claude alpha-test <feature>

# 開発者向け
claude dev-mode enable
claude debug-mode enable
claude verbose-mode enable
```

### AI モデル・設定

```bash
# モデル管理
claude model list
claude model switch <model>
claude model info <model>

# 高度な AI 設定
claude ai-config temperature <value>
claude ai-config max-tokens <value>
claude ai-config top-p <value>
claude ai-config frequency-penalty <value>

# 学習・トレーニング
claude train <data>
claude fine-tune <model> <data>
claude evaluate <model>
```

---

## 🎯 実用的な使用例

### 日常的な開発ワークフロー

```bash
# 朝の開始
claude status
claude pull origin main
claude agent start-team

# 開発中
claude chat cto "新機能について相談"
claude generate component UserProfile --props="user,onUpdate"
claude test --watch

# 終了時
claude review --comprehensive
claude commit "feat: add user profile component"
claude push
claude agent pause-team
```

### プロジェクト立ち上げ

```bash
# セットアップ
claude init my-saas-app --template=nextjs-saas
cd my-saas-app
claude team create --preset=startup

# 初期開発
claude discuss "アーキテクチャ設計" --with=cto,architect
claude generate api auth --methods=register,login,logout
claude generate component Dashboard --auth-required

# 品質確保
claude security-scan
claude performance-test
claude deploy staging
```

### 緊急対応

```bash
# 問題発生時
claude logs --tail=100 --level=error
claude health-check --comprehensive
claude diagnose --auto-fix

# 復旧作業
claude rollback --to=stable
claude monitor --alerts=high
claude notify-team "Incident resolved"
```

---

## 📋 コマンド早見表

### 最重要コマンド（Top 20）

```bash
1.  claude init                    # プロジェクト初期化
2.  claude chat <agent>           # エージェントとの対話
3.  claude generate component     # コンポーネント生成
4.  claude test                   # テスト実行
5.  claude build                  # ビルド実行
6.  claude deploy                 # デプロイ実行
7.  claude status                 # プロジェクト状況確認
8.  claude review                 # コードレビュー
9.  claude agent list            # エージェント一覧
10. claude config set            # 設定変更
11. claude logs                  # ログ確認
12. claude doctor               # システム診断
13. claude help                 # ヘルプ表示
14. claude update               # アップデート
15. claude backup               # バックアップ
16. claude clean                # クリーンアップ
17. claude monitor              # 監視開始
18. claude optimize             # 最適化実行
19. claude workflow run         # ワークフロー実行
20. claude team meeting         # チーム会議開催
```

### エイリアス・ショートカット

```bash
# 基本エイリアス
c     = claude
ci    = claude init
cb    = claude build
ct    = claude test
cd    = claude deploy

# エージェント操作
cc    = claude chat
ca    = claude agent
ct    = claude team
cm    = claude meeting

# ファイル操作
cr    = claude read
ce    = claude edit
cg    = claude generate
```

---

## 🎓 学習のステップ

### 初心者向け（最初の20コマンド）
```bash
claude help, claude init, claude status, claude chat
claude read, claude edit, claude generate, claude test
claude build, claude deploy, claude config, claude logs
claude agent list, claude team create, claude review
claude doctor, claude update, claude clean, claude backup
```

### 中級者向け（次の30コマンド）
プロジェクト管理、AI組織構築、品質管理の専門コマンド

### 上級者向け（全コマンド習得）
カスタマイズ、自動化、統合、実験的機能まで完全マスター

---

**このリファレンスは、Claude Codeの全機能を網羅した決定版です。**
**ブックマークして、日々の開発でご活用ください！**

*最終更新: 2024年8月11日 - Version 1.0.0*