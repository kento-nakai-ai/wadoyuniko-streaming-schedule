export interface WadoPost {
  id: string;
  title: string;
  content: string;
  category: string;
  hashtags: string[];
  urgency: 'high' | 'medium' | 'low';
  targetTime: string;
  engagement: 'viral' | 'conversion' | 'authority';
}

export const wadoPosts: WadoPost[] = [
  // 8/18 ローンチ週間開始
  {
    id: 'wado-18-1',
    title: '8/18朝 - AI開発革命週間スタート',
    content: `【AI開発革命】週間スタート🚀

今週からバイブコーディングの
真の威力をお見せします

コード知識ゼロから
3週間でツール開発

実際の開発画面も公開予定
お楽しみに

#バイブコーディング #AI開発`,
    category: 'ローンチ告知',
    hashtags: ['#バイブコーディング', '#AI開発', '#週間スタート'],
    urgency: 'high',
    targetTime: '朝7:00',
    engagement: 'conversion'
  },
  {
    id: 'wado-18-2',
    title: '8/18昼 - ランチタイム自動化提案',
    content: `ランチタイムに考えてほしいこと

あなたの今の仕事で
「これ自動化できたらな」
と思うタスクありませんか？

・レポート作成
・データ集計
・顧客管理

全部AIで解決できます
方法をお教えします`,
    category: '問題解決',
    hashtags: ['#自動化', '#効率化', '#AI活用'],
    urgency: 'medium',
    targetTime: '昼12:00',
    engagement: 'viral'
  },
  {
    id: 'wado-18-3',
    title: '8/18夜 - Xスペース実演予告',
    content: `【実演予告】

明日8/19 21:00から
X スペースでライブ実演

「リアルタイムAI開発」
視聴者のリクエストで
その場でツール作成

参加費無料
通知ONでお待ちください

#Xスペース #ライブ開発`,
    category: '配信告知',
    hashtags: ['#Xスペース', '#ライブ開発', '#実演'],
    urgency: 'high',
    targetTime: '夜20:00',
    engagement: 'conversion'
  },

  // 8/19 火曜日
  {
    id: 'wado-19-1',
    title: '8/19朝 - 学習時間効率比較',
    content: `【火曜日の真実】

従来のプログラミング学習：
・HTML/CSS: 3ヶ月
・JavaScript: 6ヶ月
・実践: 1年
合計: 1年半

バイブコーディング：
・AI対話術: 1週間
・実践: 2週間
合計: 3週間

時間効率50倍の革命`,
    category: '競合比較',
    hashtags: ['#時間効率', '#50倍', '#革命'],
    urgency: 'medium',
    targetTime: '朝7:00',
    engagement: 'authority'
  },
  {
    id: 'wado-19-2',
    title: '8/19昼 - 開発実例スクリーンショット',
    content: `昨日の質問への回答

「本当にコード書けなくてもOK？」

実際の開発例見せます👇

[開発画面のスクリーンショット想定]

左: 私の日本語指示
右: AIが生成したコード
結果: 完璧な動作

これが現実です`,
    category: '実演・デモ',
    hashtags: ['#実例', '#スクリーンショット', '#現実'],
    urgency: 'high',
    targetTime: '昼12:00',
    engagement: 'authority'
  },
  {
    id: 'wado-19-3',
    title: '8/19夜 - Xスペースライブ開始',
    content: `【🔴LIVE開始】

Xスペース開催中
「リアルタイムAI開発実演」

視聴者リクエスト:
→「売上管理ツール作って」

今から30分で作ってみます
失敗したらお詫びします😅

参加はプロフィールから`,
    category: 'ライブ配信',
    hashtags: ['#LIVE開始', '#実演中', '#30分チャレンジ'],
    urgency: 'high',
    targetTime: '夜21:00',
    engagement: 'viral'
  },

  // 8/20 水曜日
  {
    id: 'wado-20-1',
    title: '8/20朝 - 固定観念を捨てよう',
    content: `【水曜日のモチベーション】

「プログラミングは難しい」

この固定観念、捨ててください

昨夜のスペースで証明したように
日本語で会話するだけで
実用ツールが完成

新しい時代の始まりです

#固定観念を捨てよう`,
    category: 'インスピレーション',
    hashtags: ['#固定観念', '#新時代', '#モチベーション'],
    urgency: 'medium',
    targetTime: '朝7:00',
    engagement: 'viral'
  },
  {
    id: 'wado-20-2',
    title: '8/20昼 - 売上管理ツール使用レポート',
    content: `昨夜作成した売上管理ツール
実際に使ってみた結果

✅ データ入力: 直感的
✅ グラフ表示: 美しい
✅ 分析機能: 実用的
✅ エラー: なし

30分で作ったとは思えない
完成度

AIの進歩、恐るべし`,
    category: '実績報告',
    hashtags: ['#売上管理ツール', '#30分完成', '#高品質'],
    urgency: 'medium',
    targetTime: '昼12:00',
    engagement: 'authority'
  },
  {
    id: 'wado-20-3',
    title: '8/20夜 - 質問タイム開催',
    content: `【質問タイム】

バイブコーディングについて
何でも質問してください

・学習方法
・必要な時間
・収益化の流れ
・サポート体制

リプライで答えます
遠慮なくどうぞ🙋‍♂️`,
    category: '相談・質問',
    hashtags: ['#質問タイム', '#なんでもOK', '#24時間以内返信'],
    urgency: 'medium',
    targetTime: '夜20:00',
    engagement: 'viral'
  },

  // セミナー直接告知・煽り投稿（既存投稿を統合）
  {
    id: 'wado-1',
    title: '緊急告知・残席わずか',
    content: `【緊急告知】

8月31日のAI開発革命
見逃したら後悔します

「バイブコーディング」で
プログラミング知識ゼロから
3週間でツール作成

残席わずか
申込みはプロフィールから`,
    category: 'セミナー告知',
    hashtags: ['#バイブコーディング', '#AI革命', '#プログラミング不要'],
    urgency: 'high',
    targetTime: '朝7:00-9:00',
    engagement: 'conversion'
  },
  {
    id: 'wado-2',
    title: '先着100名限定アピール',
    content: `【先着100名限定】

AIで人生変えませんか？

❌ コード覚える必要なし
❌ プログラミング経験不要
⭕ AIとの対話だけでOK
⭕ 3週間で収益化可能

8/31 20時スタート
満席になる前にお急ぎを`,
    category: 'セミナー告知',
    hashtags: ['#AI革命', '#限定募集', '#人生変える'],
    urgency: 'high',
    targetTime: '昼12:00-13:00',
    engagement: 'conversion'
  },
  {
    id: 'wado-3',
    title: '実績による信頼性アピール',
    content: `過去セミナー参加者の声

「2週間で30万円の案件獲得」
「残業ゼロで副業月15万」  
「50代から新しいキャリア」

次はあなたの番

8月31日の無料セミナー
参加受付中

プロフィールのリンクから`,
    category: '社会的証明',
    hashtags: ['#実績', '#成功事例', '#副業'],
    urgency: 'medium',
    targetTime: '夜19:00-21:00',
    engagement: 'conversion'
  },
  {
    id: 'wado-4',
    title: '悩み解決型アプローチ',
    content: `こんな悩みありませんか？

😰 プログラミング難しそう
😰 副業したいけど何から？  
😰 AIについていけない
😰 将来に不安

全て解決します🎯

バイブコーディングで
新時代のスキル習得

8/31セミナー詳細は
プロフィールから`,
    category: '問題解決',
    hashtags: ['#悩み解決', '#スキルアップ', '#AI時代'],
    urgency: 'medium',
    targetTime: '午後15:00-17:00',
    engagement: 'viral'
  },
  {
    id: 'wado-5',
    title: '競合比較・優位性',
    content: `他のプログラミングスクールとの違い

❌ 6ヶ月で100万円
❌ 挫折率90%
❌ 難しい数学必要

✅ 3週間で習得可能
✅ 継続率95%
✅ 会話だけでツール作成

この差、歴然です

8/31 詳細発表
お見逃しなく`,
    category: '競合比較',
    hashtags: ['#競合比較', '#圧倒的優位性', '#3週間習得'],
    urgency: 'medium',
    targetTime: '夜20:00-22:00',
    engagement: 'conversion'
  },

  // AI界隈マスコット系投稿
  {
    id: 'wado-6',
    title: 'AI界隈の日常あるある',
    content: `AI界隈あるある

朝：「今日こそGPT-4使いこなす」
昼：「プロンプト沼にハマった」
夜：「結局ChatGPTが最強」

でも明日も挑戦する
それがAI界隈の魅力✨

#AI界隈 #あるある`,
    category: 'コミュニティ',
    hashtags: ['#AI界隈', '#あるある', '#ChatGPT'],
    urgency: 'low',
    targetTime: '朝9:00-11:00',
    engagement: 'viral'
  },
  {
    id: 'wado-7',
    title: '最新AI情報シェア',
    content: `【速報】Claude 3.5最新アップデート

✅ 画像解析精度50%向上
✅ コード生成速度2倍
✅ 日本語理解大幅改善

開発者にとって神アップデート
みんな試した？

感想教えて〜！`,
    category: 'AI情報',
    hashtags: ['#Claude', '#最新情報', '#AI開発'],
    urgency: 'medium',
    targetTime: '昼12:00-13:00',
    engagement: 'authority'
  },
  {
    id: 'wado-8',
    title: 'AI開発失敗談',
    content: `今日の失敗談😅

AIに「売上管理システム作って」
→ゲーム作られた

プロンプトが曖昧すぎました...

みんなも似た経験ある？
失敗から学ぶのがAI開発のコツ

#AI開発 #失敗談 #学び`,
    category: '体験談',
    hashtags: ['#AI開発', '#失敗談', '#プロンプト'],
    urgency: 'low',
    targetTime: '午後16:00-18:00',
    engagement: 'viral'
  },

  // 収益化・ビジネス系投稿
  {
    id: 'wado-9',
    title: 'AI副業の現実',
    content: `AI副業の現実を暴露します

1ヶ月目：月3万円（簡単な自動化）
2ヶ月目：月12万円（企業案件獲得）
3ヶ月目：月28万円（継続案件多数）

スキル＜営業力
これが真実

でもスキルは3週間で身につく
バイブコーディングなら`,
    category: 'ビジネス',
    hashtags: ['#AI副業', '#収益化', '#現実'],
    urgency: 'medium',
    targetTime: '夜21:00-22:00',
    engagement: 'conversion'
  },
  {
    id: 'wado-10',
    title: 'AIツール作成実演',
    content: `【実演中】リアルタイムで
AIツール作ってます！

お題：「在庫管理システム」
制限時間：30分
使用AI：Claude 3.5

進捗をリプで実況します📺

みんなも一緒に作る？`,
    category: '実演・デモ',
    hashtags: ['#実演', '#在庫管理', '#リアルタイム'],
    urgency: 'high',
    targetTime: '夜20:00-21:00',
    engagement: 'viral'
  },

  // エンゲージメント狙い投稿
  {
    id: 'wado-11',
    title: 'AI vs 人間論争',
    content: `【議論】AIは人間の仕事を奪うか？

僕の意見：
AIは仕事を奪わない
AIを使えない人が
AIを使える人に仕事を奪われる

みんなはどう思う？
リプで意見聞かせて🤔`,
    category: '議論・質問',
    hashtags: ['#AI議論', '#仕事の未来', '#意見交換'],
    urgency: 'low',
    targetTime: '夜19:00-20:00',
    engagement: 'viral'
  },
  {
    id: 'wado-12',
    title: 'AIあるある投票',
    content: `AIを使い始めて最初に作ったもの

🤖 チャットボット
📝 文章生成ツール
🖼️ 画像生成
🧮 計算プログラム

リプで教えて！
懐かしい思い出を共有しよう✨`,
    category: 'アンケート',
    hashtags: ['#AI初体験', '#懐かしい', '#思い出'],
    urgency: 'low',
    targetTime: '土日14:00-16:00',
    engagement: 'viral'
  },

  // 限定感・緊急性投稿
  {
    id: 'wado-13',
    title: '24時間限定情報',
    content: `【24時間限定公開】

バイブコーディング特別映像
受講生のリアルな成長記録

完全未公開シーンも含む
30分のドキュメンタリー

明日の夜24時で削除します
見逃し注意⚠️`,
    category: '限定公開',
    hashtags: ['#限定公開', '#ドキュメンタリー', '#24時間'],
    urgency: 'high',
    targetTime: '夜22:00-23:00',
    engagement: 'conversion'
  },
  {
    id: 'wado-14',
    title: 'カウントダウン投稿',
    content: `【残り7日】

バイブコーディング募集まで
あと7日

準備できてること：
✅ 3週間完全カリキュラム
✅ 個別サポート体制
✅ 案件獲得保証制度

準備できてないこと：
❌ あなたの参加申込み

急いで！`,
    category: 'カウントダウン',
    hashtags: ['#残り7日', '#急げ', '#準備完了'],
    urgency: 'high',
    targetTime: '朝8:00-9:00',
    engagement: 'conversion'
  },

  // ストーリー系投稿
  {
    id: 'wado-15',
    title: '人生変わった瞬間',
    content: `人生が変わった瞬間

2024年3月15日
初めてAIで作ったツールが
クライアントに採用された日

報酬：15万円
作業時間：4時間
使ったスキル：AIとの対話のみ

あの日から世界が変わった
次はあなたの番です`,
    category: 'ストーリー',
    hashtags: ['#人生が変わった', '#初案件', '#4時間で15万'],
    urgency: 'medium',
    targetTime: '夜20:00-21:00',
    engagement: 'conversion'
  },

  // 権威性・実績系投稿
  {
    id: 'wado-16',
    title: '今月の実績報告',
    content: `【8月実績報告】

完成させたAIツール：17個
獲得案件数：8件
総収益：142万円
作業時間：週15時間

AIを味方につければ
こんな働き方が可能です

詳しいノウハウは
バイブコーディングで公開`,
    category: '実績報告',
    hashtags: ['#実績報告', '#142万円', '#週15時間'],
    urgency: 'medium',
    targetTime: '朝10:00-11:00',
    engagement: 'authority'
  },

  // 教育・Tips系投稿
  {
    id: 'wado-17',
    title: 'AIプロンプト秘技',
    content: `【秘技】AIの回答精度を3倍にする方法

「〜してください」ではなく
「〜の専門家として、〜を〜な観点から〜してください」

具体例：
❌「コード書いて」
⭕「シニアエンジニアとして、保守性とパフォーマンスを重視したPythonコードを書いてください」

今すぐ試してみて！`,
    category: 'Tips・ノウハウ',
    hashtags: ['#プロンプト秘技', '#精度3倍', '#今すぐ試せる'],
    urgency: 'medium',
    targetTime: '昼12:30-13:30',
    engagement: 'authority'
  },

  // 質問・相談系投稿
  {
    id: 'wado-18',
    title: 'AI開発相談室',
    content: `【AI開発相談室】

今日は質問にお答えします！

「AIツール作ったけど売り方がわからない」
「プログラミング未経験だけど大丈夫？」
「どのAIツールから始めればいい？」

なんでもリプでどうぞ🙋‍♂️
24時間以内に必ず返信します`,
    category: '相談・質問',
    hashtags: ['#相談室', '#質問歓迎', '#24時間以内返信'],
    urgency: 'low',
    targetTime: '午後14:00-15:00',
    engagement: 'viral'
  },

  // 予告・告知系投稿
  {
    id: 'wado-19',
    title: '明日の生配信予告',
    content: `【明日20時〜生配信】

テーマ：「AI開発で月30万稼ぐロードマップ」

配信内容：
・具体的な案件獲得方法
・単価交渉のコツ
・継続収入の作り方
・視聴者限定の特別情報

YouTubeで通知ONにしてね🔔`,
    category: '配信告知',
    hashtags: ['#生配信', '#月30万ロードマップ', '#明日20時'],
    urgency: 'medium',
    targetTime: '夜21:00-22:00',
    engagement: 'conversion'
  },

  // 感謝・コミュニティ系投稿
  {
    id: 'wado-20',
    title: 'フォロワー感謝投稿',
    content: `フォロワー1万人突破🎉

みんなのおかげで
AI界隈のマスコットとして
活動できています

これからも：
・リアルな実績報告
・使えるノウハウ共有
・AI開発の楽しさ発信

続けていきます！
いつもありがとう✨`,
    category: '感謝・御礼',
    hashtags: ['#1万人突破', '#感謝', '#これからもよろしく'],
    urgency: 'low',
    targetTime: '日曜19:00-20:00',
    engagement: 'viral'
  },

  // ツリー投稿（連続投稿）
  {
    id: 'wado-21',
    title: 'AI開発手順解説ツリー',
    content: `【ツリー1/5】
AIでツール作成の手順を
完全公開します🧵

初心者でも絶対できる
5ステップ解説

このツリーを見れば
今日からAI開発者デビュー✨

続きはリプで→`,
    category: 'ツリー投稿',
    hashtags: ['#AI開発手順', '#初心者向け', '#ツリー投稿'],
    urgency: 'medium',
    targetTime: '夜20:00-21:00',
    engagement: 'viral'
  },
  {
    id: 'wado-22',
    title: '失敗体験談ツリー',
    content: `【失敗談ツリー1/8】
AI開発で僕がやらかした
恥ずかしい失敗談を暴露します😅

これ見れば同じ失敗は避けられる
みんなには僕と同じ道を
歩んでほしくない...

恥を忍んで全公開🧵`,
    category: 'ツリー投稿',
    hashtags: ['#失敗談', '#恥ずかしい', '#学び'],
    urgency: 'low',
    targetTime: '土曜18:00-19:00',
    engagement: 'viral'
  },

  // バズ狙い・エンタメ系
  {
    id: 'wado-23',
    title: 'AI界隈あるある大喜利',
    content: `AI界隈あるある大喜利開催🎪

「ChatGPTに○○って言ったら
○○って返ってきた」

一番面白い回答を
リツイートします！

優勝者には
僕の有料noteプレゼント🎁

#AI大喜利`,
    category: 'エンタメ・大喜利',
    hashtags: ['#AI大喜利', '#あるある', '#プレゼント'],
    urgency: 'low',
    targetTime: '金曜20:00-21:00',
    engagement: 'viral'
  },
  {
    id: 'wado-24',
    title: 'AI診断メーカー',
    content: `【AI開発者適性診断】

当てはまる数をカウント✋

□ エラーが出ても諦めない
□ 新しいツールが出ると試したくなる
□ 「これ自動化できそう」とよく思う
□ 説明するより作って見せたい派
□ 完璧より完成派

4個以上→AI開発者の才能あり
結果をリプで教えて！`,
    category: 'エンタメ・診断',
    hashtags: ['#適性診断', '#AI開発者', '#才能チェック'],
    urgency: 'low',
    targetTime: '日曜14:00-16:00',
    engagement: 'viral'
  },

  // 質問・アンケート系
  {
    id: 'wado-25',
    title: 'AI使用頻度アンケート',
    content: `みんなの AI使用頻度教えて！

🤖 毎日使う
📅 週3-4回
🗓️ 週1-2回
🚫 ほとんど使わない

結果でAI活用講座の内容決めます
匿名でOKなので
正直にリプしてね📊`,
    category: 'アンケート',
    hashtags: ['#AI使用頻度', '#アンケート', '#活用講座'],
    urgency: 'medium',
    targetTime: '月曜12:00-13:00',
    engagement: 'viral'
  },
  {
    id: 'wado-26',
    title: '次に学びたいAI技術',
    content: `次のAI技術、どれが一番気になる？

🖼️ AI画像生成（Midjourney等）
🎵 AI音楽生成（Suno等）
🎬 AI動画生成（Sora等）  
🤖 AIエージェント（自動化）
💬 AI音声合成（クローン等）

一番票数多いやつを
来週ライブ配信で解説するよ！`,
    category: 'アンケート',
    hashtags: ['#次に学びたい', '#AI技術', '#ライブ配信'],
    urgency: 'medium',
    targetTime: '水曜19:00-20:00',
    engagement: 'viral'
  },

  // 速報・ニュース系
  {
    id: 'wado-27',
    title: 'AI業界速報',
    content: `【速報】OpenAI、新機能発表⚡

・GPT-5のベータ版公開
・処理速度5倍向上
・コスト80%削減
・リアルタイム動画生成

これやばすぎる...
明日の配信で詳しく解説します

#OpenAI #GPT5 #速報`,
    category: 'ニュース・速報',
    hashtags: ['#速報', '#OpenAI', '#GPT5'],
    urgency: 'high',
    targetTime: '速報時すぐ',
    engagement: 'authority'
  },
  {
    id: 'wado-28',
    title: 'AI業界の裏話',
    content: `【業界の裏話】

某大手AI企業の中の人から聞いた話

「来月発表予定の新機能は
今までの常識を覆すレベル」

詳細は言えないけど
革命的すぎてヤバい...

正式発表が楽しみです👀`,
    category: 'ニュース・速報',
    hashtags: ['#業界裏話', '#革命的', '#来月発表'],
    urgency: 'medium',
    targetTime: '夜21:00-22:00',
    engagement: 'authority'
  },

  // 比較・検証系
  {
    id: 'wado-29',
    title: 'AI比較レビュー',
    content: `【徹底比較】コード生成AI

Claude 3.5 vs GPT-4o vs Gemini

同じタスクで検証した結果：

精度：Claude > GPT-4o > Gemini
速度：GPT-4o > Gemini > Claude  
コスト：Gemini > Claude > GPT-4o
使いやすさ：GPT-4o > Claude > Gemini

詳細レポートはnoteで公開中📝`,
    category: '比較・検証',
    hashtags: ['#AI比較', '#コード生成', '#検証レポート'],
    urgency: 'medium',
    targetTime: '火曜15:00-16:00',
    engagement: 'authority'
  },
  {
    id: 'wado-30',
    title: '無料 vs 有料AIツール',
    content: `無料AIツール vs 有料AIツール
1週間検証してみた結果

【無料】
✅ 基本機能は十分
✅ お試しには最適
❌ 制限が多い
❌ サポートなし

【有料】
✅ 制限なし
✅ 高品質出力
✅ サポート充実
❌ コストがかかる

結論：用途次第だけど...`,
    category: '比較・検証',
    hashtags: ['#無料vs有料', '#AI検証', '#結論は'],
    urgency: 'low',
    targetTime: '木曜16:00-17:00',
    engagement: 'authority'
  },

  // 挑戦・企画系
  {
    id: 'wado-31',
    title: '24時間AI開発チャレンジ',
    content: `【挑戦企画】
24時間でAIツールを10個作る
チャレンジを今からスタート！

ルール：
・1つ30分以内
・実用性重視
・全工程ライブ配信

現在0/10個完成
進捗は1時間ごとに報告します📊

#24時間チャレンジ`,
    category: '挑戦・企画',
    hashtags: ['#24時間チャレンジ', '#10個作る', '#ライブ配信'],
    urgency: 'high',
    targetTime: 'チャレンジ開始時',
    engagement: 'viral'
  },
  {
    id: 'wado-32',
    title: '毎日AI投稿チャレンジ',
    content: `【30日チャレンジ開始】

毎日AIに関する学びを
必ず1つ投稿する企画スタート！

Day 1の学び：
「プロンプトは短く具体的に」

これでレスポンス精度が
30%向上しました✨

#30日AI学びチャレンジ`,
    category: '挑戦・企画',
    hashtags: ['#30日チャレンジ', '#毎日学び', '#継続'],
    urgency: 'medium',
    targetTime: '毎日20:00',
    engagement: 'viral'
  },

  // プレゼント・キャンペーン系
  {
    id: 'wado-33',
    title: 'フォロワー限定プレゼント',
    content: `【フォロワー限定🎁】

僕が3ヶ月かけて作った
「AI活用テンプレート集」
100種類を無料プレゼント！

受け取り方法：
1. このツイートをRT
2. フォロー必須
3. DMで「テンプレート希望」

先着50名様限定です⏰`,
    category: 'プレゼント',
    hashtags: ['#フォロワー限定', '#無料プレゼント', '#先着50名'],
    urgency: 'high',
    targetTime: '土曜10:00-11:00',
    engagement: 'conversion'
  },
  {
    id: 'wado-34',
    title: 'リツイートキャンペーン',
    content: `【RTキャンペーン🎊】

このツイートが100RT達成で
「AI開発完全ガイド」PDF
全員にプレゼント！

200RT達成で
個別相談30分×5名様
500RT達成で
グループコンサル開催

みんなで目指そう🚀`,
    category: 'プレゼント',
    hashtags: ['#RTキャンペーン', '#100RT', '#全員プレゼント'],
    urgency: 'high',
    targetTime: '月曜8:00-9:00',
    engagement: 'viral'
  },

  // 裏話・暴露系
  {
    id: 'wado-35',
    title: 'AI開発の裏側暴露',
    content: `【暴露】AI開発の裏側、全部話します

・月100万稼ぐクライアントの正体
・断った200万円の案件の理由
・AIツール開発の真のコツ
・失敗して学んだ痛い教訓

今夜21時からライブ配信で
包み隠さず暴露します🔥`,
    category: '暴露・裏話',
    hashtags: ['#裏側暴露', '#ライブ配信', '#包み隠さず'],
    urgency: 'high',
    targetTime: '配信告知時',
    engagement: 'viral'
  },
  {
    id: 'wado-36',
    title: 'AI業界の闇を語る',
    content: `AI業界にいて見えた「闇」

・誇大広告だらけのスクール
・実力のないAI専門家
・中身スカスカの高額教材
・フォロワー買いの実態

でも希望もある
本物を見極める目を
身につけることが大切

#AI業界の闇`,
    category: '暴露・裏話',
    hashtags: ['#AI業界の闇', '#本物を見極める', '#希望もある'],
    urgency: 'medium',
    targetTime: '夜22:00-23:00',
    engagement: 'viral'
  },

  // 予告・告知系
  {
    id: 'wado-37',
    title: '重大発表の予告',
    content: `【重大発表予告】

来週の月曜日に
僕のキャリアにとって
最も重要な発表があります

AI界隈の皆さんにとっても
きっと役立つ内容のはず

詳細は月曜の朝10時に
お楽しみに...👀

#重大発表 #来週月曜`,
    category: '予告・告知',
    hashtags: ['#重大発表', '#来週月曜', '#お楽しみに'],
    urgency: 'medium',
    targetTime: '金曜21:00-22:00',
    engagement: 'conversion'
  },
  {
    id: 'wado-38',
    title: '新サービス予告',
    content: `【Coming Soon...】

3ヶ月の開発期間を経て
ついに完成間近

「AIを使った○○」という
誰もやったことのない挑戦

近日公開予定
乞うご期待🚀

先行情報はメルマガで配信中`,
    category: '予告・告知',
    hashtags: ['#Coming Soon', '#3ヶ月開発', '#誰もやったことない'],
    urgency: 'medium',
    targetTime: '水曜18:00-19:00',
    engagement: 'conversion'
  },

  // インスピレーション・名言系
  {
    id: 'wado-39',
    title: 'AI時代の名言',
    content: `「AIを恐れるな
AIを使えない自分を恐れよ」

これは僕が最も大切にしている言葉

技術は道具
使う人次第で
毒にも薬にもなる

あなたはどちら側にいたいですか？

#AI名言 #道具は使う人次第`,
    category: 'インスピレーション',
    hashtags: ['#AI名言', '#恐れるな', '#どちら側に'],
    urgency: 'low',
    targetTime: '朝7:00-8:00',
    engagement: 'viral'
  },
  {
    id: 'wado-40',
    title: '挫折からの復活',
    content: `3回挫折した僕が言えること

「失敗は成功の母」じゃない
「諦めない心が成功の父」

プログラミングで3回挫折
でもAI開発で人生変わった

諦めなくてよかった
今挫折してる人、大丈夫です

#挫折からの復活 #諦めない心`,
    category: 'インスピレーション',
    hashtags: ['#挫折からの復活', '#3回挫折', '#諦めない'],
    urgency: 'low',
    targetTime: '日曜朝9:00-10:00',
    engagement: 'viral'
  }
];

export const wadoCategories = [
  'すべて',
  'ローンチ告知',
  'ライブ配信',
  'セミナー告知',
  '社会的証明',
  '問題解決',
  '競合比較',
  'コミュニティ',
  'AI情報',
  '体験談',
  'ビジネス',
  '実演・デモ',
  '議論・質問',
  'アンケート',
  '限定公開',
  'カウントダウン',
  'ストーリー',
  '実績報告',
  'Tips・ノウハウ',
  '相談・質問',
  '配信告知',
  '感謝・御礼',
  'ツリー投稿',
  'エンタメ・大喜利',
  'エンタメ・診断',
  'ニュース・速報',
  '比較・検証',
  '挑戦・企画',
  'プレゼント',
  '暴露・裏話',
  '予告・告知',
  'インスピレーション'
];