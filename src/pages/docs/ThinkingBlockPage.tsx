import { DocsLayout } from '../../layouts/DocsLayout'
import { DocsPage } from '../../layouts/DocsPage'
import { ThinkingBlock } from '../../components/ThinkingBlock'
import { useSimulatedStream } from '../../components/StreamingText'

function StreamingThinking() {
  const { text, streaming } = useSimulatedStream(
    `The user is asking about the time complexity of merge sort. I should explain both the best and worst case, and compare it to quicksort since that's a common follow-up. The key insight is that merge sort always divides the array in half, giving O(n log n) in all cases, unlike quicksort which degrades to O(n²) with poor pivot selection.`,
    15
  )
  return <ThinkingBlock content={text} streaming={streaming} defaultOpen label="Thinking" />
}

export function ThinkingBlockPage() {
  return (
    <DocsLayout>
      <DocsPage
        title="ThinkingBlock"
        description="Collapsible display for LLM reasoning and chain-of-thought output. Shows an animated pulse while streaming and a word count when complete. Inspired by Claude's extended thinking UI."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '520px' }}>
            <StreamingThinking />
            <ThinkingBlock
              content="The user wants to understand merge sort complexity. I should cover best, average, and worst case — all O(n log n) — and mention the O(n) space overhead compared to in-place algorithms like heapsort."
              streaming={false}
              defaultOpen={false}
              label="Thinking"
            />
          </div>
        }
        code={`import { ThinkingBlock } from '@caindev/ui'

// While streaming
<ThinkingBlock
  content={thinkingText}
  streaming={isThinking}
  defaultOpen={true}
  label="Thinking"
/>

// Complete — collapsed by default
<ThinkingBlock
  content={completedThought}
  streaming={false}
/>`}
        props={[
          { name: 'content', type: 'string', default: '—', description: 'The reasoning text. Pass the growing string while streaming.' },
          { name: 'streaming', type: 'boolean', default: 'false', description: 'Shows the animated pulse indicator when true.' },
          { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Whether the block starts expanded. Defaults to true while streaming.' },
          { name: 'label', type: 'string', default: '"Thinking"', description: 'Label shown in the header.' },
        ]}
      />
    </DocsLayout>
  )
}
