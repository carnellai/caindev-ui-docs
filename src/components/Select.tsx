import { Select as BaseSelect } from '@base-ui/react/select'

export type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

export type SelectProps = {
  label?: string
  placeholder?: string
  options: SelectOption[]
  value?: string | null
  defaultValue?: string | null
  onValueChange?: (value: string | null) => void
  disabled?: boolean
  style?: React.CSSProperties
  className?: string
  triggerStyle?: React.CSSProperties
  triggerClassName?: string
}

function ChevronUpDownIcon() {
  return (
    <svg
      width='8'
      height='12'
      viewBox='0 0 8 12'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'>
      <path d='M0.5 4.5L4 1.5L7.5 4.5' />
      <path d='M0.5 7.5L4 10.5L7.5 7.5' />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width='10' height='10' viewBox='0 0 10 10' fill='currentColor'>
      <path d='M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z' />
    </svg>
  )
}

function mergeClassName(base: string, className?: string) {
  return [base, className].filter(Boolean).join(' ')
}

export function Select({
  label,
  placeholder = 'Select an option',
  options,
  value,
  defaultValue,
  onValueChange,
  disabled,
  style,
  className,
  triggerStyle,
  triggerClassName,
}: SelectProps) {
  const isDisabled = disabled || options.length === 0

  const handleValueChange = (nextValue: string | null) => {
    onValueChange?.(nextValue)
  }

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      <BaseSelect.Root
        items={options}
        value={value}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        disabled={isDisabled}>
        {label && (
          <BaseSelect.Label
            style={{
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: isDisabled ? 'var(--color-foreground-subtle)' : 'var(--color-foreground)',
            }}>
            {label}
          </BaseSelect.Label>
        )}
        <BaseSelect.Trigger
          aria-label={label ? undefined : placeholder}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            height: '36px',
            padding: '0 10px 0 12px',
            borderRadius: '8px',
            border: '1px solid var(--color-border-strong)',
            background: 'rgba(255,255,255,0.04)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
            color: 'var(--color-foreground)',
            fontSize: '0.875rem',
            fontFamily: 'inherit',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            outline: 'none',
            userSelect: 'none',
            minWidth: '160px',
            opacity: isDisabled ? 0.5 : 1,
            ...triggerStyle,
          }}
          className={mergeClassName(
            'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[popup-open]:border-accent focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            triggerClassName,
          )}>
          <BaseSelect.Value
            style={{ color: 'var(--color-foreground)' }}
            className='data-[placeholder]:text-foreground-subtle'
            placeholder={options.length === 0 ? 'No options' : placeholder}
          />
          <BaseSelect.Icon
            style={{ color: 'var(--color-foreground-muted)', display: 'flex' }}>
            <ChevronUpDownIcon />
          </BaseSelect.Icon>
        </BaseSelect.Trigger>

        <BaseSelect.Portal>
          <BaseSelect.Positioner sideOffset={6}>
            <BaseSelect.Popup
              style={{
                minWidth: 'max(var(--anchor-width), 180px)',
                borderRadius: '8px',
                border: '1px solid var(--color-border-strong)',
                background: 'var(--color-background-elevated)',
                boxShadow:
                  '0 8px 24px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
                padding: '4px',
                outline: 'none',
                transformOrigin: 'var(--transform-origin)',
                transition: 'transform 120ms, opacity 120ms',
              }}
              className='data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95'>
              <BaseSelect.List
                style={{
                  maxHeight: 'var(--available-height)',
                  overflowY: 'auto',
                  padding: 0,
                  margin: 0,
                  listStyle: 'none',
                }}>
                {options.map(
                  ({
                    label: optLabel,
                    value: optValue,
                    disabled: optDisabled,
                  }) => (
                    <BaseSelect.Item
                      key={optValue}
                      value={optValue}
                      disabled={optDisabled}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '16px 1fr',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '7px 10px',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        color: 'var(--color-foreground-muted)',
                        cursor: optDisabled ? 'not-allowed' : 'default',
                        userSelect: 'none',
                        outline: 'none',
                        whiteSpace: 'nowrap',
                      }}
                      className='data-[highlighted]:bg-background-subtle data-[highlighted]:text-foreground data-[disabled]:opacity-40'>
                      <BaseSelect.ItemIndicator
                        style={{
                          display: 'flex',
                          color: 'var(--color-accent)',
                        }}>
                        <CheckIcon />
                      </BaseSelect.ItemIndicator>
                      <BaseSelect.ItemText>{optLabel}</BaseSelect.ItemText>
                    </BaseSelect.Item>
                  ),
                )}
              </BaseSelect.List>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
    </div>
  )
}
