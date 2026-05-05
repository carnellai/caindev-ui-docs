import { Link, useLocation } from 'react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const foundations = [
  { label: 'Button', href: '/docs/button' },
  { label: 'Checkbox', href: '/docs/checkbox' },
  { label: 'Dialog', href: '/docs/dialog' },
  { label: 'Input', href: '/docs/input' },
  { label: 'Menu', href: '/docs/menu' },
  { label: 'Select', href: '/docs/select' },
  { label: 'Switch', href: '/docs/switch' },
  { label: 'Tabs', href: '/docs/tabs' },
  { label: 'Tooltip', href: '/docs/tooltip' },
  { label: 'Accordion', href: '/docs/accordion' },
  { label: 'Popover', href: '/docs/popover' },
  { label: 'Slider', href: '/docs/slider' },
]

const aiPrimitives = [
  { label: 'StreamingText', href: '/docs/streaming-text' },
  { label: 'ToolCallCard', href: '/docs/tool-call-card' },
  { label: 'EvalScore', href: '/docs/eval-score' },
  { label: 'TokenBadge', href: '/docs/token-badge' },
  { label: 'SpanTimeline', href: '/docs/span-timeline' },
  { label: 'StatusIndicator', href: '/docs/status-indicator' },
  { label: 'ModelSelector', href: '/docs/model-selector' },
]

function NavGroup({
  label,
  items,
}: {
  label: string
  items: { label: string; href: string }[]
}) {
  const { pathname } = useLocation()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span
        style={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--color-foreground-subtle)',
          padding: '0 8px',
          marginBottom: '4px',
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
              padding: '6px 8px',
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
    </div>
  )
}

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          minHeight: 'calc(100vh - 56px)',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
        }}>
        {/* Sidebar */}
        <aside
          style={{
            borderRight: '1px solid var(--color-border)',
            paddingTop: '32px',
            paddingRight: '24px',
            paddingBottom: '48px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            position: 'sticky',
            top: '56px',
            height: 'calc(100vh - 56px)',
            overflowY: 'auto',
          }}>
          <NavGroup label='Foundations' items={foundations} />
          <NavGroup label='AI Primitives' items={aiPrimitives} />
        </aside>

        {/* Content */}
        <main
          style={{
            paddingTop: '40px',
            paddingLeft: '48px',
            paddingBottom: '80px',
            minWidth: 0,
          }}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
