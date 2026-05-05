export type MetricTrend = 'up' | 'down' | 'neutral'

export type MetricCardProps = {
  label: string
  value: string | number
  unit?: string
  trend?: MetricTrend
  trendValue?: string
  trendPositive?: boolean
  sublabel?: string
  style?: React.CSSProperties
  className?: string
}

export function MetricCard({ label, value, unit, trend, trendValue, trendPositive = true, sublabel, style, className }: MetricCardProps) {
  const isGood = trend === 'neutral' ? null : trendPositive ? trend === 'up' : trend === 'down'
  const trendColor = isGood === null ? 'var(--color-foreground-subtle)' : isGood ? '#34d399' : '#f87171'

  return (
    <div
      className={className}
      style={{
        padding: '14px 16px',
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        background: 'var(--color-background-elevated)',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        ...style,
      }}>
      <span style={{ fontSize: '0.6875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-foreground-subtle)' }}>
        {label}
      </span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--color-foreground)', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
          {typeof value === 'number' ? value.toLocaleString() : value}
        </span>
        {unit && <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>{unit}</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {trend && trendValue && (
          <span style={{ fontSize: '0.6875rem', fontWeight: 500, color: trendColor }}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </span>
        )}
        {sublabel && (
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)' }}>{sublabel}</span>
        )}
      </div>
    </div>
  )
}
