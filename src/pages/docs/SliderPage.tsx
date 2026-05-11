import { DocsPage } from '../../layouts/DocsPage'
import { Slider } from '@caindev/ui'

export function SliderPage() {
  return (
      <DocsPage
        title="Slider"
        description="Select one numeric value, or a range when value/defaultValue is an array. Built on Base UI's Slider primitive with keyboard support and accessible labeling."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '360px' }}>
            <Slider label="Temperature" defaultValue={72} aria-label="Temperature" />
            <Slider label="Max tokens" defaultValue={2048} min={256} max={8192} step={256} aria-label="Max tokens" />
            <Slider label="Disabled" defaultValue={40} disabled aria-label="Disabled slider" />
          </div>
        }
        code={`import { Slider } from '@caindev/ui'

// Basic
<Slider label="Temperature" defaultValue={72} />

// Custom range and step
<Slider
  label="Max tokens"
  min={256}
  max={8192}
  step={256}
  defaultValue={2048}
/>

// Range slider
<Slider
  label="Range"
  defaultValue={[20, 80]}
/>

// Controlled
const [value, setValue] = useState(50)
<Slider
  label="Volume"
  value={value}
  onValueChange={setValue}
/>`}
        props={[
          { name: 'label', type: 'string', default: '—', description: 'Label rendered above the slider.' },
          { name: 'min', type: 'number', default: '0', description: 'Minimum value.' },
          { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
          { name: 'step', type: 'number', default: '1', description: 'Step increment.' },
          { name: 'defaultValue', type: 'number | number[]', default: '50', description: 'Initial value. A number creates one thumb; an array creates a range slider.' },
          { name: 'value', type: 'number | number[]', default: '—', description: 'Controlled value. Keep the shape as number for one thumb or number[] for range.' },
          { name: 'onValueChange', type: '(value: number | number[]) => void', default: '—', description: 'Callback when value changes. Receives the same shape as the slider value.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the slider.' },
          { name: 'aria-label', type: 'string', default: '—', description: 'Accessible label for the thumb(s).' },
        ]}
      />
  )
}
