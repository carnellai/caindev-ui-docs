import { Accordion as BaseAccordion } from '@base-ui/react/accordion'

export type AccordionItem = {
  value: string
  trigger: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
}

export type AccordionValue = string[]

export type AccordionProps = {
  items: AccordionItem[]
  multiple?: boolean
  value?: AccordionValue
  defaultValue?: AccordionValue
  onValueChange?: (value: AccordionValue) => void
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  )
}

export function Accordion({
  items,
  multiple = false,
  value,
  defaultValue,
  onValueChange,
  disabled,
  className,
  style,
}: AccordionProps) {
  return (
    <BaseAccordion.Root
      multiple={multiple}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      className={className}
      style={{ display: 'flex', flexDirection: 'column', width: '100%', ...style }}
    >
      {items.map((item) => (
        <BaseAccordion.Item
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <BaseAccordion.Header style={{ margin: 0 }}>
            <BaseAccordion.Trigger
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                padding: '14px 0',
                background: 'none',
                border: 'none',
                fontFamily: 'inherit',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--color-foreground)',
                textAlign: 'left',
                cursor: 'pointer',
                outline: 'none',
                userSelect: 'none',
              }}
              className="group data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm hover:text-foreground-muted"
            >
              <span>{item.trigger}</span>
              <span
                style={{
                  color: 'var(--color-foreground-subtle)',
                  flexShrink: 0,
                  transition: 'transform 200ms ease',
                }}
                className="group-data-[panel-open]:rotate-45"
              >
                <PlusIcon />
              </span>
            </BaseAccordion.Trigger>
          </BaseAccordion.Header>

          <BaseAccordion.Panel
            style={{
              height: 'var(--accordion-panel-height)',
              overflow: 'hidden',
              transition: 'height 200ms ease',
            }}
            className="data-[starting-style]:h-0 data-[ending-style]:h-0"
          >
            <div
              style={{
                paddingBottom: '14px',
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: 'var(--color-foreground-muted)',
              }}
            >
              {item.content}
            </div>
          </BaseAccordion.Panel>
        </BaseAccordion.Item>
      ))}
    </BaseAccordion.Root>
  )
}
