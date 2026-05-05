import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

const navItems = [
  { label: 'Documentation', href: '/docs/button' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Themes', href: '#', soon: true },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full',
        'border-b border-border',
        'transition-all duration-200',
        scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent',
      ].join(' ')}>
      <div className='container-shell flex h-14 items-center justify-between'>
        {/* Logo */}
        <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
          <img src='/logo.svg' alt='caindev/ui' className='h-6' />
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href) && item.href !== '#'
            return item.soon ? (
              <span
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  color: 'var(--color-foreground-subtle)',
                  cursor: 'not-allowed',
                }}>
                {item.label}
                <span
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-foreground-subtle)',
                  }}>
                  soon
                </span>
              </span>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  color: active
                    ? 'var(--color-foreground)'
                    : 'var(--color-foreground-muted)',
                  background: active
                    ? 'var(--color-background-subtle)'
                    : 'transparent',
                  textDecoration: 'none',
                  fontWeight: active ? 500 : 400,
                }}>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href='https://github.com'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--color-border)',
              fontSize: '0.875rem',
              color: 'var(--color-foreground-muted)',
              textDecoration: 'none',
            }}>
            <GitHubIcon style={{ width: '14px', height: '14px' }} />
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

function GitHubIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      style={style}
      viewBox='0 0 16 16'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
    </svg>
  )
}
