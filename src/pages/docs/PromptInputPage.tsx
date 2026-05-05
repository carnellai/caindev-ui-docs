import { useState } from 'react'
import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { PromptInput } from '../../components/PromptInput'

function InteractiveDemo() {
  const [messages, setMessages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (value: string) => {
    setMessages(m => [...m, value])
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '520px' }}>
      {messages.length > 0 && (
        <div style={{
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid var(--color-border)',
          background: 'var(--color-background-elevated)',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}>
          {messages.map((m, i) => (
            <p key={i} style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-foreground-muted)' }}>
              You: {m}
            </p>
          ))}
          {loading && (
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-foreground-subtle)', fontStyle: 'italic' }}>
              Thinking…
            </p>
          )}
        </div>
      )}
      <PromptInput
        onSubmit={handleSubmit}
        loading={loading}
        onStop={() => setLoading(false)}
        placeholder="Ask anything… (Enter to send)"
      />
    </div>
  )
}

export function PromptInputPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="PromptInput"
        description="An auto-resizing textarea optimized for AI chat interfaces. Submits on Enter, supports Shift+Enter for newlines, flips to a stop button while loading, and exposes an actions slot for attachments and other controls."
        preview={<InteractiveDemo />}
        code={`import { PromptInput } from '@caindev/ui'

// Uncontrolled
<PromptInput
  onSubmit={(value) => sendMessage(value)}
  loading={isLoading}
  onStop={() => abortStream()}
  placeholder="Ask anything…"
/>

// Controlled
const [input, setInput] = useState('')
<PromptInput
  value={input}
  onValueChange={setInput}
  onSubmit={handleSubmit}
  loading={isLoading}
  onStop={handleStop}
/>

// With action buttons
<PromptInput
  onSubmit={handleSubmit}
  actions={
    <button onClick={handleAttach}>
      <PaperclipIcon />
    </button>
  }
/>`}
        props={[
          { name: 'value', type: 'string', default: '—', description: 'Controlled value. Omit for uncontrolled.' },
          { name: 'onValueChange', type: '(value: string) => void', default: '—', description: 'Callback on input change.' },
          { name: 'onSubmit', type: '(value: string) => void', default: '—', description: 'Called when Enter is pressed or the send button is clicked.' },
          { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a stop button instead of send and disables the textarea.' },
          { name: 'onStop', type: '() => void', default: '—', description: 'Called when the stop button is clicked during loading.' },
          { name: 'placeholder', type: 'string', default: '"Message…"', description: 'Placeholder text.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input entirely.' },
          { name: 'maxRows', type: 'number', default: '8', description: 'Maximum rows before the textarea scrolls internally.' },
          { name: 'actions', type: 'React.ReactNode', default: '—', description: 'Elements rendered in the bottom-left of the input (file upload, etc).' },
        ]}
      />
    </DocsLayout>
  )
}
