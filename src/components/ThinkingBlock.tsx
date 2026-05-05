import { useState } from 'react'
import { StreamingText } from './StreamingText'

type ThinkingBlockProps = {
  content: string
  streaming?: boolean
  defaultOpen?: boolean
  label?: string
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      style={{
        transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'transform 150ms ease',
        flexShrink: 0,
      }}
    >
      <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PulsingDot() {
  return (
    <span style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'var(--color-foreground-subtle)',
            animation: `thinking-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes thinking-dot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </span>
  )
}

export function ThinkingBlock({
  content,
  streaming = false,
  defaultOpen = false,
  label = 'Thinking',
}: ThinkingBlockProps) {
  const [open, setOpen] = useState(defaultOpen || streaming)

  return (
    <div style={{
      borderRadius: '8px',
      border: '1px solid var(--color-border)',
      overflow: 'hidden',
      background: 'var(--color-background-subtle)',
    }}>
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 12px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          color: 'var(--color-foreground-muted)',
          fontSize: '0.8125rem',
          fontWeight: 500,
          textAlign: 'left',
        }}
      >
        <ChevronIcon open={open} />
        <span>{label}</span>
        {streaming && <PulsingDot />}
        {!streaming && (
          <span style={{
            marginLeft: 'auto',
            fontSize: '0.6875rem',
            color: 'var(--color-foreground-subtle)',
          }}>
            {content.split(' ').length} words
          </span>
        )}
      </button>

      {/* Content */}
      {open && (
        <div style={{
          padding: '0 12px 12px',
          borderTop: '1px solid var(--color-border)',
        }}>
          <p style={{
            margin: '10px 0 0',
            fontSize: '0.8125rem',
            lineHeight: 1.65,
            color: 'var(--color-foreground-muted)',
            fontStyle: 'italic',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {streaming ? (
              <StreamingText text={content} streaming={streaming} />
            ) : content}
          </p>
        </div>
      )}
    </div>
  )
}
