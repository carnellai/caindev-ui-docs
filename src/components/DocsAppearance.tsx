import type { ReactNode } from 'react'
import { useAppearance } from '@caindev/ui'

export function DocsAppearance({ children }: { children: ReactNode }) {
  useAppearance()

  return children
}
