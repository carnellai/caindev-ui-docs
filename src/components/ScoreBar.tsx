type ScoreBarProps = {
  score: number
  threshold?: number
  label?: string
  showValue?: boolean
  size?: 'sm' | 'md'
}

export function ScoreBar({ score, threshold, label, showValue = true, size = 'md' }: ScoreBarProps) {
  const pct = Math.min(Math.max(score, 0), 1) * 100
  const passing = threshold !== undefined ? score >= threshold : true
  const barColor = passing ? '#34d399' : '#f87171'
  const height = size === 'sm' ? '4px' : '6px'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {label && <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-muted)' }}>{label}</span>}
          {showValue && (
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: barColor }}>
              {(score * 100).toFixed(1)}%
            </span>
          )}
        </div>
      )}
      <div style={{ position: 'relative', width: '100%', height, background: 'var(--color-background-subtle)', borderRadius: '999px', overflow: 'visible' }}>
        <div style={{
          position: 'absolute',
          left: 0, top: 0, bottom: 0,
          width: `${pct}%`,
          background: barColor,
          borderRadius: '999px',
          transition: 'width 400ms ease',
        }} />
        {threshold !== undefined && (
          <div style={{
            position: 'absolute',
            top: '-3px',
            left: `${threshold * 100}%`,
            width: '2px',
            height: `calc(${height} + 6px)`,
            background: 'var(--color-foreground-subtle)',
            borderRadius: '1px',
            transform: 'translateX(-50%)',
          }} />
        )}
      </div>
    </div>
  )
}
