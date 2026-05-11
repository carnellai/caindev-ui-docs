import { DocsPage } from '../../layouts/DocsPage'
import { Button, EmptyState } from '@caindev/ui'

export function EmptyStatePage() {
  return (
      <DocsPage
        title="EmptyState"
        description="Placeholder shown when a list, table, or view has no data. Supports a title, description, custom icon, and an action button. Prefer tone for semantic severity."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '100%' }}>
            <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px' }}>
              <EmptyState
                title="No runs yet"
                description="Run your first evaluation to see results here."
                action={<Button variant="outline" size="sm">Run evaluation</Button>}
              />
            </div>
            <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', marginTop: '12px' }}>
              <EmptyState
                tone="error"
                title="Failed to load traces"
                description="There was an error connecting to the backend. Check your API key and try again."
                action={<Button variant="outline" size="sm">Retry</Button>}
              />
            </div>
          </div>
        }
        code={`import { EmptyState } from '@caindev/ui'
import { Button } from '@caindev/ui'

// Default
<EmptyState
  title="No runs yet"
  description="Run your first evaluation to see results here."
  action={<Button variant="outline">Run evaluation</Button>}
/>

// Error tone (preferred)
<EmptyState
  tone="error"
  title="Failed to load"
  description="Check your connection and try again."
  action={<Button variant="outline">Retry</Button>}
/>

// Custom icon
<EmptyState
  icon={<SearchIcon />}
  title="No results"
  description="Try a different search term."
/>`}
        props={[
          { name: 'title', type: 'string', default: '—', description: 'Main heading text.' },
          { name: 'description', type: 'string', default: '—', description: 'Supporting description text.' },
          { name: 'icon', type: 'React.ReactNode', default: 'Built-in', description: 'Custom icon. Defaults to a generic empty box or error circle.' },
          { name: 'action', type: 'React.ReactNode', default: '—', description: 'Action element — typically a Button.' },
          { name: 'tone', type: '"neutral" | "info" | "success" | "warning" | "error"', default: '"neutral"', description: 'Semantic tone. Controls icon and text color.' },
        ]}
      />
  )
}
