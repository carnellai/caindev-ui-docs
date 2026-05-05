import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Menu } from '../../components/Menu'
import { Button } from '../../components/Button'

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
                    { label: 'Export', onSelect: () => {} },
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
        code={`import { Menu } from '@caindev/ui'
import { Button } from '@caindev/ui'

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
        ]}
      />
    </DocsLayout>
  )
}
