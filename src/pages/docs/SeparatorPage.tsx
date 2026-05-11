import { DocsPage } from '../../layouts/DocsPage'
import { Separator } from '@caindev/ui'

export function SeparatorPage() {
  return (
      <DocsPage
        title="Separator"
        description="A semantic divider for separating content. Supports horizontal and vertical orientations, and an optional centered text label. Built on Base UI's Separator for screen reader accessibility."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            <Separator />
            <Separator label="or continue with" />
            <Separator label="Settings" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '32px' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-foreground-muted)' }}>Home</span>
              <Separator orientation="vertical" />
              <span style={{ fontSize: '0.875rem', color: 'var(--color-foreground-muted)' }}>Docs</span>
              <Separator orientation="vertical" />
              <span style={{ fontSize: '0.875rem', color: 'var(--color-foreground-muted)' }}>GitHub</span>
            </div>
          </div>
        }
        code={`import { Separator } from '@caindev/ui'

// Horizontal
<Separator />

// With label
<Separator label="or continue with" />

// Vertical — needs a flex container with height
<div style={{ display: 'flex', height: '32px' }}>
  <span>Home</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
</div>`}
        props={[
          { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'Direction of the separator.' },
          { name: 'label', type: 'string', default: '—', description: 'Optional centered label — only works with horizontal orientation.' },
          { name: 'style', type: 'React.CSSProperties', default: '—', description: 'Additional inline styles.' },
        ]}
      />
  )
}
