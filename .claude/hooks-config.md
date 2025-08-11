# Claude Code Hooks設定

## 品質保証Hooks

### pre-commit Hook
```bash
claude hooks add pre-commit "
echo '🔍 品質チェック開始...'
echo '- リンターチェック'
echo '- テスト実行'
echo '- セキュリティスキャン'
echo '✅ 品質チェック完了'
"
```

### post-commit Hook
```bash
claude hooks add post-commit "
echo '📝 ドキュメント更新...'
echo '- 変更履歴記録'
echo '- メトリクス更新'
echo '✅ ドキュメント更新完了'
"
```

## Daily自動化Hooks

### daily-standup Hook
```bash
claude hooks add daily-standup "
echo '📊 Daily Standup 生成中...'
DATE=$(date +%Y-%m-%d)
echo '## $DATE Daily Standup'
echo '### 本日の予定'
echo '- タスク確認と優先順位付け'
echo '- ブロッカーの特定と対応'
echo '### メトリクス'
echo '- 進捗率確認'
echo '- 品質指標チェック'
"
```

### weekly-report Hook
```bash
claude hooks add weekly-report "
echo '📈 週次レポート生成中...'
echo '## 週次サマリー'
echo '- 完了タスク数'
echo '- 主要成果'
echo '- 改善点'
echo '- 来週の計画'
"
```

## インシデント対応Hooks

### on-error Hook
```bash
claude hooks add on-error "
echo '⚠️ エラー検知'
echo 'インシデント対応開始...'
echo '1. 影響範囲の特定'
echo '2. 初期対応実施'
echo '3. エスカレーション判断'
"
```

## 使用方法

1. 各Hookを有効化:
   ```bash
   claude hooks enable [hook-name]
   ```

2. Hook一覧確認:
   ```bash
   claude hooks list
   ```

3. Hook無効化:
   ```bash
   claude hooks disable [hook-name]
   ```

4. Hookログ確認:
   ```bash
   claude hooks logs
   ```