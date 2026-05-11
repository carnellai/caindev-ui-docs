import { DocsPage } from '../../layouts/DocsPage'
import { Button, Drawer } from '@caindev/ui'

export function DrawerPage() {
  return (
      <DocsPage
        title="Drawer"
        description="A panel that slides in from the edge of the screen with swipe-to-dismiss gestures. Built on Base UI Drawer with a compound component API. Mirrors the Dialog API with an additional side prop on Drawer.Content."
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Drawer>
              <Drawer.Trigger asChild><Button variant="outline">Right panel</Button></Drawer.Trigger>
              <Drawer.Content side="right">
                <Drawer.Title>Trace details</Drawer.Title>
                <Drawer.Description>Inspect the full span trace for this run.</Drawer.Description>
                <Drawer.Footer>
                  <Drawer.Close asChild><Button variant="ghost">Close</Button></Drawer.Close>
                </Drawer.Footer>
              </Drawer.Content>
            </Drawer>
            <Drawer>
              <Drawer.Trigger asChild><Button variant="outline">Bottom sheet</Button></Drawer.Trigger>
              <Drawer.Content side="bottom">
                <Drawer.Title>Run configuration</Drawer.Title>
                <Drawer.Description>Configure parameters for this eval run.</Drawer.Description>
                <Drawer.Footer>
                  <Drawer.Close asChild><Button variant="ghost">Cancel</Button></Drawer.Close>
                  <Button variant="solid">Apply</Button>
                </Drawer.Footer>
              </Drawer.Content>
            </Drawer>
          </div>
        }
        code={`import { Button, Drawer } from '@caindev/ui'

// Right panel
<Drawer>
  <Drawer.Trigger asChild>
    <Button variant="outline">Open</Button>
  </Drawer.Trigger>
  <Drawer.Content side="right">
    <Drawer.Title>Settings</Drawer.Title>
    <Drawer.Description>Configure your preferences.</Drawer.Description>
    <Drawer.Footer>
      <Drawer.Close asChild>
        <Button variant="ghost">Close</Button>
      </Drawer.Close>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer>

// Controlled bottom sheet
<Drawer open={open} onOpenChange={setOpen}>
  <Drawer.Content side="bottom">
    <Drawer.Title>Run configuration</Drawer.Title>
    <Drawer.Footer>
      <Drawer.Close asChild>
        <Button variant="ghost">Cancel</Button>
      </Drawer.Close>
      <Button variant="solid">Apply</Button>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer>`}
        props={[
          { name: 'open', type: 'boolean', default: '—', description: 'Controlled open state.' },
          { name: 'onOpenChange', type: '(open: boolean) => void', default: '—', description: 'Callback when the drawer opens or closes.' },
          { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Initial open state for uncontrolled usage.' },
          { name: 'swipeDirection', type: '"left" | "right" | "up" | "down"', default: '—', description: 'Direction that dismisses the drawer via swipe.' },
          { name: 'Drawer.Content side', type: '"left" | "right" | "top" | "bottom"', default: '"right"', description: 'Which edge the drawer slides in from.' },
          { name: 'Drawer.Trigger asChild', type: 'boolean', default: 'false', description: 'Renders the child element as the trigger.' },
          { name: 'Drawer.Title', type: 'ReactNode', default: '—', description: 'Drawer heading. Required for accessibility.' },
          { name: 'Drawer.Description', type: 'ReactNode', default: '—', description: 'Optional description rendered below the title.' },
          { name: 'Drawer.Footer', type: 'ReactNode', default: '—', description: 'Styled flex row for action buttons. Optional.' },
          { name: 'Drawer.Close asChild', type: 'boolean', default: 'false', description: 'Renders the child element as the close trigger.' },
        ]}
      />
  )
}
