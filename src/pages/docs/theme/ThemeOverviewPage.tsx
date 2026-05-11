import {
  GuideCode,
  GuideNote,
  GuidePage,
  GuideSection,
} from '../../../layouts/GuidePage'

const PROPS_ROWS: [string, string, string, string][] = [
  [
    'appearance',
    '"dark" | "light" | "system"',
    '"dark"',
    'Controls light/dark/system preference. Persisted to localStorage.',
  ],
  [
    'accent',
    'AccentPreset',
    '"violet"',
    'Accent color preset. One of: violet, blue, emerald, crimson, teal, orange.',
  ],
  [
    'radius',
    'RadiusPreset',
    '"md"',
    'Border radius scale. One of: sm, md, lg.',
  ],
  [
    'storageKey',
    'string',
    '"caindev-ui-theme"',
    'localStorage key used for persistence.',
  ],
  [
    'disablePersistence',
    'boolean',
    'false',
    'Skips localStorage read and write entirely.',
  ],
]

const USE_THEME_ROWS: [string, string, string][] = [
  ['appearance', 'Appearance', 'Stored preference: "dark" | "light" | "system"'],
  ['resolvedAppearance', 'ResolvedAppearance', 'Actual resolved value — never "system"'],
  ['accent', 'AccentPreset', 'Current accent preset'],
  ['radius', 'RadiusPreset', 'Current radius preset'],
  ['setAppearance', '(v: Appearance) => void', 'Updates and persists appearance'],
  ['setAccent', '(v: AccentPreset) => void', 'Updates and persists accent'],
  ['setRadius', '(v: RadiusPreset) => void', 'Updates and persists radius'],
  ['toggle', '() => void', 'Cycles between "dark" and "light"'],
]

export function ThemeOverviewPage() {
  return (
    <GuidePage
      title='Theme'
      description={
        <>
          The <code>&lt;Theme&gt;</code> component manages appearance, accent,
          and radius. It writes <code>data-*</code> attributes to{' '}
          <code>document.documentElement</code> and persists preferences to
          localStorage.
        </>
      }>
      <GuideSection title='Setup'>
        <p className='m-0'>
          Wrap your app root with <code>&lt;Theme&gt;</code>. It silently
          bundles <code>ToastProvider</code> and <code>TooltipProvider</code> —
          do not add those separately when using <code>&lt;Theme&gt;</code>.
        </p>
        <GuideCode>{`import '@caindev/ui/styles.css'
import { Theme } from '@caindev/ui'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme appearance="dark" accent="violet" radius="md">
      <App />
    </Theme>
  </StrictMode>,
)`}</GuideCode>
      </GuideSection>

      <GuideSection title='Props'>
        <div className='overflow-x-auto rounded-md border border-border'>
          <table className='w-full border-collapse text-left text-[0.8125rem]'>
            <thead>
              <tr className='border-b border-border bg-background-subtle'>
                <th className='px-3 py-2 font-medium text-foreground'>Prop</th>
                <th className='px-3 py-2 font-medium text-foreground'>Type</th>
                <th className='px-3 py-2 font-medium text-foreground'>Default</th>
                <th className='px-3 py-2 font-medium text-foreground'>Description</th>
              </tr>
            </thead>
            <tbody className='text-foreground-muted'>
              {PROPS_ROWS.map(([prop, type, def, desc]) => (
                <tr key={prop} className='border-b border-border last:border-b-0'>
                  <td className='align-top px-3 py-1.5 font-mono text-accent'>{prop}</td>
                  <td className='align-top px-3 py-1.5 font-mono'>{type}</td>
                  <td className='align-top px-3 py-1.5 font-mono'>{def}</td>
                  <td className='align-top px-3 py-1.5 leading-snug'>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GuideSection>

      <GuideSection title='Accent presets'>
        <p className='m-0'>
          Six built-in accent presets. Each updates{' '}
          <code>--color-accent</code> and its derived tokens.
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
          {[
            { name: 'violet',  color: '#7c3aed' },
            { name: 'blue',    color: '#2563eb' },
            { name: 'emerald', color: '#059669' },
            { name: 'crimson', color: '#dc2626' },
            { name: 'teal',    color: '#0d9488' },
            { name: 'orange',  color: '#ea580c' },
          ].map(({ name, color }) => (
            <div key={name} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '6px',
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: color,
                boxShadow: '0 0 0 3px var(--color-background), 0 0 0 4px var(--color-border)',
              }} />
              <code style={{ fontSize: '0.6875rem', color: 'var(--color-foreground-muted)' }}>{name}</code>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection title='useTheme'>
        <p className='m-0'>
          Read or update the current theme from any component inside{' '}
          <code>&lt;Theme&gt;</code>. Throws with a clear error if called
          outside a <code>&lt;Theme&gt;</code> provider.
        </p>
        <GuideCode>{`import { useTheme } from '@caindev/ui'

function ThemeToggle() {
  const { appearance, resolvedAppearance, accent, setAppearance, setAccent, toggle } = useTheme()
  return (
    <button type="button" onClick={toggle}>
      {appearance} ({resolvedAppearance})
    </button>
  )
}`}</GuideCode>
        <div className='overflow-x-auto rounded-md border border-border'>
          <table className='w-full border-collapse text-left text-[0.8125rem]'>
            <thead>
              <tr className='border-b border-border bg-background-subtle'>
                <th className='px-3 py-2 font-medium text-foreground'>Name</th>
                <th className='px-3 py-2 font-medium text-foreground'>Type</th>
                <th className='px-3 py-2 font-medium text-foreground'>Description</th>
              </tr>
            </thead>
            <tbody className='text-foreground-muted'>
              {USE_THEME_ROWS.map(([name, type, desc]) => (
                <tr key={name} className='border-b border-border last:border-b-0'>
                  <td className='align-top px-3 py-1.5 font-mono text-accent'>{name}</td>
                  <td className='align-top px-3 py-1.5 font-mono'>{type}</td>
                  <td className='align-top px-3 py-1.5 leading-snug'>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GuideSection>

      <GuideSection title='ThemeScript'>
        <p className='m-0'>
          Renders an inline <code>&lt;script&gt;</code> that sets the correct{' '}
          <code>data-*</code> attributes before first paint. Prevents flash of
          unstyled content in SSR and static HTML setups. Place it in your{' '}
          <code>&lt;head&gt;</code> before the stylesheet.
        </p>
        <GuideCode>{`import { ThemeScript } from '@caindev/ui'

// In your HTML <head>, before the stylesheet
<ThemeScript appearance="dark" accent="violet" radius="md" nonce={nonce} />`}</GuideCode>
        <GuideNote>
          <p className='m-0'>
            <code>generateThemeScript(options)</code> returns the raw script
            string for non-React contexts.
          </p>
        </GuideNote>
      </GuideSection>

      <GuideSection title='Without Theme'>
        <p className='m-0'>
          If you are not using <code>&lt;Theme&gt;</code>, set attributes
          directly and add <code>ToastProvider</code> and{' '}
          <code>TooltipProvider</code> manually.
        </p>
        <GuideCode>{`import '@caindev/ui/styles.css'
import { ToastProvider, TooltipProvider } from '@caindev/ui'

document.documentElement.setAttribute('data-appearance', 'dark')
document.documentElement.setAttribute('data-accent', 'violet')
document.documentElement.setAttribute('data-radius', 'md')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </TooltipProvider>
  </StrictMode>,
)`}</GuideCode>
      </GuideSection>
    </GuidePage>
  )
}
