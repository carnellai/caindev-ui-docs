import { DocsLayout } from '../../layouts/DocsLayout'
import { GuideNote, GuidePage, GuideSection } from '../../layouts/GuidePage'

export function BlocksPage() {
  return (
    <DocsLayout>
      <GuidePage
        title='Blocks'
        description='Blocks are large, opinionated page-section components for AI product interfaces. They compose multiple components into cohesive interactive surfaces, while individual components remain general-purpose primitives.'>
        <GuideSection title='Status'>
          <p className='m-0'>
            <strong className='text-foreground'>
              Blocks are not yet exported in v1.
            </strong>
          </p>
          <p className='m-0'>
            The Blocks listed below are planned but deferred. They will be
            extracted from real usage in production products (Carnell, Arcora)
            before being published. Inventing Blocks ahead of demonstrated
            usage patterns leads to APIs that require breaking changes, so they
            ship when they are ready.
          </p>
        </GuideSection>

        <GuideSection title='Planned Blocks'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='border-b border-border text-left'>
                <th className='px-3 py-2 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-foreground-subtle'>
                  Block
                </th>
                <th className='px-3 py-2 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-foreground-subtle'>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'ChatBlock',
                  'Scrollable message thread with streaming text, tool call cards, and thinking blocks',
                ],
                [
                  'EvalSummaryBlock',
                  'Evaluation run results with score breakdown, pass/fail distribution, and metadata',
                ],
                [
                  'TraceExplorerBlock',
                  'Nested span tree for LLM traces with latency, token cost, and span-kind indicators',
                ],
                [
                  'AgentMonitorBlock',
                  'Live agent run view with step lifecycle, tool use, and approval flows',
                ],
                [
                  'RunHistoryBlock',
                  'Paginated run log with status, model, cost, and latency columns',
                ],
              ].map(([block, description]) => (
                <tr key={block} className='border-b border-border'>
                  <td className='p-3'>
                    <code className='font-mono text-[0.8125rem] text-accent'>
                      {block}
                    </code>
                  </td>
                  <td className='p-3 text-foreground-muted'>{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GuideSection>

        <GuideSection title='Design intent'>
          <p className='m-0'>
            Blocks are not wrappers around a table or a list. Each Block is a
            self-contained interactive surface: it owns its own layout, internal
            state, and data rendering logic. The contract is a typed props
            interface over structured data, not a slot-based composition
            pattern.
          </p>
          <p className='m-0'>
            When published, Blocks will accept typed data props and emit
            interaction callbacks. They will not own network fetching.
          </p>
        </GuideSection>

        <GuideSection title='Using base components in the meantime'>
          <p className='m-0'>
            If you need to build any of these surfaces now, the underlying
            primitives are available:
          </p>
          <ul className='m-0 flex flex-col gap-2 pl-5'>
            <li>
              <code>StreamingText</code> for streaming LLM output
            </li>
            <li>
              <code>ToolCallCard</code> for displaying tool invocations and
              results
            </li>
            <li>
              <code>ThinkingBlock</code> for chain-of-thought reasoning
              sections
            </li>
            <li>
              <code>AgentStep</code> for lifecycle step display
            </li>
            <li>
              <code>RunStatusBadge</code> for run status indicators
            </li>
            <li>
              <code>StructuredOutput</code> for rendered JSON or structured
              model output
            </li>
          </ul>
          <p className='m-0'>
            Compose these directly. The eventual Block APIs will be informed by
            how these compositions look in practice.
          </p>
          <GuideNote>
            <p className='m-0'>
              <strong className='text-foreground'>Note:</strong> If you are
              building on top of <code>@caindev/ui</code> and have a strong
              opinion about what a Block API should look like based on real
              usage, that feedback is valuable. Blocks should reflect how AI
              product UIs actually work.
            </p>
          </GuideNote>
        </GuideSection>
      </GuidePage>
    </DocsLayout>
  )
}
