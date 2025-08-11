import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Agent, AgentRole, Task, Message, DailyStandup } from '@/types/agent'
import { AgentService } from '@/services/agent-service'

interface AgentState {
  // Service instance
  agentService: AgentService

  // Current state
  selectedAgent: AgentRole | null
  agents: Agent[]
  tasks: Task[]
  messages: Message[]
  dailyStandups: DailyStandup[]
  
  // Loading states
  isLoading: boolean
  error: string | null

  // Actions
  initializeAgents: () => void
  selectAgent: (role: AgentRole) => void
  createTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateTaskStatus: (taskId: string, status: Task['status'], updatedBy: AgentRole) => void
  sendMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void
  loadTasksForAgent: (role: AgentRole) => void
  loadMessages: (channel: string) => void
  escalateTask: (taskId: string, reason: string) => void
  getAgentWorkload: (role: AgentRole) => { activeTasks: number; averageTaskDuration: number; completionRate: number }
  getOrganizationMetrics: () => any
}

export const useAgentStore = create<AgentState>()(
  devtools(
    (set, get) => ({
      // Initial state
      agentService: new AgentService(),
      selectedAgent: null,
      agents: [],
      tasks: [],
      messages: [],
      dailyStandups: [],
      isLoading: false,
      error: null,

      // Actions
      initializeAgents: () => {
        set({ isLoading: true, error: null })
        try {
          const { agentService } = get()
          const agents = agentService.getAllAgents()
          set({ agents, isLoading: false })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to initialize agents', 
            isLoading: false 
          })
        }
      },

      selectAgent: (role: AgentRole) => {
        const { agentService } = get()
        const agent = agentService.getAgent(role)
        if (agent) {
          set({ selectedAgent: role })
          get().loadTasksForAgent(role)
        }
      },

      createTask: (taskData) => {
        set({ isLoading: true, error: null })
        try {
          const { agentService } = get()
          const newTask = agentService.createTask(taskData)
          
          // Update agents list to reflect new task assignment
          const updatedAgents = agentService.getAllAgents()
          set({ 
            agents: updatedAgents,
            isLoading: false 
          })
          
          // If the selected agent is assigned this task, reload their tasks
          const { selectedAgent } = get()
          if (selectedAgent === taskData.assignedTo) {
            get().loadTasksForAgent(selectedAgent)
          }
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to create task', 
            isLoading: false 
          })
        }
      },

      updateTaskStatus: (taskId, status, updatedBy) => {
        set({ isLoading: true, error: null })
        try {
          const { agentService } = get()
          const success = agentService.updateTaskStatus(taskId, status, updatedBy)
          
          if (success) {
            // Update agents list to reflect task status changes
            const updatedAgents = agentService.getAllAgents()
            set({ agents: updatedAgents })
            
            // Reload tasks for selected agent if applicable
            const { selectedAgent } = get()
            if (selectedAgent) {
              get().loadTasksForAgent(selectedAgent)
            }
          }
          
          set({ isLoading: false })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to update task status', 
            isLoading: false 
          })
        }
      },

      sendMessage: (messageData) => {
        try {
          const { agentService } = get()
          const newMessage = agentService.sendMessage(messageData)
          
          // Add message to current messages if it's for the same channel
          const { messages } = get()
          const updatedMessages = [...messages, newMessage]
            .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
          
          set({ messages: updatedMessages })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to send message'
          })
        }
      },

      loadTasksForAgent: (role) => {
        try {
          const { agentService } = get()
          const tasks = agentService.getTasksByAgent(role)
          set({ tasks })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to load tasks'
          })
        }
      },

      loadMessages: (channel) => {
        try {
          const { agentService } = get()
          const messages = agentService.getMessagesByChannel(channel)
          set({ messages })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to load messages'
          })
        }
      },

      escalateTask: (taskId, reason) => {
        set({ isLoading: true, error: null })
        try {
          const { agentService } = get()
          const success = agentService.escalateTask(taskId, reason)
          
          if (success) {
            // Update agents and tasks
            const updatedAgents = agentService.getAllAgents()
            set({ agents: updatedAgents })
            
            const { selectedAgent } = get()
            if (selectedAgent) {
              get().loadTasksForAgent(selectedAgent)
            }
          }
          
          set({ isLoading: false })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to escalate task', 
            isLoading: false 
          })
        }
      },

      getAgentWorkload: (role) => {
        const { agentService } = get()
        return agentService.getAgentWorkload(role)
      },

      getOrganizationMetrics: () => {
        const { agentService } = get()
        return agentService.getOrganizationMetrics()
      }
    }),
    {
      name: 'agent-store'
    }
  )
)

// Selectors for commonly used derived state
export const useSelectedAgent = () => {
  const { selectedAgent, agents } = useAgentStore()
  return selectedAgent ? agents.find(a => a.role === selectedAgent) : null
}

export const useAgentsByLevel = (level: number) => {
  const agents = useAgentStore(state => state.agents)
  return agents.filter(a => a.level === level)
}

export const useTasksByPriority = (priority: Task['priority']) => {
  const tasks = useAgentStore(state => state.tasks)
  return tasks.filter(t => t.priority === priority)
}

export const useActiveAgents = () => {
  const agents = useAgentStore(state => state.agents)
  return agents.filter(a => a.isActive)
}