import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Button, Drawer, DrawerClose } from '@caindev/ui'

export function DrawerPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Drawer"
        description="A panel that slides in from the edge of the screen with swipe-to-dismiss gestures. Built on Base UI's Drawer primitive."
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Drawer
              trigger={<Button variant="outline">Bottom sheet</Button>}
              title="Run configuration"
              description="Configure parameters for this eval run."
              side="bottom"
            />
            <Drawer
              trigger={<Button variant="outline">Right panel</Button>}
              title="Trace details"
              description="Inspect the full span trace for this run."
              side="right"
            />
            <Drawer
              trigger={<Button variant="outline">Left panel</Button>}
              title="Navigation"
              side="left"
            />
          </div>
        }
        code={`import { Drawer, DrawerClose } from '@caindev/ui'
import { Button } from '@caindev/ui'

// Bottom sheet (default)
<Drawer
  trigger={<Button variant="outline">Open</Button>}
  title="Run configuration"
  description="Configure parameters for this eval run."
  side="bottom"
/>

// Right panel with custom actions
<Drawer
  trigger={<Button variant="outline">Details</Button>}
  title="Trace details"
  side="right"
  actions={
    <div style={{ display: 'flex', gap: '8px' }}>
      <DrawerClose render={<Button type="button" variant="ghost" />}>
        Cancel
      </DrawerClose>
      <DrawerClose render={<Button type="button" variant="solid" />}>
        Save
      </DrawerClose>
    </div>
  }
>
  <p>Drawer content goes here.</p>
</Drawer>`}
        props={[
          {
            name: 'trigger',
            type: 'React.ReactElement',
            default: '—',
            description: 'Element that opens the drawer when clicked.',
          },
          {
            name: 'title',
            type: 'string',
            default: '—',
            description: 'Drawer title. Required for accessibility.',
          },
          {
            name: 'description',
            type: 'string',
            default: '—',
            description: 'Optional description rendered below the title.',
          },
          {
            name: 'side',
            type: '"bottom" | "right" | "left"',
            default: '"bottom"',
            description: 'Which edge the drawer slides in from.',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            default: '—',
            description: 'Content rendered in the drawer body.',
          },
          {
            name: 'actions',
            type: 'React.ReactNode',
            default: 'Close button',
            description: 'Custom action buttons. Defaults to a single Close button.',
          },
          {
            name: 'open',
            type: 'boolean',
            default: '—',
            description: 'Controlled open state.',
          },
          {
            name: 'onOpenChange',
            type: '(open: boolean) => void',
            default: '—',
            description: 'Callback when the drawer opens or closes.',
          },
        ]}
      />
    </DocsLayout>
  )
}
