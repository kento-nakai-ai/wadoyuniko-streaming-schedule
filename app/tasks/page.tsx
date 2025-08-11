import TaskManagement from '@/components/task-management'

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                タスク管理システム
              </h1>
              <p className="text-muted-foreground">
                AIエージェントのタスクを効率的に管理・追跡
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div>
                <span className="font-semibold text-blue-600">12</span> エージェント
              </div>
              <div>
                <span className="font-semibold text-green-600">87</span> 完了率%
              </div>
              <div>
                <span className="font-semibold text-orange-600">2.5h</span> 平均処理時間
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main>
        <TaskManagement />
      </main>
    </div>
  )
}