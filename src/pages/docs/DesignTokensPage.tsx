import { DocsLayout } from '../../layouts/DocsLayout'
import {
  GuideCode,
  GuideNote,
  GuidePage,
  GuideSection,
} from '../../layouts/GuidePage'

export function DesignTokensPage() {
  return (
    <DocsLayout>
      <GuidePage
        title='Design Tokens'
        description='@caindev/ui exposes CSS custom properties that define visual decisions in the component library. Understanding the token structure shows what can be themed, what is fixed, and where overrides take effect.'>
        <GuideSection title='Token naming'>
          <p className='m-0'>
            Tokens follow a <code>--color-{'{role}'}</code> pattern. There are
            no <code>--cd-</code> prefixes; these are plain CSS custom
            properties intended for use in your own stylesheets as well.
          </p>
          <p className='m-0'>
            All tokens are defined in the compiled stylesheet and are available
            anywhere in the document after <code>@caindev/ui/styles.css</code>{' '}
            is imported.
          </p>
        </GuideSection>

        <GuideSection title='Core color tokens'>
          <h3 className='m-0 text-xl text-foreground'>Background</h3>
          <GuideCode>{`--color-background          /* Page/root surface */
--color-background-elevated /* Cards, panels, popovers */
--color-background-subtle   /* Hover states, subtle fills */`}</GuideCode>

          <h3 className='m-0 text-xl text-foreground'>Foreground</h3>
          <GuideCode>{`--color-foreground          /* Primary text */
--color-foreground-muted    /* Secondary text */
--color-foreground-subtle   /* Disabled or low-emphasis text */`}</GuideCode>

          <h3 className='m-0 text-xl text-foreground'>Border</h3>
          <GuideCode>{`--color-border              /* Default borders and dividers */
--color-border-strong       /* Emphasized borders, focus rings */`}</GuideCode>

          <h3 className='m-0 text-xl text-foreground'>Accent</h3>
          <GuideCode>{`--color-accent              /* Primary interactive color */
--color-accent-hover        /* Hover state for accent fills */
--color-accent-muted        /* Subtle accent-tinted backgrounds */
--color-accent-foreground   /* Text/icons on accent backgrounds */`}</GuideCode>
        </GuideSection>

        <GuideSection title='Surface and control tokens'>
          <p className='m-0'>
            Interactive controls use surface tokens instead of hardcoded
            light/dark fills.
          </p>
          <GuideCode>{`--color-surface-control          /* Inputs and control surfaces */
--color-surface-control-disabled /* Disabled control surfaces */
--color-surface-hover            /* Hover fill */
--color-surface-active           /* Pressed or active fill */`}</GuideCode>
        </GuideSection>

        <GuideSection title='Overlay and effect tokens'>
          <p className='m-0'>
            Overlay and loading effects have dedicated tokens so portal and
            skeleton components work in both appearances.
          </p>
          <GuideCode>{`--color-overlay-backdrop    /* Dialog and drawer backdrops */
--color-skeleton-highlight /* Skeleton shimmer highlight */`}</GuideCode>
        </GuideSection>

        <GuideSection title='Radius and shadow tokens'>
          <h3 className='m-0 text-xl text-foreground'>Radius</h3>
          <GuideCode>{`--radius-sm
--radius-md
--radius-lg`}</GuideCode>

          <p className='m-0'>
            The <code>radius</code> prop on <code>ThemeProvider</code> selects
            a preset scale for these radius tokens.
          </p>
          <h3 className='m-0 text-xl text-foreground'>Shadows</h3>
          <GuideCode>{`--shadow-card
--shadow-popover
--shadow-dialog
--shadow-toast`}</GuideCode>
        </GuideSection>

        <GuideSection title='Status token families'>
          <p className='m-0'>
            Each status intent, <code>info</code>, <code>success</code>,{' '}
            <code>warning</code>, <code>error</code>, and{' '}
            <code>neutral</code>, ships four tokens:
          </p>
          <GuideCode>{`--color-{intent}            /* Background or fill */
--color-{intent}-foreground /* Text on that background */
--color-{intent}-muted      /* Subtle tinted background */
--color-{intent}-border     /* Border at that intent level */`}</GuideCode>
          <p className='m-0'>Example usage in a component:</p>
          <GuideCode>{`.badge[data-variant="success"] {
  background: var(--color-success-muted);
  color: var(--color-success-foreground);
  border-color: var(--color-success-border);
}`}</GuideCode>
        </GuideSection>

        <GuideSection title='What is not a public token'>
          <p className='m-0'>
            Some colors are hardcoded inside specific components and are not
            part of the public token surface in v1. These include:
          </p>
          <ul className='m-0 flex flex-col gap-2 pl-5'>
            <li>Syntax highlight colors inside <code>StructuredOutput</code></li>
            <li>Span-kind and trace status colors inside <code>TraceTree</code></li>
            <li>Agent lifecycle colors inside <code>AgentStep</code></li>
            <li>Risk-level colors inside <code>ApprovalCard</code></li>
          </ul>
          <p className='m-0'>
            These are component-private for now. Do not attempt to override them
            via token redefinition; the behavior is undefined and subject to
            change. They can be promoted to tokens in a future release.
          </p>
        </GuideSection>

        <GuideSection title='Overriding tokens'>
          <p className='m-0'>
            You can redefine any token within any CSS scope.{' '}
            <code>ThemeProvider</code> attributes are just CSS selectors, so you
            can layer overrides on top of them.
          </p>
          <GuideCode>{`/* Darker background for a specific embedded panel */
.embed-panel {
  --color-background: #080809;
  --color-background-elevated: #111113;
}`}</GuideCode>
          <GuideCode>{`/* Custom accent for a single feature section */
[data-section="billing"] {
  --color-accent: #0ea5e9;
  --color-accent-foreground: #ffffff;
}`}</GuideCode>
          <GuideNote>
            <p className='m-0'>
              <strong className='text-foreground'>Specificity note:</strong>{' '}
              Token overrides in more specific selectors win over{' '}
              <code>ThemeProvider</code> output. If you apply overrides on a
              child element, they cascade to all nested components
              automatically.
            </p>
          </GuideNote>
        </GuideSection>
      </GuidePage>
    </DocsLayout>
  )
}
