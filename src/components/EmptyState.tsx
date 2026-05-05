type EmptyStateProps = {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  variant?: 'default' | 'error'
}

function DefaultIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="24" height="24" rx="4"/>
      <path d="M11 16h10M16 11v10" opacity="0.4"/>
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12"/>
      <path d="M16 10v7M16 21v1"/>
    </svg>
  )
}

export function EmptyState({ icon, title, description, action, variant = 'default' }: EmptyStateProps) {
  const isError = variant === 'error'
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      gap: '12px',
      textAlign: 'center',
    }}>
      <span style={{ color: isError ? '#f87171' : 'var(--color-foreground-subtle)', opacity: 0.6 }}>
        {icon ?? (isError ? <ErrorIcon /> : <DefaultIcon />)}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-foreground)' }}>
          {title}
        </span>
        {description && (
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-foreground-muted)', maxWidth: '320px', lineHeight: 1.55 }}>
            {description}
          </p>
        )}
      </div>
      {action && <div style={{ marginTop: '4px' }}>{action}</div>}
    </div>
  )
}
