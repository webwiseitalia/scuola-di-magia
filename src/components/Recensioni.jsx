import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from './SectionTitle'
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
  return (
    <section id="recensioni" className="relative overflow-hidden" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--void) 0%, var(--abyss) 50%, var(--void) 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Dicono di Noi" subtitle="Le parole di chi ha vissuto la magia." />

        {/* Testimonials — offset grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1} from={i % 2 === 0 ? 'left' : 'right'}>
              <div
                className="p-8 sm:p-10 h-full flex flex-col transition-all duration-500"
                style={{
                  background: 'var(--void)',
                  border: '1px solid rgba(200,169,81,0.06)',
                  marginTop: i % 2 === 1 ? '2rem' : '0',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.15)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(200,169,81,0.04)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.06)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* Quote mark */}
                <span className="block mb-6" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: '3rem', lineHeight: 1, color: 'var(--gold-dim)', opacity: 0.3 }}>"</span>

                <p className="flex-1 mb-8" style={{ fontStyle: 'italic', color: 'var(--parchment)', lineHeight: 1.9, fontSize: '1.05rem' }}>
                  {t.text}
                </p>

                <div style={{ borderTop: '1px solid rgba(200,169,81,0.08)', paddingTop: '1rem' }}>
                  <p style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: 'var(--parchment)', letterSpacing: '0.05em' }}>
                    {t.author}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--parchment-dim)', opacity: 0.4, marginTop: '0.25rem' }}>
                    {t.edition}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Press */}
        <ScrollReveal>
          <div className="divider-magic mb-10">
            <span style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>
              Rassegna Stampa
            </span>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(200,169,81,0.04)' }}>
          {press.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.05} from="fade">
              <div className="p-6 sm:p-8 text-center transition-all duration-300" style={{ background: 'var(--void)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(200,169,81,0.02)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--void)' }}
              >
                <h4 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: 'var(--gold)', letterSpacing: '0.05em' }}>{item.name}</h4>
                <p style={{ fontStyle: 'italic', color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.5 }}>"{item.quote}"</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
