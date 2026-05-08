import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { Button, ToastProvider, useToast } from '@caindev/ui'

function ToastDemo() {
  const { toast, success, error, warning } = useToast()
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant="outline" size="sm" onClick={() => toast('Saved', { description: 'Your changes have been saved.' })}>
        Default
      </Button>
      <Button variant="outline" size="sm" onClick={() => success('Deployed', 'Version 1.4.1 is now live.')}>
        Success
      </Button>
      <Button variant="outline" size="sm" onClick={() => error('Failed', 'Could not connect to the server.')}>
        Error
      </Button>
      <Button variant="outline" size="sm" onClick={() => warning('Rate limit', 'You are approaching your quota.')}>
        Warning
      </Button>
    </div>
  )
}

export function ToastPage() {
  return (
    <DocsLayout>
      <ToastProvider>
        <DocsPage
          title="Toast"
          description="Floating notification system built on Base UI's Toast primitive. Wrap your app with ToastProvider once, then call useToast() from any component to trigger notifications."
          preview={<ToastDemo />}
          code={`// 1. Wrap your app root once
import { ThemeProvider, ToastProvider } from '@caindev/ui'

function App() {
  return (
    <ThemeProvider scope="global" appearance="dark" accent="violet" radius="md">
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  )
}

// 2. Call from any component
import { useToast } from '@caindev/ui'

function SaveButton() {
  const { toast, success, error, warning } = useToast()

  return (
    <Button onClick={async () => {
      try {
        await save()
        success('Saved', 'Your changes are live.')
      } catch {
        error('Failed', 'Could not save changes.')
      }
    }}>
      Save
    </Button>
  )
}

toast('Heads up', { description: 'Background sync running.', tone: 'info' })`}
          props={[
            { name: 'toast(title, options?)', type: 'function', default: '—', description: 'Show a default toast. Options include description and tone.' },
            { name: 'success(title, description?)', type: 'function', default: '—', description: 'Show a success toast.' },
            { name: 'error(title, description?)', type: 'function', default: '—', description: 'Show an error toast.' },
            { name: 'warning(title, description?)', type: 'function', default: '—', description: 'Show a warning toast.' },
            { name: 'ToastProvider className/style', type: 'string / React.CSSProperties', default: '—', description: 'Optional passthrough props for the toast viewport.' },
          ]}
        />
      </ToastProvider>
    </DocsLayout>
  )
}
