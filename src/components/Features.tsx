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
    label: 'Styled foundations',
    description:
      'Dark-first primitives using the current caindev/ui tokens and Tailwind v4.',
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
    label: 'Accessibility-minded',
    description:
      'Built on Base UI primitives for keyboard, focus, and ARIA foundations where those primitives apply.',
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
    label: 'AI prototypes included',
    description:
      'Streaming text, eval scores, tool calls, and token displays are available as showcase-quality patterns.',
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
    label: 'Composable direction',
    description:
      'Components are intentionally small and can be wrapped while the future package API is refined.',
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
    label: 'TypeScript checked',
    description:
      'The showcase is type-checked; exported package types will be finalized during extraction.',
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

      <div className='grid grid-cols-3 overflow-hidden rounded-[12px] border border-border'>
        {features.map((f, i) => (
          <div
            key={f.label}
            className={[
              'flex flex-col gap-3 p-7',
              (i + 1) % 3 !== 0 ? 'border-r border-border' : undefined,
              i < 3 ? 'border-b border-border' : undefined,
            ].filter(Boolean).join(' ')}>
            <div className='text-accent'>{f.icon}</div>
            <div className='flex flex-col gap-1.5'>
              <span className='text-sm font-medium text-foreground'>
                {f.label}
              </span>
              <span className='text-[0.8125rem] leading-[1.55] text-foreground-muted'>
                {f.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
