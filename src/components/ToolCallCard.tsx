import { useId, useState } from 'react'

export type ToolStatus = 'pending' | 'running' | 'success' | 'error'

export type ToolCallCardProps = {
  name: string
  status: ToolStatus
  input?: Record<string, unknown>
  output?: unknown
  duration?: number
  defaultOpen?: boolean
  className?: string
  style?: React.CSSProperties
}

const statusConfig: Record<ToolStatus, { label: string; color: string; bg: string }> = {
  pending:  { label: 'Pending', color: 'var(--color-foreground-subtle)', bg: 'var(--color-background-subtle)' },
  running:  { label: 'Running', color: '#a78bfa', bg: 'rgba(124,58,237,0.12)' },
  success:  { label: 'Done',    color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  error:    { label: 'Error',   color: '#f87171', bg: 'rgba(248,113,113,0.1)' },
}

function WrenchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2.5a3 3 0 0 0-4 4L4 13a1 1 0 0 0 0 1.4l.6.6a1 1 0 0 0 1.4 0l6.5-6.5a3 3 0 0 0 4-4l-2 2-1.5-.5-.5-1.5 2-2z"/>
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className="tool-call-chevron" width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 150ms' }}>
      <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function RunningDots() {
  return (
    <span style={{ display: 'inline-flex', gap: '2px' }}>
      {[0,1,2].map(i => (
        <span key={i} className="tool-call-dot" style={{
          width: '3px', height: '3px', borderRadius: '50%',
          background: '#a78bfa',
          animation: `tc-dot 1s ease-in-out ${i * 0.15}s infinite`,
          display: 'inline-block',
        }} />
      ))}
      <style>{`
        @keyframes tc-dot { 0%,80%,100%{opacity:.3;transform:scaleY(.7)}40%{opacity:1;transform:scaleY(1)} }
        @media (prefers-reduced-motion: reduce) {
          .tool-call-dot {
            animation: none !important;
          }
          .tool-call-chevron {
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </span>
  )
}

function JsonDisplay({ value }: { value: unknown }) {
  const json = safeJsonStringify(value)

  return (
    <pre style={{
      margin: 0,
      padding: '10px 12px',
      borderRadius: '6px',
      background: 'var(--color-background)',
      border: '1px solid var(--color-border)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      lineHeight: 1.55,
      color: 'var(--color-foreground-muted)',
      overflowX: 'auto',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
    }}>
      {json}
    </pre>
  )
}

function safeJsonStringify(value: unknown) {
  const seen = new WeakSet<object>()

  try {
    const json = JSON.stringify(value, (_key, nestedValue) => {
      if (typeof nestedValue === 'bigint') return `${nestedValue.toString()}n`
      if (typeof nestedValue === 'function') return '[Function]'
      if (typeof nestedValue === 'symbol') return nestedValue.toString()
      if (typeof nestedValue === 'object' && nestedValue !== null) {
        if (seen.has(nestedValue)) return '[Circular]'
        seen.add(nestedValue)
      }
      return nestedValue
    }, 2)

    return json ?? String(value)
  } catch {
    return String(value)
  }
}

export function ToolCallCard({
  name,
  status,
  input,
  output,
  duration,
  defaultOpen = false,
  className,
  style,
}: ToolCallCardProps) {
  const [open, setOpen] = useState(defaultOpen)
  const contentId = useId()
  const cfg = statusConfig[status]
  const hasContent = input !== undefined || output !== undefined

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
      {/* Header */}
      <button
        type="button"
        aria-expanded={hasContent ? open : undefined}
        aria-controls={hasContent ? contentId : undefined}
        disabled={!hasContent}
        onClick={() => hasContent && setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 12px',
          background: 'none',
          border: 'none',
          cursor: hasContent ? 'pointer' : 'default',
          fontFamily: 'inherit',
          textAlign: 'left',
        }}
      >
        {hasContent && <ChevronIcon open={open} />}
        <span style={{ color: 'var(--color-foreground-muted)', display: 'flex' }}>
          <WrenchIcon />
        </span>
        <span style={{
          fontSize: '0.8125rem',
          fontWeight: 500,
          color: 'var(--color-foreground)',
          fontFamily: 'var(--font-mono)',
        }}>
          {name}
        </span>

        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
          {status === 'running' && <RunningDots />}
          <span style={{
            fontSize: '0.6875rem',
            fontWeight: 500,
            padding: '2px 7px',
            borderRadius: '4px',
            color: cfg.color,
            background: cfg.bg,
          }}>
            {cfg.label}
          </span>
          {duration !== undefined && (
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)', fontVariantNumeric: 'tabular-nums' }}>
              {duration}ms
            </span>
          )}
        </span>
      </button>

      {/* Body */}
      {open && (
        <div
          id={contentId}
          style={{
            borderTop: '1px solid var(--color-border)',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
          {input !== undefined && (
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-foreground-subtle)', display: 'block', marginBottom: '6px' }}>
                Input
              </span>
              <JsonDisplay value={input} />
            </div>
          )}
          {output !== undefined && (
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-foreground-subtle)', display: 'block', marginBottom: '6px' }}>
                Output
              </span>
              <JsonDisplay value={output} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
