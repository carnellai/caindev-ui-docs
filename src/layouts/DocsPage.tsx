import type { ReactNode } from 'react'

type Prop = {
  name: string
  type: string
  default?: string
  description: string
}

type DocsPageProps = {
  title: string
  description: string
  preview: ReactNode
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
    <div className='flex flex-col gap-10'>
      {/* Header */}
      <div className='flex flex-col gap-3'>
        <h1 className='m-0 text-foreground'>{title}</h1>
        <p
          className='m-0 text-base leading-relaxed text-foreground-muted'
          style={{ maxWidth: 540 }}>
          {description}
        </p>
      </div>

      {/* Preview + code */}
      <div className='flex flex-col gap-0'>
        <div
          className='flex items-center justify-center overflow-x-auto border border-border bg-background-elevated'
          style={{
            minHeight: 140,
            padding: 'clamp(24px, 5vw, 48px) clamp(16px, 5vw, 32px)',
            borderRadius: '12px 12px 0 0',
          }}>
          <div style={{ width: '100%', maxWidth: '100%' }}>{preview}</div>
        </div>
        <pre
          className='m-0 overflow-x-auto border border-t-0 border-border bg-background text-foreground-muted'
          style={{
            padding: 'clamp(16px, 3vw, 20px) clamp(16px, 3vw, 24px)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.6875rem, 2vw, 0.8125rem)',
            lineHeight: 1.65,
            borderRadius: '0 0 12px 12px',
          }}>
          <span
            className='mb-4 block text-foreground-subtle'
            style={{ whiteSpace: 'normal', fontSize: '0.75rem' }}>
            Examples use @caindev/ui package imports.
          </span>
          <code>{code}</code>
        </pre>
      </div>

      {/* Props table */}
      {props && props.length > 0 && (
        <div className='flex flex-col gap-4'>
          <h3 className='m-0 text-foreground'>Props</h3>
          <div className='overflow-x-auto rounded-md border border-border'>
            <table
              className='w-full border-collapse text-sm'
              style={{ minWidth: 520 }}>
              <thead>
                <tr className='border-b border-border bg-background text-left'>
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
                  <tr
                    key={p.name}
                    className='border-b border-border last:border-0'>
                    <td className='p-3 align-top'>
                      <code className='font-mono text-[0.8125rem] text-accent'>
                        {p.name}
                      </code>
                    </td>
                    <td className='p-3 align-top'>
                      <code className='font-mono text-[0.8125rem] text-foreground-muted'>
                        {p.type}
                      </code>
                    </td>
                    <td className='p-3 align-top'>
                      <code className='font-mono text-[0.8125rem] text-foreground-subtle'>
                        {p.default ?? '—'}
                      </code>
                    </td>
                    <td className='p-3 align-top leading-relaxed text-foreground-muted'>
                      {p.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
