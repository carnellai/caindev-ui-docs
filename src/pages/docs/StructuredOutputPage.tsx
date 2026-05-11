import { DocsPage } from '../../layouts/DocsPage'
import { StructuredOutput } from '@caindev/ui'

export function StructuredOutputPage() {
  return (
      <DocsPage
        title="StructuredOutput"
        description="Renderer for typed JSON as a readable key-value display. Type-aware syntax coloring for strings, numbers, and booleans. Handles nested objects and arrays with configurable depth."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '520px' }}>
            <StructuredOutput
              title="ExtractedInvoice"
              data={{
                vendor: 'Acme Logistics LLC',
                invoice_number: 'INV-2024-00847',
                amount: 14280.50,
                currency: 'USD',
                due_date: '2024-02-15',
                line_items: [
                  { description: 'Freight haul SFO→LAX', quantity: 1, unit_price: 12000 },
                  { description: 'Fuel surcharge', quantity: 1, unit_price: 2280.50 },
                ],
                paid: false,
                confidence: 0.97,
              }}
            />
          </div>
        }
        code={`import { StructuredOutput } from '@caindev/ui'

// From an LLM structured output / tool result
<StructuredOutput
  title="ExtractedInvoice"
  data={{
    vendor: 'Acme Logistics LLC',
    amount: 14280.50,
    paid: false,
    confidence: 0.97,
    line_items: [...],
  }}
/>

// Without a title
<StructuredOutput data={result} />`}
        props={[
          { name: 'data', type: 'Record<string, unknown>', default: '—', description: 'The object to render. Handles strings, numbers, booleans, null, arrays, and nested objects.' },
          { name: 'title', type: 'string', default: '—', description: 'Optional header label — useful for showing the schema or type name.' },
          { name: 'className', type: 'string', default: '—', description: 'CSS class applied to the root wrapper.' },
          { name: 'maxDepth', type: 'number', default: '4', description: 'Maximum nesting depth to render before truncating.' },
          { name: 'style', type: 'React.CSSProperties', default: '—', description: 'Inline styles merged onto the root wrapper.' },
        ]}
      />
  )
}
