import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import MagicParticles from './MagicParticles'
import logo from '../assets/logosdmi.webp'
import heroImg from '../assets/foto/foto-1.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const overlayRef = useRef(null)
  const imageRef = useRef(null)
  const logoRef = useRef(null)
  const sublineRef = useRef(null)
  const ctaRef = useRef(null)
  const badgesRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.3 })

      tl.fromTo(imageRef.current, { scale: 1.3, opacity: 0 }, { scale: 1.1, opacity: 1, duration: 2.5, ease: 'power2.out' })
      tl.to(overlayRef.current, { opacity: 1, duration: 1.5 }, 0.5)
      tl.fromTo(logoRef.current, { opacity: 0, scale: 0.8, filter: 'blur(10px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' }, 1)

      const headline = headlineRef.current
      if (headline) {
        const split = new SplitType(headline, { types: 'chars,words' })
        gsap.set(split.chars, { opacity: 0, y: 50, rotateX: -80 })
        tl.to(split.chars, { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: { each: 0.03, from: 'start' }, ease: 'back.out(2)' }, 1.8)
      }

      tl.fromTo(sublineRef.current, { opacity: 0, y: 30, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2 }, 3)
      tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 3.5)

      const badges = badgesRef.current?.children
      if (badges) {
        tl.fromTo(badges, { opacity: 0, scale: 0.8, y: 15 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: { each: 0.12, from: 'random' }, ease: 'elastic.out(1, 0.6)' }, 3.8)
      }

      tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, 4.5)

      // Parallax
      gsap.to(imageRef.current, {
        yPercent: 25, scale: 1.2,
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
      gsap.to('.hero-content', {
        y: -80, opacity: 0,
        scrollTrigger: { trigger: section, start: '20% top', end: '60% top', scrub: 1 },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '100dvh' }}>
      {/* Stage backdrop */}
      <div className="absolute inset-0 overflow-hidden">
        <img ref={imageRef} src={heroImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0, transformOrigin: 'center 60%' }} />
      </div>

      {/* Shadow layers */}
      <div ref={overlayRef} className="absolute inset-0" style={{ opacity: 0, background: 'linear-gradient(180deg, rgba(8,7,14,0.92) 0%, rgba(8,7,14,0.45) 35%, rgba(8,7,14,0.35) 50%, rgba(8,7,14,0.65) 75%, rgba(8,7,14,1) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(200,169,81,0.06) 0%, transparent 60%)' }} />

      <MagicParticles count={60} className="z-10" />

      {/* Content */}
      <div className="hero-content relative z-20 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <div ref={logoRef} className="mb-10" style={{ opacity: 0 }}>
          <img src={logo} alt="Scuola di Magia Italiana" className="h-16 sm:h-20 lg:h-28 w-auto mx-auto" style={{ filter: 'drop-shadow(0 0 30px rgba(200,169,81,0.3))' }} />
        </div>

        <h1 ref={headlineRef} className="text-shadow-glow mb-6" style={{ fontSize: 'var(--fs-hero)', fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif', fontWeight: 700, color: 'var(--gold)', lineHeight: 0.95, letterSpacing: '-0.02em', perspective: '600px' }}>
          Non sognare la magia
        </h1>

        <div ref={sublineRef} style={{ opacity: 0 }}>
          <p className="text-shadow-subtle" style={{ fontSize: 'var(--fs-display)', fontFamily: '"Cinzel", Georgia, serif', fontWeight: 400, color: 'var(--parchment)', letterSpacing: '0.08em', marginBottom: '2rem' }}>
            Vivila.
          </p>
          <p style={{ fontSize: 'var(--fs-body)', color: 'var(--parchment-dim)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.8 }}>
            Tre giorni da protagonista in un vero castello, tra incantesimi, pozioni, creature fantastiche e misteri da risolvere. Per ragazze e ragazzi dai 6 ai 14 anni.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12" style={{ opacity: 0 }}>
          <a href="#iscrizioni" className="btn-magic">Iscriviti Ora</a>
          <a href="#esperienza" className="btn-ghost">Scopri l'Esperienza</a>
        </div>

        <div ref={badgesRef} className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-14">
          {['VII Edizione', 'Sempre Sold Out', '100 ragazzi per turno', '25 attori professionisti'].map((badge) => (
            <span key={badge} className="px-4 py-2 text-xs sm:text-sm tracking-[0.2em] uppercase" style={{ fontFamily: '"Cinzel", Georgia, serif', color: 'var(--gold-dim)', border: '1px solid rgba(200,169,81,0.12)', borderRadius: '2px', background: 'rgba(200,169,81,0.03)', opacity: 0 }}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20" style={{ opacity: 0 }}>
        <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: '"Cinzel", serif', color: 'var(--gold-dim)' }}>Scopri</span>
        <div className="w-px h-12 relative overflow-hidden" style={{ background: 'rgba(200,169,81,0.1)' }}>
          <div className="absolute top-0 left-0 w-full" style={{ height: '40%', background: 'linear-gradient(180deg, var(--gold), transparent)', animation: 'scrollLine 2s ease-in-out infinite' }} />
        </div>
        <style>{`@keyframes scrollLine { 0% { transform: translateY(-100%); } 100% { transform: translateY(350%); } }`}</style>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none z-30" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, var(--void) 100%)' }} />
    </section>
  )
}
