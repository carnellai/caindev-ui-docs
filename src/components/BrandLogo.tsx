/** Dark-theme mark on dark BG; swaps to `/logo-light.svg` when `html[data-appearance=light]`. */
export function BrandLogo({ className = 'h-6 w-auto' }: { className?: string }) {
  return (
    <>
      <img
        src='/logo.svg'
        alt=''
        aria-hidden
        decoding='async'
        className={`${className} cd-brand-logo--dark`}
      />
      <img
        src='/logo-light.svg'
        alt='caindev/ui'
        decoding='async'
        className={`${className} cd-brand-logo--light`}
      />
    </>
  )
}
