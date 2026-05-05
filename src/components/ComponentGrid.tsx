const foundations = [
  {
    name: 'Button',
    description: 'Actions and form submissions',
    status: 'stable',
  },
  {
    name: 'Checkbox',
    description: 'Single and group selection',
    status: 'stable',
  },
  {
    name: 'Dialog',
    description: 'Modal overlays with focus trap',
    status: 'stable',
  },
  {
    name: 'Input',
    description: 'Text entry with validation states',
    status: 'stable',
  },
  {
    name: 'Menu',
    description: 'Dropdown actions with keyboard nav',
    status: 'stable',
  },
  { name: 'Select', description: 'Single value from a list', status: 'stable' },
  { name: 'Switch', description: 'Boolean on/off toggle', status: 'stable' },
  {
    name: 'Tabs',
    description: 'Switch between related panels',
    status: 'stable',
  },
  {
    name: 'Tooltip',
    description: 'Contextual hints on hover',
    status: 'stable',
  },
  {
    name: 'Accordion',
    description: 'Collapsible content panels',
    status: 'stable',
  },
  {
    name: 'Popover',
    description: 'Anchored floating content',
    status: 'stable',
  },
  { name: 'Slider', description: 'Range value selection', status: 'stable' },
]

const aiPrimitives = [
  {
    name: 'StreamingText',
    description: 'Animates LLM output token by token',
    status: 'stable',
  },
  {
    name: 'ToolCallCard',
    description: 'Collapsible tool invocation display',
    status: 'stable',
  },
  {
    name: 'EvalScore',
    description: 'Score meter with threshold bands',
    status: 'stable',
  },
  {
    name: 'TokenBadge',
    description: 'Monospace token and cost display',
    status: 'stable',
  },
  {
    name: 'SpanTimeline',
    description: 'Trace spans with latency breakdown',
    status: 'beta',
  },
  {
    name: 'StatusIndicator',
    description: 'Run and agent status with glow',
    status: 'stable',
  },
  {
    name: 'ModelSelector',
    description: 'Provider and model picker',
    status: 'beta',
  },
  {
    name: 'PromptDiff',
    description: 'Before/after prompt comparison',
    status: 'coming-soon',
  },
]

type Status = 'stable' | 'beta' | 'coming-soon'

const statusStyles: Record<Status, string> = {
  stable: 'bg-emerald-950 text-emerald-400',
  beta: 'bg-violet-950 text-violet-400',
  'coming-soon': 'bg-background-subtle text-foreground-subtle',
}

const statusLabel: Record<Status, string> = {
  stable: 'Stable',
  beta: 'Beta',
  'coming-soon': 'Soon',
}

function ComponentCard({
  name,
  description,
  status,
}: {
  name: string
  description: string
  status: Status
}) {
  return (
    <a
      href='#'
      className='group flex flex-col gap-3 rounded-lg border border-border bg-background-elevated p-5 transition-all hover:border-border-strong hover:bg-background-subtle'>
      <div className='flex items-start justify-between gap-2'>
        <span className='text-sm font-medium text-foreground group-hover:text-accent transition-colors'>
          {name}
        </span>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${statusStyles[status]}`}>
          {statusLabel[status]}
        </span>
      </div>
      <p className='text-xs leading-relaxed text-foreground-muted'>
        {description}
      </p>
    </a>
  )
}

function ComponentGroup({
  label,
  eyebrow,
  components,
}: {
  label: string
  eyebrow: string
  components: { name: string; description: string; status: Status }[]
}) {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <span className='eyebrow'>{eyebrow}</span>
        <h3 className='text-foreground'>{label}</h3>
      </div>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {components.map((c) => (
          <ComponentCard key={c.name} {...c} />
        ))}
      </div>
    </div>
  )
}

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
          eyebrow='AI Primitives'
          label='Built for AI interfaces'
          components={aiPrimitives}
        />
      </div>
    </section>
  )
}
