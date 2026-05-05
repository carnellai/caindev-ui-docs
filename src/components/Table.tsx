type Column<T> = {
  key: string
  header: string
  width?: string
  align?: 'left' | 'center' | 'right'
  render?: (row: T) => React.ReactNode
}

type TableProps<T extends Record<string, unknown>> = {
  columns: Column<T>[]
  rows: T[]
  keyField?: string
  onRowClick?: (row: T) => void
  emptyMessage?: string
}

export function Table<T extends Record<string, unknown>>({
  columns,
  rows,
  keyField = 'id',
  onRowClick,
  emptyMessage = 'No data',
}: TableProps<T>) {
  return (
    <div style={{ width: '100%', overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-background)' }}>
            {columns.map(col => (
              <th
                key={col.key}
                style={{
                  padding: '10px 14px',
                  textAlign: col.align ?? 'left',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--color-foreground-subtle)',
                  whiteSpace: 'nowrap',
                  width: col.width,
                }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                style={{ padding: '32px', textAlign: 'center', color: 'var(--color-foreground-subtle)', fontSize: '0.875rem' }}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr
                key={String(row[keyField] ?? i)}
                onClick={() => onRowClick?.(row)}
                style={{
                  borderBottom: i < rows.length - 1 ? '1px solid var(--color-border)' : 'none',
                  background: 'var(--color-background-elevated)',
                  cursor: onRowClick ? 'pointer' : 'default',
                  transition: 'background 100ms',
                }}
                onMouseEnter={e => { if (onRowClick) (e.currentTarget as HTMLElement).style.background = 'var(--color-background-subtle)' }}
                onMouseLeave={e => { if (onRowClick) (e.currentTarget as HTMLElement).style.background = 'var(--color-background-elevated)' }}
              >
                {columns.map(col => (
                  <td
                    key={col.key}
                    style={{
                      padding: '11px 14px',
                      textAlign: col.align ?? 'left',
                      color: 'var(--color-foreground-muted)',
                      verticalAlign: 'middle',
                    }}
                  >
                    {col.render ? col.render(row) : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
