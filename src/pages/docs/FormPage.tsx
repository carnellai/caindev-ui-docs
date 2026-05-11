import { DocsPage } from '../../layouts/DocsPage'
import { Alert, Button, Form, FormField, FormInput, Switch } from '@caindev/ui'
import { useState } from 'react'

function FormDemo() {
  const [submitted, setSubmitted] = useState<Record<string, string> | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const obj: Record<string, string> = {}
    data.forEach((v, k) => { obj[k] = String(v) })
    setSubmitted(obj)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '360px', width: '100%' }}>
      {submitted && (
        <Alert tone="success" title="Submitted" onDismiss={() => setSubmitted(null)}>
          {JSON.stringify(submitted)}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <FormInput name="name" label="Name" placeholder="Alice Johnson" required />
        <FormInput name="email" label="Email" placeholder="alice@example.com" type="email" required hint="We'll never share your email." />
        <FormField name="notifications" label="Notifications">
          <Switch name="notifications" label="Send me product updates" />
        </FormField>
        <Button type="submit" variant="solid">Submit</Button>
      </Form>
    </div>
  )
}

export function FormPage() {
  return (
      <DocsPage
        title="Form"
        description="A form wrapper built on Base UI's Form primitive with Field for accessible label/error associations. Use FormInput for quick text fields or FormField to wrap any input component."
        preview={<FormDemo />}
        code={`import { Form, FormField, FormInput } from '@caindev/ui'
import { Button, Switch } from '@caindev/ui'

<Form
  gap="md"
  onSubmit={(event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(Object.fromEntries(data))
  }}
>
  {/* Quick text field */}
  <FormInput
    name="email"
    label="Email"
    placeholder="you@example.com"
    type="email"
    required
    hint="We'll never share your email."
  />

  <FormInput
    name="username"
    label="Username"
    error="Username is already taken."
  />

  {/* Wrap any input component */}
  <FormField name="notifications" label="Notifications">
    <Switch name="notifications" label="Send me updates" />
  </FormField>

  <Button type="submit">Submit</Button>
</Form>`}
        props={[
          { name: 'onSubmit', type: '(event: React.FormEvent<HTMLFormElement>) => void', default: '—', description: 'Standard form submit handler.' },
          { name: 'gap', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Preset gap between form fields.' },
        ]}
        apiSections={[
          {
            title: 'FormField',
            description:
              'Accessible field wrapper for custom controls such as Switch, Checkbox, Select, or Combobox.',
            props: [
              { name: 'name', type: 'string', default: '—', description: 'Field name passed to Base UI Field.Root.' },
              { name: 'label', type: 'string', default: '—', description: 'Field label.' },
              { name: 'hint', type: 'string', default: '—', description: 'Helper text below the field.' },
              { name: 'error', type: 'React.ReactNode', default: '—', description: 'Marks the field invalid and renders an error message.' },
              { name: 'required', type: 'boolean', default: 'false', description: 'Shows a required indicator.' },
              { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the field root.' },
              { name: 'invalid', type: 'boolean', default: 'false', description: 'Forces invalid state even without an error message.' },
              { name: 'controlId', type: 'string', default: '—', description: 'Optional id used to associate the label with a custom control.' },
              { name: 'hintId', type: 'string', default: '—', description: 'Optional id for aria-describedby helper text wiring.' },
              { name: 'errorId', type: 'string', default: '—', description: 'Optional id for aria-describedby error wiring.' },
            ],
          },
          {
            title: 'FormInput',
            description:
              'Convenience field that composes FormField and Input for common text input cases.',
            props: [
              { name: 'name', type: 'string', default: '—', description: 'Field name used in FormData and for label association.' },
              { name: 'label', type: 'string', default: '—', description: 'Field label.' },
              { name: 'hint', type: 'string', default: '—', description: 'Helper text below the field.' },
              { name: 'error', type: 'string', default: '—', description: 'Marks the field invalid and renders an error message.' },
              { name: 'invalid', type: 'boolean', default: 'false', description: 'Forces invalid state.' },
              { name: 'required', type: 'boolean', default: 'false', description: 'Marks the field required and passes required to the input.' },
              { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input.' },
              { name: 'placeholder', type: 'string', default: '—', description: 'Input placeholder text.' },
              { name: 'type', type: 'string', default: '"text"', description: 'Native input type.' },
            ],
          },
        ]}
      />
  )
}
