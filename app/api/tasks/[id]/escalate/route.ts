import { NextRequest, NextResponse } from 'next/server'
import { AgentService } from '@/services/agent-service'
import { CommunicationService } from '@/services/communication-service'

const agentService = new AgentService()
const communicationService = new CommunicationService()

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { reason, escalatedBy = 'engineering-manager' } = body
    
    const taskId = params.id

    if (!reason) {
      return NextResponse.json(
        { error: 'Escalation reason is required' },
        { status: 400 }
      )
    }

    // Escalate the task
    const success = agentService.escalateTask(taskId, reason)

    if (!success) {
      return NextResponse.json(
        { error: 'Task not found or escalation failed' },
        { status: 404 }
      )
    }

    // Send escalation notification via communication service
    try {
      await communicationService.triggerNotification('task_escalated', 'P1', {
        taskId,
        message: `Task ${taskId} has been escalated. Reason: ${reason}`,
        initiatedBy: escalatedBy
      })
    } catch (commError) {
      console.error('Failed to send escalation notification:', commError)
      // Continue even if notification fails
    }

    return NextResponse.json({ 
      message: 'Task escalated successfully',
      taskId,
      reason,
      escalatedBy 
    })
  } catch (error) {
    console.error('Error escalating task:', error)
    return NextResponse.json(
      { error: 'Failed to escalate task' },
      { status: 500 }
    )
  }
}