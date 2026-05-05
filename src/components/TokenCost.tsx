export type TokenCostLayout = 'row' | 'stack'

export type TokenCostProps = {
  inputTokens?: number
  outputTokens?: number
  totalTokens?: number
  cost?: number
  model?: string
  layout?: TokenCostLayout
  style?: React.CSSProperties
  className?: string
}

export function TokenCost({ inputTokens, outputTokens, totalTokens, cost, model, layout = 'row', style, className }: TokenCostProps) {
  const total = totalTokens ?? (inputTokens !== undefined && outputTokens !== undefined ? inputTokens + outputTokens : undefined)
  const isRow = layout === 'row'

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: isRow ? 'row' : 'column',
        alignItems: isRow ? 'center' : 'flex-start',
        gap: isRow ? '12px' : '4px',
        flexWrap: 'wrap',
        ...style,
      }}>
      {model && (
        <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>{model}</span>
      )}
      {inputTokens !== undefined && (
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)' }}>in</span>
          <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-muted)', fontVariantNumeric: 'tabular-nums' }}>
            {inputTokens.toLocaleString()}
          </span>
        </span>
      )}
      {outputTokens !== undefined && (
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)' }}>out</span>
          <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-muted)', fontVariantNumeric: 'tabular-nums' }}>
            {outputTokens.toLocaleString()}
          </span>
        </span>
      )}
      {total !== undefined && !inputTokens && !outputTokens && (
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)' }}>tokens</span>
          <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-muted)', fontVariantNumeric: 'tabular-nums' }}>
            {total.toLocaleString()}
          </span>
        </span>
      )}
      {cost !== undefined && (
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)' }}>cost</span>
          <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground)', fontVariantNumeric: 'tabular-nums' }}>
            ${cost < 0.01 ? cost.toFixed(6) : cost.toFixed(4)}
          </span>
        </span>
      )}
    </div>
  )
}
