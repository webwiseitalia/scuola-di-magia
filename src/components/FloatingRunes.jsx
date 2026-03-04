import { useEffect, useRef } from 'react'

const RUNE_SYMBOLS = ['✦', '✧', '◈', '⊹', '☆', '◊']

export default function FloatingRunes({ count = 6, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const runes = []

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span')
      el.textContent = RUNE_SYMBOLS[Math.floor(Math.random() * RUNE_SYMBOLS.length)]
      el.style.cssText = `
        position: absolute;
        pointer-events: none;
        font-size: ${Math.random() * 12 + 8}px;
        color: rgba(212, 168, 67, ${Math.random() * 0.12 + 0.05});
        text-shadow: 0 0 8px rgba(212, 168, 67, 0.15);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        will-change: transform, opacity;
        animation: floatRune ${Math.random() * 14 + 12}s ease-in-out infinite;
        animation-delay: ${Math.random() * -20}s;
      `
      container.appendChild(el)
      runes.push(el)
    }

    return () => {
      runes.forEach(el => el.remove())
    }
  }, [count])

  return (
    <>
      <div
        ref={containerRef}
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        aria-hidden="true"
      />
      <style>{`
        @keyframes floatRune {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  )
}
