export type BadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'outline'
export type BadgeSize = 'sm' | 'md'

export type BadgeProps = {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  style?: React.CSSProperties
  className?: string
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    background: 'var(--color-background-subtle)',
    color: 'var(--color-foreground-muted)',
    border: '1px solid var(--color-border)',
  },
  success: {
    background: 'rgba(52,211,153,0.1)',
    color: '#34d399',
    border: '1px solid rgba(52,211,153,0.2)',
  },
  warning: {
    background: 'rgba(251,191,36,0.1)',
    color: '#fbbf24',
    border: '1px solid rgba(251,191,36,0.2)',
  },
  error: {
    background: 'rgba(248,113,113,0.1)',
    color: '#f87171',
    border: '1px solid rgba(248,113,113,0.2)',
  },
  info: {
    background: 'rgba(167,139,250,0.1)',
    color: '#a78bfa',
    border: '1px solid rgba(167,139,250,0.2)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-foreground-muted)',
    border: '1px solid var(--color-border-strong)',
  },
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  style,
  className,
}: BadgeProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        gap: '4px',
        alignItems: 'center',
        borderRadius: '4px',
        fontSize: size === 'sm' ? '0.625rem' : '0.6875rem',
        fontWeight: 500,
        letterSpacing: '0.02em',
        padding: size === 'sm' ? '1px 6px' : '2px 8px',
        whiteSpace: 'nowrap',
        ...variantStyles[variant],
        ...style,
      }}>
      {children}
    </span>
  )
}
