export type RunStatus = 'running' | 'completed' | 'failed' | 'error' | 'queued' | 'cancelled'
export type RunStatusBadgeSize = 'sm' | 'md'

export type RunStatusBadgeProps = {
  status: RunStatus
  size?: RunStatusBadgeSize
  style?: React.CSSProperties
  className?: string
}

const runConfig: Record<RunStatus, { label: string; color: string; bg: string; pulse?: boolean }> = {
  running:   { label: 'Running',   color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', pulse: true },
  completed: { label: 'Completed', color: '#34d399', bg: 'rgba(52,211,153,0.12)' },
  failed:    { label: 'Failed',    color: '#f87171', bg: 'rgba(248,113,113,0.12)' },
  error:     { label: 'Error',     color: '#f87171', bg: 'rgba(248,113,113,0.12)' },
  queued:    { label: 'Queued',    color: '#fbbf24', bg: 'rgba(251,191,36,0.12)' },
  cancelled: { label: 'Cancelled', color: '#94a3b8', bg: 'rgba(148,163,184,0.1)' },
}

export function RunStatusBadge({ status, size = 'md', style, className }: RunStatusBadgeProps) {
  const cfg = runConfig[status]
  const isSmall = size === 'sm'
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: isSmall ? '2px 6px' : '3px 9px',
        borderRadius: '4px',
        background: cfg.bg,
        fontSize: isSmall ? '0.625rem' : '0.6875rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        color: cfg.color,
        whiteSpace: 'nowrap',
        ...style,
      }}>
      <span className="run-status-dot" style={{
        width: isSmall ? '5px' : '6px',
        height: isSmall ? '5px' : '6px',
        borderRadius: '50%',
        background: cfg.color,
        flexShrink: 0,
        animation: cfg.pulse ? 'status-pulse 1.5s ease-in-out infinite' : 'none',
      }} />
      <style>{`
        @keyframes status-pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
        @media (prefers-reduced-motion: reduce) {
          .run-status-dot {
            animation: none !important;
          }
        }
      `}</style>
      {cfg.label}
    </span>
  )
}
