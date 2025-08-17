export interface NakaiPost {
  id: string;
  title: string;
  content: string;
  category: string;
  hashtags: string[];
  authority: 'technical' | 'business' | 'industry';
  targetTime: string;
  audience: 'engineers' | 'business' | 'general';
}

export const nakaiPosts: NakaiPost[] = [
  // 8/18 ローンチ週間開始 - UnionAI CEO視点
  {
    id: 'nakai-18-1',
    title: '8/18朝 - UnionAI CEO ローンチ宣言',
    content: `UnionAI CEOとして断言します

2025年、AI活用できない企業は
確実に競争から脱落する

でも個人レベルなら
まだ十分間に合う

バイブコーディングで
先行者利益を獲得しませんか？

#UnionAI #AI戦略`,
    category: 'ローンチ告知',
    hashtags: ['#UnionAI', '#AI戦略', '#CEO視点'],
    authority: 'business',
    targetTime: '朝8:00',
    audience: 'business'
  },
  {
    id: 'nakai-18-2',
    title: '8/18昼 - 経営者視点の人材コスト分析',
    content: `【経営者視点】

優秀な開発者1名の年収：800万
バイブコーディング習得者：300万

しかし開発スピードは
後者の方が3倍速い

コストパフォーマンス
圧倒的です

これが新時代の採用基準`,
    category: '経営戦略',
    hashtags: ['#経営視点', '#コスパ', '#人材戦略'],
    authority: 'business',
    targetTime: '昼12:30',
    audience: 'business'
  },
  {
    id: 'nakai-18-3',
    title: '8/18夜 - 歴史的瞬間への招待',
    content: `今日からローンチ週間開始

13日間で日本のAI教育を
根本から変える挑戦

・革新的な学習メソッド
・実践的なカリキュラム
・確実な収益化サポート

歴史的瞬間を目撃してください

#歴史的瞬間`,
    category: 'ローンチ告知',
    hashtags: ['#歴史的瞬間', '#日本AI教育', '#革新'],
    authority: 'business',
    targetTime: '夜20:30',
    audience: 'general'
  },

  // 8/19 火曜日
  {
    id: 'nakai-19-1',
    title: '8/19朝 - エンジニア採用戦略',
    content: `エンジニア採用で困ってる
経営者の方へ

求人倍率8倍の市場で
優秀な人材獲得は困難

だったら既存社員に
バイブコーディング習得させれば？

3週間で戦力化
コスト1/10

経営判断として正しい`,
    category: 'エンジニア採用',
    hashtags: ['#エンジニア採用', '#コスト削減', '#経営判断'],
    authority: 'business',
    targetTime: '朝8:00',
    audience: 'business'
  },
  {
    id: 'nakai-19-2',
    title: '8/19昼 - 投資家との対話',
    content: `【投資家との会話】

「AI人材への投資どう思う？」

私の回答:
「個人のスキル習得が最高ROI」

・確実なリターン
・リスク最小
・スケーラブル

バイブコーディングは
最高の投資先です`,
    category: 'AI投資',
    hashtags: ['#AI投資', '#ROI', '#スキル投資'],
    authority: 'business',
    targetTime: '昼12:30',
    audience: 'business'
  },
  {
    id: 'nakai-19-3',
    title: '8/19夜 - わど実演への評価',
    content: `わどの実演、見事でした👏

30分で完成したツール
普通なら3日かかる内容

これがバイブコーディングの実力

技術の民主化が
本当に始まった瞬間を
目撃しました

#技術革命`,
    category: '技術検証',
    hashtags: ['#技術革命', '#民主化', '#実力証明'],
    authority: 'technical',
    targetTime: '夜21:30',
    audience: 'engineers'
  },

  // 8/20 水曜日
  {
    id: 'nakai-20-1',
    title: '8/20朝 - 市場準備完了の分析',
    content: `昨夜のスペース参加者数
200名突破

これだけ多くの方が
AI開発に興味を持ってる

市場の準備は整った
あとは適切な教育メソッド

バイブコーディングが
その答えです

#市場準備完了`,
    category: '市場分析',
    hashtags: ['#市場準備完了', '#需要確認', '#教育メソッド'],
    authority: 'business',
    targetTime: '朝8:00',
    audience: 'business'
  },
  {
    id: 'nakai-20-2',
    title: '8/20昼 - IT人材不足データ分析',
    content: `【データで見る現実】

IT人材需給ギャップ:
2030年まで年間45万人不足

解決策は2つ:
1. 海外人材の採用
2. 既存人材のスキルアップ

後者が現実的
バイブコーディングが鍵

#IT人材不足`,
    category: '人材市場',
    hashtags: ['#IT人材不足', '#解決策', '#スキルアップ'],
    authority: 'business',
    targetTime: '昼12:30',
    audience: 'business'
  },
  {
    id: 'nakai-20-3',
    title: '8/20夜 - セミナー必要性の説明',
    content: `質問が殺到してますね

皆さんの関心の高さが
よく分かります

でも文字だけでは
伝えきれない部分も

だからこそ8/31のセミナー
絶対に参加してほしい

目で見れば納得します`,
    category: 'セミナー告知',
    hashtags: ['#セミナー必要性', '#納得', '#参加推奨'],
    authority: 'business',
    targetTime: '夜20:30',
    audience: 'general'
  },
  // 権威性強化・技術解説
  {
    id: 'nakai-1',
    title: 'Claude 3.7 Sonnet検証レポート',
    content: `最新のClaude 3.7 Sonnetを検証してみました

処理速度：従来比2倍
コスト：60%削減
精度：特に日本語処理が大幅改善

これはゲームチェンジャーです
企業のAI導入がさらに加速します`,
    category: '技術検証',
    hashtags: ['#Claude', '#AI開発', '#検証レポート'],
    authority: 'technical',
    targetTime: '朝9:00-10:00',
    audience: 'engineers'
  },
  {
    id: 'nakai-2',
    title: '今週の開発実績',
    content: `今週完成させたAIツール：

✅ 議事録自動作成システム
✅ 多言語リアルタイム翻訳bot
✅ 画像認識在庫管理ツール

全てノーコードで3日で実装
AIの民主化が進んでいます`,
    category: '開発実績',
    hashtags: ['#AI開発', '#ノーコード', '#実績'],
    authority: 'technical',
    targetTime: '金曜17:00-18:00',
    audience: 'engineers'
  },
  {
    id: 'nakai-3',
    title: 'AIエージェントの本質',
    content: `【AIエージェントの真実】

エージェント＝自律的に動くAI

❌ 単なるチャットボット
⭕ 計画→実行→評価→改善の循環

この違いを理解すると
AIの可能性が100倍広がります

詳細は画像で解説↓`,
    category: '技術解説',
    hashtags: ['#AIエージェント', '#自律AI', '#技術解説'],
    authority: 'technical',
    targetTime: '昼12:00-13:00',
    audience: 'engineers'
  },
  {
    id: 'nakai-4',
    title: 'AI業界動向分析',
    content: `OpenAI、Google、Anthropicの動きを見ると

2025年後半には：
・AGI（汎用人工知能）の片鱗
・マルチモーダルが標準化
・推論特化型AIの台頭

準備できていますか？`,
    category: '業界分析',
    hashtags: ['#AI業界', '#AGI', '#2025年予測'],
    authority: 'industry',
    targetTime: '朝8:00-9:00',
    audience: 'business'
  },
  {
    id: 'nakai-5',
    title: 'RAG実装のコツ',
    content: `RAG（検索拡張生成）を実装する際の
3つのポイント：

1. チャンクサイズは512トークン
2. オーバーラップは20%
3. ベクトルDBはPinecone推奨

これだけで精度が30%向上します`,
    category: '実装ノウハウ',
    hashtags: ['#RAG', '#AI実装', '#精度向上'],
    authority: 'technical',
    targetTime: '午後14:00-15:00',
    audience: 'engineers'
  },

  // 実践的コード・ツール解説
  {
    id: 'nakai-6',
    title: '5行で画像認識',
    content: `たった5行でAI画像認識：

\`\`\`python
from transformers import pipeline
classifier = pipeline("image-classification")
result = classifier("image.jpg")
print(result[0]['label'])
\`\`\`

これで何ができるか想像してみてください`,
    category: 'コード解説',
    hashtags: ['#Python', '#AI', '#画像認識'],
    authority: 'technical',
    targetTime: '午後15:00-16:00',
    audience: 'engineers'
  },
  {
    id: 'nakai-7',
    title: 'GPT-4高速化テクニック',
    content: `GPT-4のレスポンスを3倍速くする方法：

1. プロンプトを構造化
2. システムメッセージを最小化
3. ストリーミング出力を活用

実測値：
Before: 8.2秒
After: 2.7秒

詳細手順をスレッドで解説→`,
    category: 'パフォーマンス',
    hashtags: ['#GPT4', '#高速化', '#最適化'],
    authority: 'technical',
    targetTime: '夜19:00-20:00',
    audience: 'engineers'
  },
  {
    id: 'nakai-8',
    title: 'Next.js × AI統合パターン',
    content: `Next.js 15でAI機能を統合する
3つのベストプラクティス：

1. Server Actionsでストリーミング
2. Route HandlersでAPI設計
3. Middlewareでレート制限

企業案件で実証済みの手法です
実装例を画像で共有↓`,
    category: 'フレームワーク',
    hashtags: ['#NextJS', '#AI統合', '#ベストプラクティス'],
    authority: 'technical',
    targetTime: '夜20:00-21:00',
    audience: 'engineers'
  },

  // ビジネス・戦略系投稿
  {
    id: 'nakai-9',
    title: 'AI導入の企業課題',
    content: `企業のAI導入で見落としがちな3つの課題：

1. データ品質の事前整備
2. 社内リテラシーの格差
3. セキュリティポリシーの更新

技術選定より重要なのは
組織の変革管理です

経営層の皆さん、準備はできていますか？`,
    category: '企業戦略',
    hashtags: ['#AI導入', '#DX', '#組織変革'],
    authority: 'business',
    targetTime: '朝10:00-11:00',
    audience: 'business'
  },
  {
    id: 'nakai-10',
    title: 'AI人材市場の現実',
    content: `AI人材市場の現実（2025年版）

求人数：前年比300%増
平均年収：1200万円
不足数：約30万人

でも求められるのは：
❌ 高度な数学知識
❌ 論文レベルの理解
⭕ 実装力とビジネス感覚

実用性が最重要視される時代です`,
    category: '人材市場',
    hashtags: ['#AI人材', '#転職市場', '#年収'],
    authority: 'business',
    targetTime: '昼12:30-13:30',
    audience: 'business'
  },

  // バイブコーディング関連
  {
    id: 'nakai-11',
    title: 'バイブコーディング開発秘話',
    content: `バイブコーディング開発の裏話

開発期間：18ヶ月
検証した手法：127種類
テストユーザー：284名
成功率：92%

「プログラミングを学ばずに開発する」
この矛盾を解決するのに
最も苦労しました

答えは「対話設計」にありました`,
    category: 'バイブコーディング',
    hashtags: ['#バイブコーディング', '#開発秘話', '#対話設計'],
    authority: 'business',
    targetTime: '夜21:00-22:00',
    audience: 'general'
  },
  {
    id: 'nakai-12',
    title: 'なぜ3週間なのか',
    content: `なぜバイブコーディングは3週間なのか？

理由：学習曲線の分析結果

Week 1: 基礎理解（達成率85%）
Week 2: 実践応用（達成率78%）
Week 3: 収益化実装（達成率74%）

4週目以降は伸び率が鈍化
3週間が最適な学習期間でした

科学的根拠に基づいた設計です`,
    category: 'バイブコーディング',
    hashtags: ['#バイブコーディング', '#3週間', '#学習科学'],
    authority: 'business',
    targetTime: '午後16:00-17:00',
    audience: 'general'
  },

  // 業界洞察・予測
  {
    id: 'nakai-13',
    title: '2025年AI開発トレンド予測',
    content: `2025年下半期のAI開発トレンド予測：

1. ローコード/ノーコードが主流化
2. AIエージェントの企業導入加速
3. マルチモーダルAPIの標準化
4. エッジAIの本格普及

キーワードは「民主化」
プログラマー以外も開発者になる時代`,
    category: 'トレンド予測',
    hashtags: ['#2025年予測', '#AIトレンド', '#民主化'],
    authority: 'industry',
    targetTime: '朝7:00-8:00',
    audience: 'business'
  },
  {
    id: 'nakai-14',
    title: 'AI規制が開発に与える影響',
    content: `EU AI法、米国AI法案の開発への影響分析：

✅ 透明性要求の強化
✅ バイアス監査の義務化
✅ 高リスクAIの制限

対策：
・説明可能AIの実装
・監査ログの自動化
・倫理チェックの組み込み

規制を味方にする開発手法が必要`,
    category: '規制・法律',
    hashtags: ['#AI規制', '#EU AI法', '#コンプライアンス'],
    authority: 'industry',
    targetTime: '朝9:30-10:30',
    audience: 'business'
  },

  // 実験・検証レポート
  {
    id: 'nakai-15',
    title: 'AI開発効率化実験',
    content: `【実験】同じタスクを3つの手法で検証

手法A: 従来のコーディング
→ 時間: 8時間、品質: 85点

手法B: AI支援コーディング
→ 時間: 3時間、品質: 82点

手法C: バイブコーディング
→ 時間: 45分、品質: 88点

結果に驚きました...
詳細データを次のツイートで`,
    category: '実験レポート',
    hashtags: ['#AI実験', '#効率化', '#比較検証'],
    authority: 'technical',
    targetTime: '午後17:00-18:00',
    audience: 'engineers'
  },

  // 教育・メンタリング
  {
    id: 'nakai-16',
    title: 'AI学習の3つの壁',
    content: `AI開発学習でぶつかる3つの壁：

1. 技術の壁（30%の人）
→ 解決: 実用性重視の学習

2. 時間の壁（50%の人）
→ 解決: 効率的なカリキュラム

3. 方向性の壁（90%の人）
→ 解決: メンター制度

3番目が最も重要
一人で迷うのは時間の無駄です`,
    category: '教育・学習',
    hashtags: ['#AI学習', '#挫折しない方法', '#メンター'],
    authority: 'business',
    targetTime: '夜19:30-20:30',
    audience: 'general'
  },

  // リーダーシップ・組織論
  {
    id: 'nakai-17',
    title: 'AI時代のチーム運営',
    content: `AI時代のチーム運営で変わったこと：

Before:
・個人スキルが成果を決定
・専門分化が効率的
・管理型リーダーシップ

After:
・AIとの協働力が鍵
・横断的思考が重要
・促進型リーダーシップ

マネージャーの皆さん、
チーム運営を見直す時期です`,
    category: 'チーム運営',
    hashtags: ['#チーム運営', '#AIリーダーシップ', '#組織変革'],
    authority: 'business',
    targetTime: '朝11:00-12:00',
    audience: 'business'
  },

  // 個人ブランディング
  {
    id: 'nakai-18',
    title: 'AI開発者の価値創造',
    content: `AI開発者が価値を生み出す3つの視点：

1. 技術実装力（TABLE STAKES）
2. ビジネス理解力（DIFFERENTIATOR）
3. 人間洞察力（GAME CHANGER）

AIが普及するほど
3番目の重要性が高まります

技術だけでは差別化できない時代`,
    category: 'キャリア',
    hashtags: ['#AI開発者', '#価値創造', '#差別化'],
    authority: 'business',
    targetTime: '夜18:00-19:00',
    audience: 'engineers'
  },

  // 質問・議論喚起
  {
    id: 'nakai-19',
    title: 'AI開発の未来についての質問',
    content: `皆さんに質問です

10年後、プログラマーという職業は
どう変化していると思いますか？

私の予想：
・コードを書く人 → AIを操る人
・実装者 → アーキテクト
・技術者 → プロデューサー

皆さんの意見を聞かせてください
リプで教えてください`,
    category: '質問・議論',
    hashtags: ['#プログラマーの未来', '#10年後予測', '#意見募集'],
    authority: 'industry',
    targetTime: '夜20:30-21:30',
    audience: 'engineers'
  },

  // 感謝・コミュニティ
  {
    id: 'nakai-20',
    title: 'AI開発コミュニティへの感謝',
    content: `日本のAI開発コミュニティの
レベルの高さに日々驚かされます

・技術への探究心
・知識共有の文化
・実用性への意識

世界でも屈指の質だと思います

このコミュニティの一員として
バイブコーディングを通じて
さらなる発展に貢献したい

一緒に日本のAI開発を盛り上げましょう🇯🇵`,
    category: 'コミュニティ',
    hashtags: ['#AI開発コミュニティ', '#日本', '#一緒に'],
    authority: 'business',
    targetTime: '日曜20:00-21:00',
    audience: 'general'
  },

  // 技術検証・ベンチマーク系
  {
    id: 'nakai-21',
    title: 'AI推論速度ベンチマーク',
    content: `【ベンチマーク】各種AI推論速度比較

同一タスク（1000行のコード生成）で計測：

Claude 3.5 Sonnet: 2.3秒
GPT-4o: 3.1秒  
Gemini Pro: 4.7秒
Llama 3.1: 5.2秒

クラウドファーストの時代
選択基準は速度×精度×コスト

環境：M3 Max、16GB RAM`,
    category: 'ベンチマーク',
    hashtags: ['#AIベンチマーク', '#推論速度', '#性能比較'],
    authority: 'technical',
    targetTime: '火曜10:00-11:00',
    audience: 'engineers'
  },
  {
    id: 'nakai-22',
    title: 'プロンプトエンジニアリング実験',
    content: `【実験結果】プロンプト長が精度に与える影響

短文（50文字以下）: 精度62%
中文（100文字前後）: 精度84%
長文（200文字以上）: 精度71%

結論：適度な文脈が最も効果的
過度な詳細は逆効果

コンテキストの最適化が
実装者の腕の見せ所`,
    category: 'プロンプト研究',
    hashtags: ['#プロンプトエンジニアリング', '#実験', '#最適化'],
    authority: 'technical',
    targetTime: '金曜16:00-17:00',
    audience: 'engineers'
  },

  // マネジメント・組織論
  {
    id: 'nakai-23',
    title: 'AI導入のロードマップ',
    content: `企業のAI導入で成功する3段階アプローチ

【Phase 1】既存業務の効率化（3ヶ月）
→ 定型作業の自動化
→ ROI測定可能な領域から

【Phase 2】新規サービス開発（6ヶ月）
→ AI機能の顧客提供
→ 差別化要素の構築

【Phase 3】組織変革（12ヶ月）
→ AI活用文化の醸成
→ 人材育成とスキルシフト

段階的推進が成功の鍵`,
    category: 'AI導入戦略',
    hashtags: ['#AI導入', '#ロードマップ', '#組織変革'],
    authority: 'business',
    targetTime: '月曜9:00-10:00',
    audience: 'business'
  },
  {
    id: 'nakai-24',
    title: 'AI時代のエンジニア採用',
    content: `AI時代のエンジニア採用で重視すべき能力

【従来重視】
・特定言語の深い知識
・アルゴリズムの理解
・システム設計スキル

【今後重視】
・AI活用の実装力
・ビジネス課題の理解
・継続学習能力

技術は陳腐化する
学び続ける姿勢が最も価値ある資産

採用担当者の皆さん、基準更新を`,
    category: 'エンジニア採用',
    hashtags: ['#エンジニア採用', '#AI時代', '#継続学習'],
    authority: 'business',
    targetTime: '木曜11:00-12:00',
    audience: 'business'
  },

  // 実装パターン・アーキテクチャ
  {
    id: 'nakai-25',
    title: 'マイクロサービス×AI統合',
    content: `マイクロサービスにAI機能を統合する
3つのアーキテクチャパターン

【パターン1】AI専用サービス
→ 独立性高、スケール容易
→ 複雑な処理に適用

【パターン2】埋め込み型
→ レスポンス高速、単純
→ 軽量な推論処理向け

【パターン3】ハイブリッド
→ 柔軟性とパフォーマンス両立
→ 段階的移行に最適

設計思想で性能が決まる`,
    category: 'アーキテクチャ',
    hashtags: ['#マイクロサービス', '#AI統合', '#アーキテクチャ'],
    authority: 'technical',
    targetTime: '水曜14:00-15:00',
    audience: 'engineers'
  },
  {
    id: 'nakai-26',
    title: 'AI API設計のベストプラクティス',
    content: `AI APIを本番運用で学んだ設計原則

1. **冪等性の確保**
   同じ入力は同じ出力を保証

2. **レート制限の実装**
   コスト爆発とDDoS対策

3. **非同期処理の活用**
   重い処理はジョブキューに

4. **エラーハンドリング**
   AIの不確実性を前提とした設計

5. **監視・ログ設計**
   デバッグ可能な情報蓄積

運用経験がAPIデザインを決める`,
    category: 'API設計',
    hashtags: ['#API設計', '#ベストプラクティス', '#本番運用'],
    authority: 'technical',
    targetTime: '火曜15:00-16:00',
    audience: 'engineers'
  },

  // データサイエンス・機械学習
  {
    id: 'nakai-27',
    title: 'データ品質がAI精度に与える影響',
    content: `【検証】データ品質とAI精度の相関

高品質データ（ノイズ<5%）：精度92%
中品質データ（ノイズ10-15%）：精度78%
低品質データ（ノイズ>20%）：精度54%

データクリーニングに投資した1時間は
モデル調整10時間に匹敵する効果

「Garbage In, Garbage Out」
この原則は永遠に不変

前処理こそ真のスキル`,
    category: 'データサイエンス',
    hashtags: ['#データ品質', '#AI精度', '#前処理'],
    authority: 'technical',
    targetTime: '月曜14:00-15:00',
    audience: 'engineers'
  },
  {
    id: 'nakai-28',
    title: 'ファインチューニングの効果検証',
    content: `【実験】事前学習 vs ファインチューニング

汎用タスク：
事前学習モデル 85% vs FT 87%（微差）

ドメイン特化タスク：
事前学習モデル 67% vs FT 91%（大差）

コスト比較：
事前学習：$0.02/1K tokens
FT：$0.08/1K tokens + 初期費用

専門領域ほどFTの価値が高い
投資判断は用途次第`,
    category: 'ファインチューニング',
    hashtags: ['#ファインチューニング', '#コスト効果', '#ドメイン特化'],
    authority: 'technical',
    targetTime: '金曜10:00-11:00',
    audience: 'engineers'
  },

  // 倫理・責任あるAI
  {
    id: 'nakai-29',
    title: 'AI倫理の実装ガイドライン',
    content: `責任あるAI開発の5原則

1. **透明性**：判断根拠の可視化
2. **公平性**：バイアス検出と除去
3. **安全性**：リスク評価と対策
4. **プライバシー**：データ保護の徹底
5. **人間中心**：最終決定権は人間

技術的実装だけでなく
組織的なガバナンス体制も必要

倫理は制約ではなく競争優位の源泉`,
    category: 'AI倫理',
    hashtags: ['#AI倫理', '#責任あるAI', '#ガバナンス'],
    authority: 'business',
    targetTime: '木曜9:00-10:00',
    audience: 'business'
  },
  {
    id: 'nakai-30',
    title: 'AI監査の自動化戦略',
    content: `AI監査を自動化する3層アプローチ

【Layer 1】リアルタイム監視
→ 出力の異常検知
→ バイアス指標の追跡

【Layer 2】定期的評価
→ モデル性能の劣化検知
→ データドリフトの監視

【Layer 3】包括的監査
→ 規制要件への適合確認
→ 倫理ガイドラインの遵守

自動化により継続的な品質保証を実現
人手監査は戦略的判断に集中`,
    category: 'AI監査',
    hashtags: ['#AI監査', '#自動化', '#品質保証'],
    authority: 'technical',
    targetTime: '水曜10:00-11:00',
    audience: 'engineers'
  },

  // スタートアップ・起業論
  {
    id: 'nakai-31',
    title: 'AI起業の成功パターン',
    content: `AI起業で成功する3つのパターン分析

【パターン1】技術特化型
→ 新アルゴリズムの実用化
→ 高い参入障壁、技術リスク大

【パターン2】応用特化型  
→ 既存技術の業界特化応用
→ 市場理解が成功の鍵

【パターン3】プラットフォーム型
→ AI活用の基盤提供
→ ネットワーク効果が競争優位

バイブコーディングは【パターン2】
教育×AIの専門特化で勝負`,
    category: 'AI起業',
    hashtags: ['#AI起業', '#成功パターン', '#バイブコーディング'],
    authority: 'business',
    targetTime: '土曜9:00-10:00',
    audience: 'business'
  },
  {
    id: 'nakai-32',
    title: 'AI投資の判断基準',
    content: `AI投資で重視すべき5つの判断軸

1. **技術の優位性**：差別化可能な技術か
2. **市場の成熟度**：ニーズは顕在化しているか
3. **チームの実装力**：技術を事業化できるか
4. **データアクセス**：継続的な学習が可能か
5. **規制リスク**：将来の規制変化に対応可能か

多くの投資家がまだ
技術面のみで判断している

事業化力が最も重要な要素`,
    category: 'AI投資',
    hashtags: ['#AI投資', '#判断基準', '#事業化力'],
    authority: 'business',
    targetTime: '火曜11:00-12:00',
    audience: 'business'
  },

  // 国際比較・競争分析
  {
    id: 'nakai-33',
    title: '日米中AI競争の現在地',
    content: `【2025年版】日米中AI競争分析

【アメリカ】
強み：基盤技術、資金力、人材
弱み：規制強化、中国依存

【中国】  
強み：データ量、実装速度、政府支援
弱み：国際制裁、技術輸出規制

【日本】
強み：製造業との融合、品質重視
弱み：スケール、投資額、人材

日本の勝ち筋は「質×実用性」
バイブコーディングもこの路線`,
    category: '国際競争',
    hashtags: ['#日米中AI競争', '#日本の勝ち筋', '#質と実用性'],
    authority: 'industry',
    targetTime: '月曜11:00-12:00',
    audience: 'business'
  },
  {
    id: 'nakai-34',
    title: 'シリコンバレーの最新動向',
    content: `シリコンバレー現地レポート

注目トレンド：
1. マルチモーダルAIの実用化加速
2. エッジAIへの投資集中
3. AI専用チップの競争激化
4. 規制対応ツールの需要増

投資の焦点が
「技術開発」から「実装・運用」へシフト

日本企業にとってはチャンス
品質とサービスで差別化可能`,
    category: '海外動向',
    hashtags: ['#シリコンバレー', '#最新動向', '#投資トレンド'],
    authority: 'industry',
    targetTime: '金曜9:00-10:00',
    audience: 'business'
  },

  // 教育・人材育成
  {
    id: 'nakai-35',
    title: 'AI教育カリキュラム設計論',
    content: `効果的なAI教育カリキュラムの3原則

【原則1】実践ファースト
理論よりも実装を重視
動くものを作る経験が学習効果を最大化

【原則2】段階的複雑性
簡単なタスクから複雑なシステムへ
成功体験の積み重ねが継続を生む

【原則3】ビジネス直結
技術習得と収益化を同時進行
金銭的インセンティブが学習動機を維持

バイブコーディングはこの3原則を体現`,
    category: 'AI教育',
    hashtags: ['#AI教育', '#カリキュラム設計', '#3原則'],
    authority: 'business',
    targetTime: '日曜10:00-11:00',
    audience: 'general'
  },
  {
    id: 'nakai-36',
    title: 'エンジニアスキルの変遷',
    content: `過去20年のエンジニアスキル変遷

【2005年】サーバサイド重視
→ LAMP、Java、.NET

【2010年】フロントエンド台頭  
→ JavaScript、SPA、モバイル

【2015年】インフラ自動化
→ クラウド、Docker、DevOps

【2020年】データドリブン
→ 機械学習、ビッグデータ

【2025年】AI統合時代
→ プロンプト、ノーコード、AI協働

次の5年はAI活用力が差別化要因`,
    category: 'スキル変遷',
    hashtags: ['#スキル変遷', '#20年の歴史', '#AI協働'],
    authority: 'industry',
    targetTime: '土曜14:00-15:00',
    audience: 'engineers'
  },

  // 質問・議論・コミュニティ
  {
    id: 'nakai-37',
    title: 'AI倫理に関する議論',
    content: `皆さんの意見を聞かせてください

「AIが人間レベルの創作能力を持った時
クリエイターの職業的価値はどう変化するか？」

私の予想：
・手作業 → アート価値向上
・アイデア → より重要に
・実行力 → AI協働が標準

でも正解はまだ見えない
多様な視点で議論したいです

リプライで意見をお聞かせください`,
    category: '議論・質問',
    hashtags: ['#AI倫理議論', '#クリエイター', '#意見募集'],
    authority: 'industry',
    targetTime: '日曜19:00-20:00',
    audience: 'general'
  },
  {
    id: 'nakai-38',
    title: 'コミュニティからの質問回答',
    content: `今週寄せられた質問にお答えします

Q: 「AIエンジニアに必要な数学レベルは？」

A: 用途によって大きく異なります

【研究開発】: 大学院レベルの数学
【実装・応用】: 高校数学+統計基礎  
【AI活用】: 数学不要、論理思考力

バイブコーディングは【AI活用】
数学よりもビジネス感覚が重要

他にも質問があれば気軽にどうぞ`,
    category: 'Q&A',
    hashtags: ['#質問回答', '#数学レベル', '#AI活用'],
    authority: 'technical',
    targetTime: '金曜18:00-19:00',
    audience: 'general'
  },

  // メタ・自己言及
  {
    id: 'nakai-39',
    title: 'このアカウントの運用方針',
    content: `@nakai_kento_ai の発信方針

【技術的権威性】40%
→ 検証レポート、実装ノウハウ

【ビジネス洞察】30%  
→ 市場分析、戦略提案

【業界リーダーシップ】20%
→ トレンド予測、議論提起

【コミュニティ貢献】10%
→ 質問回答、経験共有

技術者だけでなく
ビジネスパーソンにも価値提供

建設的な議論を大切にしています`,
    category: 'メタ・運用',
    hashtags: ['#運用方針', '#発信内容', '#価値提供'],
    authority: 'business',
    targetTime: '月曜18:00-19:00',
    audience: 'general'
  },
  {
    id: 'nakai-40',
    title: 'フォロワーへの感謝と今後',
    content: `フォロワーの皆様への感謝

技術的な投稿にも関わらず
多くの方にフォローいただき
建設的な議論ができています

AI業界の健全な発展には
多様な視点と継続的な議論が必要

今後も：
・客観的なデータに基づく分析
・実践的な価値提供
・業界全体の底上げ

を心がけて発信を続けます

一緒に日本のAI産業を盛り上げていきましょう`,
    category: 'コミュニティ',
    hashtags: ['#感謝', '#AI産業', '#一緒に'],
    authority: 'business',
    targetTime: '日曜21:00-22:00',
    audience: 'general'
  }
];

export const nakaiCategories = [
  'すべて',
  'ローンチ告知',
  'セミナー告知',
  '市場分析',
  '技術検証',
  '開発実績',
  '技術解説',
  '業界分析',
  '実装ノウハウ',
  'コード解説',
  'パフォーマンス',
  'フレームワーク',
  '企業戦略',
  '人材市場',
  'バイブコーディング',
  'トレンド予測',
  '規制・法律',
  '実験レポート',
  '教育・学習',
  'チーム運営',
  'キャリア',
  '質問・議論',
  'コミュニティ',
  'ベンチマーク',
  'プロンプト研究',
  'AI導入戦略',
  'エンジニア採用',
  'アーキテクチャ',
  'API設計',
  'データサイエンス',
  'ファインチューニング',
  'AI倫理',
  'AI監査',
  'AI起業',
  'AI投資',
  '国際競争',
  '海外動向',
  'AI教育',
  'スキル変遷',
  '議論・質問',
  'Q&A',
  'メタ・運用'
];