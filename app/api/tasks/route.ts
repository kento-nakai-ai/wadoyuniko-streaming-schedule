import { NextRequest, NextResponse } from 'next/server'
import { AgentService } from '@/services/agent-service'
import { TaskPriority, AgentRole } from '@/types/agent'

// Initialize the agent service
const agentService = new AgentService()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const assignedTo = searchParams.get('assignedTo') as AgentRole | null
    const status = searchParams.get('status')
    const priority = searchParams.get('priority') as TaskPriority | null

    let tasks = []

    if (assignedTo) {
      tasks = agentService.getTasksByAgent(assignedTo)
    } else if (priority) {
      tasks = agentService.getTasksByPriority(priority)
    } else {
      // Get all tasks from all agents
      const allAgents = agentService.getAllAgents()
      tasks = allAgents.flatMap(agent => agent.currentTasks)
    }

    // Apply status filter if provided
    if (status) {
      tasks = tasks.filter(task => task.status === status)
    }

    return NextResponse.json({ tasks })
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      assignedTo,
      priority = 'P2',
      estimatedHours,
      dueDate,
      tags = []
    } = body

    // Validate required fields
    if (!title || !assignedTo) {
      return NextResponse.json(
        { error: 'Title and assignedTo are required' },
        { status: 400 }
      )
    }

    // Create the task
    const task = agentService.createTask({
      title,
      description,
      assignedTo,
      createdBy: 'engineering-manager', // TODO: Get from auth
      priority,
      status: 'pending',
      estimatedHours,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      tags
    })

    return NextResponse.json({ task }, { status: 201 })
  } catch (error) {
    console.error('Error creating task:', error)
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    )
  }
}