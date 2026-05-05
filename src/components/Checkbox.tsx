import { useId } from 'react'
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox'

export type CheckboxProps = React.ComponentProps<typeof BaseCheckbox.Root> & {
  label?: string
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M2 5h6" />
    </svg>
  )
}

function mergeClassName(
  base: string,
  className: CheckboxProps['className'],
): CheckboxProps['className'] {
  if (typeof className === 'function') {
    return (state) => [base, className(state)].filter(Boolean).join(' ')
  }

  return [base, className].filter(Boolean).join(' ')
}

export function Checkbox({
  label,
  id,
  disabled,
  indeterminate,
  style,
  className,
  ...props
}: CheckboxProps) {
  const generatedId = useId()
  const checkboxId = id ?? generatedId

  return (
    <label
      htmlFor={checkboxId}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <BaseCheckbox.Root
        id={checkboxId}
        disabled={disabled}
        indeterminate={indeterminate}
        style={{
          width: '18px',
          height: '18px',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          outline: 'none',
          cursor: 'inherit',
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(255,255,255,0.05)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          transition: 'background 120ms, border-color 120ms',
          ...(typeof style === 'object' ? style : {}),
        }}
        className={mergeClassName(
          'data-[checked]:bg-accent data-[checked]:border-accent data-[indeterminate]:bg-accent data-[indeterminate]:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent data-[disabled]:cursor-not-allowed',
          className,
        )}
        {...props}
      >
        <BaseCheckbox.Indicator
          className="data-[unchecked]:hidden"
          style={{
            display: 'flex',
            color: '#fff',
          }}
        >
          {indeterminate ? <MinusIcon /> : <CheckIcon />}
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>

      {label && (
        <span
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-foreground-muted)',
            lineHeight: 1,
          }}
        >
          {label}
        </span>
      )}
    </label>
  )
}
