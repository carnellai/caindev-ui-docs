import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Popover, PopoverClose } from '../../components/Popover'
import { Button } from '../../components/Button'
import { Switch } from '../../components/Switch'

export function PopoverPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Popover"
        description="An accessible popup anchored to a trigger element. Built on Base UI's Popover primitive with focus management, keyboard dismissal, and animated transitions."
        preview={
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
            <Popover
              trigger={<Button variant="outline">Simple popover</Button>}
              title="Notifications"
              description="You're all caught up. No new notifications."
              side="bottom"
            />

            <Popover
              trigger={<Button variant="outline">With content</Button>}
              title="Display settings"
              side="bottom"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Switch label="Streaming mode" defaultChecked />
                <Switch label="Show tool calls" />
                <Switch label="Eval scoring" defaultChecked />
                <div style={{ marginTop: '4px', display: 'flex', justifyContent: 'flex-end' }}>
                  <PopoverClose render={<span />}>
                    <Button variant="solid" size="sm">Save</Button>
                  </PopoverClose>
                </div>
              </div>
            </Popover>

            <Popover
              trigger={<Button variant="outline">Top</Button>}
              title="Appears above"
              description="This popover opens upward from the trigger."
              side="top"
            />
          </div>
        }
        code={`import { Popover, PopoverClose } from '@caindev/ui'
import { Button } from '@caindev/ui'

// Simple
<Popover
  trigger={<Button variant="outline">Open</Button>}
  title="Notifications"
  description="You're all caught up."
/>

// With custom content
<Popover
  trigger={<Button>Settings</Button>}
  title="Display settings"
>
  <Switch label="Streaming mode" defaultChecked />
  <Switch label="Show tool calls" />
  <PopoverClose render={<span />}>
    <Button size="sm">Save</Button>
  </PopoverClose>
</Popover>

// Side
<Popover
  trigger={<Button>Top</Button>}
  title="Opens above"
  side="top"
/>`}
        props={[
          { name: 'trigger', type: 'React.ReactElement', default: '—', description: 'Element that opens the popover.' },
          { name: 'title', type: 'string', default: '—', description: 'Popover title. Used as the accessible name.' },
          { name: 'description', type: 'string', default: '—', description: 'Optional description text.' },
          { name: 'children', type: 'React.ReactNode', default: '—', description: 'Custom content rendered below title/description.' },
          { name: 'side', type: '"top" | "bottom" | "left" | "right"', default: '"bottom"', description: 'Side the popover anchors to.' },
        ]}
      />
    </DocsLayout>
  )
}
