# AI開発エラー解決完全マニュアル
*Comprehensive Error Resolution Guide for AI Development*

## 概要

AI開発で遭遇する一般的なエラーから複雑な問題まで、体系的な解決方法を提供する完全マニュアルです。AI を活用した効率的なデバッグテクニックも含まれています。

---

## 🔍 エラー分類と対処法

### API関連エラー

#### 1. OpenAI API エラー
**よくあるエラーパターン**

```javascript
// エラー例1: API キー認証失敗
{
  "error": {
    "message": "Incorrect API key provided",
    "type": "invalid_request_error",
    "code": "invalid_api_key"
  }
}
```

**解決方法**
```javascript
// 正しいAPI キー設定
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 環境変数から取得
});

// API キー検証
async function validateAPIKey() {
  try {
    await openai.models.list();
    console.log('✅ API キーが有効です');
  } catch (error) {
    console.error('❌ API キーエラー:', error.message);
    // 詳細なエラー情報を表示
    console.error('エラーコード:', error.code);
    console.error('エラータイプ:', error.type);
  }
}
```

```javascript
// エラー例2: レート制限超過
{
  "error": {
    "message": "Rate limit reached",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

**解決方法**
```javascript
// レート制限対応の実装
class RateLimitedAPI {
  constructor(apiKey, requestsPerMinute = 60) {
    this.openai = new OpenAI({ apiKey });
    this.requestQueue = [];
    this.requestsPerMinute = requestsPerMinute;
    this.requestInterval = 60000 / requestsPerMinute; // ms
    this.lastRequestTime = 0;
  }

  async makeRequest(params) {
    return new Promise((resolve, reject) => {
      this.requestQueue.push({ params, resolve, reject });
      this.processQueue();
    });
  }

  async processQueue() {
    if (this.requestQueue.length === 0) return;

    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;

    if (timeSinceLastRequest < this.requestInterval) {
      setTimeout(() => this.processQueue(), 
        this.requestInterval - timeSinceLastRequest);
      return;
    }

    const { params, resolve, reject } = this.requestQueue.shift();
    this.lastRequestTime = Date.now();

    try {
      const response = await this.openai.chat.completions.create(params);
      resolve(response);
    } catch (error) {
      if (error.code === 'rate_limit_exceeded') {
        // リトライロジック
        this.requestQueue.unshift({ params, resolve, reject });
        setTimeout(() => this.processQueue(), 60000); // 1分待機
      } else {
        reject(error);
      }
    }

    // 次のリクエストを処理
    setTimeout(() => this.processQueue(), this.requestInterval);
  }
}
```

#### 2. Claude API エラー
```javascript
// エラー例: メッセージ長超過
{
  "error": {
    "type": "invalid_request_error",
    "message": "messages: text is too long"
  }
}
```

**解決方法**
```javascript
// メッセージ長制限対応
function truncateMessage(text, maxLength = 100000) {
  if (text.length <= maxLength) return text;
  
  // 重要な部分を保持して短縮
  const start = text.substring(0, maxLength * 0.3);
  const end = text.substring(text.length - maxLength * 0.3);
  const middle = `\n\n[...中略 ${text.length - maxLength * 0.6} 文字...]\n\n`;
  
  return start + middle + end;
}

// 使用例
async function callClaude(messages) {
  const processedMessages = messages.map(msg => ({
    ...msg,
    content: truncateMessage(msg.content)
  }));

  try {
    const response = await anthropic.messages.create({
      model: "claude-3-sonnet-20240229",
      messages: processedMessages,
      max_tokens: 4000
    });
    return response;
  } catch (error) {
    console.error('Claude API エラー:', error);
    throw error;
  }
}
```

---

## 🛠️ 開発環境エラー

### Node.js / npm エラー

#### 1. 依存関係の競合
```bash
# エラー例
npm ERR! peer dep missing: react@^18.0.0, required by some-package@1.0.0
```

**解決方法**
```bash
# 1. node_modules とpackage-lock.json を削除
rm -rf node_modules package-lock.json

# 2. npmキャッシュクリア
npm cache clean --force

# 3. 依存関係を再インストール
npm install

# 4. peerDependencies を手動インストール
npm install react@^18.0.0 --save

# 5. legacy-peer-deps オプション使用（最後の手段）
npm install --legacy-peer-deps
```

#### 2. TypeScript エラー
```typescript
// エラー例: 型定義なし
Property 'someMethod' does not exist on type 'unknown'
```

**解決方法**
```typescript
// 1. 型アサーション
const response = apiResponse as { someMethod: () => void };

// 2. 型ガード
function isValidResponse(obj: unknown): obj is { someMethod: () => void } {
  return typeof obj === 'object' && 
         obj !== null && 
         'someMethod' in obj;
}

if (isValidResponse(response)) {
  response.someMethod(); // 安全に使用可能
}

// 3. インターフェース定義
interface APIResponse {
  someMethod: () => void;
  data: any;
}

const response: APIResponse = await fetchData();
```

### Next.js エラー

#### 1. ハイドレーションエラー
```
Error: Hydration failed because the initial UI does not match what was rendered on the server
```

**解決方法**
```typescript
// 1. クライアントサイド専用コンポーネント
'use client';
import { useEffect, useState } from 'react';

export default function ClientOnlyComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // サーバーサイドでは何も表示しない
  }

  return <div>クライアントサイドでのみ表示</div>;
}

// 2. dynamic import使用
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(
  () => import('./ClientOnlyComponent'),
  { ssr: false }
);
```

#### 2. API Route エラー
```javascript
// エラー例: CORS問題
Access to fetch at 'http://localhost:3000/api/data' from origin 'http://localhost:3001' has been blocked by CORS policy
```

**解決方法**
```javascript
// api/data.js - CORS対応
export default async function handler(req, res) {
  // CORS ヘッダー設定
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // プリフライトリクエスト対応
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // API ロジック
    const data = await fetchData();
    res.status(200).json(data);
  } catch (error) {
    console.error('API エラー:', error);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
}
```

---

## 🤖 AI支援デバッグテクニック

### 1. エラーメッセージ解析AI

```javascript
// AIを使ったエラー解析システム
class AIErrorAnalyzer {
  constructor(apiKey) {
    this.openai = new OpenAI({ apiKey });
  }

  async analyzeError(errorMessage, codeContext = '') {
    const prompt = `
    エラーメッセージ: ${errorMessage}
    
    コードコンテキスト:
    \`\`\`
    ${codeContext}
    \`\`\`
    
    以下の形式で分析してください:
    1. エラーの原因
    2. 具体的な解決方法
    3. 予防方法
    4. 関連ドキュメント
    `;

    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3
      });

      return this.parseErrorAnalysis(response.choices[0].message.content);
    } catch (error) {
      return this.fallbackAnalysis(errorMessage);
    }
  }

  parseErrorAnalysis(analysis) {
    // 分析結果をパース
    const sections = analysis.split(/\d+\./);
    return {
      cause: sections[1]?.trim(),
      solution: sections[2]?.trim(),
      prevention: sections[3]?.trim(),
      documentation: sections[4]?.trim()
    };
  }

  fallbackAnalysis(errorMessage) {
    // AIが利用できない場合のフォールバック
    return {
      cause: "AI分析不可: 手動でエラーを確認してください",
      solution: "ドキュメントまたはコミュニティで解決方法を検索",
      prevention: "エラーログの詳細な記録を推奨",
      documentation: "公式ドキュメントを参照"
    };
  }
}

// 使用例
const analyzer = new AIErrorAnalyzer(process.env.OPENAI_API_KEY);
const analysis = await analyzer.analyzeError(
  "TypeError: Cannot read property 'map' of undefined",
  `
  const items = await fetchItems();
  return items.map(item => item.name);
  `
);
console.log(analysis);
```

### 2. 自動コード修正

```javascript
// AIによる自動コード修正
class AICodeFixer {
  async fixCode(errorCode, errorMessage) {
    const prompt = `
    エラーが発生しているコード:
    \`\`\`javascript
    ${errorCode}
    \`\`\`
    
    エラーメッセージ: ${errorMessage}
    
    修正されたコードを提供してください。
    変更点も説明してください。
    `;

    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2
    });

    return this.parseFixedCode(response.choices[0].message.content);
  }

  parseFixedCode(response) {
    const codeMatch = response.match(/```(?:javascript|js)?\n([\s\S]*?)\n```/);
    const fixedCode = codeMatch ? codeMatch[1] : null;
    
    const explanation = response.replace(/```[\s\S]*?```/g, '').trim();
    
    return {
      fixedCode,
      explanation
    };
  }
}
```

---

## 📊 エラー監視・ログシステム

### 1. 包括的エラーハンドリング

```javascript
// グローバルエラーハンドラー
class ErrorHandler {
  constructor() {
    this.setupGlobalHandlers();
    this.errors = [];
  }

  setupGlobalHandlers() {
    // 未処理のPromise拒否
    process.on('unhandledRejection', (reason, promise) => {
      this.logError({
        type: 'unhandledRejection',
        reason: reason.toString(),
        stack: reason.stack,
        timestamp: new Date().toISOString()
      });
    });

    // 未処理の例外
    process.on('uncaughtException', (error) => {
      this.logError({
        type: 'uncaughtException',
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
    });

    // Next.js エラー境界
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        this.logError({
          type: 'clientError',
          message: event.error?.message || 'Unknown error',
          stack: event.error?.stack,
          filename: event.filename,
          lineno: event.lineno,
          timestamp: new Date().toISOString()
        });
      });
    }
  }

  logError(errorInfo) {
    // ローカルストレージ
    this.errors.push(errorInfo);
    
    // コンソール出力
    console.error('🚨 エラー発生:', errorInfo);
    
    // 外部サービスに送信（Sentry, LogRocket等）
    this.sendToExternalService(errorInfo);
    
    // AI分析（オプション）
    this.analyzeWithAI(errorInfo);
  }

  async sendToExternalService(errorInfo) {
    try {
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorInfo)
      });
    } catch (error) {
      console.error('エラーログ送信失敗:', error);
    }
  }

  async analyzeWithAI(errorInfo) {
    // AI分析は非同期で実行（メインプロセスをブロックしない）
    setTimeout(async () => {
      try {
        const analyzer = new AIErrorAnalyzer();
        const analysis = await analyzer.analyzeError(
          errorInfo.message, 
          errorInfo.stack
        );
        console.log('🤖 AI分析結果:', analysis);
      } catch (error) {
        console.error('AI分析失敗:', error);
      }
    }, 1000);
  }
}

// グローバル初期化
const errorHandler = new ErrorHandler();
```

### 2. パフォーマンス監視

```javascript
// パフォーマンス監視システム
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      apiCalls: [],
      pageLoads: [],
      errors: []
    };
  }

  // API呼び出し監視
  wrapAPICall(apiFunction, name) {
    return async (...args) => {
      const startTime = performance.now();
      let success = true;
      let error = null;

      try {
        const result = await apiFunction(...args);
        return result;
      } catch (err) {
        success = false;
        error = err.message;
        throw err;
      } finally {
        const endTime = performance.now();
        const duration = endTime - startTime;

        this.metrics.apiCalls.push({
          name,
          duration,
          success,
          error,
          timestamp: new Date().toISOString(),
          args: JSON.stringify(args)
        });

        // 異常に遅いAPI呼び出しを警告
        if (duration > 5000) {
          console.warn(`⚠️  遅いAPI呼び出し: ${name} (${duration.toFixed(2)}ms)`);
        }
      }
    };
  }

  // 使用例
  createMonitoredAPI() {
    const originalFetch = fetch;
    
    window.fetch = this.wrapAPICall(originalFetch, 'fetch');
    
    // OpenAI API監視
    const monitoredOpenAI = {
      chat: {
        completions: {
          create: this.wrapAPICall(
            openai.chat.completions.create.bind(openai.chat.completions),
            'openai.chat.completions.create'
          )
        }
      }
    };

    return monitoredOpenAI;
  }

  // レポート生成
  generateReport() {
    const report = {
      summary: {
        totalAPICalls: this.metrics.apiCalls.length,
        avgResponseTime: this.calculateAverage('apiCalls', 'duration'),
        errorRate: this.calculateErrorRate('apiCalls'),
        slowCalls: this.metrics.apiCalls.filter(call => call.duration > 3000)
      },
      detailed: this.metrics
    };

    console.table(report.summary);
    return report;
  }

  calculateAverage(metric, field) {
    const values = this.metrics[metric].map(item => item[field]);
    return values.reduce((a, b) => a + b, 0) / values.length;
  }

  calculateErrorRate(metric) {
    const total = this.metrics[metric].length;
    const errors = this.metrics[metric].filter(item => !item.success).length;
    return total > 0 ? (errors / total) * 100 : 0;
  }
}
```

---

## 🔍 デバッグベストプラクティス

### 1. 段階的デバッグアプローチ

```javascript
// デバッグユーティリティ
class DebugHelper {
  static log(message, data = null, level = 'info') {
    if (process.env.NODE_ENV !== 'development') return;

    const timestamp = new Date().toISOString();
    const prefix = {
      info: '📝',
      warn: '⚠️',
      error: '❌',
      success: '✅'
    }[level];

    console.log(`${prefix} [${timestamp}] ${message}`);
    if (data) {
      console.table(data);
    }
  }

  static trace(functionName, args = null) {
    if (process.env.NODE_ENV !== 'development') return;
    
    return function(target, propertyKey, descriptor) {
      const originalMethod = descriptor.value;
      
      descriptor.value = function(...args) {
        DebugHelper.log(`🔍 ${functionName} 開始`, args, 'info');
        
        try {
          const result = originalMethod.apply(this, args);
          
          if (result instanceof Promise) {
            return result
              .then(res => {
                DebugHelper.log(`✅ ${functionName} 成功`, res, 'success');
                return res;
              })
              .catch(err => {
                DebugHelper.log(`❌ ${functionName} エラー`, err, 'error');
                throw err;
              });
          }
          
          DebugHelper.log(`✅ ${functionName} 完了`, result, 'success');
          return result;
        } catch (error) {
          DebugHelper.log(`❌ ${functionName} エラー`, error, 'error');
          throw error;
        }
      };
      
      return descriptor;
    };
  }
}

// 使用例
class AIService {
  @DebugHelper.trace('generateText')
  async generateText(prompt) {
    // AI処理
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });
    
    return response.choices[0].message.content;
  }
}
```

### 2. 環境別デバッグ設定

```javascript
// config/debug.js
const debugConfig = {
  development: {
    logLevel: 'debug',
    enableAIAnalysis: true,
    enablePerformanceMonitoring: true,
    enableErrorReporting: false
  },
  staging: {
    logLevel: 'warn',
    enableAIAnalysis: false,
    enablePerformanceMonitoring: true,
    enableErrorReporting: true
  },
  production: {
    logLevel: 'error',
    enableAIAnalysis: false,
    enablePerformanceMonitoring: true,
    enableErrorReporting: true
  }
};

export const getDebugConfig = () => {
  const env = process.env.NODE_ENV || 'development';
  return debugConfig[env];
};
```

---

## 📚 トラブルシューティングチェックリスト

### 基本チェック項目
- [ ] **環境変数**: 必要なAPI キーが設定されているか
- [ ] **依存関係**: package.json の依存関係が正しいか
- [ ] **ネットワーク**: インターネット接続、プロキシ設定
- [ ] **バージョン**: Node.js、npm のバージョン互換性
- [ ] **権限**: ファイル・ディレクトリアクセス権限

### AI API特有チェック
- [ ] **API制限**: レート制限、使用量制限の確認
- [ ] **モデル利用可能性**: 指定したモデルが利用可能か
- [ ] **入力形式**: API仕様に合った形式でリクエストしているか
- [ ] **文字数制限**: トークン数、文字数制限の確認

### デプロイ時チェック
- [ ] **環境変数**: 本番環境での環境変数設定
- [ ] **ビルド**: 本番ビルドが正常に完了するか
- [ ] **CORS**: クロスオリジンリクエスト設定
- [ ] **HTTPS**: SSL証明書、HTTPS設定

---

## 🚀 エラー予防策

### 1. 型安全性の向上
```typescript
// 厳密な型定義
interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

// API ラッパー
async function safeAPICall<T>(
  apiCall: () => Promise<T>,
  fallback?: T
): Promise<APIResponse<T>> {
  try {
    const data = await apiCall();
    return { success: true, data };
  } catch (error) {
    console.error('API呼び出しエラー:', error);
    return {
      success: false,
      error: {
        code: error.code || 'UNKNOWN_ERROR',
        message: error.message || 'Unknown error occurred'
      },
      data: fallback
    };
  }
}
```

### 2. 包括的テスト
```javascript
// テスト例
describe('AI API Integration', () => {
  test('正常なレスポンスの処理', async () => {
    const result = await generateText('Hello');
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });

  test('API エラーハンドリング', async () => {
    // 無効なAPI キーでテスト
    const result = await generateTextWithInvalidKey('Hello');
    expect(result.success).toBe(false);
    expect(result.error.code).toBe('invalid_api_key');
  });

  test('レート制限対応', async () => {
    // 連続リクエストでテスト
    const promises = Array(100).fill().map(() => generateText('Test'));
    const results = await Promise.allSettled(promises);
    
    // 全て成功するか、適切にリトライされることを確認
    const failed = results.filter(r => r.status === 'rejected');
    expect(failed.length).toBe(0);
  });
});
```

この完全マニュアルを活用することで、AI開発で発生する様々なエラーを迅速かつ効率的に解決できるようになります。

---

*© 2025 バイブコーディング - AI開発エラー解決完全マニュアル*