export type EvalVerdict = 'pass' | 'fail' | 'review' | 'insufficient'

type EvalBadgeProps = {
  verdict: EvalVerdict
  score?: number
  label?: string
  size?: 'sm' | 'md'
}

const evalConfig: Record<EvalVerdict, { label: string; color: string; bg: string }> = {
  pass:         { label: 'Pass',         color: '#34d399', bg: 'rgba(52,211,153,0.12)' },
  fail:         { label: 'Fail',         color: '#f87171', bg: 'rgba(248,113,113,0.12)' },
  review:       { label: 'Review',       color: '#fbbf24', bg: 'rgba(251,191,36,0.12)' },
  insufficient: { label: 'Insufficient', color: '#94a3b8', bg: 'rgba(148,163,184,0.1)' },
}

export function EvalBadge({ verdict, score, label, size = 'md' }: EvalBadgeProps) {
  const cfg = evalConfig[verdict]
  const isSmall = size === 'sm'
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: isSmall ? '2px 6px' : '3px 9px',
      borderRadius: '4px',
      border: `1px solid ${cfg.color}22`,
      background: cfg.bg,
      fontSize: isSmall ? '0.625rem' : '0.6875rem',
      fontWeight: 600,
      letterSpacing: '0.04em',
      color: cfg.color,
      whiteSpace: 'nowrap',
    }}>
      <span style={{ width: isSmall ? '5px' : '6px', height: isSmall ? '5px' : '6px', borderRadius: '50%', background: cfg.color, flexShrink: 0 }} />
      {label ?? cfg.label}
      {score !== undefined && (
        <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.8 }}>
          {score.toFixed(2)}
        </span>
      )}
    </span>
  )
}
