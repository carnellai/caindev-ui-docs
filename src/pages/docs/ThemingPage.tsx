import { DocsLayout } from '../../layouts/DocsLayout'
import { GuideCode, GuidePage, GuideSection } from '../../layouts/GuidePage'

export function ThemingPage() {
  return (
    <DocsLayout>
      <GuidePage
        title='Theming'
        description='@caindev/ui uses a CSS custom property token system bridged into package utilities. Visual appearance flows through semantic tokens defined at the theme root.'>
        <GuideSection title='How it works'>
          <p className='m-0'>
            <code>ThemeProvider</code> writes <code>data-appearance</code>,{' '}
            <code>data-accent</code>, and <code>data-radius</code> attributes
            to either the wrapper div (<code>scope=&quot;subtree&quot;</code>)
            or <code>document.documentElement</code> (
            <code>scope=&quot;global&quot;</code>). CSS rules keyed to those
            attributes redefine token values.
          </p>
          <GuideCode>{`ThemeProvider props
  -> data-* attributes on DOM
    -> CSS token overrides per attribute
      -> package utilities consume tokens
        -> component class names resolve correctly`}</GuideCode>
          <p className='m-0'>
            There is no React context involved. Token resolution is pure CSS.
          </p>
        </GuideSection>

        <GuideSection title='Token surface'>
          <p className='m-0'>
            The public token surface is a set of CSS custom properties. You can
            override any of these within a scoped selector to customize
            appearance without touching <code>ThemeProvider</code>.
          </p>
          <GuideCode>{`/* Override tokens within a specific scope */
.my-panel {
  --color-background: #0f0f11;
  --color-background-elevated: #1a1a1f;
  --color-border: rgba(255 255 255 / 0.08);
  --color-accent: #7c3aed;
}`}</GuideCode>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='border-b border-border text-left'>
                <th className='px-3 py-2 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-foreground-subtle'>
                  Family
                </th>
                <th className='px-3 py-2 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-foreground-subtle'>
                  Tokens
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Background',
                  '--color-background, --color-background-elevated, --color-background-subtle',
                ],
                [
                  'Foreground',
                  '--color-foreground, --color-foreground-muted, --color-foreground-subtle',
                ],
                ['Border', '--color-border, --color-border-strong'],
                ['Accent', '--color-accent, --color-accent-foreground'],
                ['Radius', '--radius-sm, --radius-md, --radius-lg'],
                [
                  'Status',
                  '--color-{intent}, --color-{intent}-foreground, --color-{intent}-muted, --color-{intent}-border',
                ],
              ].map(([family, tokens]) => (
                <tr key={family} className='border-b border-border'>
                  <td className='p-3 text-foreground'>{family}</td>
                  <td className='p-3'>
                    <code className='font-mono text-[0.8125rem] text-foreground-muted'>
                      {tokens}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='m-0'>
            Status intents: <code>info</code>, <code>success</code>,{' '}
            <code>warning</code>, <code>error</code>, and{' '}
            <code>neutral</code>.
          </p>
        </GuideSection>

        <GuideSection title='Appearance'>
          <p className='m-0'>
            <code>appearance=&quot;dark&quot;</code> is the default.{' '}
            <code>appearance=&quot;light&quot;</code> swaps the background,
            foreground, and border token values via the{' '}
            <code>data-appearance=&quot;light&quot;</code> attribute selector.
          </p>
          <GuideCode>{`<ThemeProvider appearance="light">
  <App />
</ThemeProvider>`}</GuideCode>
        </GuideSection>

        <GuideSection title='Accent'>
          <p className='m-0'>
            The <code>accent</code> prop selects a preset accent color.
            Currently supported: <code>violet</code> (default),{' '}
            <code>blue</code>, <code>emerald</code>, <code>crimson</code>,{' '}
            <code>teal</code>, and <code>orange</code>.
          </p>
          <GuideCode>{`<ThemeProvider accent="emerald">
  <Dashboard />
</ThemeProvider>`}</GuideCode>
          <p className='m-0'>
            <code>--color-accent</code> and{' '}
            <code>--color-accent-foreground</code> update accordingly.
            Components that use these tokens, including buttons, focus rings,
            and active states, reflect the accent automatically.
          </p>
        </GuideSection>

        <GuideSection title='Radius'>
          <p className='m-0'>
            The <code>radius</code> prop selects a preset radius scale.
            Currently supported: <code>sm</code>, <code>md</code> (default),
            and <code>lg</code>.
          </p>
          <GuideCode>{`<ThemeProvider radius="lg">
  <App />
</ThemeProvider>`}</GuideCode>
        </GuideSection>

        <GuideSection title='Scope'>
          <p className='m-0'>
            <code>scope=&quot;global&quot;</code> applies data attributes to{' '}
            <code>document.documentElement</code> and{' '}
            <strong className='text-foreground'>renders no DOM wrapper element</strong>.
            Use it at the app root so portaled content (dialogs, tooltips,
            drawers, menus) inherits theme tokens regardless of where the portal
            mounts.
          </p>
          <GuideCode>{`// Recommended for app roots — no wrapper div rendered
<ThemeProvider scope="global" appearance="dark" accent="violet" radius="md">
  <App />
</ThemeProvider>`}</GuideCode>
          <p className='m-0'>
            <code>scope=&quot;subtree&quot;</code> writes data attributes to a
            wrapper <code>&lt;div&gt;</code> around its children. Use it for
            nested theme overrides — for example, an in-page light-mode preview
            inside a dark layout, or an isolated component sandbox.
          </p>
          <GuideCode>{`// Isolated section with a different theme
<ThemeProvider scope="subtree" appearance="light" accent="emerald">
  <PreviewPanel />
</ThemeProvider>`}</GuideCode>
        </GuideSection>

        <GuideSection title='Deferred palettes'>
          <p className='m-0'>
            Some domain-specific color sets are intentionally not part of the
            public token surface in v1. These are used internally by specific
            components and are not themeable via <code>ThemeProvider</code>:
          </p>
          <ul className='m-0 flex flex-col gap-2 pl-5'>
            <li>Syntax highlighting colors (<code>StructuredOutput</code>)</li>
            <li>Span-kind and status colors (<code>TraceTree</code>)</li>
            <li>Lifecycle step colors (<code>AgentStep</code>)</li>
            <li>Risk/action colors (<code>ApprovalCard</code>)</li>
          </ul>
          <p className='m-0'>
            These can become configurable in a future release once usage
            patterns stabilize.
          </p>
        </GuideSection>
      </GuidePage>
    </DocsLayout>
  )
}
