import { Slider as BaseSlider } from '@base-ui/react/slider'

export type SliderValue = number | number[]

export type SliderProps = {
  label?: string
  min?: number
  max?: number
  step?: number
  defaultValue?: SliderValue
  value?: SliderValue
  onValueChange?: (value: SliderValue) => void
  disabled?: boolean
  ariaLabel?: string
  style?: React.CSSProperties
  className?: string
}

const thumbStyle: React.CSSProperties = {
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  background: '#fff',
  border: '1px solid var(--color-border-strong)',
  boxShadow: '0 1px 4px rgba(0,0,0,0.4)',
  outline: 'none',
  cursor: 'pointer',
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
  style,
  className,
}: SliderProps) {
  const isRange = Array.isArray(defaultValue) || Array.isArray(value)
  const thumbLabel = ariaLabel ?? label

  return (
    <BaseSlider.Root
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      className={className}
      style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', opacity: disabled ? 0.5 : 1, ...style }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {label ? (
          <BaseSlider.Label style={{ fontSize: '0.8125rem', fontWeight: 500, color: disabled ? 'var(--color-foreground-subtle)' : 'var(--color-foreground)' }}>
            {label}
          </BaseSlider.Label>
        ) : <span />}
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-foreground-muted)' }}>
          <BaseSlider.Value />
        </span>
      </div>

      <div>
        <BaseSlider.Control
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '10px 0',
            touchAction: 'none',
            userSelect: 'none',
            cursor: disabled ? 'not-allowed' : undefined,
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
                  aria-label={thumbLabel ? `${thumbLabel} minimum` : 'Minimum value'}
                  style={thumbStyle}
                  className="focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:cursor-not-allowed"
                />
                <BaseSlider.Thumb
                  index={1}
                  aria-label={thumbLabel ? `${thumbLabel} maximum` : 'Maximum value'}
                  style={thumbStyle}
                  className="focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:cursor-not-allowed"
                />
              </>
            ) : (
              <BaseSlider.Thumb
                aria-label={thumbLabel ?? 'Value'}
                style={thumbStyle}
                className="focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:cursor-not-allowed"
              />
            )}
          </BaseSlider.Track>
        </BaseSlider.Control>
      </div>
    </BaseSlider.Root>
  )
}
