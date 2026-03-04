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
  const imageRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const titleLineRef = useRef(null)
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
          { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' },
          1
        )
      }

      const titleEl = titleLineRef.current
      if (titleEl) {
        const split = new SplitType(titleEl, { types: 'chars' })
        gsap.set(split.chars, { opacity: 0, y: 80, rotateX: -90 })
        tl.to(split.chars, {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.9, stagger: 0.025,
          ease: 'power4.out',
        }, 1.2)
      }

      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current,
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
          1.8
        )
      }

      const fadeItems = contentRef.current?.querySelectorAll('.hero-fade')
      if (fadeItems) {
        tl.fromTo(fadeItems,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          2.2
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
      <div className="absolute inset-0">
        <img ref={imageRef} src={heroImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0, transformOrigin: 'center 65%' }} />
      </div>

      <div ref={overlayRef} className="absolute inset-0" style={{
        opacity: 0,
        background: `
          linear-gradient(to right, rgba(8,7,14,0.7) 0%, rgba(8,7,14,0.15) 50%, rgba(8,7,14,0.3) 100%),
          linear-gradient(to bottom, rgba(8,7,14,0.3) 0%, rgba(8,7,14,0.05) 30%, rgba(8,7,14,0.5) 70%, rgba(8,7,14,1) 100%)
        `
      }} />

      <MagicParticles count={35} className="z-10" />

      <div ref={contentRef} className="relative z-20 h-full flex flex-col justify-end" style={{ paddingBottom: 'clamp(6rem, 12vh, 10rem)' }}>
        <div className="w-full" style={{ paddingLeft: 'clamp(2rem, 8vw, 10rem)', paddingRight: 'clamp(2rem, 4vw, 4rem)' }}>
          <img src={logo} alt="Scuola di Magia Italiana" className="hero-logo mb-8" style={{
            height: 'clamp(2.5rem, 4vw, 4rem)', width: 'auto', opacity: 0,
            filter: 'drop-shadow(0 0 30px rgba(200,169,81,0.3))',
          }} />

          <h1 ref={titleLineRef} className="text-shadow-glow" style={{
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
            fontWeight: 700,
            color: 'var(--gold)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            maxWidth: '14ch',
          }}>
            Non sognare la magia
          </h1>

          <p ref={subtitleRef} className="text-shadow-subtle" style={{
            opacity: 0,
            fontSize: 'clamp(1.8rem, 5vw, 4rem)',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--parchment)',
            letterSpacing: '0.1em',
            marginTop: 'clamp(0.5rem, 1.5vw, 1.5rem)',
            marginLeft: 'clamp(0rem, 5vw, 6rem)',
          }}>
            Vivila.
          </p>

          <div className="hero-fade" style={{ opacity: 0, maxWidth: '420px', marginTop: 'clamp(2rem, 3vh, 3rem)', marginLeft: 'clamp(0rem, 2vw, 2rem)' }}>
            <p style={{ color: 'var(--parchment-dim)', lineHeight: 1.9, fontSize: 'var(--fs-body)' }}>
              Tre giorni da protagonista in un vero castello, tra incantesimi, pozioni, creature fantastiche e misteri da risolvere.
            </p>
          </div>

          <p className="hero-fade" style={{
            opacity: 0, marginTop: '1rem',
            fontFamily: '"Cinzel", serif', fontSize: '0.75rem', color: 'var(--gold-dim)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>
            Per ragazze e ragazzi dai 6 ai 14 anni
          </p>

          <div className="hero-fade flex flex-wrap gap-4" style={{ opacity: 0, marginTop: 'clamp(1.5rem, 3vh, 2.5rem)' }}>
            <a href="#iscrizioni" className="btn-magic">Iscriviti Ora</a>
            <a href="#esperienza" className="btn-ghost">Scopri</a>
          </div>
        </div>

        <div className="hero-fade hidden lg:flex flex-col gap-6 absolute right-12 bottom-28 items-end" style={{ opacity: 0 }}>
          {[
            { number: 'VII', label: 'Edizione' },
            { number: '100+', label: 'Ragazzi' },
            { number: '25', label: 'Attori' },
          ].map((stat) => (
            <div key={stat.label} className="text-right">
              <span className="block text-gold-gradient" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: '1.6rem', fontWeight: 700, lineHeight: 1 }}>{stat.number}</span>
              <span style={{ fontFamily: '"Cinzel", serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--parchment-dim)', opacity: 0.4 }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 z-20 flex items-center gap-4" style={{ left: 'clamp(2rem, 8vw, 10rem)' }}>
        <div className="w-px h-16 relative overflow-hidden" style={{ background: 'rgba(200,169,81,0.1)' }}>
          <div className="absolute top-0 left-0 w-full" style={{ height: '30%', background: 'linear-gradient(180deg, var(--gold), transparent)', animation: 'scrollLine 2.5s ease-in-out infinite' }} />
        </div>
        <span style={{ fontFamily: '"Cinzel", serif', fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)', writingMode: 'vertical-rl' }}>Scorri</span>
        <style>{`@keyframes scrollLine { 0% { transform: translateY(-100%); } 100% { transform: translateY(450%); } }`}</style>
      </div>
    </section>
  )
}
