# 🔧 特典8：トラブルシューティング完全ガイド

## よくある問題と解決法を完全網羅！安心のサポートガイド

AI組織運用で遭遇する可能性のある**全ての問題と解決策**をまとめた、究極のトラブルシューティングガイドです。

## 🚨 緊急度別トラブル対応

### 🔴 Critical（即座に対応）
1. エージェントが全員応答しない
2. 無限ループに入った
3. コストが異常に増加
4. 本番環境を破壊した

### 🟡 Warning（1時間以内）
1. 特定エージェントが応答しない
2. パフォーマンス低下
3. エラー率上昇
4. メモリ使用量増加

### 🟢 Info（計画的対応）
1. 軽微な動作不良
2. ドキュメント不整合
3. UIの表示崩れ
4. 警告メッセージ

---

## 🔴 Critical Issues

### 問題1：エージェントが全員応答しない

#### 症状
```bash
@.claude/agents/ceo.md "状態を教えて"
# → 無反応
```

#### 原因と解決策

**原因1: CLAUDE.mdが破損**
```bash
# 確認
ls -la CLAUDE.md
cat CLAUDE.md | head -20

# 解決
cp CLAUDE.md.backup CLAUDE.md
# または再生成
@command.md
```

**原因2: 設定ファイルエラー**
```bash
# 構文チェック
cat orggen/project.yaml | yaml-lint

# 修正例
vim orggen/project.yaml
# インデントを修正
```

**原因3: Claude Code自体の問題**
```bash
# Claude Code再起動
pkill claude
claude --reset
```

### 問題2：無限ループ発生

#### 症状
```
エージェントが同じタスクを繰り返す
コストが急増
```

#### 緊急停止方法
```bash
# 1. 即座に停止
Ctrl + C

# 2. プロセス強制終了
ps aux | grep claude
kill -9 [PID]

# 3. タスクキューをクリア
echo "" > .claude/chat/team-chat.md
```

#### 根本対策
```javascript
// ループ防止設定を追加
const MAX_ITERATIONS = 10;
let iteration = 0;

function executeTask() {
  if (iteration++ > MAX_ITERATIONS) {
    throw new Error("Max iterations reached");
  }
  // タスク実行
}
```

### 問題3：コスト爆発

#### 症状
```
API costs: $500/day 😱
```

#### 即座の対応
```bash
# 1. 全エージェント停止
@.claude/agents/ceo.md "EMERGENCY STOP ALL OPERATIONS"

# 2. コスト上限設定
export DAILY_COST_LIMIT=10.00
export COST_ALERT_THRESHOLD=8.00

# 3. 原因調査
cat .claude/logs/api-calls.log | grep o3
# O3の呼び出しが多すぎる場合
```

#### 恒久対策
```yaml
# .claude/mcp/mcp-services-config.json
"rateLimits": {
  "requestsPerMinute": 5,  # 10 → 5に削減
  "requestsPerDay": 50,     # 100 → 50に削減
  "maxCostPerDay": 5.00     # 10 → 5に削減
}
```

---

## 🟡 Warning Issues

### 問題4：特定エージェントが応答しない

#### 診断フロー
```bash
# 1. ステータス確認
grep "status" .claude/agents/backend-architect.md

# 2. 最後の活動確認
tail -50 .claude/chat/team-chat.md | grep backend-architect

# 3. エラーログ確認
grep ERROR .claude/logs/* | grep backend-architect
```

#### 解決策
```bash
# エージェントをリセット
cp .claude/agents/backend-architect.md.template .claude/agents/backend-architect.md

# または個別に再起動
@.claude/agents/backend-architect.md "システムチェックを実行"
```

### 問題5：パフォーマンス劣化

#### 症状
```
レスポンス時間: 30秒以上
タスク完了: 通常の3倍
```

#### 診断コマンド
```bash
# メモリ使用量確認
free -h
df -h

# プロセス確認
top -p $(pgrep claude)

# キャッシュクリア
rm -rf .claude/cache/*
```

#### 最適化
```javascript
// キャッシュ設定
const cacheConfig = {
  enabled: true,
  ttl: 3600,
  maxSize: '100MB',
  compression: true
};

// バッチ処理
const batchSize = 5; // 10 → 5に削減
```

---

## 🟢 Info Issues

### 問題6：ドキュメント不整合

#### 症状
```
READMEと実装が異なる
古い情報が残っている
```

#### 自動修正
```bash
# Technical Writerに更新させる
@.claude/agents/technical-writer.md "全ドキュメントを最新化して"

# 差分確認
git diff docs/
```

### 問題7：テスト失敗

#### 診断
```bash
# テスト実行
npm test

# 詳細ログ
npm test -- --verbose

# 特定テストのみ
npm test -- --grep "authentication"
```

#### 修正
```bash
# QA Leadに修正させる
@.claude/agents/qa-lead.md "失敗しているテストを修正して"
```

---

## 🛠️ 予防保守

### 日次チェックリスト
```markdown
- [ ] ダッシュボード確認
- [ ] エラーログ確認
- [ ] コスト確認
- [ ] バックアップ実行
- [ ] セキュリティスキャン
```

### 週次メンテナンス
```bash
# 1. キャッシュクリア
rm -rf .claude/cache/*

# 2. ログローテーション
mv .claude/logs/*.log .claude/logs/archive/

# 3. 依存関係更新
npm update
npm audit fix

# 4. 設定見直し
@.claude/agents/cto.md "システム設定を最適化して"
```

---

## 💊 クイックフィックス集

### コピペで解決！頻出問題の即効薬

```bash
# エージェントリセット
for agent in .claude/agents/*.md; do
  cp "${agent}.backup" "$agent"
done

# チャット履歴クリア
> .claude/chat/team-chat.md
echo "# Team Chat - $(date)" > .claude/chat/team-chat.md

# 緊急停止
pkill -f claude
rm -f .claude/locks/*

# コスト確認
echo "Today's cost: $(grep cost .claude/metrics/dashboard.md | awk '{sum+=$2} END {print sum}')"

# ヘルスチェック
curl -s http://localhost:3000/health | jq .
```

---

## 📞 エスカレーションパス

### レベル1：セルフサービス
1. このガイドを確認
2. ログを確認
3. 再起動を試す

### レベル2：AIサポート
```bash
@.claude/agents/cto.md "この問題を診断して: [問題の説明]"
```

### レベル3：コミュニティ
- Discord: #troubleshooting
- GitHub Issues
- Stack Overflow Tag: claude-code-agents

### レベル4：公式サポート
- support@example.com
- 緊急ホットライン（契約者のみ）

---

## 🔍 デバッグツール

### 組み込みデバッガー
```bash
# デバッグモード有効化
export DEBUG=true
export LOG_LEVEL=verbose

# トレース実行
claude --trace @.claude/agents/ceo.md "テスト"

# プロファイリング
claude --profile performance.log
```

### ログ分析ツール
```python
# log_analyzer.py
import json
import sys

def analyze_logs(logfile):
    errors = []
    warnings = []
    
    with open(logfile) as f:
        for line in f:
            if 'ERROR' in line:
                errors.append(json.loads(line))
            elif 'WARN' in line:
                warnings.append(json.loads(line))
    
    print(f"Errors: {len(errors)}")
    print(f"Warnings: {len(warnings)}")
    
    # 最頻出エラー
    from collections import Counter
    error_types = Counter([e.get('type') for e in errors])
    print(f"Top errors: {error_types.most_common(5)}")
```

---

## 📚 リファレンス

### エラーコード一覧
| コード | 意味 | 対処法 |
|--------|------|--------|
| E001 | エージェント初期化失敗 | 設定ファイル確認 |
| E002 | API制限超過 | レート制限調整 |
| E003 | メモリ不足 | リソース追加 |
| E004 | 認証エラー | APIキー確認 |
| E005 | ネットワークエラー | 接続確認 |

### 設定ファイルパス
```
CLAUDE.md                    # メイン設定
.claude/agents/*.md          # エージェント設定
.claude/mcp/*.json          # MCP設定
.env.local                  # 環境変数
orggen/project.yaml         # プロジェクト定義
```

---

## 🎯 黄金のトラブルシューティング手順

1. **落ち着く** - パニックは敵
2. **症状を記録** - スクリーンショット、エラーメッセージ
3. **このガイドを確認** - 90%はここで解決
4. **ログを見る** - `.claude/logs/`
5. **最小構成で試す** - 1エージェントだけで動作確認
6. **バックアップから復元** - 最終手段

---

**このガイドがあれば、どんな問題も解決できます！**