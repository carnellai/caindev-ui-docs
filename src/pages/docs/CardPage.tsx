import { DocsPage } from '../../layouts/DocsPage'
import { Badge, Button, Card } from '@caindev/ui'

export function CardPage() {
  return (
      <DocsPage
        title='Card'
        description='A surface container with optional header and footer slots. The foundation of most page layouts — use it for panels, settings sections, data displays, and content grouping.'
        preview={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              width: '100%',
              maxWidth: '420px',
            }}>
            <Card>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: 'var(--color-foreground-muted)',
                }}>
                A basic card with default padding and border.
              </p>
            </Card>
            <Card
              header={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                  }}>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--color-foreground)',
                    }}>
                    API Usage
                  </span>
                  <Badge variant='success' size='sm'>
                    Live
                  </Badge>
                </div>
              }
              footer={
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button size='sm' variant='outline'>
                    View details
                  </Button>
                </div>
              }>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: 'var(--color-foreground-muted)',
                }}>
                2.4M tokens used this month across 247 runs.
              </p>
            </Card>
            <Card>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: 'var(--color-foreground-muted)',
                }}>
                Default card surface with consistent border, background, and shadow.
              </p>
            </Card>
          </div>
        }
        code={`import { Card } from '@caindev/ui'

// Basic
<Card>
  <p>Content goes here</p>
</Card>

// With header and footer
<Card
  header={<span>Title</span>}
  footer={<Button>Action</Button>}
>
  <p>Card body</p>
</Card>

// Padding
<Card padding="sm">Compact content</Card>   // 12px
<Card padding="md">Default content</Card>   // 20px (default)
<Card padding="lg">Roomy content</Card>     // 28px
<Card padding="none">Custom content</Card>  // 0 — control your own`}
        props={[
          {
            name: 'children',
            type: 'React.ReactNode',
            default: '—',
            description: 'Card body content.',
          },
          {
            name: 'header',
            type: 'React.ReactNode',
            default: '—',
            description: 'Rendered in a top slot with a bottom border.',
          },
          {
            name: 'footer',
            type: 'React.ReactNode',
            default: '—',
            description: 'Rendered in a bottom slot with a top border.',
          },
          {
            name: 'padding',
            type: '"none" | "sm" | "md" | "lg"',
            default: '"md"',
            description: 'Internal padding.',
          },
          {
            name: 'style',
            type: 'React.CSSProperties',
            default: '—',
            description: 'Additional inline styles.',
          },
        ]}
      />
  )
}
