// チーム情報とプロジェクトデータ

export interface TeamMember {
  name: string;
  role: string;
  responsibilities: string[];
  avatar?: string;
  status: 'active' | 'pending' | 'completed';
}

export interface Milestone {
  date: string;
  event: string;
  type: 'release' | 'meeting' | 'deadline' | 'campaign';
  status: 'completed' | 'upcoming' | 'today';
  importance: 'critical' | 'high' | 'medium';
}

export interface KPI {
  metric: string;
  target: number | string;
  current: number | string;
  unit: string;
  progress: number;
  trend?: 'up' | 'down' | 'stable';
}

export interface Task {
  id: string;
  title: string;
  assignee: string;
  deadline: string;
  status: 'completed' | 'in_progress' | 'pending' | 'delayed';
  priority: 'urgent' | 'high' | 'medium' | 'low';
  description?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: '中井健登',
    role: 'PM / CEO',
    responsibilities: ['プロジェクト管理', 'ユニコーン社連携', '戦略立案', 'コンテンツ監修'],
    status: 'active'
  },
  {
    name: 'わど',
    role: 'セールスリーダー',
    responsibilities: ['セミナー実施', 'セールススクリプト作成', 'X戦略', '個別相談対応'],
    status: 'active'
  },
  {
    name: '中上裕三',
    role: 'マーケティング',
    responsibilities: ['個別面談', 'セールスサポート', '顧客フォロー'],
    status: 'active'
  },
  {
    name: 'ゆき',
    role: 'コンテンツ制作',
    responsibilities: ['セミナースライド作成', 'プレゼン資料', 'ビジュアル制作'],
    status: 'active'
  },
  {
    name: 'ちょこ',
    role: 'コンテンツ制作',
    responsibilities: ['動画編集', 'YouTube管理', 'ライブ配信サポート'],
    status: 'active'
  },
  {
    name: 'こばやし ゆうた',
    role: 'コンテンツ制作',
    responsibilities: ['動画制作', 'ローンチ動画', 'プロモーション映像'],
    status: 'active'
  },
  {
    name: 'Yui Mitsui',
    role: 'マーケティング',
    responsibilities: ['台本作成', 'コピーライティング', 'SNS戦略'],
    status: 'active'
  },
  {
    name: 'ユニコーン社',
    role: 'パートナー企業',
    responsibilities: ['コンテンツ提供', 'Discord運営', '特典制作', '技術サポート'],
    status: 'active'
  }
];

export const milestones: Milestone[] = [
  {
    date: '2025-08-11',
    event: '無料特典10個タイトル決定',
    type: 'deadline',
    status: 'completed',
    importance: 'critical'
  },
  {
    date: '2025-08-13',
    event: 'オプチャ詳細設計完了',
    type: 'deadline',
    status: 'today',
    importance: 'high'
  },
  {
    date: '2025-08-14',
    event: '大型コラボ発表',
    type: 'campaign',
    status: 'upcoming',
    importance: 'critical'
  },
  {
    date: '2025-08-15',
    event: 'Xスペースタイトル決定',
    type: 'deadline',
    status: 'upcoming',
    importance: 'medium'
  },
  {
    date: '2025-08-18',
    event: 'ローンチ動画台本完成',
    type: 'deadline',
    status: 'upcoming',
    importance: 'high'
  },
  {
    date: '2025-08-20',
    event: 'セミナースライド完成',
    type: 'deadline',
    status: 'upcoming',
    importance: 'critical'
  },
  {
    date: '2025-08-21',
    event: 'ローンチ投稿開始',
    type: 'campaign',
    status: 'upcoming',
    importance: 'critical'
  },
  {
    date: '2025-08-22',
    event: 'Xスペース第1回',
    type: 'meeting',
    status: 'upcoming',
    importance: 'high'
  },
  {
    date: '2025-08-27',
    event: 'Xスペース第2回',
    type: 'meeting',
    status: 'upcoming',
    importance: 'high'
  },
  {
    date: '2025-08-28',
    event: 'セミナー Day1',
    type: 'release',
    status: 'upcoming',
    importance: 'critical'
  },
  {
    date: '2025-08-29',
    event: 'セミナー Day2',
    type: 'release',
    status: 'upcoming',
    importance: 'critical'
  },
  {
    date: '2025-08-30',
    event: 'セミナー Day3（最終日）',
    type: 'release',
    status: 'upcoming',
    importance: 'critical'
  },
  {
    date: '2025-08-31',
    event: '正式リリース',
    type: 'release',
    status: 'upcoming',
    importance: 'critical'
  }
];

export const kpis: KPI[] = [
  {
    metric: '売上目標',
    target: 3000,
    current: 0,
    unit: '万円',
    progress: 0,
    trend: 'stable'
  },
  {
    metric: '受講生目標',
    target: 100,
    current: 0,
    unit: '名',
    progress: 0,
    trend: 'stable'
  },
  {
    metric: 'セミナー申込',
    target: 500,
    current: 127,
    unit: '名',
    progress: 25.4,
    trend: 'up'
  },
  {
    metric: '個別相談予約',
    target: 150,
    current: 0,
    unit: '名',
    progress: 0,
    trend: 'stable'
  },
  {
    metric: '成約率目標',
    target: 20,
    current: 0,
    unit: '%',
    progress: 0,
    trend: 'stable'
  },
  {
    metric: 'X投稿数',
    target: 200,
    current: 45,
    unit: '投稿',
    progress: 22.5,
    trend: 'up'
  },
  {
    metric: 'YouTube動画',
    target: 15,
    current: 3,
    unit: '本',
    progress: 20,
    trend: 'up'
  },
  {
    metric: '特典制作',
    target: 15,
    current: 5,
    unit: '個',
    progress: 33.3,
    trend: 'stable'
  }
];

export const urgentTasks: Task[] = [
  {
    id: '1',
    title: 'ユニコーン社特典5個の進捗確認',
    assignee: '中井健登',
    deadline: '2025-08-13',
    status: 'delayed',
    priority: 'urgent',
    description: '至急確認が必要。遅延リスクあり'
  },
  {
    id: '2',
    title: 'オプチャ詳細設計',
    assignee: '中井・ユニコ',
    deadline: '2025-08-13',
    status: 'in_progress',
    priority: 'urgent',
    description: '本日中に完了必須'
  },
  {
    id: '3',
    title: 'Xスペースタイトル決定',
    assignee: 'わど・中井',
    deadline: '2025-08-15',
    status: 'pending',
    priority: 'high',
    description: '8/22, 8/27実施分'
  },
  {
    id: '4',
    title: 'セミナースライド制作',
    assignee: 'ゆき',
    deadline: '2025-08-20',
    status: 'in_progress',
    priority: 'urgent',
    description: '進捗確認必要'
  },
  {
    id: '5',
    title: 'ローンチ動画台本作成',
    assignee: 'Yui・ゆうた',
    deadline: '2025-08-18',
    status: 'pending',
    priority: 'high',
    description: '骨子から詳細へ'
  },
  {
    id: '6',
    title: '個別面談スクリプト作成',
    assignee: '中上・わど',
    deadline: '2025-08-20',
    status: 'pending',
    priority: 'high',
    description: '成約率向上の要'
  },
  {
    id: '7',
    title: '契約書準備',
    assignee: '田島',
    deadline: '2025-08-20',
    status: 'pending',
    priority: 'urgent',
    description: 'エラー対応含む事前チェック必須'
  },
  {
    id: '8',
    title: 'Discord特典環境構築',
    assignee: 'ユニコーン社',
    deadline: '2025-08-25',
    status: 'pending',
    priority: 'medium',
    description: '受講生受け入れ準備'
  }
];

export const projectInfo = {
  name: 'バイブコーディング',
  launchDate: '2025年8月31日',
  targetRevenue: '3,000万円',
  targetStudents: 100,
  price: {
    main: '30万円',
    premium: '50万円（プロンプトエンジニアリング付）'
  },
  timeline: {
    phase1: {
      period: '8/11-8/17',
      focus: 'AI開発の基礎知識・マインドセット醸成'
    },
    phase2: {
      period: '8/18-8/24',
      focus: 'Vibe Codingの価値提示・期待感醸成'
    },
    phase3: {
      period: '8/25-8/31',
      focus: 'ローンチ直前の期待感最大化'
    }
  },
  resources: {
    documents: [
      { name: '商品企画書', path: '/docs/product/vibe-coding-spec.md' },
      { name: 'KPIダッシュボード', path: '/docs/kpi-dashboard/launch-kpi-tracker.md' },
      { name: 'セールススクリプト', path: '/docs/sales-scripts/individual-consultation-script.md' },
      { name: 'FAQ集', path: '/docs/sales-scripts/faq-complete-guide.md' },
      { name: 'X投稿戦略', path: '/team/x/vibecoding-promo-posts.md' }
    ],
    tools: [
      { name: 'X投稿管理', url: '/x-posts' },
      { name: '配信スケジュール', url: '/streaming-schedule' },
      { name: 'Discord', url: 'https://discord.gg/vibecoding' },
      { name: 'YouTube', url: 'https://youtube.com/@vibecoding' }
    ]
  }
};