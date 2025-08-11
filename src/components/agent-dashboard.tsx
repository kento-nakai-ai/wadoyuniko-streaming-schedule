'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useAgentStore, useSelectedAgent, useAgentsByLevel } from '@/stores/agent-store'
import { AgentRole, TaskPriority, TaskStatus } from '@/types/agent'
import { 
  Users, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Zap,
  TrendingUp,
  Activity
} from 'lucide-react'

export default function AgentDashboard() {
  const {
    agents,
    selectedAgent,
    tasks,
    isLoading,
    error,
    initializeAgents,
    selectAgent,
    getOrganizationMetrics
  } = useAgentStore()

  const selectedAgentData = useSelectedAgent()
  
  useEffect(() => {
    initializeAgents()
  }, [initializeAgents])

  const orgMetrics = getOrganizationMetrics()

  const getPriorityColor = (priority: TaskPriority) => {
    switch (priority) {
      case 'P0': return 'bg-red-500'
      case 'P1': return 'bg-orange-500'
      case 'P2': return 'bg-yellow-500'
      case 'P3': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'in_progress': return 'bg-blue-500'
      case 'blocked': return 'bg-red-500'
      case 'pending': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getLevelBadge = (level: number) => {
    const colors = {
      1: 'bg-green-100 text-green-800',
      2: 'bg-blue-100 text-blue-800',
      3: 'bg-purple-100 text-purple-800',
      4: 'bg-orange-100 text-orange-800',
      5: 'bg-red-100 text-red-800'
    }
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  if (error) {
    return (
      <div className="p-6">
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800">Error</CardTitle>
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
      {/* Organization Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orgMetrics.totalAgents}</div>
            <p className="text-xs text-muted-foreground">
              {orgMetrics.activeAgents} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orgMetrics.totalTasks}</div>
            <p className="text-xs text-muted-foreground">
              {orgMetrics.completedTasks} completed ({orgMetrics.completionRate.toFixed(1)}%)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Tasks</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{orgMetrics.p0Tasks}</div>
            <p className="text-xs text-muted-foreground">
              {orgMetrics.p1Tasks} high priority
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Lead Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orgMetrics.averageLeadTime.toFixed(1)}h</div>
            <p className="text-xs text-muted-foreground">
              Per task completion
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="organization" className="space-y-4">
        <TabsList>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="agent-detail">Agent Details</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
        </TabsList>

        <TabsContent value="organization" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Agent Hierarchy */}
            <Card>
              <CardHeader>
                <CardTitle>Agent Hierarchy</CardTitle>
                <CardDescription>Organization structure by levels</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {[5, 4, 3, 2, 1].map(level => {
                      const levelAgents = agents.filter(a => a.level === level)
                      if (levelAgents.length === 0) return null
                      
                      return (
                        <div key={level} className="space-y-2">
                          <h4 className="font-semibold text-sm">
                            Level {level} 
                            <Badge className={`ml-2 ${getLevelBadge(level)}`}>
                              {levelAgents.length} agents
                            </Badge>
                          </h4>
                          <div className="grid gap-2">
                            {levelAgents.map(agent => (
                              <div
                                key={agent.id}
                                className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-muted/50"
                                onClick={() => selectAgent(agent.role)}
                              >
                                <div>
                                  <p className="font-medium text-sm">{agent.name}</p>
                                  <p className="text-xs text-muted-foreground capitalize">
                                    {agent.role.replace('-', ' ')}
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Badge variant={agent.isActive ? 'default' : 'secondary'}>
                                    {agent.isActive ? 'Active' : 'Inactive'}
                                  </Badge>
                                  <Badge variant="outline">
                                    {agent.currentTasks.length} tasks
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Active Tasks Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Active Tasks by Priority</CardTitle>
                <CardDescription>Current workload distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-3">
                    {['P0', 'P1', 'P2', 'P3'].map(priority => {
                      const priorityTasks = agents
                        .flatMap(a => a.currentTasks)
                        .filter(t => t.priority === priority as TaskPriority)
                      
                      return (
                        <div key={priority} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm">
                              Priority {priority}
                            </h4>
                            <Badge className={getPriorityColor(priority as TaskPriority)}>
                              {priorityTasks.length} tasks
                            </Badge>
                          </div>
                          {priorityTasks.slice(0, 3).map(task => (
                            <div key={task.id} className="p-2 border rounded text-sm">
                              <p className="font-medium truncate">{task.title}</p>
                              <p className="text-xs text-muted-foreground">
                                Assigned to: {task.assignedTo.replace('-', ' ')}
                              </p>
                            </div>
                          ))}
                          {priorityTasks.length > 3 && (
                            <p className="text-xs text-muted-foreground px-2">
                              ...and {priorityTasks.length - 3} more
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="agent-detail" className="space-y-4">
          {selectedAgentData ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Agent Info */}
              <Card>
                <CardHeader>
                  <CardTitle>{selectedAgentData.name}</CardTitle>
                  <CardDescription className="capitalize">
                    {selectedAgentData.role.replace('-', ' ')} • Level {selectedAgentData.level}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Responsibilities</h4>
                    <ul className="text-sm space-y-1">
                      {selectedAgentData.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Authorities</h4>
                    <ul className="text-sm space-y-1">
                      {selectedAgentData.authorities.map((auth, idx) => (
                        <li key={idx} className="flex items-start">
                          <Zap className="h-3 w-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {auth}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedAgentData.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Tasks</CardTitle>
                  <CardDescription>
                    {selectedAgentData.currentTasks.length} active tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3">
                      {selectedAgentData.currentTasks.map(task => (
                        <div key={task.id} className="p-3 border rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="font-medium text-sm">{task.title}</h5>
                            <div className="flex space-x-1">
                              <Badge className={getPriorityColor(task.priority)}>
                                {task.priority}
                              </Badge>
                              <Badge className={getStatusColor(task.status)}>
                                {task.status.replace('_', ' ')}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">
                            {task.description}
                          </p>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Created: {task.createdAt.toLocaleDateString()}</span>
                            {task.dueDate && (
                              <span>Due: {task.dueDate.toLocaleDateString()}</span>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      {selectedAgentData.currentTasks.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                          <p>No active tasks</p>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="py-8">
                <div className="text-center text-muted-foreground">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <p>Select an agent to view details</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="communication" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Communication Channels</CardTitle>
              <CardDescription>Agent interaction and messaging</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <MessageSquare className="h-8 w-8 mx-auto mb-2" />
                <p>Communication interface coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}