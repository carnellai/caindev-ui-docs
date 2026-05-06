import { Link } from 'react-router'
import {
  Button,
  Switch,
  Checkbox,
  Input,
  EvalBadge,
  RunStatusBadge,
  ScoreBar,
  TokenCost,
  StreamingText,
  useSimulatedStream,
  ToolCallCard,
  AgentStep,
  MetricCard,
} from '@caindev/ui'

// ─── Preview components ───────────────────────────────────────────────────────

function ButtonPreview() {
  return (
    <div className='flex flex-wrap gap-1.5'>
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
    <div className='flex flex-col gap-2'>
      <Switch label='Notifications' defaultChecked />
      <Switch label='Dark mode' />
    </div>
  )
}

function CheckboxPreview() {
  return (
    <div className='flex flex-col gap-2'>
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
    <p className='m-0 text-[0.8125rem] leading-[1.6] text-foreground'>
      <StreamingText text={text} streaming={streaming} />
    </p>
  )
}

function MutedPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className='text-[0.8125rem] text-foreground-muted'>{children}</div>
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
    <div className='flex flex-wrap gap-1.5'>
      <EvalBadge verdict='pass' score={0.94} />
      <EvalBadge verdict='fail' score={0.31} />
      <EvalBadge verdict='review' score={0.61} />
    </div>
  )
}

function RunStatusPreview() {
  return (
    <div className='flex flex-wrap gap-1.5'>
      <RunStatusBadge status='running' />
      <RunStatusBadge status='completed' />
      <RunStatusBadge status='failed' />
    </div>
  )
}

function ScoreBarPreview() {
  return (
    <div className='flex w-full flex-col gap-2'>
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
    <div className='grid grid-cols-2 gap-2'>
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
      <MutedPreview>
        Focus-trapped modal with backdrop and animations
      </MutedPreview>
    ),
  },
  {
    name: 'Select',
    description: 'Single value from a list',
    href: '/docs/select',
    preview: <MutedPreview>Keyboard-navigable dropdown</MutedPreview>,
  },
  {
    name: 'Tabs',
    description: 'Switch between related panels',
    href: '/docs/tabs',
    preview: (
      <MutedPreview>Animated indicator, arrow key navigation</MutedPreview>
    ),
  },
  {
    name: 'Tooltip',
    description: 'Contextual hints on hover',
    href: '/docs/tooltip',
    preview: <MutedPreview>Delay groups, all four sides</MutedPreview>,
  },
  {
    name: 'Accordion',
    description: 'Collapsible content panels',
    href: '/docs/accordion',
    preview: (
      <MutedPreview>Animated height, single or multiple open</MutedPreview>
    ),
  },
  {
    name: 'Menu',
    description: 'Dropdown action list',
    href: '/docs/menu',
    preview: (
      <MutedPreview>Keyboard nav, groups, destructive items</MutedPreview>
    ),
  },
  {
    name: 'Slider',
    description: 'Range value selection',
    href: '/docs/slider',
    preview: (
      <MutedPreview>Single and range mode, accessible labels</MutedPreview>
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
      <MutedPreview>Enter to send, stop button while loading</MutedPreview>
    ),
  },
  {
    name: 'MessageBubble',
    description: 'User / assistant roles',
    href: '/docs/message-bubble',
    preview: <MutedPreview>Role-aware layout, streaming support</MutedPreview>,
  },
  {
    name: 'MessageThread',
    description: 'Auto-scrolling conversation',
    href: '/docs/message-thread',
    preview: (
      <MutedPreview>Scrolls to latest message during streaming</MutedPreview>
    ),
  },
  {
    name: 'ThinkingBlock',
    description: 'Collapsible reasoning display',
    href: '/docs/thinking-block',
    preview: (
      <MutedPreview>
        Pulsing dots while streaming, word count when done
      </MutedPreview>
    ),
  },
  {
    name: 'CodeBlock',
    description: 'Syntax display with copy',
    href: '/docs/code-block',
    preview: (
      <MutedPreview>Filename, language badge, line numbers</MutedPreview>
    ),
  },
  {
    name: 'ApprovalCard',
    description: 'HITL interrupt UI',
    href: '/docs/approval-card',
    preview: (
      <MutedPreview>
        Approve / reject with risk level and reasoning
      </MutedPreview>
    ),
  },
  {
    name: 'StructuredOutput',
    description: 'Type-aware JSON renderer',
    href: '/docs/structured-output',
    preview: (
      <MutedPreview>Strings, numbers, booleans, nested objects</MutedPreview>
    ),
  },
]

const obsComponents: ComponentEntry[] = [
  {
    name: 'TraceTree',
    description: 'Hierarchical span tree',
    href: '/docs/trace-tree',
    preview: (
      <MutedPreview>LLM, TOOL, RETRIEVAL, AGENT, GUARDRAIL kinds</MutedPreview>
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
      <MutedPreview>Direction-aware delta with format options</MutedPreview>
    ),
  },
  {
    name: 'Skeleton',
    description: 'Shimmer loading placeholder',
    href: '/docs/skeleton',
    preview: (
      <div className='flex flex-col gap-1.5'>
        <div className='cd-component-grid-skeleton-pulse h-3 rounded-[4px] bg-background-subtle' />
        <div className='cd-component-grid-skeleton-pulse h-3 w-3/4 rounded-[4px] bg-background-subtle' />
      </div>
    ),
  },
  {
    name: 'EmptyState',
    description: 'Empty and error placeholders',
    href: '/docs/empty-state',
    preview: (
      <MutedPreview>Default and error variants with action slot</MutedPreview>
    ),
  },
]

// ─── Card ─────────────────────────────────────────────────────────────────────

function ComponentCard({ name, description, href, preview }: ComponentEntry) {
  return (
    <Link
      to={href}
      className='flex flex-col gap-0 overflow-hidden rounded-md border border-border bg-background-elevated no-underline transition-colors duration-150 hover:border-border-strong'>
      {/* Preview area */}
      <div className='flex min-h-[100px] items-center justify-center border-b border-border bg-background p-5'>
        <div className='w-full'>{preview}</div>
      </div>

      {/* Label */}
      <div className='flex flex-col gap-[3px] px-3.5 py-3'>
        <span className='text-sm font-medium text-foreground'>{name}</span>
        <span className='text-xs text-foreground-muted'>{description}</span>
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
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1.5'>
        <span className='eyebrow'>{eyebrow}</span>
        <h3 className='m-0 text-foreground'>{label}</h3>
      </div>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3'>
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
      <div className='flex flex-col gap-16'>
        <ComponentGroup
          eyebrow='Foundations'
          label='Core components'
          components={foundations}
        />
        <div className='h-px bg-border' />
        <ComponentGroup
          eyebrow='Chat & Generation'
          label='Prototype AI interface patterns'
          components={chatComponents}
        />
        <div className='h-px bg-border' />
        <ComponentGroup
          eyebrow='Observability'
          label='Prototype eval & tracing patterns'
          components={obsComponents}
        />
      </div>
    </section>
  )
}
