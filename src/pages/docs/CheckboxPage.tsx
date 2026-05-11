import { DocsPage } from '../../layouts/DocsPage'
import { Checkbox } from '@caindev/ui'

export function CheckboxPage() {
  return (
      <DocsPage
        title="Checkbox"
        description="A styled checkbox with indeterminate state support. Built on Base UI's Checkbox primitive with full keyboard support and form integration."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox label="Accept terms and conditions" defaultChecked />
            <Checkbox label="Send me product updates" />
            <Checkbox label="Disabled option" disabled />
            <Checkbox label="Disabled and checked" defaultChecked disabled />
          </div>
        }
        code={`import { Checkbox } from '@caindev/ui'

// Uncontrolled
<Checkbox label="Accept terms" defaultChecked />

// Controlled
const [checked, setChecked] = useState(false)
<Checkbox
  label="Send updates"
  checked={checked}
  onCheckedChange={setChecked}
/>

// Disabled
<Checkbox label="Disabled" disabled />`}
        props={[
          {
            name: 'label',
            type: 'string',
            default: '—',
            description: 'Label rendered next to the checkbox.',
          },
          {
            name: 'checked',
            type: 'boolean',
            default: '—',
            description: 'Controlled checked state.',
          },
          {
            name: 'defaultChecked',
            type: 'boolean',
            default: 'false',
            description: 'Initial checked state (uncontrolled).',
          },
          {
            name: 'indeterminate',
            type: 'boolean',
            default: 'false',
            description: 'Sets the checkbox to an indeterminate state.',
          },
          {
            name: 'onCheckedChange',
            type: '(checked: boolean) => void',
            default: '—',
            description: 'Callback when the checked state changes.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disables the checkbox.',
          },
          {
            name: 'name',
            type: 'string',
            default: '—',
            description: 'Field name for form submission.',
          },
        ]}
      />
  )
}
