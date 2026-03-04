import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MagicDivider({ symbol = '✦', className = '' }) {
  const dividerRef = useRef(null)

  useEffect(() => {
    const el = dividerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Animate the lines expanding from center
      const leftLine = el.querySelector('.divider-left')
      const rightLine = el.querySelector('.divider-right')
      const symbolEl = el.querySelector('.divider-symbol')
      const sparkles = el.querySelectorAll('.divider-sparkle')

      gsap.set([leftLine, rightLine], { scaleX: 0 })
      gsap.set(symbolEl, { opacity: 0, scale: 0, rotation: -180 })
      gsap.set(sparkles, { opacity: 0, scale: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        }
      })

      tl.to(symbolEl, {
        opacity: 1, scale: 1, rotation: 0, duration: 0.8,
        ease: 'back.out(2)',
      })
      .to([leftLine, rightLine], {
        scaleX: 1, duration: 1.2,
        ease: 'power3.out',
      }, 0.3)
      .to(sparkles, {
        opacity: 1, scale: 1, duration: 0.5,
        stagger: { each: 0.1, from: 'edges' },
        ease: 'back.out(3)',
      }, 0.6)
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={dividerRef} className={`relative flex items-center justify-center py-8 ${className}`}>
      {/* Left sparkles */}
      <div className="divider-sparkle absolute" style={{ left: '15%', color: 'var(--gold-dim)', fontSize: '0.4rem', opacity: 0.3 }}>✦</div>
      <div className="divider-sparkle absolute" style={{ left: '25%', color: 'var(--gold)', fontSize: '0.3rem', opacity: 0.4 }}>✧</div>

      {/* Left line */}
      <div className="divider-left h-px flex-1" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(212,168,67,0.05) 30%, rgba(212,168,67,0.3) 100%)',
        transformOrigin: 'right center',
      }} />

      {/* Center symbol with glow */}
      <div className="divider-symbol relative mx-6" style={{
        color: 'var(--gold)',
        fontSize: '0.8rem',
        textShadow: '0 0 15px rgba(212,168,67,0.5), 0 0 30px rgba(212,168,67,0.2)',
        letterSpacing: '0.5em',
      }}>
        <span style={{ opacity: 0.3 }}>·</span>
        <span className="mx-2">{symbol}</span>
        <span style={{ opacity: 0.3 }}>·</span>
      </div>

      {/* Right line */}
      <div className="divider-right h-px flex-1" style={{
        background: 'linear-gradient(270deg, transparent 0%, rgba(212,168,67,0.05) 30%, rgba(212,168,67,0.3) 100%)',
        transformOrigin: 'left center',
      }} />

      {/* Right sparkles */}
      <div className="divider-sparkle absolute" style={{ right: '25%', color: 'var(--gold)', fontSize: '0.3rem', opacity: 0.4 }}>✧</div>
      <div className="divider-sparkle absolute" style={{ right: '15%', color: 'var(--gold-dim)', fontSize: '0.4rem', opacity: 0.3 }}>✦</div>
    </div>
  )
}
