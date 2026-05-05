const links = [
  {
    group: 'Library',
    items: [
      { label: 'Components', href: '#components' },
      { label: 'Foundations', href: '#' },
      { label: 'AI Primitives', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    group: 'Resources',
    items: [
      { label: 'Documentation', href: '#' },
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Base UI', href: 'https://base-ui.com' },
      { label: 'Tailwind CSS', href: 'https://tailwindcss.com' },
    ],
  },
  {
    group: 'Projects',
    items: [
      { label: 'Carnell Systems', href: '#' },
      { label: 'Arcora', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className='container-shell py-14'>
        {/* Main row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '64px',
            alignItems: 'start',
          }}>
          {/* Brand */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <img src='/logo.svg' alt='caindev/ui' style={{ height: '18px' }} />
            <p
              style={{
                margin: 0,
                maxWidth: '260px',
                fontSize: '0.8125rem',
                lineHeight: 1.6,
                color: 'var(--color-foreground-muted)',
              }}>
              Unstyled, accessible components for AI-first React applications.
              Built on Base UI and Tailwind v4.
            </p>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-foreground-subtle)',
              }}>
              MIT License · Open source
            </span>
          </div>

          {/* Link groups */}
          <div style={{ display: 'flex', gap: '56px' }}>
            {links.map((group) => (
              <div
                key={group.group}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-foreground-subtle)',
                  }}>
                  {group.group}
                </span>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}>
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-foreground-muted)',
                          textDecoration: 'none',
                        }}>
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
        <div
          style={{
            marginTop: '48px',
            paddingTop: '20px',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-foreground-subtle)',
            }}>
            © {new Date().getFullYear()} caindev. All rights reserved.
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-foreground-subtle)',
            }}>
            Built with Base UI + Tailwind v4
          </span>
        </div>
      </div>
    </footer>
  )
}
