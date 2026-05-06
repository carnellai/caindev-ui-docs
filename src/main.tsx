import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@caindev/ui'
import '@caindev/ui/styles.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider scope='global' appearance='dark' accent='violet' radius='md'>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
