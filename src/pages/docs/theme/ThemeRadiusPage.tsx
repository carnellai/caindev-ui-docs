import {
  GuideCode,
  GuidePage,
  GuideSection,
} from '../../../layouts/GuidePage'

const PRESET_ROWS: [string, string, string, string][] = [
  ['sm', '2px', '4px', '6px'],
  ['md', '4px', '6px', '8px'],
  ['lg', '6px', '10px', '14px'],
]

export function ThemeRadiusPage() {
  return (
    <GuidePage
      title='Radius'
      description={
        <>
          Three radius presets — <code>sm</code>, <code>md</code>,{' '}
          <code>lg</code> — controlled by the <code>data-radius</code>{' '}
          attribute. All components that use rounded corners reference these
          tokens.
        </>
      }>
      <GuideSection title='Presets'>
        <p className='m-0'>
          The <code>data-radius</code> attribute selects a preset scale.
          Default is <code>md</code>.
        </p>
        <div className='overflow-x-auto rounded-md border border-border'>
          <table className='w-full border-collapse text-left text-[0.8125rem]'>
            <thead>
              <tr className='border-b border-border bg-background-subtle'>
                <th className='px-3 py-2 font-medium text-foreground'>Preset</th>
                <th className='px-3 py-2 font-medium text-foreground'>--radius-sm</th>
                <th className='px-3 py-2 font-medium text-foreground'>--radius-md</th>
                <th className='px-3 py-2 font-medium text-foreground'>--radius-lg</th>
              </tr>
            </thead>
            <tbody className='text-foreground-muted'>
              {PRESET_ROWS.map(([preset, sm, md, lg]) => (
                <tr key={preset} className='border-b border-border last:border-b-0'>
                  <td className='align-top px-3 py-1.5 font-mono text-accent'>{preset}</td>
                  <td className='align-top px-3 py-1.5 font-mono'>{sm}</td>
                  <td className='align-top px-3 py-1.5 font-mono'>{md}</td>
                  <td className='align-top px-3 py-1.5 font-mono'>{lg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <GuideCode>{`// Via Theme prop
<Theme radius="lg">...</Theme>

// Or directly
document.documentElement.setAttribute('data-radius', 'lg')`}</GuideCode>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '4px' }}>
          {(['sm', 'md', 'lg'] as const).map((preset) => (
            <div key={preset} data-radius={preset} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <div style={{
                width: '80px', height: '80px',
                background: 'var(--color-background-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: '48px', height: '28px',
                  background: 'var(--color-accent)',
                  borderRadius: 'var(--radius-md)',
                }} />
              </div>
              <code style={{ fontSize: '0.75rem', color: 'var(--color-foreground-muted)' }}>{preset}</code>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection title='Using radius tokens'>
        <p className='m-0'>
          Reference the tokens directly in your own components to stay
          consistent with the library's radius scale.
        </p>
        <GuideCode>{`.my-card {
  border-radius: var(--radius-md);
}

.my-pill {
  border-radius: var(--radius-lg);
}`}</GuideCode>
      </GuideSection>
    </GuidePage>
  )
}
