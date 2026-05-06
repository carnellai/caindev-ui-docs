import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { ScoreBar } from '@caindev/ui'

export function ScoreBarPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="ScoreBar"
        description="A horizontal progress bar for displaying evaluation scores. Supports a threshold marker that changes the bar color green/red based on pass/fail. Used in eval cards, run summaries, and metric breakdowns."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
            <ScoreBar label="Correctness" score={0.94} threshold={0.8} />
            <ScoreBar label="Relevance" score={0.61} threshold={0.8} />
            <ScoreBar label="Coherence" score={0.88} threshold={0.75} />
            <ScoreBar label="Safety" score={1.0} threshold={0.95} />
            <ScoreBar label="No threshold" score={0.72} />
            <ScoreBar score={0.55} threshold={0.7} size="sm" showValue={false} />
          </div>
        }
        code={`import { ScoreBar } from '@caindev/ui'

// With threshold — green if passing, red if failing
<ScoreBar
  label="Correctness"
  score={0.94}
  threshold={0.8}
/>

// Without threshold
<ScoreBar label="Score" score={0.72} />

// Small, no value label
<ScoreBar score={0.55} size="sm" showValue={false} />`}
        props={[
          { name: 'score', type: 'number', default: '—', description: 'Score value between 0 and 1.' },
          { name: 'threshold', type: 'number', default: '—', description: 'Pass/fail threshold (0–1). Shown as a marker. Bar turns green above, red below.' },
          { name: 'label', type: 'string', default: '—', description: 'Label shown above the bar.' },
          { name: 'showValue', type: 'boolean', default: 'true', description: 'Show the numeric score value.' },
          { name: 'size', type: '"sm" | "md"', default: '"md"', description: 'Bar height.' },
        ]}
      />
    </DocsLayout>
  )
}
