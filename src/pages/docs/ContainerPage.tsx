import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Container } from '../../components/Container'

export function ContainerPage() {
  return (
    <DocsLayout>
      <DocsPage
        title='Container'
        description='A max-width wrapper that centers content on the page. Use it to constrain layout width consistently across pages without repeating margin and padding logic.'
        preview={
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
            {(
              [
                ['sm', '640px'],
                ['md', '768px'],
                ['lg', '1024px'],
                ['xl', '1280px'],
              ] as const
            ).map(([size, max]) => (
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
                    height: '28px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                  <Container
                    size={size}
                    center={false}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      maxWidth: max,
                      background: 'var(--color-accent-muted)',
                      borderRight: '2px solid var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '8px',
                    }}>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-accent)',
                        whiteSpace: 'nowrap',
                      }}>
                      {max}
                    </span>
                  </Container>
                </div>
              </div>
            ))}
          </div>
        }
        code={`import { Container } from '@caindev/ui'

// Wrap a page section
<Container size="lg">
  <h1>Page title</h1>
  <p>Content constrained to 1024px max</p>
</Container>

// Sizes
<Container size="sm">Content</Container>   // 640px
<Container size="md">Content</Container>   // 768px
<Container size="lg">Content</Container>   // 1024px
<Container size="xl">Content</Container>   // 1280px (default)
<Container size="full">Content</Container> // 100%`}
        props={[
          {
            name: 'size',
            type: '"sm" | "md" | "lg" | "xl" | "full"',
            default: '"xl"',
            description: 'Maximum width of the container.',
          },
          {
            name: 'center',
            type: 'boolean',
            default: 'true',
            description: 'Auto margin to center the container.',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            default: '—',
            description: 'Content.',
          },
          {
            name: 'style',
            type: 'React.CSSProperties',
            default: '—',
            description: 'Additional inline styles.',
          },
        ]}
      />
    </DocsLayout>
  )
}
