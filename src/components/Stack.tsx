type StackProps = {
  children: React.ReactNode
  direction?: 'vertical' | 'horizontal'
  gap?: string | number
  align?: React.CSSProperties['alignItems']
  justify?: React.CSSProperties['justifyContent']
  wrap?: boolean
  style?: React.CSSProperties
  className?: string
}

export function Stack({
  children,
  direction = 'vertical',
  gap = '16px',
  align,
  justify,
  wrap = false,
  style,
  className,
}: StackProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        gap: typeof gap === 'number' ? `${gap}px` : gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Convenience aliases
export function HStack(props: Omit<StackProps, 'direction'>) {
  return <Stack {...props} direction="horizontal" />
}

export function VStack(props: Omit<StackProps, 'direction'>) {
  return <Stack {...props} direction="vertical" />
}
