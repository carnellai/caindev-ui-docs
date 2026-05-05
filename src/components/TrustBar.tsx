const stats = [
  { value: '40+', label: 'components' },
  { value: 'WAI-ARIA', label: 'accessible' },
  { value: 'Tailwind v4', label: 'native' },
  { value: 'MIT', label: 'license' },
]

export function TrustBar() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}>
      <div className='container-shell'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '48px',
            paddingTop: '14px',
            paddingBottom: '14px',
          }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-foreground)',
                }}>
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-foreground-subtle)',
                }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
