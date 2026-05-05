import { Input as BaseInput } from '@base-ui/react/input'

type InputProps = React.ComponentProps<typeof BaseInput> & {
  label?: string
  hint?: string
  error?: string
}

export function Input({ label, hint, error, id, style, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: 'var(--color-foreground)',
          }}
        >
          {label}
        </label>
      )}

      <BaseInput
        id={inputId}
        style={{
          width: '100%',
          height: '36px',
          padding: '0 12px',
          borderRadius: '8px',
          border: error
            ? '1px solid var(--color-destructive)'
            : '1px solid var(--color-border-strong)',
          background: 'rgba(255,255,255,0.04)',
          color: 'var(--color-foreground)',
          fontSize: '0.875rem',
          fontFamily: 'inherit',
          outline: 'none',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
          transition: 'border-color 150ms',
          boxSizing: 'border-box',
          ...(typeof style === 'object' ? style : {}),
        }}
        className="focus:border-accent focus:ring-0 placeholder:text-foreground-subtle"
        {...props}
      />

      {hint && !error && (
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--color-foreground-subtle)',
          }}
        >
          {hint}
        </span>
      )}

      {error && (
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--color-destructive)',
          }}
        >
          {error}
        </span>
      )}
    </div>
  )
}
