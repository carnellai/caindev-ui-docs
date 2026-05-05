import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'

export type TooltipSide = 'top' | 'bottom' | 'left' | 'right'

export type TooltipProps = {
  content: React.ReactNode
  children: React.ReactElement
  side?: TooltipSide
  delay?: number
  closeDelay?: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Tooltip({
  content,
  children,
  side = 'top',
  delay = 300,
  closeDelay,
  disabled,
  className,
  style,
}: TooltipProps) {
  return (
    <BaseTooltip.Provider delay={delay} closeDelay={closeDelay}>
      <BaseTooltip.Root disabled={disabled}>
        <BaseTooltip.Trigger render={children} />
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner side={side} sideOffset={8}>
            <BaseTooltip.Popup
              className={[
                'data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 data-[instant]:transition-none',
                className,
              ].filter(Boolean).join(' ')}
              style={{
                padding: '6px 10px',
                borderRadius: '6px',
                border: '1px solid var(--color-border-strong)',
                background: 'var(--color-background-elevated)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--color-foreground)',
                transformOrigin: 'var(--transform-origin)',
                transition: 'transform 100ms, opacity 100ms',
                maxWidth: '220px',
                lineHeight: 1.4,
                ...style,
              }}
            >
              {content}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  )
}
