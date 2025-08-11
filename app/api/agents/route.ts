import { NextResponse } from 'next/server'
import { AgentManager } from '@/lib/agents/agent-manager'

// Global agent manager instance (in production, this would be managed differently)
let agentManager: AgentManager

function getAgentManager() {
  if (!agentManager) {
    agentManager = new AgentManager()
  }
  return agentManager
}

export async function GET() {
  try {
    const manager = getAgentManager()
    const agents = manager.getAllAgents()
    
    return NextResponse.json({
      success: true,
      data: agents
    })
  } catch (error) {
    console.error('Error fetching agents:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch agents' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const { agentId, action, data } = await request.json()
    const manager = getAgentManager()

    switch (action) {
      case 'update-status':
        manager.updateAgentStatus(agentId, data.status)
        return NextResponse.json({ success: true })

      case 'send-message':
        const message = await manager.sendMessage({
          fromAgent: data.fromAgent || 'user',
          toAgent: agentId,
          type: data.type || 'general',
          content: data.content
        })
        return NextResponse.json({ success: true, data: message })

      case 'interact':
        const response = await manager.processAgentInteraction(
          agentId,
          data.message,
          {
            currentTasks: data.currentTasks,
            recentMessages: data.recentMessages,
            systemStatus: data.systemStatus
          }
        )
        return NextResponse.json({ success: true, data: { response } })

      default:
        return NextResponse.json(
          { success: false, error: 'Unknown action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Error processing agent request:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    )
  }
}