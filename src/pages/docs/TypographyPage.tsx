import {
  GuideCode,
  GuideNote,
  GuidePage,
  GuideSection,
} from '../../layouts/GuidePage'

export function TypographyPage() {
  return (
      <GuidePage
        title='Typography'
        description='@caindev/ui uses three typefaces, each with a specific role. They are loaded by the consumer; the package does not bundle font files or inject @font-face rules.'>
        <GuideSection title='Typefaces'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='border-b border-border text-left'>
                {['Face', 'Role', 'CSS variable'].map((heading) => (
                  <th
                    key={heading}
                    className='px-3 py-2 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-foreground-subtle'>
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Plus Jakarta Sans', 'UI text, labels, body', '--font-sans'],
                ['Newsreader', 'Editorial, accent, long-form', '--font-serif'],
                [
                  'JetBrains Mono',
                  'Code, monospaced data, keys',
                  '--font-mono',
                ],
              ].map(([face, role, token]) => (
                <tr key={face} className='border-b border-border'>
                  <td className='p-3 text-foreground'>{face}</td>
                  <td className='p-3 text-foreground-muted'>{role}</td>
                  <td className='p-3'>
                    <code className='font-mono text-[0.8125rem] text-foreground-muted'>
                      {token}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </GuideSection>

        <GuideSection title='Loading fonts'>
          <p className='m-0'>
            Add the fonts to your application via your preferred loading
            method. Google Fonts is the fastest way to get started:
          </p>
          <GuideCode>{`<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Newsreader:ital,opsz,wght@0,6..72,300..800;1,6..72,300..800&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>`}</GuideCode>
          <p className='m-0'>
            For production, self-host via{' '}
            <a
              className='text-accent no-underline hover:text-accent-hover'
              href='https://fontsource.org'>
              Fontsource
            </a>{' '}
            to avoid the Google Fonts network dependency:
          </p>
          <GuideCode>{`pnpm add @fontsource-variable/plus-jakarta-sans @fontsource-variable/newsreader @fontsource/jetbrains-mono`}</GuideCode>
          <GuideCode>{`// main.tsx
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource-variable/newsreader'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'`}</GuideCode>
        </GuideSection>

        <GuideSection title='Monospace is first-class'>
          <p className='m-0'>
            JetBrains Mono is not just used for <code>&lt;code&gt;</code>{' '}
            blocks. Components that display structured data, model output,
            cost/token counts, trace IDs, and evaluation scores use{' '}
            <code>font-mono</code> by default. This is intentional:
            monospaced rendering improves legibility for data-dense,
            alignment-sensitive content.
          </p>
        </GuideSection>

        <GuideSection title='Font tokens'>
          <p className='m-0'>
            The package stylesheet references fonts through CSS custom
            properties. If you need to override a typeface globally, redefine
            the variable:
          </p>
          <GuideCode>{`:root {
  --font-mono: 'Berkeley Mono', 'Fira Code', monospace;
}`}</GuideCode>
          <GuideNote>
            <p className='m-0'>
              <strong className='text-foreground'>Note:</strong> Override
              these at <code>:root</code> or within any subtree that carries
              your theme attributes. Overrides inside a narrower selector take
              precedence for that subtree only.
            </p>
          </GuideNote>
        </GuideSection>
      </GuidePage>
  )
}
