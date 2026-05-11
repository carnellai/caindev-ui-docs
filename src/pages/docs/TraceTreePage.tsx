import { DocsPage } from '../../layouts/DocsPage'
import { TraceTree } from '@caindev/ui'
import type { SpanNode } from '@caindev/ui'

const ragTrace: SpanNode[] = [
  {
    id: 'agent-1',
    name: 'rag_pipeline',
    kind: 'agent',
    status: 'completed',
    duration: 2841,
    children: [
      {
        id: 'retrieval-1',
        name: 'vector_search',
        kind: 'retrieval',
        status: 'completed',
        duration: 312,
        query: 'transformer attention mechanism scaled dot product',
        resultCount: 8,
        input: { query: 'transformer attention mechanism', top_k: 8, collection: 'ml-papers' },
        output: { results: [{ id: 'doc_1', score: 0.94, title: 'Attention Is All You Need' }, { id: 'doc_2', score: 0.87, title: 'FlashAttention-2' }] },
      },
      {
        id: 'llm-1',
        name: 'response_generation',
        kind: 'llm',
        status: 'completed',
        duration: 2199,
        model: 'claude-3-5-sonnet-20241022',
        inputTokens: 3847,
        outputTokens: 512,
        cost: 0.01298,
        input: { messages: [{ role: 'system', content: 'You are a helpful assistant...' }, { role: 'user', content: 'Explain attention mechanisms' }] },
        output: { content: 'Attention mechanisms allow models to weigh the importance of different tokens...' },
      },
      {
        id: 'guardrail-1',
        name: 'output_validation',
        kind: 'guardrail',
        status: 'completed',
        duration: 88,
        input: { text: 'Attention mechanisms allow models...' },
        output: { passed: true, flags: [] },
      },
    ],
  },
]

const agentTrace: SpanNode[] = [
  {
    id: 'a1',
    name: 'research_agent',
    kind: 'agent',
    status: 'completed',
    duration: 8420,
    children: [
      {
        id: 'l1',
        name: 'plan_generation',
        kind: 'llm',
        status: 'completed',
        duration: 1240,
        model: 'gpt-4o',
        inputTokens: 512,
        outputTokens: 148,
        cost: 0.0019,
      },
      {
        id: 't1',
        name: 'search_web',
        kind: 'tool',
        status: 'completed',
        duration: 843,
        input: { query: 'langfuse vs braintrust 2025' },
        output: { results: [{ title: 'LLM Observability Platforms 2025', url: '...' }] },
      },
      {
        id: 'r1',
        name: 'embed_results',
        kind: 'embedding',
        status: 'completed',
        duration: 201,
        input: { texts: ['LLM Observability Platforms 2025...'], model: 'text-embedding-3-small' },
        output: { dimensions: 1536, count: 1 },
      },
      {
        id: 'l2',
        name: 'synthesize_response',
        kind: 'llm',
        status: 'completed',
        duration: 3890,
        model: 'gpt-4o',
        inputTokens: 6240,
        outputTokens: 890,
        cost: 0.0354,
      },
      {
        id: 't2',
        name: 'save_result',
        kind: 'tool',
        status: 'failed',
        duration: 12,
        input: { key: 'research/output', value: '...' },
        output: { error: 'Storage quota exceeded' },
      },
    ],
  },
]

export function TraceTreePage() {
  return (
      <DocsPage
        title="TraceTree"
        description="Hierarchical trace visualization for LLM pipelines. TraceTree renders nested spans with kind-aware styling, expandable metadata, and a trace header."
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            <TraceTree
              traceName="RAG pipeline"
              traceId="trace_a3f9bc"
              totalDuration={2841}
              spans={ragTrace}
              defaultOpen={false}
            />
            <TraceTree
              traceName="Research agent"
              traceId="trace_d82e1a"
              totalDuration={8420}
              spans={agentTrace}
              defaultOpen={false}
            />
          </div>
        }
        code={`import { TraceTree } from '@caindev/ui'
import type { SpanNode } from '@caindev/ui'

const spans: SpanNode[] = [
  {
    id: 'agent-1',
    name: 'rag_pipeline',
    kind: 'agent',
    status: 'completed',
    duration: 2841,
    children: [
      {
        id: 'retrieval-1',
        name: 'vector_search',
        kind: 'retrieval',
        status: 'completed',
        duration: 312,
        query: 'transformer attention mechanism',
        resultCount: 8,
        input: { top_k: 8 },
        output: { results: [...] },
      },
      {
        id: 'llm-1',
        name: 'response_generation',
        kind: 'llm',
        status: 'completed',
        duration: 2199,
        model: 'claude-3-5-sonnet-20241022',
        inputTokens: 3847,
        outputTokens: 512,
        cost: 0.01298,
      },
    ],
  },
]

<TraceTree
  traceName="RAG pipeline"
  traceId="trace_a3f9bc"
  totalDuration={2841}
  spans={spans}
/>`}
        props={[
          { name: 'spans', type: 'SpanNode[]', default: '—', description: 'Root-level spans. Nest children inside each SpanNode for hierarchy.' },
          { name: 'SpanNode', type: '{ id: string; name: string; kind: SpanKind; status: OperationStatus; duration?: number; children?: SpanNode[]; ...metadata }', default: '—', description: 'Object shape for each span. Additional metadata keys are rendered when present.' },
          { name: 'traceName', type: 'string', default: '"Trace"', description: 'Human-readable trace name shown in the header.' },
          { name: 'traceId', type: 'string', default: '—', description: 'Trace ID shown in monospace in the header.' },
          { name: 'totalDuration', type: 'number', default: '—', description: 'Total trace duration in ms.' },
          { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Whether spans start expanded.' },
          { name: 'className', type: 'string', default: '—', description: 'CSS class applied to the root wrapper.' },
          { name: 'style', type: 'React.CSSProperties', default: '—', description: 'Inline styles merged onto the root wrapper.' },
        ]}
      />
  )
}
