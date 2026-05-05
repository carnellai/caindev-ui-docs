export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export type CardProps = {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  padding?: CardPadding
  style?: React.CSSProperties
  className?: string
}

const paddingMap = { none: '0', sm: '12px', md: '20px', lg: '28px' }

export function Card({
  children,
  header,
  footer,
  padding = 'md',
  style,
  className,
}: CardProps) {
  const p = paddingMap[padding]
  return (
    <div
      className={className}
      style={{
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        background: 'var(--color-background-elevated)',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        ...style,
      }}>
      {header && (
        <div
          style={{
            padding: `12px ${p === '0' ? '0' : p}`,
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {header}
        </div>
      )}
      <div style={{ padding: p }}>{children}</div>
      {footer && (
        <div
          style={{
            padding: `12px ${p === '0' ? '0' : p}`,
            borderTop: '1px solid var(--color-border)',
            background: 'var(--color-background)',
          }}>
          {footer}
        </div>
      )}
    </div>
  )
}
