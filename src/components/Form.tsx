import { Form as BaseForm } from '@base-ui/react/form'
import { Field } from '@base-ui/react/field'
import { Input } from './Input'

// ─── Form ─────────────────────────────────────────────────────────────────────

export type FormProps = {
  children: React.ReactNode
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  gap?: number
  style?: React.CSSProperties
  className?: string
}

export function Form({ children, onSubmit, gap = 16, style, className }: FormProps) {
  return (
    <BaseForm
      className={className}
      onSubmit={onSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap, ...style }}
    >
      {children}
    </BaseForm>
  )
}

// ─── FormField ────────────────────────────────────────────────────────────────

export type FormFieldProps = {
  name: string
  label: string
  hint?: string
  error?: React.ReactNode
  required?: boolean
  disabled?: boolean
  invalid?: boolean
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function FormField({
  name,
  label,
  hint,
  error,
  required,
  disabled,
  invalid,
  children,
  style,
  className,
}: FormFieldProps) {
  const hasError = Boolean(error)

  return (
    <Field.Root
      name={name}
      disabled={disabled}
      invalid={invalid || hasError || undefined}
      className={className}
      style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      <Field.Label style={{
        fontSize: '0.8125rem',
        fontWeight: 500,
        color: 'var(--color-foreground)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}>
        {label}
        {required && <span aria-hidden="true" style={{ color: '#f87171' }}>*</span>}
      </Field.Label>

      {children}

      {hint && (
        <Field.Description style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>
          {hint}
        </Field.Description>
      )}

      <Field.Error match={hasError || undefined} style={{ fontSize: '0.75rem', color: '#f87171' }}>
        {error}
      </Field.Error>
    </Field.Root>
  )
}

// ─── FormInput ────────────────────────────────────────────────────────────────
// Convenience — FormField + Input wired together

export type FormInputProps = {
  name: string
  label: string
  hint?: string
  error?: string
  required?: boolean
  disabled?: boolean
  placeholder?: string
  type?: string
  style?: React.CSSProperties
  className?: string
}

export function FormInput({
  name,
  label,
  hint,
  error,
  required,
  disabled,
  placeholder,
  type = 'text',
  style,
  className,
}: FormInputProps) {
  return (
    <FormField name={name} label={label} hint={hint} error={error} required={required} disabled={disabled}>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        disabled={disabled}
        aria-label={label}
        style={style}
        className={className}
      />
    </FormField>
  )
}
