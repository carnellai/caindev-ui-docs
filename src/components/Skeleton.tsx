export type SkeletonProps = {
  width?: string | number
  height?: string | number
  borderRadius?: string | number
  style?: React.CSSProperties
  className?: string
}

export function Skeleton({ width = '100%', height = '16px', borderRadius = '4px', style, className }: SkeletonProps) {
  return (
    <div className={['relative overflow-hidden bg-background-subtle', className].filter(Boolean).join(' ')} style={{ width, height, borderRadius, ...style }}>
      <div className="skeleton-shimmer absolute inset-0 animate-[skeleton-shimmer_1.5s_ease-in-out_infinite] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />
      <style>{`
        @keyframes skeleton-shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        @media (prefers-reduced-motion: reduce) {
          .skeleton-shimmer {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export type SkeletonTextProps = {
  lines?: number
  lastLineWidth?: string
  style?: React.CSSProperties
  className?: string
}

export function SkeletonText({ lines = 3, lastLineWidth = '60%', style, className }: SkeletonTextProps) {
  return (
    <div className={['flex flex-col gap-2', className].filter(Boolean).join(' ')} style={style}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} width={i === lines - 1 ? lastLineWidth : '100%'} height="14px" />
      ))}
    </div>
  )
}

export type SkeletonCardProps = {
  style?: React.CSSProperties
  className?: string
}

export function SkeletonCard({ style, className }: SkeletonCardProps = {}) {
  return (
    <div className={['flex flex-col gap-3 rounded-[8px] border border-border p-4', className].filter(Boolean).join(' ')} style={style}>
      <div className="flex items-center gap-2.5">
        <Skeleton width="32px" height="32px" borderRadius="50%" />
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton width="40%" height="14px" />
          <Skeleton width="25%" height="11px" />
        </div>
      </div>
      <SkeletonText lines={3} />
    </div>
  )
}
