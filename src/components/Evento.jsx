import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'
import Fireflies from './Fireflies'
import FloatingRunes from './FloatingRunes'
import { MapPin, Calendar, Users, Clock } from 'lucide-react'
import foto8 from '../assets/foto/foto-8.webp'
import foto5 from '../assets/foto/foto-5.webp'

gsap.registerPlugin(ScrollTrigger)

const nextEditions = [
  {
    location: 'Palazzo Barbo',
    city: 'Torre Pallavicina (BG)',
    dates: '16 — 25 Maggio 2025',
    tag: 'Edizione Primaverile',
    status: 'Posti disponibili',
    statusColor: '#4ade80',
  },
  {
    location: 'Castello di Thiene',
    city: 'Thiene (VI)',
    dates: '26 Agosto — 7 Settembre 2025',
    tag: 'Edizione Estiva',
    status: 'Posti disponibili',
    statusColor: '#4ade80',
  },
]

const highlights = [
  { Icon: Calendar, label: '3 giorni', desc: 'di avventura nel castello' },
  { Icon: Users, label: '100 ragazzi', desc: 'da tutta Italia' },
  { Icon: MapPin, label: '3 castelli', desc: 'in location storiche' },
  { Icon: Clock, label: '24/7', desc: 'staff sempre presente' },
]

export default function Evento() {
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
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="evento" className="relative bg-dungeon section-glow-top" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <Fireflies count={10} />
      <FloatingRunes count={4} />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header — right-aligned */}
        <div className="flex justify-end mb-16 sm:mb-24">
          <div className="text-right max-w-2xl">
            <p className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Prossime edizioni
            </p>
            <h2 ref={headingRef} style={{
              fontSize: 'clamp(2.8rem, 8vw, 7rem)',
              fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
              fontWeight: 700, lineHeight: 0.85,
              letterSpacing: '-0.03em',
              color: 'var(--parchment)',
            }}>
              L'Evento
            </h2>
            <p className="mt-5" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8 }}>
              Un'esperienza immersiva di 3 giorni in castelli storici italiani, dove ragazzi dai 6 ai 14 anni vivono la magia in prima persona.
            </p>
          </div>
        </div>

        {/* Two-column: photos left, content right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-24 sm:mb-32">
          <ScrollReveal from="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img src={foto8} alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="overflow-hidden rounded-2xl mt-8">
                <img src={foto5} alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal from="right" delay={0.15}>
            <div className="space-y-8">
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-5">
                {highlights.map((h) => (
                  <div key={h.label} className="flex items-start gap-3">
                    <h.Icon size={20} style={{ color: 'var(--gold)', strokeWidth: 1.5, marginTop: '0.15rem' }} />
                    <div>
                      <span className="block" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.95rem', color: 'var(--parchment)' }}>{h.label}</span>
                      <span style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.6 }}>{h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* What's included */}
              <div className="p-7 rounded-2xl" style={{ background: 'rgba(237,224,200,0.03)', border: '1px solid rgba(212,168,67,0.08)' }}>
                <h3 className="mb-4" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.1rem', color: 'var(--parchment)' }}>Cosa include</h3>
                <ul className="space-y-3">
                  {[
                    'Soggiorno completo nel castello (3 giorni e 2 notti)',
                    'Tutte le attività: incantesimi, pozioni, creature fantastiche',
                    'Spettacoli dal vivo con effetti speciali',
                    'Laboratori artistici e visite guidate',
                    'Tornei tra le casate e misteri da risolvere',
                    'Materiali, oggetti di scena e gadget',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3" style={{ color: 'var(--parchment-dim)', lineHeight: 1.7 }}>
                      <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold)', opacity: 0.6 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Next editions cards */}
        <div>
          <ScrollReveal>
            <p className="mb-8" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>Prossimi Appuntamenti</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {nextEditions.map((ed, i) => (
              <ScrollReveal key={ed.location} delay={i * 0.1}>
                <div className="p-7 sm:p-8 rounded-2xl h-full flex flex-col transition-all duration-300" style={{
                  background: 'rgba(237,224,200,0.03)',
                  border: '1px solid rgba(212,168,67,0.1)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.2)'; e.currentTarget.style.background = 'rgba(237,224,200,0.05)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.1)'; e.currentTarget.style.background = 'rgba(237,224,200,0.03)' }}
                >
                  <span className="inline-block self-start px-3 py-1 rounded-full text-xs tracking-[0.12em] uppercase mb-5" style={{ fontFamily: '"Cinzel", serif', color: 'var(--gold-dim)', border: '1px solid rgba(212,168,67,0.15)' }}>{ed.tag}</span>
                  <h3 className="mb-2" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: 'var(--parchment)', lineHeight: 1.1 }}>{ed.location}</h3>
                  <p className="mb-1" style={{ color: 'var(--parchment-dim)', opacity: 0.6 }}>{ed.city}</p>
                  <p className="mb-5" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'var(--parchment)' }}>{ed.dates}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm" style={{ color: ed.statusColor }}>
                      <span className="w-2 h-2 rounded-full" style={{ background: ed.statusColor }} />
                      {ed.status}
                    </span>
                    <a href="#iscrizioni" className="btn-magic" style={{ padding: '0.5rem 1.5rem', fontSize: '0.65rem' }}>Iscriviti</a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
