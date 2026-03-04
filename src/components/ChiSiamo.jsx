import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'
import StarsOverlay from './StarsOverlay'
import Fireflies from './Fireflies'
import FloatingRunes from './FloatingRunes'
import foto14 from '../assets/foto/foto-14.webp'
import foto13 from '../assets/foto/foto-13.webp'
import foto2 from '../assets/foto/foto-2.webp'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: '10+', label: 'Anni di attività' },
  { number: '100+', label: 'Eventi realizzati' },
  { number: '25', label: 'Professionisti' },
  { number: '7', label: 'Edizioni della Scuola' },
]

export default function ChiSiamo() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = headingRef.current
      if (heading) {
        const split = new SplitType(heading, { types: 'chars' })
        gsap.set(split.chars, { opacity: 0, y: 40, rotateY: -30 })
        gsap.to(split.chars, {
          opacity: 1, y: 0, rotateY: 0, duration: 0.7, stagger: 0.02, ease: 'power3.out',
          scrollTrigger: { trigger: heading, start: 'top 82%', once: true },
        })
      }

      const statItems = statsRef.current?.querySelectorAll('.stat-item')
      if (statItems) {
        statItems.forEach((item, i) => {
          gsap.fromTo(item,
            { opacity: 0, y: 30, scale: 0.85 },
            {
              opacity: 1, y: 0, scale: 1, duration: 0.7, delay: i * 0.12, ease: 'back.out(2)',
              scrollTrigger: { trigger: item, start: 'top 85%', once: true },
            }
          )
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="chi-siamo" className="relative bg-tower section-glow-top" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <StarsOverlay count={20} className="opacity-25" />
      <Fireflies count={10} />
      <FloatingRunes count={5} />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-start mb-20 sm:mb-28">
          <ScrollReveal className="lg:col-span-5 lg:pr-12 lg:z-10" from="left">
            <div className="flex items-start gap-6 mb-6">
              <span className="hidden sm:block text-gold-gradient" style={{
                fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(4rem, 8vw, 7rem)',
                fontWeight: 700, lineHeight: 0.85, opacity: 0.15,
              }}>05</span>
              <div>
                <p style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem' }}>
                  L'associazione
                </p>
                <h2 ref={headingRef} className="text-gold-gradient heading-glow" style={{
                  fontSize: 'var(--fs-heading)',
                  fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
                  fontWeight: 700, lineHeight: 1.1,
                }}>
                  Chi Siamo
                </h2>
              </div>
            </div>

            <div>
              <h3 className="mb-5" style={{ fontFamily: '"Cinzel Decorative", "Cinzel", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>
                Associazione Culturale Caraval Spettacoli
              </h3>
              <div className="space-y-4" style={{ color: 'var(--parchment-dim)', lineHeight: 1.9 }}>
                <p>
                  La <strong style={{ color: 'var(--parchment)' }}>Scuola di Magia Italiana</strong> è organizzata dall'Associazione Culturale
                  Caraval Spettacoli, realtà <strong style={{ color: 'var(--parchment)' }}>No Profit</strong> attiva da oltre 10 anni.
                </p>
                <p>
                  Nel curriculum: oltre 100 eventi tra spettacoli teatrali, animazioni,
                  spettacoli pirotecnici, feste pubbliche e private e LARP (Live Action Role Playing).
                </p>
                <p>
                  Lo staff di <strong style={{ color: 'var(--parchment)' }}>25 professionisti</strong> — attori, educatori, teatranti e scenografi —
                  accompagna i ragazzi durante l'intero weekend con passione e competenza.
                </p>
              </div>

              <div className="mt-8 p-6" style={{
                borderLeft: '2px solid rgba(212,168,67,0.2)',
                background: 'linear-gradient(90deg, rgba(212,168,67,0.03) 0%, transparent 100%)',
              }}>
                <p className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>La Nostra Missione</p>
                <p style={{ fontStyle: 'italic', color: 'var(--parchment-dim)', lineHeight: 1.8 }}>
                  "Dimostrare che divertimento e cultura possono sposarsi in un'esperienza indimenticabile.
                  Incoraggiare la lettura, la socializzazione, il gioco intelligente e la cultura
                  attraverso l'ambientazione fantastica."
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7 lg:-ml-8" from="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden shape-blob-1" style={{ transform: 'rotate(-1.5deg)' }}>
                <img src={foto2} alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="space-y-4 mt-16">
                <div className="overflow-hidden shape-blob-2">
                  <img src={foto14} alt="" className="w-full aspect-square object-cover object-top hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="overflow-hidden clip-angle-left" style={{ transform: 'rotate(1deg)' }}>
                  <img src={foto13} alt="" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stat-item py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0 text-center lg:text-left" style={{
              opacity: 0,
              borderTop: '2px solid rgba(212,168,67,0.1)',
              borderRight: i < 3 ? '1px solid rgba(212,168,67,0.05)' : 'none',
            }}>
              <span className="block text-gold-gradient text-shadow-glow" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
                {stat.number}
              </span>
              <span className="block mt-2" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.5 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
