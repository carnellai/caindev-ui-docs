import { useId } from 'react'
import { Switch as BaseSwitch } from '@base-ui/react/switch'

export type SwitchProps = React.ComponentProps<typeof BaseSwitch.Root> & {
  label?: string
}

function mergeClassName(
  base: string,
  className: SwitchProps['className'],
): SwitchProps['className'] {
  if (typeof className === 'function') {
    return (state) => [base, className(state)].filter(Boolean).join(' ')
  }

  return [base, className].filter(Boolean).join(' ')
}

export function Switch({ label, id, disabled, style, className, ...props }: SwitchProps) {
  const generatedId = useId()
  const switchId = id ?? generatedId

  return (
    <label
      htmlFor={switchId}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <BaseSwitch.Root
        id={switchId}
        disabled={disabled}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          width: '36px',
          height: '20px',
          borderRadius: '999px',
          padding: '2px',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'var(--color-background-subtle)',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)',
          cursor: 'inherit',
          transition: 'background 150ms, border-color 150ms',
          outline: 'none',
          flexShrink: 0,
          ...(typeof style === 'object' ? style : {}),
        }}
        className={mergeClassName(
          'data-[checked]:bg-accent data-[checked]:border-accent/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent data-[disabled]:cursor-not-allowed',
          className,
        )}
        {...props}
      >
        <BaseSwitch.Thumb
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '999px',
            background: '#fff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
            transition: 'translate 150ms cubic-bezier(0.26, 0.75, 0.38, 0.45)',
          }}
          className="data-[checked]:translate-x-4"
        />
      </BaseSwitch.Root>

      {label && (
        <span
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-foreground-muted)',
          }}
        >
          {label}
        </span>
      )}
    </label>
  )
}
