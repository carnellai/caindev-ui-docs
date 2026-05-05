import { Tabs as BaseTabs } from '@base-ui/react/tabs'

export type Tab = {
  value: string
  label: string
  content: React.ReactNode
  disabled?: boolean
}

export type TabsProps = {
  tabs: Tab[]
  defaultValue?: string
  value?: string | null
  onValueChange?: (value: string | null) => void
  className?: string
  style?: React.CSSProperties
}

export function Tabs({ tabs, defaultValue, value, onValueChange, className, style }: TabsProps) {
  return (
    <BaseTabs.Root
      defaultValue={defaultValue ?? tabs[0]?.value}
      value={value}
      onValueChange={(nextValue) => onValueChange?.(nextValue)}
      className={className}
      style={{ display: 'flex', flexDirection: 'column', gap: '0', ...style }}
    >
      {/* Tab list */}
      <BaseTabs.List
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          borderBottom: '1px solid var(--color-border)',
          padding: '0 2px',
        }}
      >
        {tabs.map((tab) => (
          <BaseTabs.Tab
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              height: '36px',
              padding: '0 12px',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: 'inherit',
              background: 'none',
              border: 'none',
              cursor: tab.disabled ? 'not-allowed' : 'pointer',
              userSelect: 'none',
              outline: 'none',
              color: 'var(--color-foreground-subtle)',
              transition: 'color 120ms',
            }}
            className="data-[active]:text-foreground data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed hover:text-foreground-muted focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px] focus-visible:rounded-sm"
          >
            {tab.label}
          </BaseTabs.Tab>
        ))}
        {/* Active indicator */}
        <BaseTabs.Indicator
          style={{
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            height: '2px',
            width: 'var(--active-tab-width)',
            transform: 'translateX(var(--active-tab-left))',
            borderRadius: '1px',
            background: 'var(--color-accent)',
            transition: 'width 200ms, transform 200ms',
          }}
        />
      </BaseTabs.List>

      {/* Panels */}
      {tabs.map((tab) => (
        <BaseTabs.Panel
          key={tab.value}
          value={tab.value}
          style={{ padding: '20px 0', outline: 'none' }}
          className="focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-md"
        >
          {tab.content}
        </BaseTabs.Panel>
      ))}
    </BaseTabs.Root>
  )
}
