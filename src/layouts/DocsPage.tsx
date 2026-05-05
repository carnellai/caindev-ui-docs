type Prop = {
  name: string
  type: string
  default?: string
  description: string
}

type DocsPageProps = {
  title: string
  description: string
  preview: React.ReactNode
  code: string
  props?: Prop[]
}

export function DocsPage({
  title,
  description,
  preview,
  code,
  props,
}: DocsPageProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h1 style={{ margin: 0, color: 'var(--color-foreground)' }}>{title}</h1>
        <p
          style={{
            margin: 0,
            fontSize: '1rem',
            lineHeight: 1.6,
            color: 'var(--color-foreground-muted)',
            maxWidth: '540px',
          }}>
          {description}
        </p>
      </div>

      {/* Preview */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        <div
          style={{
            padding: '48px 32px',
            borderRadius: '12px 12px 0 0',
            border: '1px solid var(--color-border)',
            background: 'var(--color-background-elevated)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '160px',
          }}>
          {preview}
        </div>
        <pre
          style={{
            margin: 0,
            padding: '20px 24px',
            borderRadius: '0 0 12px 12px',
            border: '1px solid var(--color-border)',
            borderTop: 'none',
            background: 'var(--color-background)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            lineHeight: 1.65,
            color: 'var(--color-foreground-muted)',
            overflowX: 'auto',
          }}>
          <code>{code}</code>
        </pre>
      </div>

      {/* Props table */}
      {props && props.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ margin: 0, color: 'var(--color-foreground)' }}>Props</h3>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.875rem',
            }}>
            <thead>
              <tr
                style={{
                  borderBottom: '1px solid var(--color-border)',
                  textAlign: 'left',
                }}>
                {['Prop', 'Type', 'Default', 'Description'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '8px 12px',
                      fontWeight: 500,
                      color: 'var(--color-foreground-subtle)',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.map((p) => (
                <tr
                  key={p.name}
                  style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td
                    style={{
                      padding: '12px',
                      color: 'var(--color-foreground)',
                    }}>
                    <code
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8125rem',
                        color: 'var(--color-accent)',
                      }}>
                      {p.name}
                    </code>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <code
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8125rem',
                        color: 'var(--color-foreground-muted)',
                      }}>
                      {p.type}
                    </code>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <code
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8125rem',
                        color: 'var(--color-foreground-subtle)',
                      }}>
                      {p.default ?? '—'}
                    </code>
                  </td>
                  <td
                    style={{
                      padding: '12px',
                      color: 'var(--color-foreground-muted)',
                      lineHeight: 1.5,
                    }}>
                    {p.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
