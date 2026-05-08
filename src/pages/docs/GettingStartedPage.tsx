import { DocsLayout } from '../../layouts/DocsLayout'
import {
  GuideCode,
  GuideNote,
  GuidePage,
  GuideSection,
} from '../../layouts/GuidePage'

export function GettingStartedPage() {
  return (
    <DocsLayout>
      <GuidePage
        title='Getting Started'
        description={
          <>
            <code>@caindev/ui</code> is a React 19 component library built on{' '}
            <a
              className='text-accent no-underline hover:text-accent-hover'
              href='https://base-ui.com'>
              Base UI
            </a>{' '}
            primitives. It ships a compiled Tailwind stylesheet and typed ESM
            components with no Tailwind configuration required on the consumer
            side.
          </>
        }>
        <GuideSection title='Installation'>
          <p className='m-0'>
            Install the package from npm:
          </p>
          <GuideCode>{`# pnpm
pnpm add @caindev/ui

# npm
npm install @caindev/ui`}</GuideCode>
        </GuideSection>

        <GuideSection title='Importing the stylesheet'>
          <p className='m-0'>
            Import the compiled stylesheet once at your application entry point.
            This is the only package stylesheet import you need; it includes
            component styles and CSS custom property definitions.
          </p>
          <GuideCode>{`// main.tsx
import '@caindev/ui/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`}</GuideCode>
          <GuideNote>
            <p className='m-0'>
              <strong className='text-foreground'>Note:</strong>{' '}
              <code>@caindev/ui/styles.css</code> does not include a Preflight
              or global reset. Your existing base styles are unaffected.
            </p>
          </GuideNote>
        </GuideSection>

        <GuideSection title='ThemeProvider'>
          <p className='m-0'>
            Wrap your application with <code>ThemeProvider</code> to apply theme
            attributes. The recommended setup uses{' '}
            <code>scope=&quot;global&quot;</code> at the app root — it applies
            theme attributes to <code>document.documentElement</code> so
            portaled content (dialogs, tooltips, drawers) inherits them
            correctly.{' '}
            <code>scope=&quot;global&quot;</code> renders no DOM wrapper element.
          </p>
          <GuideCode>{`import { ThemeProvider } from '@caindev/ui'

// Recommended: global scope at app root — no wrapper element rendered
<ThemeProvider scope="global" appearance="dark" accent="violet" radius="md">
  <App />
</ThemeProvider>

// Subtree scope — wraps children in a div, useful for isolated sections
<ThemeProvider appearance="light" accent="emerald" radius="sm">
  <MarketingSection />
</ThemeProvider>`}</GuideCode>
          <p className='m-0'>
            Defaults: <code>scope=&quot;subtree&quot;</code>,{' '}
            <code>appearance=&quot;dark&quot;</code>,{' '}
            <code>accent=&quot;violet&quot;</code>, and{' '}
            <code>radius=&quot;md&quot;</code>.
          </p>
        </GuideSection>

        <GuideSection title='Using components'>
          <p className='m-0'>
            All components are available from the top-level import.
          </p>
          <GuideCode>{`import { Button, Badge, Switch } from '@caindev/ui'

export function Example() {
  return (
    <div>
      <Button variant="solid">Run evaluation</Button>
      <Badge variant="success">Passed</Badge>
      <Switch />
    </div>
  )
}`}</GuideCode>
        </GuideSection>

        <GuideSection title='No consumer Tailwind config required'>
          <p className='m-0'>
            The package stylesheet is compiled ahead of time. You do not need to
            scan <code>@caindev/ui</code> in your content paths or install
            Tailwind in your consuming project. If your project already uses
            Tailwind v4, the two stylesheets coexist without requiring package
            scanning.
          </p>
        </GuideSection>
      </GuidePage>
    </DocsLayout>
  )
}
