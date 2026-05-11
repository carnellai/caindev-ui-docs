import {
  GuideCode,
  GuidePage,
  GuideSection,
} from '../../../layouts/GuidePage'

export function ThemeShadowsPage() {
  return (
    <GuidePage
      title='Shadows'
      description={
        <>
          Four elevation tokens used by different surface types. All shadows are
          defined as CSS custom properties and respond to appearance.
        </>
      }>
      <GuideSection title='Tokens'>
        <GuideCode>{`--shadow-card     /* Card and panel elevation */
--shadow-popover  /* Popover and dropdown elevation */
--shadow-dialog   /* Dialog and drawer elevation */
--shadow-toast    /* Toast notification elevation */`}</GuideCode>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
          {[
            { token: '--shadow-card', label: 'card' },
            { token: '--shadow-popover', label: 'popover' },
            { token: '--shadow-dialog', label: 'dialog' },
            { token: '--shadow-toast', label: 'toast' },
          ].map(({ token, label }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <div style={{
                width: '80px', height: '60px',
                background: 'var(--color-background-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                boxShadow: `var(${token})`,
              }} />
              <code style={{ fontSize: '0.75rem', color: 'var(--color-foreground-muted)' }}>{label}</code>
            </div>
          ))}
        </div>
        <p className='m-0'>
          Each token is used exclusively by its named surface type. Card uses{' '}
          <code>--shadow-card</code>, Dialog/Drawer use{' '}
          <code>--shadow-dialog</code>, and so on.
        </p>
      </GuideSection>

      <GuideSection title='Using shadow tokens'>
        <p className='m-0'>
          Reference shadow tokens in your own components to match library
          elevation levels.
        </p>
        <GuideCode>{`.my-panel {
  box-shadow: var(--shadow-card);
}

.my-modal {
  box-shadow: var(--shadow-dialog);
}`}</GuideCode>
      </GuideSection>
    </GuidePage>
  )
}
