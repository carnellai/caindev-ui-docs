import { Menu as BaseMenu } from '@base-ui/react/menu'

export type MenuItem = {
  label: string
  onSelect?: () => void
  disabled?: boolean
  destructive?: boolean
}

export type MenuGroup = {
  items: MenuItem[]
}

export type MenuProps = {
  trigger: React.ReactElement
  groups: MenuGroup[]
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  style?: React.CSSProperties
}

export function Menu({ trigger, groups, open, defaultOpen, onOpenChange, className, style }: MenuProps) {
  return (
    <BaseMenu.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={(nextOpen) => onOpenChange?.(nextOpen)}
    >
      <BaseMenu.Trigger render={trigger} />
      <BaseMenu.Portal>
        <BaseMenu.Positioner sideOffset={6}>
          <BaseMenu.Popup
            className={[
              'data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95',
              className,
            ].filter(Boolean).join(' ')}
            style={{
              minWidth: '180px',
              borderRadius: '8px',
              border: '1px solid var(--color-border-strong)',
              background: 'var(--color-background-elevated)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
              padding: '4px',
              outline: 'none',
              transformOrigin: 'var(--transform-origin)',
              transition: 'transform 120ms, opacity 120ms',
              ...style,
            }}
          >
            {groups.map((group, gi) => (
              <div key={gi}>
                {gi > 0 && (
                  <BaseMenu.Separator
                    style={{
                      height: '1px',
                      background: 'var(--color-border)',
                      margin: '4px 0',
                    }}
                  />
                )}
                {group.items.map((item) => (
                  <BaseMenu.Item
                    key={item.label}
                    label={item.label}
                    disabled={item.disabled}
                    onClick={item.onSelect}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '7px 10px',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      color: item.destructive
                        ? 'var(--color-destructive)'
                        : 'var(--color-foreground-muted)',
                      cursor: 'default',
                      userSelect: 'none',
                      outline: 'none',
                      transition: 'background 80ms, color 80ms',
                    }}
                    className="data-[highlighted]:bg-background-subtle data-[highlighted]:text-foreground data-[disabled]:opacity-40"
                  >
                    {item.label}
                  </BaseMenu.Item>
                ))}
              </div>
            ))}
          </BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  )
}
