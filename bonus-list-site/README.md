# バイブコーディングスクール特典リストサイト

## 概要
バイブコーディングスクールの104個の特典を紹介する静的サイトです。

## ファイル構成
```
bonus-list-site/
├── index.html        # メインページ
└── README.md        # このファイル
```

## 特徴
- **レスポンシブデザイン**: PC・タブレット・スマホ対応
- **インタラクティブUI**: ホバーエフェクト、スムーススクロール
- **カテゴリ別表示**: 8つのカテゴリで整理
- **特典統計**: 総数104個、総額840万円相当
- **配布タイミング**: 4段階の特典配布戦略を表示

## デプロイ方法

### GitHub Pages
1. このフォルダをGitHubリポジトリにプッシュ
2. Settings → Pages → Source を設定
3. `https://[username].github.io/[repository]/bonus-list-site/` でアクセス

### Vercel
```bash
# Vercelにデプロイ
vercel --prod
```

### Netlify
1. Netlifyにドラッグ&ドロップ
2. または以下のコマンド:
```bash
netlify deploy --prod --dir=.
```

### ローカルプレビュー
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# ブラウザで開く
open http://localhost:8000
```

## カスタマイズ

### 色の変更
```javascript
// index.html内のtailwind.configで変更
colors: {
    primary: '#6366f1',    // メインカラー
    secondary: '#8b5cf6',  // サブカラー
    accent: '#f59e0b',     // アクセントカラー
}
```

### 特典の追加・編集
HTMLファイル内の各セクションで特典カードを編集:
```html
<div class="bonus-card bg-white rounded-lg p-5 shadow hover:shadow-xl">
    <h3 class="font-bold text-lg mb-2">特典タイトル</h3>
    <p class="text-sm text-gray-600">特典の説明</p>
</div>
```

## SEO対策
- メタタグ設定済み
- 構造化データ対応可能
- OGP設定追加可能

## パフォーマンス
- CDN利用（Tailwind CSS）
- 画像なし（絵文字使用）
- 軽量設計（50KB以下）

## ブラウザ対応
- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）
- モバイルブラウザ対応

## ライセンス
© 2025 バイブコーディングスクール

---

**更新日**: 2025年1月
**バージョン**: 1.0.0