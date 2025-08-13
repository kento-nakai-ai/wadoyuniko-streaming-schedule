# 🎯 特典7: Gemini CLI・Codex CLI活用ガイド

## コマンドライン最強AI！開発効率500%向上の秘密兵器

---

## 🚀 なぜCLI型AIが最強なのか

### CLI型AIの圧倒的メリット
```markdown
## GUI vs CLI 比較

### GUI（ChatGPT Web版など）
- マウス操作が必要 ❌
- コピペの手間 ❌
- 自動化不可能 ❌
- バッチ処理できない ❌

### CLI（Gemini CLI/Codex CLI）
- キーボードだけで完結 ✅
- パイプライン処理 ✅
- スクリプト自動化 ✅
- 大量処理可能 ✅
- CI/CD統合 ✅
```

---

## 📊 第1章: Gemini CLI完全マスター

### Gemini CLIとは
```javascript
const geminiCLI = {
  provider: "Google",
  models: ["gemini-pro", "gemini-pro-vision", "gemini-ultra"],
  特徴: {
    "超高速応答": "GPT-4の3倍速",
    "大容量コンテキスト": "100万トークン対応",
    "マルチモーダル": "画像・動画・音声対応",
    "無料枠": "60リクエスト/分"
  },
  価格: {
    gemini_pro: "$0.00025/1Kトークン", // GPT-4の1/40
    gemini_ultra: "$0.0025/1Kトークン"
  }
};
```

### インストールと初期設定

```bash
# 方法1: pip経由（Python）
pip install google-generativeai
pip install gemini-cli

# 方法2: npm経由（Node.js）
npm install -g @google/generative-ai-cli

# 方法3: Go経由（高速版）
go install github.com/google/gemini-cli@latest

# API Key設定
export GEMINI_API_KEY="your-api-key-here"

# または設定ファイル作成
cat > ~/.gemini/config.yaml << EOF
api_key: your-api-key-here
default_model: gemini-pro
temperature: 0.7
max_tokens: 2048
EOF
```

### 基本的な使い方

```bash
# 1. シンプルな質問
gemini "Reactのベストプラクティスを教えて"

# 2. ファイルを入力として使用
gemini -f code.js "このコードをレビューして"

# 3. パイプでの連携
cat error.log | gemini "エラーの原因を分析"

# 4. 画像認識
gemini -i screenshot.png "この画面の問題点を指摘"

# 5. ストリーミング出力
gemini --stream "長い記事を書いて"

# 6. JSON出力
gemini --json "ユーザー情報のスキーマを生成"
```

### 高度な活用テクニック

#### 1. バッチ処理自動化
```bash
#!/bin/bash
# batch_process.sh

# 複数ファイルを一括処理
for file in src/*.js; do
  echo "Processing: $file"
  gemini -f "$file" "
    以下のタスクを実行:
    1. バグの検出
    2. パフォーマンス改善提案
    3. セキュリティ問題の指摘
    4. リファクタリング提案
  " > "reviews/$(basename $file).review.md"
done

echo "✅ 全ファイルのレビュー完了"
```

#### 2. コード生成パイプライン
```bash
# アイデアからコード生成まで自動化
echo "TODOアプリ with AI機能" | 
  gemini "詳細な要件定義を作成" |
  gemini "React/Next.jsでの実装計画" |
  gemini "実際のコードを生成" > app.jsx

# テストコードも同時生成
gemini -f app.jsx "Jestでのテストコード生成" > app.test.js
```

#### 3. リアルタイムログ分析
```bash
# ログ監視と異常検知
tail -f /var/log/app.log | while read line; do
  echo "$line" | gemini --quick "
    異常なパターンがあれば警告
    正常なら'OK'と返答
  " | grep -v "OK" && notify-send "異常検知" "$line"
done
```

### Gemini CLI実践プロジェクト

#### プロジェクト1: 自動ドキュメント生成
```python
#!/usr/bin/env python3
# auto_doc_generator.py

import os
import subprocess
import json

def generate_docs(project_path):
    """プロジェクト全体のドキュメントを自動生成"""
    
    # 1. プロジェクト構造を取得
    structure = subprocess.run(
        ["tree", "-J", project_path],
        capture_output=True,
        text=True
    ).stdout
    
    # 2. Geminiでプロジェクト概要生成
    overview = subprocess.run(
        ["gemini", "--json"],
        input=f"このプロジェクト構造から概要を生成: {structure}",
        capture_output=True,
        text=True
    ).stdout
    
    # 3. 各ファイルのドキュメント生成
    docs = {}
    for root, dirs, files in os.walk(project_path):
        for file in files:
            if file.endswith(('.py', '.js', '.ts')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                doc = subprocess.run(
                    ["gemini"],
                    input=f"このコードのドキュメントを生成:\n{content}",
                    capture_output=True,
                    text=True
                ).stdout
                
                docs[filepath] = doc
    
    # 4. README.md生成
    readme = subprocess.run(
        ["gemini"],
        input=f"""
        以下の情報からREADME.mdを生成:
        概要: {overview}
        ファイル数: {len(docs)}
        主要機能: {list(docs.keys())[:5]}
        """,
        capture_output=True,
        text=True
    ).stdout
    
    with open("README.md", "w") as f:
        f.write(readme)
    
    print("✅ ドキュメント生成完了")

if __name__ == "__main__":
    generate_docs("./src")
```

---

## 🎨 第2章: Codex CLI徹底解説

### Codex CLIの特徴
```javascript
const codexCLI = {
  provider: "OpenAI",
  models: ["code-davinci-002", "code-cushman-001"],
  特徴: {
    "コード特化": "プログラミングに最適化",
    "多言語対応": "12以上のプログラミング言語",
    "自然言語→コード": "日本語の指示でコード生成",
    "コード→説明": "複雑なコードを解説"
  },
  ユースケース: [
    "コード補完",
    "バグ修正",
    "リファクタリング",
    "テスト生成",
    "ドキュメント作成"
  ]
};
```

### セットアップ

```bash
# インストール
npm install -g @openai/codex-cli
# または
pip install codex-cli

# 認証設定
export OPENAI_API_KEY="sk-..."

# エイリアス設定（便利）
alias cx='codex-cli'
alias cxgen='codex-cli generate'
alias cxfix='codex-cli fix'
alias cxtest='codex-cli test'
```

### 実践的な使用例

#### 1. インスタントコード生成
```bash
# React コンポーネント生成
cx generate "
  Reactで画像ギャラリーコンポーネント
  - グリッド表示
  - ライトボックス機能
  - 遅延ローディング
  - レスポンシブ対応
" --output gallery.jsx

# API エンドポイント生成
cx generate "
  Express.jsでCRUD API
  - ユーザー管理
  - JWT認証
  - バリデーション
  - エラーハンドリング
" --language javascript --output api.js
```

#### 2. 既存コードの改善
```bash
# パフォーマンス最適化
cx optimize performance --file slow-function.js

# セキュリティ強化
cx audit security --file api-endpoint.js --fix

# コードスタイル統一
cx format --style airbnb --file "src/**/*.js"
```

#### 3. テスト自動生成
```bash
# ユニットテスト生成
cx test unit --file utils.js --framework jest

# 統合テスト生成
cx test integration --file api.js --framework mocha

# E2Eテスト生成
cx test e2e --file app.js --framework cypress
```

### Codex CLIワークフロー自動化

```yaml
# .github/workflows/codex-review.yml
name: Codex Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Codex CLI
        run: |
          npm install -g @openai/codex-cli
          echo "OPENAI_API_KEY=${{ secrets.OPENAI_API_KEY }}" >> $GITHUB_ENV
      
      - name: Code Review
        run: |
          # 変更されたファイルを取得
          files=$(git diff --name-only HEAD^ HEAD)
          
          for file in $files; do
            if [[ $file == *.js || $file == *.ts || $file == *.py ]]; then
              echo "Reviewing: $file"
              cx review --file "$file" >> review.md
            fi
          done
      
      - name: Post Review Comment
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const review = fs.readFileSync('review.md', 'utf8');
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: review
            });
```

---

## 💎 第3章: Gemini × Codex 連携技

### 最強の組み合わせパターン

```bash
#!/bin/bash
# super_ai_dev.sh

function ai_develop() {
  local requirement="$1"
  
  # 1. Geminiで要件分析
  echo "📋 要件分析中..."
  spec=$(echo "$requirement" | gemini "
    詳細な技術仕様を作成:
    - 機能要件
    - 非機能要件
    - 技術スタック提案
    - アーキテクチャ設計
  ")
  
  # 2. Codexでコード生成
  echo "💻 コード生成中..."
  echo "$spec" | cx generate --verbose > implementation.js
  
  # 3. Geminiでレビュー
  echo "🔍 コードレビュー中..."
  review=$(gemini -f implementation.js "
    コードレビュー:
    - バグの可能性
    - パフォーマンス問題
    - セキュリティリスク
    - ベストプラクティス違反
  ")
  
  # 4. Codexで修正
  if [[ $review == *"問題あり"* ]]; then
    echo "🔧 修正中..."
    echo "$review" | cx fix --file implementation.js --output implementation_fixed.js
  fi
  
  # 5. テスト生成
  echo "🧪 テスト作成中..."
  cx test --file implementation_fixed.js --coverage 80
  
  echo "✅ 開発完了！"
}

# 使用例
ai_develop "リアルタイムチャットアプリをWebSocketで実装"
```

### パフォーマンス比較

| タスク | Gemini CLI | Codex CLI | 組み合わせ |
|--------|-----------|-----------|------------|
| **要件分析** | ◎ | ○ | Gemini |
| **コード生成** | ○ | ◎ | Codex |
| **バグ修正** | ○ | ◎ | Codex |
| **ドキュメント** | ◎ | ○ | Gemini |
| **最適化** | ○ | ◎ | Codex |
| **レビュー** | ◎ | ○ | Gemini |

---

## 🚀 第4章: 実践プロジェクト集

### プロジェクト1: AIコードレビューボット

```python
#!/usr/bin/env python3
# ai_review_bot.py

import subprocess
import sys
import json
from pathlib import Path

class AIReviewBot:
    def __init__(self):
        self.gemini = "gemini"
        self.codex = "cx"
    
    def review_file(self, filepath):
        """ファイルを多角的にレビュー"""
        
        with open(filepath, 'r') as f:
            code = f.read()
        
        reviews = {}
        
        # Geminiでロジックレビュー
        reviews['logic'] = subprocess.run(
            [self.gemini],
            input=f"このコードのロジックをレビュー:\n{code}",
            capture_output=True,
            text=True
        ).stdout
        
        # Codexでコード品質チェック
        reviews['quality'] = subprocess.run(
            [self.codex, "review", "--file", filepath],
            capture_output=True,
            text=True
        ).stdout
        
        # セキュリティ監査
        reviews['security'] = subprocess.run(
            [self.codex, "audit", "security", "--file", filepath],
            capture_output=True,
            text=True
        ).stdout
        
        # パフォーマンス分析
        reviews['performance'] = subprocess.run(
            [self.gemini],
            input=f"パフォーマンスの観点からレビュー:\n{code}",
            capture_output=True,
            text=True
        ).stdout
        
        return reviews
    
    def generate_report(self, reviews):
        """レビュー結果をマークダウンレポート化"""
        
        report = "# AI Code Review Report\n\n"
        
        for category, content in reviews.items():
            report += f"## {category.title()}\n\n"
            report += content + "\n\n"
        
        # 総合評価を生成
        all_reviews = json.dumps(reviews)
        summary = subprocess.run(
            [self.gemini],
            input=f"以下のレビューから総合評価を生成:\n{all_reviews}",
            capture_output=True,
            text=True
        ).stdout
        
        report += f"## 総合評価\n\n{summary}"
        
        return report
    
    def suggest_fixes(self, filepath, reviews):
        """修正案を生成"""
        
        fixes = subprocess.run(
            [self.codex, "fix", "--file", filepath, "--issues", json.dumps(reviews)],
            capture_output=True,
            text=True
        ).stdout
        
        return fixes

# 実行
if __name__ == "__main__":
    bot = AIReviewBot()
    
    filepath = sys.argv[1] if len(sys.argv) > 1 else "main.py"
    
    print("🔍 レビュー開始...")
    reviews = bot.review_file(filepath)
    
    print("📝 レポート生成...")
    report = bot.generate_report(reviews)
    
    with open("review_report.md", "w") as f:
        f.write(report)
    
    print("🔧 修正案生成...")
    fixes = bot.suggest_fixes(filepath, reviews)
    
    with open(f"{filepath}.fixed", "w") as f:
        f.write(fixes)
    
    print("✅ 完了！review_report.mdを確認してください")
```

### プロジェクト2: 自動リファクタリングツール

```bash
#!/bin/bash
# auto_refactor.sh

function smart_refactor() {
  local target_dir="$1"
  local output_dir="${2:-refactored}"
  
  mkdir -p "$output_dir"
  
  # 全ファイルをスキャン
  find "$target_dir" -type f \( -name "*.js" -o -name "*.ts" -o -name "*.py" \) | while read file; do
    echo "Processing: $file"
    
    # 1. コード分析
    analysis=$(gemini -f "$file" "
      このコードの問題点を分析:
      - 重複コード
      - 長すぎる関数
      - 複雑すぎるロジック
      - 命名規則違反
    ")
    
    # 2. リファクタリング計画
    plan=$(echo "$analysis" | gemini "
      リファクタリング計画を作成:
      - 優先順位付き
      - 段階的な改善
      - リスク評価
    ")
    
    # 3. 実際のリファクタリング
    refactored=$(echo "$plan" | cx refactor --file "$file" --aggressive)
    
    # 4. テスト生成
    tests=$(cx test --code "$refactored" --coverage 90)
    
    # 5. 最終レビュー
    final_review=$(echo "$refactored" | gemini "
      リファクタリング後のコードをレビュー:
      - 機能が保持されているか
      - 可読性が向上したか
      - パフォーマンスへの影響
    ")
    
    # 出力
    output_file="$output_dir/$(basename $file)"
    echo "$refactored" > "$output_file"
    echo "$tests" > "${output_file}.test"
    echo "$final_review" > "${output_file}.review"
  done
  
  echo "✅ リファクタリング完了"
  echo "📁 結果: $output_dir"
}

# 使用例
smart_refactor "./legacy_code" "./modernized_code"
```

---

## 📊 第5章: パフォーマンス最適化

### CLI最適化テクニック

```bash
# 1. 並列処理で高速化
parallel -j 4 gemini "処理 {}" ::: file1.js file2.js file3.js file4.js

# 2. キャッシュ活用
cx --cache-dir ~/.cx_cache generate "同じプロンプト"

# 3. ストリーミング処理
gemini --stream "長文生成" | head -n 100

# 4. バッチ処理
cat prompts.txt | xargs -I {} -P 4 gemini "{}"
```

### レスポンス時間比較

```javascript
const performanceMetrics = {
  simple_query: {
    gemini_cli: "0.8秒",
    codex_cli: "1.2秒",
    web_ui: "3-5秒"
  },
  code_generation: {
    gemini_cli: "2.1秒",
    codex_cli: "1.5秒",
    web_ui: "5-8秒"
  },
  batch_10_files: {
    cli_parallel: "5秒",
    cli_sequential: "15秒",
    web_ui_manual: "5分以上"
  }
};
```

---

## 💰 第6章: ビジネス活用事例

### 収益化モデル

#### 1. CLI自動化サービス
```javascript
const businessModel = {
  サービス名: "AI Dev Automation",
  
  価格プラン: {
    starter: {
      価格: 5000,
      内容: "基本的な自動化スクリプト5本"
    },
    pro: {
      価格: 30000,
      内容: "カスタム自動化無制限"
    },
    enterprise: {
      価格: 100000,
      内容: "専用CLI環境構築"
    }
  },
  
  提供物: [
    "カスタムCLIツール",
    "自動化スクリプト",
    "CI/CD統合",
    "24/7サポート"
  ],
  
  想定収益: "月300万円"
};
```

#### 2. AIレビューサービス
```bash
#!/bin/bash
# review_service.sh

function premium_review() {
  local repo_url="$1"
  local client_email="$2"
  
  # リポジトリクローン
  git clone "$repo_url" temp_repo
  cd temp_repo
  
  # 全体分析
  gemini "プロジェクト全体のアーキテクチャレビュー" > architecture_review.md
  
  # 個別ファイルレビュー
  find . -name "*.js" -o -name "*.py" | while read file; do
    cx review --file "$file" >> detailed_review.md
  done
  
  # セキュリティ監査
  cx audit security --recursive >> security_audit.md
  
  # レポート生成
  gemini "プロのレビューレポートとして整形" < detailed_review.md > final_report.pdf
  
  # メール送信
  mail -s "AIコードレビュー完了" "$client_email" < final_report.pdf
  
  # クリーンアップ
  cd ..
  rm -rf temp_repo
}
```

---

## 🎯 第7章: トラブルシューティング

### よくある問題と解決策

```javascript
const troubleshooting = {
  "API制限エラー": {
    症状: "Rate limit exceeded",
    原因: "リクエスト数超過",
    解決策: [
      "sleep 1 を挟む",
      "並列数を減らす",
      "有料プランにアップグレード"
    ],
    コード: `
      for file in *.js; do
        gemini -f "$file" "レビュー"
        sleep 1  # レート制限回避
      done
    `
  },
  
  "文字化け": {
    症状: "日本語が表示されない",
    原因: "エンコーディング",
    解決策: "export LANG=ja_JP.UTF-8"
  },
  
  "パイプが動かない": {
    症状: "パイプで渡せない",
    原因: "バッファリング",
    解決策: "unbuffer コマンドを使用"
  }
};
```

---

## 🚀 実装サンプル集

### 1. Git Hook統合
```bash
# .git/hooks/pre-commit
#!/bin/bash

# コミット前に自動レビュー
files=$(git diff --cached --name-only)

for file in $files; do
  if [[ $file == *.js ]]; then
    review=$(cx review --file "$file" --quick)
    if [[ $review == *"Critical"* ]]; then
      echo "❌ Critical issue found in $file"
      echo "$review"
      exit 1
    fi
  fi
done

echo "✅ All checks passed"
```

### 2. VSCode統合
```json
// .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "AI Review Current File",
      "type": "shell",
      "command": "gemini -f ${file} 'コードレビュー' | code -",
      "problemMatcher": []
    },
    {
      "label": "Generate Tests",
      "type": "shell", 
      "command": "cx test --file ${file} > ${fileDirname}/${fileBasenameNoExtension}.test.js",
      "problemMatcher": []
    }
  ]
}
```

---

## 📚 チートシート

### Gemini CLI
```bash
# 基本
gemini "質問"                    # シンプルな質問
gemini -f file.txt "分析"        # ファイル入力
gemini -i image.png "説明"       # 画像入力
gemini --json "JSON生成"         # JSON出力
gemini --stream "長文"           # ストリーミング

# 応用
cat data.csv | gemini "分析"     # パイプ入力
gemini --model gemini-ultra      # モデル指定
gemini --temperature 0.9         # 創造性調整
gemini --max-tokens 4000         # 出力長制限
```

### Codex CLI
```bash
# 基本
cx generate "要件"               # コード生成
cx fix --file bug.js            # バグ修正
cx review --file code.js        # レビュー
cx test --file func.js          # テスト生成
cx explain --file complex.js    # コード説明

# 応用
cx refactor --file old.js       # リファクタリング
cx optimize --file slow.js      # 最適化
cx translate --from py --to js  # 言語変換
cx document --file api.js       # ドキュメント生成
```

---

*最終更新: 2025年1月*
*バージョン: 1.0*

**CLI×AIで開発革命を起こそう！**