# 🎯 特典8: MCP（Model Context Protocol）完全実践ガイド

## Claude Codeの最強拡張！外部ツールと無限の可能性を解放する革命的プロトコル

---

## 🚀 MCPとは？なぜ今MCPが必要なのか

### MCPの革命的インパクト
```markdown
## MCPが解決する3つの課題

### 従来のAI開発の限界
1. **閉じた世界**: AIが外部システムにアクセスできない ❌
2. **手動連携**: データベースやAPIとの連携が面倒 ❌
3. **コンテキスト制限**: 大規模データを扱えない ❌

### MCPによる解決
1. **オープンエコシステム**: あらゆるツールと自動連携 ✅
2. **シームレス統合**: データベース、API、ファイル直接操作 ✅
3. **無限のコンテキスト**: 外部データソースを動的に参照 ✅
```

### MCPで実現できること
```javascript
const mcpCapabilities = {
  データベース操作: {
    PostgreSQL: "直接クエリ実行",
    MongoDB: "ドキュメント操作",
    Redis: "キャッシュ管理"
  },
  
  ファイルシステム: {
    読み書き: "任意のファイル操作",
    監視: "リアルタイム変更検知",
    同期: "クラウドストレージ連携"
  },
  
  外部API: {
    REST: "HTTPリクエスト",
    GraphQL: "クエリ実行",
    WebSocket: "リアルタイム通信"
  },
  
  開発ツール: {
    Git: "バージョン管理",
    Docker: "コンテナ操作",
    Kubernetes: "クラスタ管理"
  }
};
```

---

## 📊 第1章: MCP環境構築完全ガイド

### インストールと初期設定

```bash
# 1. Node.js環境準備（v18以上必須）
node --version  # v18.0.0以上を確認

# 2. MCP CLIインストール
npm install -g @anthropic/mcp-cli

# 3. 設定ディレクトリ作成
mkdir -p ~/.config/mcp
cd ~/.config/mcp

# 4. 基本設定ファイル作成
cat > config.json << 'EOF'
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": ["@anthropic/mcp-server-filesystem"],
      "config": {
        "rootPath": "/Users/username/projects",
        "allowWrite": true
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["@anthropic/mcp-server-postgres"],
      "config": {
        "connectionString": "postgresql://user:pass@localhost/dbname"
      }
    },
    "github": {
      "command": "npx",
      "args": ["@anthropic/mcp-server-github"],
      "config": {
        "token": "${GITHUB_TOKEN}",
        "owner": "your-username"
      }
    }
  }
}
EOF
```

### Claude Desktop統合設定

```json
// ~/Library/Application Support/Claude/config.json (Mac)
// %APPDATA%\Claude\config.json (Windows)
{
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": ["/usr/local/bin/mcp-server-filesystem"],
      "env": {
        "ROOT_PATH": "/Users/username/projects"
      }
    },
    "database": {
      "command": "node",
      "args": ["/usr/local/bin/mcp-server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://localhost/mydb"
      }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### 動作確認スクリプト

```bash
#!/bin/bash
# test_mcp.sh

echo "🔍 MCP環境診断を開始..."

# 1. Node.jsバージョン確認
node_version=$(node -v)
echo "✓ Node.js: $node_version"

# 2. MCPサーバー確認
servers=(
  "@anthropic/mcp-server-filesystem"
  "@anthropic/mcp-server-postgres"
  "@anthropic/mcp-server-github"
)

for server in "${servers[@]}"; do
  if npm list -g "$server" &>/dev/null; then
    echo "✓ $server: インストール済み"
  else
    echo "✗ $server: 未インストール"
    echo "  → npm install -g $server"
  fi
done

# 3. 設定ファイル確認
if [ -f ~/.config/mcp/config.json ]; then
  echo "✓ 設定ファイル: 存在"
else
  echo "✗ 設定ファイル: 未作成"
fi

# 4. Claude Desktop統合確認
claude_config="$HOME/Library/Application Support/Claude/config.json"
if [ -f "$claude_config" ]; then
  echo "✓ Claude統合: 設定済み"
else
  echo "✗ Claude統合: 未設定"
fi

echo "診断完了！"
```

---

## 🎨 第2章: MCPサーバー開発

### カスタムMCPサーバー実装

```typescript
// custom-mcp-server.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

// カスタムツールサーバー
class CustomMCPServer {
  private server: Server;
  
  constructor() {
    this.server = new Server(
      {
        name: 'custom-tools',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
          resources: {},
        },
      }
    );
    
    this.setupHandlers();
  }
  
  private setupHandlers() {
    // ツール一覧
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'calculate_price',
          description: '価格計算ツール',
          inputSchema: {
            type: 'object',
            properties: {
              quantity: { type: 'number' },
              unit_price: { type: 'number' },
              tax_rate: { type: 'number', default: 0.1 }
            },
            required: ['quantity', 'unit_price']
          }
        },
        {
          name: 'send_email',
          description: 'メール送信ツール',
          inputSchema: {
            type: 'object',
            properties: {
              to: { type: 'string' },
              subject: { type: 'string' },
              body: { type: 'string' }
            },
            required: ['to', 'subject', 'body']
          }
        },
        {
          name: 'database_query',
          description: 'データベースクエリ実行',
          inputSchema: {
            type: 'object',
            properties: {
              query: { type: 'string' },
              params: { type: 'array' }
            },
            required: ['query']
          }
        }
      ]
    }));
    
    // ツール実行
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;
      
      switch (name) {
        case 'calculate_price':
          return await this.calculatePrice(args);
          
        case 'send_email':
          return await this.sendEmail(args);
          
        case 'database_query':
          return await this.executeDatabaseQuery(args);
          
        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    });
    
    // リソース一覧
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => ({
      resources: [
        {
          uri: 'file:///projects/current',
          name: 'Current Project',
          description: '現在のプロジェクトファイル',
          mimeType: 'text/plain'
        },
        {
          uri: 'db://customers',
          name: 'Customer Database',
          description: '顧客データベース',
          mimeType: 'application/json'
        }
      ]
    }));
    
    // リソース読み取り
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const { uri } = request.params;
      
      if (uri.startsWith('file://')) {
        return await this.readFile(uri);
      } else if (uri.startsWith('db://')) {
        return await this.readDatabase(uri);
      }
      
      throw new Error(`Unknown resource: ${uri}`);
    });
  }
  
  private async calculatePrice(args: any) {
    const { quantity, unit_price, tax_rate = 0.1 } = args;
    const subtotal = quantity * unit_price;
    const tax = subtotal * tax_rate;
    const total = subtotal + tax;
    
    return {
      content: [
        {
          type: 'text',
          text: `計算結果:\n小計: ${subtotal}円\n税額: ${tax}円\n合計: ${total}円`
        }
      ]
    };
  }
  
  private async sendEmail(args: any) {
    const { to, subject, body } = args;
    
    // 実際のメール送信ロジック
    // await sendgrid.send({ to, subject, html: body });
    
    return {
      content: [
        {
          type: 'text',
          text: `メール送信完了: ${to}`
        }
      ]
    };
  }
  
  private async executeDatabaseQuery(args: any) {
    const { query, params = [] } = args;
    
    // 実際のDB実行
    // const result = await db.query(query, params);
    
    return {
      content: [
        {
          type: 'text',
          text: `クエリ実行完了: ${query}`
        }
      ]
    };
  }
  
  private async readFile(uri: string) {
    const path = uri.replace('file://', '');
    // const content = await fs.readFile(path, 'utf-8');
    
    return {
      contents: [
        {
          uri,
          mimeType: 'text/plain',
          text: 'ファイル内容...'
        }
      ]
    };
  }
  
  private async readDatabase(uri: string) {
    const table = uri.replace('db://', '');
    // const data = await db.select(table);
    
    return {
      contents: [
        {
          uri,
          mimeType: 'application/json',
          text: JSON.stringify({ data: [] })
        }
      ]
    };
  }
  
  async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('MCP Server started');
  }
}

// 起動
const server = new CustomMCPServer();
server.start().catch(console.error);
```

### パッケージ化と配布

```json
// package.json
{
  "name": "@your-org/mcp-server-custom",
  "version": "1.0.0",
  "description": "Custom MCP Server",
  "main": "dist/index.js",
  "bin": {
    "mcp-server-custom": "./dist/index.js"
  },
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsx watch src/index.ts"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^0.5.0",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.3.0",
    "tsx": "^4.0.0"
  }
}
```

---

## 💰 第3章: ビジネス向けMCP実装

### 実例1: CRM統合システム

```typescript
// mcp-crm-integration.ts
import { createMCPServer } from '@modelcontextprotocol/sdk';
import { SalesforceClient } from './salesforce';
import { HubSpotClient } from './hubspot';

const crmServer = createMCPServer({
  name: 'CRM Integration',
  version: '1.0.0',
  
  tools: [
    {
      name: 'get_customer',
      description: '顧客情報を取得',
      execute: async ({ customer_id }) => {
        const sf = new SalesforceClient();
        const customer = await sf.getCustomer(customer_id);
        return {
          type: 'text',
          content: JSON.stringify(customer, null, 2)
        };
      }
    },
    {
      name: 'create_deal',
      description: '商談を作成',
      execute: async ({ customer_id, amount, description }) => {
        const hs = new HubSpotClient();
        const deal = await hs.createDeal({
          associatedCustomerId: customer_id,
          amount,
          description,
          stage: 'proposal'
        });
        return {
          type: 'text',
          content: `商談作成完了: ${deal.id}`
        };
      }
    },
    {
      name: 'sales_report',
      description: '売上レポート生成',
      execute: async ({ period }) => {
        const sf = new SalesforceClient();
        const data = await sf.getSalesData(period);
        
        // レポート生成
        const report = generateSalesReport(data);
        
        return {
          type: 'text',
          content: report
        };
      }
    }
  ],
  
  resources: [
    {
      uri: 'crm://customers',
      name: '顧客リスト',
      read: async () => {
        const sf = new SalesforceClient();
        const customers = await sf.listCustomers();
        return JSON.stringify(customers);
      }
    },
    {
      uri: 'crm://pipeline',
      name: 'セールスパイプライン',
      read: async () => {
        const hs = new HubSpotClient();
        const pipeline = await hs.getPipeline();
        return JSON.stringify(pipeline);
      }
    }
  ]
});

// 実際の使用例（Claude Code内）
/*
Claude: "顧客ID C-12345の情報を確認して、100万円の商談を作成してください"

1. get_customer(customer_id: "C-12345")
2. create_deal(customer_id: "C-12345", amount: 1000000, description: "新規システム開発")
3. "商談を作成しました。詳細はCRMでご確認ください。"
*/
```

### 実例2: 在庫管理システム

```python
# mcp_inventory_server.py
import json
import asyncio
from mcp.server import Server, Request
from mcp.server.models import Tool, Resource
from inventory_db import InventoryDB

class InventoryMCPServer:
    def __init__(self):
        self.server = Server("inventory-management")
        self.db = InventoryDB()
        self.setup_tools()
        
    def setup_tools(self):
        @self.server.tool()
        async def check_stock(product_id: str) -> dict:
            """在庫数を確認"""
            stock = await self.db.get_stock(product_id)
            
            return {
                "product_id": product_id,
                "current_stock": stock.quantity,
                "warehouse": stock.warehouse,
                "last_updated": stock.updated_at,
                "status": "在庫あり" if stock.quantity > 0 else "在庫切れ"
            }
        
        @self.server.tool()
        async def update_stock(
            product_id: str,
            quantity: int,
            operation: str = "set"
        ) -> dict:
            """在庫を更新"""
            if operation == "set":
                result = await self.db.set_stock(product_id, quantity)
            elif operation == "add":
                result = await self.db.add_stock(product_id, quantity)
            elif operation == "subtract":
                result = await self.db.subtract_stock(product_id, quantity)
            
            return {
                "product_id": product_id,
                "new_quantity": result.quantity,
                "operation": operation,
                "success": True
            }
        
        @self.server.tool()
        async def auto_reorder(threshold: int = 10) -> dict:
            """自動発注リスト生成"""
            low_stock = await self.db.get_low_stock(threshold)
            
            reorders = []
            for item in low_stock:
                reorder_qty = item.reorder_point - item.quantity
                reorders.append({
                    "product_id": item.product_id,
                    "product_name": item.name,
                    "current": item.quantity,
                    "reorder_quantity": reorder_qty,
                    "supplier": item.supplier,
                    "estimated_cost": reorder_qty * item.unit_cost
                })
            
            total_cost = sum(r["estimated_cost"] for r in reorders)
            
            return {
                "reorder_list": reorders,
                "total_items": len(reorders),
                "total_cost": total_cost,
                "generated_at": datetime.now().isoformat()
            }
        
        @self.server.tool()
        async def inventory_analytics() -> dict:
            """在庫分析レポート"""
            analytics = await self.db.get_analytics()
            
            return {
                "total_products": analytics.total_products,
                "total_value": analytics.total_value,
                "turnover_rate": analytics.turnover_rate,
                "dead_stock": analytics.dead_stock,
                "fast_moving": analytics.fast_moving_items,
                "recommendations": self.generate_recommendations(analytics)
            }
    
    def generate_recommendations(self, analytics):
        """AIによる在庫最適化提案"""
        recommendations = []
        
        if analytics.dead_stock:
            recommendations.append({
                "type": "dead_stock",
                "action": "在庫処分セールの実施",
                "items": analytics.dead_stock[:5]
            })
        
        if analytics.turnover_rate < 4:
            recommendations.append({
                "type": "low_turnover",
                "action": "発注量の削減を検討",
                "current_rate": analytics.turnover_rate
            })
        
        return recommendations
    
    async def start(self):
        await self.server.start()

# 実行
if __name__ == "__main__":
    server = InventoryMCPServer()
    asyncio.run(server.start())
```

---

## 🛠️ 第4章: 高度なMCP活用

### マルチサーバー連携

```javascript
// multi-server-orchestrator.js
const { MCPClient } = require('@modelcontextprotocol/sdk');

class MCPOrchestrator {
  constructor() {
    this.servers = new Map();
    this.initializeServers();
  }
  
  async initializeServers() {
    // 複数のMCPサーバーに接続
    this.servers.set('database', await this.connectServer({
      command: 'mcp-server-postgres',
      config: { connectionString: process.env.DATABASE_URL }
    }));
    
    this.servers.set('files', await this.connectServer({
      command: 'mcp-server-filesystem',
      config: { rootPath: '/projects' }
    }));
    
    this.servers.set('api', await this.connectServer({
      command: 'mcp-server-rest',
      config: { baseUrl: 'https://api.example.com' }
    }));
    
    this.servers.set('monitoring', await this.connectServer({
      command: 'mcp-server-prometheus',
      config: { endpoint: 'http://prometheus:9090' }
    }));
  }
  
  async connectServer(config) {
    const client = new MCPClient();
    await client.connect(config);
    return client;
  }
  
  async executeWorkflow(task) {
    console.log(`🚀 ワークフロー実行: ${task.name}`);
    
    const results = {};
    
    // Step 1: データベースから情報取得
    if (task.requiresData) {
      const dbClient = this.servers.get('database');
      results.data = await dbClient.callTool('query', {
        sql: task.dataQuery
      });
    }
    
    // Step 2: ファイル操作
    if (task.fileOperations) {
      const fileClient = this.servers.get('files');
      for (const op of task.fileOperations) {
        results.files = await fileClient.callTool(op.action, op.params);
      }
    }
    
    // Step 3: 外部API呼び出し
    if (task.apiCalls) {
      const apiClient = this.servers.get('api');
      results.api = await apiClient.callTool('request', task.apiCalls);
    }
    
    // Step 4: モニタリング
    const monitorClient = this.servers.get('monitoring');
    await monitorClient.callTool('record_metric', {
      name: `workflow_${task.name}`,
      value: 1,
      labels: { status: 'success' }
    });
    
    return results;
  }
  
  // 実用例: ECサイトの在庫同期
  async syncInventory() {
    return await this.executeWorkflow({
      name: 'inventory_sync',
      requiresData: true,
      dataQuery: 'SELECT * FROM products WHERE updated_at > NOW() - INTERVAL 1 HOUR',
      fileOperations: [
        {
          action: 'write',
          params: {
            path: '/exports/inventory.json',
            content: '{{data}}'
          }
        }
      ],
      apiCalls: {
        method: 'POST',
        endpoint: '/inventory/bulk-update',
        body: '{{data}}'
      }
    });
  }
}

// 使用例
const orchestrator = new MCPOrchestrator();
orchestrator.syncInventory()
  .then(result => console.log('✅ 同期完了:', result))
  .catch(err => console.error('❌ エラー:', err));
```

### セキュリティとアクセス制御

```typescript
// mcp-security-layer.ts
import { MCPServer, MCPMiddleware } from '@modelcontextprotocol/sdk';
import jwt from 'jsonwebtoken';
import { RateLimiter } from './rate-limiter';

class SecureMCPServer {
  private server: MCPServer;
  private rateLimiter: RateLimiter;
  
  constructor() {
    this.rateLimiter = new RateLimiter({
      windowMs: 60000, // 1分
      maxRequests: 100
    });
    
    this.server = new MCPServer({
      name: 'secure-server',
      middleware: [
        this.authenticationMiddleware.bind(this),
        this.authorizationMiddleware.bind(this),
        this.rateLimitMiddleware.bind(this),
        this.auditMiddleware.bind(this)
      ]
    });
  }
  
  // 認証ミドルウェア
  async authenticationMiddleware(req: any, next: Function) {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      throw new Error('認証が必要です');
    }
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      req.user = decoded;
      return next();
    } catch (error) {
      throw new Error('無効なトークン');
    }
  }
  
  // 認可ミドルウェア
  async authorizationMiddleware(req: any, next: Function) {
    const { tool, user } = req;
    
    // ツールごとのアクセス権限チェック
    const permissions = {
      'database_write': ['admin', 'developer'],
      'database_read': ['admin', 'developer', 'analyst'],
      'file_delete': ['admin'],
      'api_call': ['admin', 'developer', 'user']
    };
    
    const allowedRoles = permissions[tool] || [];
    
    if (!allowedRoles.includes(user.role)) {
      throw new Error(`権限がありません: ${tool}`);
    }
    
    return next();
  }
  
  // レート制限ミドルウェア
  async rateLimitMiddleware(req: any, next: Function) {
    const userId = req.user.id;
    
    if (!this.rateLimiter.checkLimit(userId)) {
      throw new Error('レート制限を超えました');
    }
    
    return next();
  }
  
  // 監査ログミドルウェア
  async auditMiddleware(req: any, next: Function) {
    const startTime = Date.now();
    
    try {
      const result = await next();
      
      // 成功ログ
      await this.logAudit({
        user: req.user.id,
        tool: req.tool,
        params: req.params,
        status: 'success',
        duration: Date.now() - startTime
      });
      
      return result;
    } catch (error) {
      // エラーログ
      await this.logAudit({
        user: req.user.id,
        tool: req.tool,
        params: req.params,
        status: 'error',
        error: error.message,
        duration: Date.now() - startTime
      });
      
      throw error;
    }
  }
  
  private async logAudit(entry: any) {
    // データベースやログサービスに記録
    console.log('Audit:', entry);
  }
}
```

---

## 📈 第5章: パフォーマンス最適化

### キャッシング戦略

```javascript
// mcp-cache-layer.js
const NodeCache = require('node-cache');
const crypto = require('crypto');

class MCPCacheLayer {
  constructor() {
    // TTL: 5分、チェック間隔: 1分
    this.cache = new NodeCache({ 
      stdTTL: 300,
      checkperiod: 60 
    });
    
    this.stats = {
      hits: 0,
      misses: 0,
      writes: 0
    };
  }
  
  // キャッシュキー生成
  generateKey(tool, params) {
    const data = JSON.stringify({ tool, params });
    return crypto.createHash('md5').update(data).digest('hex');
  }
  
  // キャッシュ付きツール実行
  async executeTool(server, tool, params, options = {}) {
    const useCache = options.cache !== false;
    const ttl = options.ttl || 300;
    
    if (useCache) {
      const key = this.generateKey(tool, params);
      const cached = this.cache.get(key);
      
      if (cached) {
        this.stats.hits++;
        console.log(`✅ Cache hit: ${tool}`);
        return cached;
      }
      
      this.stats.misses++;
    }
    
    // 実際の実行
    console.log(`🔄 Executing: ${tool}`);
    const result = await server.callTool(tool, params);
    
    if (useCache) {
      const key = this.generateKey(tool, params);
      this.cache.set(key, result, ttl);
      this.stats.writes++;
    }
    
    return result;
  }
  
  // キャッシュ統計
  getStats() {
    const total = this.stats.hits + this.stats.misses;
    const hitRate = total > 0 ? (this.stats.hits / total * 100).toFixed(2) : 0;
    
    return {
      ...this.stats,
      hitRate: `${hitRate}%`,
      cacheSize: this.cache.keys().length
    };
  }
  
  // キャッシュクリア
  clearCache(pattern) {
    if (pattern) {
      const keys = this.cache.keys();
      keys.forEach(key => {
        if (key.includes(pattern)) {
          this.cache.del(key);
        }
      });
    } else {
      this.cache.flushAll();
    }
  }
}

// 使用例
const cacheLayer = new MCPCacheLayer();
const server = /* MCPサーバー接続 */;

// キャッシュ有効
const result1 = await cacheLayer.executeTool(
  server, 
  'database_query',
  { sql: 'SELECT * FROM users' },
  { cache: true, ttl: 600 }
);

// 2回目は高速（キャッシュから）
const result2 = await cacheLayer.executeTool(
  server,
  'database_query',
  { sql: 'SELECT * FROM users' }
);

console.log('キャッシュ統計:', cacheLayer.getStats());
```

---

## 💰 第6章: 収益化事例

### SaaS製品への組み込み

```typescript
// saas-mcp-integration.ts
class SaaSMCPIntegration {
  private plans = {
    free: {
      price: 0,
      limits: {
        mcpCalls: 100,
        servers: 1,
        tools: ['basic_query', 'read_file']
      }
    },
    pro: {
      price: 9800,
      limits: {
        mcpCalls: 10000,
        servers: 5,
        tools: 'all'
      }
    },
    enterprise: {
      price: 98000,
      limits: {
        mcpCalls: 'unlimited',
        servers: 'unlimited',
        tools: 'all',
        customServers: true
      }
    }
  };
  
  async handleRequest(userId: string, tool: string, params: any) {
    // プランチェック
    const userPlan = await this.getUserPlan(userId);
    const plan = this.plans[userPlan];
    
    // 使用量チェック
    const usage = await this.getUsage(userId);
    if (plan.limits.mcpCalls !== 'unlimited' && 
        usage.mcpCalls >= plan.limits.mcpCalls) {
      throw new Error('使用量制限に達しました。プランをアップグレードしてください。');
    }
    
    // ツール権限チェック
    if (Array.isArray(plan.limits.tools) && 
        !plan.limits.tools.includes(tool)) {
      throw new Error(`このツールは${userPlan}プランでは利用できません`);
    }
    
    // 実行
    const result = await this.executeMCPTool(tool, params);
    
    // 使用量記録
    await this.recordUsage(userId, tool);
    
    // 課金（従量課金の場合）
    if (userPlan === 'enterprise' && usage.mcpCalls > 100000) {
      const additionalCost = (usage.mcpCalls - 100000) * 0.1; // 0.1円/call
      await this.billAdditionalUsage(userId, additionalCost);
    }
    
    return result;
  }
}
```

---

## 🎯 第7章: トラブルシューティング

### よくある問題と解決策

```javascript
const mcpTroubleshooting = {
  "サーバーが起動しない": {
    症状: "Failed to start MCP server",
    原因: [
      "Node.jsバージョンが古い",
      "権限不足",
      "ポート競合"
    ],
    解決策: `
      # Node.js更新
      nvm install 20
      nvm use 20
      
      # 権限修正
      chmod +x /usr/local/bin/mcp-server
      
      # ポート確認
      lsof -i :3000
    `
  },
  
  "Claude Codeで認識されない": {
    症状: "MCPツールが表示されない",
    原因: "設定ファイルの場所が違う",
    解決策: `
      # 正しい設定パス確認
      # Mac
      ~/Library/Application Support/Claude/config.json
      
      # Windows
      %APPDATA%\\Claude\\config.json
      
      # 設定後、Claude Codeを再起動
    `
  },
  
  "レスポンスが遅い": {
    症状: "ツール実行に時間がかかる",
    原因: "ネットワーク遅延、大量データ",
    解決策: `
      // ストリーミング対応
      server.setStreamingEnabled(true);
      
      // ページネーション
      const results = await tool.execute({
        limit: 100,
        offset: 0
      });
      
      // キャッシング
      const cached = cache.get(key) || await tool.execute();
    `
  }
};
```

---

## 🚀 クイックスタート

```bash
# 5分でMCP環境構築
curl -sSL https://raw.githubusercontent.com/anthropics/mcp-servers/main/install.sh | bash

# サンプルサーバー起動
npx @anthropic/mcp-server-filesystem --root ~/projects

# Claude Codeで確認
# 「MCPツールを表示」コマンドで確認
```

---

*最終更新: 2025年1月*
*バージョン: 1.0*

**MCPで無限の可能性を解放しよう！**