import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Form, FormField, FormInput } from '../../components/Form'
import { Button } from '../../components/Button'
import { Switch } from '../../components/Switch'
import { Alert } from '../../components/Alert'
import { useState } from 'react'

function FormDemo() {
  const [submitted, setSubmitted] = useState<Record<string, string> | null>(null)

  const handleSubmit = (data: FormData) => {
    const obj: Record<string, string> = {}
    data.forEach((v, k) => { obj[k] = String(v) })
    setSubmitted(obj)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '360px', width: '100%' }}>
      {submitted && (
        <Alert variant="success" title="Submitted" onDismiss={() => setSubmitted(null)}>
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
    <DocsLayout>
      <DocsPage
        title="Form"
        description="A form wrapper built on Base UI's Form primitive with Field for accessible label/error associations. Use FormInput for quick text fields or FormField to wrap any input component."
        preview={<FormDemo />}
        code={`import { Form, FormField, FormInput } from '@caindev/ui'
import { Button, Switch } from '@caindev/ui'

<Form onSubmit={(data) => console.log(Object.fromEntries(data))}>
  {/* Quick text field */}
  <FormInput
    name="email"
    label="Email"
    placeholder="you@example.com"
    type="email"
    required
    hint="We'll never share your email."
  />

  {/* Wrap any input component */}
  <FormField name="notifications" label="Notifications">
    <Switch name="notifications" label="Send me updates" />
  </FormField>

  <Button type="submit">Submit</Button>
</Form>`}
        props={[
          { name: 'onSubmit', type: '(data: FormData) => void', default: '—', description: 'Called on valid submission with the FormData object.' },
          { name: 'gap', type: 'string', default: '"16px"', description: 'Gap between form fields.' },
          { name: 'name (FormInput)', type: 'string', default: '—', description: 'Field name used in FormData and for label association.' },
          { name: 'label (FormInput)', type: 'string', default: '—', description: 'Field label.' },
          { name: 'hint (FormInput)', type: 'string', default: '—', description: 'Helper text below the field.' },
          { name: 'required (FormInput)', type: 'boolean', default: 'false', description: 'Marks the field required with a red asterisk.' },
        ]}
      />
    </DocsLayout>
  )
}
