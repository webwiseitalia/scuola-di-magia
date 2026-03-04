import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'

gsap.registerPlugin(ScrollTrigger)

const activities = [
  { title: 'Incantesimi e Pozioni', desc: 'Laboratori interattivi con formule da trascrivere, miscele da preparare ed esperimenti creativi.', symbol: '⟡' },
  { title: 'Creature Fantastiche', desc: 'Esplorazioni guidate con incontri scenografici e creature di altri mondi.', symbol: '◈' },
  { title: 'Misteri ed Enigmi', desc: 'Avventure da risolvere in squadra, prove di logica e coraggio.', symbol: '✦' },
  { title: 'Spettacoli dal Vivo', desc: 'Performance serali con illusionismo, effetti speciali e momenti di grande meraviglia.', symbol: '⟐' },
  { title: 'Laboratori Artistici', desc: 'Attività manuali, creatività e visite guidate ai luoghi storici del castello.', symbol: '◆' },
  { title: 'Tornei tra Casate', desc: 'Competizione sana, collaborazione e spirito di squadra in sfide epiche.', symbol: '⚔' },
]

export default function Esperienza() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const photoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal — split chars from left
      const heading = headingRef.current
      if (heading) {
        const split = new SplitType(heading, { types: 'chars' })
        gsap.set(split.chars, { opacity: 0, x: -30 })
        gsap.to(split.chars, {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.02, ease: 'power3.out',
          scrollTrigger: { trigger: heading, start: 'top 80%', once: true },
        })
      }

      // Full-width image parallax
      if (photoRef.current) {
        gsap.fromTo(photoRef.current,
          { scale: 1.15 },
          { scale: 1, scrollTrigger: { trigger: photoRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 } }
        )
      }

      // Activities — staggered reveal with horizontal slide
      gsap.utils.toArray('.act-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 },
          {
            opacity: 1, x: 0, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="esperienza" className="relative" style={{ background: 'var(--void)' }}>
      {/* Full-width cinematic photo */}
      <div className="relative overflow-hidden" style={{ height: 'clamp(40vh, 50vh, 60vh)' }}>
        <img ref={photoRef} src={foto7} alt="" className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--void) 0%, transparent 20%, transparent 60%, var(--void) 100%)' }} />
      </div>

      <div style={{ paddingTop: 'var(--space-act)', paddingBottom: 'var(--space-theatrical)' }}>
        {/* Section heading — left-aligned, oversized, with counter */}
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: 'clamp(2rem, 8vw, 10rem)', paddingRight: 'clamp(2rem, 4vw, 4rem)' }}>
          <div className="flex items-start gap-6 mb-6">
            <span className="hidden sm:block text-gold-gradient" style={{
              fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(4rem, 8vw, 7rem)',
              fontWeight: 700, lineHeight: 0.85, opacity: 0.15,
            }}>01</span>
            <div>
              <p style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem' }}>
                L'evento
              </p>
              <h2 ref={headingRef} className="text-gold-gradient" style={{
                fontSize: 'var(--fs-heading)',
                fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
                fontWeight: 700, lineHeight: 1.1,
              }}>
                L'Esperienza
              </h2>
            </div>
          </div>
          <p className="max-w-2xl" style={{ color: 'var(--parchment-dim)', lineHeight: 1.9, marginLeft: 'clamp(0rem, 4vw, 5rem)' }}>
            Un evento unico in Italia: tre giorni all'interno di un vero castello, interamente
            trasformato in un'accademia di magia.
          </p>
        </div>

        {/* Intro — 7/5 asymmetric split */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-24" style={{ paddingLeft: 'clamp(2rem, 8vw, 10rem)', paddingRight: 'clamp(2rem, 4vw, 4rem)' }}>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <ScrollReveal className="lg:col-span-7" from="left">
              <div className="overflow-hidden" style={{ border: '1px solid rgba(200,169,81,0.1)' }}>
                <img src={foto9} alt="" className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-5 lg:pt-16" from="right" delay={0.15}>
              <h3 className="mb-5" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>
                La Lettera di Ammissione
              </h3>
              <p style={{ color: 'var(--parchment-dim)', lineHeight: 1.9 }}>
                Dopo aver ricevuto la lettera di ammissione, i ragazzi varcano le porte del castello
                e vengono assegnati a una delle quattro casate. Da quel momento inizia l'avventura:
                <strong style={{ color: 'var(--parchment)' }}> tre giorni come protagonisti di una storia magica</strong>,
                in compagnia di ragazze e ragazzi provenienti da tutta Italia.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <div className="w-12 h-px" style={{ background: 'rgba(200,169,81,0.3)' }} />
                <span style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--gold-dim)' }}>3 giorni, 1 castello, 100 ragazzi</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Activities — alternating 2-column layout, NOT a uniform grid */}
        <div className="max-w-7xl mx-auto mt-24 sm:mt-32" style={{ paddingLeft: 'clamp(2rem, 6vw, 8rem)', paddingRight: 'clamp(2rem, 6vw, 8rem)' }}>
          <ScrollReveal>
            <p className="mb-12" style={{
              fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: 'var(--gold-dim)',
            }}>Le Attività</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0">
            {/* Left column — items 0, 2, 4 */}
            <div className="space-y-6">
              {activities.filter((_, i) => i % 2 === 0).map((act, i) => (
                <div key={act.title} className="act-card py-8" style={{
                  borderBottom: '1px solid rgba(200,169,81,0.06)',
                  opacity: 0,
                }}>
                  <div className="flex items-start gap-5">
                    <span style={{ fontSize: '1.5rem', color: 'var(--gold-dim)', lineHeight: 1, marginTop: '0.2rem' }}>{act.symbol}</span>
                    <div>
                      <h4 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.1rem', color: 'var(--parchment)' }}>{act.title}</h4>
                      <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.8, opacity: 0.65 }}>{act.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Right column — items 1, 3, 5 offset down */}
            <div className="space-y-6 md:mt-20">
              {activities.filter((_, i) => i % 2 === 1).map((act, i) => (
                <div key={act.title} className="act-card py-8" style={{
                  borderBottom: '1px solid rgba(200,169,81,0.06)',
                  opacity: 0,
                }}>
                  <div className="flex items-start gap-5">
                    <span style={{ fontSize: '1.5rem', color: 'var(--gold-dim)', lineHeight: 1, marginTop: '0.2rem' }}>{act.symbol}</span>
                    <div>
                      <h4 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.1rem', color: 'var(--parchment)' }}>{act.title}</h4>
                      <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.8, opacity: 0.65 }}>{act.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo strip — irregular widths */}
        <div className="mt-24 sm:mt-32 overflow-hidden">
          <div className="flex gap-3" style={{ paddingLeft: 'clamp(1rem, 4vw, 6rem)' }}>
            {[
              { src: foto5, w: 'clamp(200px, 25vw, 350px)', aspect: '3/4' },
              { src: foto8, w: 'clamp(280px, 35vw, 500px)', aspect: '16/10' },
              { src: foto6, w: 'clamp(180px, 20vw, 280px)', aspect: '1/1' },
              { src: foto9, w: 'clamp(250px, 30vw, 400px)', aspect: '4/3' },
            ].map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden shrink-0" style={{ width: photo.w, border: '1px solid rgba(200,169,81,0.06)' }}>
                  <img src={photo.src} alt="" className="w-full object-cover hover:scale-105 transition-transform duration-1000" style={{ aspectRatio: photo.aspect }} loading="lazy" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Academic years — left-aligned, not centered */}
        <div className="max-w-7xl mx-auto mt-24 sm:mt-32" style={{ paddingLeft: 'clamp(2rem, 8vw, 10rem)', paddingRight: 'clamp(2rem, 4vw, 4rem)' }}>
          <ScrollReveal>
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <p className="mb-4" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>
                  Sistema ad Anni Accademici
                </p>
                <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.9, opacity: 0.6, maxWidth: '340px' }}>
                  Chi torna avanza di anno, con attività progressivamente più complesse. Dal I al V anno, un percorso che cresce con loro.
                </p>
              </div>
              <div className="lg:col-span-7 flex gap-4 sm:gap-6">
                {['I', 'II', 'III', 'IV', 'V'].map((year, i) => (
                  <div key={year} className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center" style={{
                      fontFamily: '"Cinzel", serif', fontSize: '0.9rem', color: 'var(--gold-dim)',
                      border: '1px solid rgba(200,169,81,0.2)', borderRadius: '50%',
                    }}>
                      {year}
                    </div>
                    <span style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'var(--parchment-dim)', opacity: 0.3 }}>Anno</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
