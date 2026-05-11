import { DocsPage } from '../../layouts/DocsPage'
import { Switch } from '@caindev/ui'

export function SwitchPage() {
  return (
      <DocsPage
        title="Switch"
        description="Indicates whether a setting is on or off. Built on Base UI's Switch primitive with full keyboard support, accessible labeling, and form integration."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Switch label="Notifications" defaultChecked />
            <Switch label="Dark mode" />
            <Switch label="Disabled" disabled />
            <Switch label="Disabled on" defaultChecked disabled />
          </div>
        }
        code={`import { Switch } from '@caindev/ui'

// Uncontrolled
<Switch label="Notifications" defaultChecked />

// Controlled
const [on, setOn] = useState(false)
<Switch
  label="Dark mode"
  checked={on}
  onCheckedChange={setOn}
/>

// Disabled
<Switch label="Disabled" disabled />`}
        props={[
          {
            name: 'label',
            type: 'string',
            default: '—',
            description: 'Label rendered next to the switch.',
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
            name: 'onCheckedChange',
            type: '(checked: boolean) => void',
            default: '—',
            description: 'Callback when the checked state changes.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disables the switch.',
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
