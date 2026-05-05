type SectionProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  style?: React.CSSProperties
  className?: string
  id?: string
}

const paddingMap = {
  sm: '40px 0',
  md: '64px 0',
  lg: '96px 0',
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
      className={className}
      style={{
        padding: paddingMap[size],
        ...style,
      }}
    >
      {children}
    </section>
  )
}
