// SelectPage.tsx
import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Select } from '../../components/Select'

export function SelectPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Select"
        description="Choose a value from a dropdown list. Built on Base UI's Select primitive with keyboard navigation and accessible labeling."
        preview={
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
            <Select
              label="Model"
              placeholder="Select a model"
              defaultValue="gpt-4o"
              options={[
                { label: 'GPT-4o', value: 'gpt-4o' },
                { label: 'GPT-4o mini', value: 'gpt-4o-mini' },
                { label: 'Claude 3.5 Sonnet', value: 'claude-3-5-sonnet' },
                { label: 'Claude 3 Haiku', value: 'claude-3-haiku' },
                { label: 'Gemini 1.5 Pro', value: 'gemini-1-5-pro' },
              ]}
            />
            <Select
              label="Disabled"
              placeholder="Select an option"
              options={[{ label: 'Option 1', value: '1' }]}
              disabled
            />
          </div>
        }
        code={`import { Select } from '@caindev/ui'

<Select
  label="Model"
  placeholder="Select a model"
  defaultValue="gpt-4o"
  options={[
    { label: 'GPT-4o', value: 'gpt-4o' },
    { label: 'Claude 3.5 Sonnet', value: 'claude-3-5-sonnet' },
    { label: 'Gemini 1.5 Pro', value: 'gemini-1-5-pro' },
  ]}
/>

// Controlled
const [model, setModel] = useState<string | null>('gpt-4o')
<Select
  value={model}
  onValueChange={setModel}
  options={options}
/>`}
        props={[
          { name: 'options', type: '{ label: string; value: string; disabled?: boolean }[]', default: '—', description: 'Array of options to display.' },
          { name: 'label', type: 'string', default: '—', description: 'Label rendered above the trigger.' },
          { name: 'placeholder', type: 'string', default: '"Select an option"', description: 'Placeholder when no value is selected.' },
          { name: 'value', type: 'string | null', default: '—', description: 'Controlled value. Use null for no selection.' },
          { name: 'defaultValue', type: 'string | null', default: '—', description: 'Initial value (uncontrolled). Use null for no initial selection.' },
          { name: 'onValueChange', type: '(value: string | null) => void', default: '—', description: 'Callback when value changes or clears.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the select.' },
        ]}
      />
    </DocsLayout>
  )
}
