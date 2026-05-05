const steps = [
  {
    step: '01',
    label: 'Install',
    code: 'pnpm add @caindev/ui',
  },
  {
    step: '02',
    label: 'Import the styles',
    code: `import '@caindev/ui/styles'`,
  },
  {
    step: '03',
    label: 'Use a component',
    code: `import { Button } from '@caindev/ui'

export default function App() {
  return <Button variant="solid">Get started</Button>
}`,
  },
]

export function QuickStart() {
  return (
    <section
      style={{
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-background-elevated)',
      }}>
      <div className='container-shell py-16'>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}>
          {/* Left */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span className='eyebrow'>Quick start</span>
            <h2 style={{ color: 'var(--color-foreground)', margin: 0 }}>
              Up and running{' '}
              <span style={{ color: 'var(--color-foreground-subtle)' }}>
                in minutes.
              </span>
            </h2>
            <p
              style={{
                color: 'var(--color-foreground-muted)',
                maxWidth: '320px',
                margin: 0,
              }}>
              Install the package, import the stylesheet, and start using
              components. No configuration required.
            </p>
            <a
              href='#'
              style={{
                display: 'inline-flex',
                width: 'fit-content',
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--color-foreground-muted)',
                textDecoration: 'none',
              }}>
              Read the docs →
            </a>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((s, i) => (
              <div key={s.step} style={{ display: 'flex', gap: '16px' }}>
                {/* Step indicator + line */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0',
                  }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--color-foreground-subtle)',
                      flexShrink: 0,
                    }}>
                    {s.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        width: '1px',
                        flex: 1,
                        minHeight: '24px',
                        background: 'var(--color-border)',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    paddingBottom: i < steps.length - 1 ? '24px' : '0',
                  }}>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'var(--color-foreground)',
                      lineHeight: '28px',
                    }}>
                    {s.label}
                  </span>
                  <pre
                    style={{
                      margin: 0,
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-background)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: 'var(--color-foreground-muted)',
                      overflowX: 'auto',
                      lineHeight: 1.6,
                    }}>
                    <code>{s.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
