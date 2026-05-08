import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { ToolCallCard } from '@caindev/ui'

export function ToolCallCardPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="ToolCallCard"
        description="Experimental prototype expandable display for a single tool invocation. Shows the tool name, status, and optionally the input arguments and output. Supports pending, running, completed, and failed states."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '520px' }}>
            <ToolCallCard
              name="search_web"
              status="success"
              duration={843}
              input={{ query: 'latest transformer architecture papers 2025', max_results: 5 }}
              output={{ results: [{ title: 'FlashAttention-3', url: 'arxiv.org/...' }, { title: 'Mamba-2', url: 'arxiv.org/...' }] }}
              defaultOpen
            />
            <ToolCallCard
              name="read_file"
              status="running"
              input={{ path: '/data/corpus/embeddings.parquet' }}
            />
            <ToolCallCard
              name="execute_sql"
              status="error"
              duration={12}
              input={{ query: 'SELECT * FROM users WHERE id = 42' }}
              output={{ error: 'relation "users" does not exist' }}
            />
            <ToolCallCard
              name="send_email"
              status="pending"
            />
          </div>
        }
        code={`import { ToolCallCard } from '@caindev/ui'

// Running
<ToolCallCard
  name="search_web"
  status="running"
  input={{ query: 'transformer papers 2025' }}
/>

// Completed with output
<ToolCallCard
  name="search_web"
  status="completed"
  duration={843}
  input={{ query: 'transformer papers 2025' }}
  output={{ results: [...] }}
/>

// Failed state
<ToolCallCard
  name="execute_sql"
  status="failed"
  input={{ query: 'SELECT ...' }}
  output={{ error: 'Table not found' }}
/>`}
        props={[
          { name: 'name', type: 'string', default: '—', description: 'The tool function name. Rendered in monospace.' },
          { name: 'status', type: '"pending" | "running" | "completed" | "failed" | "queued" | "cancelled" | "skipped"', default: '—', description: 'Current execution status. "success" and "error" remain compatibility aliases.' },
          { name: 'input', type: 'Record<string, unknown>', default: '—', description: 'Tool input arguments rendered as formatted JSON.' },
          { name: 'output', type: 'unknown', default: '—', description: 'Tool output rendered as formatted JSON.' },
          { name: 'duration', type: 'number', default: '—', description: 'Execution time in milliseconds.' },
          { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Whether the card starts expanded.' },
          { name: 'className', type: 'string', default: '—', description: 'CSS class applied to the root wrapper.' },
          { name: 'style', type: 'React.CSSProperties', default: '—', description: 'Inline styles merged onto the root wrapper.' },
        ]}
      />
    </DocsLayout>
  )
}
