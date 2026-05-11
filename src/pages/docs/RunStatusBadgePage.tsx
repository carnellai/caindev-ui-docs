import { DocsPage } from '../../layouts/DocsPage'
import { RunStatusBadge } from '@caindev/ui'

export function RunStatusBadgePage() {
  return (
      <DocsPage
        title="RunStatusBadge"
        description="Displays the current status of a run, job, or agent execution. The running state includes a pulsing dot animation. Used in run lists, pipeline monitors, and trace headers."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <RunStatusBadge status="idle" />
              <RunStatusBadge status="pending" />
              <RunStatusBadge status="running" />
              <RunStatusBadge status="completed" />
              <RunStatusBadge status="failed" />
              <RunStatusBadge status="queued" />
              <RunStatusBadge status="cancelled" />
              <RunStatusBadge status="skipped" />
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
<RunStatusBadge status="idle" />
<RunStatusBadge status="pending" />
<RunStatusBadge status="queued" />
<RunStatusBadge status="cancelled" />
<RunStatusBadge status="skipped" />

// Small
<RunStatusBadge status="running" size="sm" />`}
        props={[
          { name: 'status', type: 'OperationStatus', default: '—', description: 'Current run status: idle, pending, running, completed, failed, queued, cancelled, or skipped. Compatibility aliases like "error" and "success" map to canonical runtime values.' },
          { name: 'size', type: '"sm" | "md"', default: '"md"', description: 'Size of the badge.' },
        ]}
      />
  )
}
