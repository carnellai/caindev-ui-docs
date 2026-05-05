import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { CodeBlock } from '../../components/CodeBlock'

export function CodeBlockPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="CodeBlock"
        description="Code display with a one-click copy button. Supports filename labels, language badges, and optional line numbers. Useful for generated code, setup snippets, and examples."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
            <CodeBlock
              language="tsx"
              filename="agent.tsx"
              code={`import { useChat } from 'ai/react'
import { MessageThread, PromptInput } from '@caindev/ui'

export function Agent() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  return (
    <div>
      <MessageThread messages={messages} />
      <PromptInput
        value={input}
        onValueChange={handleInputChange}
        onSubmit={handleSubmit}
        loading={isLoading}
      />
    </div>
  )
}`}
            />
            <CodeBlock
              language="bash"
              code={`npm run dev`}
            />
          </div>
        }
        code={`import { CodeBlock } from '@caindev/ui'

// Basic
<CodeBlock
  language="typescript"
  code={\`const x = 42\`}
/>

// With filename and line numbers
<CodeBlock
  language="tsx"
  filename="app.tsx"
  showLineNumbers
  code={longCode}
/>`}
        props={[
          { name: 'code', type: 'string', default: '—', description: 'The code string to display.' },
          { name: 'language', type: 'string', default: '—', description: 'Language label shown in the header (e.g. "tsx", "python").' },
          { name: 'filename', type: 'string', default: '—', description: 'Filename shown in the header alongside the language.' },
          { name: 'showLineNumbers', type: 'boolean', default: 'false', description: 'Show line numbers in the left gutter.' },
        ]}
      />
    </DocsLayout>
  )
}
