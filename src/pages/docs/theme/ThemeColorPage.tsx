import {
  GuideCode,
  GuidePage,
  GuideSection,
} from '../../../layouts/GuidePage'

export function ThemeColorPage() {
  return (
    <GuidePage
      title='Color'
      description={
        <>
          Color tokens are CSS custom properties that define every surface,
          text, border, accent, and status color in the library. All tokens
          respond to <code>data-appearance</code>, <code>data-accent</code>,
          and <code>data-radius</code> attributes.
        </>
      }>
      <GuideSection title='Token families'>
        <p className='m-0'>
          Tokens are grouped by semantic role. Each family defines a set of
          related custom properties used consistently across all components.
        </p>

        <h3 className='m-0 text-xl text-foreground'>Background</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {[
            { token: '--color-background', label: 'Page / root surface' },
            { token: '--color-background-elevated', label: 'Cards, panels, popovers' },
            { token: '--color-background-subtle', label: 'Hover fills, subtle surfaces' },
          ].map(({ token, label }) => (
            <div key={token} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '6px 10px', borderRadius: '6px',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '6px', flexShrink: 0,
                background: `var(${token})`,
                border: '1px solid var(--color-border)',
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <code style={{ fontSize: '0.8125rem', color: 'var(--color-accent)' }}>{token}</code>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className='m-0 text-xl text-foreground'>Foreground</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {[
            { token: '--color-foreground', label: 'Primary text' },
            { token: '--color-foreground-muted', label: 'Secondary text' },
            { token: '--color-foreground-subtle', label: 'Disabled / low-emphasis text' },
          ].map(({ token, label }) => (
            <div key={token} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '6px 10px', borderRadius: '6px',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '6px', flexShrink: 0,
                background: 'var(--color-background-elevated)',
                border: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: `var(${token})` }}>Aa</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <code style={{ fontSize: '0.8125rem', color: 'var(--color-accent)' }}>{token}</code>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className='m-0 text-xl text-foreground'>Border</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {[
            { token: '--color-border', label: 'Default borders and dividers' },
            { token: '--color-border-strong', label: 'Stronger borders and dividers' },
          ].map(({ token, label }) => (
            <div key={token} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '6px 10px', borderRadius: '6px',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '6px', flexShrink: 0,
                background: 'transparent',
                border: `3px solid var(${token})`,
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <code style={{ fontSize: '0.8125rem', color: 'var(--color-accent)' }}>{token}</code>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className='m-0 text-xl text-foreground'>Accent</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {[
            { token: '--color-accent', label: 'Primary interactive color' },
            { token: '--color-accent-hover', label: 'Hover state' },
            { token: '--color-accent-muted', label: 'Subtle accent-tinted backgrounds' },
            { token: '--color-accent-foreground', label: 'Text and icons on accent' },
          ].map(({ token, label }) => (
            <div key={token} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '6px 10px', borderRadius: '6px',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '6px', flexShrink: 0,
                background: `var(${token})`,
                border: '1px solid var(--color-border)',
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <code style={{ fontSize: '0.8125rem', color: 'var(--color-accent)' }}>{token}</code>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className='m-0 text-xl text-foreground'>Surface controls</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {[
            { token: '--color-surface-control', label: 'Input and control surfaces' },
            { token: '--color-surface-control-disabled', label: 'Disabled controls' },
            { token: '--color-surface-hover', label: 'Generic hover fill' },
            { token: '--color-surface-active', label: 'Pressed / active fill' },
          ].map(({ token, label }) => (
            <div key={token} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '6px 10px', borderRadius: '6px',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '6px', flexShrink: 0,
                background: `var(${token})`,
                border: '1px solid var(--color-border)',
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <code style={{ fontSize: '0.8125rem', color: 'var(--color-accent)' }}>{token}</code>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className='m-0 text-xl text-foreground'>Misc</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {[
            { token: '--color-ring', label: 'Focus ring' },
            { token: '--color-destructive', label: 'Destructive action affordance' },
            { token: '--color-overlay-backdrop', label: 'Dialog and drawer backdrops' },
            { token: '--color-skeleton-highlight', label: 'Skeleton shimmer' },
          ].map(({ token, label }) => (
            <div key={token} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '6px 10px', borderRadius: '6px',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '6px', flexShrink: 0,
                background: `var(${token})`,
                border: '1px solid var(--color-border)',
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <code style={{ fontSize: '0.8125rem', color: 'var(--color-accent)' }}>{token}</code>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-foreground-subtle)' }}>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection title='Status tokens'>
        <p className='m-0'>
          Five status families, each with four tokens. Intents:{' '}
          <code>neutral</code>, <code>info</code>, <code>success</code>,{' '}
          <code>warning</code>, <code>error</code>.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr 1fr',
            gap: '8px', padding: '4px 8px',
          }}>
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Intent</span>
            {['fill', 'foreground', 'muted', 'border'].map(h => (
              <span key={h} style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-subtle)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</span>
            ))}
          </div>
          {['neutral', 'info', 'success', 'warning', 'error'].map(intent => (
            <div key={intent} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr 1fr',
              gap: '8px', alignItems: 'center', padding: '6px 8px',
              borderRadius: '6px',
            }}>
              <code style={{ fontSize: '0.8125rem', color: 'var(--color-foreground-muted)' }}>{intent}</code>
              <div style={{ height: '28px', borderRadius: '4px', background: `var(--color-${intent})`, border: '1px solid var(--color-border)' }} />
              <div style={{ height: '28px', borderRadius: '4px', background: `var(--color-${intent})`, border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: `var(--color-${intent}-foreground)` }}>Aa</span>
              </div>
              <div style={{ height: '28px', borderRadius: '4px', background: `var(--color-${intent}-muted)`, border: '1px solid var(--color-border)' }} />
              <div style={{ height: '28px', borderRadius: '4px', background: 'transparent', border: `3px solid var(--color-${intent}-border)` }} />
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection title='Overriding tokens'>
        <p className='m-0'>
          Redefine any token within any CSS scope. Overrides cascade to all
          nested components.
        </p>
        <GuideCode>{`/* Darker surface for an embedded panel */
.embed-panel {
  --color-background: #080809;
  --color-background-elevated: #111113;
}`}</GuideCode>
        <GuideCode>{`/* Custom accent for a feature section */
[data-section="billing"] {
  --color-accent: #0ea5e9;
  --color-accent-foreground: #ffffff;
}`}</GuideCode>
      </GuideSection>

      <GuideSection title='Component-private colors'>
        <p className='m-0'>
          Some colors are hardcoded inside specific components and are not part
          of the public token surface. Do not attempt to override them via token
          redefinition — behavior is undefined and subject to change.
        </p>
        <ul className='m-0 flex flex-col gap-2 pl-5'>
          <li>Syntax highlight colors inside <code>StructuredOutput</code></li>
          <li>Span-kind and trace status colors inside <code>TraceTree</code></li>
          <li>Agent lifecycle colors inside <code>AgentStep</code></li>
          <li>Risk-level colors inside <code>ApprovalCard</code></li>
        </ul>
      </GuideSection>
    </GuidePage>
  )
}
