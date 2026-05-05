export type ApprovalRisk = 'low' | 'medium' | 'high'

export type ApprovalCardProps = {
  title: string
  description?: string
  action: string
  reasoning?: string
  risk?: ApprovalRisk
  onApprove: () => void
  onReject: () => void
  loading?: boolean
  className?: string
  style?: React.CSSProperties
}

const riskConfig = {
  low:    { label: 'Low risk',    color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  medium: { label: 'Medium risk', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)' },
  high:   { label: 'High risk',   color: '#f87171', bg: 'rgba(248,113,113,0.1)' },
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2L2 4.5v4c0 3 2.5 5.5 6 6 3.5-.5 6-3 6-6v-4L8 2z"/>
    </svg>
  )
}

export function ApprovalCard({
  title,
  description,
  action,
  reasoning,
  risk = 'medium',
  onApprove,
  onReject,
  loading = false,
  className,
  style,
}: ApprovalCardProps) {
  const rc = riskConfig[risk]

  return (
    <div
      className={className}
      style={{
        borderRadius: '10px',
        border: '1px solid var(--color-border-strong)',
        background: 'var(--color-background-elevated)',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        ...style,
      }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-background)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: rc.color, display: 'flex' }}><ShieldIcon /></span>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-foreground)' }}>
            {title}
          </span>
        </div>
        <span style={{
          fontSize: '0.6875rem',
          fontWeight: 500,
          padding: '2px 8px',
          borderRadius: '4px',
          color: rc.color,
          background: rc.bg,
        }}>
          {rc.label}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {description && (
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-foreground-muted)', lineHeight: 1.55 }}>
            {description}
          </p>
        )}

        {/* Proposed action */}
        <div style={{
          padding: '10px 12px',
          borderRadius: '7px',
          background: 'var(--color-background)',
          border: '1px solid var(--color-border)',
        }}>
          <span style={{
            fontSize: '0.6875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-foreground-subtle)',
            display: 'block',
            marginBottom: '6px',
          }}>
            Proposed action
          </span>
          <code style={{
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-foreground)',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {action}
          </code>
        </div>

        {/* Reasoning */}
        {reasoning && (
          <div style={{
            padding: '10px 12px',
            borderRadius: '7px',
            background: 'var(--color-background-subtle)',
            borderLeft: '2px solid var(--color-border-strong)',
          }}>
            <span style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-foreground-subtle)',
              display: 'block',
              marginBottom: '4px',
            }}>
              Agent reasoning
            </span>
            <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-foreground-muted)', lineHeight: 1.55, fontStyle: 'italic' }}>
              {reasoning}
            </p>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
          <button
            type="button"
            onClick={onApprove}
            disabled={loading}
            style={{
              flex: 1,
              padding: '8px 16px',
              borderRadius: '7px',
              border: 'none',
              background: '#34d399',
              color: '#052e16',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
              opacity: loading ? 0.6 : 1,
              transition: 'opacity 150ms',
            }}
          >
            {loading ? 'Processing…' : 'Approve'}
          </button>
          <button
            type="button"
            onClick={onReject}
            disabled={loading}
            style={{
              flex: 1,
              padding: '8px 16px',
              borderRadius: '7px',
              border: '1px solid var(--color-border-strong)',
              background: 'transparent',
              color: 'var(--color-foreground-muted)',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
              opacity: loading ? 0.6 : 1,
            }}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}
