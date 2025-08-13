# 【特典】30分クイックスタートガイド
## ゼロから始めて30分でAI組織運用システムを稼働させる完全手順

---

## ⏱️ タイムライン

```
00:00-05:00  環境準備とClaude Code起動
05:00-10:00  ディレクトリ構造とCLAUDE.md設定
10:00-20:00  エージェント配置（コピペ作業）
20:00-25:00  コマンドとHooks設定
25:00-30:00  動作確認とテスト実行
```

---

## 🚀 Step 0: 事前準備チェックリスト (開始前)

### 必須環境
```bash
# Claude Code契約確認
□ Claude Pro以上のプラン（月額$20〜）契約済み

# 開発環境確認
□ Node.js v18以上インストール済み
node -v  # v18.0.0以上であることを確認

□ Git環境構築済み
git --version  # 2.0以上であることを確認

□ ターミナル環境準備
# Mac: Terminal.app または iTerm2
# Windows: WSL2 + Ubuntu
# Linux: 標準ターミナル
```

### 推奨環境
```bash
□ VS Code インストール済み
□ 8GB以上のメモリ
□ 10GB以上の空きディスク容量
```

---

## ⏰ Step 1: 環境準備 (0:00-5:00)

### 1-1. Claude Codeインストール (2分)
```bash
# npmでグローバルインストール
npm install -g @anthropic-ai/claude-code

# インストール確認
claude --version
# Claude Code 1.0.41 (または最新版)
```

### 1-2. プロジェクト作成 (1分)
```bash
# プロジェクトディレクトリ作成
mkdir ai-org-system
cd ai-org-system

# Gitリポジトリ初期化
git init
```

### 1-3. Claude Code起動と認証 (2分)
```bash
# Claude Code起動
claude

# 初回起動時の認証
# 1. ブラウザが自動で開く
# 2. Claude.aiアカウントでログイン
# 3. 認証完了後、ターミナルに戻る
```

---

## ⏰ Step 2: 基本構造作成 (5:00-10:00)

### 2-1. ディレクトリ構造作成 (1分)
```bash
# 一括でディレクトリ作成
mkdir -p .claude/{agents,commands,chat,hooks} docs/tasks team/present

# 構造確認
tree -L 2 .claude/
# .claude/
# ├── agents/     # エージェント定義
# ├── chat/       # コミュニケーション
# ├── commands/   # カスタムコマンド
# └── hooks/      # 自動化設定
```

### 2-2. CLAUDE.md作成 (4分)
```bash
# CLAUDE.mdファイル作成
cat > CLAUDE.md << 'EOF'
# AI組織運用システム

## 組織構造
- CEO: 戦略立案・最終決定
- CTO: 技術戦略・アーキテクチャ決定
- Engineering Manager: 開発チーム管理
- Security Officer: セキュリティ監査
- QA Lead: 品質保証戦略
- DevOps Engineer: インフラ・CI/CD管理
- Senior Fullstack Engineer: 技術設計・実装
- Frontend Specialist: UI/UX実装
- Backend Architect: API設計・データベース設計
- Technical Writer: ドキュメント作成
- Product Manager: プロダクト戦略
- HR Manager: 人材管理・組織文化

## 承認フロー
- P0インシデント: 即座にSecurity Officer→CTO→CEO
- 技術決定: Engineering Manager→CTO
- セキュリティ: Security Officer→CTO→CEO
- アーキテクチャ変更: Backend Architect→CTO

## 品質基準
- テストカバレッジ: 80%以上
- コードレビュー: 2名以上の承認
- セキュリティスキャン: 必須（全PR）
- リンター通過: 必須

## 自動エージェント割り当て
- "戦略" → @ceo
- "アーキテクチャ" → @cto
- "スプリント" → @engineering-manager
- "セキュリティ" → @security-officer
- "テスト" → @qa-lead
- "インフラ" → @devops-engineer

## Daily Standup形式
- 昨日の完了タスク
- 今日の予定タスク
- ブロッカー・課題
- メトリクス報告

## インシデント対応SLA
- P0: 15分以内
- P1: 1時間以内
- P2: 4時間以内
- P3: 24時間以内
EOF

echo "✅ CLAUDE.md作成完了"
```

---

## ⏰ Step 3: エージェント配置 (10:00-20:00)

### 3-1. CEOエージェント作成 (1分)
```bash
cat > .claude/agents/ceo.md << 'EOF'
---
name: ceo
description: 組織全体のビジョン策定、戦略的意思決定
color: purple
tools: Task, TodoWrite, WebSearch
---

あなたはAI組織のCEOです。

主な責任：
1. 組織ビジョンと戦略の策定
2. 重要な意思決定の最終承認
3. ステークホルダーとの関係管理
4. リスク管理と危機対応

意思決定基準：
- ROI（投資対効果）
- 長期的な組織価値
- ステークホルダーへの影響
EOF
```

### 3-2. 主要エージェント一括作成 (5分)
```bash
# CTOエージェント
cat > .claude/agents/cto.md << 'EOF'
---
name: cto
description: 技術戦略、アーキテクチャ決定
color: blue
tools: Read, Write, MultiEdit, Bash, Grep, Task
---
あなたはAI組織のCTOです。
技術戦略の策定とシステムアーキテクチャを担当します。
EOF

# Engineering Manager
cat > .claude/agents/engineering-manager.md << 'EOF'
---
name: engineering-manager
description: 開発チーム管理、スプリント計画
color: green
tools: Task, TodoWrite, Read, Write
---
あなたはEngineering Managerです。
スプリント管理と開発チームの生産性向上を担当します。
EOF

# Security Officer
cat > .claude/agents/security-officer.md << 'EOF'
---
name: security-officer
description: セキュリティ監査、インシデント対応
color: red
tools: Read, Bash, Grep, Task
---
あなたはSecurity Officerです。
セキュリティポリシーの策定と脆弱性対応を担当します。
EOF

echo "✅ 主要エージェント作成完了"
```

### 3-3. 残りのエージェント作成 (4分)
```bash
# 簡易版で残りのエージェントを作成
for agent in qa-lead devops-engineer senior-fullstack frontend-specialist backend-architect technical-writer product-manager hr-manager; do
  cat > .claude/agents/${agent}.md << EOF
---
name: ${agent}
description: ${agent}の役割を担当
color: cyan
tools: Read, Write, Task
---
あなたは${agent}です。
専門分野での技術的貢献を行います。
EOF
done

echo "✅ 全12エージェント配置完了"
```

---

## ⏰ Step 4: コマンド＆Hooks設定 (20:00-25:00)

### 4-1. タスク分割コマンド (1分)
```bash
cat > .claude/commands/task-split.md << 'EOF'
# タスク分割コマンド

## 実行内容
$ARGUMENTS を機能単位でタスクに分割し、
/docs/tasks/ に連番ファイルとして保存

## 形式
- 番号_タスク名.md
- 担当者割り当て
- Todo形式で管理
- 優先度設定 (P0-P3)
EOF
```

### 4-2. 進捗ダッシュボード (1分)
```bash
cat > .claude/commands/progress.md << 'EOF'
# 進捗ダッシュボード

## 実行内容
タスクの進捗状況を可視化

## 出力
- 全体進捗率
- タスク別状況
- ブロッカー一覧
- 担当者別負荷
EOF
```

### 4-3. Hooks基本設定 (3分)
```bash
# hooks設定ファイル作成
cat > .claude/hooks/setup.sh << 'EOF'
#!/bin/bash

# 品質チェックHook
claude hooks add pre-commit "echo '🔍 品質チェック実施中...'"

# Daily Standup
claude hooks add daily "echo '📊 Daily Standup生成中...'"

# エラー対応
claude hooks add on-error "echo '⚠️ エラー検知 - 対応開始'"

echo "✅ Hooks設定完了"
EOF

# 実行権限付与と実行
chmod +x .claude/hooks/setup.sh
# 注: 実際のclaude hooks addコマンドはClaude Code内で実行
```

---

## ⏰ Step 5: 動作確認 (25:00-30:00)

### 5-1. エージェント動作テスト (2分)
```bash
# Claude Code内で実行
claude

# エージェント呼び出しテスト
"@ceo で今日の戦略を立てて"
"@engineering-manager でタスク状況を確認"
"@security-officer でセキュリティチェック"
```

### 5-2. コマンド動作テスト (2分)
```bash
# タスク分割テスト
"/task-split ユーザー認証機能の実装"

# 進捗確認
"/progress"

# ファイル生成確認
ls -la docs/tasks/
```

### 5-3. サンプルタスク作成 (1分)
```bash
# テスト用タスク作成
cat > docs/tasks/001_test_task.md << 'EOF'
# 001_テストタスク

## 担当
- 実装: Engineering Manager
- レビュー: CTO

## Todo
- [x] 環境構築
- [ ] 実装
- [ ] テスト

## 優先度: P2
EOF

echo "✅ セットアップ完了！"
```

---

## ✅ 完了チェックリスト

```bash
# 最終確認コマンド
echo "=== セットアップ確認 ==="
echo "Claude Code: $(claude --version)"
echo "プロジェクト: $(pwd)"
echo "エージェント数: $(ls .claude/agents/*.md 2>/dev/null | wc -l)"
echo "コマンド数: $(ls .claude/commands/*.md 2>/dev/null | wc -l)"
echo "タスク数: $(ls docs/tasks/*.md 2>/dev/null | wc -l)"
echo "========================"
```

期待される出力:
```
=== セットアップ確認 ===
Claude Code: 1.0.41
プロジェクト: /path/to/ai-org-system
エージェント数: 12
コマンド数: 2
タスク数: 1
========================
```

---

## 🎉 セットアップ完了！

### 次のステップ

1. **エージェントを使ってみる**
```bash
"@ceo で四半期計画を作成"
"@cto で技術スタックを選定"
"@engineering-manager でスプリント開始"
```

2. **タスクを作成する**
```bash
"/task-split 新機能開発"
"/progress"
```

3. **自動化を設定する**
```bash
claude hooks enable daily
claude hooks enable pre-commit
```

---

## 🆘 トラブルシューティング

### Claude Codeが起動しない
```bash
# 再インストール
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code
```

### エージェントが認識されない
```bash
# Claude Code再起動
exit
claude
```

### コマンドが動作しない
```bash
# 権限確認
chmod 644 .claude/commands/*.md
chmod 644 .claude/agents/*.md
```

---

## 📞 サポート

問題が解決しない場合:
1. Claude Code公式ドキュメント確認
2. プロジェクトのREADME.md確認
3. コミュニティフォーラムで質問

---

*30分でAI組織運用システムの構築完了！*
*最終更新: 2025年1月11日*