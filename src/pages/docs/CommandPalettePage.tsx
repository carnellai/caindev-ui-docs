import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Button, CommandPalette, useCommandPalette } from '@caindev/ui'

function CommandPaletteDemo() {
  const { open, setOpen } = useCommandPalette()

  const items = [
    {
      id: 'new-run',
      label: 'New eval run',
      description: 'Start a new evaluation run',
      group: 'Actions',
      keywords: ['create', 'start', 'eval'],
      onSelect: () => setOpen(false),
    },
    {
      id: 'view-traces',
      label: 'View traces',
      description: 'Open the trace explorer',
      group: 'Actions',
      keywords: ['trace', 'span', 'debug'],
      onSelect: () => setOpen(false),
    },
    {
      id: 'export',
      label: 'Export results',
      description: 'Download eval results as CSV',
      group: 'Actions',
      keywords: ['download', 'csv', 'export'],
      onSelect: () => setOpen(false),
    },
    {
      id: 'docs-prompt',
      label: 'Prompt engineering',
      description: 'Go to prompt engineering docs',
      group: 'Docs',
      keywords: ['prompt', 'docs'],
      onSelect: () => setOpen(false),
    },
    {
      id: 'docs-evals',
      label: 'Eval framework',
      description: 'Go to eval framework docs',
      group: 'Docs',
      keywords: ['eval', 'docs'],
      onSelect: () => setOpen(false),
    },
    {
      id: 'settings',
      label: 'Settings',
      description: 'Open workspace settings',
      group: 'Navigation',
      keywords: ['config', 'preferences'],
      onSelect: () => setOpen(false),
    },
  ]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open command palette
      </Button>
      <span style={{ fontSize: '0.8125rem', color: 'var(--color-foreground-subtle)' }}>
        or press ⌘K
      </span>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        items={items}
        placeholder="Search commands..."
      />
    </div>
  )
}

export function CommandPalettePage() {
  return (
    <DocsLayout>
      <DocsPage
        title="CommandPalette"
        description="A keyboard-driven command palette for fast navigation and actions. Opens with ⌘K by default. Supports controlled and uncontrolled open state via open/defaultOpen/onOpenChange, with improved keyboard and ARIA accessibility."
        preview={<CommandPaletteDemo />}
        code={`import { CommandPalette, ThemeProvider, useCommandPalette } from '@caindev/ui'

// Theme setup for portaled content
<ThemeProvider scope="global" appearance="dark" accent="violet" radius="md">
  <App />
</ThemeProvider>

const { open, setOpen } = useCommandPalette() // wires up ⌘K globally

const items = [
  {
    id: 'new-run',
    label: 'New eval run',
    description: 'Start a new evaluation run',
    group: 'Actions',
    keywords: ['create', 'start'],
    onSelect: () => setOpen(false),
  },
  {
    id: 'settings',
    label: 'Settings',
    group: 'Navigation',
    onSelect: () => router.push('/settings'),
  },
]

<CommandPalette
  open={open}
  onOpenChange={setOpen}
  items={items}
  placeholder="Search commands..."
/>

// Uncontrolled
<CommandPalette
  defaultOpen={false}
  items={items}
/>

// With a trigger button instead of ⌘K
<CommandPalette
  items={items}
  trigger={<Button variant="outline">Open</Button>}
/>`}
        props={[
          {
            name: 'items',
            type: 'CommandItem[]',
            default: '—',
            description: 'Array of command items to display and filter.',
          },
          {
            name: 'open',
            type: 'boolean',
            default: '—',
            description: 'Controlled open state.',
          },
          {
            name: 'defaultOpen',
            type: 'boolean',
            default: 'false',
            description: 'Initial open state for uncontrolled usage.',
          },
          {
            name: 'onOpenChange',
            type: '(open: boolean) => void',
            default: '—',
            description: 'Callback when the palette opens or closes.',
          },
          {
            name: 'trigger',
            type: 'React.ReactElement',
            default: '—',
            description: 'Optional trigger element. Use this or useCommandPalette() to control open state.',
          },
          {
            name: 'placeholder',
            type: 'string',
            default: '"Search..."',
            description: 'Search input placeholder text.',
          },
          {
            name: 'emptyText',
            type: 'string',
            default: '"No results found."',
            description: 'Text shown when no items match the query.',
          },
        ]}
      />
    </DocsLayout>
  )
}
