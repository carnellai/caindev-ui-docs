import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { StreamingText, useSimulatedStream } from '../../components/StreamingText'

const DEMO_TEXT = `The transformer architecture introduced in "Attention is All You Need" fundamentally changed how we process sequential data. By replacing recurrence with self-attention, it enables parallel computation across all positions in a sequence — making training dramatically faster and enabling much longer context windows than previous approaches.`

function StreamingDemo() {
  const { text, streaming } = useSimulatedStream(DEMO_TEXT, 20)
  return (
    <div style={{ maxWidth: '520px' }}>
      <p style={{
        margin: 0,
        fontSize: '0.9375rem',
        lineHeight: 1.65,
        color: 'var(--color-foreground)',
      }}>
        <StreamingText text={text} streaming={streaming} />
      </p>
    </div>
  )
}

export function StreamingTextPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="StreamingText"
        description="Experimental prototype renderer for text as it streams from an LLM with an animated blinking cursor. For real token streams, pass the growing text string as it arrives, not a complete string to animate."
        preview={<StreamingDemo />}
        code={`import { StreamingText, useSimulatedStream } from '@caindev/ui'

// With a real stream — pass growing text from useChat/useCompletion
function Response({ text, isStreaming }) {
  return (
    <p>
      <StreamingText text={text} streaming={isStreaming} />
    </p>
  )
}

// Simulated stream for demos and testing
function Demo() {
  const { text, streaming } = useSimulatedStream(
    'The answer is 42.',
    20 // ms between chunks
  )
  return <StreamingText text={text} streaming={streaming} />
}`}
        props={[
          { name: 'text', type: 'string', default: '—', description: 'The text content to display. Pass the full accumulated string, not individual chunks.' },
          { name: 'streaming', type: 'boolean', default: 'false', description: 'When true, shows the blinking cursor at the end of the text.' },
          { name: 'className', type: 'string', default: '—', description: 'CSS class applied to the span wrapper.' },
          { name: 'style', type: 'React.CSSProperties', default: '—', description: 'Inline styles applied to the span wrapper.' },
        ]}
      />
    </DocsLayout>
  )
}
