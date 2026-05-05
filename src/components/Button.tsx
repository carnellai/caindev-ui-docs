import { Button as BaseButton } from '@base-ui/react/button'

export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = React.ComponentProps<typeof BaseButton> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { height: '30px', padding: '0 10px', fontSize: '0.75rem', gap: '6px' },
  md: { height: '34px', padding: '0 14px', fontSize: '0.8125rem', gap: '7px' },
  lg: { height: '38px', padding: '0 18px', fontSize: '0.875rem', gap: '8px' },
}

function getVariantStyle(variant: ButtonVariant): React.CSSProperties {
  switch (variant) {
    case 'solid':
      return {
        background: 'var(--color-accent)',
        color: 'var(--color-accent-foreground)',
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',
      }
    case 'outline':
      return {
        background: 'rgba(255,255,255,0.05)',
        color: 'var(--color-foreground)',
        border: '1px solid var(--color-border-strong)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
      }
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--color-foreground-muted)',
        border: 'none',
        boxShadow: 'none',
      }
  }
}

function mergeClassName(
  base: string,
  className: ButtonProps['className'],
): ButtonProps['className'] {
  if (typeof className === 'function') {
    return (state) => [base, className(state)].filter(Boolean).join(' ')
  }

  return [base, className].filter(Boolean).join(' ')
}

export function Button({
  variant = 'solid',
  size = 'md',
  loading = false,
  disabled,
  children,
  style,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <>
      <BaseButton
        aria-busy={loading || undefined}
        disabled={isDisabled}
        className={mergeClassName(`cd-button cd-button-${variant}`, className)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 500,
          fontFamily: 'inherit',
          letterSpacing: '-0.01em',
          borderRadius: '8px',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          userSelect: 'none',
          transition: 'background 120ms, border-color 120ms, color 120ms, opacity 120ms, box-shadow 120ms',
          outline: 'none',
          opacity: isDisabled ? 0.56 : 1,
          ...sizeStyles[size],
          ...getVariantStyle(variant),
          ...(typeof style === 'object' ? style : {}),
        }}
        {...props}
      >
        {loading && <span className="cd-button-spinner" aria-hidden="true" />}
        {children}
      </BaseButton>
      <style>{`
        .cd-button:not([data-disabled]):not(:disabled):focus-visible {
          box-shadow: 0 0 0 2px var(--color-background), 0 0 0 4px var(--color-accent);
        }
        .cd-button-solid:not([data-disabled]):not(:disabled):hover {
          background: #8b5cf6 !important;
        }
        .cd-button-outline:not([data-disabled]):not(:disabled):hover {
          background: rgba(255,255,255,0.09) !important;
          border-color: rgba(255,255,255,0.18) !important;
        }
        .cd-button-ghost:not([data-disabled]):not(:disabled):hover {
          background: rgba(255,255,255,0.06) !important;
          color: var(--color-foreground) !important;
        }
        .cd-button-spinner {
          width: 0.9em;
          height: 0.9em;
          border-radius: 999px;
          border: 1.5px solid currentColor;
          border-right-color: transparent;
          animation: cd-button-spin 700ms linear infinite;
        }
        @keyframes cd-button-spin {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cd-button-spinner {
            animation: none;
          }
        }
      `}</style>
    </>
  )
}
