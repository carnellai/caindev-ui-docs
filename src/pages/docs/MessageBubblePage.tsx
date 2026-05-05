import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { MessageBubble } from '../../components/MessageBubble'
import { useSimulatedStream } from '../../components/StreamingText'

function StreamingAssistant() {
  const { text, streaming } = useSimulatedStream(
    'Sure! Transformers use self-attention to weigh the importance of each token relative to all others in the sequence, allowing the model to capture long-range dependencies without recurrence.',
    22
  )
  return (
    <MessageBubble
      role="assistant"
      content={text}
      streaming={streaming}
      timestamp="Just now"
    />
  )
}

export function MessageBubblePage() {
  return (
    <DocsLayout>
      <DocsPage
        title="MessageBubble"
        description="Experimental prototype single-message presentation for AI conversations. Handles user, assistant, and system roles with distinct visual treatments. Supports streaming content, timestamps, and custom action slots."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '540px' }}>
            <MessageBubble
              role="user"
              content="Can you explain how attention mechanisms work in transformers?"
              timestamp="2:34 PM"
            />
            <StreamingAssistant />
            <MessageBubble
              role="system"
              content="Context window limit approaching — 85% used"
            />
          </div>
        }
        code={`import { MessageBubble } from '@caindev/ui'

<MessageBubble
  role="user"
  content="Can you explain transformers?"
  timestamp="2:34 PM"
/>

<MessageBubble
  role="assistant"
  content={streamingText}
  streaming={isStreaming}
/>

// System message
<MessageBubble
  role="system"
  content="Context window limit approaching"
/>

// With custom actions
<MessageBubble
  role="assistant"
  content="Here is the answer..."
  actions={
    <button onClick={handleCopy}>Copy</button>
  }
/>`}
        props={[
          { name: 'role', type: '"user" | "assistant" | "system"', default: '—', description: 'The role of the message sender. Determines layout direction and visual style.' },
          { name: 'content', type: 'string', default: '—', description: 'The message text content.' },
          { name: 'streaming', type: 'boolean', default: 'false', description: 'Pass true while the assistant is still generating to show the streaming cursor.' },
          { name: 'avatar', type: 'React.ReactNode', default: 'Built-in', description: 'Custom avatar element. Defaults to a user icon or the caindev/ui logomark.' },
          { name: 'timestamp', type: 'string', default: '—', description: 'Timestamp string shown below the message.' },
          { name: 'actions', type: 'React.ReactNode', default: '—', description: 'Action buttons rendered below the message.' },
          { name: 'className', type: 'string', default: '—', description: 'CSS class applied to the root wrapper.' },
          { name: 'style', type: 'React.CSSProperties', default: '—', description: 'Inline styles merged onto the root wrapper.' },
        ]}
      />
    </DocsLayout>
  )
}
