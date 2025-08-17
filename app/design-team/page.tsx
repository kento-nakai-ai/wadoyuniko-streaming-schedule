"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  ExternalLink, 
  Download, 
  Image, 
  FileText, 
  Users, 
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  FolderOpen,
  Palette,
  Monitor,
  Smartphone,
  Copy,
  Calendar,
  MessageSquare,
  Zap
} from "lucide-react"
import Link from 'next/link'

export default function DesignTeamPage() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null)

  // デザインチームメンバー
  const designTeam = [
    { 
      name: "ゆき", 
      role: "デザインディレクター", 
      status: "online", 
      speciality: "UI/UX・ブランディング",
      tasks: 5,
      recentWork: "LP素材セット完成"
    },
    { 
      name: "あべ", 
      role: "外注デザイナー", 
      status: "online", 
      speciality: "グラフィック・サムネイル",
      tasks: 3,
      recentWork: "特典サムネイル制作中"
    }
  ]

  // 特典サムネイル管理
  const thumbnailCategories = [
    {
      title: "事前配布・無料プレゼント特典",
      count: "10個",
      status: "完成",
      canvaLink: "https://www.canva.com/design/DAGv9s8vrRs/8VLrDZTScdmjMv_RlVOidw/view?utm_content=DAGv9s8vrRs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      description: "無料で配布する特典のサムネイル集",
      lastUpdate: "8/13更新"
    },
    {
      title: "バイブコーディングコース購入者特典",
      count: "6個",
      status: "完成",
      canvaLink: "https://www.canva.com/design/DAGwPdG3_hQ/YdoVrLI9Kq1Gs8FjcsaC6w/view?utm_content=DAGwPdG3_hQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      description: "コース購入者向けの特典サムネイル",
      lastUpdate: "8/14更新"
    },
    {
      title: "セミナー参加者限定特典",
      count: "11個",
      status: "追加配布予定",
      canvaLink: "https://www.canva.com/design/DAGwD-r-U1A/klN8d4JPTuEIhmM-2HhPsw/view?utm_content=DAGwD-r-U1A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      description: "セミナー限定で配布する特典サムネイル",
      lastUpdate: "8/15更新"
    }
  ]

  // LP用素材管理
  const lpMaterials = [
    {
      title: "セミナータイトルサムネイル",
      type: "メインビジュアル",
      canvaLink: "https://www.canva.com/design/DAGwMrGOSus/zGViYeAtJQRBgv-wTKKLCw/view?utm_content=DAGwMrGOSus&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      usage: "LP トップ画像",
      status: "完成"
    },
    {
      title: "自己紹介画像",
      type: "プロフィール",
      canvaLink: "https://www.canva.com/design/DAGwO736RTI/tYJbGYjQDoMBVGyVIcWYSA/view?utm_content=DAGwO736RTI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      usage: "わど・ユニコ紹介セクション",
      status: "完成"
    },
    {
      title: "参加ボタン",
      type: "CTA",
      canvaLink: "https://www.canva.com/design/DAGwO1ZHdTc/vPBBKck3f1vVItZAFLVGJQ/view?utm_content=DAGwO1ZHdTc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      usage: "セミナー申込ボタン",
      status: "完成"
    },
    {
      title: "特典紹介（5個版）",
      type: "特典セクション",
      canvaLink: "https://www.canva.com/design/DAGwPIfkPGY/JJ8h8u4AH6-Ana7phCz3sg/view?utm_content=DAGwPIfkPGY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      usage: "特典アピール（簡易版）",
      status: "完成"
    },
    {
      title: "特典紹介（10個版）",
      type: "特典セクション",
      canvaLink: "https://www.canva.com/design/DAGwSaZcuOI/_5Qcqk3lcgwh-wDWIZwr4Q/view?utm_content=DAGwSaZcuOI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      usage: "特典アピール（詳細版）",
      status: "完成"
    },
    {
      title: "セミナー内容",
      type: "コンテンツ説明",
      canvaLink: "https://www.canva.com/design/DAGwPGCmHTc/7Y-Stnt8fjHy_vlNG7q7UA/view?utm_content=DAGwPGCmHTc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      usage: "セミナーアジェンダ表示",
      status: "完成"
    },
    {
      title: "セミナーベネフィット",
      type: "メリット訴求",
      canvaLink: "https://www.canva.com/design/DAGwPSJao8k/VnnRlP3rMK43Q_lbSjx7bA/view?utm_content=DAGwPSJao8k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
      usage: "参加メリット説明",
      status: "完成"
    }
  ]

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedLink(id)
      setTimeout(() => setCopiedLink(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "完成": return "bg-green-100 text-green-800"
      case "追加配布予定": return "bg-blue-100 text-blue-800"
      case "制作中": return "bg-yellow-100 text-yellow-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getTeamStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500"
      case "away": return "bg-yellow-500"
      case "offline": return "bg-gray-400"
      default: return "bg-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* ヘッダー */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                🎨 デザインチーム ダッシュボード
              </h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                Canvaアセット管理・LP素材・サムネイル統合管理
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button asChild variant="outline" size="sm">
                <a href="https://drive.google.com/drive/folders/19eLfXB9bjIk6fRQcLgJK9u3bcZR96nwV" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  画像フォルダ
                </a>
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                依頼フォーム
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* チーム概要 */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="text-center">
              <Palette className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>完成アセット</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold">34点</div>
              <p className="text-sm text-muted-foreground">LP素材 + サムネイル</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Users className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>チームメンバー</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold">2名</div>
              <p className="text-sm text-muted-foreground">ゆき + あべ（外注）</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <CheckCircle className="w-8 h-8 mx-auto text-primary mb-2" />
              <CardTitle>進捗状況</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold">90%</div>
              <p className="text-sm text-muted-foreground">ローンチ準備完了度</p>
            </CardContent>
          </Card>
        </div>

        {/* チームメンバー */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              デザインチームメンバー
            </CardTitle>
            <CardDescription>
              現在のチーム状況と担当領域
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {designTeam.map((member, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="text-sm font-semibold">
                        {member.name}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getTeamStatusColor(member.status)}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{member.name}</h3>
                      <Badge variant="secondary" className="text-xs">{member.role}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{member.speciality}</p>
                    <p className="text-xs text-blue-600">{member.recentWork}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{member.tasks}</div>
                    <div className="text-xs text-muted-foreground">タスク</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* メインコンテンツ */}
        <Tabs defaultValue="thumbnails" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="thumbnails">特典サムネイル</TabsTrigger>
            <TabsTrigger value="lp-materials">LP素材</TabsTrigger>
            <TabsTrigger value="requests">制作依頼</TabsTrigger>
          </TabsList>

          {/* 特典サムネイル管理 */}
          <TabsContent value="thumbnails" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  特典サムネイル管理（横型）
                </CardTitle>
                <CardDescription>
                  3カテゴリー・合計27個のサムネイルを一元管理
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {thumbnailCategories.map((category, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{category.title}</h3>
                            <Badge className={getStatusColor(category.status)}>
                              {category.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{category.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Image className="w-4 h-4" />
                              {category.count}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {category.lastUpdate}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(category.canvaLink, `thumb-${index}`)}
                          >
                            {copiedLink === `thumb-${index}` ? (
                              <CheckCircle className="w-4 h-4 mr-2" />
                            ) : (
                              <Copy className="w-4 h-4 mr-2" />
                            )}
                            {copiedLink === `thumb-${index}` ? 'コピー済み' : 'リンクコピー'}
                          </Button>
                          <Button asChild size="sm">
                            <a href={category.canvaLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Canvaで開く
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LP素材管理 */}
          <TabsContent value="lp-materials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  LP用素材管理
                </CardTitle>
                <CardDescription>
                  セミナーランディングページ用の全素材を一元管理
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {lpMaterials.map((material, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{material.title}</h3>
                          <Badge variant="outline" className="text-xs">{material.type}</Badge>
                          <Badge className={getStatusColor(material.status)}>
                            {material.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{material.usage}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(material.canvaLink, `lp-${index}`)}
                        >
                          {copiedLink === `lp-${index}` ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button asChild size="sm" variant="outline">
                          <a href={material.canvaLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 使用用途別分類 */}
            <Card>
              <CardHeader>
                <CardTitle>使用用途別分類</CardTitle>
                <CardDescription>
                  LP内での配置と用途を明確化
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">メインビジュアル系</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>セミナータイトル</span>
                        <Badge variant="outline">完成</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>自己紹介画像</span>
                        <Badge variant="outline">完成</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">アクション系</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>参加ボタン</span>
                        <Badge variant="outline">完成</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>特典訴求画像</span>
                        <Badge variant="outline">2種類完成</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">コンテンツ系</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>セミナー内容</span>
                        <Badge variant="outline">完成</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>ベネフィット説明</span>
                        <Badge variant="outline">完成</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">デバイス対応</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>デスクトップ版</span>
                        <Badge variant="outline">対応済み</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>モバイル版</span>
                        <Badge variant="outline">要確認</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 制作依頼管理 */}
          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  新規制作依頼
                </CardTitle>
                <CardDescription>
                  速やかな依頼が必要な場合の管理フォーム
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">現在の制作状況</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm">特典サムネイル</span>
                        <Badge className="bg-green-100 text-green-800">完了</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm">LP素材セット</span>
                        <Badge className="bg-green-100 text-green-800">完了</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <span className="text-sm">追加サムネイル</span>
                        <Badge className="bg-yellow-100 text-yellow-800">待機中</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">緊急依頼フォーム</h3>
                    <div className="space-y-3">
                      <Button className="w-full" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        ゆきさんに直接依頼
                      </Button>
                      <Button className="w-full" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        あべさんに外注依頼
                      </Button>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>注意:</strong> 新規制作物は速やかな依頼が必要です。
                          納期に余裕を持って依頼してください。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 制作スケジュール */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  制作スケジュール
                </CardTitle>
                <CardDescription>
                  ローンチまでの制作タイムライン
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <div className="font-medium">基本素材セット完成</div>
                      <div className="text-sm text-muted-foreground">LP用素材・特典サムネイル</div>
                    </div>
                    <div className="text-sm text-green-600">完了</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <div className="font-medium">追加制作物対応</div>
                      <div className="text-sm text-muted-foreground">セミナー後の追加需要に対応</div>
                    </div>
                    <div className="text-sm text-blue-600">待機中</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    <div className="flex-1">
                      <div className="font-medium">緊急対応枠</div>
                      <div className="text-sm text-muted-foreground">ローンチ期間中の急な制作依頼</div>
                    </div>
                    <div className="text-sm text-yellow-600">準備済み</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 重要なリンク */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5" />
              重要なリンク・リソース
            </CardTitle>
            <CardDescription>
              デザインチームが使用する主要リソース
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button asChild variant="outline" className="h-auto p-4 justify-start">
                <a href="https://drive.google.com/drive/folders/19eLfXB9bjIk6fRQcLgJK9u3bcZR96nwV" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Google Drive</div>
                    <div className="text-sm text-muted-foreground">画像データ保存フォルダ</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
              </Button>
              
              <Button asChild variant="outline" className="h-auto p-4 justify-start">
                <Link href="/dashboard">
                  <Monitor className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">プロジェクトダッシュボード</div>
                    <div className="text-sm text-muted-foreground">全体進捗確認</div>
                  </div>
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="h-auto p-4 justify-start">
                <Link href="/team-overview">
                  <Users className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">チーム総合</div>
                    <div className="text-sm text-muted-foreground">全チームメンバー状況</div>
                  </div>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 justify-start">
                <MessageSquare className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-medium">制作依頼チャネル</div>
                  <div className="text-sm text-muted-foreground">緊急制作依頼窓口</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}