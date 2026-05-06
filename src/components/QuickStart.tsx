const steps = [
  {
    step: '01',
    label: 'Install',
    code: 'pnpm add @caindev/ui',
  },
  {
    step: '02',
    label: 'Stylesheet import',
    code: `import '@caindev/ui/styles.css'`,
  },
  {
    step: '03',
    label: 'Package import',
    code: `import { Button } from '@caindev/ui'\n\nexport default function App() {\n  return <Button variant="solid">Get started</Button>\n}`,
  },
]

export function QuickStart() {
  return (
    <section className='border-t border-border bg-background-elevated'>
      <div className='container-shell py-16'>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}>
          {/* Left */}
          <div className='flex flex-col gap-5'>
            <span className='eyebrow'>Package setup</span>
            <h2 className='m-0 text-foreground'>
              Use the package{' '}
              <span className='text-foreground-subtle'>from your app.</span>
            </h2>
            <p className='m-0 text-foreground-muted' style={{ maxWidth: 320 }}>
              Install from npm and import the stylesheet once. No Tailwind
              config required on your end.
            </p>
            <a
              href='/docs/getting-started'
              className='inline-flex w-fit rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground-muted no-underline'>
              Read the docs →
            </a>
          </div>

          {/* Right — steps */}
          <div className='flex flex-col'>
            {steps.map((s, i) => (
              <div key={s.step} className='flex gap-4'>
                {/* Indicator + line */}
                <div className='flex flex-col items-center'>
                  <div
                    className='flex shrink-0 items-center justify-center rounded-full border border-border text-foreground-subtle'
                    style={{
                      width: 28,
                      height: 28,
                      fontSize: 11,
                      fontWeight: 600,
                    }}>
                    {s.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className='w-px flex-1 bg-border'
                      style={{ minHeight: 16 }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className='flex min-w-0 flex-1 flex-col gap-2.5'
                  style={{ paddingBottom: i < steps.length - 1 ? 24 : 0 }}>
                  <span
                    className='text-sm font-medium text-foreground'
                    style={{ lineHeight: '28px' }}>
                    {s.label}
                  </span>
                  <pre
                    className='m-0 overflow-x-auto rounded-md border border-border bg-background text-foreground-muted'
                    style={{
                      padding: '10px 16px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(0.6875rem, 2vw, 0.8125rem)',
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
