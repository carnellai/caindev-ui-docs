import { Slider as BaseSlider } from '@base-ui/react/slider'

type SliderProps = {
  label?: string
  min?: number
  max?: number
  step?: number
  defaultValue?: number | number[]
  value?: number | number[]
  onValueChange?: (value: number | number[]) => void
  disabled?: boolean
  ariaLabel?: string
}

export function Slider({
  label,
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value,
  onValueChange,
  disabled,
  ariaLabel,
}: SliderProps) {
  const isRange = Array.isArray(defaultValue) || Array.isArray(value)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-foreground)' }}>
            {label}
          </span>
          <BaseSlider.Root
            min={min}
            max={max}
            step={step}
            defaultValue={defaultValue}
            value={value}
            onValueChange={onValueChange}
            disabled={disabled}
            render={(root) => (
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-muted)' }}>
                <BaseSlider.Value />
              </span>
            )}
          />
        </div>
      )}

      <BaseSlider.Root
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        style={{ width: '100%' }}
        className="data-[disabled]:opacity-50"
      >
        <BaseSlider.Control
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '10px 0',
            touchAction: 'none',
            userSelect: 'none',
          }}
        >
          <BaseSlider.Track
            style={{
              position: 'relative',
              width: '100%',
              height: '4px',
              borderRadius: '2px',
              background: 'var(--color-background-subtle)',
              border: '1px solid var(--color-border)',
            }}
          >
            <BaseSlider.Indicator
              style={{
                borderRadius: '2px',
                background: 'var(--color-accent)',
              }}
            />
            {isRange ? (
              <>
                <BaseSlider.Thumb
                  index={0}
                  aria-label={ariaLabel ?? label ?? 'Min value'}
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#fff',
                    border: '1px solid var(--color-border-strong)',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.4)',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                  className="has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-background"
                />
                <BaseSlider.Thumb
                  index={1}
                  aria-label={ariaLabel ?? label ?? 'Max value'}
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#fff',
                    border: '1px solid var(--color-border-strong)',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.4)',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                  className="has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-background"
                />
              </>
            ) : (
              <BaseSlider.Thumb
                aria-label={ariaLabel ?? label ?? 'Value'}
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#fff',
                  border: '1px solid var(--color-border-strong)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.4)',
                  outline: 'none',
                  cursor: 'pointer',
                }}
                className="has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-background"
              />
            )}
          </BaseSlider.Track>
        </BaseSlider.Control>
      </BaseSlider.Root>
    </div>
  )
}
