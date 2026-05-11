import { DocsPage } from '../../layouts/DocsPage'
import { Progress } from '@caindev/ui'

export function ProgressPage() {
  return (
      <DocsPage
        title='Progress'
        description="Displays the status of a task that takes a long time. Built on Base UI's Progress primitive with support for determinate, indeterminate, and semantic tone states."
        preview={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100%',
              maxWidth: '360px',
            }}>
            <Progress label='Uploading' value={65} showValue />
            <Progress label='Processing' value={null} />
            <Progress label='Ingesting documents' value={82} size='sm' />
            <Progress
              label='Eval run'
              value={100}
              tone='success'
              showValue
            />
            <Progress
              label='Token budget'
              value={91}
              tone='warning'
              showValue
            />
            <Progress
              label='Failed tasks'
              value={34}
              tone='error'
              showValue
            />
          </div>
        }
        code={`import { Progress } from '@caindev/ui'

// Determinate
<Progress label="Uploading" value={65} showValue />

// Indeterminate
<Progress label="Processing" value={null} />

// Semantic tone (preferred)
<Progress label="Eval run" value={100} tone="success" showValue />
<Progress label="Token budget" value={91} tone="warning" showValue />
<Progress label="Failed tasks" value={34} tone="error" showValue />

// Sizes
<Progress value={50} size="sm" />
<Progress value={50} size="md" />
<Progress value={50} size="lg" />`}
        props={[
          {
            name: 'value',
            type: 'number | null',
            default: '—',
            description: 'Current value. Pass null for indeterminate state.',
          },
          {
            name: 'min',
            type: 'number',
            default: '0',
            description: 'Minimum value.',
          },
          {
            name: 'max',
            type: 'number',
            default: '100',
            description: 'Maximum value.',
          },
          {
            name: 'label',
            type: 'string',
            default: '—',
            description: 'Label rendered above the track.',
          },
          {
            name: 'showValue',
            type: 'boolean',
            default: 'false',
            description: 'Shows the formatted value to the right of the label.',
          },
          {
            name: 'size',
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description: 'Height of the progress track.',
          },
          {
            name: 'tone',
            type: '"neutral" | "info" | "success" | "warning" | "error"',
            default: '"neutral"',
            description: 'Canonical semantic color prop for the indicator.',
          },
        ]}
      />
  )
}
