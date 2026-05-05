import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Tooltip } from '../../components/Tooltip'
import { Button } from '../../components/Button'

export function TooltipPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="Tooltip"
        description="Contextual hint shown on hover or focus. Built on Base UI's Tooltip primitive with delay groups, keyboard support, and animated enter/exit."
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Tooltip content="This is a tooltip" side="top">
              <Button variant="outline">Hover me (top)</Button>
            </Tooltip>
            <Tooltip content="Appears below" side="bottom">
              <Button variant="outline">Hover me (bottom)</Button>
            </Tooltip>
            <Tooltip content="Run the evaluation pipeline against the current dataset version" side="top">
              <Button variant="ghost">Long content</Button>
            </Tooltip>
          </div>
        }
        code={`import { Tooltip } from '@caindev/ui'
import { Button } from '@caindev/ui'

<Tooltip content="Save your changes" side="top">
  <Button variant="outline">Save</Button>
</Tooltip>

// Custom delay
<Tooltip content="Opens immediately" delay={0}>
  <Button>Trigger</Button>
</Tooltip>`}
        props={[
          { name: 'content', type: 'React.ReactNode', default: '—', description: 'Content to display in the tooltip.' },
          { name: 'children', type: 'React.ReactElement', default: '—', description: 'Element that triggers the tooltip.' },
          { name: 'side', type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: 'Side the tooltip appears on.' },
          { name: 'delay', type: 'number', default: '300', description: 'Delay in ms before showing the tooltip.' },
        ]}
      />
    </DocsLayout>
  )
}
