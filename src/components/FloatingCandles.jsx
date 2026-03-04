import { useEffect, useRef } from 'react'

export default function FloatingCandles({ count = 12, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const candles = []

    for (let i = 0; i < count; i++) {
      const candle = document.createElement('div')
      const x = Math.random() * 100
      const y = Math.random() * 80 + 5
      const size = Math.random() * 2 + 1.5
      const duration = Math.random() * 4 + 6
      const delay = Math.random() * 8

      candle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size * 3}px;
        pointer-events: none;
        animation: candleFloat ${duration}s ease-in-out ${delay}s infinite;
        will-change: transform, opacity;
      `

      // Flame
      const flame = document.createElement('div')
      const flameSize = size * 2.5
      flame.style.cssText = `
        position: absolute;
        top: -${flameSize}px;
        left: 50%;
        transform: translateX(-50%);
        width: ${flameSize}px;
        height: ${flameSize * 1.5}px;
        background: radial-gradient(ellipse at center bottom, rgba(255, 200, 60, 0.9) 0%, rgba(232, 160, 48, 0.6) 30%, rgba(212, 168, 67, 0.2) 60%, transparent 80%);
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        animation: candleFlicker ${Math.random() * 2 + 2}s ease-in-out ${Math.random() * 3}s infinite;
        filter: blur(0.5px);
      `

      // Glow halo
      const glow = document.createElement('div')
      const glowSize = flameSize * 6
      glow.style.cssText = `
        position: absolute;
        top: -${glowSize / 2}px;
        left: 50%;
        transform: translateX(-50%);
        width: ${glowSize}px;
        height: ${glowSize}px;
        background: radial-gradient(circle, rgba(232, 160, 48, 0.08) 0%, rgba(212, 168, 67, 0.03) 40%, transparent 70%);
        pointer-events: none;
        animation: candleFlicker ${Math.random() * 3 + 3}s ease-in-out ${Math.random() * 2}s infinite;
      `

      // Candle body
      const body = document.createElement('div')
      body.style.cssText = `
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(250, 240, 220, 0.6) 0%, rgba(237, 224, 200, 0.3) 100%);
        border-radius: 1px;
      `

      candle.appendChild(glow)
      candle.appendChild(flame)
      candle.appendChild(body)
      container.appendChild(candle)
      candles.push(candle)
    }

    return () => candles.forEach((c) => c.remove())
  }, [count])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
