import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Stack, HStack, VStack } from '../../components/Stack'
import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'

export function StackPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Stack"
        description="Flex-based layout primitive for vertical and horizontal spacing. The most commonly needed layout component — replaces manual flexbox CSS for the vast majority of UI compositions."
        preview={
          <Stack gap="24px">
            <VStack gap="8px">
              <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>VStack (vertical)</span>
              <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'var(--color-background-subtle)', border: '1px solid var(--color-border)' }}>
                <VStack gap="8px">
                  <Badge variant="accent">Item one</Badge>
                  <Badge variant="info">Item two</Badge>
                  <Badge variant="success">Item three</Badge>
                </VStack>
              </div>
            </VStack>
            <VStack gap="8px">
              <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>HStack (horizontal)</span>
              <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'var(--color-background-subtle)', border: '1px solid var(--color-border)' }}>
                <HStack gap="8px" align="center" justify="space-between">
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-foreground)' }}>Label</span>
                  <HStack gap="6px">
                    <Button size="sm" variant="ghost">Cancel</Button>
                    <Button size="sm" variant="solid">Save</Button>
                  </HStack>
                </HStack>
              </div>
            </VStack>
          </Stack>
        }
        code={`import { Stack, HStack, VStack } from '@caindev/ui'

// Vertical stack
<VStack gap="12px">
  <Input label="Name" />
  <Input label="Email" />
  <Button>Submit</Button>
</VStack>

// Horizontal stack
<HStack gap="8px" align="center" justify="space-between">
  <span>Label</span>
  <Button>Action</Button>
</HStack>

// Generic Stack
<Stack direction="horizontal" gap="16px" wrap>
  {items.map(item => <Badge>{item}</Badge>)}
</Stack>`}
        props={[
          { name: 'direction', type: '"vertical" | "horizontal"', default: '"vertical"', description: 'Flex direction.' },
          { name: 'gap', type: 'string | number', default: '"16px"', description: 'Gap between children.' },
          { name: 'align', type: 'CSSProperties["alignItems"]', default: '—', description: 'Align items (cross axis).' },
          { name: 'justify', type: 'CSSProperties["justifyContent"]', default: '—', description: 'Justify content (main axis).' },
          { name: 'wrap', type: 'boolean', default: 'false', description: 'Allow children to wrap.' },
        ]}
      />
    </DocsLayout>
  )
}
