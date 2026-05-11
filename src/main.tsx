import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@caindev/ui/styles.css'
import './index.css'
import App from './App.tsx'
import { DocsAppearance } from './components/DocsAppearance'

const APPEARANCE_STORAGE_KEY = '@caindev/ui:appearance'

function bootstrapDocsAppearanceSync() {
  document.documentElement.setAttribute('data-accent', 'violet')
  document.documentElement.setAttribute('data-radius', 'md')

  if (typeof window === 'undefined') return

  try {
    let stored = window.localStorage.getItem(APPEARANCE_STORAGE_KEY)
    if (stored !== 'light' && stored !== 'dark' && stored !== 'system') {
      window.localStorage.setItem(APPEARANCE_STORAGE_KEY, 'dark')
      stored = 'dark'
    }

    const resolved =
      stored === 'system' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : stored === 'dark' || stored === 'light'
          ? stored
          : 'dark'

    document.documentElement.setAttribute('data-appearance', resolved)
  } catch {
    document.documentElement.setAttribute('data-appearance', 'dark')
  }
}

bootstrapDocsAppearanceSync()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DocsAppearance>
      <App />
    </DocsAppearance>
  </StrictMode>,
)
