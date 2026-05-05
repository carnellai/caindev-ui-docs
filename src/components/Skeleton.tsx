export type SkeletonProps = {
  width?: string | number
  height?: string | number
  borderRadius?: string | number
  style?: React.CSSProperties
  className?: string
}

export function Skeleton({ width = '100%', height = '16px', borderRadius = '4px', style, className }: SkeletonProps) {
  return (
    <div className={className} style={{ width, height, borderRadius, background: 'var(--color-background-subtle)', position: 'relative', overflow: 'hidden', ...style }}>
      <div className="skeleton-shimmer" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
        animation: 'skeleton-shimmer 1.5s ease-in-out infinite',
      }} />
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
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
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
    <div className={className} style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '12px', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Skeleton width="32px" height="32px" borderRadius="50%" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Skeleton width="40%" height="14px" />
          <Skeleton width="25%" height="11px" />
        </div>
      </div>
      <SkeletonText lines={3} />
    </div>
  )
}
