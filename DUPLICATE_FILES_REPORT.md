# 重複ファイル整理レポート

## 📊 重複ファイルの状況分析

### 1. README ファイルの重複
**現在の状況**: 26個のREADMEファイルが存在

#### 主な重複パターン:
- `/team/` と `/teams/` に同じ内容のREADMEが存在
- `/team/present/` に複数のREADME（README-present.md, README-present-final.md）
- 各サブフォルダに個別のREADME

#### 推奨される統合:
```
✅ 保持すべきファイル:
- /teams/[各チーム]/README.md （最新のチーム別README）
- /TEAMS_README.md （マスターREADME）

⚠️ 統合候補:
- /team/present/README-present.md → /teams/content/README.md に統合
- /team/present/README-present-final.md → /teams/content/README.md に統合
```

---

### 2. セミナー関連ファイルの重複
**現在の状況**: 24個のセミナー関連ファイル

#### 重複している内容:
```
/docs/seminar-slides/
├── detailed-seminar-structure.md
├── seminar-script.md
└── updated-seminar-structure.md

/seminar/
├── integrated-seminar-structure.md
├── seminar-title.md
└── seminar-title-voting.md

/teams/content/seminar-slides/ （コピー）
└── [同じファイル群]
```

#### 推奨される統合:
```
✅ 最新版を保持:
- /teams/content/seminar-slides/ （統合先）
  - updated-seminar-structure.md （最新のスライド構成）
  - seminar-script.md （最新の台本）

⚠️ アーカイブ候補:
- /docs/seminar-slides/detailed-seminar-structure.md （古いバージョン）
- /seminar/integrated-seminar-structure.md （重複内容）
```

---

### 3. 製品（Vibecoding）関連ファイルの重複
**現在の状況**: 24個の製品関連ファイル

#### 重複パターン:
```
/docs/product/
├── product.md
├── vibecoding.md
├── vibecoding2.md
└── vibecoding-context.md

/teams/docs/product/ （完全コピー）
└── [同じファイル群]

/teams/content/present/
├── bonus-01-vibecoding-intro.md
├── bonus-02-vibecoding-main-seminar.md
└── vibecoding-bonus-master-list.md
```

#### 推奨される統合:
```
✅ 最新版を保持:
- /teams/docs/product/service-comparison.md （今回作成の最新版）
- /teams/docs/product/vibecoding-context.md （最も詳細な版）

⚠️ 統合候補:
- vibecoding.md + vibecoding2.md → vibecoding-context.md に統合済み
- product.md の内容 → service-comparison.md に統合済み
```

---

### 4. タスク・進捗管理の重複
**現在の状況**: 複数の管理システムが並行

#### 重複している管理システム:
```
/docs/task/
/docs/tasks/
/docs/progress-management/
/docs/kpi-dashboard/
/teams/pm/kpi-dashboard/
/teams/pm/progress-management/
```

#### 推奨される統合:
```
✅ 統一先:
- /teams/pm/ 配下に全て統合
  - kpi-dashboard/ （KPI管理）
  - progress-management/ （進捗管理）
  - tasks/ （タスク管理）
```

---

## 🔄 移行状況の確認

### ✅ 完了した移行
1. **チーム別フォルダ構造** (`/teams/`)
   - pm/
   - content/
   - marketing/
   - design/
   - live/
   - x/
   - docs/

2. **各チームのREADME作成**
   - 各チームフォルダに詳細なREADMEを配置

3. **Webダッシュボード**
   - /app/teams/page.tsx
   - 各チームの詳細ページ

### ⚠️ 未確認の移行
1. **販売スクリプト** (`/docs/sales-scripts/`)
   - Manuel/配下の詳細ファイル群の移行状況
   
2. **議事録** (`/docs/minutes/`)
   - 全ての議事録の移行確認が必要

3. **特典コンテンツ** (`/team/present/bonuses/`)
   - 多数の特典ファイルの移行状況

---

## 📋 推奨アクション（削除は保留）

### Phase 1: 確認作業
1. [ ] `/teams/` フォルダ内の全ファイルリストを作成
2. [ ] 元フォルダ（`/docs/`, `/team/`, `/seminar/`）との差分確認
3. [ ] 重要ファイルの移行漏れチェック

### Phase 2: 整理作業（削除なし）
1. [ ] 重複ファイルに `_old` サフィックスを追加
2. [ ] 移行済みファイルリストを作成
3. [ ] 未移行ファイルリストを作成

### Phase 3: 最終確認
1. [ ] チームメンバーに移行完了を確認
2. [ ] 必要なファイルへのアクセスを確認
3. [ ] バックアップの作成

---

## 📁 ディレクトリ整理状況

### 現在の構造（簡略版）
```
/wadoyuniko/
├── /docs/ （旧構造 - 保持中）
├── /team/ （旧構造 - 保持中）
├── /seminar/ （旧構造 - 保持中）
├── /teams/ （新構造 - アクティブ）
│   ├── /pm/
│   ├── /content/
│   ├── /marketing/
│   ├── /design/
│   ├── /live/
│   ├── /x/
│   └── /docs/
└── /app/teams/ （Webインターフェース）
```

### 重複ファイル数の概要
- **README系**: 26ファイル → 10ファイルに統合可能
- **セミナー系**: 24ファイル → 8ファイルに統合可能
- **製品系**: 24ファイル → 6ファイルに統合可能
- **管理系**: 約30ファイル → 15ファイルに統合可能

---

## ⚠️ 注意事項

1. **削除は保留中** - 全ての移行が確認されるまで削除作業は実施しない
2. **バックアップ推奨** - 整理作業前に全体のバックアップを推奨
3. **段階的移行** - チームごとに段階的に移行を確認
4. **リンクの更新** - 内部リンクの更新が必要な場合がある

---

*作成日: 2025年1月12日*
*ステータス: 削除保留中・確認作業継続中*