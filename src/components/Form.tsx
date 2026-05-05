import { Form as BaseForm } from '@base-ui/react/form'
import { Field } from '@base-ui/react/field'
import { Input } from './Input'

// ─── Form ─────────────────────────────────────────────────────────────────────

type FormProps = {
  children: React.ReactNode
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  gap?: number
  style?: React.CSSProperties
}

export function Form({ children, onSubmit, gap = 16, style }: FormProps) {
  return (
    <BaseForm
      onSubmit={onSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap, ...style }}
    >
      {children}
    </BaseForm>
  )
}

// ─── FormField ────────────────────────────────────────────────────────────────

type FormFieldProps = {
  name: string
  label: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}

export function FormField({ name, label, hint, required, children }: FormFieldProps) {
  return (
    <Field.Root name={name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <Field.Label style={{
        fontSize: '0.8125rem',
        fontWeight: 500,
        color: 'var(--color-foreground)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}>
        {label}
        {required && <span style={{ color: '#f87171' }}>*</span>}
      </Field.Label>

      {children}

      {hint && (
        <Field.Description style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>
          {hint}
        </Field.Description>
      )}

      <Field.Error style={{ fontSize: '0.75rem', color: '#f87171' }} />
    </Field.Root>
  )
}

// ─── FormInput ────────────────────────────────────────────────────────────────
// Convenience — FormField + Input wired together

type FormInputProps = {
  name: string
  label: string
  hint?: string
  required?: boolean
  placeholder?: string
  type?: string
}

export function FormInput({ name, label, hint, required, placeholder, type = 'text' }: FormInputProps) {
  return (
    <FormField name={name} label={label} hint={hint} required={required}>
      <Input name={name} placeholder={placeholder} type={type} />
    </FormField>
  )
}
