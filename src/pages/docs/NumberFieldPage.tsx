import { DocsPage } from '../../layouts/DocsPage'
import { NumberField } from '@caindev/ui'

export function NumberFieldPage() {
  return (
      <DocsPage
        title="NumberField"
        description="A numeric input with increment and decrement buttons and a scrub area. Built on Base UI's NumberField primitive. Drag the label to scrub the value."
        preview={
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
            <NumberField
              label="Temperature"
              defaultValue={0.7}
              min={0}
              max={2}
              step={0.1}
              format={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }}
            />
            <NumberField
              label="Max tokens"
              defaultValue={1024}
              min={1}
              max={128000}
              step={256}
            />
            <NumberField
              label="Top K"
              defaultValue={50}
              min={1}
              max={100}
            />
            <NumberField
              label="Disabled"
              defaultValue={42}
              disabled
            />
          </div>
        }
        code={`import { NumberField } from '@caindev/ui'

// Basic
<NumberField label="Max tokens" defaultValue={1024} min={1} max={128000} step={256} />

// With decimal formatting
<NumberField
  label="Temperature"
  defaultValue={0.7}
  min={0}
  max={2}
  step={0.1}
  format={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }}
/>

// Controlled
const [value, setValue] = useState<number | null>(50)
<NumberField
  label="Top K"
  value={value}
  onValueChange={setValue}
  min={1}
  max={100}
/>`}
        props={[
          {
            name: 'label',
            type: 'string',
            default: '—',
            description: 'Label rendered above the field. Also enables the scrub area — drag to adjust the value.',
          },
          {
            name: 'value',
            type: 'number | null',
            default: '—',
            description: 'Controlled value.',
          },
          {
            name: 'defaultValue',
            type: 'number',
            default: '—',
            description: 'Initial value (uncontrolled).',
          },
          {
            name: 'onValueChange',
            type: '(value: number | null) => void',
            default: '—',
            description: 'Callback when value changes.',
          },
          {
            name: 'min',
            type: 'number',
            default: '—',
            description: 'Minimum allowed value.',
          },
          {
            name: 'max',
            type: 'number',
            default: '—',
            description: 'Maximum allowed value.',
          },
          {
            name: 'step',
            type: 'number',
            default: '1',
            description: 'Increment/decrement step size.',
          },
          {
            name: 'format',
            type: 'Intl.NumberFormatOptions',
            default: '—',
            description: 'Number format options for display.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disables the field.',
          },
          {
            name: 'hint',
            type: 'string',
            default: '—',
            description: 'Helper text rendered below the field.',
          },
        ]}
      />
  )
}
