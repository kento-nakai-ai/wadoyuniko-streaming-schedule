はじめに
みなさん、Claude Code使っていますか？

私は毎日claudeと打っていたのですが、ファイルの作成やコマンド実行のたびに"Yes", "No"を聞かれるのがめんどくさくなってきたので、最近は実行して欲しくないコマンドのみ'.claude/settings.local.json'のdenyリストに入れて、"claude --dangerously-skip-permissions"を実行してエージェントがどんどん自律的に動いてもらえるようにしています。



しかし、CLIで毎回長いコマンドを毎回打つのは手間なので、短いエイリアスを設定したいとおもいました。

本稿では代表的な３環境での設定手順をまとめ、再利用しやすい dotfiles 管理の方法やセキュリティ上の注意点も解説します。

以下では、claude --dangerously-skip-permissions をワンライナー cc で呼び出せるようにする設定方法を、Windows（PowerShell）、macOS（zsh／bash）、および Fish Shell の３つの環境別に解説します。

併せて、エイリアス管理のベストプラクティスや注意点も紹介します。

前提条件
claude コマンドが既にインストールされ、正常に実行できること
各シェルの設定ファイルに書き込む権限があること
設定後はシェル再起動または設定ファイルの再読み込みを行うこと
1. Windows（PowerShell）の場合
PowerShell プロファイルの場所を確認

$PROFILE.CurrentUserAllHosts
# => 例: C:\Users\<ユーザー名>\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1

プロファイルがなければ作成

if (!(Test-Path -Path $PROFILE.CurrentUserAllHosts)) {
  New-Item -ItemType File -Path $PROFILE.CurrentUserAllHosts -Force
}

エイリアスを定義
プロファイルファイルをエディタで開き、末尾に以下を追記します：

Set-Alias cc 'claude'
function cc { claude --dangerously-skip-permissions @args }

設定の反映

. $PROFILE.CurrentUserAllHosts

動作確認

cc --help
# → `claude --dangerously-skip-permissions --help` と同等に動作すればOK

2. macOS（zsh／bash）の場合
macOS Catalina以降はデフォルトシェルが zsh ですが、bash を使っている場合もほぼ同様です。

設定ファイルを開く

zsh: ~/.zshrc
bash: ~/.bash_profile または ~/.bashrc
エイリアス／関数を追記

# ~/.zshrc もしくは ~/.bash_profile に追記
alias cc='claude --dangerously-skip-permissions'

# — 引数をそのまま渡す場合は function でも可 —
# function cc() {
#   claude --dangerously-skip-permissions "$@"
# }

設定の再読み込み

source ~/.zshrc   # zsh の場合
# または
source ~/.bash_profile  # bash の場合

動作確認

cc --version
# → `claude --dangerously-skip-permissions --version` と同等の出力になれば成功

3. Fish Shell の場合
Fish は独自のシンタックスを持つため、alias コマンドではなく functions を使います。

config.fish を開く

vim ~/.config/fish/config.fish

関数を定義

function cc
  claude --dangerously-skip-permissions $argv
end

設定の反映
Fish は自動反映されます。手動で読み込む場合：

source ~/.config/fish/config.fish

動作確認

cc help
# → `claude --dangerously-skip-permissions help` と同等に動作すればOK



ベストプラクティス
Dotfiles 管理
GitHub等で ~/.zshrc、~/.bash_profile、config.fish を一元管理し、複数マシンで同期すると便利です。

関数化 vs. alias
引数を受け渡す場合や、複雑な前処理があるときは alias ではなく function（関数）として定義しましょう。

セキュリティ

コマンドの中に機密情報（トークン等）を埋め込むのは避け、環境変数から参照する方法を検討してください。
エイリアスや関数に書かれたコマンドは第三者に見られる可能性があるため、慎重に管理しましょう。
トラブルシューティング
エイリアスが有効にならない

ファイル名やパスを間違えていないか確認してください。
source コマンドで再読み込み後、再度新しいシェルを開いてみてください。
予期しない挙動

alias と function が重複していないか、または古い定義が残っていないかをチェックしてください。
which cc でどの定義が優先されているか確認できます。
まとめ
Windows: PowerShell プロファイルに Set-Alias ＋ 関数定義
macOS: ~/.zshrc もしくは ~/.bash_profile に alias 追記
Fish: config.fish に function 定義
エイリアスは日々の開発効率を大きく改善します。上記の手順を参考に、自分の環境に合わせて設定してみてください。

もしこの記事が参考になったらいいねをもらえるととても嬉しいです！

また、Xでは毎日Claude CodeなどのAI駆動開発手法について発信しているので、フォロー頂けると喜びます！

