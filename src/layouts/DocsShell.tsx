import { Outlet } from 'react-router'
import { DocsLayout } from './DocsLayout'

/** Single layout instance for all /docs/* routes so sidebar scroll persists. */
export function DocsShell() {
  return (
    <DocsLayout>
      <Outlet />
    </DocsLayout>
  )
}
