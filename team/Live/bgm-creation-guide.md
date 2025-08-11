# Suno AI BGM作成ガイド

## 🎵 配信用BGM制作計画

### 必要なBGM一覧（全20曲）

## 📋 BGMカテゴリと用途

### 1. オープニング用（4曲 × 3分）
**雰囲気**: アップテンポ、ワクワク感
```
曲名案:
- "AI Journey Begins"
- "Code & Create"
- "Digital Dawn"
- "Tech Adventure"

プロンプト例：
"Upbeat electronic music, 120-130 BPM, positive energy, 
tech podcast intro style, modern synth sounds, 
building excitement, no vocals"
```

### 2. 作業用BGM（8曲 × 5分）
**雰囲気**: ローファイ、集中できる
```
曲名案:
- "Coding Lofi Mix 1-8"

プロンプト例：
"Lofi hip hop beats, 70-80 BPM, study music, 
soft piano, vinyl crackle, rain sounds, 
concentration music, minimal, no vocals"
```

### 3. 休憩時間用（4曲 × 3分）
**雰囲気**: チル、リラックス
```
曲名案:
- "Break Time Chill"
- "5 Minute Meditation"
- "Coffee Break Vibes"
- "Pause & Breathe"

プロンプト例：
"Chill ambient music, 60-70 BPM, relaxing, 
soft pads, nature sounds, meditation style, 
peaceful atmosphere, no vocals"
```

### 4. エンディング用（4曲 × 3分）
**雰囲気**: 感動的、達成感
```
曲名案:
- "Mission Complete"
- "See You Tomorrow"
- "Code Well Done"
- "Until Next Stream"

プロンプト例：
"Emotional orchestral electronic, 100-110 BPM, 
uplifting ending, achievement feeling, 
cinematic style, fade out ending, no vocals"
```

## 🎼 Suno AI 使用手順

### アカウント作成
1. https://www.suno.ai にアクセス
2. Googleアカウントでサインイン
3. 無料プラン: 50クレジット/日（約10曲）

### 曲の生成方法
```
1. "Create" ボタンクリック
2. "Custom Mode" 選択
3. プロンプト入力
4. スタイル指定:
   - Electronic
   - Lofi
   - Ambient
   - Orchestral
5. 長さ指定: 最大4分
6. "Create" 実行
```

### 効率的な生成テクニック
```javascript
// バッチ生成スクリプト（概念）
const prompts = [
  {
    category: "opening",
    style: "electronic upbeat",
    bpm: "120-130",
    duration: "3:00"
  },
  // ... 他の曲設定
];

// 1日5曲ペースで4日間で完成
```

## 🎚 音量・音質調整

### Audacity での後処理
```
1. ノーマライズ
   - ピーク: -3dB
   - 全曲統一

2. フェードイン/アウト
   - 開始: 2秒
   - 終了: 3秒

3. ループ対応
   - シームレス編集
   - クロスフェード
```

### OBS での音量設定
```
BGM音源: -20dB ~ -15dB
マイク: 0dB
デスクトップ音声: -10dB

配信中の調整:
- 説明時: BGM -25dB
- 作業時: BGM -20dB
- 休憩時: BGM -15dB
```

## 📂 ファイル管理

### フォルダ構成
```
/streaming-bgm/
├── /opening/
│   ├── opening_01_ai_journey.mp3
│   ├── opening_02_code_create.mp3
│   └── ...
├── /working/
│   ├── lofi_coding_01.mp3
│   ├── lofi_coding_02.mp3
│   └── ...
├── /break/
│   ├── break_chill_01.mp3
│   └── ...
└── /ending/
    ├── ending_complete_01.mp3
    └── ...
```

### メタデータ設定
```
タイトル: [用途]_[番号]_[曲名]
アーティスト: Suno AI × wadoyuniko
アルバム: AI Coding Stream BGM
ジャンル: Electronic/Ambient
年: 2024
```

## 🎵 プロンプト集

### 高品質プロンプトテンプレート

#### オープニング
```
"Energetic tech podcast intro music, 
Electronic genre, 125 BPM, 
Major key for positive vibes,
Modern synthesizers and digital drums,
Building energy with layers,
3 minutes duration,
No vocals, instrumental only,
Suitable for YouTube streaming"
```

#### コーディング作業用
```
"Lofi hip hop for programming,
Soft jazz piano chords,
Subtle vinyl crackle effect,
Rain ambience in background,
75 BPM relaxed tempo,
Minor key for focus,
5 minutes loop-friendly,
No vocals, concentration music"
```

#### 休憩用
```
"Ambient meditation music,
Soft pad sounds and nature,
Ocean waves or rain sounds,
65 BPM very slow tempo,
Ethereal and floating feeling,
3 minutes duration,
No vocals, pure relaxation"
```

#### エンディング
```
"Uplifting outro music,
Orchestral electronic hybrid,
110 BPM moderate tempo,
Major key resolution,
Cinematic achievement feeling,
Fade out ending,
3 minutes duration,
No vocals, emotional closure"
```

## 🔄 ループ再生設定

### OBS でのプレイリスト設定
```
1. VLC Video Source 追加
2. プレイリスト作成:
   - opening_playlist.m3u
   - working_playlist.m3u
   - break_playlist.m3u
   - ending_playlist.m3u
3. ループ設定: ON
4. シャッフル: ON（作業用のみ）
```

### 自動切り替えスクリプト
```python
# OBS Python スクリプト例
import obspython as obs

def change_bgm_scene(scene_name):
    if scene_name == "Opening":
        play_playlist("opening")
    elif scene_name == "Main":
        play_playlist("working")
    elif scene_name == "Break":
        play_playlist("break")
    elif scene_name == "Ending":
        play_playlist("ending")
```

## 📊 BGM使用スケジュール

### 配信タイムライン
```
19:55-20:00: Opening BGM（待機）
20:00-20:05: Opening BGM（あいさつ）
20:05-20:50: Working BGM（作業）
20:50-20:55: Break BGM（休憩）
20:55-21:25: Working BGM（作業）
21:25-21:30: Ending BGM（締め）
```

## 🎧 音響チェックリスト

### 配信前テスト
- [ ] 全BGMファイル準備完了
- [ ] 音量レベル統一確認
- [ ] ループ再生テスト
- [ ] フェード設定確認
- [ ] プレイリスト動作確認

### 配信中の調整
- [ ] 視聴者から音量フィードバック確認
- [ ] 説明時のBGM音量下げ
- [ ] シーン切り替え時の音楽変更
- [ ] エラー時の無音対策

## 💡 トラブルシューティング

### よくある問題と対策
```
問題: BGMが大きすぎる
対策: OBS で -5dB 追加調整

問題: ループに違和感
対策: クロスフェード追加

問題: 著作権警告
対策: Suno AI 商用利用OK確認

問題: ファイル再生エラー
対策: MP3 320kbps 統一
```

## 📝 著作権について

### Suno AI 利用規約
- 有料プラン: 商用利用OK
- 無料プラン: 非商用のみ
- クレジット表記: 推奨
- YouTube収益化: 有料プランで可能

### 配信での表記
```
BGM: Created with Suno AI
https://www.suno.ai
```

## 🚀 実装スケジュール

### 8/11（本日）
- [ ] Suno AI アカウント作成
- [ ] Opening 4曲生成
- [ ] Working 4曲生成

### 8/12（明日）
- [ ] Working 残り4曲生成
- [ ] Break 4曲生成
- [ ] Ending 4曲生成
- [ ] 全曲マスタリング
- [ ] OBS設定完了

これで配信用BGMの準備は完璧です！🎵