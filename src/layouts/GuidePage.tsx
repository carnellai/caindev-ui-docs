import type { ReactNode } from 'react'

type GuidePageProps = {
  title: string
  description: ReactNode
  children: ReactNode
}

type GuideSectionProps = {
  title: string
  children: ReactNode
}

export function GuidePage({ title, description, children }: GuidePageProps) {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-3'>
        <h1 className='m-0 text-foreground'>{title}</h1>
        <p className='m-0 max-w-[640px] text-base leading-relaxed text-foreground-muted'>
          {description}
        </p>
      </div>

      <div className='flex max-w-[720px] flex-col gap-8'>{children}</div>
    </div>
  )
}

export function GuideSection({ title, children }: GuideSectionProps) {
  return (
    <section className='flex flex-col gap-3'>
      <h2 className='m-0 text-2xl text-foreground'>{title}</h2>
      <div className='flex flex-col gap-3 text-foreground-muted'>{children}</div>
    </section>
  )
}

export function GuideCode({ children }: { children: string }) {
  return (
    <pre className='m-0 overflow-x-auto rounded-[8px] border border-border bg-background px-4 py-3 font-mono text-[0.8125rem] leading-[1.65] text-foreground-muted'>
      <code>{children}</code>
    </pre>
  )
}

export function GuideNote({ children }: { children: ReactNode }) {
  return (
    <blockquote className='m-0 border-l border-border-strong pl-4 text-foreground-muted'>
      {children}
    </blockquote>
  )
}
