import { useId, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export type SpanKind = 'llm' | 'tool' | 'retrieval' | 'agent' | 'span' | 'embedding' | 'guardrail'
export type SpanStatus = 'running' | 'success' | 'error' | 'pending'

export type SpanNode = {
  id: string
  name: string
  kind: SpanKind
  status: SpanStatus
  duration?: number        // ms
  startOffset?: number     // ms from trace start, for timeline
  // LLM-specific
  model?: string
  inputTokens?: number
  outputTokens?: number
  cost?: number            // USD
  // Retrieval-specific
  query?: string
  resultCount?: number
  // Generic I/O
  input?: unknown
  output?: unknown
  // Nesting
  children?: SpanNode[]
}

// ─── Kind config ─────────────────────────────────────────────────────────────

const kindConfig: Record<SpanKind, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  llm: {
    label: 'LLM',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.12)',
    icon: (
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 4h12M2 8h8M2 12h6"/>
      </svg>
    ),
  },
  tool: {
    label: 'TOOL',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.12)',
    icon: (
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2.5a3 3 0 0 0-4 4L4 13a1 1 0 0 0 0 1.4l.6.6a1 1 0 0 0 1.4 0l6.5-6.5a3 3 0 0 0 4-4l-2 2-1.5-.5-.5-1.5 2-2z"/>
      </svg>
    ),
  },
  retrieval: {
    label: 'RETRIEVAL',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.12)',
    icon: (
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="7" r="5"/>
        <path d="M11 11l3 3"/>
      </svg>
    ),
  },
  agent: {
    label: 'AGENT',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.12)',
    icon: (
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="6" r="3"/>
        <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
      </svg>
    ),
  },
  span: {
    label: 'SPAN',
    color: '#94a3b8',
    bg: 'rgba(148,163,184,0.1)',
    icon: (
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="2" width="12" height="12" rx="2"/>
      </svg>
    ),
  },
  embedding: {
    label: 'EMBED',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.12)',
    icon: (
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 8h12M8 2v12"/>
      </svg>
    ),
  },
  guardrail: {
    label: 'GUARD',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.12)',
    icon: (
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2L2 4.5v4c0 3 2.5 5.5 6 6 3.5-.5 6-3 6-6v-4L8 2z"/>
      </svg>
    ),
  },
}

const statusDot: Record<SpanStatus, string> = {
  running: '#a78bfa',
  success: '#34d399',
  error:   '#f87171',
  pending: '#52525b',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function JsonBlock({ value }: { value: unknown }) {
  const json = safeJsonStringify(value)

  return (
    <pre style={{
      margin: 0,
      padding: '8px 10px',
      borderRadius: '5px',
      background: 'var(--color-background)',
      border: '1px solid var(--color-border)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6875rem',
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

function MetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)', minWidth: '80px' }}>
        {label}
      </span>
      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-muted)' }}>
        {value}
      </span>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: '0.5625rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--color-foreground-subtle)',
      display: 'block',
      marginBottom: '5px',
    }}>
      {children}
    </span>
  )
}

// ─── SpanCard ─────────────────────────────────────────────────────────────────

export type SpanCardProps = {
  span: SpanNode
  defaultOpen?: boolean
  depth?: number
  className?: string
  style?: React.CSSProperties
}

export function SpanCard({ span, defaultOpen = false, className, style }: SpanCardProps) {
  const [open, setOpen] = useState(defaultOpen)
  const detailId = useId()
  const cfg = kindConfig[span.kind]
  const hasDetails = span.input !== undefined || span.output !== undefined || span.model || span.query

  return (
    <div
      className={className}
      style={{
        borderRadius: '7px',
        border: '1px solid var(--color-border)',
        background: 'var(--color-background-elevated)',
        overflow: 'hidden',
        ...style,
      }}>
      {/* Header row */}
      <button
        type="button"
        aria-label={hasDetails ? `${open ? 'Collapse' : 'Expand'} ${span.name} details` : `${span.name} span`}
        aria-expanded={hasDetails ? open : undefined}
        aria-controls={hasDetails ? detailId : undefined}
        disabled={!hasDetails}
        onClick={() => hasDetails && setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '9px 10px',
          background: 'none',
          border: 'none',
          cursor: hasDetails ? 'pointer' : 'default',
          fontFamily: 'inherit',
          textAlign: 'left',
        }}
      >
        {/* Expand chevron */}
        {hasDetails && (
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 150ms', color: 'var(--color-foreground-subtle)' }}>
            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {!hasDetails && <span style={{ width: '10px', flexShrink: 0 }} />}

        {/* Status dot */}
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: statusDot[span.status], flexShrink: 0 }} />

        {/* Kind badge */}
        <span style={{
          fontSize: '0.5625rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          padding: '1px 5px',
          borderRadius: '3px',
          color: cfg.color,
          background: cfg.bg,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '3px',
        }}>
          <span style={{ color: cfg.color }}>{cfg.icon}</span>
          {cfg.label}
        </span>

        {/* Name */}
        <span style={{
          fontSize: '0.8125rem',
          fontWeight: 500,
          color: 'var(--color-foreground)',
          fontFamily: 'var(--font-mono)',
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {span.name}
        </span>

        {/* Right meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {span.model && (
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)' }}>
              {span.model}
            </span>
          )}
          {(span.inputTokens || span.outputTokens) && (
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-subtle)' }}>
              {(span.inputTokens ?? 0) + (span.outputTokens ?? 0)} tok
            </span>
          )}
          {span.cost !== undefined && (
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-subtle)' }}>
              ${span.cost.toFixed(4)}
            </span>
          )}
          {span.duration !== undefined && (
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-subtle)', fontVariantNumeric: 'tabular-nums' }}>
              {span.duration}ms
            </span>
          )}
        </div>
      </button>

      {/* Expanded detail */}
      {open && (
        <div
          id={detailId}
          style={{
            borderTop: '1px solid var(--color-border)',
            padding: '10px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
          {/* Kind-specific meta */}
          {(span.model || span.inputTokens || span.outputTokens || span.cost) && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <SectionLabel>Model</SectionLabel>
              {span.model && <MetaRow label="model" value={span.model} />}
              {span.inputTokens && <MetaRow label="input tokens" value={span.inputTokens.toLocaleString()} />}
              {span.outputTokens && <MetaRow label="output tokens" value={span.outputTokens.toLocaleString()} />}
              {span.cost !== undefined && <MetaRow label="cost" value={`$${span.cost.toFixed(6)}`} />}
            </div>
          )}

          {span.query && (
            <div>
              <SectionLabel>Query</SectionLabel>
              <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-foreground-muted)', fontStyle: 'italic' }}>
                "{span.query}"
              </p>
              {span.resultCount !== undefined && (
                <p style={{ margin: '4px 0 0', fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>
                  {span.resultCount} results returned
                </p>
              )}
            </div>
          )}

          {span.input !== undefined && (
            <div>
              <SectionLabel>Input</SectionLabel>
              <JsonBlock value={span.input} />
            </div>
          )}

          {span.output !== undefined && (
            <div>
              <SectionLabel>Output</SectionLabel>
              <JsonBlock value={span.output} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── TraceTree ────────────────────────────────────────────────────────────────

export type TraceTreeProps = {
  spans: SpanNode[]
  traceName?: string
  traceId?: string
  totalDuration?: number
  defaultOpen?: boolean
  className?: string
  style?: React.CSSProperties
}

function SpanTreeNode({ span, depth, defaultOpen }: { span: SpanNode; depth: number; defaultOpen: boolean }) {
  return (
    <div>
      <div style={{ paddingLeft: `${depth * 20}px` }}>
        <SpanCard span={span} defaultOpen={defaultOpen && depth === 0} depth={depth} />
      </div>
      {span.children && span.children.length > 0 && (
        <div style={{
          marginLeft: `${depth * 20 + 10}px`,
          marginTop: '4px',
          paddingLeft: '10px',
          borderLeft: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {span.children.map(child => (
            <SpanTreeNode key={child.id} span={child} depth={depth + 1} defaultOpen={defaultOpen} />
          ))}
        </div>
      )}
    </div>
  )
}

export function TraceTree({
  spans,
  traceName,
  traceId,
  totalDuration,
  defaultOpen = false,
  className,
  style,
}: TraceTreeProps) {
  return (
    <div
      className={className}
      style={{
        borderRadius: '10px',
        border: '1px solid var(--color-border-strong)',
        overflow: 'hidden',
        background: 'var(--color-background)',
        ...style,
      }}>
      {/* Trace header */}
      {(traceName || traceId || totalDuration) && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          borderBottom: '1px solid var(--color-border)',
          background: 'var(--color-background-elevated)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-foreground)' }}>
              {traceName ?? 'Trace'}
            </span>
            {traceId && (
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-subtle)' }}>
                {traceId}
              </span>
            )}
          </div>
          {totalDuration && (
            <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-subtle)' }}>
              {totalDuration}ms total
            </span>
          )}
        </div>
      )}

      {/* Spans */}
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {spans.map(span => (
          <SpanTreeNode key={span.id} span={span} depth={0} defaultOpen={defaultOpen} />
        ))}
      </div>
    </div>
  )
}
