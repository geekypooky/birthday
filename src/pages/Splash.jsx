import { useEffect, useState } from 'react'

export default function Splash({ onFinish }) {
  const [blown, setBlown] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setBlown(true), 3000)
    const t2 = setTimeout(() => onFinish && onFinish(), 3600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onFinish])

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    flexDirection: 'column',
    background: 'linear-gradient(180deg,#ffefef,#fff7e6)'
  }

  const cakeStyle = {
    fontSize: 120,
    lineHeight: 1,
    textAlign: 'center',
    userSelect: 'none'
  }

  const candlesStyle = {
    fontSize: 28,
    marginBottom: 8,
    transition: 'opacity 400ms ease'
  }

  const hintStyle = {
    marginTop: 24,
    fontSize: 14,
    color: '#333',
    opacity: 0.9
  }

  return (
    <div style={containerStyle}>
      <div style={cakeStyle} aria-hidden>
        <div style={candlesStyle}>
          {!blown ? '🕯️🕯️🕯️' : '💨'}
        </div>
        <div>🎂</div>
      </div>
      <div style={hintStyle}>{blown ? 'Candles blown — coming up!' : 'Make a wish...'}</div>
      <button
        onClick={() => {
          setBlown(true)
          onFinish && onFinish()
        }}
        style={{
          marginTop: 18,
          padding: '8px 14px',
          borderRadius: 8,
          border: 'none',
          background: '#ff8a65',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Skip
      </button>
    </div>
  )
}
