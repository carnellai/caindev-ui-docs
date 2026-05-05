import { useId } from 'react'
import { Input as BaseInput } from '@base-ui/react/input'

export type InputProps = React.ComponentProps<typeof BaseInput> & {
  label?: string
  hint?: string
  error?: string
}

function mergeIds(...ids: Array<string | undefined>) {
  return ids.filter(Boolean).join(' ') || undefined
}

function mergeClassName(
  base: string,
  className: InputProps['className'],
): InputProps['className'] {
  if (typeof className === 'function') {
    return (state) => [base, className(state)].filter(Boolean).join(' ')
  }

  return [base, className].filter(Boolean).join(' ')
}

export function Input({
  label,
  hint,
  error,
  id,
  style,
  className,
  disabled,
  placeholder,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const hintId = hint && !error ? `${inputId}-hint` : undefined
  const errorId = error ? `${inputId}-error` : undefined
  const accessibleLabel = ariaLabel ?? (!label && !ariaLabelledBy ? placeholder : undefined)

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
        disabled={disabled}
        placeholder={placeholder}
        aria-describedby={mergeIds(ariaDescribedBy, hintId, errorId)}
        aria-invalid={error ? true : ariaInvalid}
        aria-label={accessibleLabel}
        aria-labelledby={ariaLabelledBy}
        style={{
          width: '100%',
          height: '36px',
          padding: '0 12px',
          borderRadius: '8px',
          border: error
            ? '1px solid var(--color-destructive)'
            : '1px solid var(--color-border-strong)',
          background: disabled ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.04)',
          color: disabled ? 'var(--color-foreground-subtle)' : 'var(--color-foreground)',
          fontSize: '0.875rem',
          fontFamily: 'inherit',
          outline: 'none',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
          transition: 'border-color 150ms',
          boxSizing: 'border-box',
          cursor: disabled ? 'not-allowed' : undefined,
          opacity: disabled ? 0.65 : 1,
          ...(typeof style === 'object' ? style : {}),
        }}
        className={mergeClassName(
          'focus:border-accent focus:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent placeholder:text-foreground-subtle disabled:cursor-not-allowed',
          className,
        )}
        {...props}
      />

      {hint && !error && (
        <span
          id={hintId}
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
          id={errorId}
          role="alert"
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
