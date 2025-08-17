'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { CalendarDays, Users, Target, TrendingUp, Download, ExternalLink, BarChart3, Zap } from 'lucide-react'

export default function NoteCampaignPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const campaignStats = {
    totalViews: 12847,
    freeDownloads: 3421,
    paidPurchases: 187,
    conversionRate: 5.5,
    openChatJoins: 892,
    seminarSignups: 456
  }

  const distributionSchedule = [
    {
      date: '2025-08-18',
      day: '月',
      freeContent: 'AI開発30分体験ガイド',
      paidContent: 'パラダイムシフト完全版',
      target: 'プログラミング初心者',
      expectedDownloads: 500
    },
    {
      date: '2025-08-21',
      day: '木',
      freeContent: '月収5万円ロードマップ',
      paidContent: 'バイブコーディング革命論',
      target: '副業希望者',
      expectedDownloads: 750
    },
    {
      date: '2025-08-24',
      day: '日',
      freeContent: 'セミナー予告編',
      paidContent: '業界タブー暴露版',
      target: 'セミナー検討者',
      expectedDownloads: 1000
    }
  ]

  const strategyPoints = [
    {
      title: '無料記事での大量集客',
      description: '30分体験で敷居を下げ、オープンチャット流入を最大化',
      impact: '月3,000人の新規獲得',
      status: 'active'
    },
    {
      title: '100円記事で質的選別',
      description: '本気度の高い見込み客をフィルタリング、セミナー着座率向上',
      impact: '成約率15%→35%向上',
      status: 'active'
    },
    {
      title: '段階的情報開示',
      description: 'セミナー台本の核心を抽象化し、商品価値を事前認知',
      impact: '購入意欲80%向上',
      status: 'planning'
    }
  ]

  return (
    <div className=\"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50\">
      {/* ヘッダー */}
      <header className=\"bg-white/80 backdrop-blur-md border-b sticky top-0 z-50\">
        <div className=\"container mx-auto px-4 py-4\">
          <div className=\"flex items-center justify-between\">
            <div className=\"flex items-center space-x-4\">
              <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\">
                <Zap className=\"w-6 h-6 text-white\" />
              </div>
              <div>
                <h1 className=\"text-xl font-bold text-gray-900\">note記事配布キャンペーン</h1>
                <p className=\"text-sm text-gray-600\">バイブコーディング ローンチ戦略</p>
              </div>
            </div>
            <div className=\"flex space-x-2\">
              <Button
                variant={activeTab === 'overview' ? 'default' : 'outline'}
                size=\"sm\"
                onClick={() => setActiveTab('overview')}
              >
                概要
              </Button>
              <Button
                variant={activeTab === 'strategy' ? 'default' : 'outline'}
                size=\"sm\"
                onClick={() => setActiveTab('strategy')}
              >
                戦略
              </Button>
              <Button
                variant={activeTab === 'distribution' ? 'default' : 'outline'}
                size=\"sm\"
                onClick={() => setActiveTab('distribution')}
              >
                配布
              </Button>
              <Button
                variant={activeTab === 'analytics' ? 'default' : 'outline'}
                size=\"sm\"
                onClick={() => setActiveTab('analytics')}
              >
                分析
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className=\"container mx-auto px-4 py-8\">
        {/* 概要タブ */}
        {activeTab === 'overview' && (
          <div className=\"space-y-8\">
            {/* KPI ダッシュボード */}
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">
              <Card className=\"bg-gradient-to-r from-blue-500 to-blue-600 text-white\">
                <CardHeader className=\"pb-3\">
                  <CardTitle className=\"text-lg\">総閲覧数</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=\"text-3xl font-bold\">{campaignStats.totalViews.toLocaleString()}</div>
                  <div className=\"text-blue-100 text-sm mt-1\">+23% vs 先月</div>
                </CardContent>
              </Card>

              <Card className=\"bg-gradient-to-r from-green-500 to-green-600 text-white\">
                <CardHeader className=\"pb-3\">
                  <CardTitle className=\"text-lg\">無料DL数</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=\"text-3xl font-bold\">{campaignStats.freeDownloads.toLocaleString()}</div>
                  <div className=\"text-green-100 text-sm mt-1\">目標達成率 68%</div>
                </CardContent>
              </Card>

              <Card className=\"bg-gradient-to-r from-purple-500 to-purple-600 text-white\">
                <CardHeader className=\"pb-3\">
                  <CardTitle className=\"text-lg\">有料購入数</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=\"text-3xl font-bold\">{campaignStats.paidPurchases}</div>
                  <div className=\"text-purple-100 text-sm mt-1\">CVR {campaignStats.conversionRate}%</div>
                </CardContent>
              </Card>

              <Card className=\"bg-gradient-to-r from-orange-500 to-orange-600 text-white\">
                <CardHeader className=\"pb-3\">
                  <CardTitle className=\"text-lg\">オプチャ参加</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=\"text-3xl font-bold\">{campaignStats.openChatJoins}</div>
                  <div className=\"text-orange-100 text-sm mt-1\">目標1,000名まで残り108名</div>
                </CardContent>
              </Card>

              <Card className=\"bg-gradient-to-r from-red-500 to-red-600 text-white\">
                <CardHeader className=\"pb-3\">
                  <CardTitle className=\"text-lg\">セミナー申込</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=\"text-3xl font-bold\">{campaignStats.seminarSignups}</div>
                  <div className=\"text-red-100 text-sm mt-1\">目標1,500名まで残り1,044名</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className=\"pb-3\">
                  <CardTitle className=\"text-lg flex items-center gap-2\">
                    <TrendingUp className=\"w-5 h-5\" />
                    目標進捗
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-3\">
                    <div>
                      <div className=\"flex justify-between text-sm mb-1\">
                        <span>オプチャ</span>
                        <span>892/1,000</span>
                      </div>
                      <Progress value={89.2} className=\"h-2\" />
                    </div>
                    <div>
                      <div className=\"flex justify-between text-sm mb-1\">
                        <span>セミナー</span>
                        <span>456/1,500</span>
                      </div>
                      <Progress value={30.4} className=\"h-2\" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* note記事概要 */}
            <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-6\">
              <Card className=\"border-2 border-green-200 bg-green-50\">
                <CardHeader>
                  <div className=\"flex items-center justify-between\">
                    <Badge variant=\"secondary\" className=\"bg-green-100 text-green-800\">無料</Badge>
                    <Download className=\"w-5 h-5 text-green-600\" />
                  </div>
                  <CardTitle className=\"text-xl\">AI開発30分体験ガイド</CardTitle>
                  <CardDescription>
                    プログラミング未経験でも30分でAIアプリを作れる感動体験
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-4\">
                    <div className=\"grid grid-cols-2 gap-4 text-sm\">
                      <div>
                        <div className=\"font-medium text-gray-700\">対象</div>
                        <div className=\"text-gray-600\">プログラミング初心者</div>
                      </div>
                      <div>
                        <div className=\"font-medium text-gray-700\">目的</div>
                        <div className=\"text-gray-600\">大量集客・信頼構築</div>
                      </div>
                    </div>
                    <div>
                      <div className=\"font-medium text-gray-700 mb-2\">主要コンテンツ</div>
                      <ul className=\"text-sm text-gray-600 space-y-1\">
                        <li>• 30分でAIチャットボット作成</li>
                        <li>• 月収5万円までのロードマップ</li>
                        <li>• 成功者事例と共通点分析</li>
                        <li>• 無料ツール一覧と活用法</li>
                      </ul>
                    </div>
                    <div className=\"flex gap-2\">
                      <Button size=\"sm\" className=\"flex-1\">
                        <ExternalLink className=\"w-4 h-4 mr-2\" />
                        記事を確認
                      </Button>
                      <Button size=\"sm\" variant=\"outline\">
                        分析データ
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className=\"border-2 border-purple-200 bg-purple-50\">
                <CardHeader>
                  <div className=\"flex items-center justify-between\">
                    <Badge variant=\"secondary\" className=\"bg-purple-100 text-purple-800\">100円</Badge>
                    <BarChart3 className=\"w-5 h-5 text-purple-600\" />
                  </div>
                  <CardTitle className=\"text-xl\">パラダイムシフト完全解説</CardTitle>
                  <CardDescription>
                    「書く→対話する時代」への革命的変化と攻略法
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-4\">
                    <div className=\"grid grid-cols-2 gap-4 text-sm\">
                      <div>
                        <div className=\"font-medium text-gray-700\">対象</div>
                        <div className=\"text-gray-600\">本気度の高い学習者</div>
                      </div>
                      <div>
                        <div className=\"font-medium text-gray-700\">目的</div>
                        <div className=\"text-gray-600\">質的選別・価値認知</div>
                      </div>
                    </div>
                    <div>
                      <div className=\"font-medium text-gray-700 mb-2\">主要コンテンツ</div>
                      <ul className=\"text-sm text-gray-600 space-y-1\">
                        <li>• バイブコーディング革命論</li>
                        <li>• 業界タブーと攻略法</li>
                        <li>• 95%が犯す致命的間違い</li>
                        <li>• 2025年市場予測と戦略</li>
                      </ul>
                    </div>
                    <div className=\"flex gap-2\">
                      <Button size=\"sm\" className=\"flex-1\">
                        <ExternalLink className=\"w-4 h-4 mr-2\" />
                        記事を確認
                      </Button>
                      <Button size=\"sm\" variant=\"outline\">
                        購入分析
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* 戦略タブ */}
        {activeTab === 'strategy' && (
          <div className=\"space-y-8\">
            <Card>
              <CardHeader>
                <CardTitle className=\"flex items-center gap-2\">
                  <Target className=\"w-5 h-5\" />
                  配布戦略の核心
                </CardTitle>
                <CardDescription>
                  セミナー参加者1,000名・売上3,000万円達成に向けた戦略的アプローチ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className=\"grid grid-cols-1 lg:grid-cols-3 gap-6\">
                  {strategyPoints.map((point, index) => (
                    <Card key={index} className={`${point.status === 'active' ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
                      <CardHeader className=\"pb-3\">
                        <div className=\"flex items-center justify-between\">
                          <Badge variant={point.status === 'active' ? 'default' : 'secondary'}>
                            {point.status === 'active' ? '実行中' : '計画中'}
                          </Badge>
                        </div>
                        <CardTitle className=\"text-lg\">{point.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className=\"text-sm text-gray-600 mb-3\">{point.description}</p>
                        <div className=\"bg-blue-50 p-3 rounded-lg\">
                          <div className=\"text-sm font-medium text-blue-800\">期待効果</div>
                          <div className=\"text-sm text-blue-600\">{point.impact}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ファネル分析 */}
            <Card>
              <CardHeader>
                <CardTitle>集客ファネル設計</CardTitle>
                <CardDescription>無料記事→有料記事→オープンチャット→セミナーの導線最適化</CardDescription>
              </CardHeader>
              <CardContent>
                <div className=\"space-y-6\">
                  <div className=\"grid grid-cols-1 md:grid-cols-4 gap-4\">
                    <div className=\"text-center p-4 bg-blue-50 rounded-lg\">
                      <div className=\"text-2xl font-bold text-blue-600\">10,000</div>
                      <div className=\"text-sm text-gray-600\">無料記事閲覧</div>
                      <div className=\"text-xs text-blue-500 mt-1\">100%</div>
                    </div>
                    <div className=\"text-center p-4 bg-purple-50 rounded-lg\">
                      <div className=\"text-2xl font-bold text-purple-600\">500</div>
                      <div className=\"text-sm text-gray-600\">有料記事購入</div>
                      <div className=\"text-xs text-purple-500 mt-1\">5%</div>
                    </div>
                    <div className=\"text-center p-4 bg-green-50 rounded-lg\">
                      <div className=\"text-2xl font-bold text-green-600\">1,000</div>
                      <div className=\"text-sm text-gray-600\">オプチャ参加</div>
                      <div className=\"text-xs text-green-500 mt-1\">10%</div>
                    </div>
                    <div className=\"text-center p-4 bg-orange-50 rounded-lg\">
                      <div className=\"text-2xl font-bold text-orange-600\">1,500</div>
                      <div className=\"text-sm text-gray-600\">セミナー申込</div>
                      <div className=\"text-xs text-orange-500 mt-1\">15%</div>
                    </div>
                  </div>
                  
                  <div className=\"bg-gray-50 p-4 rounded-lg\">
                    <h4 className=\"font-medium mb-2\">最適化ポイント</h4>
                    <ul className=\"text-sm text-gray-600 space-y-1\">
                      <li>• 無料記事の体験価値向上により、オープンチャット誘導率10%→15%を目指す</li>
                      <li>• 100円記事で質の高い見込み客選別、セミナー成約率35%→50%を目指す</li>
                      <li>• オープンチャット内での継続的エンゲージメントによりセミナー参加率向上</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 配布タブ */}
        {activeTab === 'distribution' && (
          <div className=\"space-y-8\">
            <Card>
              <CardHeader>
                <CardTitle className=\"flex items-center gap-2\">
                  <CalendarDays className=\"w-5 h-5\" />
                  配布スケジュール
                </CardTitle>
                <CardDescription>
                  8月18日〜31日の戦略的配布計画
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className=\"space-y-4\">
                  {distributionSchedule.map((schedule, index) => (
                    <Card key={index} className=\"border-l-4 border-l-blue-500\">
                      <CardHeader className=\"pb-3\">
                        <div className=\"flex items-center justify-between\">
                          <div className=\"flex items-center gap-3\">
                            <Badge variant=\"outline\">{schedule.date} ({schedule.day})</Badge>
                            <span className=\"text-sm text-gray-600\">{schedule.target}</span>
                          </div>
                          <div className=\"text-sm text-gray-500\">予想DL: {schedule.expectedDownloads}件</div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">
                          <div className=\"bg-green-50 p-3 rounded-lg\">
                            <div className=\"text-sm font-medium text-green-800 mb-1\">無料配布</div>
                            <div className=\"text-sm text-green-600\">{schedule.freeContent}</div>
                          </div>
                          <div className=\"bg-purple-50 p-3 rounded-lg\">
                            <div className=\"text-sm font-medium text-purple-800 mb-1\">有料販売</div>
                            <div className=\"text-sm text-purple-600\">{schedule.paidContent}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 配布チャネル */}
            <Card>
              <CardHeader>
                <CardTitle>配布チャネル戦略</CardTitle>
                <CardDescription>プラットフォーム別の役割と最適化</CardDescription>
              </CardHeader>
              <CardContent>
                <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4\">
                  <div className=\"text-center p-4 bg-blue-50 rounded-lg\">
                    <div className=\"w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3\">
                      <Users className=\"w-6 h-6 text-white\" />
                    </div>
                    <div className=\"font-medium text-blue-900\">オープンチャット</div>
                    <div className=\"text-sm text-blue-600 mt-1\">メイン配布チャネル</div>
                    <div className=\"text-xs text-gray-500 mt-2\">限定感演出・コミュニティ形成</div>
                  </div>

                  <div className=\"text-center p-4 bg-purple-50 rounded-lg\">
                    <div className=\"w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3\">
                      <TrendingUp className=\"w-6 h-6 text-white\" />
                    </div>
                    <div className=\"font-medium text-purple-900\">X (Twitter)</div>
                    <div className=\"text-sm text-purple-600 mt-1\">拡散・誘導</div>
                    <div className=\"text-xs text-gray-500 mt-2\">リーチ拡大・オプチャ誘導</div>
                  </div>

                  <div className=\"text-center p-4 bg-green-50 rounded-lg\">
                    <div className=\"w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3\">
                      <Download className=\"w-6 h-6 text-white\" />
                    </div>
                    <div className=\"font-medium text-green-900\">note</div>
                    <div className=\"text-sm text-green-600 mt-1\">記事ホスティング</div>
                    <div className=\"text-xs text-gray-500 mt-2\">コンテンツ配信・決済</div>
                  </div>

                  <div className=\"text-center p-4 bg-orange-50 rounded-lg\">
                    <div className=\"w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3\">
                      <Target className=\"w-6 h-6 text-white\" />
                    </div>
                    <div className=\"font-medium text-orange-900\">公式LINE</div>
                    <div className=\"text-sm text-orange-600 mt-1\">個別フォロー</div>
                    <div className=\"text-xs text-gray-500 mt-2\">パーソナル接点・取りこぼし防止</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 分析タブ */}
        {activeTab === 'analytics' && (
          <div className=\"space-y-8\">
            <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-6\">
              <Card>
                <CardHeader>
                  <CardTitle>記事別パフォーマンス</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-4\">
                    <div className=\"flex items-center justify-between p-3 bg-green-50 rounded-lg\">
                      <div>
                        <div className=\"font-medium text-green-900\">無料記事</div>
                        <div className=\"text-sm text-green-600\">AI開発30分体験</div>
                      </div>
                      <div className=\"text-right\">
                        <div className=\"text-lg font-bold text-green-700\">3,421</div>
                        <div className=\"text-xs text-green-500\">ダウンロード</div>
                      </div>
                    </div>

                    <div className=\"flex items-center justify-between p-3 bg-purple-50 rounded-lg\">
                      <div>
                        <div className=\"font-medium text-purple-900\">100円記事</div>
                        <div className=\"text-sm text-purple-600\">パラダイムシフト</div>
                      </div>
                      <div className=\"text-right\">
                        <div className=\"text-lg font-bold text-purple-700\">187</div>
                        <div className=\"text-xs text-purple-500\">購入</div>
                      </div>
                    </div>

                    <div className=\"bg-gray-50 p-3 rounded-lg\">
                      <div className=\"text-sm font-medium text-gray-700 mb-2\">変換率分析</div>
                      <div className=\"space-y-2 text-sm text-gray-600\">
                        <div className=\"flex justify-between\">
                          <span>閲覧→無料DL</span>
                          <span className=\"font-medium\">26.6%</span>
                        </div>
                        <div className=\"flex justify-between\">
                          <span>無料→有料</span>
                          <span className=\"font-medium\">5.5%</span>
                        </div>
                        <div className=\"flex justify-between\">
                          <span>有料→オプチャ</span>
                          <span className=\"font-medium\">78.6%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>目標達成予測</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=\"space-y-4\">
                    <div>
                      <div className=\"flex justify-between text-sm mb-2\">
                        <span>オープンチャット参加者</span>
                        <span>892 / 1,000</span>
                      </div>
                      <Progress value={89.2} className=\"h-3\" />
                      <div className=\"text-xs text-gray-500 mt-1\">達成見込み: 8月22日</div>
                    </div>

                    <div>
                      <div className=\"flex justify-between text-sm mb-2\">
                        <span>セミナー申込者</span>
                        <span>456 / 1,500</span>
                      </div>
                      <Progress value={30.4} className=\"h-3\" />
                      <div className=\"text-xs text-orange-500 mt-1\">要改善: 現ペースでは未達</div>
                    </div>

                    <div>
                      <div className=\"flex justify-between text-sm mb-2\">
                        <span>売上目標 (セミナー経由)</span>
                        <span>推定1,380万 / 3,000万</span>
                      </div>
                      <Progress value={46} className=\"h-3\" />
                      <div className=\"text-xs text-blue-500 mt-1\">追加施策により達成可能</div>
                    </div>

                    <div className=\"bg-blue-50 p-3 rounded-lg mt-4\">
                      <div className=\"text-sm font-medium text-blue-800 mb-1\">改善提案</div>
                      <ul className=\"text-xs text-blue-600 space-y-1\">
                        <li>• 無料記事のSNS拡散強化</li>
                        <li>• 100円記事の価値訴求改善</li>
                        <li>• オプチャ内エンゲージメント向上</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* リアルタイム分析 */}
            <Card>
              <CardHeader>
                <CardTitle>リアルタイム分析</CardTitle>
                <CardDescription>過去24時間のデータ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className=\"grid grid-cols-2 md:grid-cols-4 gap-4\">
                  <div className=\"text-center p-3 bg-blue-50 rounded-lg\">
                    <div className=\"text-xl font-bold text-blue-600\">+342</div>
                    <div className=\"text-sm text-gray-600\">新規閲覧</div>
                  </div>
                  <div className=\"text-center p-3 bg-green-50 rounded-lg\">
                    <div className=\"text-xl font-bold text-green-600\">+89</div>
                    <div className=\"text-sm text-gray-600\">無料DL</div>
                  </div>
                  <div className=\"text-center p-3 bg-purple-50 rounded-lg\">
                    <div className=\"text-xl font-bold text-purple-600\">+12</div>
                    <div className=\"text-sm text-gray-600\">有料購入</div>
                  </div>
                  <div className=\"text-center p-3 bg-orange-50 rounded-lg\">
                    <div className=\"text-xl font-bold text-orange-600\">+156</div>
                    <div className=\"text-sm text-gray-600\">オプチャ参加</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}