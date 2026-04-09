import { useState, useEffect } from 'react'

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([])
  
  const bootLogs = [
    'Initializing BIOS...',
    'Loading system memory..................... OK',
    'Mounting file system...................... OK',
    'Starting UI engine........................ OK',
    'Authenticating user credentials........... OK',
    'Bypassing mainframe security protocols.... SUCCESS',
    'Boot sequence complete. Welcome.'
  ]

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bootLogs.length) {
        setLines(prev => [...prev, bootLogs[index]])
        index++
      } else {
        clearInterval(interval)
        setTimeout(onComplete, 400) // Delay before unmount
      }
    }, 150) // Fast mechanical typing speed

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        backgroundColor: '#05050A', 
        zIndex: 99999, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        padding: '2rem',
        fontFamily: 'var(--font-mono)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        {lines.map((line, i) => (
          <div key={i} style={{ color: i === bootLogs.length - 1 ? 'var(--cyan)' : 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>
            {line}
          </div>
        ))}
        {lines.length < bootLogs.length && (
          <div style={{ color: 'var(--text)', fontSize: '0.9rem', marginTop: '8px' }}>
            <span style={{ 
              display: 'inline-block', 
              width: '10px', 
              height: '1.2em', 
              backgroundColor: 'var(--text)', 
              animation: 'blink 1s step-end infinite' 
            }} />
          </div>
        )}
      </div>
    </div>
  )
}
