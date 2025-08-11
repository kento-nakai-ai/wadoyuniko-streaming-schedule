import { NextRequest, NextResponse } from 'next/server'
import { AgentService } from '@/services/agent-service'
import { TaskStatus, AgentRole } from '@/types/agent'

const agentService = new AgentService()

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { status, actualHours, updatedBy = 'engineering-manager' } = body
    
    const taskId = params.id

    if (!status) {
      return NextResponse.json(
        { error: 'Status is required for task update' },
        { status: 400 }
      )
    }

    // Update task status
    const success = agentService.updateTaskStatus(
      taskId,
      status as TaskStatus,
      updatedBy as AgentRole
    )

    if (!success) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      message: 'Task updated successfully',
      taskId,
      status 
    })
  } catch (error) {
    console.error('Error updating task:', error)
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    )
  }
}