import { useState, useEffect } from 'react'

export default function BackgroundMusic() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const handleClick = () => setStarted(true)
    document.addEventListener('click', handleClick, { once: true })
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return started ? (
    <iframe
      style={{ display: 'none' }}
      src="https://www.youtube.com/embed/7EvwIw4gIyk?autoplay=1&loop=1&playlist=7EvwIw4gIyk"
      allow="autoplay; encrypted-media"
    />
  ) : null
}
