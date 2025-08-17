# 📺 Day 2: Gemini CLI徹底活用
## 配信日：8月15日（金）20:00-21:30

---

## 🎯 配信ゴール
参加者が90分後に達成できること：
1. Gemini CLIの環境構築と基本操作をマスター
2. ファイル操作・バッチ処理の自動化を実装
3. 実用的な自動化スクリプトを3つ作成

---

## ⏰ タイムスケジュール

### 19:55-20:00 【配信準備】
- ターミナル環境の準備
- サンプルファイルの配置確認
- 待機画面表示（BGM）

### 20:00-20:05 【オープニング】
```
「こんばんは！Day2へようこそ！
昨日のGoogle AI Studioはいかがでしたか？
今日はCLIでAIを自在に操る方法を学びます！」
```
- Day1の簡単な振り返り
- 本日のゴール説明
- CLIの魅力を30秒で

### 20:05-20:20 【環境構築】

#### 必要な環境
1. **Node.js** (v18以上)
2. **npm** または **yarn**
3. **Google AI APIキー**（昨日取得したもの）
4. **VSCode**（推奨エディタ）

#### インストール手順
```bash
# Gemini CLIのインストール
npm install -g @google/generative-ai-cli

# または開発用にローカルインストール
npm init -y
npm install @google/generative-ai

# 環境変数の設定
export GEMINI_API_KEY="your-api-key-here"

# 動作確認
gemini --version
```

#### 設定ファイル作成
```bash
# .geminirc の作成
cat > ~/.geminirc << EOF
{
  "apiKey": "YOUR_API_KEY",
  "model": "gemini-pro",
  "temperature": 0.7,
  "maxTokens": 2048
}
EOF
```

⚠️ **トラブルシューティング**
- `command not found` → PATHの確認
- 認証エラー → APIキーの再確認
- Node.jsエラー → バージョン確認 `node -v`

### 20:20-20:35 【基礎解説】

#### CLIの基本コマンド
```bash
# 基本的な質問
gemini ask "JavaScriptで配列をソートする方法は？"

# ファイルを読み込んで処理
gemini analyze --file code.js

# 出力をファイルに保存
gemini ask "READMEテンプレート作成" > README.md

# パイプで連携
cat error.log | gemini ask "このエラーの解決方法は？"
```

#### 便利なオプション
```bash
# モデル指定
gemini ask "質問" --model gemini-pro-vision

# 温度設定（創造性）
gemini ask "物語を書いて" --temperature 0.9

# トークン制限
gemini ask "要約して" --max-tokens 100

# JSON出力
gemini ask "データ生成" --format json
```

### 20:35-21:10 【ハンズオン実装】

#### 🔨 実装1：ファイル一括処理スクリプト（15分）

**translate-docs.sh**
```bash
#!/bin/bash
# 複数のMarkdownファイルを英語に翻訳

for file in docs/*.md; do
    echo "翻訳中: $file"
    
    # ファイル内容を読み込んで翻訳
    content=$(cat "$file")
    translated=$(echo "$content" | gemini ask "
        以下の日本語Markdownを英語に翻訳してください。
        フォーマットは維持し、コードブロックは翻訳しないでください。
    ")
    
    # 翻訳結果を新しいファイルに保存
    output="docs/en/$(basename "$file")"
    echo "$translated" > "$output"
    
    echo "完了: $output"
done
```

**実行デモ**
```bash
# 実行権限付与
chmod +x translate-docs.sh

# スクリプト実行
./translate-docs.sh
```

#### 🔨 実装2：コードレビュー自動化（15分）

**code-review.js**
```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

// Gemini初期化
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function reviewCode(filePath) {
    const code = fs.readFileSync(filePath, 'utf-8');
    
    const prompt = `
    以下のコードをレビューしてください：
    
    ${code}
    
    レビュー観点：
    1. セキュリティの問題
    2. パフォーマンスの改善点
    3. 可読性の向上案
    4. ベストプラクティスとの乖離
    
    出力形式：
    ## 🔴 重要な問題
    ## 🟡 改善提案
    ## 🟢 良い点
    ## 📝 修正例
    `;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
}

// 使用例
async function main() {
    const review = await reviewCode('./src/app.js');
    console.log(review);
    
    // レポートファイルに保存
    fs.writeFileSync('code-review-report.md', review);
}

main().catch(console.error);
```

#### 🔨 実装3：Git コミットメッセージ生成（10分）

**auto-commit.sh**
```bash
#!/bin/bash
# Git差分から自動でコミットメッセージを生成

# 差分を取得
diff=$(git diff --staged)

if [ -z "$diff" ]; then
    echo "ステージングされた変更がありません"
    exit 1
fi

# Geminiでコミットメッセージ生成
commit_message=$(echo "$diff" | gemini ask "
この差分から適切なGitコミットメッセージを生成してください。

フォーマット：
- 1行目: 変更の要約（50文字以内）
- 2行目: 空行
- 3行目以降: 詳細な説明（必要に応じて）

コミットタイプ：
- feat: 新機能
- fix: バグ修正
- docs: ドキュメント
- style: フォーマット
- refactor: リファクタリング
- test: テスト
- chore: その他
")

echo "生成されたコミットメッセージ："
echo "$commit_message"
echo ""
read -p "このメッセージでコミットしますか？ (y/n): " confirm

if [ "$confirm" = "y" ]; then
    git commit -m "$commit_message"
    echo "コミット完了！"
else
    echo "キャンセルしました"
fi
```

#### 🔨 実装4：ログ分析ツール（10分）

**analyze-logs.js**
```javascript
#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function analyzeLogs(logFile) {
    const logs = fs.readFileSync(logFile, 'utf-8');
    
    // 最新100行を抽出
    const recentLogs = logs.split('\n').slice(-100).join('\n');
    
    const analysis = await model.generateContent(`
        以下のログを分析してください：
        
        ${recentLogs}
        
        分析項目：
        1. エラーパターンの特定
        2. 異常な動作の検出
        3. パフォーマンス問題の指摘
        4. 改善提案
        
        出力はJSON形式で：
        {
            "errors": [],
            "warnings": [],
            "patterns": [],
            "recommendations": []
        }
    `);
    
    return JSON.parse(analysis.response.text());
}

// リアルタイム監視モード
function watchLogs(logFile) {
    console.log(`📊 ログ監視開始: ${logFile}`);
    
    const rl = readline.createInterface({
        input: fs.createReadStream(logFile),
        crlfDelay: Infinity
    });
    
    rl.on('line', async (line) => {
        if (line.includes('ERROR') || line.includes('FATAL')) {
            const suggestion = await model.generateContent(
                `このエラーログの解決策を提案: ${line}`
            );
            console.log(`⚠️ エラー検出: ${line}`);
            console.log(`💡 提案: ${suggestion.response.text()}`);
        }
    });
}

// CLIインターフェース
const args = process.argv.slice(2);
if (args[0] === 'watch') {
    watchLogs(args[1] || './app.log');
} else {
    analyzeLogs(args[0] || './app.log')
        .then(result => console.log(JSON.stringify(result, null, 2)))
        .catch(console.error);
}
```

### 21:10-21:15 【応用テクニック】

#### バッチ処理の最適化
```bash
# 並列処理で高速化
find . -name "*.md" | parallel -j 4 'gemini ask "要約: " < {}'

# プログレスバー付き処理
for file in *.txt; do
    echo -ne "\r処理中: $file"
    gemini process "$file" > "processed_$file"
done
```

#### CI/CDとの統合
```yaml
# .github/workflows/ai-review.yml
name: AI Code Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install -g @google/generative-ai-cli
      - run: gemini review --diff > review.md
      - uses: actions/upload-artifact@v2
        with:
          name: ai-review
          path: review.md
```

### 21:15-21:20 【Q&A】
よくある質問：
- Q: CLIとAPIの違いは？
- A: CLIは即座に使える、APIはプログラムに組み込める

- Q: 料金は？
- A: 無料枠内なら0円（1日1500リクエスト）

- Q: WindowsでPowerShellでも動く？
- A: 動きます！WSL2推奨ですが

### 21:20-21:25 【まとめ・次回予告】

#### 今日のポイント
✅ Gemini CLIの環境構築完了
✅ 4つの実用スクリプト作成
✅ 自動化の基礎を習得

#### 宿題
🎯 自分の業務で使える自動化スクリプトを1つ作成
- アイデア：日報生成、テスト生成、ドキュメント作成

#### 次回予告
「明日はDifyを使って、
コードを1行も書かずにAIアプリを作ります！
ドラッグ&ドロップだけで完成させましょう！」

### 21:25-21:30 【クロージング】
- GitHubリポジトリでサンプルコード公開
- Discordで質問受付中
- 「明日も20時にお会いしましょう！」

---

## 📝 配信用チェックリスト

### 配信前
- [ ] Node.js動作確認
- [ ] サンプルファイル準備
- [ ] ターミナル文字サイズ調整（見やすく）
- [ ] APIキー環境変数設定
- [ ] デモ用ログファイル準備

### 配信中
- [ ] コマンド実行前に説明
- [ ] エラー時の対処法説明
- [ ] 実行結果の確認
- [ ] チャット質問への回答

### 配信後
- [ ] サンプルコードGitHub公開
- [ ] コマンド一覧のGist作成
- [ ] 明日の準備確認

---

## 🎬 画面レイアウト案
```
┌────────────────────────────────────┐
│                                    │
│      VSCode + ターミナル           │
│         （メイン表示）              │
│                                    │
├────────────────┬───────────────────┤
│ 顔出し（小）    │  チャット表示      │
└────────────────┴───────────────────┘
```

---

## 💡 配信のコツ
1. **コマンド入力はゆっくり**：視聴者が追えるように
2. **結果確認を丁寧に**：出力をしっかり見せる
3. **エラーは学習機会**：トラブルシューティングも配信の価値
4. **実用性重視**：「これ、明日から使えます」
5. **楽しく実況**：「おお、動いた！」など感情を表現