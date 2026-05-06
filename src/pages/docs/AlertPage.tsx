import { useState } from 'react'
import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Alert } from '@caindev/ui'

function DismissableDemo() {
  const [shown, setShown] = useState(true)
  return shown ? (
    <Alert variant="info" title="Update available" onDismiss={() => setShown(false)}>
      New showcase docs are available. Review the component examples before extraction.
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
    <DocsLayout>
      <DocsPage
        title="Alert"
        description="Inline feedback messages for success, error, warning, and informational states. Different from Toast — Alert is embedded in the page layout, Toast floats over content."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <Alert variant="info" title="Did you know?">
              These docs currently render local showcase components before package extraction.
            </Alert>
            <Alert variant="success" title="Deployment complete">
              Version 1.4.1 is now live. 247 components deployed successfully.
            </Alert>
            <Alert variant="warning" title="Rate limit approaching">
              You've used 90% of your monthly token quota.
            </Alert>
            <Alert variant="error" title="Evaluation failed">
              3 of 12 test cases failed. Review the trace output for details.
            </Alert>
            <DismissableDemo />
          </div>
        }
        code={`import { Alert } from '@caindev/ui'

<Alert variant="info" title="Did you know?">
  These docs currently render local showcase components.
</Alert>

<Alert variant="success" title="Deployed">
  Version 1.4.1 is live.
</Alert>

<Alert variant="warning">Rate limit approaching.</Alert>

<Alert variant="error" title="Failed">
  3 test cases failed.
</Alert>

// Dismissable
<Alert
  variant="info"
  title="Update available"
  onDismiss={() => setVisible(false)}
>
  Review the component examples before extraction.
</Alert>`}
        props={[
          { name: 'variant', type: '"info" | "success" | "warning" | "error"', default: '"info"', description: 'Color and icon variant.' },
          { name: 'title', type: 'string', default: '—', description: 'Bold title line.' },
          { name: 'children', type: 'React.ReactNode', default: '—', description: 'Alert body content.' },
          { name: 'onDismiss', type: '() => void', default: '—', description: 'Shows a close button when provided.' },
        ]}
      />
    </DocsLayout>
  )
}
