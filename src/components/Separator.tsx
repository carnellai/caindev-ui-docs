import { Separator as BaseSeparator } from '@base-ui/react/separator'

type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical'
  label?: string
  style?: React.CSSProperties
}

export function Separator({ orientation = 'horizontal', label, style }: SeparatorProps) {
  if (orientation === 'vertical') {
    return (
      <BaseSeparator
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', ...style }}>
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
      style={{
        height: '1px',
        background: 'var(--color-border)',
        ...style,
      }}
    />
  )
}
