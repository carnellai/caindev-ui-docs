import { useEffect, useRef, useState } from 'react'

export type StreamingTextProps = {
  // Pass the full text as it grows — each render adds more chars
  text: string
  // Whether the stream is still active (shows cursor)
  streaming?: boolean
  // Optional class for the container
  className?: string
  style?: React.CSSProperties
}

export type SimulatedStreamState = {
  text: string
  streaming: boolean
}

export function StreamingText({
  text,
  streaming = false,
  className,
  style,
}: StreamingTextProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: 'inherit',
        lineHeight: 'inherit',
        color: 'inherit',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        ...style,
      }}
    >
      {text}
      {streaming && (
        <span
          className="streaming-text-caret"
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            background: 'var(--color-foreground)',
            marginLeft: '1px',
            verticalAlign: 'text-bottom',
            animation: 'caret-blink 1s step-end infinite',
          }}
          aria-hidden="true"
        />
      )}
      <style>{`
        @keyframes caret-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .streaming-text-caret {
            animation: none !important;
          }
        }
      `}</style>
    </span>
  )
}

// Demo hook — simulates a stream for previews/docs
export function useSimulatedStream(fullText: string, speed = 18): SimulatedStreamState {
  const [text, setText] = useState('')
  const [streaming, setStreaming] = useState(true)
  const indexRef = useRef(0)

  useEffect(() => {
    setText('')
    indexRef.current = 0
    setStreaming(true)

    const interval = setInterval(() => {
      if (indexRef.current >= fullText.length) {
        setStreaming(false)
        clearInterval(interval)
        return
      }
      // Stream 1-3 chars at a time to feel more like a real LLM
      const chunkSize = Math.floor(Math.random() * 3) + 1
      const next = fullText.slice(0, indexRef.current + chunkSize)
      setText(next)
      indexRef.current = Math.min(indexRef.current + chunkSize, fullText.length)
    }, speed)

    return () => clearInterval(interval)
  }, [fullText, speed])

  return { text, streaming }
}
