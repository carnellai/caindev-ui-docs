import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { Button } from './Button'

export type DialogProps = {
  trigger: React.ReactElement
  title: string
  description?: string
  children?: React.ReactNode
  actions?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  style?: React.CSSProperties
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M3 3l8 8M11 3l-8 8" />
    </svg>
  )
}

export function Dialog({
  trigger,
  title,
  description,
  children,
  actions,
  open,
  defaultOpen,
  onOpenChange,
  className,
  style,
}: DialogProps) {
  return (
    <BaseDialog.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={(nextOpen) => onOpenChange?.(nextOpen)}
    >
      <BaseDialog.Trigger render={trigger} />

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
            ...style,
          }}
          className={[
            'data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95',
            className,
          ].filter(Boolean).join(' ')}
        >
          <BaseDialog.Close
            type="button"
            aria-label="Close dialog"
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              padding: 0,
              border: 'none',
              borderRadius: '6px',
              background: 'transparent',
              color: 'var(--color-foreground-subtle)',
              cursor: 'pointer',
              outline: 'none',
            }}
            className="hover:bg-background-subtle hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            <CloseIcon />
          </BaseDialog.Close>

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
              <BaseDialog.Close render={<Button type="button" variant="outline" />}>
                Close
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
