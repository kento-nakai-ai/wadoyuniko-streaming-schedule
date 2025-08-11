# O3 MCP Integration Guide / O3 MCP統合ガイド

## 概要 / Overview

このドキュメントは、Claude Code SubAgentsとOpenAI O3モデルをMCP (Model Context Protocol) 経由で統合するための設定とベストプラクティスを提供します。

## MCP設定 / MCP Configuration

### 基本設定 / Basic Configuration

```json
{
  "mcpServers": {
    "o3": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-o3"],
      "env": {
        "OPENAI_API_KEY": "${OPENAI_API_KEY}",
        "O3_MODEL": "o3-mini",
        "O3_MAX_TOKENS": "4096",
        "O3_TEMPERATURE": "0.7"
      }
    }
  }
}
```

### 環境変数設定 / Environment Variables

```bash
# .env.local
OPENAI_API_KEY=your-api-key-here
O3_MODEL=o3-mini
O3_REASONING_EFFORT=medium
O3_SAFETY_LEVEL=high
O3_MAX_RETRIES=3
O3_TIMEOUT=30000
```

## 利用可能なツール / Available Tools

### 1. o3.search_and_plan
高度な検索と実装計画の生成

```typescript
interface SearchAndPlanParams {
  query: string;           // 検索クエリ
  context?: string;        // 追加コンテキスト
  maxResults?: number;     // 最大結果数 (default: 5)
  includeCode?: boolean;   // コード例を含むか (default: true)
}
```

### 2. o3.analyze_security
セキュリティ脆弱性の分析

```typescript
interface AnalyzeSecurityParams {
  code?: string;           // 分析対象のコード
  description?: string;    // システムの説明
  framework?: string;      // 使用フレームワーク
  severity?: string[];     // チェックする重要度レベル
}
```

### 3. o3.compare_solutions
複数の解決策の比較評価

```typescript
interface CompareSolutionsParams {
  problem: string;         // 解決したい問題
  solutions: Solution[];   // 比較する解決策のリスト
  criteria?: string[];     // 評価基準
}

interface Solution {
  name: string;
  description: string;
  pros?: string[];
  cons?: string[];
  implementation?: string;
}
```

### 4. o3.review_architecture
アーキテクチャレビューと改善提案

```typescript
interface ReviewArchitectureParams {
  description: string;     // アーキテクチャの説明
  components?: Component[];// コンポーネントリスト
  requirements?: string[]; // 要件
  constraints?: string[];  // 制約
}
```

## 使用例 / Usage Examples

### 例1: ライブラリ選定 / Library Selection

```markdown
## タスク: 認証ライブラリの選定

エージェント: Backend Architect
MCP呼び出し:
```

```javascript
await o3.compare_solutions({
  problem: "Next.js + Supabaseでの認証実装",
  solutions: [
    {
      name: "NextAuth.js",
      description: "Next.js用の完全な認証ソリューション",
      pros: ["豊富なプロバイダー", "セッション管理", "TypeScript対応"],
      cons: ["設定が複雑", "カスタマイズに制限"]
    },
    {
      name: "Supabase Auth",
      description: "Supabaseネイティブの認証",
      pros: ["Supabaseとの統合", "RLS対応", "リアルタイム"],
      cons: ["Supabase依存", "プロバイダー限定"]
    },
    {
      name: "Custom JWT",
      description: "カスタムJWT実装",
      pros: ["完全な制御", "軽量", "柔軟性"],
      cons: ["実装工数", "セキュリティリスク", "メンテナンス"]
    }
  ],
  criteria: ["セキュリティ", "実装速度", "保守性", "拡張性", "コスト"]
})
```

### 例2: セキュリティ監査 / Security Audit

```javascript
await o3.analyze_security({
  code: fileContent,
  framework: "Next.js",
  severity: ["critical", "high", "medium"]
})
```

期待される出力:
```json
{
  "vulnerabilities": [
    {
      "type": "SQL Injection",
      "severity": "critical",
      "location": "api/users.ts:45",
      "description": "ユーザー入力が直接SQLクエリに使用されています",
      "recommendation": "パラメータ化クエリまたはORMを使用してください",
      "example": "..."
    }
  ],
  "summary": {
    "critical": 1,
    "high": 3,
    "medium": 7
  },
  "overallScore": 65
}
```

### 例3: 実装計画生成 / Implementation Planning

```javascript
await o3.search_and_plan({
  query: "React Native アプリでのオフライン同期実装",
  context: "電子商取引アプリ、在庫管理機能付き",
  includeCode: true
})
```

## エージェント別使用ガイドライン / Agent-Specific Guidelines

### CTO (佐藤健一)
- **主な用途**: アーキテクチャ決定、技術選定
- **推奨ツール**: `review_architecture`, `compare_solutions`
- **頻度**: 重要な技術決定時のみ

### Backend Architect (高橋修)
- **主な用途**: API設計、データベース設計
- **推奨ツール**: `search_and_plan`, `review_architecture`
- **頻度**: 新機能設計時

### Security Officer (渡辺誠)
- **主な用途**: セキュリティ監査、脆弱性評価
- **推奨ツール**: `analyze_security`
- **頻度**: PR毎、定期監査

### QA Lead (伊藤美咲)
- **主な用途**: テスト戦略、品質基準
- **推奨ツール**: `search_and_plan` (テスト手法)
- **頻度**: スプリント計画時

## コスト管理 / Cost Management

### 使用量追跡 / Usage Tracking

```typescript
interface O3Usage {
  date: string;
  agent: string;
  tool: string;
  tokens: number;
  cost: number;
  purpose: string;
}

// 日次上限
const DAILY_LIMITS = {
  total_cost: 10.00,      // $10/day
  per_agent: 2.00,        // $2/agent/day
  per_request: 0.50       // $0.50/request
};
```

### コスト最適化のベストプラクティス

1. **キャッシング**: 同じ質問の結果を`.claude/cache/o3/`に保存
2. **バッチ処理**: 関連する質問をまとめて処理
3. **プロンプト最適化**: 簡潔で明確なプロンプト使用
4. **モデル選択**: タスクに応じて適切なモデルサイズを選択

## エラーハンドリング / Error Handling

### 一般的なエラーと対処法

| エラー | 原因 | 対処法 |
|--------|------|--------|
| Rate Limit | API制限超過 | 指数バックオフでリトライ |
| Timeout | 応答時間超過 | タスクを分割、タイムアウト延長 |
| Invalid API Key | 認証エラー | 環境変数確認 |
| Model Not Available | モデル未対応 | 代替モデル使用 |

### リトライ戦略

```typescript
const retryStrategy = {
  maxRetries: 3,
  initialDelay: 1000,
  maxDelay: 10000,
  exponentialBase: 2,
  jitter: true
};
```

## セキュリティ考慮事項 / Security Considerations

### APIキー管理
- 環境変数使用
- キーローテーション (30日毎)
- アクセスログ監視
- 異常検知アラート

### データプライバシー
- PII (個人識別情報) の除去
- データの匿名化
- ローカルキャッシュの暗号化
- 送信データの最小化

## モニタリング / Monitoring

### メトリクス収集

```yaml
metrics:
  - name: o3_request_count
    type: counter
    labels: [agent, tool, status]
  
  - name: o3_request_duration
    type: histogram
    labels: [agent, tool]
  
  - name: o3_token_usage
    type: counter
    labels: [agent, model]
  
  - name: o3_cost
    type: gauge
    labels: [agent, date]
```

### アラート設定

```yaml
alerts:
  - name: high_o3_cost
    condition: daily_cost > 8.00
    severity: warning
    notification: [slack, email]
  
  - name: o3_error_rate
    condition: error_rate > 0.1
    severity: critical
    notification: [pagerduty]
```

## トラブルシューティング / Troubleshooting

### デバッグモード有効化

```bash
export O3_DEBUG=true
export O3_LOG_LEVEL=verbose
```

### ログ確認

```bash
# O3 リクエストログ
tail -f .claude/logs/o3-requests.log

# エラーログ
tail -f .claude/logs/o3-errors.log

# コスト追跡
cat .claude/metrics/o3-costs.json | jq .
```

## ベストプラクティス / Best Practices

### 1. プロンプトエンジニアリング
- 明確で具体的な質問
- コンテキストの適切な提供
- 期待する出力形式の指定

### 2. 結果の検証
- 複数ソースとの照合
- セキュリティ提案の専門家レビュー
- 実装前のプロトタイプ検証

### 3. 知識の蓄積
- 有用な回答の文書化
- パターンライブラリの構築
- チーム間での知見共有

## 更新履歴 / Changelog

### v1.0.0 (2024-01-15)
- 初期リリース
- 基本的な4つのツール実装
- エージェント別ガイドライン追加

### v1.1.0 (予定)
- ストリーミング対応
- カスタムツール追加機能
- 詳細なコスト分析ダッシュボード

---

## サポート / Support

問題が発生した場合:
1. このドキュメントのトラブルシューティングセクションを確認
2. `.claude/logs/`のログを確認
3. Security Officer (渡辺誠) に相談
4. 緊急時はCTO (佐藤健一) にエスカレーション