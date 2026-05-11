import { DocsPage } from '../../layouts/DocsPage'
import { AgentStep } from '@caindev/ui'

export function AgentStepPage() {
  return (
      <DocsPage
        title="AgentStep"
        description="Vertical step list showing the progress of a multi-step agent plan. Each step uses the shared OperationStatus lifecycle vocabulary."
        preview={
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <AgentStep
              steps={[
                { id: '1', label: 'Retrieve context', description: 'Searching vector store for relevant docs', status: 'completed', duration: 342 },
                { id: '2', label: 'Generate response', description: 'Calling claude-3-5-sonnet-20241022', status: 'running' },
                { id: '3', label: 'Validate output', description: 'Running schema validation', status: 'pending' },
                { id: '4', label: 'Store result', description: 'Writing to database', status: 'idle' },
              ]}
            />
            <AgentStep
              steps={[
                { id: '1', label: 'Parse invoice', status: 'completed', duration: 120 },
                { id: '2', label: 'Extract fields', status: 'completed', duration: 88 },
                { id: '3', label: 'Reconcile', status: 'failed' },
                { id: '4', label: 'Route for review', status: 'skipped' },
              ]}
            />
          </div>
        }
        code={`import { AgentStep } from '@caindev/ui'

<AgentStep
  steps={[
    {
      id: '1',
      label: 'Retrieve context',
      description: 'Searching vector store',
      status: 'completed',
      duration: 342,
    },
    {
      id: '2',
      label: 'Generate response',
      status: 'running',
    },
    {
      id: '3',
      label: 'Validate output',
      status: 'pending',
    },
  ]}
/>`}
        props={[
          { name: 'steps', type: 'AgentStepItem[]', default: '—', description: 'Array of step definitions.' },
          { name: 'AgentStepItem', type: '{ id: string; label: string; status: OperationStatus; description?: string; duration?: number }', default: '—', description: 'Shape for each step object in steps.' },
          { name: 'className', type: 'string', default: '—', description: 'CSS class applied to the root wrapper.' },
          { name: 'style', type: 'React.CSSProperties', default: '—', description: 'Inline styles merged onto the root wrapper.' },
        ]}
      />
  )
}
