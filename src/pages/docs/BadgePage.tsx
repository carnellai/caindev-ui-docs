import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Badge } from '../../components/Badge'

export function BadgePage() {
  return (
    <DocsLayout>
      <DocsPage
        title='Badge'
        description='A small label for status, category, or metadata. Six semantic variants covering the full range of UI states.'
        preview={
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <Badge variant='default'>Default</Badge>
              <Badge variant='success'>Success</Badge>
              <Badge variant='warning'>Warning</Badge>
              <Badge variant='error'>Error</Badge>
              <Badge variant='info'>Info</Badge>
              <Badge variant='outline'>Outline</Badge>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <Badge variant='success' size='sm'>
                Stable
              </Badge>
              <Badge variant='warning' size='sm'>
                Beta
              </Badge>
              <Badge variant='info' size='sm'>
                New
              </Badge>
              <Badge variant='default' size='sm'>
                v1.4.1
              </Badge>
            </div>
          </div>
        }
        code={`import { Badge } from '@caindev/ui'

<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="outline">Outline</Badge>

// Small
<Badge variant="success" size="sm">Stable</Badge>`}
        props={[
          {
            name: 'children',
            type: 'React.ReactNode',
            default: '—',
            description: 'Badge label.',
          },
          {
            name: 'variant',
            type: '"default" | "success" | "warning" | "error" | "info" | "outline"',
            default: '"default"',
            description: 'Color variant.',
          },
          {
            name: 'size',
            type: '"sm" | "md"',
            default: '"md"',
            description: 'Size of the badge.',
          },
        ]}
      />
    </DocsLayout>
  )
}
