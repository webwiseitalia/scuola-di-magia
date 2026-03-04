import { useEffect, useRef } from 'react'

export default function MagicParticles({ count = 30, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 3 + 1
      const x = Math.random() * 100
      const y = Math.random() * 100
      const duration = Math.random() * 4 + 3
      const delay = Math.random() * 5

      particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(200, 169, 81, 0.9) 0%, rgba(200, 169, 81, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: particleFloat ${duration}s ease-in-out ${delay}s infinite;
      `
      container.appendChild(particle)
      particles.push(particle)
    }

    // Add animation keyframes
    if (!document.getElementById('particle-styles')) {
      const style = document.createElement('style')
      style.id = 'particle-styles'
      style.textContent = `
        @keyframes particleFloat {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0.5); }
          25% { opacity: 0.8; }
          50% { opacity: 1; transform: translateY(-30px) scale(1); }
          75% { opacity: 0.6; }
        }
      `
      document.head.appendChild(style)
    }

    return () => {
      particles.forEach((p) => p.remove())
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
