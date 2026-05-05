type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

type ContainerProps = {
  children: React.ReactNode
  size?: ContainerSize
  center?: boolean
  style?: React.CSSProperties
  className?: string
}

const sizeMap: Record<ContainerSize, string> = {
  sm:   '640px',
  md:   '768px',
  lg:   '1024px',
  xl:   '1280px',
  full: '100%',
}

export function Container({
  children,
  size = 'xl',
  center = true,
  style,
  className,
}: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: sizeMap[size],
        marginLeft: center ? 'auto' : undefined,
        marginRight: center ? 'auto' : undefined,
        paddingLeft: '24px',
        paddingRight: '24px',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
