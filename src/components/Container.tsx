export type SectionSize = 'sm' | 'md' | 'lg'

export type SectionProps = {
  children: React.ReactNode
  size?: SectionSize
  style?: React.CSSProperties
  className?: string
  id?: string
}

const paddingMap: Record<SectionSize, string> = {
  sm: 'py-10', // 40px
  md: 'py-16', // 64px
  lg: 'py-24', // 96px
}

export function Section({
  children,
  size = 'md',
  style,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[paddingMap[size], className].filter(Boolean).join(' ')}
      style={style}>
      {children}
    </section>
  )
}
