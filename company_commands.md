# Claude Code Company - tmux管理コマンド集

## 🚀 起動方法

```bash
# 起動スクリプトを実行
./start_company.sh

# セッションに接続
tmux attach -t company
```

## 📋 組織構成とPane ID

### CEOウィンドウ (Window 0)
- **%0**: CEO (最高経営責任者)
- **%2**: CTO (最高技術責任者)
- **%3**: Product Manager
- **%1**: HR Manager

### Technicalウィンドウ (Window 1)
- **%4**: Engineering Manager
- **%6**: Senior Fullstack Engineer
- **%7**: Frontend Specialist
- **%8**: Backend Architect
- **%9**: DevOps Engineer
- **%5**: QA Lead

### Supportウィンドウ (Window 2)
- **%10**: Security Officer
- **%12**: Technical Writer
- **%11**: 予備

## 📝 タスク割り当てコマンド

### 個別タスク割り当て
```bash
# CEOへのタスク
tmux send-keys -t %0 "戦略的計画を立案してください" Enter

# CTOへのタスク
tmux send-keys -t %2 "技術アーキテクチャを設計してください" Enter

# Engineering Managerへのタスク
tmux send-keys -t %4 "スプリント計画を作成してください" Enter
```

### 並列タスク割り当て
```bash
# 技術チーム全体への並列タスク
tmux send-keys -t %4 "プロジェクト初期設定を開始" Enter & \
tmux send-keys -t %6 "Next.jsプロジェクトを作成" Enter & \
tmux send-keys -t %7 "UIコンポーネントを設計" Enter & \
tmux send-keys -t %8 "データベース設計を開始" Enter & \
tmux send-keys -t %9 "CI/CD環境を構築" Enter & \
tmux send-keys -t %5 "テスト戦略を策定" Enter & \
wait
```

## 📊 報連相システム

### 部下からCEOへの報告
```bash
# 各エージェントはこのコマンドで報告
tmux send-keys -t %0 '[EngMgr] スプリント計画が完了しました' Enter
tmux send-keys -t %0 '[SecOff] セキュリティ監査を開始します' Enter
tmux send-keys -t %0 '[QA] テストカバレッジが80%に到達' Enter
```

### CTOへの技術報告
```bash
tmux send-keys -t %2 '[Backend] APIエンドポイント設計完了' Enter
tmux send-keys -t %2 '[DevOps] デプロイパイプライン構築完了' Enter
```

## 🔍 状況確認コマンド

### 個別pane確認
```bash
# CEOの最新状況
tmux capture-pane -t %0 -p | tail -10

# Engineering Managerの状況
tmux capture-pane -t %4 -p | tail -10
```

### 全体状況確認
```bash
# 経営陣の状況
for pane in %0 %2 %3 %1; do
    echo "=== Pane $pane ==="
    tmux capture-pane -t $pane -p | tail -5
done

# 技術チームの状況
for pane in %4 %6 %7 %8 %9 %5; do
    echo "=== Pane $pane ==="
    tmux capture-pane -t $pane -p | tail -5
done
```

## 🧹 メモリ管理

### 個別クリア
```bash
# 特定のエージェントをクリア
tmux send-keys -t %4 "/clear" Enter
```

### 一括クリア
```bash
# 技術チーム全体をクリア
for pane in %4 %6 %7 %8 %9 %5; do
    tmux send-keys -t $pane "/clear" Enter
done
```

## ⚡ 緊急対応

### P0インシデント対応
```bash
# Security Officerに緊急対応指示
tmux send-keys -t %10 "P0: 本番環境でセキュリティインシデント発生。即座に対応開始。" Enter

# CTOへエスカレーション
tmux send-keys -t %2 "[SecOff] P0インシデント発生。対応中。" Enter

# CEOへ報告
tmux send-keys -t %0 "[CTO] P0セキュリティインシデント。対応チーム編成済み。" Enter
```

## 🎯 プロジェクト開始テンプレート

```bash
# 1. CEO: ビジョン共有
tmux send-keys -t %0 "wadoyunikoプラットフォームのビジョンを策定します" Enter

# 2. CTO: 技術戦略
tmux send-keys -t %2 "Next.js 15 + Supabase + TypeScriptの技術スタックを承認" Enter

# 3. Product Manager: 要件定義
tmux send-keys -t %3 "MVP機能リストを作成します" Enter

# 4. Engineering Manager: スプリント計画
tmux send-keys -t %4 "12週間のロードマップを作成します" Enter

# 5. 開発チーム: 環境構築
tmux send-keys -t %6 "Next.jsプロジェクトを初期化" Enter & \
tmux send-keys -t %8 "Supabaseデータベース設計を開始" Enter & \
tmux send-keys -t %9 "GitHub Actionsを設定" Enter & \
wait
```

## 📈 メトリクス確認

```bash
# 各エージェントにメトリクス報告を要求
tmux send-keys -t %5 "テストカバレッジを報告してください" Enter
tmux send-keys -t %9 "デプロイ頻度を報告してください" Enter
tmux send-keys -t %10 "セキュリティスキャン結果を報告してください" Enter
```

## 🛠️ トラブルシューティング

### エージェントが応答しない場合
```bash
# 該当paneの状態確認
tmux capture-pane -t %4 -p | tail -20

# 強制リセット
tmux send-keys -t %4 C-c Enter
tmux send-keys -t %4 "/clear" Enter
tmux send-keys -t %4 "claude --dangerously-skip-permissions" Enter
```

### セッション復旧
```bash
# セッションが切断された場合
tmux attach -t company

# セッションが存在しない場合
./start_company.sh
```

## 📌 ショートカット

- `Ctrl-b + 0`: CEOウィンドウへ
- `Ctrl-b + 1`: Technicalウィンドウへ
- `Ctrl-b + 2`: Supportウィンドウへ
- `Ctrl-b + Space`: レイアウト自動調整
- `Ctrl-b + d`: セッションから離脱
- `Ctrl-b + [`: スクロールモード