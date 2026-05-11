import { useState } from 'react'
import { DocsPage } from '../../layouts/DocsPage'
import { Alert } from '@caindev/ui'

function DismissableDemo() {
  const [shown, setShown] = useState(true)
  return shown ? (
    <Alert tone="info" title="Update available" onDismiss={() => setShown(false)}>
      Updated package docs are available. Review the component examples.
    </Alert>
  ) : (
    <button
      onClick={() => setShown(true)}
      style={{ fontSize: '0.75rem', color: 'var(--color-accent)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
    >
      Reset demo
    </button>
  )
}

export function AlertPage() {
  return (
      <DocsPage
        title="Alert"
        description="Inline feedback messages for success, error, warning, and informational states. Prefer tone for semantic severity. Different from Toast — Alert is embedded in the page layout, Toast floats over content."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <Alert tone="info" title="Did you know?">
              These docs render the linked @caindev/ui package dependency.
            </Alert>
            <Alert tone="success" title="Deployment complete">
              Version 1.4.1 is now live. 247 components deployed successfully.
            </Alert>
            <Alert tone="warning" title="Rate limit approaching">
              You've used 90% of your monthly token quota.
            </Alert>
            <Alert tone="error" title="Evaluation failed">
              3 of 12 test cases failed. Review the trace output for details.
            </Alert>
            <DismissableDemo />
          </div>
        }
        code={`import { Alert } from '@caindev/ui'

<Alert tone="info" title="Did you know?">
  These docs render the linked @caindev/ui package dependency.
</Alert>

<Alert tone="success" title="Deployed">
  Version 1.4.1 is live.
</Alert>

<Alert tone="warning">Rate limit approaching.</Alert>

<Alert tone="error" title="Failed">
  3 test cases failed.
</Alert>

// Dismissable
<Alert
  tone="info"
  title="Update available"
  onDismiss={() => setVisible(false)}
>
  Review the component examples.
</Alert>`}
        props={[
          { name: 'tone', type: '"info" | "success" | "warning" | "error"', default: '"neutral"', description: 'Canonical semantic color prop.' },
          { name: 'title', type: 'string', default: '—', description: 'Bold title line.' },
          { name: 'children', type: 'React.ReactNode', default: '—', description: 'Alert body content.' },
          { name: 'onDismiss', type: '() => void', default: '—', description: 'Shows a close button when provided.' },
        ]}
      />
  )
}
