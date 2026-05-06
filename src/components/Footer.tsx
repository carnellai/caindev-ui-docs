const links = [
  {
    group: 'Docs',
    items: [
      { label: 'Documentation', href: '/docs/button' },
      { label: 'Themes', href: '#' },
    ],
  },
  {
    group: 'Components',
    items: [
      { label: 'Foundations', href: '/docs/button' },
      { label: 'Chat & Generation', href: '/docs/streaming-text' },
      { label: 'Observability', href: '/docs/trace-tree' },
    ],
  },
  {
    group: 'Projects',
    items: [
      { label: 'Carnell Systems', href: '#' },
      { label: 'Arcora', href: '#' },
      { label: 'GitHub', href: 'https://github.com/carnellai/caindev-ui' },
    ],
  },
]

export function Footer() {
  return (
    <footer className='border-t border-border'>
      <div className='container-shell py-14'>
        <div className='grid grid-cols-[1fr_auto] items-start gap-16'>
          {/* Brand */}
          <div className='flex flex-col gap-3.5'>
            <img src='/logo.svg' alt='caindev/ui' className='h-[18px]' />
            <p className='m-0 max-w-[260px] text-[0.8125rem] leading-[1.6] text-foreground-muted'>
              Dark-first component showcase for AI-oriented React applications,
              built on Base UI and Tailwind v4.
            </p>
            <span className='text-xs text-foreground-subtle'>
              MIT License · Open source
            </span>
          </div>

          {/* Links */}
          <div className='flex gap-14'>
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
                        className='text-sm text-foreground-muted no-underline'>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-12 flex items-center justify-between border-t border-border pt-5'>
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
