import { Link, useLocation } from 'react-router'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const guides = [
  { label: 'Getting Started', href: '/docs/getting-started' },
  { label: 'Theming', href: '/docs/theming' },
  { label: 'Typography', href: '/docs/typography' },
  { label: 'Design Tokens', href: '/docs/design-tokens' },
  { label: 'Blocks', href: '/docs/blocks' },
]

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
  { label: 'Combobox', href: '/docs/combobox' },
  { label: 'Form', href: '/docs/form' },
  { label: 'Input', href: '/docs/input' },
  { label: 'NumberField', href: '/docs/number-field' },
  { label: 'Select', href: '/docs/select' },
  { label: 'Slider', href: '/docs/slider' },
  { label: 'Switch', href: '/docs/switch' },
]

const foundationsOverlay = [
  { label: 'Accordion', href: '/docs/accordion' },
  { label: 'CommandPalette', href: '/docs/command-palette' },
  { label: 'Dialog', href: '/docs/dialog' },
  { label: 'Drawer', href: '/docs/drawer' },
  { label: 'Menu', href: '/docs/menu' },
  { label: 'Tabs', href: '/docs/tabs' },
  { label: 'Tooltip', href: '/docs/tooltip' },
]

const foundationsFeedback = [
  { label: 'Alert', href: '/docs/alert' },
  { label: 'Badge', href: '/docs/badge' },
  { label: 'Progress', href: '/docs/progress' },
  { label: 'Toast', href: '/docs/toast' },
]

const foundationsData = [
  { label: 'Pagination', href: '/docs/pagination' },
  { label: 'Table', href: '/docs/table' },
]
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

function NavGroup({
  label,
  items,
}: {
  label: string
  items: { label: string; href: string }[]
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
            key={item.href}
            to={item.href}
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

function SectionToggle({
  active,
  onChange,
}: {
  active: 'base' | 'ai'
  onChange: (v: 'base' | 'ai') => void
}) {
  return (
    <div className='mb-5 flex gap-0.5 rounded-[7px] border border-border bg-background-subtle p-[3px]'>
      {(['base', 'ai'] as const).map((v) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          className={[
            'flex-1 cursor-pointer rounded-[5px] border-0 py-[5px] font-[inherit] text-xs font-medium transition-all duration-[120ms]',
            active === v
              ? 'bg-background-elevated text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
              : 'bg-transparent text-foreground-subtle',
          ].join(' ')}>
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

      {/* Fixed sidebar — top/width/height/padding/scrollbarWidth kept inline:
          pixel-exact values derived from Header height (56px) with no Tailwind token equivalent */}
      <aside
        className='fixed left-0 z-40 flex flex-col overflow-y-auto border-r border-border bg-background'
        style={{
          top: '56px',
          width: '220px',
          height: 'calc(100vh - 56px)',
          padding: '24px 12px 48px 16px',
          scrollbarWidth: 'none',
        }}>
        <div className='mb-6'>
          <NavGroup label='Guides' items={guides} />
        </div>

        <SectionToggle active={section} onChange={setSection} />

        {section === 'base' && (
          <div className='flex flex-col gap-6'>
            <NavGroup label='Layout' items={foundationsLayout} />
            <NavGroup label='Inputs' items={foundationsInputs} />
            <NavGroup label='Overlay' items={foundationsOverlay} />
            <NavGroup label='Feedback' items={foundationsFeedback} />
            <NavGroup label='Data' items={foundationsData} />
          </div>
        )}

        {section === 'ai' && (
          <div className='flex flex-col gap-6'>
            <NavGroup label='Chat & Generation' items={chatGeneration} />
            <NavGroup label='Observability' items={observability} />
          </div>
        )}
      </aside>

      {/* Content offset — marginLeft kept inline: matches sidebar width (220px), no Tailwind equivalent */}
      <div style={{ marginLeft: '220px' }}>
        <main
          className='mx-auto'
          style={{
            minHeight: 'calc(100vh - 56px)',
            padding: '40px 80px 80px 80px',
            maxWidth: '1000px',
          }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
