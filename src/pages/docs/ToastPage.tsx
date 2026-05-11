import { DocsPage } from '../../layouts/DocsPage'
import { Button, useToast } from '@caindev/ui'

function ToastDemo() {
  const { toast, success, error, warning } = useToast()
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant="outline" size="sm" onClick={() => toast('Saved')}>
        Default
      </Button>
      <Button variant="outline" size="sm" onClick={() => success('Deployed')}>
        Success
      </Button>
      <Button variant="outline" size="sm" onClick={() => error('Failed')}>
        Error
      </Button>
      <Button variant="outline" size="sm" onClick={() => warning('Rate limit')}>
        Warning
      </Button>
    </div>
  )
}

export function ToastPage() {
  return (
      <DocsPage
        title="Toast"
        description="Floating notification system built on Base UI's Toast primitive. Provided automatically by <Theme>. Add ToastProvider manually only if you are not using <Theme>. Call useToast() from any component to trigger notifications."
        preview={<ToastDemo />}
        code={`import { useToast } from '@caindev/ui'

// useToast() is available anywhere inside <Theme>
// If not using <Theme>, wrap your app with <ToastProvider> manually

function SaveButton() {
  const { toast, success, error, warning, info } = useToast()

  return (
    <Button onClick={async () => {
      try {
        await save()
        success('Saved successfully')
      } catch {
        error('Save failed')
      }
    }}>
      Save
    </Button>
  )
}

// All tone variants
toast('Neutral message')
success('Deployment complete')
error('Something went wrong')
warning('Rate limit approaching')
info('New version available')`}
        props={[
          { name: 'toast(title, options?)', type: 'function', default: '—', description: 'Show a default toast. Options include description and tone.' },
          { name: 'success(title, description?)', type: 'function', default: '—', description: 'Show a success toast.' },
          { name: 'error(title, description?)', type: 'function', default: '—', description: 'Show an error toast.' },
          { name: 'warning(title, description?)', type: 'function', default: '—', description: 'Show a warning toast.' },
          { name: 'ToastProvider className/style', type: 'string / React.CSSProperties', default: '—', description: 'Optional passthrough props for the toast viewport.' },
        ]}
      />
  )
}
