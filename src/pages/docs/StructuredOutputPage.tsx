import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { StructuredOutput } from '../../components/StructuredOutput'

export function StructuredOutputPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="StructuredOutput"
        description="Renders a typed JSON object as a readable key-value display. Type-aware syntax coloring — strings in amber, numbers in green, booleans in violet. Handles nested objects and arrays up to 2 levels deep."
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
        ]}
      />
    </DocsLayout>
  )
}
