import { Link } from 'react-router'
import { Button } from './Button'
import { Switch } from './Switch'
import { Checkbox } from './Checkbox'
import { Input } from './Input'
import { EvalBadge } from './EvalBadge'
import { RunStatusBadge } from './RunStatusBadge'
import { ScoreBar } from './ScoreBar'
import { TokenCost } from './TokenCost'
import { StreamingText, useSimulatedStream } from './StreamingText'
import { ToolCallCard } from './ToolCallCard'
import { AgentStep } from './AgentStep'
import { MetricCard } from './MetricCard'

// ─── Preview components ───────────────────────────────────────────────────────

function ButtonPreview() {
  return (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
      <Button size='sm' variant='solid'>
        Solid
      </Button>
      <Button size='sm' variant='outline'>
        Outline
      </Button>
      <Button size='sm' variant='ghost'>
        Ghost
      </Button>
    </div>
  )
}

function SwitchPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Switch label='Notifications' defaultChecked />
      <Switch label='Dark mode' />
    </div>
  )
}

function CheckboxPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Checkbox label='Accept terms' defaultChecked />
      <Checkbox label='Subscribe' />
    </div>
  )
}

function InputPreview() {
  return <Input placeholder='Enter your name' label='Name' />
}

function StreamingPreview() {
  const { text, streaming } = useSimulatedStream(
    'The answer to your question involves several key considerations...',
    25,
  )
  return (
    <p
      style={{
        margin: 0,
        fontSize: '0.8125rem',
        lineHeight: 1.6,
        color: 'var(--color-foreground)',
      }}>
      <StreamingText text={text} streaming={streaming} />
    </p>
  )
}

function ToolCallPreview() {
  return (
    <ToolCallCard
      name='search_web'
      status='success'
      duration={312}
      input={{ query: 'latest AI research' }}
      output={{ results: [{ title: 'Attention Is All You Need' }] }}
    />
  )
}

function AgentStepPreview() {
  return (
    <AgentStep
      steps={[
        {
          id: '1',
          label: 'Retrieve context',
          status: 'complete',
          duration: 180,
        },
        { id: '2', label: 'Generate response', status: 'running' },
        { id: '3', label: 'Validate output', status: 'pending' },
      ]}
    />
  )
}

function EvalBadgePreview() {
  return (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
      <EvalBadge verdict='pass' score={0.94} />
      <EvalBadge verdict='fail' score={0.31} />
      <EvalBadge verdict='review' score={0.61} />
    </div>
  )
}

function RunStatusPreview() {
  return (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
      <RunStatusBadge status='running' />
      <RunStatusBadge status='completed' />
      <RunStatusBadge status='failed' />
    </div>
  )
}

function ScoreBarPreview() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
      }}>
      <ScoreBar label='Correctness' score={0.94} threshold={0.8} />
      <ScoreBar label='Relevance' score={0.58} threshold={0.8} />
    </div>
  )
}

function TokenCostPreview() {
  return (
    <TokenCost
      model='claude-3-5-sonnet'
      inputTokens={3847}
      outputTokens={512}
      cost={0.01298}
    />
  )
}

function MetricCardPreview() {
  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
      <MetricCard
        label='Pass rate'
        value='91.3'
        unit='%'
        trend='up'
        trendValue='4%'
      />
      <MetricCard
        label='Latency'
        value='1.2'
        unit='s'
        trend='down'
        trendValue='12%'
        trendPositive={false}
      />
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

type ComponentEntry = {
  name: string
  description: string
  href: string
  preview: React.ReactNode
}

const foundations: ComponentEntry[] = [
  {
    name: 'Button',
    description: 'Actions and form submissions',
    href: '/docs/button',
    preview: <ButtonPreview />,
  },
  {
    name: 'Switch',
    description: 'Boolean on/off toggle',
    href: '/docs/switch',
    preview: <SwitchPreview />,
  },
  {
    name: 'Checkbox',
    description: 'Single and group selection',
    href: '/docs/checkbox',
    preview: <CheckboxPreview />,
  },
  {
    name: 'Input',
    description: 'Text entry with validation',
    href: '/docs/input',
    preview: <InputPreview />,
  },
  {
    name: 'Dialog',
    description: 'Modal overlays with focus trap',
    href: '/docs/dialog',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Focus-trapped modal with backdrop and animations
      </div>
    ),
  },
  {
    name: 'Select',
    description: 'Single value from a list',
    href: '/docs/select',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Keyboard-navigable dropdown
      </div>
    ),
  },
  {
    name: 'Tabs',
    description: 'Switch between related panels',
    href: '/docs/tabs',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Animated indicator, arrow key navigation
      </div>
    ),
  },
  {
    name: 'Tooltip',
    description: 'Contextual hints on hover',
    href: '/docs/tooltip',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Delay groups, all four sides
      </div>
    ),
  },
  {
    name: 'Accordion',
    description: 'Collapsible content panels',
    href: '/docs/accordion',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Animated height, single or multiple open
      </div>
    ),
  },
  {
    name: 'Menu',
    description: 'Dropdown action list',
    href: '/docs/menu',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Keyboard nav, groups, destructive items
      </div>
    ),
  },
  {
    name: 'Slider',
    description: 'Range value selection',
    href: '/docs/slider',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Single and range mode, accessible labels
      </div>
    ),
  },
]

const chatComponents: ComponentEntry[] = [
  {
    name: 'StreamingText',
    description: 'Token-by-token with cursor',
    href: '/docs/streaming-text',
    preview: <StreamingPreview />,
  },
  {
    name: 'ToolCallCard',
    description: 'Expandable tool invocation',
    href: '/docs/tool-call-card',
    preview: <ToolCallPreview />,
  },
  {
    name: 'AgentStep',
    description: 'Multi-step plan with status',
    href: '/docs/agent-step',
    preview: <AgentStepPreview />,
  },
  {
    name: 'PromptInput',
    description: 'Auto-resizing AI chat input',
    href: '/docs/prompt-input',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Enter to send, stop button while loading
      </div>
    ),
  },
  {
    name: 'MessageBubble',
    description: 'User / assistant roles',
    href: '/docs/message-bubble',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Role-aware layout, streaming support
      </div>
    ),
  },
  {
    name: 'MessageThread',
    description: 'Auto-scrolling conversation',
    href: '/docs/message-thread',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Scrolls to latest message during streaming
      </div>
    ),
  },
  {
    name: 'ThinkingBlock',
    description: 'Collapsible reasoning display',
    href: '/docs/thinking-block',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Pulsing dots while streaming, word count when done
      </div>
    ),
  },
  {
    name: 'CodeBlock',
    description: 'Syntax display with copy',
    href: '/docs/code-block',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Filename, language badge, line numbers
      </div>
    ),
  },
  {
    name: 'ApprovalCard',
    description: 'HITL interrupt UI',
    href: '/docs/approval-card',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Approve / reject with risk level and reasoning
      </div>
    ),
  },
  {
    name: 'StructuredOutput',
    description: 'Type-aware JSON renderer',
    href: '/docs/structured-output',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Strings, numbers, booleans, nested objects
      </div>
    ),
  },
]

const obsComponents: ComponentEntry[] = [
  {
    name: 'TraceTree',
    description: 'Hierarchical span tree',
    href: '/docs/trace-tree',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        LLM, TOOL, RETRIEVAL, AGENT, GUARDRAIL kinds
      </div>
    ),
  },
  {
    name: 'EvalBadge',
    description: 'pass / fail / review verdict',
    href: '/docs/eval-badge',
    preview: <EvalBadgePreview />,
  },
  {
    name: 'RunStatusBadge',
    description: 'Run lifecycle status',
    href: '/docs/run-status-badge',
    preview: <RunStatusPreview />,
  },
  {
    name: 'ScoreBar',
    description: 'Score with threshold marker',
    href: '/docs/score-bar',
    preview: <ScoreBarPreview />,
  },
  {
    name: 'TokenCost',
    description: 'Monospace tokens + cost',
    href: '/docs/token-cost',
    preview: <TokenCostPreview />,
  },
  {
    name: 'MetricCard',
    description: 'Single metric with trend',
    href: '/docs/metric-card',
    preview: <MetricCardPreview />,
  },
  {
    name: 'StatDelta',
    description: 'Metric vs baseline comparison',
    href: '/docs/stat-delta',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Direction-aware delta with format options
      </div>
    ),
  },
  {
    name: 'Skeleton',
    description: 'Shimmer loading placeholder',
    href: '/docs/skeleton',
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div
          style={{
            height: '12px',
            borderRadius: '4px',
            background: 'var(--color-background-subtle)',
            animation: 'skeleton-shimmer 1.5s ease-in-out infinite',
          }}
        />
        <div
          style={{
            height: '12px',
            width: '75%',
            borderRadius: '4px',
            background: 'var(--color-background-subtle)',
            animation: 'skeleton-shimmer 1.5s ease-in-out infinite',
          }}
        />
        <style>{`@keyframes skeleton-shimmer{0%{opacity:.5}50%{opacity:1}100%{opacity:.5}}`}</style>
      </div>
    ),
  },
  {
    name: 'EmptyState',
    description: 'Empty and error placeholders',
    href: '/docs/empty-state',
    preview: (
      <div
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-foreground-muted)',
        }}>
        Default and error variants with action slot
      </div>
    ),
  },
]

// ─── Card ─────────────────────────────────────────────────────────────────────

function ComponentCard({ name, description, href, preview }: ComponentEntry) {
  return (
    <Link
      to={href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        borderRadius: '10px',
        border: '1px solid var(--color-border)',
        background: 'var(--color-background-elevated)',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'border-color 150ms',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = 'var(--color-border-strong)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = 'var(--color-border)')
      }>
      {/* Preview area */}
      <div
        style={{
          padding: '20px',
          minHeight: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--color-border)',
          background: 'var(--color-background)',
        }}>
        <div style={{ width: '100%' }}>{preview}</div>
      </div>

      {/* Label */}
      <div
        style={{
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '3px',
        }}>
        <span
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-foreground)',
          }}>
          {name}
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--color-foreground-muted)',
          }}>
          {description}
        </span>
      </div>
    </Link>
  )
}

function ComponentGroup({
  eyebrow,
  label,
  components,
}: {
  eyebrow: string
  label: string
  components: ComponentEntry[]
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span className='eyebrow'>{eyebrow}</span>
        <h3 style={{ margin: 0, color: 'var(--color-foreground)' }}>{label}</h3>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '12px',
        }}>
        {components.map((c) => (
          <ComponentCard key={c.name} {...c} />
        ))}
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ComponentGrid() {
  return (
    <section id='components' className='container-shell py-24'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        <ComponentGroup
          eyebrow='Foundations'
          label='Core components'
          components={foundations}
        />
        <div style={{ height: '1px', background: 'var(--color-border)' }} />
        <ComponentGroup
          eyebrow='Chat & Generation'
          label='Prototype AI interface patterns'
          components={chatComponents}
        />
        <div style={{ height: '1px', background: 'var(--color-border)' }} />
        <ComponentGroup
          eyebrow='Observability'
          label='Prototype eval & tracing patterns'
          components={obsComponents}
        />
      </div>
    </section>
  )
}
