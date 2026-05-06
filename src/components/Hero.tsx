import {
  Button,
  Switch,
  EvalBadge,
  RunStatusBadge,
  TokenCost,
} from '@caindev/ui'

export function Hero() {
  return (
    <section className='container-shell pb-12 pt-24 lg:pb-16 lg:pt-32'>
      <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>
        {/* Left — text */}
        <div className='flex flex-col gap-6'>
          <span className='eyebrow'>Open source · MIT License</span>

          <h1 className='text-foreground'>
            Familiar foundations.
            <br />
            <span className='text-foreground-subtle'>
              First-class AI primitives.
            </span>
          </h1>

          <p className='max-w-md text-lg text-foreground-muted'>
            Base UI primitives styled with Tailwind v4. A focused foundation
            set, plus prototype AI interface patterns for streaming text, eval
            scores, and tool calls.
          </p>

          <div className='flex flex-wrap items-center gap-3 pt-2'>
            <a
              href='#components'
              className='rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground no-underline transition-colors hover:bg-accent-hover'>
              Browse components
            </a>
            <a
              href='https://github.com/carnellai/caindev-ui'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground-muted no-underline transition-colors hover:border-border-strong hover:text-foreground'>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Right — live component preview */}
        <div className='flex items-center justify-center lg:justify-end'>
          <div
            className='w-full max-w-sm rounded-xl border border-border-strong bg-background-elevated'
            style={{
              padding: '20px',
              boxShadow:
                '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
            }}>
            <PreviewCard />
          </div>
        </div>
      </div>
    </section>
  )
}

function PreviewCard() {
  return (
    <div className='flex flex-col' style={{ gap: 14 }}>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-0.5'>
          <span className='text-sm font-medium text-foreground'>
            Evaluation run
          </span>
          <span className='text-xs text-foreground-subtle'>
            run_a3f9bc · 2m ago
          </span>
        </div>
        <RunStatusBadge status='completed' size='sm' />
      </div>

      <div className='h-px bg-border' />

      {/* Inline stats row — much tighter than MetricCard */}
      <div className='flex items-center gap-5'>
        {[
          { label: 'Score', value: '94%' },
          { label: 'Latency', value: '1.2s' },
          { label: 'Tokens', value: '2.4k' },
        ].map((s) => (
          <div key={s.label} className='flex flex-col gap-0.5'>
            <span className='text-[0.625rem] font-semibold uppercase tracking-widest text-foreground-subtle'>
              {s.label}
            </span>
            <span className='font-mono text-sm font-medium text-foreground'>
              {s.value}
            </span>
          </div>
        ))}
      </div>

      <div className='h-px bg-border' />

      {/* Eval badges */}
      <div className='flex flex-col' style={{ gap: 7 }}>
        {[
          { label: 'Correctness', verdict: 'pass' as const, score: 0.94 },
          { label: 'Relevance', verdict: 'review' as const, score: 0.61 },
          { label: 'Faithfulness', verdict: 'pass' as const, score: 0.88 },
        ].map((row) => (
          <div key={row.label} className='flex items-center justify-between'>
            <span className='text-sm text-foreground-muted'>{row.label}</span>
            <EvalBadge verdict={row.verdict} score={row.score} size='sm' />
          </div>
        ))}
      </div>

      <div className='h-px bg-border' />

      {/* Token cost */}
      <TokenCost
        model='claude-3-5-sonnet'
        inputTokens={2048}
        outputTokens={312}
        cost={0.0082}
        layout='row'
      />

      <div className='h-px bg-border' />

      {/* Toggles inline */}
      <div className='flex items-center gap-5'>
        <Switch label='Streaming' defaultChecked />
        <Switch label='Tool calls' />
      </div>

      <div className='h-px bg-border' />

      {/* Actions */}
      <div className='flex items-center gap-2'>
        <Button variant='solid' style={{ flex: 1 }}>
          Re-run
        </Button>
        <Button variant='outline'>Export</Button>
      </div>
    </div>
  )
}
