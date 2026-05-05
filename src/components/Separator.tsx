import { Separator as BaseSeparator } from '@base-ui/react/separator'

export type SeparatorOrientation = 'horizontal' | 'vertical'

export type SeparatorProps = {
  orientation?: SeparatorOrientation
  label?: string
  style?: React.CSSProperties
  className?: string
}

export function Separator({ orientation = 'horizontal', label, style, className }: SeparatorProps) {
  if (orientation === 'vertical') {
    return (
      <BaseSeparator
        className={className}
        orientation="vertical"
        style={{
          width: '1px',
          alignSelf: 'stretch',
          background: 'var(--color-border)',
          ...style,
        }}
      />
    )
  }

  if (label) {
    return (
      <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '12px', ...style }}>
        <BaseSeparator style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
        <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)', whiteSpace: 'nowrap' }}>
          {label}
        </span>
        <BaseSeparator style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
      </div>
    )
  }

  return (
    <BaseSeparator
      className={className}
      style={{
        height: '1px',
        background: 'var(--color-border)',
        ...style,
      }}
    />
  )
}
