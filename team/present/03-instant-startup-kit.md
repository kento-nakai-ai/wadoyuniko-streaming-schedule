# 🚀 特典3：30分で動かすAI組織スタートアップキット

## 最速でAI組織を立ち上げる完全マニュアル

「設定が複雑そう...」という不安を解消！**コピペだけで30分以内に動く**スタートアップキットです。

## ⏱️ タイムライン

```
00:00 - 05:00  ファイルコピー
05:00 - 10:00  初期設定
10:00 - 20:00  最初のタスク実行
20:00 - 30:00  動作確認とカスタマイズ
```

## 📋 ステップ・バイ・ステップ

### Step 1: ファイルコピー（5分）

```bash
# 1. 作業ディレクトリ作成
mkdir my-ai-org
cd my-ai-org

# 2. 特典ファイルをコピー
# (配布されたファイルをここにコピー)
```

### Step 2: Claude Code起動（2分）

```bash
# Claude Codeを起動
claude

# プロジェクトディレクトリを指定
# (my-ai-orgを選択)
```

### Step 3: 組織生成（3分）

```bash
# 魔法のコマンド実行
@command.md
```

**これだけで12名のAIエージェントが生成されます！**

### Step 4: 動作確認（5分）

```bash
# CEOに挨拶させる
@.claude/agents/ceo.md "組織の立ち上げを宣言してください"

# 返答例：
# 「皆さん、本日より新たな組織をスタートします。
#  私たちのミッションは革新的なソフトウェアを通じて
#  世界に価値を提供することです。」
```

### Step 5: 最初のプロジェクト（15分）

```bash
# Todoアプリを作らせてみる
@.claude/agents/product-manager.md "シンプルなTodoアプリを企画してください"
@.claude/agents/backend-architect.md "Next.jsで設計してください"
@.claude/agents/senior-fullstack.md "実装してください"
```

## 🎯 即座に試せる10のタスク

### 1. Hello Worldアプリ
```bash
@.claude/agents/senior-fullstack.md "Hello Worldを表示するWebアプリを作って"
```

### 2. APIエンドポイント作成
```bash
@.claude/agents/backend-architect.md "ユーザー情報を返すREST APIを設計して"
```

### 3. セキュリティチェック
```bash
@.claude/agents/security-officer.md "package.jsonの依存関係をセキュリティ監査して"
```

### 4. ドキュメント生成
```bash
@.claude/agents/technical-writer.md "プロジェクトのREADMEを作成して"
```

### 5. テスト作成
```bash
@.claude/agents/qa-lead.md "作成されたコードのテストケースを書いて"
```

### 6. CI/CD設定
```bash
@.claude/agents/devops-engineer.md "GitHub Actionsの設定ファイルを作って"
```

### 7. コードレビュー
```bash
@.claude/agents/cto.md "実装されたコードをレビューして"
```

### 8. UI改善
```bash
@.claude/agents/frontend-specialist.md "UIをもっと使いやすく改善して"
```

### 9. パフォーマンス最適化
```bash
@.claude/agents/backend-architect.md "APIのパフォーマンスを最適化して"
```

### 10. チーム会議
```bash
@.claude/agents/engineering-manager.md "進捗確認のミーティングを開催して"
```

## 🛠️ トラブルシューティング

### よくある問題と解決法

#### Q: エージェントが応答しない
```bash
# CLAUDE.mdが生成されているか確認
ls -la CLAUDE.md

# 再生成
@command.md
```

#### Q: エラーが出る
```bash
# ログを確認
cat .claude/chat/team-chat.md

# デバッグモードで実行
DEBUG=true @.claude/agents/cto.md "状態を確認して"
```

#### Q: カスタマイズしたい
```bash
# エージェントファイルを編集
vim .claude/agents/ceo.md

# 性格や口癖を変更
# 口癖: "大局観を持って" → "イノベーティブに考えて"
```

## 💡 プロのTips

### Tip 1: 並列実行で高速化
```bash
# 複数エージェントを同時に動かす
@.claude/agents/frontend-specialist.md "UIを作って" &
@.claude/agents/backend-architect.md "APIを作って" &
@.claude/agents/qa-lead.md "テスト計画を作って"
```

### Tip 2: テンプレート活用
```bash
# 反省文テンプレートを使う
cp .claude/templates/reflection-template.md today-reflection.md
@.claude/agents/engineering-manager.md "今日の反省文を記入して"
```

### Tip 3: ダッシュボード監視
```bash
# リアルタイムで状態確認
watch -n 5 'cat .claude/metrics/dashboard.md | head -30'
```

## 📊 期待される成果

30分後にできていること：
- ✅ 12名のAIエージェントが稼働
- ✅ 最初のアプリケーションが完成
- ✅ ドキュメントが自動生成
- ✅ テストコードが作成済み
- ✅ セキュリティチェック完了

## 🎁 ボーナス：ワンライナー集

```bash
# 全エージェントの状態確認
for agent in .claude/agents/*.md; do echo "=== $(basename $agent) ===" && head -20 $agent | grep "状態"; done

# 今日のタスク一覧
grep -h "TODO\|タスク" .claude/chat/*.md | sort | uniq

# コスト計算
grep "cost\|コスト" .claude/metrics/dashboard.md | awk '{sum+=$2} END {print "Total: $"sum}'
```

## 🚦 次のステップ

30分で基本が動いたら：
1. プロジェクト固有の設定を追加
2. 追加エージェントを作成
3. MCP統合でO3を接続
4. Slack/GitHub連携

## 📱 サポート

困ったら：
- クイックヘルプ: `@.claude/agents/cto.md "ヘルプ"`
- 詳細ガイド: README.md参照
- コミュニティ: Discord参加

---

**30分後、あなたは12名のAI開発チームのCEOです！**