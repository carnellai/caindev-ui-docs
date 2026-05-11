import { DocsPage } from '../../layouts/DocsPage'
import { Tabs } from '@caindev/ui'

export function TabsPage() {
  return (
      <DocsPage
        title="Tabs"
        description="Switch between related panels. Built on Base UI's Tabs primitive with keyboard navigation, a refined active indicator, and accessible panel association."
        preview={
          <div style={{ width: '100%', maxWidth: '480px' }}>
            <Tabs
              defaultValue="overview"
              tabs={[
                {
                  value: 'overview',
                  label: 'Overview',
                  content: (
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-foreground-muted)', lineHeight: 1.6 }}>
                      Overview content goes here. This panel is associated with the Overview tab via ARIA attributes.
                    </div>
                  ),
                },
                {
                  value: 'components',
                  label: 'Components',
                  content: (
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-foreground-muted)', lineHeight: 1.6 }}>
                      Components content goes here. Keyboard navigation works out of the box — use arrow keys to move between tabs.
                    </div>
                  ),
                },
                {
                  value: 'changelog',
                  label: 'Changelog',
                  content: (
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-foreground-muted)', lineHeight: 1.6 }}>
                      Changelog content goes here.
                    </div>
                  ),
                },
                {
                  value: 'disabled',
                  label: 'Disabled',
                  disabled: true,
                  content: <div />,
                },
              ]}
            />
          </div>
        }
        code={`import { Tabs } from '@caindev/ui'

<Tabs
  defaultValue="overview"
  tabs={[
    {
      value: 'overview',
      label: 'Overview',
      content: <p>Overview content</p>,
    },
    {
      value: 'components',
      label: 'Components',
      content: <p>Components content</p>,
    },
  ]}
/>`}
        props={[
          { name: 'tabs', type: '{ value: string; label: string; content: ReactNode; disabled?: boolean }[]', default: '—', description: 'Array of tab definitions.' },
          { name: 'defaultValue', type: 'string', default: 'First tab', description: 'Initially active tab (uncontrolled).' },
          { name: 'value', type: 'string | null', default: '—', description: 'Controlled active tab. Use null for no active tab.' },
          { name: 'onValueChange', type: '(value: string | null) => void', default: '—', description: 'Callback when active tab changes.' },
        ]}
      />
  )
}
