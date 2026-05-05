import { useEffect, useRef } from 'react'
import { MessageBubble } from './MessageBubble'

type Message = {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  streaming?: boolean
  timestamp?: string
}

type MessageThreadProps = {
  messages: Message[]
  autoScroll?: boolean
  maxHeight?: string | number
  style?: React.CSSProperties
}

export function MessageThread({
  messages,
  autoScroll = true,
  maxHeight = '480px',
  style,
}: MessageThreadProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (autoScroll) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, autoScroll])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        overflowY: 'auto',
        maxHeight,
        padding: '16px',
        scrollbarWidth: 'thin',
        scrollbarColor: 'var(--color-border) transparent',
        ...style,
      }}
    >
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          role={msg.role}
          content={msg.content}
          streaming={msg.streaming}
          timestamp={msg.timestamp}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
