# 【特典】トラブルシューティング完全ガイド
## AI組織運用システムのよくある問題と解決策

---

## 🔍 目次

1. [インストール・起動問題](#インストール起動問題)
2. [エージェント関連問題](#エージェント関連問題)
3. [コマンド実行問題](#コマンド実行問題)
4. [Hooks・自動化問題](#hooks自動化問題)
5. [パフォーマンス問題](#パフォーマンス問題)
6. [権限・認証問題](#権限認証問題)
7. [ファイル・ディレクトリ問題](#ファイルディレクトリ問題)

---

## 🚨 インストール・起動問題

### Q1: Claude Codeがインストールできない

**症状:**
```bash
npm install -g @anthropic-ai/claude-code
# エラー: Permission denied
```

**解決策:**

<details>
<summary>Mac/Linux の場合</summary>

```bash
# 方法1: sudoを使用
sudo npm install -g @anthropic-ai/claude-code

# 方法2: nvm使用（推奨）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
npm install -g @anthropic-ai/claude-code
```
</details>

<details>
<summary>Windows の場合</summary>

```bash
# PowerShell を管理者権限で実行
npm install -g @anthropic-ai/claude-code

# WSL2での問題
npm config set os linux
npm install -g @anthropic-ai/claude-code --force --no-os-check
```
</details>

### Q2: Claude Codeが起動しない

**症状:**
```bash
claude
# command not found: claude
```

**解決策:**

```bash
# 1. インストール確認
npm list -g @anthropic-ai/claude-code

# 2. PATH確認
echo $PATH
# npmのbinディレクトリが含まれているか確認

# 3. npm設定確認
npm config get prefix

# 4. 手動PATH追加（~/.bashrc or ~/.zshrc）
export PATH="$(npm config get prefix)/bin:$PATH"
source ~/.bashrc  # または source ~/.zshrc

# 5. 再インストール
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code
```

### Q3: 認証エラーが発生する

**症状:**
```bash
claude
# Error: Authentication failed
```

**解決策:**

```bash
# 1. 認証情報クリア
rm -rf ~/.claude/auth
rm -rf ~/.claude/session

# 2. ブラウザキャッシュクリア
# Chrome: Ctrl+Shift+Delete
# Firefox: Ctrl+Shift+Delete

# 3. Claude Code再起動
claude

# 4. プラン確認
# Claude.aiにアクセスして、Pro以上のプランか確認

# 5. 異なるブラウザで試す
# Safari, Firefox, Edge など
```

---

## 🤖 エージェント関連問題

### Q4: エージェントが認識されない

**症状:**
```bash
"@ceo で戦略を立てて"
# Error: Agent 'ceo' not found
```

**診断コマンド:**
```bash
# 1. ファイル存在確認
ls -la .claude/agents/

# 2. ファイル内容確認
head -10 .claude/agents/ceo.md

# 3. 権限確認
ls -la .claude/agents/ceo.md
```

**解決策:**

<details>
<summary>ファイル形式の問題</summary>

```bash
# 1. YAMLフロントマター確認
cat .claude/agents/ceo.md | head -10
# 以下の形式になっているか確認:
---
name: ceo
description: ...
---

# 2. ファイル拡張子確認
# .mdファイルである必要がある
mv .claude/agents/ceo.txt .claude/agents/ceo.md
```
</details>

<details>
<summary>権限の問題</summary>

```bash
# 読み取り権限付与
chmod 644 .claude/agents/*.md

# ディレクトリ権限確認
chmod 755 .claude/agents/
```
</details>

<details>
<summary>Claude Code再読み込み</summary>

```bash
# Claude Code終了
exit

# 再起動
claude

# エージェント一覧確認
/agents
```
</details>

### Q5: エージェントの応答が期待と違う

**症状:**
エージェントが想定外の応答をする

**解決策:**

```bash
# 1. エージェント定義見直し
cat .claude/agents/ceo.md

# 2. descriptionフィールド改善
---
name: ceo
description: 組織戦略立案と最終意思決定を行う。"戦略"、"ビジョン"、"投資判断"のキーワードで自動起動
color: purple
tools: Task, TodoWrite, WebSearch
---

# 3. より具体的な指示
"@ceo で今四半期のOKRを策定して。売上目標、顧客満足度、市場シェアを含めて"
```

### Q6: エージェント間の連携がうまくいかない

**症状:**
複数エージェントでのタスクが連携しない

**解決策:**

```bash
# 1. 明示的な指示
"@cto でアーキテクチャを設計して、その後@engineering-manager で実装計画を作成"

# 2. 段階的実行
# Step 1
"@cto で技術選定をお願いします"
# 完了確認後
# Step 2
"@engineering-manager で@ctoの技術選定を基に実装計画を作成"

# 3. CLAUDE.mdで連携ルール定義
## エージェント連携ルール
- 技術決定: CTO → Engineering Manager
- 要件定義: Product Manager → Engineering Manager
- セキュリティ: Security Officer → CTO
```

---

## ⌨️ コマンド実行問題

### Q7: カスタムコマンドが認識されない

**症状:**
```bash
/task-split "新機能"
# Command not found
```

**診断:**
```bash
# 1. ファイル存在確認
ls -la .claude/commands/

# 2. ファイル内容確認
cat .claude/commands/task-split.md

# 3. 命名規則確認
# ファイル名: task-split.md
# コマンド名: /task-split
```

**解決策:**

```bash
# 1. ファイル名とコマンド名の一致確認
# .claude/commands/task-split.md → /task-split

# 2. マークダウン形式確認
cat .claude/commands/task-split.md
# 先頭行が # で始まっているか確認

# 3. Claude Code再起動
exit
claude

# 4. コマンド一覧確認
/help
```

### Q8: コマンド実行でエラーが発生

**症状:**
```bash
/progress-dashboard
# Error: Cannot access docs/tasks/
```

**解決策:**

```bash
# 1. 必要ディレクトリ作成
mkdir -p docs/tasks

# 2. サンプルタスク作成
cat > docs/tasks/001_sample.md << 'EOF'
# 001_サンプルタスク
## Todo
- [ ] 設計
- [ ] 実装
- [ ] テスト
EOF

# 3. 権限確認
chmod 755 docs/
chmod 755 docs/tasks/
chmod 644 docs/tasks/*.md

# 4. パス確認
pwd
ls -la docs/tasks/
```

---

## 🔗 Hooks・自動化問題

### Q9: Hooksが動作しない

**症状:**
```bash
claude hooks list
# No hooks configured
```

**解決策:**

```bash
# 1. Hooks手動設定
claude hooks add pre-commit "echo 'テスト実行中'"

# 2. Hooks一覧確認
claude hooks list

# 3. 設定ファイル確認
ls -la .claude/hooks/

# 4. Hooks実行テスト
# コミット実行でhookが動作するか確認
git add .
git commit -m "test"

# 5. デバッグモード
claude hooks debug pre-commit
```

### Q10: 自動化が期待通りに動作しない

**症状:**
Daily Standupが自動生成されない

**診断:**
```bash
# 1. Hook設定確認
claude hooks list | grep daily

# 2. ログ確認
claude hooks logs daily

# 3. 手動実行テスト
claude hooks run daily
```

**解決策:**

```bash
# 1. Hook再設定
claude hooks remove daily
claude hooks add daily "
echo '📊 Daily Standup 生成中...'
claude '@engineering-manager でDaily Standup作成'
"

# 2. 実行権限確認
chmod +x .claude/hooks/*

# 3. スケジュール設定（cronの場合）
crontab -e
# 0 9 * * * cd /path/to/project && claude hooks run daily
```

---

## 🚀 パフォーマンス問題

### Q11: Claude Codeの応答が遅い

**症状:**
エージェントの応答に5分以上かかる

**解決策:**

```bash
# 1. トークン使用量確認
/cost

# 2. 会話履歴クリア
/clear

# 3. 短いプロンプトに分割
# 悪い例:
"@engineering-manager でプロジェクト全体の計画を立てて、技術選定も含めて、テスト戦略も..."

# 良い例:
"@engineering-manager で2週間スプリントの計画を立てて"

# 4. ファイルサイズ確認
du -sh .claude/

# 5. 不要ファイル削除
rm .claude/chat/old-conversations-*.md
```

### Q12: メモリ使用量が多い

**症状:**
システムメモリ使用率が90%を超える

**解決策:**

```bash
# 1. プロセス確認
ps aux | grep claude
top -p $(pgrep claude)

# 2. ログファイルサイズ確認
du -sh .claude/logs/

# 3. ログローテーション設定
# .claude/settings.json
{
  "log_max_size": "100MB",
  "log_max_files": 5
}

# 4. エージェント数の調整
# 使用頻度の低いエージェントを一時的に無効化
mv .claude/agents/unused-agent.md .claude/agents/unused-agent.md.disabled
```

---

## 🔒 権限・認証問題

### Q13: ファイルアクセス権限エラー

**症状:**
```bash
Error: Permission denied writing to .claude/agents/
```

**解決策:**

```bash
# 1. 所有者確認
ls -la .claude/

# 2. 所有者変更（必要に応じて）
sudo chown -R $USER:$USER .claude/

# 3. 権限設定
chmod -R 755 .claude/
chmod -R 644 .claude/**/*.md

# 4. SELinux確認（Linuxの場合）
setenforce 0  # 一時的に無効化
```

### Q14: GitHub連携での権限問題

**症状:**
```bash
git push
# Permission denied (publickey)
```

**解決策:**

```bash
# 1. SSH鍵確認
ls -la ~/.ssh/

# 2. SSH鍵生成（必要に応じて）
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# 3. SSH鍵をGitHubに追加
cat ~/.ssh/id_rsa.pub
# GitHub Settings > SSH and GPG keys で追加

# 4. SSH接続テスト
ssh -T git@github.com
```

---

## 📂 ファイル・ディレクトリ問題

### Q15: 設定ファイルが見つからない

**症状:**
```bash
Error: .claude/settings.json not found
```

**解決策:**

```bash
# 1. 設定ファイル作成
cat > .claude/settings.json << 'EOF'
{
  "model": "claude-3-sonnet",
  "max_tokens": 4000,
  "temperature": 0.7,
  "auto_save": true,
  "log_level": "info"
}
EOF

# 2. バックアップから復元
cp .claude/settings.json.backup .claude/settings.json

# 3. デフォルト設定で初期化
claude init --reset-settings
```

### Q16: タスクファイルが破損している

**症状:**
```bash
/progress-dashboard
# Error: Invalid markdown in 001_task.md
```

**解決策:**

```bash
# 1. ファイル内容確認
cat docs/tasks/001_task.md

# 2. マークダウン文法チェック
# オンラインツール: https://markdownlint.github.io/

# 3. テンプレートで修復
cat > docs/tasks/001_fixed.md << 'EOF'
# 001_修復済みタスク

## 概要
タスクの概要

## Todo
- [ ] 設計
- [ ] 実装
- [ ] テスト

## 担当: Engineering Manager
## 優先度: P2
EOF

# 4. バックアップから復元
cp docs/tasks/.backup/001_task.md docs/tasks/001_task.md
```

---

## 🔧 高度なトラブルシューティング

### デバッグモードの有効化

```bash
# 1. 環境変数設定
export CLAUDE_DEBUG=true
export CLAUDE_LOG_LEVEL=debug

# 2. ログファイル確認
tail -f .claude/logs/debug.log

# 3. ネットワーク接続確認
curl -I https://api.anthropic.com/v1/ping
```

### システム情報の収集

```bash
# 診断スクリプト作成
cat > diagnose.sh << 'EOF'
#!/bin/bash
echo "=== システム診断 ==="
echo "OS: $(uname -a)"
echo "Node.js: $(node -v)"
echo "npm: $(npm -v)"
echo "Claude Code: $(claude --version 2>/dev/null || echo 'Not installed')"
echo "Working Directory: $(pwd)"
echo "Disk Space: $(df -h .)"
echo "Memory: $(free -h 2>/dev/null || vm_stat)"
echo "=== Claude 設定 ==="
echo "Agents: $(ls .claude/agents/*.md 2>/dev/null | wc -l)"
echo "Commands: $(ls .claude/commands/*.md 2>/dev/null | wc -l)"
echo "Tasks: $(ls docs/tasks/*.md 2>/dev/null | wc -l)"
echo "=== 権限確認 ==="
ls -la .claude/ | head -10
echo "===================="
EOF

chmod +x diagnose.sh
./diagnose.sh
```

---

## 📞 サポート・エスカレーション

### レベル1: 自己解決
1. 本ガイドの該当セクション確認
2. Claude Code公式ドキュメント確認
3. 再起動・再インストールの実施

### レベル2: コミュニティサポート
1. GitHub Issues検索
2. Stack Overflow検索
3. Discord/Slackコミュニティ質問

### レベル3: 公式サポート
1. Claude Code公式サポート問い合わせ
2. システム診断結果の添付
3. 再現手順の詳細記述

---

## 📝 よくある質問 FAQ

<details>
<summary>Q: ProプランからMaxプランへのアップグレード方法は？</summary>

A: Claude.ai > Settings > Billing > プランを変更
アップグレード後、Claude Code再起動が必要です。
</details>

<details>
<summary>Q: エージェントの応答言語を英語に変更したい</summary>

A: エージェント定義ファイルに以下を追加：
```yaml
language: en
response_format: english
```
</details>

<details>
<summary>Q: 複数プロジェクトでエージェントを共有したい</summary>

A: グローバル設定を使用：
```bash
# グローバルエージェント配置
cp -r project1/.claude/agents/* ~/.claude/agents/
```
</details>

<details>
<summary>Q: チーム開発時の設定共有方法は？</summary>

A: Git管理対象に含める：
```bash
# .gitignore
.claude/logs/
.claude/auth/
# .claude/agents/ は管理対象
# .claude/commands/ は管理対象
```
</details>

---

## 🛠️ 定期メンテナンス

### 日次メンテナンス
```bash
# ログファイルサイズ確認
du -sh .claude/logs/

# 一時ファイル削除
rm -f .claude/tmp/*

# バックアップ作成
cp -r .claude/agents .claude/agents.backup.$(date +%Y%m%d)
```

### 週次メンテナンス
```bash
# 古いログ削除
find .claude/logs/ -name "*.log" -mtime +7 -delete

# 設定ファイル検証
claude validate-config

# パフォーマンス確認
claude performance-check
```

### 月次メンテナンス
```bash
# 全体バックアップ
tar -czf claude-backup-$(date +%Y%m).tar.gz .claude/

# 不要ファイル削除
claude cleanup --aggressive

# 設定最適化
claude optimize-config
```

---

*問題解決に役立つ包括的なガイド*
*最終更新: 2025年1月11日*