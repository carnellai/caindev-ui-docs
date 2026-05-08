const links = [
  {
    group: 'Docs',
    items: [
      { label: 'Documentation', href: '/docs/getting-started', external: false },
      { label: 'Themes', href: '#', external: false },
    ],
  },
  {
    group: 'Components',
    items: [
      { label: 'Foundations', href: '/docs/button', external: false },
      {
        label: 'Chat & Generation',
        href: '/docs/streaming-text',
        external: false,
      },
      { label: 'Observability', href: '/docs/trace-tree', external: false },
    ],
  },
  {
    group: 'Projects',
    items: [
      { label: 'Carnell Systems', href: '#', external: false },
      { label: 'Arcora', href: '#', external: false },
      {
        label: 'GitHub',
        href: 'https://github.com/carnellai/caindev-ui',
        external: true,
      },
    ],
  },
]

export function Footer() {
  return (
    <footer className='border-t border-border'>
      <div className='container-shell py-12'>
        {/* Top grid — stacks on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}>
          {/* Brand */}
          <div className='flex flex-col gap-3.5'>
            <img
              src='/logo.svg'
              alt='caindev/ui'
              style={{ height: 18, alignSelf: 'flex-start' }}
            />
            <p
              className='m-0 text-[0.8125rem] leading-[1.6] text-foreground-muted'
              style={{ maxWidth: 260 }}>
              Dark-first component showcase for AI-oriented React applications,
              built on Base UI and Tailwind v4.
            </p>
            <span className='text-xs text-foreground-subtle'>
              MIT License · Open source
            </span>
          </div>

          {/* Link groups */}
          {links.map((group) => (
            <div key={group.group} className='flex flex-col gap-3.5'>
              <span className='text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-foreground-subtle'>
                {group.group}
              </span>
              <ul className='m-0 flex list-none flex-col gap-2.5 p-0'>
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className='text-sm text-foreground-muted no-underline'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className='border-t border-border'
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}>
          <span className='text-xs text-foreground-subtle'>
            © {new Date().getFullYear()} caindev. All rights reserved.
          </span>
          <span className='text-xs text-foreground-subtle'>
            Built with Base UI + Tailwind v4
          </span>
        </div>
      </div>
    </footer>
  )
}
