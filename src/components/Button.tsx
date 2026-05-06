import { Button as BaseButton } from '@base-ui/react/button'

export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = React.ComponentProps<typeof BaseButton> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-[30px] gap-1.5 px-2.5 text-xs',
  md: 'h-[34px] gap-[7px] px-3.5 text-[0.8125rem]',
  lg: 'h-[38px] gap-2 px-[18px] text-sm',
}

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'border border-black/20 bg-accent text-accent-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]',
  outline: 'border border-border-strong bg-white/5 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]',
  ghost: 'border-0 bg-transparent text-foreground-muted shadow-none',
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
        className={mergeClassName(
          [
            'cd-button inline-flex select-none items-center justify-center rounded-[8px] font-medium tracking-[-0.01em] outline-none transition-[background,border-color,color,opacity,box-shadow] duration-[120ms]',
            `cd-button-${variant}`,
            variantClasses[variant],
            sizeClasses[size],
            isDisabled ? 'cursor-not-allowed opacity-[0.56]' : 'cursor-pointer',
          ].join(' '),
          className,
        )}
        style={typeof style === 'object' ? style : undefined}
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
