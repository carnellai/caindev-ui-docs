import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Input } from '../../components/Input'

export function InputPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Input"
        description="A text input that integrates with Base UI's Field system for labeling, validation, and accessible error states."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '320px' }}>
            <Input label="Name" placeholder="Enter your name" />
            <Input label="Email" placeholder="you@example.com" hint="We'll never share your email." />
            <Input label="Username" placeholder="johndoe" error="Username is already taken." />
            <Input placeholder="No label" />
          </div>
        }
        code={`import { Input } from '@caindev/ui'

// Basic
<Input label="Name" placeholder="Enter your name" />

// With hint
<Input
  label="Email"
  placeholder="you@example.com"
  hint="We'll never share your email."
/>

// With error
<Input
  label="Username"
  placeholder="johndoe"
  error="Username is already taken."
/>

// Controlled
const [value, setValue] = useState('')
<Input
  label="Search"
  value={value}
  onValueChange={setValue}
/>`}
        props={[
          {
            name: 'label',
            type: 'string',
            default: '—',
            description: 'Label rendered above the input.',
          },
          {
            name: 'hint',
            type: 'string',
            default: '—',
            description: 'Helper text rendered below the input.',
          },
          {
            name: 'error',
            type: 'string',
            default: '—',
            description: 'Error message. Replaces hint and changes border color.',
          },
          {
            name: 'value',
            type: 'string',
            default: '—',
            description: 'Controlled value.',
          },
          {
            name: 'onValueChange',
            type: '(value: string) => void',
            default: '—',
            description: 'Callback when the value changes.',
          },
          {
            name: 'placeholder',
            type: 'string',
            default: '—',
            description: 'Placeholder text.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disables the input.',
          },
        ]}
      />
    </DocsLayout>
  )
}
