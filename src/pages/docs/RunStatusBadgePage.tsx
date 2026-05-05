import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { RunStatusBadge } from '../../components/RunStatusBadge'

export function RunStatusBadgePage() {
  return (
    <DocsLayout>
      <DocsPage
        title="RunStatusBadge"
        description="Displays the current status of a run, job, or agent execution. The running state includes a pulsing dot animation. Used in run lists, pipeline monitors, and trace headers."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <RunStatusBadge status="running" />
              <RunStatusBadge status="completed" />
              <RunStatusBadge status="failed" />
              <RunStatusBadge status="error" />
              <RunStatusBadge status="queued" />
              <RunStatusBadge status="cancelled" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <RunStatusBadge status="running" size="sm" />
              <RunStatusBadge status="completed" size="sm" />
              <RunStatusBadge status="failed" size="sm" />
              <RunStatusBadge status="queued" size="sm" />
            </div>
          </div>
        }
        code={`import { RunStatusBadge } from '@caindev/ui'

<RunStatusBadge status="running" />
<RunStatusBadge status="completed" />
<RunStatusBadge status="failed" />
<RunStatusBadge status="error" />
<RunStatusBadge status="queued" />
<RunStatusBadge status="cancelled" />

// Small
<RunStatusBadge status="running" size="sm" />`}
        props={[
          { name: 'status', type: '"running" | "completed" | "failed" | "error" | "queued" | "cancelled"', default: '—', description: 'Current run status.' },
          { name: 'size', type: '"sm" | "md"', default: '"md"', description: 'Size of the badge.' },
        ]}
      />
    </DocsLayout>
  )
}
