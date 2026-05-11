import { DocsPage } from '../../layouts/DocsPage'
import { Badge } from '@caindev/ui'

export function BadgePage() {
  return (
      <DocsPage
        title='Badge'
        description='A small label for status, category, or metadata. Six semantic tones covering the full range of UI states.'
        preview={
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <Badge tone='neutral'>Default</Badge>
              <Badge tone='success'>Success</Badge>
              <Badge tone='warning'>Warning</Badge>
              <Badge tone='error'>Error</Badge>
              <Badge tone='info'>Info</Badge>
              <Badge tone='outline'>Outline</Badge>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <Badge tone='success' size='sm'>
                Stable
              </Badge>
              <Badge tone='warning' size='sm'>
                Beta
              </Badge>
              <Badge tone='info' size='sm'>
                New
              </Badge>
              <Badge tone='neutral' size='sm'>
                v1.4.1
              </Badge>
            </div>
          </div>
        }
        code={`import { Badge } from '@caindev/ui'

<Badge tone="neutral">Default</Badge>
<Badge tone="success">Success</Badge>
<Badge tone="warning">Warning</Badge>
<Badge tone="error">Error</Badge>
<Badge tone="info">Info</Badge>
<Badge tone="outline">Outline</Badge>

// Small
<Badge tone="success" size="sm">Stable</Badge>`}
        props={[
          {
            name: 'children',
            type: 'React.ReactNode',
            default: '—',
            description: 'Badge label.',
          },
          {
            name: 'tone',
            type: '"neutral" | "success" | "warning" | "error" | "info" | "outline"',
            default: '"neutral"',
            description: 'Semantic tone.',
          },
          {
            name: 'size',
            type: '"sm" | "md"',
            default: '"md"',
            description: 'Size of the badge.',
          },
        ]}
      />
  )
}
