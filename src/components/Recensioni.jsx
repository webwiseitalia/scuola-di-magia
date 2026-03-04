import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from './ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  { text: "Mio figlio non ha smesso di parlarne per settimane. Ha trovato amici da tutta Italia e non vede l'ora di tornare per il secondo anno.", author: 'Mamma di Lorenzo, 9 anni', edition: 'Castello di Thiene 2024' },
  { text: "Eravamo preoccupati a lasciarlo tre giorni, ma lo staff è stato incredibile. Professionale, attento, divertente. È tornato con gli occhi che brillavano.", author: 'Genitori di Sofia, 11 anni', edition: 'Palazzo Barbo 2024' },
  { text: "L'atmosfera nel castello è pazzesca. Ogni angolo è curato nei minimi dettagli. È come entrare davvero in un mondo magico.", author: 'Papà di Marco e Giulia', edition: 'Xmas Edition Bolzano 2024' },
  { text: "Il valore educativo mi ha colpita. Laboratori, lavoro di squadra, creatività... tutto è pensato per far crescere i ragazzi.", author: 'Mamma di Alessia, 8 anni', edition: 'Castello di Thiene 2023' },
]

const press = [
  { name: 'Giornale di Vicenza', quote: 'La magia prende vita nelle sale del Castello di Thiene' },
  { name: 'Corriere Nazionale', quote: 'Un evento unico per i giovani appassionati del fantasy' },
  { name: 'BergamoNews', quote: 'Palazzo Barbo si trasforma in un\'accademia di magia' },
  { name: 'La Voce di Bolzano', quote: 'Castel Mareccio ospita la Xmas Edition della Scuola di Magia' },
  { name: 'NordEst24', quote: 'Un progetto culturale che unisce teatro, educazione e fantasia' },
  { name: 'La Piazza Web', quote: 'Sold out per la Scuola di Magia: ragazzi da tutta Italia' },
]

export default function Recensioni() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.review-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="recensioni" className="relative" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)', background: 'linear-gradient(180deg, var(--void) 0%, var(--abyss) 50%, var(--void) 100%)' }}>

      {/* Heading — right-aligned with giant quote mark */}
      <div className="max-w-7xl mx-auto mb-20 sm:mb-28 px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end gap-6">
          <span className="hidden lg:block text-gold-gradient" style={{
            fontFamily: '"Cinzel Decorative", serif',
            fontSize: 'clamp(8rem, 15vw, 14rem)',
            fontWeight: 700, lineHeight: 0.7, opacity: 0.06,
          }}>"</span>
          <div className="lg:ml-auto lg:text-right max-w-xl">
            <p style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem' }}>
              Testimonianze
            </p>
            <h2 className="text-gold-gradient" style={{
              fontSize: 'var(--fs-heading)',
              fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
              fontWeight: 700, lineHeight: 1.1,
            }}>
              Dicono di Noi
            </h2>
            <p className="mt-5" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8 }}>
              Le parole di chi ha vissuto la magia.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials — 1 featured large + 3 smaller, asymmetric */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24 sm:mb-32">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Featured testimonial — spans 7 cols */}
          <div className="review-card lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col" style={{
            opacity: 0, border: '1px solid rgba(200,169,81,0.1)', background: 'rgba(200,169,81,0.02)',
          }}>
            <span className="block mb-6" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: '3.5rem', lineHeight: 1, color: 'var(--gold-dim)', opacity: 0.3 }}>"</span>
            <p className="flex-1 mb-8" style={{ fontStyle: 'italic', color: 'var(--parchment)', lineHeight: 2, fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)' }}>{testimonials[0].text}</p>
            <div style={{ borderTop: '1px solid rgba(200,169,81,0.1)', paddingTop: '1rem' }}>
              <p style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: 'var(--parchment)' }}>{testimonials[0].author}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--parchment-dim)', opacity: 0.4, marginTop: '0.2rem' }}>{testimonials[0].edition}</p>
            </div>
          </div>

          {/* Remaining 3 — stacked in 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            {testimonials.slice(1).map((t, i) => (
              <div key={i} className="review-card p-6 sm:p-7 flex flex-col transition-all duration-300" style={{
                opacity: 0, border: '1px solid rgba(200,169,81,0.06)', background: 'rgba(200,169,81,0.01)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.15)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.06)' }}
              >
                <p className="flex-1 mb-4" style={{ fontStyle: 'italic', color: 'var(--parchment-dim)', lineHeight: 1.8, fontSize: 'var(--fs-small)' }}>"{t.text}"</p>
                <div>
                  <p style={{ fontFamily: '"Cinzel", serif', fontSize: '0.75rem', color: 'var(--parchment)' }}>{t.author}</p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--parchment-dim)', opacity: 0.35, marginTop: '0.15rem' }}>{t.edition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Press — horizontal scroll strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px" style={{ background: 'rgba(200,169,81,0.3)' }} />
            <span style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Rassegna Stampa</span>
          </div>
        </ScrollReveal>

        <div className="overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
          <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
            {press.map((item) => (
              <ScrollReveal key={item.name}>
                <div className="p-5 sm:p-6 shrink-0" style={{ width: 'clamp(260px, 22vw, 320px)', border: '1px solid rgba(200,169,81,0.06)', background: 'rgba(200,169,81,0.01)' }}>
                  <h4 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: 'var(--gold)', letterSpacing: '0.05em' }}>{item.name}</h4>
                  <p style={{ fontStyle: 'italic', color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.5 }}>"{item.quote}"</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
