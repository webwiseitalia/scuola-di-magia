import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'
import StarsOverlay from './StarsOverlay'
import Fireflies from './Fireflies'
import FloatingRunes from './FloatingRunes'
import { Wand2, Flame, Search, Sparkles, ScrollText, Swords } from 'lucide-react'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'

gsap.registerPlugin(ScrollTrigger)

const activities = [
  { title: 'Incantesimi e Pozioni', desc: 'Laboratori interattivi con formule da trascrivere, miscele da preparare ed esperimenti creativi.', Icon: Wand2 },
  { title: 'Creature Fantastiche', desc: 'Esplorazioni guidate con incontri scenografici e creature di altri mondi.', Icon: Flame },
  { title: 'Misteri ed Enigmi', desc: 'Avventure da risolvere in squadra, prove di logica e coraggio.', Icon: Search },
  { title: 'Spettacoli dal Vivo', desc: 'Performance serali con illusionismo, effetti speciali e momenti di grande meraviglia.', Icon: Sparkles },
  { title: 'Laboratori Artistici', desc: 'Attività manuali, creatività e visite guidate ai luoghi storici del castello.', Icon: ScrollText },
  { title: 'Tornei tra Casate', desc: 'Competizione sana, collaborazione e spirito di squadra in sfide epiche.', Icon: Swords },
]

export default function Esperienza() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = headingRef.current
      if (heading) {
        const split = new SplitType(heading, { types: 'chars' })
        gsap.set(split.chars, { opacity: 0, y: 60 })
        gsap.to(split.chars, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.03, ease: 'power3.out',
          scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
        })
      }

      gsap.utils.toArray('.act-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, delay: (i % 3) * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="esperienza" className="relative section-glow-top" style={{ background: 'var(--void)', paddingTop: 'var(--space-theatrical)' }}>

      {/* BIG title */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 mb-16 sm:mb-24">
        <p className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
          L'evento
        </p>
        <h2 ref={headingRef} style={{
          fontSize: 'clamp(3rem, 9vw, 8rem)',
          fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
          fontWeight: 700,
          lineHeight: 0.85,
          letterSpacing: '-0.03em',
          color: 'var(--parchment)',
        }}>
          L'Esperienza
        </h2>
      </div>

      <div className="relative" style={{ paddingBottom: 'var(--space-theatrical)' }}>
        <StarsOverlay count={20} className="opacity-30" />
        <Fireflies count={12} />
        <FloatingRunes count={5} />

        {/* Intro — right-aligned text with left photo */}
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <ScrollReveal from="left">
              <p className="text-lg sm:text-xl lg:text-2xl" style={{ color: 'var(--parchment)', lineHeight: 1.7, fontFamily: '"Cormorant Garamond", serif' }}>
                Un evento unico in Italia: tre giorni all'interno di un vero castello, interamente
                trasformato in un'accademia di magia. Dopo aver ricevuto la lettera di ammissione, i ragazzi
                vengono assegnati a una delle quattro casate.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-px" style={{ background: 'rgba(212,168,67,0.4)' }} />
                <span style={{ fontFamily: '"Cinzel", serif', fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--gold)' }}>3 giorni, 1 castello, 100 ragazzi</span>
              </div>
            </ScrollReveal>

            <ScrollReveal from="right" delay={0.15}>
              <div className="overflow-hidden rounded-2xl">
                <img src={foto9} alt="" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Activities — 3 column grid */}
        <div className="relative z-10 max-w-[90rem] mx-auto mt-24 sm:mt-32 px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <p className="mb-10" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>Le Materie Magiche</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((act) => (
              <div key={act.title} className="act-card group p-7 sm:p-8 transition-all duration-500 rounded-xl" style={{
                opacity: 0,
                background: 'rgba(237,224,200,0.03)',
                border: '1px solid rgba(212,168,67,0.08)',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212,168,67,0.2)'
                  e.currentTarget.style.background = 'rgba(237,224,200,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212,168,67,0.08)'
                  e.currentTarget.style.background = 'rgba(237,224,200,0.03)'
                }}
              >
                <act.Icon className="mb-5" size={24} style={{ color: 'var(--gold)', strokeWidth: 1.5 }} />
                <h4 className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.05rem', color: 'var(--parchment)' }}>{act.title}</h4>
                <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.8, opacity: 0.7 }}>{act.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo strip — staggered */}
        <div className="mt-24 sm:mt-32 overflow-hidden">
          <div className="flex gap-4 sm:gap-5" style={{ paddingLeft: 'clamp(1rem, 4vw, 6rem)' }}>
            {[
              { src: foto5, w: 'clamp(220px, 25vw, 350px)', aspect: '3/4', radius: '1rem', mt: '0' },
              { src: foto8, w: 'clamp(300px, 35vw, 500px)', aspect: '16/10', radius: '0.75rem', mt: '2.5rem' },
              { src: foto6, w: 'clamp(200px, 22vw, 300px)', aspect: '1/1', radius: '1.25rem', mt: '-1rem' },
              { src: foto9, w: 'clamp(260px, 30vw, 420px)', aspect: '4/3', radius: '0.5rem', mt: '1.5rem' },
            ].map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden shrink-0" style={{ width: photo.w, marginTop: photo.mt, borderRadius: photo.radius }}>
                  <img src={photo.src} alt="" className="w-full object-cover hover:scale-105 transition-transform duration-1000" style={{ aspectRatio: photo.aspect }} loading="lazy" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Academic years */}
        <div className="relative z-10 max-w-[90rem] mx-auto mt-24 sm:mt-32 px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
              <div className="lg:max-w-sm">
                <p className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  Sistema ad Anni Accademici
                </p>
                <p style={{ color: 'var(--parchment-dim)', lineHeight: 1.8 }}>
                  Chi torna avanza di anno, con attività progressivamente più complesse. Dal I al V anno, un percorso che cresce con loro.
                </p>
              </div>
              <div className="flex gap-5 sm:gap-8">
                {['I', 'II', 'III', 'IV', 'V'].map((year) => (
                  <div key={year} className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full relative" style={{
                      fontFamily: '"Cinzel", serif', fontSize: '1rem', color: 'var(--gold-dim)',
                      border: '1px solid rgba(212,168,67,0.2)',
                      transition: 'all 0.3s',
                    }}>
                      {year}
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                        boxShadow: '0 0 25px rgba(212,168,67,0.2)',
                      }} />
                    </div>
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--parchment-dim)', opacity: 0.4 }}>Anno</span>
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
