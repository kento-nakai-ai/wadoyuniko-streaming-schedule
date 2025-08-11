// Claude API Client for Agent System

interface ClaudeMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ClaudeResponse {
  content: [{
    type: 'text'
    text: string
  }]
  model: string
  stop_reason: string
  usage: {
    input_tokens: number
    output_tokens: number
  }
}

export class ClaudeClient {
  private apiKey: string
  private baseUrl = 'https://api.anthropic.com/v1/messages'

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.CLAUDE_API_KEY || ''
    if (!this.apiKey) {
      throw new Error('Claude API key is required')
    }
  }

  async sendMessage(
    messages: ClaudeMessage[], 
    options: {
      model?: 'claude-3-5-sonnet-20241022' | 'claude-3-opus-20240229'
      maxTokens?: number
      temperature?: number
      systemPrompt?: string
    } = {}
  ): Promise<string> {
    const {
      model = 'claude-3-5-sonnet-20241022',
      maxTokens = 4096,
      temperature = 0.7,
      systemPrompt
    } = options

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model,
          max_tokens: maxTokens,
          temperature,
          system: systemPrompt,
          messages
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(`Claude API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`)
      }

      const data: ClaudeResponse = await response.json()
      return data.content[0]?.text || ''
    } catch (error) {
      console.error('Claude API request failed:', error)
      throw error
    }
  }

  async generateAgentResponse(
    agentRole: string,
    agentPersonality: any,
    context: string,
    userMessage: string
  ): Promise<string> {
    const systemPrompt = `
あなたは${agentRole}として行動してください。

# あなたの特徴
- 役職: ${agentRole}
- コミュニケーションスタイル: ${agentPersonality.communicationStyle}
- 意思決定スタイル: ${agentPersonality.decisionMaking}
- 作業スタイル: ${agentPersonality.workStyle}
- 優先言語: ${agentPersonality.preferredLanguage}
- 背景: ${agentPersonality.background}
${agentPersonality.catchphrase ? `- キャッチフレーズ: "${agentPersonality.catchphrase}"` : ''}

# 現在のコンテキスト
${context}

# 指示
1. あなたの役職に適した専門的な回答をしてください
2. 必要に応じて他のエージェントとの連携を提案してください
3. 具体的なアクションアイテムを含めてください
4. 日本語で回答してください（技術的な専門用語は英語も併記可）

あなたの個性と専門性を活かして回答してください。
`

    const messages: ClaudeMessage[] = [
      {
        role: 'user',
        content: userMessage
      }
    ]

    return this.sendMessage(messages, {
      systemPrompt,
      temperature: 0.8,
      maxTokens: 2048
    })
  }

  async analyzeCode(code: string, language: string): Promise<{
    issues: Array<{
      severity: 'error' | 'warning' | 'info'
      message: string
      line?: number
      suggestion?: string
    }>
    summary: string
    qualityScore: number
  }> {
    const systemPrompt = `
あなたはコードレビューの専門家です。以下のコードを分析し、JSON形式で結果を返してください。

# 分析観点
1. セキュリティ脆弱性
2. パフォーマンス問題
3. 保守性
4. 可読性
5. ベストプラクティス準拠

# 回答形式
{
  "issues": [
    {
      "severity": "error|warning|info",
      "message": "問題の説明",
      "line": 行番号（わかる場合）,
      "suggestion": "改善提案"
    }
  ],
  "summary": "全体的な評価とコメント",
  "qualityScore": 0-100の数値
}
`

    const response = await this.sendMessage([
      {
        role: 'user',
        content: `以下の${language}コードを分析してください：\n\n\`\`\`${language}\n${code}\n\`\`\``
      }
    ], {
      systemPrompt,
      temperature: 0.3
    })

    try {
      return JSON.parse(response)
    } catch (error) {
      return {
        issues: [{
          severity: 'error' as const,
          message: 'コード分析中にエラーが発生しました',
          suggestion: 'もう一度試すか、手動でレビューしてください'
        }],
        summary: 'コード分析に失敗しました',
        qualityScore: 0
      }
    }
  }

  async generateTaskBreakdown(
    projectDescription: string,
    requirements: string[]
  ): Promise<{
    tasks: Array<{
      title: string
      description: string
      estimatedHours: number
      priority: 'low' | 'medium' | 'high' | 'critical'
      assignedRole: string
      dependencies: string[]
    }>
    timeline: string
    risks: string[]
  }> {
    const systemPrompt = `
あなたはプロジェクトマネジメントの専門家です。プロジェクトの要件を分析し、タスク分解を行ってJSON形式で回答してください。

# タスク分解の原則
1. 各タスクは1-16時間程度で完了可能
2. 依存関係を明確にする
3. 適切な担当者（役職）を割り当てる
4. 優先順位を設定する
5. リスクを特定する

# 回答形式
{
  "tasks": [
    {
      "title": "タスク名",
      "description": "詳細な説明",
      "estimatedHours": 時間数,
      "priority": "low|medium|high|critical",
      "assignedRole": "担当役職",
      "dependencies": ["依存するタスクのタイトル"]
    }
  ],
  "timeline": "全体のタイムライン説明",
  "risks": ["リスク1", "リスク2"]
}
`

    const userMessage = `
プロジェクト: ${projectDescription}

要件:
${requirements.map((req, i) => `${i + 1}. ${req}`).join('\n')}

このプロジェクトのタスク分解を行ってください。
`

    const response = await this.sendMessage([
      { role: 'user', content: userMessage }
    ], {
      systemPrompt,
      temperature: 0.5
    })

    try {
      return JSON.parse(response)
    } catch (error) {
      return {
        tasks: [],
        timeline: 'タスク分解に失敗しました',
        risks: ['タスク分解エラー']
      }
    }
  }
}