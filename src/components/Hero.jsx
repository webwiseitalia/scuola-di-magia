import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import MagicParticles from './MagicParticles'
import FloatingCandles from './FloatingCandles'
import StarsOverlay from './StarsOverlay'
import Fireflies from './Fireflies'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import logo from '../assets/logosdmi.webp'
import heroImg from '../assets/foto/foto-1.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.3 })

      tl.fromTo(imageRef.current,
        { scale: 1.4, opacity: 0 },
        { scale: 1.08, opacity: 1, duration: 3, ease: 'power2.out' }
      )
      tl.to(overlayRef.current, { opacity: 1, duration: 1.5 }, 0.5)

      const logoEl = contentRef.current?.querySelector('.hero-logo')
      if (logoEl) {
        tl.fromTo(logoEl,
          { opacity: 0, scale: 0.6, filter: 'blur(15px) brightness(2)' },
          { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 1.5, ease: 'power2.out' },
          0.8
        )
      }

      const titleEl = titleRef.current
      if (titleEl) {
        const split = new SplitType(titleEl, { types: 'chars' })
        gsap.set(split.chars, { opacity: 0, y: 80, rotateX: -90 })
        tl.to(split.chars, {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.9, stagger: 0.025,
          ease: 'power4.out',
        }, 1.0)
      }

      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          1.6
        )
      }

      const fadeItems = contentRef.current?.querySelectorAll('.hero-fade')
      if (fadeItems) {
        tl.fromTo(fadeItems,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          2.0
        )
      }

      gsap.to(imageRef.current, {
        yPercent: 30, scale: 1.25,
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
      gsap.to(contentRef.current, {
        y: -100, opacity: 0,
        scrollTrigger: { trigger: section, start: '25% top', end: '65% top', scrub: 1 },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ height: '100dvh', minHeight: '700px' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img ref={imageRef} src={heroImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0, transformOrigin: 'center 65%' }} />
      </div>

      {/* Overlay — stronger bottom gradient for text readability */}
      <div ref={overlayRef} className="absolute inset-0" style={{
        opacity: 0,
        background: `
          linear-gradient(to bottom, rgba(5,5,8,0.3) 0%, rgba(5,5,8,0.05) 30%, rgba(5,5,8,0.15) 50%, rgba(5,5,8,0.7) 75%, rgba(5,5,8,1) 100%)
        `
      }} />

      {/* Magical atmosphere */}
      <StarsOverlay count={30} className="z-[5] opacity-60" />
      <FloatingCandles count={6} className="z-[8]" />
      <Fireflies count={15} className="z-[9]" />
      <MagicParticles count={20} className="z-10" />

      {/* Content — bottom-aligned editorial layout */}
      <div ref={contentRef} className="relative z-20 h-full flex flex-col justify-end" style={{ paddingBottom: 'clamp(3rem, 6vh, 6rem)' }}>
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[90rem] mx-auto">
          {/* Logo — small, top left corner feel */}
          <img src={logo} alt="Scuola di Magia Italiana" className="hero-logo mb-8" style={{
            height: 'clamp(2rem, 3vw, 3rem)', width: 'auto', opacity: 0,
            filter: 'drop-shadow(0 0 30px rgba(212,168,67,0.3))',
          }} />

          {/* Main title — BIG, editorial, left-aligned */}
          <h1 ref={titleRef} style={{
            fontSize: 'clamp(3.2rem, 10vw, 9rem)',
            fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
            fontWeight: 700,
            color: 'var(--parchment)',
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            maxWidth: '12ch',
          }}>
            Non Sognare la Magia
          </h1>

          {/* Subtitle — italic, elegant */}
          <p ref={subtitleRef} style={{
            opacity: 0,
            fontSize: 'clamp(1.6rem, 4vw, 3.5rem)',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--gold)',
            marginTop: 'clamp(0.5rem, 1.5vw, 1rem)',
          }}>
            Vivila.
          </p>

          {/* Description + CTA row */}
          <div className="hero-fade mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8" style={{ opacity: 0 }}>
            <div style={{ maxWidth: '420px' }}>
              <p style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, fontSize: 'var(--fs-body)' }}>
                Tre giorni da protagonista in un vero castello, tra incantesimi, pozioni, creature fantastiche e misteri da risolvere. Per ragazzi dai 6 ai 14 anni.
              </p>
            </div>
            <div className="hero-fade flex flex-wrap gap-4 shrink-0" style={{ opacity: 0 }}>
              <a href="#iscrizioni" className="btn-magic">Iscriviti Ora</a>
              <a href="#esperienza" className="btn-ghost">Scopri</a>
            </div>
          </div>

          {/* Stats — minimal, inline */}
          <div className="hero-fade hidden sm:flex items-center gap-10 mt-10" style={{ opacity: 0 }}>
            {[
              { number: 'VII', label: 'Edizione' },
              { number: '100+', label: 'Ragazzi' },
              { number: '25', label: 'Attori' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-5" style={{ background: 'rgba(212,168,67,0.2)' }} />}
                <div>
                  <span className="block" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold)' }}>{stat.number}</span>
                  <span style={{ fontFamily: '"Cinzel", serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--parchment-dim)', opacity: 0.5 }}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Event Card — bottom right */}
        <a href="#evento" className="hero-fade hidden lg:flex absolute bottom-[clamp(3rem,6vh,6rem)] right-[clamp(1.5rem,3vw,4rem)] z-30 items-center gap-5 px-6 py-4 rounded-2xl transition-all duration-500 group" style={{
          opacity: 0,
          background: 'rgba(237,224,200,0.04)',
          border: '1px solid rgba(212,168,67,0.12)',
          backdropFilter: 'blur(12px)',
          maxWidth: '320px',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.3)'; e.currentTarget.style.background = 'rgba(237,224,200,0.07)' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.12)'; e.currentTarget.style.background = 'rgba(237,224,200,0.04)' }}
        >
          <div className="flex-1">
            <span className="flex items-center gap-1.5 mb-1.5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              <Calendar size={11} strokeWidth={1.5} />
              Prossimo evento
            </span>
            <span className="block" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.95rem', color: 'var(--parchment)', lineHeight: 1.3 }}>Palazzo Barbo</span>
            <span className="flex items-center gap-1 mt-1" style={{ fontSize: '0.75rem', color: 'var(--parchment-dim)', opacity: 0.6 }}>
              <MapPin size={11} strokeWidth={1.5} />
              Maggio 2025 — Bergamo
            </span>
          </div>
          <ArrowRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--gold-dim)' }} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-8 sm:right-12 z-20 flex flex-col items-center gap-2">
        <span style={{ fontFamily: '"Cinzel", serif', fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Scorri</span>
        <div className="w-px h-12 relative overflow-hidden" style={{ background: 'rgba(212,168,67,0.1)' }}>
          <div className="absolute top-0 left-0 w-full" style={{ height: '30%', background: 'linear-gradient(180deg, var(--gold), transparent)', animation: 'scrollLine 2.5s ease-in-out infinite' }} />
        </div>
        <style>{`@keyframes scrollLine { 0% { transform: translateY(-100%); } 100% { transform: translateY(450%); } }`}</style>
      </div>
    </section>
  )
}
