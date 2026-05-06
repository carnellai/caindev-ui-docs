const steps = [
  {
    step: '01',
    label: 'Future install',
    code: 'pnpm add @caindev/ui',
  },
  {
    step: '02',
    label: 'Future style import',
    code: `import '@caindev/ui/styles'`,
  },
  {
    step: '03',
    label: 'Future package import',
    code: `import { Button } from '@caindev/ui'

export default function App() {
  return <Button variant="solid">Get started</Button>
}`,
  },
]

export function QuickStart() {
  return (
    <section className='border-t border-border bg-background-elevated'>
      <div className='container-shell py-16'>
        <div className='grid grid-cols-2 items-start gap-16'>
          {/* Left */}
          <div className='flex flex-col gap-5'>
            <span className='eyebrow'>Future package direction</span>
            <h2 className='m-0 text-foreground'>
              Planned package usage{' '}
              <span className='text-foreground-subtle'>
                after extraction.
              </span>
            </h2>
            <p className='m-0 max-w-80 text-foreground-muted'>
              The current repo is the showcase and development environment.
              These commands describe the intended package flow after extraction.
            </p>
            <a
              href='#'
              className='inline-flex w-fit rounded-[8px] border border-border px-4 py-2 text-sm font-medium text-foreground-muted no-underline'>
              Read the docs →
            </a>
          </div>

          {/* Right */}
          <div className='flex flex-col gap-0'>
            {steps.map((s, i) => (
              <div key={s.step} className='flex gap-4'>
                {/* Step indicator + line */}
                <div className='flex flex-col items-center gap-0'>
                  <div className='flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-[11px] font-semibold text-foreground-subtle'>
                    {s.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className='min-h-6 w-px flex-1 bg-border' />
                  )}
                </div>

                {/* Content */}
                <div
                  className={[
                    'flex flex-col gap-2.5',
                    i < steps.length - 1 ? 'pb-6' : 'pb-0',
                  ].join(' ')}>
                  <span className='text-sm font-medium leading-7 text-foreground'>
                    {s.label}
                  </span>
                  <pre className='m-0 overflow-x-auto rounded-[8px] border border-border bg-background px-4 py-3 font-mono text-[0.8125rem] leading-[1.6] text-foreground-muted'>
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
