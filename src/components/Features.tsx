const features = [
  {
    icon: (
      <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <path
          d='M9 1.5L1.5 5.25v7.5L9 16.5l7.5-3.75v-7.5L9 1.5z'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinejoin='round'
        />
        <path
          d='M1.5 5.25L9 9l7.5-3.75M9 9v7.5'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
        />
      </svg>
    ),
    label: 'Unstyled by default',
    description:
      'Zero styles shipped. Bring your own design system or use ours — no specificity battles.',
  },
  {
    icon: (
      <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <circle cx='9' cy='9' r='7' stroke='currentColor' strokeWidth='1.25' />
        <path
          d='M6 9l2 2 4-4'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'Accessibility built in',
    description:
      'WAI-ARIA compliant. Focus management, keyboard nav, and screen reader support handled for you.',
  },
  {
    icon: (
      <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <path
          d='M2 9h14M9 3l6 6-6 6'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'Tailwind v4 native',
    description:
      'CSS-first config, theme tokens, and data-attribute variants. No workarounds required.',
  },
  {
    icon: (
      <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <path
          d='M3 13l3-7 3 4.5 2-3 3 5.5'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'AI-first primitives',
    description:
      'Streaming text, eval scores, tool calls, and token displays are first-class — not afterthoughts.',
  },
  {
    icon: (
      <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <rect
          x='2'
          y='2'
          width='6'
          height='6'
          rx='1'
          stroke='currentColor'
          strokeWidth='1.25'
        />
        <rect
          x='10'
          y='2'
          width='6'
          height='6'
          rx='1'
          stroke='currentColor'
          strokeWidth='1.25'
        />
        <rect
          x='2'
          y='10'
          width='6'
          height='6'
          rx='1'
          stroke='currentColor'
          strokeWidth='1.25'
        />
        <rect
          x='10'
          y='10'
          width='6'
          height='6'
          rx='1'
          stroke='currentColor'
          strokeWidth='1.25'
        />
      </svg>
    ),
    label: 'Composable API',
    description:
      'Every component exposes its parts. Wrap, extend, or replace anything without fighting abstractions.',
  },
  {
    icon: (
      <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <path
          d='M5.5 3.5l-4 5 4 5M12.5 3.5l4 5-4 5M10 2l-2 14'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'TypeScript strict',
    description:
      'Full type coverage. Prop types, state types, and ref types all exported and documented.',
  },
]

export function Features() {
  return (
    <section className='container-shell py-16'>
      <div className='mb-10 flex flex-col gap-2'>
        <span className='eyebrow'>Why caindev/ui</span>
        <h2 className='text-foreground'>
          Everything you need.{' '}
          <span className='text-foreground-subtle'>Nothing you don't.</span>
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}>
        {features.map((f, i) => (
          <div
            key={f.label}
            style={{
              padding: '28px',
              borderRight:
                (i + 1) % 3 !== 0 ? '1px solid var(--color-border)' : 'none',
              borderBottom: i < 3 ? '1px solid var(--color-border)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
            <div style={{ color: 'var(--color-accent)' }}>{f.icon}</div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--color-foreground)',
                }}>
                {f.label}
              </span>
              <span
                style={{
                  fontSize: '0.8125rem',
                  lineHeight: '1.55',
                  color: 'var(--color-foreground-muted)',
                }}>
                {f.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
