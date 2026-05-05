import { Toast as BaseToast } from '@base-ui/react/toast'
import { createContext, useContext } from 'react'

type ToastVariant = 'default' | 'success' | 'error' | 'warning'

const variantConfig: Record<ToastVariant, { color: string; icon: React.ReactNode }> = {
  default: {
    color: 'var(--color-foreground-muted)',
    icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="8" cy="8" r="6"/><path d="M8 7v4M8 5.5v.5"/></svg>,
  },
  success: {
    color: '#34d399',
    icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><path d="M5 8l2 2 4-4"/></svg>,
  },
  error: {
    color: '#f87171',
    icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="8" cy="8" r="6"/><path d="M6 6l4 4M10 6l-4 4"/></svg>,
  },
  warning: {
    color: '#fbbf24',
    icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2L1 14h14L8 2z"/><path d="M8 7v3M8 12v.5"/></svg>,
  },
}

function ToastList() {
  const { toasts } = BaseToast.useToastManager()
  return (
    <>
      {toasts.map((toast) => {
        const variant = (toast.data?.variant as ToastVariant) ?? 'default'
        const cfg = variantConfig[variant]
        return (
          <BaseToast.Root
            key={toast.id}
            toast={toast}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              left: 'auto',
              width: '100%',
              borderRadius: '10px',
              border: '1px solid var(--color-border-strong)',
              background: 'var(--color-background-elevated)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              userSelect: 'none',
            }}
            className="data-[starting-style]:translate-y-full data-[starting-style]:opacity-0 data-[ending-style]:translate-y-full data-[ending-style]:opacity-0 transition-all duration-200"
          >
            <span style={{ color: cfg.color, flexShrink: 0, marginTop: '1px' }}>{cfg.icon}</span>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <BaseToast.Title style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-foreground)', margin: 0 }} />
              <BaseToast.Description style={{ fontSize: '0.8125rem', color: 'var(--color-foreground-muted)', margin: 0, lineHeight: 1.5 }} />
            </div>
            <BaseToast.Close
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-foreground-subtle)',
                padding: 0,
                flexShrink: 0,
                display: 'flex',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3 3l8 8M11 3l-8 8"/>
              </svg>
            </BaseToast.Close>
          </BaseToast.Root>
        )
      })}
    </>
  )
}

// Provider — wrap your app root with this
export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <BaseToast.Provider>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '320px',
            zIndex: 9999,
          }}
        >
          <ToastList />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  )
}

// Hook — call this anywhere inside ToastProvider
export function useToast() {
  const manager = BaseToast.useToastManager()
  return {
    toast: (title: string, options?: { description?: string; variant?: ToastVariant }) =>
      manager.add({ title, description: options?.description, data: { variant: options?.variant ?? 'default' } }),
    success: (title: string, description?: string) =>
      manager.add({ title, description, data: { variant: 'success' } }),
    error: (title: string, description?: string) =>
      manager.add({ title, description, data: { variant: 'error' } }),
    warning: (title: string, description?: string) =>
      manager.add({ title, description, data: { variant: 'warning' } }),
  }
}
