import {
  GuideCode,
  GuideNote,
  GuidePage,
  GuideSection,
} from '../../layouts/GuidePage'

export function GettingStartedPage() {
  return (
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

        <GuideSection title='Theme setup'>
          <p className='m-0'>
            Wrap your app root with <code>&lt;Theme&gt;</code>. It manages{' '}
            <code>data-appearance</code>, <code>data-accent</code>, and{' '}
            <code>data-radius</code> attributes on{' '}
            <code>document.documentElement</code>, persists preferences to
            localStorage, and bundles <code>ToastProvider</code> and{' '}
            <code>TooltipProvider</code> — no extra providers needed.
          </p>
          <GuideCode>{`// main.tsx
import '@caindev/ui/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from '@caindev/ui'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme appearance="dark" accent="violet" radius="md">
      <App />
    </Theme>
  </StrictMode>,
)`}</GuideCode>
          <GuideNote>
            <p className='m-0'>
              <strong className='text-foreground'>SSR / static HTML:</strong>{' '}
              Add <code>&lt;ThemeScript&gt;</code> to your{' '}
              <code>&lt;head&gt;</code> before the stylesheet to prevent a
              flash of unstyled content. See the{' '}
              <a
                className='text-accent no-underline hover:text-accent-hover'
                href='/docs/theme/overview'>
                Theme docs
              </a>{' '}
              for details.
            </p>
          </GuideNote>
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
      <Badge tone="success">Passed</Badge>
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
  )
}
