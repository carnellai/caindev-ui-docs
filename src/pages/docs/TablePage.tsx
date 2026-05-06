import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Badge, EvalBadge, RunStatusBadge, Table } from '@caindev/ui'

type Run = {
  id: string
  model: string
  status: 'completed' | 'running' | 'failed'
  score: number
  tokens: number
  duration: number
}

const runs: Run[] = [
  {
    id: 'run_a3f9bc',
    model: 'claude-3-5-sonnet',
    status: 'completed',
    score: 0.94,
    tokens: 4359,
    duration: 2841,
  },
  {
    id: 'run_d82e1a',
    model: 'gpt-4o',
    status: 'completed',
    score: 0.87,
    tokens: 7130,
    duration: 3210,
  },
  {
    id: 'run_f71c3d',
    model: 'claude-3-5-sonnet',
    status: 'running',
    score: 0,
    tokens: 1240,
    duration: 0,
  },
  {
    id: 'run_b94a2e',
    model: 'gpt-4o-mini',
    status: 'failed',
    score: 0.31,
    tokens: 2180,
    duration: 890,
  },
]

export function TablePage() {
  return (
    <DocsLayout>
      <DocsPage
        title='Table'
        description='Dense data table with typed column definitions, custom cell renderers, keyboard-accessible row click handlers, horizontal overflow handling, and an empty state.'
        preview={
          <Table
            rows={runs}
            keyField='id'
            onRowClick={(r) => console.log(r)}
            columns={[
              {
                key: 'id',
                header: 'Run ID',
                render: (r) => (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: 'var(--color-foreground)',
                    }}>
                    {r.id}
                  </span>
                ),
              },
              {
                key: 'model',
                header: 'Model',
                render: (r) => (
                  <Badge variant='default' size='sm'>
                    {r.model}
                  </Badge>
                ),
              },
              {
                key: 'status',
                header: 'Status',
                render: (r) => <RunStatusBadge status={r.status} size='sm' />,
              },
              {
                key: 'score',
                header: 'Score',
                align: 'right',
                render: (r) =>
                  r.status !== 'running' ? (
                    <EvalBadge
                      verdict={r.score >= 0.8 ? 'pass' : 'fail'}
                      score={r.score}
                      size='sm'
                    />
                  ) : (
                    <span
                      style={{
                        color: 'var(--color-foreground-subtle)',
                        fontSize: '0.75rem',
                      }}>
                      —
                    </span>
                  ),
              },
              {
                key: 'tokens',
                header: 'Tokens',
                align: 'right',
                render: (r) => (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: 'var(--color-foreground-muted)',
                    }}>
                    {r.tokens.toLocaleString()}
                  </span>
                ),
              },
              {
                key: 'duration',
                header: 'Duration',
                align: 'right',
                render: (r) => (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: 'var(--color-foreground-muted)',
                    }}>
                    {r.duration > 0 ? `${r.duration}ms` : '—'}
                  </span>
                ),
              },
            ]}
          />
        }
        code={`import { Table } from '@caindev/ui'

type Run = { id: string; model: string; score: number }

<Table
  rows={runs}
  keyField="id"
  onRowClick={r => navigate(\`/runs/\${r.id}\`)}
  columns={[
    {
      key: 'id',
      header: 'Run ID',
      render: r => <code>{r.id}</code>,
    },
    {
      key: 'score',
      header: 'Score',
      align: 'right',
      render: r => <EvalBadge verdict="pass" score={r.score} />,
    },
  ]}
/>

// Empty state
<Table rows={[]} emptyMessage="No runs yet" columns={columns} keyField="id" />`}
        props={[
          {
            name: 'columns',
            type: 'Column<T>[]',
            default: '—',
            description:
              'Column definitions with key, header, optional render function, and alignment.',
          },
          {
            name: 'rows',
            type: 'T[]',
            default: '—',
            description: 'Array of row data.',
          },
          {
            name: 'keyField',
            type: 'string',
            default: '"id"',
            description: 'Field used as the row key.',
          },
          {
            name: 'onRowClick',
            type: '(row: T) => void',
            default: '—',
            description:
              'Row click handler. Adds pointer cursor, hover highlight, and Enter/Space keyboard activation.',
          },
          {
            name: 'emptyMessage',
            type: 'string',
            default: '"No data"',
            description: 'Message shown when data is empty.',
          },
        ]}
      />
    </DocsLayout>
  )
}
