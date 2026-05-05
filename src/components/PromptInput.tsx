import { useRef, useState, useEffect } from 'react'

type PromptInputProps = {
  value?: string
  onValueChange?: (value: string) => void
  onSubmit?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  onStop?: () => void
  maxRows?: number
  actions?: React.ReactNode
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8H2M14 8l-5 5M14 8l-5-5"/>
    </svg>
  )
}

function StopIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <rect x="1" y="1" width="10" height="10" rx="2"/>
    </svg>
  )
}

export function PromptInput({
  value: controlledValue,
  onValueChange,
  onSubmit,
  placeholder = 'Message…',
  disabled = false,
  loading = false,
  onStop,
  maxRows = 8,
  actions,
}: PromptInputProps) {
  const [internalValue, setInternalValue] = useState('')
  const value = controlledValue ?? internalValue
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    const lineHeight = 24
    const maxHeight = lineHeight * maxRows
    el.style.height = Math.min(el.scrollHeight, maxHeight) + 'px'
    el.style.overflowY = el.scrollHeight > maxHeight ? 'auto' : 'hidden'
  }, [value, maxRows])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value
    if (controlledValue === undefined) setInternalValue(v)
    onValueChange?.(v)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (value.trim() && !disabled && !loading) {
        onSubmit?.(value.trim())
        if (controlledValue === undefined) setInternalValue('')
      }
    }
  }

  const handleSubmit = () => {
    if (value.trim() && !disabled && !loading) {
      onSubmit?.(value.trim())
      if (controlledValue === undefined) setInternalValue('')
    }
  }

  const canSubmit = value.trim().length > 0 && !disabled

  return (
    <div style={{
      borderRadius: '10px',
      border: '1px solid var(--color-border-strong)',
      background: 'var(--color-background-elevated)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      transition: 'border-color 150ms',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled || loading}
        rows={1}
        style={{
          width: '100%',
          resize: 'none',
          border: 'none',
          outline: 'none',
          background: 'transparent',
          padding: '12px 14px 4px',
          fontFamily: 'inherit',
          fontSize: '0.9375rem',
          lineHeight: '24px',
          color: 'var(--color-foreground)',
          boxSizing: 'border-box',
          overflowY: 'hidden',
        }}
      />

      {/* Footer */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 10px 10px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {actions}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            fontSize: '0.6875rem',
            color: 'var(--color-foreground-subtle)',
          }}>
            {loading ? '' : 'Enter to send · Shift+Enter for newline'}
          </span>

          {loading ? (
            <button
              onClick={onStop}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '7px',
                border: 'none',
                background: 'var(--color-foreground)',
                color: 'var(--color-background)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <StopIcon />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '7px',
                border: 'none',
                background: canSubmit ? 'var(--color-accent)' : 'var(--color-background-subtle)',
                color: canSubmit ? 'white' : 'var(--color-foreground-subtle)',
                cursor: canSubmit ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 150ms, color 150ms',
              }}
            >
              <SendIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
