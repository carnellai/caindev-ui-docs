import { StreamingText } from './StreamingText'

type Role = 'user' | 'assistant' | 'system'

type MessageBubbleProps = {
  role: Role
  content: string
  streaming?: boolean
  avatar?: React.ReactNode
  timestamp?: string
  actions?: React.ReactNode
}

const roleStyles: Record<Role, React.CSSProperties> = {
  user: {
    background: 'var(--color-background-subtle)',
    border: '1px solid var(--color-border)',
    borderRadius: '12px 12px 2px 12px',
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  assistant: {
    background: 'transparent',
    border: 'none',
    borderRadius: 0,
    alignSelf: 'flex-start',
    maxWidth: '85%',
  },
  system: {
    background: 'var(--color-accent-muted)',
    border: '1px solid rgba(124,58,237,0.2)',
    borderRadius: '8px',
    alignSelf: 'center',
    maxWidth: '90%',
  },
}

function UserAvatar() {
  return (
    <div style={{
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      background: 'var(--color-background-subtle)',
      border: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="var(--color-foreground-muted)">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 9a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6z"/>
      </svg>
    </div>
  )
}

function AssistantAvatar() {
  return (
    <div style={{
      width: '28px',
      height: '28px',
      borderRadius: '7px',
      background: 'var(--color-accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <path d="M2 17 L8 7 L14 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 17 L15 10 L20 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
      </svg>
    </div>
  )
}

export function MessageBubble({
  role,
  content,
  streaming = false,
  avatar,
  timestamp,
  actions,
}: MessageBubbleProps) {
  const isUser = role === 'user'
  const isAssistant = role === 'assistant'

  return (
    <div style={{
      display: 'flex',
      flexDirection: isUser ? 'row-reverse' : 'row',
      alignItems: 'flex-start',
      gap: '10px',
      width: '100%',
    }}>
      {/* Avatar */}
      {isUser && (avatar ?? <UserAvatar />)}
      {isAssistant && (avatar ?? <AssistantAvatar />)}

      {/* Bubble */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
        <div style={{
          padding: role === 'assistant' ? '0' : '10px 14px',
          ...roleStyles[role],
        }}>
          <p style={{
            margin: 0,
            fontSize: '0.9375rem',
            lineHeight: 1.65,
            color: 'var(--color-foreground)',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {streaming ? (
              <StreamingText text={content} streaming={streaming} />
            ) : content}
          </p>
        </div>

        {/* Footer */}
        {(timestamp || actions) && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingLeft: isUser ? 0 : '2px',
            justifyContent: isUser ? 'flex-end' : 'flex-start',
          }}>
            {timestamp && (
              <span style={{
                fontSize: '0.6875rem',
                color: 'var(--color-foreground-subtle)',
                fontVariantNumeric: 'tabular-nums',
              }}>
                {timestamp}
              </span>
            )}
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}
