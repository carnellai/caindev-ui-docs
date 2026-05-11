import { DocsPage } from '../../layouts/DocsPage'
import { MessageThread } from '@caindev/ui'

const messages = [
  { id: '1', role: 'user' as const, content: 'What is the difference between RAG and fine-tuning?', timestamp: '2:30 PM' },
  { id: '2', role: 'assistant' as const, content: 'RAG (Retrieval-Augmented Generation) retrieves relevant context at inference time and passes it to the model. Fine-tuning bakes knowledge into the model weights during training.\n\nRAG is better for frequently changing data, specific document corpora, or when you need source attribution. Fine-tuning is better for style, tone, and stable domain knowledge.', timestamp: '2:30 PM' },
  { id: '3', role: 'user' as const, content: 'When would you combine both?', timestamp: '2:31 PM' },
  { id: '4', role: 'assistant' as const, content: 'Combining both is a powerful pattern. Fine-tune the model on your domain to improve its baseline understanding and tone, then use RAG at inference time to inject current, specific facts it can\'t have learned during training. This gives you both improved reasoning quality and up-to-date, citable information.', timestamp: '2:31 PM' },
]

export function MessageThreadPage() {
  return (
      <DocsPage
        title="MessageThread"
        description="Scrollable container for a sequence of messages. Handles auto-scrolling to the latest message when new content arrives during streaming and supports custom message rendering."
        preview={
          <div style={{ width: '100%', border: '1px solid var(--color-border)', borderRadius: '10px', overflow: 'hidden' }}>
            <MessageThread messages={messages} maxHeight="320px" autoScroll={false} />
          </div>
        }
        code={`import { MessageBubble, MessageThread } from '@caindev/ui'

const messages = [
  { id: '1', role: 'user', content: 'Hello!' },
  { id: '2', role: 'assistant', content: 'Hi! How can I help?' },
  {
    id: '3',
    role: 'assistant',
    content: streamingText,
    streaming: isStreaming,
  },
]

<MessageThread
  messages={messages}
  autoScroll={true}
  maxHeight="480px"
  renderMessage={(message, index) => (
    <MessageBubble key={message.id} {...message} />
  )}
/>`}
        props={[
          { name: 'messages', type: 'Message[]', default: '—', description: 'Array of message objects with id, role, content, and optional streaming/timestamp.' },
          { name: 'autoScroll', type: 'boolean', default: 'true', description: 'Automatically scroll to the bottom when messages change.' },
          { name: 'maxHeight', type: 'string | number', default: '"480px"', description: 'Maximum height before the thread scrolls.' },
          { name: 'renderMessage', type: '(message: MessageThreadMessage, index: number) => React.ReactNode', default: '—', description: 'Custom renderer for each message. Replaces the default MessageBubble.' },
          { name: 'className', type: 'string', default: '—', description: 'CSS class applied to the root wrapper.' },
          { name: 'style', type: 'React.CSSProperties', default: '—', description: 'Additional styles for the container.' },
        ]}
      />
  )
}
