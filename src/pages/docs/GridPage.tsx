import { DocsPage } from '../../layouts/DocsPage'
import { Card, Grid, MetricCard } from '@caindev/ui'

export function GridPage() {
  return (
      <DocsPage
        title="Grid"
        description="CSS Grid layout primitive. Supports fixed column counts, custom templates, and auto-fill responsive grids with a minimum column width."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            <Grid cols={3} gap="10px">
              <MetricCard label="Score" value="0.94" trend="up" trendValue="4%" />
              <MetricCard label="Latency" value="1.2" unit="s" trend="down" trendValue="8%" trendPositive={false} />
              <MetricCard label="Cost" value="$0.04" trend="neutral" trendValue="0%" />
            </Grid>
            <Grid minColWidth="140px" gap="8px">
              {['Button', 'Badge', 'Card', 'Input', 'Switch', 'Table'].map(name => (
                <Card key={name} padding="sm">
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-foreground-muted)' }}>{name}</span>
                </Card>
              ))}
            </Grid>
          </div>
        }
        code={`import { Grid } from '@caindev/ui'

// Fixed columns
<Grid cols={3} gap="16px">
  <Card>One</Card>
  <Card>Two</Card>
  <Card>Three</Card>
</Grid>

// Custom template
<Grid cols="1fr 2fr" gap="24px">
  <Sidebar />
  <Main />
</Grid>

// Responsive auto-fill
<Grid minColWidth="200px" gap="12px">
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</Grid>`}
        props={[
          { name: 'cols', type: 'number | string', default: '2', description: 'Number of equal columns, or a custom grid-template-columns value.' },
          { name: 'minColWidth', type: 'string', default: '—', description: 'Enables auto-fill with a minimum column width (e.g. "200px"). Overrides cols.' },
          { name: 'gap', type: 'string | number', default: '"16px"', description: 'Gap between all cells.' },
          { name: 'rowGap', type: 'string | number', default: '—', description: 'Row gap override.' },
          { name: 'colGap', type: 'string | number', default: '—', description: 'Column gap override.' },
        ]}
      />
  )
}
