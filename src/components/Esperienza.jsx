import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from './SectionTitle'
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
  const photoGridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on photo grid
      const images = photoGridRef.current?.querySelectorAll('.exp-photo')
      if (images) {
        images.forEach((img, i) => {
          gsap.to(img, {
            y: (i % 2 === 0 ? -30 : 30),
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          })
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="esperienza" className="relative overflow-hidden" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--void) 0%, var(--night) 20%, var(--purple-deep) 50%, var(--night) 80%, var(--void) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(200,169,81,0.04) 0%, transparent 50%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="L'Esperienza"
          subtitle="Un evento unico in Italia: tre giorni all'interno di un vero castello, interamente trasformato in un'accademia di magia."
        />

        {/* Narrative intro — broken layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-24 sm:mb-32">
          {/* Text block — offset */}
          <ScrollReveal className="lg:col-span-5 lg:col-start-1 flex flex-col justify-center" from="left">
            <div className="glass-dark rounded-sm p-8 sm:p-10" style={{ borderLeft: '2px solid var(--gold-dim)' }}>
              <h3 className="mb-5" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>
                La Lettera di Ammissione
              </h3>
              <p style={{ color: 'var(--parchment-dim)', lineHeight: 1.9 }}>
                Dopo aver ricevuto la lettera di ammissione, i ragazzi varcano le porte del castello
                e vengono assegnati a una delle quattro casate. Da quel momento inizia l'avventura:
                <strong style={{ color: 'var(--parchment)' }}> tre giorni come protagonisti di una storia magica</strong>,
                in compagnia di ragazze e ragazzi provenienti da tutta Italia.
              </p>
            </div>
          </ScrollReveal>

          {/* Photo collage — overlapping, broken grid */}
          <div ref={photoGridRef} className="lg:col-span-7 relative" style={{ minHeight: '400px' }}>
            <ScrollReveal className="exp-photo absolute top-0 right-0 w-[55%] sm:w-[50%] z-10" delay={0.1}>
              <div className="overflow-hidden" style={{ border: '1px solid rgba(200,169,81,0.1)' }}>
                <img src={foto7} alt="Lezione in sala affrescata" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </ScrollReveal>

            <ScrollReveal className="exp-photo absolute top-[15%] left-0 w-[50%] sm:w-[45%] z-20" delay={0.3}>
              <div className="overflow-hidden" style={{ border: '1px solid rgba(200,169,81,0.1)' }}>
                <img src={foto9} alt="Cerimonia smistamento" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </ScrollReveal>

            <ScrollReveal className="exp-photo absolute bottom-0 right-[5%] w-[45%] sm:w-[40%] z-30" delay={0.5}>
              <div className="overflow-hidden" style={{ border: '1px solid rgba(200,169,81,0.1)', boxShadow: '0 0 40px rgba(0,0,0,0.4)' }}>
                <img src={foto8} alt="Professoressa con illustrazione" className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Activities — asymmetric grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(200,169,81,0.06)' }}>
          {activities.map((act, i) => (
            <ScrollReveal key={act.title} delay={i * 0.08} from="fade">
              <div
                className="group relative p-8 sm:p-10 transition-all duration-700"
                style={{ background: 'var(--void)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(200,169,81,0.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--void)' }}
              >
                {/* Symbol */}
                <span className="block mb-5 transition-all duration-500 group-hover:scale-110" style={{ fontSize: '1.5rem', color: 'var(--gold-dim)', filter: 'drop-shadow(0 0 8px rgba(200,169,81,0.3))' }}>
                  {act.symbol}
                </span>
                <h3 className="mb-3 transition-colors duration-500" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.15rem', color: 'var(--parchment)', letterSpacing: '0.02em' }}>
                  {act.title}
                </h3>
                <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.7, opacity: 0.7 }}>
                  {act.desc}
                </p>
                {/* Hover glow line at bottom */}
                <div className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-700" style={{ background: 'linear-gradient(to right, transparent, var(--gold-dim), transparent)' }} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Academic years — floating tokens */}
        <ScrollReveal className="mt-20 sm:mt-28">
          <div className="text-center">
            <p className="mb-6" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>
              Sistema ad Anni Accademici
            </p>
            <p className="max-w-xl mx-auto mb-8" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, fontSize: 'var(--fs-small)' }}>
              Chi torna avanza di anno, con attività progressivamente più complesse. Un percorso magico che cresce con ogni partecipante.
            </p>
            <div className="flex justify-center gap-4 sm:gap-6">
              {['I', 'II', 'III', 'IV', 'V'].map((year, i) => (
                <ScrollReveal key={year} delay={i * 0.1} from="fade">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-500 hover:scale-110"
                    style={{
                      fontFamily: '"Cinzel", serif',
                      fontSize: '0.9rem',
                      color: 'var(--gold-dim)',
                      border: '1px solid rgba(200,169,81,0.2)',
                      borderRadius: '50%',
                      background: 'rgba(200,169,81,0.03)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(200,169,81,0.5)'
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(200,169,81,0.15)'
                      e.currentTarget.style.color = 'var(--gold)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(200,169,81,0.2)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.color = 'var(--gold-dim)'
                    }}
                  >
                    {year}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
