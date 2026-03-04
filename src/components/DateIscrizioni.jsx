import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'
import MagicParticles from './MagicParticles'

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

const statusStyles = {
  available: { label: 'Disponibile', bg: 'rgba(34,197,94,0.1)', color: '#4ade80', border: 'rgba(34,197,94,0.25)' },
  few: { label: 'Ultimi Posti', bg: 'rgba(234,179,8,0.1)', color: '#facc15', border: 'rgba(234,179,8,0.25)' },
  soldout: { label: 'Sold Out', bg: 'rgba(239,68,68,0.08)', color: '#f87171', border: 'rgba(239,68,68,0.2)' },
}

const promos = [
  { symbol: '◈', title: 'Sostenitore', price: '€300', desc: 'Gadget personalizzato + menzione nei ringraziamenti ufficiali + riconoscimento "Famiglia di Maghi".' },
  { symbol: '✦', title: 'Primo della Classe', price: 'Sconto', desc: 'Per chi ha una media del 9+ nell\'ultima pagella. La magia premia lo studio!' },
  { symbol: '⟐', title: 'Biglietto Famiglia', price: 'Fino a -€60', desc: 'Secondo figlio: -€30. Terzo figlio: -€60. Più maghi in famiglia, più si risparmia!' },
]

export default function DateIscrizioni() {
  return (
    <section id="iscrizioni" className="relative overflow-hidden" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--void) 0%, var(--shadow) 30%, var(--purple-deep) 50%, var(--shadow) 70%, var(--void) 100%)' }} />
      <MagicParticles count={25} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Date e Iscrizioni" subtitle="Le edizioni vanno storicamente sold out. Scegli la tua e prenota il tuo posto." />

        {/* Urgency */}
        <ScrollReveal className="mb-14 sm:mb-20">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2" style={{ border: '1px solid rgba(139,26,26,0.3)', background: 'rgba(139,26,26,0.08)', fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: '#f87171', letterSpacing: '0.15em' }}>
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              Posti limitati — Storicamente Sold Out
            </span>
          </div>
        </ScrollReveal>

        {/* Editions */}
        <div className="space-y-6 sm:space-y-8 mb-20 sm:mb-28">
          {editions.map((ed, i) => (
            <ScrollReveal key={ed.location} delay={i * 0.1}>
              <div className="glass-dark overflow-hidden" style={{ borderLeft: '2px solid rgba(200,169,81,0.15)' }}>
                <div className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3" style={{ borderBottom: '1px solid rgba(200,169,81,0.06)' }}>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: '1.2rem', color: 'var(--gold)' }}>{ed.location}</h3>
                      <span className="px-2.5 py-0.5 text-xs tracking-[0.15em] uppercase" style={{ fontFamily: '"Cinzel", serif', color: 'var(--gold-dim)', border: '1px solid rgba(200,169,81,0.15)', background: 'rgba(200,169,81,0.04)' }}>{ed.tag}</span>
                    </div>
                    <p className="mt-1" style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.5 }}>{ed.city}</p>
                  </div>
                </div>

                {ed.dates.map((date) => {
                  const s = statusStyles[date.status]
                  return (
                    <div key={date.range} className="px-6 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors duration-300" style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(200,169,81,0.02)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'var(--parchment)' }}>{date.range}</span>
                        {date.note && <span style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.5 }}>{date.note}</span>}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-xs tracking-[0.1em]" style={{ fontFamily: '"Cinzel", serif', color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>{s.label}</span>
                        {date.status !== 'soldout' ? (
                          <a href="#contatti" className="btn-magic" style={{ padding: '0.5rem 1.5rem', fontSize: '0.7rem' }}>Iscriviti</a>
                        ) : (
                          <span className="px-4 py-2 text-xs tracking-[0.1em]" style={{ fontFamily: '"Cinzel", serif', color: 'var(--parchment-dim)', opacity: 0.3, border: '1px solid rgba(255,255,255,0.05)' }}>Esaurito</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Price */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Quota di Partecipazione</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-gold-gradient" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700 }}>€300</span>
              <span style={{ color: 'var(--parchment-dim)', opacity: 0.5 }}>/ partecipante</span>
            </div>
            <p className="mt-3 max-w-lg mx-auto" style={{ color: 'var(--parchment-dim)', opacity: 0.6, fontSize: 'var(--fs-small)' }}>
              Tutto incluso: soggiorno nel castello per 3 giorni, tutte le attività, intrattenimento, spettacoli e materiali.
            </p>
          </div>
        </ScrollReveal>

        {/* Promos */}
        <div className="grid sm:grid-cols-3 gap-px" style={{ background: 'rgba(200,169,81,0.06)' }}>
          {promos.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1} from="fade">
              <div className="p-8 sm:p-10 text-center transition-all duration-500" style={{ background: 'var(--void)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(200,169,81,0.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--void)' }}
              >
                <span className="block mb-4" style={{ fontSize: '1.5rem', color: 'var(--gold-dim)' }}>{p.symbol}</span>
                <h4 style={{ fontFamily: '"Cinzel", serif', fontSize: '1rem', color: 'var(--parchment)', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{p.title}</h4>
                <span className="block mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.75rem', color: 'var(--gold-dim)' }}>{p.price}</span>
                <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.7, opacity: 0.6 }}>{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Age note */}
        <ScrollReveal className="mt-10 text-center">
          <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.5 }}>
            Età: 6-14 anni (dalla prima elementare). Requisito: saper scrivere per trascrivere le formule magiche.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
