import { DocsPage } from '../../layouts/DocsPage'

export function SectionPage() {
  return (
      <DocsPage
        title='Section'
        description='A semantic page section with consistent vertical padding. Compose with Container to build full page layouts quickly — the pattern used throughout this docs site.'
        preview={
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}>
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <div
                key={size}
                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-foreground-subtle)',
                    width: '24px',
                    flexShrink: 0,
                  }}>
                  {size}
                </span>
                <div
                  style={{
                    flex: 1,
                    background: 'var(--color-background-subtle)',
                    borderRadius: '4px',
                    border: '1px solid var(--color-border)',
                    height:
                      size === 'sm' ? '32px' : size === 'md' ? '48px' : '64px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                  }}>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--color-foreground-subtle)',
                    }}>
                    {size === 'sm' ? '40px' : size === 'md' ? '64px' : '96px'}{' '}
                    top/bottom
                  </span>
                </div>
              </div>
            ))}
          </div>
        }
        code={`import { Section, Container } from '@caindev/ui'

// Standard page layout pattern
<Section size="lg">
  <Container size="xl">
    <h2>Features</h2>
    <Grid cols={3}>...</Grid>
  </Container>
</Section>

// Sizes
<Section size="sm">Content</Section>  // 40px padding
<Section size="md">Content</Section>  // 64px padding (default)
<Section size="lg">Content</Section>  // 96px padding

// With id for anchor links
<Section id="features" size="lg">
  ...
</Section>`}
        props={[
          {
            name: 'size',
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description: 'Vertical padding of the section.',
          },
          {
            name: 'id',
            type: 'string',
            default: '—',
            description: 'HTML id for anchor link navigation.',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            default: '—',
            description: 'Section content.',
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
