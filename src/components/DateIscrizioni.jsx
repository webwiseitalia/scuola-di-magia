import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'
import MagicParticles from './MagicParticles'

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
  { title: 'Primo della Classe', price: 'Sconto', desc: 'Per chi ha una media del 9+ nell\'ultima pagella. La magia premia lo studio!' },
  { title: 'Biglietto Famiglia', price: 'Fino a -€60', desc: 'Secondo figlio: -€30. Terzo figlio: -€60. Più maghi in famiglia, più si risparmia!' },
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
        gsap.set(split.chars, { opacity: 0, y: 50, scale: 0.8 })
        gsap.to(split.chars, {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.02, ease: 'back.out(2)',
          scrollTrigger: { trigger: heading, start: 'top 82%', once: true },
        })
      }

      // Price counter animation
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
    <section ref={sectionRef} id="iscrizioni" className="relative overflow-hidden" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)', background: 'linear-gradient(180deg, var(--void) 0%, var(--shadow) 50%, var(--void) 100%)' }}>
      <MagicParticles count={20} />

      {/* Header — centered this time for contrast with prev sections */}
      <div className="relative z-10 text-center mb-16 sm:mb-24 px-6">
        <span className="hidden sm:block text-gold-gradient mx-auto mb-4" style={{
          fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(4rem, 8vw, 7rem)',
          fontWeight: 700, lineHeight: 0.85, opacity: 0.1,
        }}>03</span>
        <p style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem' }}>
          Prenota il tuo posto
        </p>
        <h2 ref={headingRef} className="text-gold-gradient" style={{
          fontSize: 'var(--fs-heading)',
          fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
          fontWeight: 700, lineHeight: 1.1,
        }}>
          Date e Iscrizioni
        </h2>
        <p className="mt-5 mx-auto" style={{ color: 'var(--parchment-dim)', maxWidth: '540px', lineHeight: 1.8 }}>
          Le edizioni vanno storicamente sold out. Scegli la tua e prenota il tuo posto.
        </p>

        {/* Urgency */}
        <div className="mt-8">
          <span className="inline-flex items-center gap-2 px-5 py-2" style={{ border: '1px solid rgba(239,68,68,0.25)', background: 'rgba(239,68,68,0.06)', fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: '#f87171', letterSpacing: '0.12em' }}>
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Posti limitati — Storicamente Sold Out
          </span>
        </div>
      </div>

      {/* Edition cards — staggered widths */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6 mb-24 sm:mb-32">
        {editions.map((ed, i) => {
          const offsets = ['ml-0', 'sm:ml-8 lg:ml-16', 'sm:ml-4 lg:ml-8']
          return (
            <ScrollReveal key={ed.location} delay={i * 0.1}>
              <div className={offsets[i]} style={{ background: 'rgba(13,11,24,0.5)', backdropFilter: 'blur(8px)', border: '1px solid rgba(200,169,81,0.08)' }}>
                <div className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2" style={{ borderBottom: '1px solid rgba(200,169,81,0.06)' }}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: '1.15rem', color: 'var(--gold)' }}>{ed.location}</h3>
                    <span className="px-2.5 py-0.5 text-xs tracking-[0.15em] uppercase" style={{ fontFamily: '"Cinzel", serif', color: 'var(--gold-dim)', border: '1px solid rgba(200,169,81,0.15)' }}>{ed.tag}</span>
                  </div>
                  <span style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.4 }}>{ed.city}</span>
                </div>

                {ed.dates.map((date) => {
                  const s = statusMap[date.status]
                  return (
                    <div key={date.range} className="px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors duration-300" style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(200,169,81,0.02)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                        <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'var(--parchment)' }}>{date.range}</span>
                        {date.note && <span style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.4 }}>{date.note}</span>}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-xs tracking-[0.1em]" style={{ fontFamily: '"Cinzel", serif', color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>{s.label}</span>
                        {date.status !== 'soldout' ? (
                          <a href="#contatti" className="btn-magic" style={{ padding: '0.45rem 1.2rem', fontSize: '0.65rem' }}>Iscriviti</a>
                        ) : (
                          <span className="px-3 py-1.5 text-xs" style={{ fontFamily: '"Cinzel", serif', color: 'var(--parchment-dim)', opacity: 0.3, border: '1px solid rgba(255,255,255,0.05)' }}>Esaurito</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* Price — massive, left-aligned with promos right */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <ScrollReveal from="left">
              <p className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Quota di Partecipazione</p>
              <span ref={priceRef} className="block text-gold-gradient" style={{
                fontFamily: '"Cinzel Decorative", serif',
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: 700, lineHeight: 0.9, opacity: 0,
              }}>€300</span>
              <span className="block mt-2" style={{ color: 'var(--parchment-dim)', opacity: 0.4, fontStyle: 'italic' }}>/ partecipante — tutto incluso</span>
              <p className="mt-6 max-w-sm" style={{ color: 'var(--parchment-dim)', opacity: 0.5, fontSize: 'var(--fs-small)', lineHeight: 1.8 }}>
                Soggiorno nel castello per 3 giorni, tutte le attività, intrattenimento, spettacoli e materiali.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {promos.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1} from="right">
                <div className="flex gap-6 p-6 sm:p-8 transition-all duration-300" style={{ border: '1px solid rgba(200,169,81,0.06)', background: 'rgba(200,169,81,0.01)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.15)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.06)' }}
                >
                  <span className="shrink-0" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.8rem', color: 'var(--gold)', lineHeight: 2 }}>{p.price}</span>
                  <div>
                    <h4 className="mb-1" style={{ fontFamily: '"Cinzel", serif', fontSize: '1rem', color: 'var(--parchment)' }}>{p.title}</h4>
                    <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.7, opacity: 0.6 }}>{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-12">
          <p className="max-w-lg" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.4 }}>
            Età: 6-14 anni (dalla prima elementare). Requisito: saper scrivere per trascrivere le formule magiche.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
