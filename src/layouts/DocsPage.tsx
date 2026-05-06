type Prop = {
  name: string
  type: string
  default?: string
  description: string
}

type DocsPageProps = {
  title: string
  description: string
  preview: React.ReactNode
  code: string
  props?: Prop[]
}

export function DocsPage({
  title,
  description,
  preview,
  code,
  props,
}: DocsPageProps) {
  return (
    <div className='flex flex-col gap-12'>
      {/* Header */}
      <div className='flex flex-col gap-3'>
        <h1 className='m-0 text-foreground'>{title}</h1>
        <p className='m-0 max-w-[540px] text-base leading-relaxed text-foreground-muted'>
          {description}
        </p>
      </div>

      {/* Preview + code */}
      <div className='flex flex-col gap-0'>
        <div className='flex min-h-[160px] items-center justify-center rounded-[12px_12px_0_0] border border-border bg-background-elevated px-8 py-12'>
          {preview}
        </div>
        <pre className='m-0 overflow-x-auto rounded-[0_0_12px_12px] border border-t-0 border-border bg-background px-6 py-5 font-mono text-[0.8125rem] leading-[1.65] text-foreground-muted'>
          <span
            className='mb-4 block text-foreground-subtle'
            style={{ whiteSpace: 'normal' }}>
            Examples use @caindev/ui package imports. This docs app renders the
            linked package dependency.
          </span>
          <code>{code}</code>
        </pre>
      </div>

      {/* Props table */}
      {props && props.length > 0 && (
        <div className='flex flex-col gap-4'>
          <h3 className='m-0 text-foreground'>Props</h3>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='border-b border-border text-left'>
                {['Prop', 'Type', 'Default', 'Description'].map((h) => (
                  <th
                    key={h}
                    className='px-3 py-2 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-foreground-subtle'>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.map((p) => (
                <tr key={p.name} className='border-b border-border'>
                  <td className='p-3 text-foreground'>
                    <code className='font-mono text-[0.8125rem] text-accent'>
                      {p.name}
                    </code>
                  </td>
                  <td className='p-3'>
                    <code className='font-mono text-[0.8125rem] text-foreground-muted'>
                      {p.type}
                    </code>
                  </td>
                  <td className='p-3'>
                    <code className='font-mono text-[0.8125rem] text-foreground-subtle'>
                      {p.default ?? '—'}
                    </code>
                  </td>
                  <td className='p-3 leading-relaxed text-foreground-muted'>
                    {p.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
