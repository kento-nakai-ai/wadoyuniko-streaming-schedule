# OBSコメント表示設定ガイド

## 🎥 YouTubeコメントを配信画面に表示する方法

### 必要なもの
- OBS Studio（最新版）
- YouTube Studioアクセス権
- Chrome/Edgeブラウザ

## 📋 設定手順

### Step 1: YouTube ChatのポップアウトURL取得

#### 方法A: YouTube Studioから取得
1. YouTube Studioにログイン
2. 「ライブ配信」→「ライブ配信を開始」
3. チャット欄の右上「⋮」メニュー
4. 「チャットをポップアウト」選択
5. 新しいウィンドウのURLをコピー

#### 方法B: 直接URL作成
```
https://www.youtube.com/live_chat?is_popout=1&v=VIDEO_ID

例：配信URL が https://youtube.com/live/3PvXS1DN3Ec の場合
→ https://www.youtube.com/live_chat?is_popout=1&v=3PvXS1DN3Ec
```

### Step 2: OBSにブラウザソース追加

1. **OBSを開く**
2. **ソース追加**
   - 「+」ボタンクリック
   - 「ブラウザ」選択
   - 名前を「YouTubeコメント」に設定

3. **プロパティ設定**
```
URL: [コピーしたチャットURL]
幅: 400
高さ: 600
カスタムCSS: [下記参照]
```

### Step 3: カスタムCSS適用

#### ベーシック版（背景透過）
```css
/* 背景透過 */
body {
  background-color: rgba(0, 0, 0, 0) !important;
  overflow: hidden !important;
}

/* ヘッダー非表示 */
#header, #input-panel {
  display: none !important;
}

/* メッセージエリアの調整 */
yt-live-chat-renderer {
  background-color: transparent !important;
}

/* メッセージの背景 */
yt-live-chat-text-message-renderer {
  background-color: rgba(0, 0, 0, 0.7) !important;
  color: white !important;
  padding: 8px !important;
  margin: 4px 0 !important;
  border-radius: 8px !important;
}

/* ユーザー名の色 */
yt-live-chat-author-chip {
  background-color: transparent !important;
  color: #4FC3F7 !important;
  font-weight: bold !important;
}
```

#### プロ版（アニメーション付き）
```css
/* 背景とアニメーション */
body {
  background-color: rgba(0, 0, 0, 0) !important;
  overflow: hidden !important;
}

/* ヘッダー・入力欄を非表示 */
#header, #input-panel, yt-live-chat-header-renderer {
  display: none !important;
}

/* チャットエリア */
yt-live-chat-renderer {
  background-color: transparent !important;
}

/* メッセージにアニメーション */
yt-live-chat-text-message-renderer {
  background: linear-gradient(90deg, rgba(79,195,247,0.2) 0%, rgba(0,0,0,0.8) 100%) !important;
  color: white !important;
  padding: 10px !important;
  margin: 6px !important;
  border-radius: 12px !important;
  border-left: 4px solid #4FC3F7 !important;
  animation: slideIn 0.5s ease !important;
  font-size: 16px !important;
}

/* スライドインアニメーション */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* ユーザー名 */
#author-name {
  color: #FFD700 !important;
  font-weight: bold !important;
  font-size: 14px !important;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important;
}

/* メッセージテキスト */
#message {
  color: #FFFFFF !important;
  font-size: 16px !important;
  line-height: 1.4 !important;
}

/* スーパーチャット */
yt-live-chat-paid-message-renderer {
  background: linear-gradient(90deg, #FFD700 0%, #FFA000 100%) !important;
  border: 2px solid #FFD700 !important;
  animation: glow 2s ease-in-out infinite !important;
}

/* 光るエフェクト */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 215, 0, 1);
  }
}

/* メンバーシップ */
yt-live-chat-membership-item-renderer {
  background: linear-gradient(90deg, #4CAF50 0%, #45A049 100%) !important;
  border: 2px solid #4CAF50 !important;
  padding: 12px !important;
  border-radius: 12px !important;
}

/* モデレーターメッセージ */
yt-live-chat-moderator-message-renderer {
  background-color: rgba(33, 150, 243, 0.3) !important;
  border: 2px solid #2196F3 !important;
}
```

### Step 4: 配信画面でのレイアウト

#### 推奨レイアウト1: サイドバー表示
```
┌─────────────────────┬──────────┐
│                     │          │
│    メイン画面        │ コメント │
│   (VSCode等)        │   欄     │
│                     │          │
├─────────────────────┼──────────┤
│    ワイプ(顔出し)    │          │
└─────────────────────┴──────────┘
```

#### 推奨レイアウト2: 下部表示
```
┌──────────────────────────────┐
│                              │
│        メイン画面             │
│                              │
├──────────────────────────────┤
│      コメント欄（横長）        │
└──────────────────────────────┘
```

### Step 5: フィルター設定

#### スパム対策
1. YouTube Studio → 設定 → コミュニティ
2. 「自動フィルタ」を「厳格」に設定
3. NGワードリスト追加

#### モデレーター設定
```javascript
// モデレーター権限付与
1. チャンネル設定 → コミュニティ → モデレーター
2. 信頼できるユーザーを追加
3. タイムアウト・削除権限を付与
```

## 🎨 デザインカスタマイズ

### 配信テーマ別CSS

#### ダークテーマ
```css
yt-live-chat-text-message-renderer {
  background: rgba(20, 20, 20, 0.9) !important;
  border: 1px solid #333 !important;
}
```

#### ネオンテーマ
```css
yt-live-chat-text-message-renderer {
  background: rgba(0, 0, 0, 0.8) !important;
  border: 2px solid #00FFFF !important;
  box-shadow: 0 0 10px #00FFFF !important;
}
```

#### パステルテーマ
```css
yt-live-chat-text-message-renderer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  opacity: 0.9 !important;
}
```

## 🔧 トラブルシューティング

### コメントが表示されない
```
原因1: URLが間違っている
→ ポップアウトURLを再確認

原因2: CSSが効いていない
→ カスタムCSSを一度削除して再入力

原因3: ブラウザソースのサイズ
→ 幅400px、高さ600px以上に設定
```

### 文字が見づらい
```css
/* フォントサイズ調整 */
#message {
  font-size: 18px !important;
  font-weight: bold !important;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8) !important;
}
```

### 更新が遅い
```
設定 → 詳細設定 → ブラウザソース
「ページを再読み込み」間隔: 1000ms
```

## 💡 応用テクニック

### 特定ユーザーをハイライト
```css
/* VIPユーザーの強調表示 */
yt-live-chat-text-message-renderer[author-name="特定のユーザー名"] {
  background: gold !important;
  animation: vipGlow 1s infinite !important;
}
```

### 絵文字を大きく表示
```css
.emoji {
  font-size: 24px !important;
}
```

### スーパーチャット読み上げ連携
```javascript
// StreamlabsやOBS.Liveと連携
// 音声読み上げ設定で自動読み上げ
```

## 📱 モバイル配信対応

### Streamlabs OBS Mobile
1. アプリをダウンロード
2. Widget → Chat Box追加
3. YouTube連携
4. 自動でコメント表示

## 🎬 配信中の操作

### ショートカットキー設定
```
Ctrl+1: コメント表示/非表示
Ctrl+2: コメントサイズ変更
Ctrl+3: コメントクリア
```

### シーン別設定
- **オープニング**: コメント非表示
- **メイン配信**: コメント表示
- **画面共有時**: コメント縮小
- **エンディング**: コメント拡大

## ✅ 最終チェックリスト

### 配信前テスト
- [ ] 限定公開でテスト配信
- [ ] コメント表示確認
- [ ] CSSが適用されているか
- [ ] 文字サイズは適切か
- [ ] アニメーションは動作するか

### 本番配信
- [ ] モデレーター待機
- [ ] NGワード設定完了
- [ ] コメント欄の位置調整
- [ ] 音声との干渉確認

これで視聴者のコメントを画面に表示して、インタラクティブな配信が可能になります！🎉