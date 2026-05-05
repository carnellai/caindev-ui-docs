import { useState } from 'react'
import { Button as BaseButton } from '@base-ui/react/button'

type ButtonVariant = 'solid' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = React.ComponentProps<typeof BaseButton> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { height: '30px', padding: '0 10px', fontSize: '0.75rem', gap: '6px' },
  md: { height: '34px', padding: '0 14px', fontSize: '0.8125rem', gap: '7px' },
  lg: { height: '38px', padding: '0 18px', fontSize: '0.875rem', gap: '8px' },
}

function getVariantStyle(
  variant: ButtonVariant,
  hovered: boolean,
): React.CSSProperties {
  switch (variant) {
    case 'solid':
      return {
        background: hovered ? '#8b5cf6' : 'var(--color-accent)',
        color: 'var(--color-accent-foreground)',
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',
      }
    case 'outline':
      return {
        background: hovered
          ? 'rgba(255,255,255,0.09)'
          : 'rgba(255,255,255,0.05)',
        color: 'var(--color-foreground)',
        border: hovered
          ? '1px solid rgba(255,255,255,0.18)'
          : '1px solid var(--color-border-strong)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
      }
    case 'ghost':
      return {
        background: hovered ? 'rgba(255,255,255,0.06)' : 'transparent',
        color: hovered
          ? 'var(--color-foreground)'
          : 'var(--color-foreground-muted)',
        border: 'none',
        boxShadow: 'none',
      }
  }
}

export function Button({
  variant = 'solid',
  size = 'md',
  style,
  onMouseEnter,
  onMouseLeave,
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <BaseButton
      onMouseEnter={(e) => {
        setHovered(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        setHovered(false)
        onMouseLeave?.(e)
      }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        fontFamily: 'inherit',
        letterSpacing: '-0.01em',
        borderRadius: '8px',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'background 120ms, border-color 120ms, color 120ms',
        outline: 'none',
        ...sizeStyles[size],
        ...getVariantStyle(variant, hovered),
        ...(typeof style === 'object' ? style : {}),
      }}
      {...props}
    />
  )
}
