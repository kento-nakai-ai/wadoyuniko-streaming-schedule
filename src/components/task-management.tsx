'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { useAgentStore } from '@/stores/agent-store'
import { Task, TaskPriority, TaskStatus, AgentRole } from '@/types/agent'
import { 
  Plus,
  Filter,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Pause,
  ArrowUp,
  Calendar,
  User,
  MessageSquare,
  MoreHorizontal
} from 'lucide-react'

interface TaskFormData {
  title: string
  description: string
  assignedTo: AgentRole
  priority: TaskPriority
  estimatedHours?: number
  dueDate?: string
  tags: string[]
}

export default function TaskManagement() {
  const {
    agents,
    tasks,
    isLoading,
    error,
    createTask,
    updateTaskStatus,
    escalateTask,
    loadTasksForAgent,
    initializeAgents
  } = useAgentStore()

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [selectedPriority, setSelectedPriority] = useState<TaskPriority | 'all'>('all')
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | 'all'>('all')
  const [selectedAgent, setSelectedAgent] = useState<AgentRole | 'all'>('all')
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    assignedTo: 'backend-architect',
    priority: 'P2',
    tags: []
  })

  useEffect(() => {
    initializeAgents()
  }, [initializeAgents])

  const handleCreateTask = async () => {
    if (!formData.title.trim()) return

    const taskData = {
      ...formData,
      createdBy: 'engineering-manager' as AgentRole,
      dueDate: formData.dueDate ? new Date(formData.dueDate) : undefined
    }

    await createTask(taskData)
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      assignedTo: 'backend-architect',
      priority: 'P2',
      tags: []
    })
    setIsCreateDialogOpen(false)
  }

  const handleStatusUpdate = async (taskId: string, newStatus: TaskStatus) => {
    await updateTaskStatus(taskId, newStatus, 'engineering-manager')
  }

  const handleEscalate = async (taskId: string) => {
    await escalateTask(taskId, '技術的複雑性のため上位承認が必要')
  }

  const getPriorityColor = (priority: TaskPriority) => {
    switch (priority) {
      case 'P0': return 'bg-red-100 text-red-800 border-red-200'
      case 'P1': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'P2': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'P3': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200'
      case 'in_progress': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'blocked': return 'bg-red-100 text-red-800 border-red-200'
      case 'pending': return 'bg-gray-100 text-gray-800 border-gray-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: TaskStatus) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="h-4 w-4" />
      case 'in_progress': return <Clock className="h-4 w-4" />
      case 'blocked': return <AlertTriangle className="h-4 w-4" />
      case 'pending': return <Pause className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  // Filter tasks based on selected criteria
  const filteredTasks = tasks.filter(task => {
    if (selectedPriority !== 'all' && task.priority !== selectedPriority) return false
    if (selectedStatus !== 'all' && task.status !== selectedStatus) return false
    if (selectedAgent !== 'all' && task.assignedTo !== selectedAgent) return false
    return true
  })

  const groupedTasks = filteredTasks.reduce((acc, task) => {
    if (!acc[task.status]) acc[task.status] = []
    acc[task.status].push(task)
    return acc
  }, {} as Record<TaskStatus, Task[]>)

  const taskStats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
    blocked: tasks.filter(t => t.status === 'blocked').length,
    p0: tasks.filter(t => t.priority === 'P0').length,
    p1: tasks.filter(t => t.priority === 'P1').length
  }

  if (error) {
    return (
      <div className="p-6">
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800">エラー</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700">{error}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">タスク管理システム</h1>
          <p className="text-muted-foreground">AIエージェントのタスクを管理・追跡</p>
        </div>
        
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              新規タスク
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>新しいタスクを作成</DialogTitle>
              <DialogDescription>
                AIエージェントに割り当てる新しいタスクを作成します。
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">タスク名 *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="例: ユーザー認証機能の実装"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">詳細</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="タスクの詳細な説明を入力してください"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="assignedTo">担当エージェント</Label>
                  <Select 
                    value={formData.assignedTo} 
                    onValueChange={(value: AgentRole) => setFormData(prev => ({ ...prev, assignedTo: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {agents.map(agent => (
                        <SelectItem key={agent.id} value={agent.role}>
                          {agent.name} (Level {agent.level})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">優先度</Label>
                  <Select 
                    value={formData.priority} 
                    onValueChange={(value: TaskPriority) => setFormData(prev => ({ ...prev, priority: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="P0">P0 - 緊急</SelectItem>
                      <SelectItem value="P1">P1 - 高</SelectItem>
                      <SelectItem value="P2">P2 - 中</SelectItem>
                      <SelectItem value="P3">P3 - 低</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="estimatedHours">予想時間（時間）</Label>
                  <Input
                    id="estimatedHours"
                    type="number"
                    min="0.5"
                    step="0.5"
                    value={formData.estimatedHours || ''}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      estimatedHours: e.target.value ? parseFloat(e.target.value) : undefined 
                    }))}
                    placeholder="例: 8"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dueDate">期限</Label>
                  <Input
                    id="dueDate"
                    type="datetime-local"
                    value={formData.dueDate || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                キャンセル
              </Button>
              <Button onClick={handleCreateTask} disabled={!formData.title.trim()}>
                作成
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Task Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{taskStats.total}</div>
            <p className="text-xs text-muted-foreground">全タスク</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-600">{taskStats.pending}</div>
            <p className="text-xs text-muted-foreground">未着手</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{taskStats.inProgress}</div>
            <p className="text-xs text-muted-foreground">進行中</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{taskStats.completed}</div>
            <p className="text-xs text-muted-foreground">完了</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{taskStats.blocked}</div>
            <p className="text-xs text-muted-foreground">ブロック</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{taskStats.p0}</div>
            <p className="text-xs text-muted-foreground">P0 緊急</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">{taskStats.p1}</div>
            <p className="text-xs text-muted-foreground">P1 重要</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            フィルター
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <Label>優先度</Label>
              <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全て</SelectItem>
                  <SelectItem value="P0">P0</SelectItem>
                  <SelectItem value="P1">P1</SelectItem>
                  <SelectItem value="P2">P2</SelectItem>
                  <SelectItem value="P3">P3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>ステータス</Label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全て</SelectItem>
                  <SelectItem value="pending">未着手</SelectItem>
                  <SelectItem value="in_progress">進行中</SelectItem>
                  <SelectItem value="completed">完了</SelectItem>
                  <SelectItem value="blocked">ブロック</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>担当者</Label>
              <Select value={selectedAgent} onValueChange={setSelectedAgent}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全エージェント</SelectItem>
                  {agents.map(agent => (
                    <SelectItem key={agent.id} value={agent.role}>
                      {agent.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task Board */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {(['pending', 'in_progress', 'blocked', 'completed'] as TaskStatus[]).map(status => (
          <Card key={status} className="flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                {getStatusIcon(status)}
                {status === 'pending' && '未着手'}
                {status === 'in_progress' && '進行中'}
                {status === 'blocked' && 'ブロック'}
                {status === 'completed' && '完了'}
                <Badge variant="outline" className="ml-auto">
                  {groupedTasks[status]?.length || 0}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pt-0">
              <ScrollArea className="h-[600px]">
                <div className="space-y-3">
                  {groupedTasks[status]?.map(task => (
                    <Card key={task.id} className="p-3 cursor-pointer hover:shadow-md transition-shadow">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-sm leading-tight">{task.title}</h4>
                          <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </Badge>
                        </div>
                        
                        {task.description && (
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {task.description}
                          </p>
                        )}
                        
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span>{agents.find(a => a.role === task.assignedTo)?.name}</span>
                          
                          {task.estimatedHours && (
                            <>
                              <Clock className="h-3 w-3 ml-2" />
                              <span>{task.estimatedHours}h</span>
                            </>
                          )}
                          
                          {task.dueDate && (
                            <>
                              <Calendar className="h-3 w-3 ml-2" />
                              <span>{task.dueDate.toLocaleDateString()}</span>
                            </>
                          )}
                        </div>
                        
                        {task.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {task.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs px-1 py-0">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-xs text-muted-foreground">
                            {new Date(task.createdAt).toLocaleDateString()}
                          </div>
                          
                          <div className="flex items-center gap-1">
                            {status !== 'completed' && status !== 'blocked' && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-6 px-2 text-xs"
                                onClick={() => handleStatusUpdate(
                                  task.id, 
                                  status === 'pending' ? 'in_progress' : 'completed'
                                )}
                              >
                                {status === 'pending' ? '開始' : '完了'}
                              </Button>
                            )}
                            
                            {(status === 'in_progress' || status === 'blocked') && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-6 px-2 text-xs"
                                onClick={() => handleEscalate(task.id)}
                              >
                                <ArrowUp className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                  
                  {(!groupedTasks[status] || groupedTasks[status].length === 0) && (
                    <div className="text-center py-8 text-muted-foreground">
                      <div className="text-4xl mb-2">📋</div>
                      <p className="text-sm">タスクがありません</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}