export type StepStatus = 'pending' | 'running' | 'complete' | 'failed' | 'skipped'

export type AgentStepItem = {
  id: string
  label: string
  description?: string
  status: StepStatus
  duration?: number
}

export type AgentStepProps = {
  steps: AgentStepItem[]
  className?: string
  style?: React.CSSProperties
}

function RunningIcon() {
  return (
    <>
      <svg
        className="agent-step-spinner"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        style={{
          animation: 'agent-step-spin 1s linear infinite',
          transformOrigin: 'center',
        }}
      >
        <circle cx="7" cy="7" r="6" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="28" strokeDashoffset="10" />
      </svg>
      <style>{`
        @keyframes agent-step-spin {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .agent-step-spinner {
            animation: none !important;
          }
        }
      `}</style>
    </>
  )
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
    icon: <RunningIcon />,
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

export function AgentStep({ steps, className, style }: AgentStepProps) {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '0', ...style }}>
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
