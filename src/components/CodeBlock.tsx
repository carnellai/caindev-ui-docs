import { useState } from 'react'

export type CodeBlockProps = {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  style?: React.CSSProperties
  className?: string
}

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="9" height="9" rx="1.5"/>
      <path d="M3 10V3a1 1 0 0 1 1-1h7"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8l3.5 3.5L13 4"/>
    </svg>
  )
}

export function CodeBlock({
  code,
  language,
  filename,
  showLineNumbers = false,
  style,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!navigator.clipboard) return

    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const lines = code.split('\n')

  return (
    <div
      className={className}
      style={{
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        background: 'var(--color-background)',
        ...style,
      }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-background-elevated)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {filename && (
            <span style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-foreground-muted)',
            }}>
              {filename}
            </span>
          )}
          {language && (
            <span style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              color: 'var(--color-foreground-subtle)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              {language}
            </span>
          )}
        </div>

        <button
          type="button"
          aria-label={copied ? 'Code copied' : 'Copy code'}
          onClick={handleCopy}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '3px 8px',
            borderRadius: '5px',
            border: '1px solid var(--color-border)',
            background: 'transparent',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '0.6875rem',
            color: copied ? '#34d399' : 'var(--color-foreground-muted)',
            transition: 'color 150ms',
          }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {/* Code */}
      <div style={{ overflowX: 'auto' }}>
        <pre style={{
          margin: 0,
          padding: '14px 16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          lineHeight: 1.65,
          color: 'var(--color-foreground-muted)',
        }}>
          {showLineNumbers ? (
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <tbody>
                {lines.map((line, i) => (
                  <tr key={i}>
                    <td style={{
                      userSelect: 'none',
                      paddingRight: '16px',
                      color: 'var(--color-foreground-subtle)',
                      fontSize: '0.75rem',
                      textAlign: 'right',
                      minWidth: '2ch',
                    }}>
                      {i + 1}
                    </td>
                    <td style={{ width: '100%' }}>
                      <code>{line}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <code>{code}</code>
          )}
        </pre>
      </div>
    </div>
  )
}
