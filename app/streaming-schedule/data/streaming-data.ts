export interface StreamingEvent {
  id: string
  date: string
  day: string
  time: string
  title: string
  description: string
  difficulty: "★☆☆" | "★★☆" | "★★★"
  tools: string[]
  goal: string
  week: number
  type: string
  special?: boolean
  youtubeUrl?: string
  features: string[]
  learningOutcomes: string[]
  prerequisites: string[]
}

export const streamingData: StreamingEvent[] = [
  {
    id: "day1",
    date: "8/13",
    day: "火",
    time: "20:00-21:30",
    title: "Google AI Studio Build入門",
    description: "プログラミング未経験でもOK！30分でAIチャットボットを作成・公開できる超初心者向けの配信です。",
    difficulty: "★☆☆",
    tools: ["Google AI Studio Build", "Chrome Browser"],
    goal: "FAQ自動応答ボット完成",
    week: 1,
    type: "基礎編",
    youtubeUrl: "https://youtube.com/live/3PvXS1DN3Ec",
    features: [
      "ブラウザだけで完結",
      "環境構築不要",
      "コピペで動く",
      "成功体験を最優先"
    ],
    learningOutcomes: [
      "AI開発の基本概念理解",
      "プロンプトエンジニアリング入門",
      "実用的なチャットボット作成",
      "Google AI Studio Build操作習得"
    ],
    prerequisites: [
      "Googleアカウント",
      "Chrome/Edgeブラウザ",
      "やる気だけ！"
    ]
  },
  {
    id: "day2",
    date: "8/14",
    day: "水",
    time: "20:00-21:30",
    title: "自動メール返信AIの構築",
    description: "ビジネスメールを自動で返信するAIシステムを作成。実際のカスタマーサポート業務で使えるレベルまで実装します。",
    difficulty: "★☆☆",
    tools: ["Google AI Studio Build", "Gmail API"],
    goal: "メール自動返信システム完成",
    week: 1,
    type: "基礎編",
    features: [
      "メール内容の自動分析",
      "適切な返信文の生成",
      "トーン調整機能",
      "テンプレート管理"
    ],
    learningOutcomes: [
      "メール処理の自動化",
      "感情分析の基礎",
      "ビジネス文書生成",
      "API連携の初歩"
    ],
    prerequisites: [
      "Day 1の内容理解",
      "Gmailアカウント"
    ]
  },
  {
    id: "day3",
    date: "8/15",
    day: "木",
    time: "20:00-21:30",
    title: "SNS・ブログコンテンツ自動生成",
    description: "Twitter、Instagram、ブログ記事を自動生成するAIツールを作成。マーケティング業務を効率化します。",
    difficulty: "★☆☆",
    tools: ["Google AI Studio Build", "Content Templates"],
    goal: "コンテンツ生成ツール完成",
    week: 1,
    type: "基礎編",
    features: [
      "マルチプラットフォーム対応",
      "SEO最適化",
      "ハッシュタグ自動生成",
      "画像説明文作成"
    ],
    learningOutcomes: [
      "コンテンツマーケティング自動化",
      "SEOライティング基礎",
      "ソーシャルメディア戦略",
      "ブランディング一貫性"
    ],
    prerequisites: [
      "Day 1-2の内容理解",
      "SNSアカウント（参考用）"
    ]
  },
  {
    id: "day4",
    date: "8/16",
    day: "金",
    time: "20:00-21:30",
    title: "Dify で作る高度なAIワークフロー",
    description: "ドラッグ&ドロップでノーコード開発！複数のAI処理を連携させた業務自動化システムを構築します。",
    difficulty: "★★☆",
    tools: ["Dify Cloud", "Workflow Builder"],
    goal: "カスタマーサポートワークフロー完成",
    week: 1,
    type: "基礎編",
    features: [
      "視覚的ワークフロー設計",
      "条件分岐処理",
      "外部API統合",
      "自動エスカレーション"
    ],
    learningOutcomes: [
      "ノーコード開発手法",
      "ワークフロー設計思考",
      "業務プロセス自動化",
      "システム統合概念"
    ],
    prerequisites: [
      "Week 1の基礎理解",
      "Difyアカウント作成"
    ]
  },
  {
    id: "day5-special",
    date: "8/17",
    day: "土",
    time: "14:00-16:00",
    title: "🌟Week 1 総復習＆ハンズオン大会",
    description: "平日を見逃した方のキャッチアップタイム！参加者全員で一緒にアプリを作りながら理解を深めます。",
    difficulty: "★★☆",
    tools: ["All Week 1 Tools"],
    goal: "1週間の成果統合・発表",
    week: 1,
    type: "特別編",
    special: true,
    features: [
      "ライブコーディング",
      "参加型ハンズオン",
      "トラブルシューティング実演",
      "質問回答タイム"
    ],
    learningOutcomes: [
      "Week 1内容の完全理解",
      "実践的問題解決能力",
      "コミュニティ参加体験",
      "次週への準備"
    ],
    prerequisites: [
      "Week 1のうち1つでも参加経験"
    ]
  },
  {
    id: "day6",
    date: "8/18",
    day: "日",
    time: "20:00-21:30",
    title: "Claude Code で本格AI開発",
    description: "プロレベルのAI開発環境「Claude Code」を使って、テスト駆動開発でAIアプリを構築します。",
    difficulty: "★★★",
    tools: ["Claude Code", "VS Code", "GitHub"],
    goal: "Gemini CLI自動化スクリプト完成",
    week: 2,
    type: "実践編",
    features: [
      "AIペアプログラミング",
      "テスト駆動開発",
      "Git連携開発",
      "コードレビューAI"
    ],
    learningOutcomes: [
      "プロレベル開発環境習得",
      "テスト設計思考",
      "バージョン管理",
      "品質管理手法"
    ],
    prerequisites: [
      "Week 1完了",
      "Claude Code契約（$20/月）",
      "VS Code インストール"
    ]
  },
  {
    id: "day7",
    date: "8/19",
    day: "月",
    time: "20:00-21:30",
    title: "Codex CLI マスタークラス",
    description: "ChatGPT Plusの隠れた機能「Codex CLI」で、プロジェクト全体を15分で自動生成する技術を習得します。",
    difficulty: "★★★",
    tools: ["Codex CLI", "ChatGPT Plus", "Chrome Extension"],
    goal: "データ分析ダッシュボード完成",
    week: 2,
    type: "実践編",
    features: [
      "プロジェクト一括生成",
      "高度なプロンプトテンプレート",
      "マルチファイル操作",
      "アーキテクチャ自動設計"
    ],
    learningOutcomes: [
      "上級プロンプトエンジニアリング",
      "システム設計自動化",
      "開発効率化手法",
      "アーキテクチャパターン"
    ],
    prerequisites: [
      "ChatGPT Plus契約",
      "Chrome拡張機能インストール",
      "基本的なWeb開発知識"
    ]
  },
  {
    id: "day8",
    date: "8/20",
    day: "火",
    time: "20:00-21:30",
    title: "フルスタックアプリ設計編",
    description: "AIを使って要件定義から設計まで効率化。Next.js + Supabase でモダンWebアプリの設計を学びます。",
    difficulty: "★★★",
    tools: ["Next.js", "Supabase", "Figma", "AI Tools"],
    goal: "YUNICO設計書完成",
    week: 3,
    type: "応用編",
    features: [
      "要件定義AI支援",
      "データベース設計",
      "API設計",
      "UI/UX設計"
    ],
    learningOutcomes: [
      "システム設計全体像",
      "データベース設計手法",
      "API設計パターン",
      "UI/UX設計思考"
    ],
    prerequisites: [
      "Week 2完了",
      "Figmaアカウント",
      "Supabaseアカウント"
    ]
  },
  {
    id: "day9",
    date: "8/21",
    day: "水",
    time: "20:00-21:30",
    title: "フルスタック実装編",
    description: "設計した通りにAIと一緒にコーディング。フロントエンドからバックエンドまで一気に実装します。",
    difficulty: "★★★",
    tools: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    goal: "YUNICO α版リリース",
    week: 3,
    type: "応用編",
    features: [
      "フロントエンド実装",
      "バックエンド実装",
      "データベース連携",
      "認証システム実装"
    ],
    learningOutcomes: [
      "フルスタック開発実践",
      "TypeScript実装",
      "データベース操作",
      "認証フロー実装"
    ],
    prerequisites: [
      "Day 8の設計完了",
      "Node.js インストール",
      "Git 基本操作"
    ]
  },
  {
    id: "day10",
    date: "8/22",
    day: "木",
    time: "20:00-21:30",
    title: "本番デプロイ＆運用編",
    description: "作成したアプリをVercelにデプロイ。CI/CD、監視、運用まで本格的な開発フローを体験します。",
    difficulty: "★★★",
    tools: ["Vercel", "GitHub Actions", "Sentry", "Analytics"],
    goal: "YUNICO本番リリース",
    week: 3,
    type: "応用編",
    features: [
      "Vercel デプロイ",
      "CI/CD 構築",
      "監視システム",
      "分析ダッシュボード"
    ],
    learningOutcomes: [
      "デプロイメント手法",
      "DevOps基礎",
      "監視・運用知識",
      "パフォーマンス最適化"
    ],
    prerequisites: [
      "Day 9の実装完了",
      "Vercelアカウント",
      "GitHubアカウント"
    ]
  },
  {
    id: "day11",
    date: "8/23",
    day: "金",
    time: "20:00-21:30",
    title: "AIアプリ収益化戦略",
    description: "Stripe決済システムの実装から、フリーミアムモデル、マーケティング戦略まで収益化のすべてを学びます。",
    difficulty: "★★★",
    tools: ["Stripe", "Marketing Tools", "Analytics", "A/B Testing"],
    goal: "収益化システム完成",
    week: 3,
    type: "応用編",
    features: [
      "Stripe決済実装",
      "フリーミアムモデル",
      "使用量制限機能",
      "マーケティング自動化"
    ],
    learningOutcomes: [
      "決済システム実装",
      "ビジネスモデル設計",
      "マーケティング戦略",
      "収益最適化手法"
    ],
    prerequisites: [
      "Week 3前半完了",
      "Stripeアカウント"
    ]
  },
  {
    id: "day12-special",
    date: "8/24",
    day: "土",
    time: "14:00-16:00",
    title: "🌟中間成果発表会",
    description: "これまでに作成したアプリを発表！参加者同士でコードレビューや改善アイデアを共有します。",
    difficulty: "★★☆",
    tools: ["All Previous Tools"],
    goal: "中間成果発表・フィードバック",
    week: 3,
    type: "特別編",
    special: true,
    features: [
      "作品発表タイム",
      "コードレビュー",
      "改善提案",
      "ネットワーキング"
    ],
    learningOutcomes: [
      "プレゼンテーション能力",
      "コードレビュー体験",
      "フィードバック活用",
      "コミュニティ貢献"
    ],
    prerequisites: [
      "何か1つでもアプリ完成"
    ]
  },
  {
    id: "day13",
    date: "8/25",
    day: "日",
    time: "20:00-21:30",
    title: "実案件開発①要件定義・見積もり",
    description: "実際のクライアント案件を例に、要件ヒアリングから見積もり作成まで、案件受注のプロセスを学びます。",
    difficulty: "★★★",
    tools: ["Requirement Tools", "Estimation Tools", "Project Management"],
    goal: "案件要件書・見積書完成",
    week: 4,
    type: "ビジネス編",
    features: [
      "要件ヒアリング技術",
      "見積もり算出方法",
      "提案書作成",
      "契約書基礎"
    ],
    learningOutcomes: [
      "案件受注プロセス",
      "要件定義手法",
      "見積もり技術",
      "提案力向上"
    ],
    prerequisites: [
      "Week 3完了",
      "ビジネス感覚"
    ]
  },
  {
    id: "day14",
    date: "8/26",
    day: "月",
    time: "20:00-21:30",
    title: "実案件開発②アジャイル開発実践",
    description: "アジャイル開発手法でMVPを構築。スプリント管理、デイリースクラム、レトロスペクティブまで実践します。",
    difficulty: "★★★",
    tools: ["Jira", "Slack", "GitHub", "Development Tools"],
    goal: "案件MVP完成",
    week: 4,
    type: "ビジネス編",
    features: [
      "アジャイル開発実践",
      "スプリント管理",
      "チーム開発",
      "品質管理"
    ],
    learningOutcomes: [
      "アジャイル開発手法",
      "プロジェクト管理",
      "チームワーク",
      "品質保証"
    ],
    prerequisites: [
      "Day 13要件定義完了",
      "チーム開発経験への意欲"
    ]
  },
  {
    id: "day15",
    date: "8/27",
    day: "火",
    time: "20:00-21:30",
    title: "実案件開発③納品・保守運用",
    description: "完成したシステムの納品から保守運用まで。長期的なクライアント関係構築の秘訣を学びます。",
    difficulty: "★★★",
    tools: ["Documentation Tools", "Monitoring", "Support Systems"],
    goal: "案件完全納品",
    week: 4,
    type: "ビジネス編",
    features: [
      "納品プロセス",
      "ドキュメント作成",
      "保守運用体制",
      "サポート体制"
    ],
    learningOutcomes: [
      "納品プロセス",
      "運用保守知識",
      "顧客関係管理",
      "継続案件獲得"
    ],
    prerequisites: [
      "Day 14 MVP完成",
      "責任感"
    ]
  },
  {
    id: "day16",
    date: "8/28",
    day: "水",
    time: "20:00-21:30",
    title: "AI最新トレンド＆先端技術",
    description: "AutoGPT、エージェントシステム、マルチモーダルAIなど最新技術を実装。未来のAI開発を先取りします。",
    difficulty: "★★★",
    tools: ["LangChain", "AutoGPT", "Multi-modal AI", "Agent Frameworks"],
    goal: "AIエージェントシステム完成",
    week: 4,
    type: "応用編",
    features: [
      "AIエージェント開発",
      "マルチモーダル処理",
      "自律実行システム",
      "先端技術活用"
    ],
    learningOutcomes: [
      "最新AI技術習得",
      "エージェント設計",
      "先端技術の実装",
      "技術トレンド把握"
    ],
    prerequisites: [
      "上級プログラミング能力",
      "新技術への探究心"
    ]
  },
  {
    id: "day17",
    date: "8/29",
    day: "木",
    time: "20:00-21:30",
    title: "セキュリティ＆本番運用",
    description: "AIアプリの脆弱性対策、コスト最適化、スケーリング戦略まで。本番運用で差がつくポイントを学習。",
    difficulty: "★★★",
    tools: ["Security Tools", "Monitoring", "Cost Optimization", "Scaling"],
    goal: "エンタープライズ級システム完成",
    week: 4,
    type: "応用編",
    features: [
      "セキュリティ対策",
      "コスト最適化",
      "スケーリング戦略",
      "監視・運用"
    ],
    learningOutcomes: [
      "セキュリティ知識",
      "コスト管理",
      "スケーラビリティ",
      "運用ノウハウ"
    ],
    prerequisites: [
      "システム運用への理解",
      "セキュリティ意識"
    ]
  },
  {
    id: "day18",
    date: "8/30",
    day: "金",
    time: "20:00-21:30",
    title: "キャリア戦略＆案件獲得術",
    description: "AI開発者として独立・転職・副業を成功させる戦略。ポートフォリオ作成から案件獲得まで実践的ノウハウ。",
    difficulty: "★★☆",
    tools: ["Portfolio Tools", "Marketing", "Networking", "Business"],
    goal: "キャリア戦略完成",
    week: 4,
    type: "ビジネス編",
    features: [
      "ポートフォリオ戦略",
      "案件獲得チャネル",
      "価格設定術",
      "ブランディング"
    ],
    learningOutcomes: [
      "キャリア設計",
      "営業スキル",
      "ブランド構築",
      "継続収入の作り方"
    ],
    prerequisites: [
      "作品を最低3つ以上完成",
      "独立・転職への意欲"
    ]
  },
  {
    id: "day19-finale",
    date: "8/31",
    day: "土",
    time: "19:00-22:00",
    title: "🎊Demo Day & 打ち上げLIVE",
    description: "19日間の集大成！参加者全員の成果発表、表彰式、そして最高の打ち上げで感動のフィナーレ。",
    difficulty: "★★★",
    tools: ["All Tools"],
    goal: "19日間完走＆コミュニティ形成",
    week: 4,
    type: "フィナーレ",
    special: true,
    features: [
      "成果発表会",
      "表彰式",
      "ネットワーキング",
      "未来への展望"
    ],
    learningOutcomes: [
      "プレゼンテーション完成",
      "19日間の達成感",
      "コミュニティ参加",
      "継続学習への動機"
    ],
    prerequisites: [
      "19日間の参加体験",
      "発表への挑戦意欲"
    ]
  }
]

export const weeklyThemes = {
  1: {
    title: "基礎編：Google AI Studio Build 中心",
    description: "プログラミング未経験者でもAI開発を始められる基礎固め週間",
    color: "blue"
  },
  2: {
    title: "実践編：本格開発ツール習得",
    description: "Claude Code、Codex CLIを使った本格的なAI開発技術習得",
    color: "purple"
  },
  3: {
    title: "応用編：フルスタック開発完成",
    description: "設計から運用まで、商用レベルのアプリケーション開発",
    color: "orange"
  },
  4: {
    title: "ビジネス編：収益化＆案件獲得",
    description: "AI開発スキルをビジネスに活かす実践的ノウハウ習得",
    color: "green"
  }
}