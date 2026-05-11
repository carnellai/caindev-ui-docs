import { BrandLogo } from '../components/BrandLogo'
import { Link, useLocation } from 'react-router'
import { useState, useEffect } from 'react'
import { Footer } from '../components/Footer'

const overviewNav = [
  { label: 'Getting Started', href: '/docs/getting-started' },
]

const themeNav = [
  { label: 'Overview', href: '/docs/theme/overview' },
  { label: 'Color', href: '/docs/theme/color' },
  { label: 'Dark mode', href: '/docs/theme/dark-mode' },
  { label: 'Typography', href: '/docs/theme/typography' },
  { label: 'Radius', href: '/docs/theme/radius' },
  { label: 'Shadows', href: '/docs/theme/shadows' },
]

const layoutNav = [
  { label: 'Card', href: '/docs/card' },
  { label: 'Separator', href: '/docs/separator' },
  { label: 'Stack', href: '/docs/stack' },
  { label: 'HStack', href: '/docs/stack' },
  { label: 'VStack', href: '/docs/stack' },
  { label: 'Grid', href: '/docs/grid' },
  { label: 'Container', href: '/docs/container' },
  { label: 'Section', href: '/docs/section' },
]

const inputsNav = [
  { label: 'Button', href: '/docs/button' },
  { label: 'Checkbox', href: '/docs/checkbox' },
  { label: 'Combobox', href: '/docs/combobox' },
  { label: 'Form', href: '/docs/form' },
  { label: 'Input', href: '/docs/input' },
  { label: 'NumberField', href: '/docs/number-field' },
  { label: 'Select', href: '/docs/select' },
  { label: 'Slider', href: '/docs/slider' },
  { label: 'Switch', href: '/docs/switch' },
]

const overlaysNav = [
  { label: 'Accordion', href: '/docs/accordion' },
  { label: 'CommandPalette', href: '/docs/command-palette' },
  { label: 'Dialog', href: '/docs/dialog' },
  { label: 'Drawer', href: '/docs/drawer' },
  { label: 'Menu', href: '/docs/menu' },
  { label: 'Tabs', href: '/docs/tabs' },
  { label: 'Tooltip', href: '/docs/tooltip' },
]

const feedbackNav = [
  { label: 'Alert', href: '/docs/alert' },
  { label: 'Badge', href: '/docs/badge' },
  { label: 'Progress', href: '/docs/progress' },
  { label: 'Toast', href: '/docs/toast' },
  { label: 'Pagination', href: '/docs/pagination' },
  { label: 'Table', href: '/docs/table' },
  { label: 'Skeleton', href: '/docs/skeleton' },
  { label: 'EmptyState', href: '/docs/empty-state' },
]

const aiAgentNav = [
  { label: 'PromptInput', href: '/docs/prompt-input' },
  { label: 'MessageBubble', href: '/docs/message-bubble' },
  { label: 'MessageThread', href: '/docs/message-thread' },
  { label: 'StreamingText', href: '/docs/streaming-text' },
  { label: 'ThinkingBlock', href: '/docs/thinking-block' },
  { label: 'ToolCallCard', href: '/docs/tool-call-card' },
  { label: 'CodeBlock', href: '/docs/code-block' },
  { label: 'ApprovalCard', href: '/docs/approval-card' },
  { label: 'AgentStep', href: '/docs/agent-step' },
  { label: 'StructuredOutput', href: '/docs/structured-output' },
  { label: 'TraceTree', href: '/docs/trace-tree' },
]

const evalObservabilityNav = [
  { label: 'EvalBadge', href: '/docs/eval-badge' },
  { label: 'MetricCard', href: '/docs/metric-card' },
  { label: 'StatDelta', href: '/docs/stat-delta' },
  { label: 'TokenCost', href: '/docs/token-cost' },
  { label: 'RunStatusBadge', href: '/docs/run-status-badge' },
  { label: 'ScoreBar', href: '/docs/score-bar' },
]

const SIDEBAR_W = 220
const HEADER_H = 56
const MOBILE_BP = 768

function useIsMobile() {
  const [mobile, setMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(`(max-width: ${MOBILE_BP - 1}px)`).matches
  })
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BP - 1}px)`)
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return mobile
}

function NavGroup({
  label,
  items,
  onNavigate,
}: {
  label: string
  items: { label: string; href: string }[]
  onNavigate?: () => void
}) {
  const { pathname } = useLocation()
  return (
    <div className='flex flex-col gap-px'>
      <span className='mb-1 pl-2 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-foreground-subtle'>
        {label}
      </span>
      {items.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={`${item.href}::${item.label}`}
            to={item.href}
            onClick={onNavigate}
            className={[
              'block whitespace-nowrap rounded-[5px] px-2 py-[5px] text-[0.8125rem] no-underline',
              active
                ? 'bg-background-subtle font-medium text-foreground'
                : 'font-normal text-foreground-muted',
            ].join(' ')}>
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'>
      {open ? (
        <path d='M3 3l12 12M15 3L3 15' />
      ) : (
        <path d='M2 5h14M2 9h14M2 13h14' />
      )}
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      className='h-3.5 w-3.5'
      viewBox='0 0 16 16'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
    </svg>
  )
}

function SidebarContents({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className='flex flex-col gap-6'>
      <NavGroup label='Overview' items={overviewNav} onNavigate={onNavigate} />
      <NavGroup label='Theme' items={themeNav} onNavigate={onNavigate} />
      <NavGroup label='Layout' items={layoutNav} onNavigate={onNavigate} />
      <NavGroup label='Inputs' items={inputsNav} onNavigate={onNavigate} />
      <NavGroup label='Overlays' items={overlaysNav} onNavigate={onNavigate} />
      <NavGroup label='Feedback' items={feedbackNav} onNavigate={onNavigate} />
      <NavGroup label='AI / Agent' items={aiAgentNav} onNavigate={onNavigate} />
      <NavGroup
        label='Eval / Observability'
        items={evalObservabilityNav}
        onNavigate={onNavigate}
      />
    </div>
  )
}

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useIsMobile()

  /* Close mobile drawer when history moves (browser back / forward).
   * Internal doc-to-doc taps use SidebarContents onNavigate. Avoid pathname +
   * setState-in-effect pattern (eslint) and redundant closed→closed updates. */
  useEffect(() => {
    const onPopState = () => setMobileOpen(false)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <ScrollToTop />

      {/* Header */}
      <header
        className='sticky top-0 z-50 w-full border-b border-border bg-background'
        style={{ height: HEADER_H }}>
        <div className='container-shell flex h-full items-center justify-between'>
          <Link to='/' className='flex items-center'>
            <BrandLogo />
          </Link>

          {!isMobile && (
            <nav className='flex items-center gap-1'>
              <Link
                to='/docs/getting-started'
                className={[
                  'rounded-sm px-3 py-1.5 text-sm no-underline',
                  pathname.startsWith('/docs')
                    ? 'bg-background-subtle font-medium text-foreground'
                    : 'font-normal text-foreground-muted',
                ].join(' ')}>
                Documentation
              </Link>
            </nav>
          )}

          <div className='flex items-center gap-2'>
            {!isMobile && (
              <a
                href='https://github.com/carnellai/caindev-ui'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-sm text-foreground-muted no-underline'>
                <GitHubIcon />
                GitHub
              </a>
            )}
            {isMobile && (
              <button
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileOpen((o) => !o)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 8,
                  color: 'var(--color-foreground-muted)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <HamburgerIcon open={mobileOpen} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      {isMobile && mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* Mobile sidebar */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: HEADER_H,
            left: 0,
            zIndex: 50,
            width: 260,
            height: `calc(100vh - ${HEADER_H}px)`,
            padding: '24px 12px 48px 16px',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            borderRight: '1px solid var(--color-border)',
            background: 'var(--color-background)',
            display: 'flex',
            flexDirection: 'column',
            transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 280ms cubic-bezier(0.32,0.72,0,1)',
          }}>
          <SidebarContents onNavigate={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Desktop sidebar */}
      {!isMobile && (
        <div
          style={{
            position: 'fixed',
            top: HEADER_H,
            left: 0,
            zIndex: 40,
            width: SIDEBAR_W,
            height: `calc(100vh - ${HEADER_H}px)`,
            padding: '24px 12px 48px 16px',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            borderRight: '1px solid var(--color-border)',
            background: 'var(--color-background)',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <SidebarContents />
        </div>
      )}

      {/* Content */}
      <div style={{ marginLeft: isMobile ? 0 : SIDEBAR_W }}>
        <main
          style={{
            minHeight: `calc(100vh - ${HEADER_H}px)`,
            padding: isMobile ? '24px 16px 64px' : '40px 80px 80px',
            maxWidth: 1000,
            margin: '0 auto',
            width: '100%',
          }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
