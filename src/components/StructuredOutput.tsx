export type StructuredOutputProps = {
  data: Record<string, unknown>
  title?: string
  collapsible?: boolean
  className?: string
  style?: React.CSSProperties
}

function ValueDisplay({ value, depth = 0 }: { value: unknown; depth?: number }) {
  if (value === null) return <span style={{ color: 'var(--color-foreground-subtle)', fontStyle: 'italic' }}>null</span>
  if (value === undefined) return <span style={{ color: 'var(--color-foreground-subtle)', fontStyle: 'italic' }}>undefined</span>
  if (typeof value === 'boolean') return <span style={{ color: '#a78bfa' }}>{value.toString()}</span>
  if (typeof value === 'number') return <span style={{ color: '#34d399' }}>{value}</span>
  if (typeof value === 'string') {
    if (value.length > 120) {
      return <span style={{ color: 'var(--color-foreground-muted)' }}>"{value.slice(0, 120)}…"</span>
    }
    return <span style={{ color: '#fbbf24' }}>"{value}"</span>
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return <span style={{ color: 'var(--color-foreground-subtle)' }}>[]</span>
    if (depth >= 2) return <span style={{ color: 'var(--color-foreground-subtle)' }}>[{value.length} items]</span>
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '12px', borderLeft: '1px solid var(--color-border)' }}>
        {value.slice(0, 5).map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--color-foreground-subtle)', fontSize: '0.6875rem', paddingTop: '1px', flexShrink: 0 }}>{i}</span>
            <ValueDisplay value={item} depth={depth + 1} />
          </div>
        ))}
        {value.length > 5 && <span style={{ color: 'var(--color-foreground-subtle)', fontSize: '0.75rem' }}>+{value.length - 5} more</span>}
      </div>
    )
  }
  if (typeof value === 'object') {
    if (depth >= 2) return <span style={{ color: 'var(--color-foreground-subtle)' }}>{'{ … }'}</span>
    return <StructuredOutputInner data={value as Record<string, unknown>} depth={depth + 1} />
  }
  return <span style={{ color: 'var(--color-foreground-muted)' }}>{String(value)}</span>
}

function StructuredOutputInner({ data, depth = 0 }: { data: Record<string, unknown>; depth?: number }) {
  const entries = Object.entries(data)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {entries.length === 0 && (
        <span style={{ color: 'var(--color-foreground-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>{'{ }'}</span>
      )}
      {entries.map(([key, value]) => (
        <div key={key} style={{
          display: 'grid',
          gridTemplateColumns: depth === 0 ? '140px 1fr' : '110px 1fr',
          gap: '12px',
          alignItems: 'flex-start',
        }}>
          <span style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-foreground-subtle)',
            paddingTop: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {key}
          </span>
          <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', lineHeight: 1.5 }}>
            <ValueDisplay value={value} depth={depth} />
          </span>
        </div>
      ))}
    </div>
  )
}

export function StructuredOutput({ data, title, className, style }: StructuredOutputProps) {
  return (
    <div
      className={className}
      style={{
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        background: 'var(--color-background-elevated)',
        ...style,
      }}>
      {title && (
        <div style={{
          padding: '8px 12px',
          borderBottom: '1px solid var(--color-border)',
          background: 'var(--color-background)',
          fontSize: '0.75rem',
          fontWeight: 500,
          color: 'var(--color-foreground-muted)',
          fontFamily: 'var(--font-mono)',
        }}>
          {title}
        </div>
      )}
      <div style={{ padding: '12px 14px' }}>
        <StructuredOutputInner data={data} />
      </div>
    </div>
  )
}
