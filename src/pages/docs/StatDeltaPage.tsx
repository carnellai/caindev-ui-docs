import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { StatDelta } from '@caindev/ui'

export function StatDeltaPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="StatDelta"
        description="A metric with a comparison value and directional indicator showing change from a baseline. Common in A/B eval comparisons, version diffs, and experiment results."
        preview={
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px 40px' }}>
            <StatDelta
              label="Pass rate"
              current={91}
              previous={87}
              format="percent"
              higherIsBetter
            />
            <StatDelta
              label="Avg latency"
              current={1240}
              previous={1820}
              format="duration"
              higherIsBetter={false}
            />
            <StatDelta
              label="Total cost"
              current={0.0842}
              previous={0.0634}
              format="currency"
              higherIsBetter={false}
            />
            <StatDelta
              label="Avg score"
              current={0.847}
              previous={0.831}
              format="number"
              higherIsBetter
            />
          </div>
        }
        code={`import { StatDelta } from '@caindev/ui'

// Score improved (higher is better)
<StatDelta
  label="Pass rate"
  current={91}
  previous={87}
  format="percent"
  higherIsBetter={true}
/>

// Latency improved (lower is better)
<StatDelta
  label="Avg latency"
  current={1240}
  previous={1820}
  format="duration"
  higherIsBetter={false}
/>`}
        props={[
          { name: 'label', type: 'string', default: '—', description: 'Metric label.' },
          { name: 'current', type: 'number', default: '—', description: 'Current value.' },
          { name: 'previous', type: 'number', default: '—', description: 'Baseline value to compare against.' },
          { name: 'format', type: '"number" | "percent" | "currency" | "duration"', default: '"number"', description: 'How to format the values.' },
          { name: 'unit', type: 'string', default: '—', description: 'Optional unit suffix.' },
          { name: 'higherIsBetter', type: 'boolean', default: 'true', description: 'Controls whether green means up or down.' },
        ]}
      />
    </DocsLayout>
  )
}
