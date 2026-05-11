import { DocsPage } from '../../layouts/DocsPage'
import { Button, Tooltip, TooltipProvider } from '@caindev/ui'

export function TooltipPage() {
  return (
      <DocsPage
        title="Tooltip"
        description="Contextual hint shown on hover or focus. Built on Base UI's Tooltip primitive with delay groups, keyboard support, and animated enter/exit."
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <TooltipProvider delay={200} closeDelay={100}>
              <Tooltip content="This is a tooltip" side="top">
                <Button variant="outline">Hover me (top)</Button>
              </Tooltip>
            </TooltipProvider>
            <Tooltip content="Appears below" side="bottom">
              <Button variant="outline">Hover me (bottom)</Button>
            </Tooltip>
            <Tooltip content="Run the evaluation pipeline against the current dataset version" side="top">
              <Button variant="ghost">Long content</Button>
            </Tooltip>
          </div>
        }
        code={`import { Button, Tooltip, TooltipProvider } from '@caindev/ui'

<Tooltip content="Save your changes" side="top">
  <Button variant="outline">Save</Button>
</Tooltip>

// Custom delay for a subtree
<TooltipProvider delay={0} closeDelay={100}>
  <Tooltip content="Opens immediately">
    <Button>Trigger</Button>
  </Tooltip>
</TooltipProvider>`}
        props={[
          { name: 'content', type: 'React.ReactNode', default: '—', description: 'Content to display in the tooltip.' },
          { name: 'children', type: 'React.ReactElement', default: '—', description: 'Element that triggers the tooltip.' },
          { name: 'side', type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: 'Side the tooltip appears on.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the tooltip.' },
        ]}
        apiSections={[
          {
            title: 'TooltipProvider',
            description:
              'Optional provider for configuring show and close delay for a tooltip subtree.',
            props: [
              { name: 'children', type: 'React.ReactNode', default: '—', description: 'Tooltip subtree to configure.' },
              { name: 'delay', type: 'number', default: 'Base UI default', description: 'Delay in ms before showing tooltips.' },
              { name: 'closeDelay', type: 'number', default: 'Base UI default', description: 'Delay in ms before hiding after pointer leave.' },
            ],
          },
        ]}
      />
  )
}
