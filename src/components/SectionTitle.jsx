import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function SectionTitle({ title, subtitle, align = 'center' }) {
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const lineLeftRef = useRef(null)
  const lineRightRef = useRef(null)
  const diamondRef = useRef(null)

  useEffect(() => {
    const titleEl = titleRef.current
    if (!titleEl) return

    const split = new SplitType(titleEl, { types: 'chars' })
    gsap.set(split.chars, { opacity: 0, y: 30 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleEl,
        start: 'top 85%',
        once: true,
      },
    })

    // Lines extend outward
    tl.fromTo([lineLeftRef.current, lineRightRef.current],
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }
    )

    // Diamond appears
    tl.fromTo(diamondRef.current,
      { scale: 0, rotation: 0 },
      { scale: 1, rotation: 45, duration: 0.4, ease: 'back.out(3)' },
      0.4
    )

    // Title chars reveal
    tl.to(split.chars, {
      opacity: 1, y: 0, duration: 0.6,
      stagger: { each: 0.025, from: 'center' },
      ease: 'power3.out',
    }, 0.5)

    // Subtitle
    if (subRef.current) {
      tl.fromTo(subRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        1.2
      )
    }
  }, [])

  return (
    <div className={`mb-16 sm:mb-24 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* Decorative lines + diamond */}
      {align === 'center' && (
        <div className="flex items-center justify-center gap-3 mb-8">
          <div ref={lineLeftRef} className="h-px w-16 sm:w-24 origin-right" style={{ background: 'linear-gradient(to right, transparent, var(--gold-dim))', transformOrigin: 'right center' }} />
          <div ref={diamondRef} className="w-2 h-2" style={{ background: 'var(--gold-dim)', transform: 'scale(0)' }} />
          <div ref={lineRightRef} className="h-px w-16 sm:w-24 origin-left" style={{ background: 'linear-gradient(to left, transparent, var(--gold-dim))', transformOrigin: 'left center' }} />
        </div>
      )}

      <h2
        ref={titleRef}
        className="text-gold-gradient"
        style={{
          fontSize: 'var(--fs-heading)',
          fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
          fontWeight: 700,
          letterSpacing: '0.04em',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          ref={subRef}
          className="mt-5 mx-auto"
          style={{
            fontSize: 'var(--fs-body)',
            color: 'var(--parchment-dim)',
            maxWidth: '640px',
            lineHeight: 1.8,
            opacity: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
