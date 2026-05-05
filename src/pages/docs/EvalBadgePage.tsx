import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { EvalBadge } from '../../components/EvalBadge'

export function EvalBadgePage() {
  return (
    <DocsLayout>
      <DocsPage
        title="EvalBadge"
        description="Displays an evaluation verdict — pass, fail, review, or insufficient. Optionally shows the numeric score alongside the verdict. Used in run lists, eval tables, and span details."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <EvalBadge verdict="pass" />
              <EvalBadge verdict="fail" />
              <EvalBadge verdict="review" />
              <EvalBadge verdict="insufficient" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <EvalBadge verdict="pass" score={0.94} />
              <EvalBadge verdict="fail" score={0.31} />
              <EvalBadge verdict="review" score={0.61} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <EvalBadge verdict="pass" size="sm" label="Correctness" />
              <EvalBadge verdict="fail" size="sm" label="Relevance" />
              <EvalBadge verdict="review" size="sm" label="Coherence" />
              <EvalBadge verdict="insufficient" size="sm" label="Safety" />
            </div>
          </div>
        }
        code={`import { EvalBadge } from '@caindev/ui'

<EvalBadge verdict="pass" />
<EvalBadge verdict="fail" />
<EvalBadge verdict="review" />
<EvalBadge verdict="insufficient" />

// With score
<EvalBadge verdict="pass" score={0.94} />

// Small + custom label
<EvalBadge verdict="pass" size="sm" label="Correctness" />`}
        props={[
          { name: 'verdict', type: '"pass" | "fail" | "review" | "insufficient"', default: '—', description: 'The evaluation result.' },
          { name: 'score', type: 'number', default: '—', description: 'Numeric score (0–1) shown alongside the verdict.' },
          { name: 'label', type: 'string', default: 'verdict label', description: 'Custom label — defaults to the verdict name.' },
          { name: 'size', type: '"sm" | "md"', default: '"md"', description: 'Size of the badge.' },
        ]}
      />
    </DocsLayout>
  )
}
