import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Slider } from '../../components/Slider'

export function SliderPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Slider"
        description="Select a numeric value or range by dragging a thumb. Built on Base UI's Slider primitive with keyboard support, range mode, and accessible labeling."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '360px' }}>
            <Slider label="Temperature" defaultValue={72} ariaLabel="Temperature" />
            <Slider label="Max tokens" defaultValue={2048} min={256} max={8192} step={256} ariaLabel="Max tokens" />
            <Slider label="Range" defaultValue={[20, 80]} ariaLabel="Range" />
            <Slider label="Disabled" defaultValue={40} disabled ariaLabel="Disabled slider" />
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
          { name: 'defaultValue', type: 'number | number[]', default: '50', description: 'Initial value. Pass an array for a range slider.' },
          { name: 'value', type: 'number | number[]', default: '—', description: 'Controlled value.' },
          { name: 'onValueChange', type: '(value: number | number[]) => void', default: '—', description: 'Callback when value changes.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the slider.' },
          { name: 'ariaLabel', type: 'string', default: '—', description: 'Accessible label for the thumb(s).' },
        ]}
      />
    </DocsLayout>
  )
}
