# API Specification - wadoyuniko AI Platform

## 概要

wadoyuniko AI Platformの REST API仕様書です。
AIエージェントシステム、ユーザー管理、コース管理、通信機能を提供します。

## 基本情報

- **Base URL**: `https://api.wadoyuniko.com/v1`
- **Authentication**: Bearer Token (Supabase Auth)
- **Content Type**: `application/json`
- **API Version**: v1.0.0

## 認証

全てのAPIエンドポイントはSupabase認証トークンが必要です。

```bash
Authorization: Bearer <supabase_access_token>
```

## エラーハンドリング

### エラーレスポンス形式
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {}
  }
}
```

### HTTPステータスコード
- `200` - 成功
- `201` - 作成成功
- `400` - リクエスト不正
- `401` - 認証エラー
- `403` - 権限不足
- `404` - リソースが見つからない
- `500` - サーバーエラー

## API エンドポイント

### 1. AIエージェント管理

#### 1.1 全エージェント取得
```
GET /agents
```

**レスポンス:**
```json
{
  "agents": [
    {
      "id": "agent-ceo",
      "role": "ceo",
      "name": "CEO Agent",
      "level": 5,
      "isActive": true,
      "currentTasks": [],
      "lastActivity": "2025-01-11T10:30:00Z",
      "responsibilities": [
        "組織全体のビジョン策定",
        "戦略立案と意思決定"
      ],
      "authorities": [
        "すべての重要決定の最終承認",
        "リソース配分の決定"
      ],
      "skills": ["戦略立案", "リーダーシップ"],
      "reportingTo": null,
      "directReports": ["cto", "product-manager", "hr-manager"]
    }
  ]
}
```

#### 1.2 特定エージェント取得
```
GET /agents/{role}
```

**パラメータ:**
- `role` (string): エージェントの役割 (ceo, cto, engineering-manager, etc.)

#### 1.3 エージェント状態更新
```
PATCH /agents/{role}
```

**リクエストボディ:**
```json
{
  "isActive": true,
  "lastActivity": "2025-01-11T10:30:00Z"
}
```

#### 1.4 エージェントワークロード取得
```
GET /agents/{role}/workload
```

**レスポンス:**
```json
{
  "activeTasks": 5,
  "averageTaskDuration": 2.5,
  "completionRate": 87.5
}
```

### 2. タスク管理

#### 2.1 タスク作成
```
POST /tasks
```

**リクエストボディ:**
```json
{
  "title": "ユーザー認証機能実装",
  "description": "Supabase認証を使用したログイン機能の実装",
  "assignedTo": "backend-architect",
  "priority": "P1",
  "estimatedHours": 8,
  "dueDate": "2025-01-15T18:00:00Z",
  "tags": ["authentication", "backend"],
  "dependencies": []
}
```

**レスポンス:**
```json
{
  "id": "task-123456789",
  "title": "ユーザー認証機能実装",
  "status": "pending",
  "createdAt": "2025-01-11T10:30:00Z",
  "updatedAt": "2025-01-11T10:30:00Z",
  "createdBy": "engineering-manager"
}
```

#### 2.2 タスク一覧取得
```
GET /tasks
```

**クエリパラメータ:**
- `assignedTo` (string): エージェント役割でフィルター
- `status` (string): ステータスでフィルター (pending, in_progress, completed, blocked)
- `priority` (string): 優先度でフィルター (P0, P1, P2, P3)
- `page` (number): ページ番号
- `limit` (number): 1ページあたりの件数

#### 2.3 タスク詳細取得
```
GET /tasks/{taskId}
```

#### 2.4 タスク状態更新
```
PATCH /tasks/{taskId}
```

**リクエストボディ:**
```json
{
  "status": "in_progress",
  "actualHours": 3.5,
  "updatedBy": "backend-architect"
}
```

#### 2.5 タスクエスカレーション
```
POST /tasks/{taskId}/escalate
```

**リクエストボディ:**
```json
{
  "reason": "複雑度が予想を上回り、追加の技術検討が必要",
  "escalatedBy": "backend-architect"
}
```

### 3. 通信システム

#### 3.1 チャンネル一覧取得
```
GET /channels
```

**レスポンス:**
```json
{
  "channels": [
    {
      "id": "team-chat",
      "name": "Team Chat",
      "description": "全チーム向けの一般的な議論",
      "participants": ["ceo", "cto", "engineering-manager"],
      "isPrivate": false,
      "messageCount": 156
    }
  ]
}
```

#### 3.2 メッセージ送信
```
POST /channels/{channelId}/messages
```

**リクエストボディ:**
```json
{
  "content": "API実装が完了しました。レビューをお願いします。",
  "priority": "P2",
  "taskId": "task-123456789"
}
```

#### 3.3 メッセージ履歴取得
```
GET /channels/{channelId}/messages
```

**クエリパラメータ:**
- `limit` (number): 取得件数 (デフォルト: 50)
- `before` (string): 指定日時より前のメッセージ

#### 3.4 ダイレクトメッセージ送信
```
POST /messages/direct
```

**リクエストボディ:**
```json
{
  "to": "cto",
  "content": "緊急のセキュリティ問題について相談があります",
  "priority": "P1"
}
```

#### 3.5 未読メッセージ取得
```
GET /messages/unread
```

**クエリパラメータ:**
- `since` (string): ISO 8601形式の日時

### 4. 組織メトリクス

#### 4.1 組織全体メトリクス取得
```
GET /metrics/organization
```

**レスポンス:**
```json
{
  "totalAgents": 12,
  "activeAgents": 10,
  "totalTasks": 45,
  "completedTasks": 38,
  "completionRate": 84.4,
  "averageLeadTime": 18.5,
  "p0Tasks": 2,
  "p1Tasks": 8
}
```

#### 4.2 エージェントパフォーマンス取得
```
GET /metrics/agents/{role}
```

#### 4.3 チャンネル統計取得
```
GET /metrics/channels/{channelId}
```

**レスポンス:**
```json
{
  "totalMessages": 245,
  "activeParticipants": 8,
  "messagesByAgent": {
    "engineering-manager": 45,
    "backend-architect": 38
  },
  "priorityDistribution": {
    "P0": 5,
    "P1": 23,
    "P2": 87,
    "P3": 130
  },
  "averageMessagesPerDay": 12.3
}
```

### 5. インシデント管理

#### 5.1 インシデント作成
```
POST /incidents
```

**リクエストボディ:**
```json
{
  "title": "認証システムの応答遅延",
  "description": "ログイン処理が通常より5倍遅い",
  "priority": "P1",
  "affectedSystems": ["authentication", "user-management"],
  "reportedBy": "devops-engineer"
}
```

#### 5.2 インシデント一覧取得
```
GET /incidents
```

#### 5.3 インシデント状態更新
```
PATCH /incidents/{incidentId}
```

**リクエストボディ:**
```json
{
  "status": "investigating",
  "assignedTo": "security-officer"
}
```

#### 5.4 インシデントタイムライン追加
```
POST /incidents/{incidentId}/timeline
```

**リクエストボディ:**
```json
{
  "action": "初期調査完了",
  "description": "データベースクエリの最適化が必要と判明",
  "agent": "security-officer"
}
```

### 6. ユーザー管理 (将来実装)

#### 6.1 ユーザー作成
```
POST /users
```

#### 6.2 ユーザー一覧取得
```
GET /users
```

#### 6.3 ユーザー詳細取得
```
GET /users/{userId}
```

### 7. コース管理 (将来実装)

#### 7.1 コース作成
```
POST /courses
```

#### 7.2 コース一覧取得
```
GET /courses
```

#### 7.3 受講登録
```
POST /courses/{courseId}/enroll
```

## Webhook

### イベント通知

以下のイベント発生時にWebhookが送信されます:

#### タスク関連イベント
- `task.created` - タスク作成
- `task.updated` - タスク更新
- `task.completed` - タスク完了
- `task.escalated` - タスクエスカレーション

#### インシデント関連イベント
- `incident.created` - インシデント発生
- `incident.resolved` - インシデント解決

#### エージェント関連イベント
- `agent.offline` - エージェントオフライン
- `agent.overloaded` - エージェント負荷過多

**Webhookペイロード例:**
```json
{
  "event": "task.escalated",
  "timestamp": "2025-01-11T10:30:00Z",
  "data": {
    "taskId": "task-123456789",
    "from": "backend-architect",
    "to": "cto",
    "reason": "技術的課題の複雑性"
  }
}
```

## レート制限

- 通常のAPI呼び出し: 1000回/時間/ユーザー
- メッセージ送信: 100回/分/ユーザー
- Webhook配信: 10,000回/時間

## SDKとクライアントライブラリ

### JavaScript/TypeScript
```bash
npm install @wadoyuniko/api-client
```

```javascript
import { WadoyunikoClient } from '@wadoyuniko/api-client'

const client = new WadoyunikoClient({
  apiKey: 'your-api-key',
  baseURL: 'https://api.wadoyuniko.com/v1'
})

// エージェント取得
const agents = await client.agents.list()

// タスク作成  
const task = await client.tasks.create({
  title: 'New Feature Implementation',
  assignedTo: 'frontend-specialist'
})
```

## 開発環境

### ローカル開発API
```bash
# 開発サーバー起動
npm run dev

# APIサーバー: http://localhost:3000/api
```

### モックデータ
開発環境では、実際のAIエージェントの代わりにモックデータを使用します。

## バージョニング

APIバージョニングはURL path方式を採用:
- v1: `/v1/...` (現在のバージョン)
- v2: `/v2/...` (将来のバージョン)

## セキュリティ

### HTTPS必須
本番環境では全ての通信でHTTPS/TLS 1.2+が必要です。

### CORS設定
```
Access-Control-Allow-Origin: https://app.wadoyuniko.com
Access-Control-Allow-Methods: GET, POST, PATCH, DELETE
Access-Control-Allow-Headers: Authorization, Content-Type
```

### データ暗号化
機密データ（認証トークン、個人情報）は暗号化して保存します。

## サポート

- 技術サポート: dev-support@wadoyuniko.com
- API仕様に関する質問: api@wadoyuniko.com
- バグレポート: GitHub Issues

---

*Last updated: 2025-01-11*  
*Version: v1.0.0*