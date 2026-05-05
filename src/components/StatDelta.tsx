export type StatDeltaFormat = 'number' | 'percent' | 'currency' | 'duration'

export type StatDeltaProps = {
  label: string
  current: number
  previous: number
  unit?: string
  format?: StatDeltaFormat
  higherIsBetter?: boolean
  style?: React.CSSProperties
  className?: string
}

export function StatDelta({ label, current, previous, unit, format = 'number', higherIsBetter = true, style, className }: StatDeltaProps) {
  const delta = current - previous
  const deltaPercent = previous !== 0 ? (delta / previous) * 100 : 0
  const isImproved = higherIsBetter ? delta > 0 : delta < 0
  const color = delta === 0 ? 'var(--color-foreground-subtle)' : isImproved ? '#34d399' : '#f87171'
  const arrow = delta > 0 ? '↑' : delta < 0 ? '↓' : '→'

  const fmt = (v: number) => {
    if (format === 'percent') return `${v.toFixed(1)}%`
    if (format === 'currency') return `$${v.toFixed(4)}`
    if (format === 'duration') return `${v.toFixed(0)}ms`
    return v.toLocaleString()
  }

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '4px', ...style }}>
      <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--color-foreground)', fontVariantNumeric: 'tabular-nums' }}>
          {fmt(current)}{unit && <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--color-foreground-subtle)', marginLeft: '2px' }}>{unit}</span>}
        </span>
        <span style={{ fontSize: '0.75rem', fontWeight: 500, color, fontFamily: 'var(--font-mono)' }}>
          {arrow} {Math.abs(deltaPercent).toFixed(1)}%
        </span>
      </div>
      <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)', fontFamily: 'var(--font-mono)' }}>
        vs {fmt(previous)}{unit ? ` ${unit}` : ''} prev
      </span>
    </div>
  )
}
