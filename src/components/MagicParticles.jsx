import { useEffect, useRef } from 'react'

export default function MagicParticles({ count = 50, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (!document.getElementById('magic-particle-styles')) {
      const style = document.createElement('style')
      style.id = 'magic-particle-styles'
      style.textContent = `
        @keyframes magicRise {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          15% { opacity: 1; }
          50% { opacity: 0.8; transform: translateY(-50px) scale(1); }
          85% { opacity: 0.2; }
          100% { opacity: 0; transform: translateY(-100px) scale(0.2); }
        }
        @keyframes magicDrift {
          0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
          20% { opacity: 0.6; }
          50% { opacity: 1; transform: translate(20px, -30px) scale(1.3); }
          80% { opacity: 0.3; }
          100% { opacity: 0; transform: translate(-15px, -60px) scale(0); }
        }
        @keyframes magicPulse {
          0%, 100% { opacity: 0.1; transform: scale(0.5); }
          50% { opacity: 0.7; transform: scale(1.5); }
        }
      `
      document.head.appendChild(style)
    }

    const particles = []
    const animations = ['magicRise', 'magicDrift', 'magicPulse']

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 3 + 0.5
      const x = Math.random() * 100
      const y = Math.random() * 100
      const anim = animations[Math.floor(Math.random() * animations.length)]
      const duration = Math.random() * 6 + 3
      const delay = Math.random() * 8

      const goldVariants = [
        'rgba(212, 168, 67, 0.8)',
        'rgba(240, 208, 120, 0.6)',
        'rgba(232, 160, 48, 0.7)',
        'rgba(196, 149, 48, 0.5)',
        'rgba(255, 220, 100, 0.4)',
      ]
      const color = goldVariants[Math.floor(Math.random() * goldVariants.length)]

      particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: ${anim} ${duration}s ease-in-out ${delay}s infinite;
        will-change: transform, opacity;
      `
      container.appendChild(particle)
      particles.push(particle)
    }

    return () => particles.forEach((p) => p.remove())
  }, [count])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
