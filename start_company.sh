#!/bin/bash

# Claude Code Company 起動スクリプト
# 組織階層に基づいたtmuxセッション管理

echo "🚀 Claude Code Company を起動します..."

# tmuxセッションの確認
if ! tmux has-session -t company 2>/dev/null; then
    echo "📦 新しいCompanyセッションを作成中..."
    
    # CEOウィンドウ作成（経営陣）
    tmux new-session -d -s company -n CEO
    tmux split-window -h -t company:CEO
    tmux split-window -v -t company:CEO.0
    tmux split-window -v -t company:CEO.1
    
    # Technicalウィンドウ作成（技術部門）
    tmux new-window -t company -n Technical
    tmux split-window -h -t company:Technical
    tmux split-window -v -t company:Technical.0
    tmux split-window -v -t company:Technical.1
    tmux split-window -h -t company:Technical.2
    tmux split-window -h -t company:Technical.3
    
    # Supportウィンドウ作成（サポート部門）
    tmux new-window -t company -n Support
    tmux split-window -h -t company:Support
    tmux split-window -v -t company:Support.0
fi

# Pane IDを取得
echo "📋 組織構成を確認中..."

# CEOウィンドウのpane ID取得
CEO_PANE=$(tmux list-panes -t company:CEO -F "#{pane_id}" | head -1)
CTO_PANE=$(tmux list-panes -t company:CEO -F "#{pane_id}" | sed -n 2p)
PM_PANE=$(tmux list-panes -t company:CEO -F "#{pane_id}" | sed -n 3p)
HR_PANE=$(tmux list-panes -t company:CEO -F "#{pane_id}" | sed -n 4p)

# TechnicalウィンドウのPane ID取得
ENG_MGR_PANE=$(tmux list-panes -t company:Technical -F "#{pane_id}" | head -1)
SENIOR_FS_PANE=$(tmux list-panes -t company:Technical -F "#{pane_id}" | sed -n 2p)
FRONTEND_PANE=$(tmux list-panes -t company:Technical -F "#{pane_id}" | sed -n 3p)
BACKEND_PANE=$(tmux list-panes -t company:Technical -F "#{pane_id}" | sed -n 4p)
DEVOPS_PANE=$(tmux list-panes -t company:Technical -F "#{pane_id}" | sed -n 5p)
QA_PANE=$(tmux list-panes -t company:Technical -F "#{pane_id}" | sed -n 6p)

# SupportウィンドウのPane ID取得
SECURITY_PANE=$(tmux list-panes -t company:Support -F "#{pane_id}" | head -1)
TECH_WRITER_PANE=$(tmux list-panes -t company:Support -F "#{pane_id}" | sed -n 2p)
SPARE_PANE=$(tmux list-panes -t company:Support -F "#{pane_id}" | sed -n 3p)

# Claude Codeのエイリアス確認
echo "🔧 Claude Code設定を確認中..."
if command -v claude &> /dev/null; then
    CC_CMD="claude"
    echo "✅ claude コマンドが見つかりました"
else
    echo "❌ claude コマンドが見つかりません"
    echo "インストール方法: npm install -g @anthropic-ai/claude-cli"
    exit 1
fi

# 危険オプションの確認
read -p "⚠️  --dangerously-skip-permissions オプションを使用しますか？ (y/n): " use_dangerous
if [[ "$use_dangerous" == "y" ]]; then
    CC_CMD="$CC_CMD --dangerously-skip-permissions"
fi

# 各エージェントの起動
echo "👥 AI組織メンバーを起動中..."

# 起動関数
start_agent() {
    local pane=$1
    local role=$2
    local name=$3
    
    echo "  起動中: $name ($role)..."
    tmux send-keys -t $pane "$CC_CMD" Enter
    sleep 0.5
    tmux send-keys -t $pane "あなたは$name（$role）です。CLAUDE.mdの組織構造に従って行動してください。メインペイン($CEO_PANE)への報告はtmux send-keys -t $CEO_PANE '[${role}] 報告内容' Enterで行ってください。" Enter
}

# 経営陣の起動
echo "📊 経営陣を起動中..."
start_agent $CEO_PANE "CEO" "最高経営責任者"
start_agent $CTO_PANE "CTO" "最高技術責任者"
start_agent $PM_PANE "PM" "プロダクトマネージャー"
start_agent $HR_PANE "HR" "人事マネージャー"

# 技術部門の起動
echo "💻 技術部門を起動中..."
start_agent $ENG_MGR_PANE "EngMgr" "エンジニアリングマネージャー"
start_agent $SENIOR_FS_PANE "SrFS" "シニアフルスタックエンジニア"
start_agent $FRONTEND_PANE "FE" "フロントエンドスペシャリスト"
start_agent $BACKEND_PANE "BE" "バックエンドアーキテクト"
start_agent $DEVOPS_PANE "DevOps" "DevOpsエンジニア"
start_agent $QA_PANE "QA" "QAリード"

# サポート部門の起動
echo "🛡️ サポート部門を起動中..."
start_agent $SECURITY_PANE "SecOff" "セキュリティオフィサー"
start_agent $TECH_WRITER_PANE "TechWriter" "テクニカルライター"

echo "✨ Claude Code Company が起動しました！"
echo ""
echo "📌 管理コマンド:"
echo "  tmux attach -t company    # セッションに接続"
echo "  tmux ls                   # セッション一覧"
echo "  Ctrl-b + 0-2              # ウィンドウ切り替え"
echo "  Ctrl-b + Space            # レイアウト自動調整"
echo ""
echo "📋 組織構成:"
echo "  Window 0 (CEO): CEO, CTO, PM, HR"
echo "  Window 1 (Technical): EngMgr, SrFS, FE, BE, DevOps, QA"
echo "  Window 2 (Support): Security, TechWriter"
echo ""
echo "💡 タスク割り当て例:"
echo "  tmux send-keys -t $ENG_MGR_PANE 'プロジェクトの初期設定を開始してください' Enter"
echo ""
echo "🔍 状況確認:"
echo "  tmux capture-pane -t $CEO_PANE -p | tail -10"