import { DocsPage } from '../../layouts/DocsPage'
import { MetricCard } from '@caindev/ui'

export function MetricCardPage() {
  return (
      <DocsPage
        title="MetricCard"
        description="Displays a single metric with a label, value, optional unit, and optional trend indicator. Used in run summaries, eval dashboards, and pipeline monitors."
        preview={
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <MetricCard
              label="Avg score"
              value="0.87"
              trend="up"
              trendValue="4.2%"
              sublabel="vs last run"
              trendPositive
            />
            <MetricCard
              label="Latency"
              value="1,240"
              unit="ms"
              trend="down"
              trendValue="12%"
              sublabel="vs last run"
              trendPositive={false}
            />
            <MetricCard
              label="Total cost"
              value="$0.0842"
              trend="up"
              trendValue="8%"
              sublabel="vs last run"
              trendPositive={false}
            />
            <MetricCard label="Runs" value={247} sublabel="last 7 days" />
            <MetricCard label="Pass rate" value="91.3" unit="%" trend="neutral" trendValue="0%" sublabel="unchanged" />
            <MetricCard label="Tokens" value="2.4M" sublabel="this month" />
          </div>
        }
        code={`import { MetricCard } from '@caindev/ui'

<MetricCard
  label="Avg score"
  value="0.87"
  trend="up"
  trendValue="4.2%"
  sublabel="vs last run"
  trendPositive={true}  // up = good
/>

<MetricCard
  label="Latency"
  value={1240}
  unit="ms"
  trend="down"
  trendValue="12%"
  trendPositive={false} // down = good
/>`}
        props={[
          { name: 'label', type: 'string', default: '—', description: 'Metric label shown above the value.' },
          { name: 'value', type: 'string | number', default: '—', description: 'The metric value.' },
          { name: 'unit', type: 'string', default: '—', description: 'Unit shown after the value (ms, %, etc).' },
          { name: 'trend', type: '"up" | "down" | "neutral"', default: '—', description: 'Direction of change.' },
          { name: 'trendValue', type: 'string', default: '—', description: 'Formatted change value (e.g. "4.2%").' },
          { name: 'trendPositive', type: 'boolean', default: 'true', description: 'Whether up is good. Set false for latency/cost where lower is better.' },
          { name: 'sublabel', type: 'string', default: '—', description: 'Secondary label shown below the trend.' },
        ]}
      />
  )
}
