import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Button, Menu } from '@caindev/ui'

export function MenuPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Menu"
        description="A dropdown list of actions. Built on Base UI's Menu primitive with full keyboard navigation, disabled items, and grouped separators."
        preview={
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <Menu
              trigger={<Button variant="outline">Options ↓</Button>}
              groups={[
                {
                  items: [
                    { label: 'View details', onSelect: () => {} },
                    { label: 'Duplicate', onSelect: () => {} },
                    { label: 'Export', onSelect: () => {}, disabled: true },
                  ],
                },
                {
                  items: [
                    { label: 'Archive', onSelect: () => {} },
                    { label: 'Delete', onSelect: () => {}, destructive: true },
                  ],
                },
              ]}
            />
          </div>
        }
        code={`import { Menu, ThemeProvider } from '@caindev/ui'
import { Button } from '@caindev/ui'

// Theme setup for portaled content
<ThemeProvider scope="global" appearance="dark" accent="violet" radius="md">
  <App />
</ThemeProvider>

<Menu
  trigger={<Button variant="outline">Options</Button>}
  groups={[
    {
      items: [
        { label: 'View', onSelect: () => {} },
        { label: 'Duplicate', onSelect: () => {} },
      ],
    },
    {
      items: [
        { label: 'Delete', onSelect: () => {}, destructive: true },
      ],
    },
  ]}
/>`}
        props={[
          { name: 'trigger', type: 'React.ReactElement', default: '—', description: 'Element that opens the menu.' },
          { name: 'groups', type: '{ items: MenuItem[] }[]', default: '—', description: 'Groups of items separated by dividers.' },
          { name: 'open', type: 'boolean', default: '—', description: 'Controlled open state.' },
          { name: 'onOpenChange', type: '(open: boolean) => void', default: '—', description: 'Callback when the menu opens or closes.' },
        ]}
      />
    </DocsLayout>
  )
}
