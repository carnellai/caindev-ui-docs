import { Link, useLocation } from 'react-router'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const foundationsLayout = [
  { label: 'Card', href: '/docs/card' },
  { label: 'Separator', href: '/docs/separator' },
  { label: 'Stack', href: '/docs/stack' },
  { label: 'Grid', href: '/docs/grid' },
  { label: 'Container', href: '/docs/container' },
  { label: 'Section', href: '/docs/section' },
]

const foundationsInputs = [
  { label: 'Button', href: '/docs/button' },
  { label: 'Checkbox', href: '/docs/checkbox' },
  { label: 'Form', href: '/docs/form' },
  { label: 'Input', href: '/docs/input' },
  { label: 'Select', href: '/docs/select' },
  { label: 'Slider', href: '/docs/slider' },
  { label: 'Switch', href: '/docs/switch' },
]

const foundationsOverlay = [
  { label: 'Accordion', href: '/docs/accordion' },
  { label: 'Dialog', href: '/docs/dialog' },
  { label: 'Menu', href: '/docs/menu' },
  { label: 'Tabs', href: '/docs/tabs' },
  { label: 'Tooltip', href: '/docs/tooltip' },
]

const foundationsFeedback = [
  { label: 'Alert', href: '/docs/alert' },
  { label: 'Badge', href: '/docs/badge' },
  { label: 'Toast', href: '/docs/toast' },
]

const foundationsData = [{ label: 'Table', href: '/docs/table' }]

const chatGeneration = [
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
]

const observability = [
  { label: 'TraceTree', href: '/docs/trace-tree' },
  { label: 'EvalBadge', href: '/docs/eval-badge' },
  { label: 'MetricCard', href: '/docs/metric-card' },
  { label: 'StatDelta', href: '/docs/stat-delta' },
  { label: 'TokenCost', href: '/docs/token-cost' },
  { label: 'RunStatusBadge', href: '/docs/run-status-badge' },
  { label: 'ScoreBar', href: '/docs/score-bar' },
  { label: 'Skeleton', href: '/docs/skeleton' },
  { label: 'EmptyState', href: '/docs/empty-state' },
]

const allAiHrefs = [...chatGeneration, ...observability].map((i) => i.href)

const SIDEBAR_WIDTH = 220

function NavGroup({
  label,
  items,
}: {
  label: string
  items: { label: string; href: string }[]
}) {
  const { pathname } = useLocation()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
      <span
        style={{
          fontSize: '0.625rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'var(--color-foreground-subtle)',
          marginBottom: '4px',
          paddingLeft: '8px',
        }}>
        {label}
      </span>
      {items.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            to={item.href}
            style={{
              display: 'block',
              padding: '5px 8px',
              borderRadius: '5px',
              fontSize: '0.8125rem',
              color: active
                ? 'var(--color-foreground)'
                : 'var(--color-foreground-muted)',
              background: active
                ? 'var(--color-background-subtle)'
                : 'transparent',
              textDecoration: 'none',
              fontWeight: active ? 500 : 400,
              whiteSpace: 'nowrap',
            }}>
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}

function SectionToggle({
  active,
  onChange,
}: {
  active: 'base' | 'ai'
  onChange: (v: 'base' | 'ai') => void
}) {
  return (
    <div
      style={{
        display: 'flex',
        background: 'var(--color-background-subtle)',
        borderRadius: '7px',
        padding: '3px',
        gap: '2px',
        marginBottom: '20px',
        border: '1px solid var(--color-border)',
      }}>
      {(['base', 'ai'] as const).map((v) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          style={{
            flex: 1,
            padding: '5px 0',
            borderRadius: '5px',
            border: 'none',
            fontSize: '0.75rem',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'inherit',
            background:
              active === v ? 'var(--color-background-elevated)' : 'transparent',
            color:
              active === v
                ? 'var(--color-foreground)'
                : 'var(--color-foreground-subtle)',
            boxShadow: active === v ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
            transition: 'all 120ms',
          }}>
          {v === 'base' ? 'Base UI' : 'AI'}
        </button>
      ))}
    </div>
  )
}

// Scrolls to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const isAiRoute = allAiHrefs.includes(pathname)
  const [section, setSection] = useState<'base' | 'ai'>(
    isAiRoute ? 'ai' : 'base',
  )

  return (
    <>
      <ScrollToTop />
      <Header />

      {/* Fixed sidebar */}
      <aside
        style={{
          position: 'fixed',
          top: '56px',
          left: 0,
          width: `${SIDEBAR_WIDTH}px`,
          height: 'calc(100vh - 56px)',
          borderRight: '1px solid var(--color-border)',
          background: 'var(--color-background)',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          padding: '24px 12px 48px 16px',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 40,
        }}>
        <SectionToggle active={section} onChange={setSection} />

        {section === 'base' && (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <NavGroup label='Layout' items={foundationsLayout} />
            <NavGroup label='Inputs' items={foundationsInputs} />
            <NavGroup label='Overlay' items={foundationsOverlay} />
            <NavGroup label='Feedback' items={foundationsFeedback} />
            <NavGroup label='Data' items={foundationsData} />
          </div>
        )}

        {section === 'ai' && (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <NavGroup label='Chat & Generation' items={chatGeneration} />
            <NavGroup label='Observability' items={observability} />
          </div>
        )}
      </aside>

      {/* Everything offset by sidebar width */}
      <div style={{ marginLeft: `${SIDEBAR_WIDTH}px` }}>
        <main
          style={{
            minHeight: 'calc(100vh - 56px)',
            padding: '40px 80px 80px 80px',
            margin: '0 auto',
            maxWidth: '1000px',
          }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
