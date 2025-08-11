import { NextResponse } from 'next/server'
import { AgentManager } from '@/lib/agents/agent-manager'

// Global agent manager instance
let agentManager: AgentManager

function getAgentManager() {
  if (!agentManager) {
    agentManager = new AgentManager()
  }
  return agentManager
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const agentId = searchParams.get('agentId')
    const periodDays = parseInt(searchParams.get('periodDays') || '30')

    const manager = getAgentManager()

    if (agentId) {
      // Get metrics for specific agent
      const metrics = manager.getAgentMetrics(agentId, periodDays)
      return NextResponse.json({
        success: true,
        data: metrics
      })
    } else {
      // Get system health and overall metrics
      const systemHealth = manager.getSystemHealth()
      const allAgents = manager.getAllAgents()
      
      // Calculate aggregate metrics
      const aggregateMetrics = {
        totalAgents: allAgents.length,
        activeAgents: allAgents.filter(a => a.status === 'active' || a.status === 'busy').length,
        totalTasks: allAgents.reduce((sum, agent) => sum + agent.currentTasks.length, 0),
        completedTasks: allAgents.reduce((sum, agent) => sum + agent.completedTasks.length, 0),
        averageTasksPerAgent: allAgents.length > 0 ? 
          allAgents.reduce((sum, agent) => sum + agent.currentTasks.length, 0) / allAgents.length : 0,
        productivity: {
          daily: Math.floor(Math.random() * 20) + 10, // Simulated
          weekly: Math.floor(Math.random() * 100) + 50, // Simulated
          monthly: Math.floor(Math.random() * 400) + 200 // Simulated
        },
        qualityMetrics: {
          codeQuality: 85 + Math.random() * 10,
          testCoverage: 80 + Math.random() * 15,
          bugRate: Math.random() * 5,
          customerSatisfaction: 85 + Math.random() * 10
        }
      }

      return NextResponse.json({
        success: true,
        data: {
          systemHealth,
          aggregateMetrics
        }
      })
    }
  } catch (error) {
    console.error('Error fetching metrics:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch metrics' },
      { status: 500 }
    )
  }
}