import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Dialog, DialogClose } from '../../components/Dialog'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function DialogPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Dialog"
        description="A modal that opens on top of the page. Built on Base UI's Dialog primitive with focus trapping, scroll locking, and animated enter/exit transitions."
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Dialog
              trigger={<Button variant="outline">Simple dialog</Button>}
              title="Are you sure?"
              description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
              actions={
                <div style={{ display: 'flex', gap: '8px' }}>
                  <DialogClose render={<Button type="button" variant="ghost" />}>
                    Cancel
                  </DialogClose>
                  <DialogClose render={<Button type="button" variant="solid" />}>
                    Confirm
                  </DialogClose>
                </div>
              }
            />
            <Dialog
              trigger={<Button variant="outline">With form</Button>}
              title="Edit profile"
              description="Make changes to your profile here."
              actions={
                <div style={{ display: 'flex', gap: '8px' }}>
                  <DialogClose render={<Button type="button" variant="ghost" />}>
                    Cancel
                  </DialogClose>
                  <DialogClose render={<Button type="button" variant="solid" />}>
                    Save changes
                  </DialogClose>
                </div>
              }
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <Input label="Name" placeholder="Your name" />
                <Input label="Email" placeholder="you@example.com" />
              </div>
            </Dialog>
          </div>
        }
        code={`import { Dialog, DialogClose } from '@caindev/ui'
import { Button } from '@caindev/ui'

// Simple
<Dialog
  trigger={<Button variant="outline">Open</Button>}
  title="Are you sure?"
  description="This action cannot be undone."
/>

// Custom actions
<Dialog
  trigger={<Button>Open</Button>}
  title="Edit profile"
  actions={
    <div style={{ display: 'flex', gap: '8px' }}>
      <DialogClose render={<Button type="button" variant="ghost" />}>
        Cancel
      </DialogClose>
      <DialogClose render={<Button type="button" variant="solid" />}>
        Save
      </DialogClose>
    </div>
  }
>
  <Input label="Name" placeholder="Your name" />
</Dialog>`}
        props={[
          {
            name: 'trigger',
            type: 'React.ReactElement',
            default: '—',
            description: 'Element that opens the dialog when clicked.',
          },
          {
            name: 'title',
            type: 'string',
            default: '—',
            description: 'Dialog title. Required for accessibility.',
          },
          {
            name: 'description',
            type: 'string',
            default: '—',
            description: 'Optional description rendered below the title.',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            default: '—',
            description: 'Content rendered in the dialog body.',
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
            description: 'Callback when the dialog opens or closes.',
          },
        ]}
      />
    </DocsLayout>
  )
}
