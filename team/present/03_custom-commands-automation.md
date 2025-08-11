# 【特典】カスタムコマンド＆自動化設定集
## タスク管理・品質保証・レポート生成を完全自動化する設定ファイル

---

## 📂 ファイル構成

```
.claude/
├── commands/        # カスタムコマンド
│   ├── org-ticket-split.md
│   ├── progress-dashboard.md
│   ├── review-checklist.md
│   ├── daily-standup.md
│   └── weekly-report.md
└── hooks/          # 自動化設定
    └── hooks-config.md
```

---

## 🎯 Part 1: タスク管理コマンド

### 1. タスク分割コマンド (`org-ticket-split.md`)

```markdown
# 組織タスクチケット分割

## 実行内容
$ARGUMENTS の要件を以下の形式で分割：

1. **要件分析**: 要件を機能単位に分解
2. **役職割り当て**: 各タスクに適切な担当者を設定
3. **ファイル生成**: /docs/tasks/ に連番ファイル作成
4. **依存関係設定**: タスク間の依存を明記
5. **承認フロー**: 組織ルールに基づく承認者設定

## チケット形式
\`\`\`markdown
# [番号]_[タスク名]

## 概要
[タスクの目的と背景]

## 担当者
- 実装: [役職/エージェント名]
- レビュー: [役職/エージェント名]
- 承認: [役職/エージェント名]

## Todo
- [ ] 設計書作成
- [ ] 実装
- [ ] テスト作成
- [ ] コードレビュー
- [ ] セキュリティチェック
- [ ] デプロイ

## 依存関係
- 前提: [他タスク番号]
- ブロック: [他タスク番号]

## 期限とSLA
- 開始予定: YYYY-MM-DD
- 完了期限: YYYY-MM-DD
- 優先度: P0/P1/P2/P3

## 受け入れ基準
- [ ] 機能要件を満たす
- [ ] テストカバレッジ80%以上
- [ ] パフォーマンス基準クリア
- [ ] セキュリティ監査パス
\`\`\`

## 実行ルール
- /docs/tasks/ ディレクトリに保存
- ファイル名は連番付き（001_タスク名.md）
- 承認フローは組織憲法に従う
- 優先度設定は以下の基準：
  - P0: システム停止級（即対応）
  - P1: 重要機能（当日中）
  - P2: 通常機能（週内）
  - P3: 改善要望（スプリント内）
```

### 使用例
```bash
/org-ticket-split "ユーザー認証機能の実装"
```

---

### 2. 進捗ダッシュボード (`progress-dashboard.md`)

```markdown
# 進捗ダッシュボード

## 実行内容
1. /docs/tasks/ 内の全チケットをスキャン
2. Todo項目の完了率を計算
3. ガントチャート風の表示
4. ブロッカーの可視化
5. KPIメトリクスの算出

## 出力形式
\`\`\`
📊 プロジェクト進捗ダッシュボード
================================
全体進捗: ████████░░ 75%

タスク別状況:
001: ████████████ 100% ✅ 認証API設計
002: ████████░░░░  66% 🔄 データベース設計
003: ████░░░░░░░░  33% 🔄 フロントエンド実装
004: ░░░░░░░░░░░░   0% ⏳ セキュリティテスト

ブロッカー:
⚠️ 002: データベース接続エラー (Security Officer対応中)
⚠️ 003: API仕様未確定 (Product Manager確認待ち)

今週の完了予定:
- 002_データベース設計 (Engineering Manager)
- 003_フロントエンド実装 (Frontend Specialist)

担当者別タスク:
- Engineering Manager: 3タスク (1完了/2進行中)
- Backend Architect: 2タスク (0完了/2進行中)
- Frontend Specialist: 2タスク (1完了/1進行中)

優先度別:
- P0: 0件 🟢
- P1: 2件 🟡
- P2: 3件 🔵
- P3: 1件 ⚪

スプリント進捗:
Day 5/14 (35.7%)
ベロシティ: 23/40 SP
バーンダウン: On Track ✅
\`\`\`

## KPI算出
- ベロシティ: 完了タスク数/期間
- バーンダウン: 残タスク推移
- リードタイム: 着手→完了時間
- ブロッカー率: ブロック中/全タスク
- 予定達成率: 完了/予定タスク

## 自動アラート
- 遅延タスク → Engineering Manager
- ブロッカー発生 → 関連エージェント
- 優先度P0発生 → CTO + CEO
```

### 使用例
```bash
/progress-dashboard
```

---

## 📋 Part 2: 品質保証コマンド

### 3. コードレビューチェックリスト (`review-checklist.md`)

```markdown
# コードレビューチェックリスト

## 実行内容
PR番号またはファイルパスを受け取り、包括的なレビューチェックリストを生成

## チェック項目

### 🎯 機能要件
- [ ] 要件定義との整合性確認
- [ ] エッジケースの考慮
- [ ] エラーハンドリングの実装
- [ ] ユーザビリティの確認

### 💻 コード品質
- [ ] 可読性（命名規則、コメント）
- [ ] DRY原則の遵守
- [ ] SOLID原則の適用
- [ ] 循環的複雑度 < 10
- [ ] 関数の単一責任
- [ ] 適切な抽象化レベル

### 🔒 セキュリティ
- [ ] 入力検証の実装
- [ ] 認証・認可の適切性
- [ ] SQLインジェクション対策
- [ ] XSS対策
- [ ] CSRF対策
- [ ] シークレット管理
- [ ] ログに機密情報なし

### ⚡ パフォーマンス
- [ ] N+1問題の回避
- [ ] 適切なインデックス設定
- [ ] キャッシュ戦略の実装
- [ ] 非同期処理の活用
- [ ] メモリリークの確認
- [ ] 不要なAPI呼び出しなし

### 🧪 テスト
- [ ] ユニットテスト（カバレッジ80%+）
- [ ] 統合テストの実装
- [ ] E2Eテストの考慮
- [ ] エラーケースのテスト
- [ ] 境界値テスト
- [ ] モックの適切な使用

### 📚 ドキュメント
- [ ] API仕様書の更新
- [ ] README.mdの更新
- [ ] 変更履歴の記録
- [ ] インラインコメントの追加
- [ ] 型定義の完備

## レビュアー署名
- Engineering Manager: [ ] @engineering-manager
- Security Officer: [ ] @security-officer
- QA Lead: [ ] @qa-lead
- 実装者以外のエンジニア: [ ]

## 自動チェック結果
\`\`\`
✅ リンター: PASS
✅ テスト: PASS (Coverage: 85%)
⚠️ セキュリティスキャン: 1 Warning
❌ パフォーマンス: 1 Issue Found
\`\`\`

## 承認条件
- 最低2名の承認
- Security Officer承認（セキュリティ関連変更時）
- テストカバレッジ80%以上
- 全自動チェック合格
```

### 使用例
```bash
/review-checklist PR#123
/review-checklist src/auth/login.ts
```

---

## 📅 Part 3: 定期レポートコマンド

### 4. Daily Standup生成 (`daily-standup.md`)

```markdown
# Daily Standup自動生成

## 実行内容
毎日9:00に自動実行、または手動実行で当日のStandupレポート生成

## 生成プロセス
1. 全エージェントの昨日の活動を集計
2. 本日の予定タスクを収集
3. ブロッカーと課題を特定
4. メトリクスを算出
5. マークダウン形式で出力

## 出力テンプレート
\`\`\`markdown
# Daily Standup - [日付]

## 📅 本日: [YYYY年MM月DD日（曜日）]

## ✅ 昨日完了したタスク
### Engineering Team
- [x] API認証機能実装 (Backend Architect)
- [x] ログイン画面UI作成 (Frontend Specialist)
- [x] セキュリティ監査実施 (Security Officer)

### QA Team  
- [x] 統合テスト作成 (QA Lead)
- [x] パフォーマンステスト実行 (DevOps Engineer)

## 📋 本日の予定タスク
### 高優先度 (P0/P1)
- [ ] 本番環境デプロイ準備 (DevOps Engineer)
- [ ] セキュリティパッチ適用 (Security Officer)

### 通常タスク
- [ ] ユーザー管理機能実装 (Senior Fullstack)
- [ ] API仕様書更新 (Technical Writer)
- [ ] コードレビュー (Engineering Manager)

## ⚠️ ブロッカー・課題
- 🔴 P1: データベース接続エラー
  - 担当: Backend Architect
  - 支援要請: DevOps Engineer
  - 予想解決時間: 2時間

## 📊 メトリクス
- スプリント進捗: Day 5/14 (35.7%)
- 完了タスク: 12/35
- ベロシティ: 23 SP
- バグ発生数: 2 (昨日比 -1)
- コードカバレッジ: 82.3% (+1.2%)

## 👥 チーム別状況
| チーム | 状態 | 本日のフォーカス |
|--------|------|------------------|
| Engineering | 🟢 Active | 機能実装 |
| QA | 🟢 Active | テスト実行 |
| Security | 🟡 Alert | パッチ適用 |
| DevOps | 🟢 Active | デプロイ準備 |

## 💬 特記事項
- 15:00 リリース判定会議
- Security Patch緊急適用予定
- 新メンバーオンボーディング開始
\`\`\`

## 自動投稿先
- .claude/chat/daily-standup.md
- Slack: #daily-standup
- Teams: General Channel
```

### 使用例
```bash
/daily-standup
/daily-standup --date 2025-01-11
```

---

### 5. 週次レポート生成 (`weekly-report.md`)

```markdown
# 週次レポート自動生成

## 実行内容
毎週金曜17:00に自動実行、経営層向けサマリーレポート生成

## レポート構成

### 📈 エグゼクティブサマリー
\`\`\`markdown
# 週次レポート - Week [番号] ([開始日] - [終了日])

## 🎯 週次ハイライト
- ✅ ユーザー認証機能リリース完了
- ✅ セキュリティ監査合格（スコア: 95/100）
- ⚠️ パフォーマンス改善継続中
- 📈 開発速度20%向上

## 📊 主要KPI
| 指標 | 目標 | 実績 | 達成率 | 前週比 |
|------|------|------|--------|--------|
| スプリント完了率 | 90% | 87% | 96.7% | +5% |
| バグ発生率 | <5% | 3.2% | ✅ | -1.1% |
| コードカバレッジ | >80% | 82.3% | ✅ | +2.3% |
| デプロイ頻度 | 5回/週 | 6回 | ✅ | +1 |
| MTTR | <30分 | 25分 | ✅ | -5分 |

## 🏆 主要成果
1. **機能リリース**
   - ユーザー認証システム（影響: 全ユーザー）
   - 管理画面UI刷新（効率: +30%）
   
2. **品質改善**
   - テスト自動化率: 75% → 82%
   - セキュリティスコア: A評価獲得

3. **プロセス改善**
   - コードレビュー時間: 4時間 → 2時間
   - CI/CD最適化: ビルド時間30%短縮

## ⚠️ 課題と対策
| 課題 | 影響 | 対策 | 担当 | 期限 |
|------|------|------|------|------|
| DB性能劣化 | 中 | インデックス最適化 | Backend Architect | 1/15 |
| テスト実行時間 | 低 | 並列化実装 | QA Lead | 1/18 |

## 📅 来週の重点項目
1. パフォーマンス最適化完了
2. 新機能β版リリース
3. セキュリティパッチ適用
4. ドキュメント整備

## 💰 コスト状況
- 開発コスト: 予算内（実績: 85%）
- インフラコスト: $2,340（予算: $2,500）
- 外部サービス: $450（予算: $500）

## 👥 チーム状況
- エンゲージメントスコア: 4.2/5.0
- 稼働率: 92%
- 残業時間: 平均2.3時間/週（健全）
\`\`\`

## 自動配信
- CEO, CTO, PM宛にメール送信
- .claude/reports/weekly/ に保存
- ダッシュボードに反映
```

### 使用例
```bash
/weekly-report
/weekly-report --week 3
```

---

## ⚙️ Part 4: Hooks自動化設定

### Hooks設定ファイル (`hooks-config.md`)

```bash
# 品質保証Hooks
claude hooks add pre-commit "
echo '🔍 品質チェック開始...'
npm run lint
npm run test
npm run security-scan
if [ $? -ne 0 ]; then
  echo '❌ 品質チェック失敗'
  exit 1
fi
echo '✅ 品質チェック完了'
"

claude hooks add post-commit "
echo '📝 ドキュメント更新...'
npm run docs:generate
DATE=$(date +%Y%m%d-%H%M%S)
git add docs/
git commit -m 'docs: 自動生成ドキュメント更新 $DATE'
"

# Daily自動化
claude hooks add daily-9am "
echo '📊 Daily Standup 生成中...'
claude '/daily-standup' > .claude/chat/daily-standup-$(date +%Y%m%d).md
claude '@engineering-manager でタスク優先順位付け'
claude '/progress-dashboard'
"

# 週次レポート
claude hooks add weekly-friday-5pm "
echo '📈 週次レポート生成中...'
claude '/weekly-report'
claude '@ceo で週次サマリー作成'
claude '@cto で技術レポート作成'
"

# インシデント対応
claude hooks add on-error "
ERROR_LEVEL=$1
case $ERROR_LEVEL in
  P0)
    echo '🚨 P0インシデント検知！'
    claude '@security-officer で緊急対応開始'
    claude '@cto へ即座にエスカレーション'
    claude '@ceo へ状況報告'
    # Slack通知
    curl -X POST $SLACK_WEBHOOK -d '{
      \"text\": \"🚨 P0 INCIDENT DETECTED\"
    }'
    ;;
  P1)
    echo '⚠️ P1インシデント検知'
    claude '@engineering-manager で対応開始'
    claude '@security-officer でセキュリティチェック'
    ;;
  *)
    echo 'ℹ️ 通常エラー検知'
    claude '@on-call-engineer で調査開始'
    ;;
esac
"

# 自動テスト
claude hooks add on-pr "
echo '🧪 PR自動チェック開始...'
claude '/review-checklist $PR_NUMBER'
npm run test:all
npm run lint:all
claude '@qa-lead で品質確認'
claude '@security-officer でセキュリティレビュー'
"

# パフォーマンス監視
claude hooks add hourly "
echo '📊 パフォーマンス監視中...'
RESPONSE_TIME=$(curl -w '%{time_total}' -o /dev/null -s $API_ENDPOINT)
if (( $(echo \"$RESPONSE_TIME > 0.5\" | bc -l) )); then
  echo '⚠️ レスポンス遅延検知'
  claude '@devops-engineer でパフォーマンス調査'
fi
"
```

---

## 🚀 導入手順

### 1. ディレクトリ作成
```bash
mkdir -p .claude/commands
mkdir -p .claude/hooks
```

### 2. ファイル配置
各コマンドを `.claude/commands/` に配置

### 3. Hooks有効化
```bash
# 設定ファイルを実行
source .claude/hooks/hooks-config.md
```

### 4. 動作確認
```bash
# コマンドテスト
/progress-dashboard
/daily-standup

# Hooks確認
claude hooks list
```

---

## 📝 カスタマイズガイド

### 通知先の変更
```bash
SLACK_WEBHOOK="your-webhook-url"
TEAMS_WEBHOOK="your-webhook-url"
EMAIL_RECIPIENTS="ceo@company.com,cto@company.com"
```

### 実行時間の調整
```bash
# Daily Standupの時間変更
claude hooks add daily-10am "..." # 10時に変更

# 週次レポートの曜日変更
claude hooks add weekly-monday-9am "..." # 月曜朝に変更
```

### メトリクス閾値の調整
```javascript
// カバレッジ基準を90%に
if (coverage < 90) {
  console.error("カバレッジ不足");
}

// レスポンス時間を100msに
if (responseTime > 100) {
  alert("パフォーマンス劣化");
}
```

---

*このファイルは随時更新されます*
*最終更新: 2025年1月11日*