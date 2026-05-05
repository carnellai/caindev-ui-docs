import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Skeleton, SkeletonText, SkeletonCard } from '../../components/Skeleton'

export function SkeletonPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Skeleton"
        description="Loading placeholder with a shimmer animation. Use to represent content while data is fetching. Includes preset layouts for text blocks and cards."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '420px' }}>
            {/* Custom shapes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Skeleton width="60%" height="20px" borderRadius="6px" />
              <Skeleton width="100%" height="14px" />
              <Skeleton width="100%" height="14px" />
              <Skeleton width="75%" height="14px" />
            </div>

            {/* SkeletonText preset */}
            <SkeletonText lines={4} lastLineWidth="45%" />

            {/* SkeletonCard preset */}
            <SkeletonCard />
          </div>
        }
        code={`import { Skeleton, SkeletonText, SkeletonCard } from '@caindev/ui'

// Custom shape
<Skeleton width="200px" height="20px" borderRadius="6px" />

// Text block preset
<SkeletonText lines={3} lastLineWidth="60%" />

// Card preset
<SkeletonCard />

// Match your actual layout
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  <Skeleton width="40%" height="12px" />
  <Skeleton width="100%" height="36px" borderRadius="8px" />
</div>`}
        props={[
          { name: 'width', type: 'string | number', default: '"100%"', description: 'Width of the skeleton element.' },
          { name: 'height', type: 'string | number', default: '"16px"', description: 'Height of the skeleton element.' },
          { name: 'borderRadius', type: 'string | number', default: '"4px"', description: 'Border radius.' },
          { name: 'style', type: 'React.CSSProperties', default: '—', description: 'Additional inline styles.' },
        ]}
      />
    </DocsLayout>
  )
}
