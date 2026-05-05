import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { Button } from './Button'

type DialogProps = {
  trigger: React.ReactNode
  title: string
  description?: string
  children?: React.ReactNode
  actions?: React.ReactNode
}

export function Dialog({ trigger, title, description, children, actions }: DialogProps) {
  return (
    <BaseDialog.Root>
      <BaseDialog.Trigger render={<span />} style={{ display: 'inline-flex' }}>
        {trigger}
      </BaseDialog.Trigger>

      <BaseDialog.Portal>
        {/* Backdrop */}
        <BaseDialog.Backdrop
          style={{
            position: 'fixed',
            inset: 0,
            minHeight: '100dvh',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            transition: 'opacity 150ms',
          }}
          className="data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 supports-[-webkit-touch-callout:none]:absolute"
        />

        {/* Popup */}
        <BaseDialog.Popup
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '420px',
            maxWidth: 'calc(100vw - 2rem)',
            borderRadius: '12px',
            border: '1px solid var(--color-border-strong)',
            background: 'var(--color-background-elevated)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)',
            padding: '24px',
            outline: 'none',
            transition: 'transform 150ms, opacity 150ms',
          }}
          className="data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95"
        >
          {/* Header */}
          <div style={{ marginBottom: description || children ? '16px' : '24px' }}>
            <BaseDialog.Title
              style={{
                margin: 0,
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-foreground)',
                letterSpacing: '-0.01em',
              }}
            >
              {title}
            </BaseDialog.Title>
            {description && (
              <BaseDialog.Description
                style={{
                  margin: '6px 0 0',
                  fontSize: '0.875rem',
                  color: 'var(--color-foreground-muted)',
                  lineHeight: 1.55,
                }}
              >
                {description}
              </BaseDialog.Description>
            )}
          </div>

          {/* Body */}
          {children && (
            <div style={{ marginBottom: '24px' }}>{children}</div>
          )}

          {/* Actions */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '8px',
            }}
          >
            {actions ?? (
              <BaseDialog.Close render={<span />}>
                <Button variant="outline">Close</Button>
              </BaseDialog.Close>
            )}
          </div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  )
}

// Export Close so consumers can build custom action rows
export const DialogClose = BaseDialog.Close
