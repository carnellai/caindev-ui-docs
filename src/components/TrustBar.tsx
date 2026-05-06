const stats = [
  { value: '40+', label: 'components' },
  { value: 'WAI-ARIA', label: 'accessible' },
  { value: 'Tailwind v4', label: 'native' },
  { value: 'MIT', label: 'license' },
]

export function TrustBar() {
  return (
    <div className='border-y border-border'>
      <div className='container-shell'>
        <div className='flex items-center justify-center gap-12 py-3.5'>
          {stats.map((stat, i) => (
            <div
              key={i}
              className='flex items-baseline gap-1.5'>
              <span className='text-sm font-semibold text-foreground'>
                {stat.value}
              </span>
              <span className='text-sm text-foreground-subtle'>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
