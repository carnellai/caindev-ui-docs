export function Hero() {
  return (
    <section className='container-shell pt-24 pb-12 lg:pt-32 lg:pb-16'>
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
            Base UI primitives styled with Tailwind v4. Every component you
            expect, plus streaming text, eval scores, and tool calls built in
            from the start.
          </p>

          <div className='flex items-center gap-3 pt-2'>
            <a
              href='#components'
              className='rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover'>
              Browse components
            </a>
            <a
              href='#'
              className='rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground'>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Right — floating card preview */}
        <div className='flex items-center justify-center lg:justify-end'>
          <div
            className='w-full max-w-sm rounded-xl border border-border-strong bg-background-elevated p-6'
            style={{
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
    <div className='flex flex-col gap-5'>
      {/* Header row */}
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-0.5'>
          <span className='text-sm font-medium text-foreground'>
            Evaluation run
          </span>
          <span className='text-xs text-foreground-subtle'>
            run_a3f9bc · 2m ago
          </span>
        </div>
        <StatusBadge status='passed' />
      </div>

      {/* Divider */}
      <div className='h-px bg-border' />

      {/* Stat row */}
      <div className='grid grid-cols-3 gap-3'>
        <Stat label='Score' value='94%' />
        <Stat label='Latency' value='1.2s' />
        <Stat label='Tokens' value='2.4k' />
      </div>

      {/* Divider */}
      <div className='h-px bg-border' />

      {/* Toggle rows */}
      <div className='flex flex-col gap-3'>
        <ToggleRow label='Streaming' defaultOn />
        <ToggleRow label='Tool calls' defaultOn={false} />
        <ToggleRow label='Eval scoring' defaultOn />
      </div>

      {/* Divider */}
      <div className='h-px bg-border' />

      {/* Actions */}
      <div className='flex items-center gap-2'>
        <button className='flex-1 rounded-md bg-accent py-1.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover'>
          Re-run
        </button>
        <button className='rounded-md border border-border px-3 py-1.5 text-sm text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground'>
          Export
        </button>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className='flex flex-col gap-1 rounded-lg bg-background-subtle px-3 py-2.5'>
      <span className='text-[10px] font-medium uppercase tracking-widest text-foreground-subtle'>
        {label}
      </span>
      <span className='font-mono text-base font-medium text-foreground'>
        {value}
      </span>
    </div>
  )
}

function StatusBadge({ status }: { status: 'passed' | 'failed' | 'running' }) {
  const styles = {
    passed: 'bg-emerald-950 text-emerald-400',
    failed: 'bg-red-950 text-red-400',
    running: 'bg-violet-950 text-violet-400',
  }
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${styles[status]}`}>
      {status}
    </span>
  )
}

function ToggleRow({
  label,
  defaultOn,
}: {
  label: string
  defaultOn: boolean
}) {
  return (
    <div className='flex items-center justify-between'>
      <span className='text-sm text-foreground-muted'>{label}</span>
      <div
        className={`relative h-5 w-9 rounded-full transition-colors ${
          defaultOn ? 'bg-accent' : 'bg-background-subtle'
        }`}>
        <div
          className={`absolute top-0.5 size-4 rounded-full bg-white shadow transition-transform ${
            defaultOn ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </div>
    </div>
  )
}
