import { DocsPage } from '../../layouts/DocsPage'
import { Button, Dialog, Input } from '@caindev/ui'

export function DialogPage() {
  return (
      <DocsPage
        title="Dialog"
        description="A modal that opens on top of the page. Built on Base UI Dialog with a compound component API. Composes Dialog.Trigger, Dialog.Content, Dialog.Title, Dialog.Description, Dialog.Footer, and Dialog.Close."
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Dialog>
              <Dialog.Trigger asChild><Button variant="outline">Simple</Button></Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Title>Are you sure?</Dialog.Title>
                <Dialog.Description>
                  This action cannot be undone. This will permanently delete your account.
                </Dialog.Description>
                <Dialog.Footer>
                  <Dialog.Close asChild><Button variant="ghost">Cancel</Button></Dialog.Close>
                  <Button variant="solid">Confirm</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog>
            <Dialog>
              <Dialog.Trigger asChild><Button variant="outline">With form</Button></Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Title>Edit profile</Dialog.Title>
                <Dialog.Description>Make changes to your profile here.</Dialog.Description>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
                  <Input label="Name" placeholder="Your name" />
                  <Input label="Email" placeholder="you@example.com" />
                </div>
                <Dialog.Footer>
                  <Dialog.Close asChild><Button variant="ghost">Cancel</Button></Dialog.Close>
                  <Button variant="solid">Save changes</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog>
          </div>
        }
        code={`import { Button, Dialog } from '@caindev/ui'

// Uncontrolled with trigger
<Dialog>
  <Dialog.Trigger asChild>
    <Button variant="outline">Open</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Are you sure?</Dialog.Title>
    <Dialog.Description>This action cannot be undone.</Dialog.Description>
    <Dialog.Footer>
      <Dialog.Close asChild>
        <Button variant="ghost">Cancel</Button>
      </Dialog.Close>
      <Button variant="solid" onClick={handleConfirm}>Confirm</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>

// Controlled (no trigger)
<Dialog open={open} onOpenChange={setOpen}>
  <Dialog.Content>
    <Dialog.Title>Controlled dialog</Dialog.Title>
    <Dialog.Footer>
      <Dialog.Close asChild>
        <Button variant="ghost">Close</Button>
      </Dialog.Close>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>`}
        props={[
          { name: 'open', type: 'boolean', default: '—', description: 'Controlled open state.' },
          { name: 'onOpenChange', type: '(open: boolean) => void', default: '—', description: 'Callback when the dialog opens or closes.' },
          { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Initial open state for uncontrolled usage.' },
          { name: 'modal', type: 'boolean', default: 'true', description: 'Whether the dialog blocks interaction with the rest of the page.' },
          { name: 'Dialog.Trigger asChild', type: 'boolean', default: 'false', description: 'Renders the child element as the trigger instead of a default Button.' },
          { name: 'Dialog.Content className', type: 'string', default: '—', description: 'Merged onto the popup element.' },
          { name: 'Dialog.Title', type: 'ReactNode', default: '—', description: 'Dialog heading. Required for accessibility.' },
          { name: 'Dialog.Description', type: 'ReactNode', default: '—', description: 'Optional description rendered below the title.' },
          { name: 'Dialog.Footer', type: 'ReactNode', default: '—', description: 'Styled flex row for action buttons. Optional.' },
          { name: 'Dialog.Close asChild', type: 'boolean', default: 'false', description: 'Renders the child element as the close trigger.' },
        ]}
      />
  )
}
