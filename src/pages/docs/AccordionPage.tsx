import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Accordion } from '@caindev/ui'

export function AccordionPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Accordion"
        description="Collapsible content panels with animated height transitions and refined spacing/alignment. Built on Base UI's Accordion primitive with single or multiple open panels."
        preview={
          <div style={{ width: '100%', maxWidth: '480px' }}>
            <Accordion
              items={[
                {
                  value: 'what',
                  trigger: 'What is @caindev/ui?',
                  content: 'A showcase and development environment for a future component library built on Base UI primitives and styled with Tailwind v4.',
                },
                {
                  value: 'base-ui',
                  trigger: 'Why Base UI over Radix?',
                  content: 'Base UI is the next generation of MUI\'s headless component work. It has a cleaner API, better TypeScript types, and first-class Tailwind v4 support through data attributes.',
                },
                {
                  value: 'ai',
                  trigger: 'What are AI primitives?',
                  content: 'Prototype components for AI application UIs — StreamingText for token-by-token rendering, ScoreBar and EvalBadge for evaluation displays, ToolCallCard for collapsible tool invocations, and more.',
                },
                {
                  value: 'disabled',
                  trigger: 'This item is disabled',
                  content: '',
                  disabled: true,
                },
              ]}
            />
          </div>
        }
        code={`import { Accordion } from '@caindev/ui'

<Accordion
  items={[
    {
      value: 'item-1',
      trigger: 'What is this?',
      content: 'An answer to the question.',
    },
    {
      value: 'item-2',
      trigger: 'How does it work?',
      content: 'Another answer.',
    },
  ]}
/>

// Allow multiple open at once
<Accordion multiple items={items} />

// Controlled
const [openItems, setOpenItems] = useState<string[]>(['item-1'])
<Accordion
  items={items}
  value={openItems}
  onValueChange={setOpenItems}
/>`}
        props={[
          { name: 'items', type: '{ value: string; trigger: ReactNode; content: ReactNode; disabled?: boolean }[]', default: '—', description: 'Array of accordion items.' },
          { name: 'multiple', type: 'boolean', default: 'false', description: 'Allow multiple panels open simultaneously.' },
          { name: 'defaultValue', type: 'string[]', default: '[]', description: 'Initially open items. Base UI uses an array even when multiple is false.' },
          { name: 'value', type: 'string[]', default: '—', description: 'Controlled open item values.' },
          { name: 'onValueChange', type: '(value: string[]) => void', default: '—', description: 'Callback when open item values change.' },
        ]}
      />
    </DocsLayout>
  )
}
