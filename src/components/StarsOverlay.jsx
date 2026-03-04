import { useEffect, useRef } from 'react'

export default function StarsOverlay({ count = 60, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const stars = []

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div')
      const size = Math.random() * 2 + 0.5
      const x = Math.random() * 100
      const y = Math.random() * 100
      const duration = Math.random() * 5 + 3
      const delay = Math.random() * 8

      star.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(240, 208, 120, 0.9) 0%, rgba(212, 168, 67, 0.4) 50%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: starTwinkle ${duration}s ease-in-out ${delay}s infinite;
        will-change: transform, opacity;
      `

      container.appendChild(star)
      stars.push(star)
    }

    return () => stars.forEach((s) => s.remove())
  }, [count])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
