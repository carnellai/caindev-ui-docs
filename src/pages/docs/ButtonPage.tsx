import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Button } from '../../components/Button'

export function ButtonPage() {
  return (
    <DocsLayout>
      <DocsPage
        title='Button'
        description="Triggers an action or event. Built on Base UI's Button primitive — stays focusable when disabled and supports rendering as any element."
        preview={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}>
            <Button variant='solid'>Solid</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='solid' size='sm'>
              Small
            </Button>
            <Button variant='solid' size='lg'>
              Large
            </Button>
            <Button variant='solid' disabled>
              Disabled
            </Button>
          </div>
        }
        code={`import { Button } from '@caindev/ui'

// Variants
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled — stays focusable
<Button disabled>Disabled</Button>

// Loading — keeps focus when disabled
<Button disabled focusableWhenDisabled>
  Loading...
</Button>

// Render as a link
<Button render={<a href="/somewhere" />}>
  Link button
</Button>`}
        props={[
          {
            name: 'variant',
            type: '"solid" | "outline" | "ghost"',
            default: '"solid"',
            description: 'Visual style of the button.',
          },
          {
            name: 'size',
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description: 'Size of the button.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description:
              'Disables the button. Adds data-disabled attribute for styling.',
          },
          {
            name: 'focusableWhenDisabled',
            type: 'boolean',
            default: 'false',
            description:
              'Keeps the button focusable when disabled. Useful for loading states.',
          },
          {
            name: 'render',
            type: 'React.ReactElement',
            default: '<button>',
            description:
              'Render as a different element while keeping button semantics.',
          },
        ]}
      />
    </DocsLayout>
  )
}
