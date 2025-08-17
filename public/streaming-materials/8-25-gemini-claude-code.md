# 📺 8/25 Gemini CLI + Claude Code配信
## 配信日：8月25日（月）21:00-22:00
## テーマ：CLI入門でツール開発 + 大規模開発の常識を変える

---

## 🎯 配信ゴール
参加者が60分後に達成できること：
1. Gemini CLIでツール開発の基礎をマスター
2. Claude Codeで20万行規模のコード解析を体験
3. AI駆動開発の最新手法を実践

---

## 👥 ターゲット
- **CUI/CLIに慣れている開発者**
- **大規模コードベースを扱うエンジニア**
- **最新LLM性能に関心がある開発者**
- **業務効率化に興味があるエンジニア**

---

## ⏰ タイムスケジュール

### 20:55-21:00 【配信準備】
- ターミナル環境準備
- Claude Code環境確認
- 大規模プロジェクト準備

### 21:00-21:05 【オープニング】
```
「こんばんは！月曜の夜は最強の開発環境を構築しましょう！
今日は2つの革命的ツールで開発効率を100倍にします！
Gemini CLIとClaude Code、どちらも衝撃的です！」
```
- 2つのツールの魅力を30秒で
- 開発効率化の比較デモ予告
- 大規模開発の課題と解決策

### 21:05-21:30 【パート1：Gemini CLI ツール開発】

#### Gemini CLIの強み
```
開発者にとってのメリット：
✅ ターミナルから直接AI操作
✅ パイプライン処理で高速化
✅ バッチ処理・自動化に最適
✅ Git統合で開発フロー改善
```

#### 🔨 実装1：Gitコミットメッセージ自動生成ツール（10分）

**smart-commit.sh**
```bash
#!/bin/bash
# AI駆動のインテリジェントコミットツール

# 差分分析
diff=$(git diff --staged --unified=3)
files=$(git diff --staged --name-only)

if [ -z "$diff" ]; then
    echo "❌ ステージングされた変更がありません"
    exit 1
fi

echo "🔍 変更を分析中..."

# Geminiで詳細分析
analysis=$(echo "$diff" | gemini ask "
この Git 差分を分析して、以下の形式でコミットメッセージを生成してください：

## 分析観点
1. 変更の種類（feat/fix/docs/style/refactor/test/chore）
2. 影響範囲（ファイル・機能レベル）
3. 変更の意図・目的
4. 破壊的変更の有無

## 出力形式
\`\`\`
type(scope): brief description

Detailed explanation:
- 変更内容の詳細
- 理由・背景
- 影響範囲

Breaking changes: [あれば記載]
\`\`\`

変更ファイル: ${files}
")

echo "📝 生成されたコミットメッセージ："
echo "$analysis"
echo ""

# 確認とコミット実行
read -p "このメッセージでコミットしますか？ (y/n): " confirm
if [ "$confirm" = "y" ]; then
    echo "$analysis" | git commit -F -
    echo "✅ コミット完了！"
    
    # 自動でpush提案
    read -p "リモートにプッシュしますか？ (y/n): " push_confirm
    if [ "$push_confirm" = "y" ]; then
        git push
        echo "🚀 プッシュ完了！"
    fi
else
    echo "❌ コミットをキャンセルしました"
fi
```

#### 🔨 実装2：コードレビュー自動化システム（8分）

**review-request.js**
```javascript
#!/usr/bin/env node

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

class AICodeReviewer {
    constructor() {
        this.reviewCriteria = {
            security: ['SQL injection', 'XSS', 'CSRF', '機密情報露出'],
            performance: ['N+1クエリ', 'メモリリーク', '無限ループ'],
            maintainability: ['複雑度', '命名規則', 'DRY原則'],
            testing: ['テストカバレッジ', 'エッジケース', 'モック設計']
        };
    }

    async reviewPullRequest(prNumber) {
        console.log(`🔍 PR #${prNumber} のレビューを開始...`);
        
        // PR差分取得
        const diff = await this.getPRDiff(prNumber);
        
        // ファイル別レビュー
        const reviews = await this.reviewFiles(diff);
        
        // 総合評価
        const summary = await this.generateSummary(reviews);
        
        // GitHub PR にコメント投稿
        await this.postReviewComment(prNumber, summary);
        
        return summary;
    }

    async reviewFiles(diff) {
        const files = this.parseDiffFiles(diff);
        const reviews = [];

        for (const file of files) {
            console.log(`📄 レビュー中: ${file.path}`);
            
            const review = await this.reviewSingleFile(file);
            reviews.push({
                file: file.path,
                review: review,
                severity: this.calculateSeverity(review)
            });
        }

        return reviews;
    }

    async reviewSingleFile(file) {
        const prompt = `
コードレビューを実施してください：

## ファイル: ${file.path}
\`\`\`${file.language}
${file.content}
\`\`\`

## レビュー観点
${Object.entries(this.reviewCriteria).map(([category, items]) => 
    `### ${category}\n${items.map(item => `- ${item}`).join('\n')}`
).join('\n\n')}

## 出力形式
\`\`\`json
{
    "overall_score": 85,
    "issues": [
        {
            "severity": "high|medium|low",
            "category": "security|performance|maintainability|testing",
            "line": 42,
            "message": "具体的な問題の説明",
            "suggestion": "修正提案"
        }
    ],
    "positive_points": ["良い点1", "良い点2"],
    "refactor_suggestions": ["リファクタリング提案1"]
}
\`\`\`
        `;

        // Gemini CLI でレビュー実行
        return new Promise((resolve) => {
            exec(`echo "${prompt}" | gemini ask --format json`, (error, stdout) => {
                if (error) {
                    console.error('レビューエラー:', error);
                    resolve({ error: error.message });
                }
                try {
                    resolve(JSON.parse(stdout));
                } catch (e) {
                    resolve({ error: 'JSON解析エラー' });
                }
            });
        });
    }
}

// 使用例
const reviewer = new AICodeReviewer();
const prNumber = process.argv[2];

if (prNumber) {
    reviewer.reviewPullRequest(prNumber)
        .then(summary => {
            console.log('✅ レビュー完了！');
            console.log(JSON.stringify(summary, null, 2));
        })
        .catch(console.error);
} else {
    console.log('使用法: node review-request.js <PR番号>');
}
```

#### 🔨 実装3：開発環境セットアップ自動化（7分）

**dev-setup.sh**
```bash
#!/bin/bash
# プロジェクト環境自動構築スクリプト

PROJECT_NAME=$1
TECH_STACK=$2

if [ -z "$PROJECT_NAME" ] || [ -z "$TECH_STACK" ]; then
    echo "使用法: ./dev-setup.sh <プロジェクト名> <技術スタック>"
    echo "例: ./dev-setup.sh my-app 'React+Node.js+PostgreSQL'"
    exit 1
fi

echo "🚀 プロジェクト「$PROJECT_NAME」の環境構築を開始..."

# Geminiで最適な構成を生成
config=$(gemini ask "
技術スタック「$TECH_STACK」でのプロジェクト構成を提案してください。

## 要求事項
- モダンなベストプラクティス
- Docker対応
- CI/CD設定
- テスト環境
- 開発効率最適化

## 出力形式
\`\`\`json
{
    \"project_structure\": {
        \"directories\": [\"src\", \"tests\", \"docs\"],
        \"files\": [\"package.json\", \"Dockerfile\", \".github/workflows/ci.yml\"]
    },
    \"dependencies\": [\"react\", \"express\", \"jest\"],
    \"scripts\": {
        \"dev\": \"npm run dev\",
        \"build\": \"npm run build\",
        \"test\": \"npm test\"
    },
    \"docker_compose\": \"docker-compose.yml content\",
    \"github_actions\": \"CI/CD workflow content\"
}
\`\`\`
")

# プロジェクト構造作成
echo "📁 ディレクトリ構造作成中..."
mkdir -p "$PROJECT_NAME"
cd "$PROJECT_NAME"

# 設定ファイル生成
echo "$config" | jq -r '.project_structure.directories[]' | xargs mkdir -p
echo "$config" | jq -r '.docker_compose' > docker-compose.yml
echo "$config" | jq -r '.github_actions' > .github/workflows/ci.yml

# package.json生成
cat > package.json << EOF
{
    "name": "$PROJECT_NAME",
    "version": "1.0.0",
    "scripts": $(echo "$config" | jq '.scripts'),
    "dependencies": {},
    "devDependencies": {}
}
EOF

# README生成
gemini ask "
「$PROJECT_NAME」プロジェクトの詳細なREADME.mdを作成してください。

技術スタック: $TECH_STACK

含める内容:
- プロジェクト概要
- セットアップ手順
- 開発手順
- デプロイ方法
- 貢献ガイドライン
" > README.md

echo "✅ プロジェクト環境構築完了！"
echo "📂 作成場所: $(pwd)"
echo "🔗 次のステップ: cd $PROJECT_NAME && npm install"
```

### 21:30-21:55 【パート2：Claude Code 大規模開発】

#### Claude Codeの革新性
```
大規模開発での課題：
❌ コードベース全体の把握困難
❌ 複雑な依存関係の理解
❌ レガシーコードの解析
❌ リファクタリングのリスク

Claude Codeの解決策：
✅ 20万行+のコード一括解析
✅ アーキテクチャ全体の可視化
✅ 安全なリファクタリング提案
✅ AIペアプログラミング
```

#### 🔨 実装1：大規模プロジェクト解析（10分）

**実演：オープンソースプロジェクト分析**
```
対象：Next.js フレームワーク（15万行+）

分析内容：
1. アーキテクチャ概要の把握
2. 核心的なコンポーネント識別
3. データフロー追跡
4. パフォーマンスボトルネック発見
5. セキュリティ脆弱性検査
```

**Claude Codeでの実行例**
```
# プロジェクト全体の分析
"このNext.jsプロジェクトのアーキテクチャを分析して、
主要コンポーネントとデータフローを説明してください"

# 特定機能の深掘り
"SSRの実装部分を詳しく分析し、
パフォーマンス改善の余地があるか教えてください"

# 依存関係の調査
"このプロジェクトの依存関係グラフを作成し、
循環依存や不要な依存を特定してください"
```

#### 🔨 実装2：AIペアプログラミング実践（8分）

**シナリオ：認証システムの実装**
```
要件：
- JWT認証
- リフレッシュトークン
- RBAC（Role-Based Access Control）
- セキュリティベストプラクティス
```

**Claude Codeとの対話例**
```
開発者: "JWT認証システムを実装したいです。
        セキュリティを重視した設計にしてください"

Claude: [詳細な設計提案とコード生成]

開発者: "RBAC機能も追加してください。
        管理者、編集者、閲覧者の3つのロールで"

Claude: [既存コードを考慮した拡張実装]

開発者: "このコードのセキュリティテストも作成してください"

Claude: [包括的なセキュリティテスト生成]
```

#### 🔨 実装3：レガシーコード現代化（7分）

**対象：10年前のJavaScript → 現代TypeScript**
```
変換内容：
- ES5 → ES2023+ 構文
- 無名関数 → アロー関数
- Callback → Promise/Async-Await
- 型注釈追加
- モジュール化
- テストコード生成
```

**実演フロー**
```
1. レガシーコード読み込み
2. 現代化方針の提案
3. 段階的リファクタリング実行
4. 型安全性向上
5. テスト実装
6. 動作確認
```

### 21:55-22:00 【比較・まとめ】

#### 2つのツールの使い分け
```
Gemini CLI：
✅ 軽量・高速なタスク
✅ バッチ処理・自動化
✅ Git統合
✅ シェルスクリプト連携

Claude Code：
✅ 大規模・複雑なプロジェクト
✅ アーキテクチャ理解
✅ 対話的な開発
✅ 深い文脈理解
```

#### まとめ
✅ Gemini CLIでツール開発を習得
✅ Claude Codeで大規模開発を体験
✅ AI駆動開発の可能性を実感

#### 次回予告
- 明日8/26：Codex CLIで最強ターミナル環境
- 8/27：𝕏スペース「未経験からアイデアを形に」
- 8/31：Cursor × Obsidian知識駆動開発

---

## 📝 配信用チェックリスト

### 配信前
- [ ] 両ツールの動作確認
- [ ] 大規模プロジェクト準備
- [ ] ターミナル画面設定
- [ ] スクリプト実行テスト
- [ ] 比較デモ準備

### 配信中
- [ ] 2つのツールの違いを明確に
- [ ] 実行速度の違いを実演
- [ ] 適用場面の使い分け説明
- [ ] 実用性を具体例で示す

### 配信後
- [ ] 全スクリプト公開
- [ ] 使い分けガイド作成
- [ ] インストール手順共有

---

## 🎬 画面レイアウト案
```
┌────────────────────────────────────┐
│                                    │
│   ターミナル + Claude Code画面     │
│      （分割表示または切り替え）    │
│                                    │
├────────────────┬───────────────────┤
│ 顔出し（小）    │  実行結果・ログ    │
└────────────────┴───────────────────┘
```

---

## 💡 配信のコツ
1. **速度感の違い**：軽量タスクvs複雑タスクの使い分け
2. **実用性重視**：「どちらを使うべきか」判断基準
3. **コラボ感**：AIとペアプログラミングしている感
4. **スケール感**：小さなツールから大規模開発まで
5. **効率性強調**：従来開発との時間・品質差を数値化