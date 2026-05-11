import { DocsPage } from '../../layouts/DocsPage'
import { Combobox } from '@caindev/ui'

const models = [
  { label: 'claude-sonnet-4-6', value: 'claude-sonnet-4-6' },
  { label: 'claude-opus-4-6', value: 'claude-opus-4-6' },
  { label: 'claude-haiku-4-5', value: 'claude-haiku-4-5' },
  { label: 'gpt-4o', value: 'gpt-4o' },
  { label: 'gpt-4o-mini', value: 'gpt-4o-mini' },
  { label: 'gemini-2.0-flash', value: 'gemini-2.0-flash' },
  { label: 'gemini-1.5-pro', value: 'gemini-1.5-pro' },
]

export function ComboboxPage() {
  return (
      <DocsPage
        title="Combobox"
        description="A searchable input combined with a dropdown list. Built on Base UI's Combobox primitive with keyboard navigation, filtering, and improved ARIA combobox semantics."
        preview={
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
            <Combobox
              label="Model"
              placeholder="Search models..."
              options={models}
              defaultValue="claude-sonnet-4-6"
            />
            <Combobox
              label="Disabled"
              placeholder="Search..."
              options={models}
              disabled
            />
          </div>
        }
        code={`import { Combobox } from '@caindev/ui'

const models = [
  { label: 'claude-sonnet-4-6', value: 'claude-sonnet-4-6' },
  { label: 'gpt-4o', value: 'gpt-4o' },
  { label: 'gemini-2.0-flash', value: 'gemini-2.0-flash' },
]

// Uncontrolled
<Combobox
  label="Model"
  placeholder="Search models..."
  options={models}
  defaultValue="claude-sonnet-4-6"
/>

// Controlled
const [model, setModel] = useState<string | null>(null)
<Combobox
  label="Model"
  placeholder="Search models..."
  options={models}
  value={model}
  onValueChange={setModel}
/>`}
        props={[
          {
            name: 'options',
            type: '{ label: string; value: string; disabled?: boolean }[]',
            default: '—',
            description: 'Array of options to display and filter.',
          },
          {
            name: 'label',
            type: 'string',
            default: '—',
            description: 'Label rendered above the input.',
          },
          {
            name: 'placeholder',
            type: 'string',
            default: '"Search..."',
            description: 'Input placeholder text.',
          },
          {
            name: 'value',
            type: 'string | null',
            default: '—',
            description: 'Controlled selected value.',
          },
          {
            name: 'defaultValue',
            type: 'string | null',
            default: '—',
            description: 'Initial selected value (uncontrolled).',
          },
          {
            name: 'onValueChange',
            type: '(value: string | null) => void',
            default: '—',
            description: 'Callback when selection changes.',
          },
          {
            name: 'emptyText',
            type: 'string',
            default: '"No results found."',
            description: 'Text shown when no options match the query.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disables the combobox.',
          },
        ]}
      />
  )
}
