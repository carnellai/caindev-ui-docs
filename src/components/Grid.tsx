type GridProps = {
  children: React.ReactNode
  cols?: number | string  // number = repeat(n, 1fr), string = custom template
  gap?: string | number
  rowGap?: string | number
  colGap?: string | number
  minColWidth?: string    // for auto-fill grids
  style?: React.CSSProperties
  className?: string
}

export function Grid({
  children,
  cols = 2,
  gap = '16px',
  rowGap,
  colGap,
  minColWidth,
  style,
  className,
}: GridProps) {
  const template = minColWidth
    ? `repeat(auto-fill, minmax(${minColWidth}, 1fr))`
    : typeof cols === 'number'
    ? `repeat(${cols}, 1fr)`
    : cols

  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: template,
        gap: typeof gap === 'number' ? `${gap}px` : gap,
        rowGap: rowGap ? (typeof rowGap === 'number' ? `${rowGap}px` : rowGap) : undefined,
        columnGap: colGap ? (typeof colGap === 'number' ? `${colGap}px` : colGap) : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
