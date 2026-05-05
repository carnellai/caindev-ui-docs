import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { ToastProvider, useToast } from '../../components/Toast'
import { Button } from '../../components/Button'

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
import { ToastProvider } from '@caindev/ui'

function App() {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
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
}`}
          props={[
            { name: 'toast(title, options?)', type: 'function', default: '—', description: 'Show a default toast. Options: description, variant.' },
            { name: 'success(title, description?)', type: 'function', default: '—', description: 'Show a success toast.' },
            { name: 'error(title, description?)', type: 'function', default: '—', description: 'Show an error toast.' },
            { name: 'warning(title, description?)', type: 'function', default: '—', description: 'Show a warning toast.' },
          ]}
        />
      </ToastProvider>
    </DocsLayout>
  )
}
