import { Popover as BasePopover } from '@base-ui/react/popover'

type PopoverProps = {
  trigger: React.ReactElement
  title?: string
  description?: string
  children?: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
}

export function Popover({ trigger, title, description, children, side = 'bottom' }: PopoverProps) {
  return (
    <BasePopover.Root>
      <BasePopover.Trigger render={trigger} />

      <BasePopover.Portal>
        <BasePopover.Positioner side={side} sideOffset={8}>
          <BasePopover.Popup
            style={{
              width: '280px',
              borderRadius: '10px',
              border: '1px solid var(--color-border-strong)',
              background: 'var(--color-background-elevated)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
              padding: '16px',
              outline: 'none',
              transformOrigin: 'var(--transform-origin)',
              transition: 'transform 150ms, opacity 150ms',
            }}
            className="data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95"
          >
            {title && (
              <BasePopover.Title
                style={{
                  margin: '0 0 4px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-foreground)',
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </BasePopover.Title>
            )}

            {description && (
              <BasePopover.Description
                style={{
                  margin: '0 0 12px',
                  fontSize: '0.8125rem',
                  lineHeight: 1.55,
                  color: 'var(--color-foreground-muted)',
                }}
              >
                {description}
              </BasePopover.Description>
            )}

            {children}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  )
}

export const PopoverClose = BasePopover.Close
