import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'
import MagicParticles from './MagicParticles'
import StarsOverlay from './StarsOverlay'
import Fireflies from './Fireflies'
import FloatingRunes from './FloatingRunes'

gsap.registerPlugin(ScrollTrigger)

const editions = [
  {
    location: 'Castel Mareccio', city: 'Bolzano', tag: 'Xmas Edition',
    dates: [{ range: '2 — 4 Gennaio 2025', status: 'soldout', note: 'Tutti gli anni' }],
  },
  {
    location: 'Palazzo Barbo', city: 'Torre Pallavicina (BG)', tag: 'Edizione Primaverile',
    dates: [
      { range: '16 — 18 Maggio 2025', status: 'available', note: 'I — II Anno' },
      { range: '23 — 25 Maggio 2025', status: 'available', note: 'III — V Anno' },
    ],
  },
  {
    location: 'Castello di Thiene', city: 'Thiene (VI)', tag: 'Edizione Estiva',
    dates: [
      { range: '26 — 28 Agosto 2025', status: 'available', note: 'I Anno' },
      { range: '29 — 31 Agosto 2025', status: 'few', note: 'II — III Anno' },
      { range: '5 — 7 Settembre 2025', status: 'available', note: 'IV — V Anno' },
    ],
  },
]

const statusMap = {
  available: { label: 'Disponibile', color: '#4ade80', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)' },
  few: { label: 'Ultimi Posti', color: '#facc15', bg: 'rgba(234,179,8,0.08)', border: 'rgba(234,179,8,0.2)' },
  soldout: { label: 'Sold Out', color: '#f87171', bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.15)' },
}

const promos = [
  { title: 'Sostenitore', price: '€300', desc: 'Gadget personalizzato + menzione nei ringraziamenti ufficiali + riconoscimento "Famiglia di Maghi".' },
  { title: 'Primo della Classe', price: 'Sconto', desc: "Per chi ha una media del 9+ nell'ultima pagella. La magia premia lo studio!" },
  { title: 'Biglietto Famiglia', price: 'Fino a -€60', desc: "Secondo figlio: -€30. Terzo figlio: -€60. Più maghi in famiglia, più si risparmia!" },
]

export default function DateIscrizioni() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const priceRef = useRef(null)

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

      const priceEl = priceRef.current
      if (priceEl) {
        gsap.fromTo(priceEl,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.6)',
            scrollTrigger: { trigger: priceEl, start: 'top 80%', once: true },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="iscrizioni" className="relative overflow-hidden bg-tower section-glow-top" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <MagicParticles count={20} />
      <StarsOverlay count={25} className="opacity-40" />
      <Fireflies count={12} />
      <FloatingRunes count={6} />

      {/* Header — left-aligned, big title */}
      <div className="relative z-10 max-w-[90rem] mx-auto mb-16 sm:mb-24 px-6 sm:px-10 lg:px-16">
        <p className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
          Prenota il tuo posto
        </p>
        <h2 ref={headingRef} style={{
          fontSize: 'clamp(2.8rem, 8vw, 7rem)',
          fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
          fontWeight: 700, lineHeight: 0.85,
          letterSpacing: '-0.03em',
          color: 'var(--parchment)',
        }}>
          Date e Iscrizioni
        </h2>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5">
          <p style={{ color: 'var(--parchment-dim)', maxWidth: '450px', lineHeight: 1.8 }}>
            Le edizioni vanno storicamente sold out. Scegli la tua e prenota il tuo posto.
          </p>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shrink-0" style={{ border: '1px solid rgba(239,68,68,0.25)', background: 'rgba(239,68,68,0.06)', fontFamily: '"Cinzel", serif', fontSize: '0.7rem', color: '#f87171', letterSpacing: '0.1em' }}>
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Posti limitati
          </span>
        </div>
      </div>

      {/* Edition cards */}
      <div className="relative z-10 max-w-[80rem] mx-auto px-6 sm:px-8 lg:px-12 space-y-6 mb-28 sm:mb-36">
        {editions.map((ed, i) => (
          <ScrollReveal key={ed.location} delay={i * 0.1}>
            <div className="rounded-2xl overflow-hidden" style={{
              background: 'rgba(237,224,200,0.03)',
              border: '1px solid rgba(212,168,67,0.1)',
            }}>
              <div className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2" style={{ borderBottom: '1px solid rgba(212,168,67,0.06)' }}>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: '1.15rem', color: 'var(--gold)' }}>{ed.location}</h3>
                  <span className="px-3 py-1 rounded-full text-xs tracking-[0.12em] uppercase" style={{ fontFamily: '"Cinzel", serif', color: 'var(--gold-dim)', border: '1px solid rgba(212,168,67,0.15)' }}>{ed.tag}</span>
                </div>
                <span style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.5 }}>{ed.city}</span>
              </div>

              {ed.dates.map((date) => {
                const s = statusMap[date.status]
                return (
                  <div key={date.range} className="px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors duration-300" style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,168,67,0.02)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                      <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.15rem', color: 'var(--parchment)' }}>{date.range}</span>
                      {date.note && <span style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.5 }}>{date.note}</span>}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs tracking-[0.1em]" style={{ fontFamily: '"Cinzel", serif', color: s.color, background: s.bg, border: '1px solid ' + s.border }}>{s.label}</span>
                      {date.status !== 'soldout' ? (
                        <a href="#contatti" className="btn-magic" style={{ padding: '0.45rem 1.4rem', fontSize: '0.65rem' }}>Iscriviti</a>
                      ) : (
                        <span className="px-4 py-1.5 rounded-full text-xs" style={{ fontFamily: '"Cinzel", serif', color: 'var(--parchment-dim)', opacity: 0.3, border: '1px solid rgba(255,255,255,0.05)' }}>Esaurito</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Price section — left price, right promos */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <ScrollReveal from="left">
              <p className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>Quota di Partecipazione</p>
              <span ref={priceRef} className="block" style={{
                fontFamily: '"Cinzel Decorative", serif',
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: 700, lineHeight: 0.9, opacity: 0,
                color: 'var(--gold)',
              }}>€300</span>
              <span className="block mt-3" style={{ color: 'var(--parchment-dim)', opacity: 0.5, fontStyle: 'italic', fontSize: 'var(--fs-body)' }}>/ partecipante — tutto incluso</span>
              <p className="mt-6 max-w-sm" style={{ color: 'var(--parchment-dim)', opacity: 0.6, lineHeight: 1.8 }}>
                Soggiorno nel castello per 3 giorni, tutte le attività, intrattenimento, spettacoli e materiali.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {promos.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1} from="right">
                <div className="flex gap-6 p-7 sm:p-8 transition-all duration-300 rounded-xl" style={{
                  border: '1px solid rgba(212,168,67,0.08)',
                  background: 'rgba(237,224,200,0.03)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.18)'; e.currentTarget.style.background = 'rgba(237,224,200,0.05)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.08)'; e.currentTarget.style.background = 'rgba(237,224,200,0.03)' }}
                >
                  <span className="shrink-0 w-16 text-right" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.85rem', color: 'var(--gold)', lineHeight: 2 }}>{p.price}</span>
                  <div>
                    <h4 className="mb-1.5" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.05rem', color: 'var(--parchment)' }}>{p.title}</h4>
                    <p style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, opacity: 0.7 }}>{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-12">
          <p className="max-w-lg" style={{ color: 'var(--parchment-dim)', opacity: 0.5 }}>
            Età: 6-14 anni (dalla prima elementare). Requisito: saper scrivere per trascrivere le formule magiche.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
