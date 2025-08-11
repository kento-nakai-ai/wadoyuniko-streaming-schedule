# 🏗️ 特典6：実プロジェクトですぐ使える10のテンプレート集

## 現場で実証済み！コピペで動くプロジェクトテンプレート

実際の開発現場で使われている、**すぐに実戦投入できる10種類のプロジェクトテンプレート**です。

## 📦 テンプレート一覧

1. **SaaS スタートアップ**
2. **ECサイト構築**
3. **社内管理システム**
4. **モバイルアプリ開発**
5. **APIサービス**
6. **データ分析基盤**
7. **AIチャットボット**
8. **ブログ/CMS**
9. **リアルタイムダッシュボード**
10. **マイクロサービス**

---

## 1️⃣ SaaSスタートアップテンプレート

### プロジェクト構成
```yaml
name: saas-startup
mission: B2B SaaSプラットフォームの高速開発
stack:
  - Next.js 14
  - Stripe
  - Supabase
  - Vercel
features:
  - マルチテナント
  - サブスクリプション課金
  - 管理画面
  - API
```

### 実行コマンド
```bash
# プロジェクト立ち上げ
@.claude/agents/product-manager.md "SaaSのMVPを設計してください"
@.claude/agents/backend-architect.md "マルチテナントアーキテクチャを設計"
@.claude/agents/frontend-specialist.md "ダッシュボードUIを実装"
@.claude/agents/devops-engineer.md "CI/CDパイプラインを構築"
```

### 期待される成果物
- 認証システム（OAuth対応）
- 課金システム（Stripe統合）
- 管理ダッシュボード
- API（REST/GraphQL）
- ドキュメント自動生成

---

## 2️⃣ ECサイト構築テンプレート

### プロジェクト構成
```yaml
name: ecommerce-platform
mission: 高性能ECサイトの構築
stack:
  - Next.js + Commerce
  - Shopify/WooCommerce
  - Stripe/PayPal
  - Algolia（検索）
features:
  - 商品カタログ
  - カート機能
  - 決済システム
  - 在庫管理
```

### 実行コマンド
```bash
# EC機能実装
@.claude/agents/product-manager.md "ECサイトの要件定義を作成"
@.claude/agents/senior-fullstack.md "商品カタログとカート機能を実装"
@.claude/agents/backend-architect.md "在庫管理システムを設計"
@.claude/agents/security-officer.md "PCI DSS準拠のセキュリティ実装"
```

### 成果物チェックリスト
- [ ] 商品一覧・詳細ページ
- [ ] ショッピングカート
- [ ] チェックアウトフロー
- [ ] 注文管理システム
- [ ] 顧客管理（CRM）

---

## 3️⃣ 社内管理システムテンプレート

### プロジェクト構成
```yaml
name: internal-management
mission: 業務効率化のための社内システム
stack:
  - React + TypeScript
  - Node.js + Express
  - PostgreSQL
  - Docker
features:
  - 勤怠管理
  - 経費精算
  - プロジェクト管理
  - ドキュメント管理
```

### 実行コマンド
```bash
# 管理システム構築
@.claude/agents/engineering-manager.md "社内システムの開発計画を立案"
@.claude/agents/backend-architect.md "権限管理システムを設計"
@.claude/agents/frontend-specialist.md "管理画面のUIを構築"
@.claude/agents/qa-lead.md "E2Eテストを作成"
```

---

## 4️⃣ モバイルアプリ開発テンプレート

### プロジェクト構成
```yaml
name: mobile-app
mission: クロスプラットフォームモバイルアプリ
stack:
  - React Native / Flutter
  - Firebase
  - GraphQL
  - Expo
features:
  - プッシュ通知
  - オフライン対応
  - 生体認証
  - アプリ内課金
```

### 実行コマンド
```bash
# モバイルアプリ開発
@.claude/agents/product-manager.md "モバイルアプリのUXを設計"
@.claude/agents/frontend-specialist.md "React Nativeでアプリを実装"
@.claude/agents/backend-architect.md "モバイルバックエンドを構築"
@.claude/agents/devops-engineer.md "App Store/Play Store配信設定"
```

---

## 5️⃣ APIサービステンプレート

### プロジェクト構成
```yaml
name: api-service
mission: スケーラブルなAPIサービス
stack:
  - Node.js / Go / Rust
  - PostgreSQL + Redis
  - Docker + K8s
  - Kong / Traefik
features:
  - RESTful API
  - GraphQL
  - WebSocket
  - Rate Limiting
```

### 実行コマンド
```bash
# API構築
@.claude/agents/backend-architect.md "RESTful APIを設計（OpenAPI 3.0）"
@.claude/agents/senior-fullstack.md "APIエンドポイントを実装"
@.claude/agents/security-officer.md "API認証・認可を実装"
@.claude/agents/devops-engineer.md "API Gateway設定"
```

### API仕様書サンプル
```yaml
openapi: 3.0.0
paths:
  /users:
    get:
      summary: ユーザー一覧取得
      security:
        - bearerAuth: []
      responses:
        200:
          description: Success
```

---

## 6️⃣ データ分析基盤テンプレート

### プロジェクト構成
```yaml
name: data-platform
mission: リアルタイムデータ分析基盤
stack:
  - Apache Spark / Flink
  - Elasticsearch
  - Grafana / Kibana
  - Airflow
features:
  - ETLパイプライン
  - リアルタイム処理
  - 可視化ダッシュボード
  - 機械学習パイプライン
```

### 実行コマンド
```bash
# データ基盤構築
@.claude/agents/backend-architect.md "データパイプラインを設計"
@.claude/agents/senior-fullstack.md "ETL処理を実装"
@.claude/agents/devops-engineer.md "Elasticsearchクラスタ構築"
@.claude/agents/technical-writer.md "データ仕様書を作成"
```

---

## 7️⃣ AIチャットボットテンプレート

### プロジェクト構成
```yaml
name: ai-chatbot
mission: インテリジェントなカスタマーサポート
stack:
  - Next.js + Vercel AI SDK
  - Claude/GPT API
  - Pinecone（ベクトルDB）
  - LangChain
features:
  - 自然言語理解
  - コンテキスト保持
  - マルチモーダル対応
  - 感情分析
```

### 実行コマンド
```bash
# チャットボット構築
@.claude/agents/product-manager.md "チャットボットの会話フロー設計"
@.claude/agents/senior-fullstack.md "チャットUIとバックエンド実装"
@.claude/agents/backend-architect.md "RAGシステムを構築"
@.claude/agents/qa-lead.md "会話テストケース作成"
```

---

## 8️⃣ ブログ/CMSテンプレート

### プロジェクト構成
```yaml
name: blog-cms
mission: 高性能ブログ/CMSプラットフォーム
stack:
  - Next.js + MDX
  - Contentful / Strapi
  - Cloudinary
  - Algolia
features:
  - Markdownエディタ
  - 画像最適化
  - SEO最適化
  - 多言語対応
```

### 実行コマンド
```bash
# CMS構築
@.claude/agents/frontend-specialist.md "ブログテーマを実装"
@.claude/agents/senior-fullstack.md "CMSバックエンドを構築"
@.claude/agents/technical-writer.md "サンプル記事を作成"
@.claude/agents/devops-engineer.md "CDN設定"
```

---

## 9️⃣ リアルタイムダッシュボード

### プロジェクト構成
```yaml
name: realtime-dashboard
mission: リアルタイム監視ダッシュボード
stack:
  - React + D3.js
  - WebSocket
  - Redis Pub/Sub
  - InfluxDB
features:
  - リアルタイムグラフ
  - アラート機能
  - ヒストリカルデータ
  - カスタムウィジェット
```

### 実行コマンド
```bash
# ダッシュボード構築
@.claude/agents/frontend-specialist.md "ダッシュボードUIを設計"
@.claude/agents/backend-architect.md "WebSocketサーバー実装"
@.claude/agents/senior-fullstack.md "リアルタイムグラフ実装"
@.claude/agents/devops-engineer.md "監視システム統合"
```

---

## 🔟 マイクロサービステンプレート

### プロジェクト構成
```yaml
name: microservices
mission: スケーラブルなマイクロサービス
stack:
  - Docker + K8s
  - Istio（Service Mesh）
  - gRPC
  - NATS/RabbitMQ
features:
  - サービス間通信
  - 分散トレーシング
  - サーキットブレーカー
  - 自動スケーリング
```

### 実行コマンド
```bash
# マイクロサービス構築
@.claude/agents/backend-architect.md "マイクロサービス設計"
@.claude/agents/devops-engineer.md "K8sクラスタ構築"
@.claude/agents/senior-fullstack.md "各サービス実装"
@.claude/agents/security-officer.md "Service Mesh設定"
```

### サービス構成例
```yaml
services:
  - auth-service
  - user-service
  - payment-service
  - notification-service
  - analytics-service
```

---

## 🎯 使い方

### 1. テンプレート選択
```bash
# 例：SaaSテンプレートを使用
cp -r templates/saas-startup/* ./my-project/
```

### 2. カスタマイズ
```bash
# project.yamlを編集
vim orggen/project.yaml
# ビジネス要件に合わせて調整
```

### 3. 実行
```bash
# AI組織を起動
@command.md
# 選択したテンプレートのコマンドを実行
```

## 📊 各テンプレートの推定工数

| テンプレート | 従来の開発 | AI組織使用 | 短縮率 |
|-------------|-----------|-----------|--------|
| SaaS | 480時間 | 48時間 | 90% |
| ECサイト | 320時間 | 40時間 | 87.5% |
| 管理システム | 240時間 | 24時間 | 90% |
| モバイルアプリ | 400時間 | 60時間 | 85% |
| API | 160時間 | 16時間 | 90% |

## 🎁 ボーナス：業界別カスタマイズ

### 金融業界向け
- KYC/AML対応
- 監査ログ完備
- 暗号化強化

### ヘルスケア向け
- HIPAA準拠
- HL7/FHIR対応
- 患者データ保護

### 教育向け
- LMS統合
- SCORM対応
- 多言語サポート

---

**これらのテンプレートで、どんなプロジェクトも即座にスタートできます！**