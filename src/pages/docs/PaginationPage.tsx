import { useState } from 'react'
import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Pagination } from '@caindev/ui'

export function PaginationPage() {
  const [page, setPage] = useState(1)
  const [page2, setPage2] = useState(5)

  return (
    <DocsLayout>
      <DocsPage
        title="Pagination"
        description="Navigate between pages of data with prev/next buttons and numbered page controls."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Pagination page={page} totalPages={10} onPageChange={setPage} />
            <Pagination page={page2} totalPages={24} onPageChange={setPage2} siblings={2} />
          </div>
        }
        code={`import { Pagination } from '@caindev/ui'
import { useState } from 'react'

const [page, setPage] = useState(1)

<Pagination
  page={page}
  totalPages={24}
  onPageChange={setPage}
/>

// More visible sibling pages
<Pagination
  page={page}
  totalPages={100}
  onPageChange={setPage}
  siblings={2}
/>`}
        props={[
          {
            name: 'page',
            type: 'number',
            default: '—',
            description: 'Current active page (1-indexed).',
          },
          {
            name: 'totalPages',
            type: 'number',
            default: '—',
            description: 'Total number of pages.',
          },
          {
            name: 'onPageChange',
            type: '(page: number) => void',
            default: '—',
            description: 'Callback when the user navigates to a new page.',
          },
          {
            name: 'siblings',
            type: 'number',
            default: '1',
            description: 'Number of page buttons shown on each side of the current page before truncating with ellipsis.',
          },
        ]}
      />
    </DocsLayout>
  )
}
