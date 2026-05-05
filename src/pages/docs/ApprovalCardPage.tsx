import { useState } from 'react'
import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { ApprovalCard } from '../../components/ApprovalCard'

function InteractiveDemo() {
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleApprove = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false); setResult('approved') }, 1200)
  }
  const handleReject = () => setResult('rejected')

  if (result) {
    return (
      <div style={{
        padding: '20px 24px',
        borderRadius: '10px',
        border: '1px solid var(--color-border)',
        background: 'var(--color-background-elevated)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: '1.5rem' }}>{result === 'approved' ? '✓' : '✗'}</span>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-foreground-muted)' }}>
          Action {result}. Agent {result === 'approved' ? 'proceeding' : 'stopped'}.
        </span>
        <button
          onClick={() => setResult(null)}
          style={{ fontSize: '0.75rem', color: 'var(--color-accent)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          Reset demo
        </button>
      </div>
    )
  }

  return (
    <ApprovalCard
      title="Human approval required"
      description="The agent wants to perform an irreversible action. Review the proposed action and approve or reject."
      action="DELETE FROM users WHERE last_login < '2024-01-01' AND status = 'inactive'"
      reasoning="I identified 1,247 inactive user accounts that haven't logged in for over a year. Deleting them will reduce storage costs and simplify compliance reporting."
      risk="high"
      onApprove={handleApprove}
      onReject={handleReject}
      loading={loading}
    />
  )
}

export function ApprovalCardPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="ApprovalCard"
        description="Experimental prototype human-in-the-loop interrupt UI. Shown when an agent pauses execution and requires human approval before proceeding. Supports three risk levels and displays the proposed action alongside reasoning text."
        preview={
          <div style={{ width: '100%', maxWidth: '480px' }}>
            <InteractiveDemo />
          </div>
        }
        code={`import { ApprovalCard } from '@caindev/ui'

// Wire to LangGraph interrupt or similar
<ApprovalCard
  title="Human approval required"
  description="The agent wants to delete inactive users."
  action="DELETE FROM users WHERE status = 'inactive'"
  reasoning="Removing 1,247 stale accounts to reduce storage."
  risk="high"
  onApprove={() => graph.resume({ approved: true })}
  onReject={() => graph.resume({ approved: false })}
/>

// Risk levels
<ApprovalCard risk="low" ... />    // green
<ApprovalCard risk="medium" ... /> // amber
<ApprovalCard risk="high" ... />   // red`}
        props={[
          { name: 'title', type: 'string', default: '—', description: 'Card header title.' },
          { name: 'description', type: 'string', default: '—', description: 'Human-readable description of what the agent wants to do.' },
          { name: 'action', type: 'string', default: '—', description: 'The exact action string — rendered in monospace.' },
          { name: 'reasoning', type: 'string', default: '—', description: "The agent's reasoning for why this action is needed." },
          { name: 'risk', type: '"low" | "medium" | "high"', default: '"medium"', description: 'Risk level — controls badge and accent color.' },
          { name: 'onApprove', type: '() => void', default: '—', description: 'Called when the user clicks Approve.' },
          { name: 'onReject', type: '() => void', default: '—', description: 'Called when the user clicks Reject.' },
          { name: 'loading', type: 'boolean', default: 'false', description: 'Disables buttons and shows loading state while processing.' },
          { name: 'className', type: 'string', default: '—', description: 'CSS class applied to the root wrapper.' },
          { name: 'style', type: 'React.CSSProperties', default: '—', description: 'Inline styles merged onto the root wrapper.' },
        ]}
      />
    </DocsLayout>
  )
}
