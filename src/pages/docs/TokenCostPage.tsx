import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { TokenCost } from '@caindev/ui'

export function TokenCostPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="TokenCost"
        description="Monospace display of token usage and cost. Metrics are grouped and wrap cleanly for dense layouts. Used in span headers, run summaries, and metric rows."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TokenCost
              model="claude-3-5-sonnet-20241022"
              inputTokens={3847}
              outputTokens={512}
              cost={0.01298}
            />
            <TokenCost
              model="gpt-4o"
              inputTokens={6240}
              outputTokens={890}
              cost={0.0354}
            />
            <TokenCost totalTokens={2400} cost={0.000048} layout="stack" />
            <TokenCost inputTokens={1024} outputTokens={256} />
          </div>
        }
        code={`import { TokenCost } from '@caindev/ui'

// Full breakdown
<TokenCost
  model="claude-3-5-sonnet-20241022"
  inputTokens={3847}
  outputTokens={512}
  cost={0.01298}
/>

// Total only
<TokenCost totalTokens={2400} cost={0.000048} />

// Stacked layout
<TokenCost
  inputTokens={1024}
  outputTokens={256}
  cost={0.002}
  layout="stack"
/>`}
        props={[
          { name: 'inputTokens', type: 'number', default: '—', description: 'Number of input/prompt tokens.' },
          { name: 'outputTokens', type: 'number', default: '—', description: 'Number of output/completion tokens.' },
          { name: 'totalTokens', type: 'number', default: '—', description: 'Total tokens — used when input/output split is unavailable.' },
          { name: 'cost', type: 'number', default: '—', description: 'Cost in USD. Automatically formats to 4 or 6 decimal places.' },
          { name: 'model', type: 'string', default: '—', description: 'Model name shown as a label.' },
          { name: 'layout', type: '"row" | "stack"', default: '"row"', description: 'Inline row or stacked column layout.' },
        ]}
      />
    </DocsLayout>
  )
}
