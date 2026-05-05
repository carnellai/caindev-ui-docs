type StepStatus = 'pending' | 'running' | 'complete' | 'failed' | 'skipped'

type Step = {
  id: string
  label: string
  description?: string
  status: StepStatus
  duration?: number
}

type AgentStepProps = {
  steps: Step[]
}

const statusConfig: Record<StepStatus, { icon: React.ReactNode; color: string }> = {
  pending: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: 'var(--color-foreground-subtle)',
  },
  running: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14">
        <circle cx="7" cy="7" r="6" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="28" strokeDashoffset="10">
          <animateTransform attributeName="transform" type="rotate" from="0 7 7" to="360 7 7" dur="1s" repeatCount="indefinite"/>
        </circle>
      </svg>
    ),
    color: '#a78bfa',
  },
  complete: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" fill="#34d399" stroke="#34d399" strokeWidth="1.5"/>
        <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#34d399',
  },
  failed: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" fill="#f87171" stroke="#f87171" strokeWidth="1.5"/>
        <path d="M5 5l4 4M9 5l-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#f87171',
  },
  skipped: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
      </svg>
    ),
    color: 'var(--color-foreground-subtle)',
  },
}

export function AgentStep({ steps }: AgentStepProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {steps.map((step, i) => {
        const cfg = statusConfig[step.status]
        const isLast = i === steps.length - 1

        return (
          <div key={step.id} style={{ display: 'flex', gap: '12px' }}>
            {/* Icon + connector */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <span style={{ color: cfg.color, display: 'flex', zIndex: 1 }}>
                {cfg.icon}
              </span>
              {!isLast && (
                <div style={{
                  width: '1px',
                  flex: 1,
                  minHeight: '16px',
                  background: step.status === 'complete' ? '#34d399' : 'var(--color-border)',
                  margin: '3px 0',
                  opacity: 0.4,
                }} />
              )}
            </div>

            {/* Content */}
            <div style={{
              paddingBottom: isLast ? 0 : '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              minWidth: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: step.status === 'pending' || step.status === 'skipped'
                    ? 'var(--color-foreground-muted)'
                    : 'var(--color-foreground)',
                  lineHeight: '14px',
                }}>
                  {step.label}
                </span>
                {step.duration !== undefined && step.status === 'complete' && (
                  <span style={{
                    fontSize: '0.6875rem',
                    color: 'var(--color-foreground-subtle)',
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    {step.duration}ms
                  </span>
                )}
              </div>
              {step.description && (
                <p style={{
                  margin: 0,
                  fontSize: '0.8125rem',
                  color: 'var(--color-foreground-subtle)',
                  lineHeight: 1.5,
                }}>
                  {step.description}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
