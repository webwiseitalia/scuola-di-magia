import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'
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
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const numbers = statsRef.current?.querySelectorAll('.stat-number')
      if (numbers) {
        numbers.forEach((num, i) => {
          gsap.fromTo(num,
            { opacity: 0, y: 30, scale: 0.8 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.8, delay: i * 0.15,
              ease: 'back.out(2)',
              scrollTrigger: { trigger: num, start: 'top 85%', once: true },
            }
          )
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="chi-siamo" className="relative overflow-hidden" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--void) 0%, var(--night) 30%, var(--purple-deep) 50%, var(--night) 70%, var(--void) 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Chi Siamo" subtitle="L'associazione culturale dietro la magia." />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20 sm:mb-28">
          {/* Text — wider */}
          <ScrollReveal className="lg:col-span-7" from="left">
            <div>
              <h3 className="mb-6" style={{ fontFamily: '"Cinzel Decorative", "Cinzel", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>
                Associazione Culturale Caraval Spettacoli
              </h3>
              <div className="space-y-5" style={{ color: 'var(--parchment-dim)', lineHeight: 1.9 }}>
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

              {/* Mission */}
              <div className="mt-10 p-6 sm:p-8" style={{ borderLeft: '2px solid var(--gold-dim)', background: 'rgba(200,169,81,0.03)' }}>
                <p className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>
                  La Nostra Missione
                </p>
                <p style={{ fontStyle: 'italic', color: 'var(--parchment-dim)', lineHeight: 1.8 }}>
                  "Dimostrare che divertimento e cultura possono sposarsi in un'esperienza indimenticabile.
                  Incoraggiare la lettura, la socializzazione, il gioco intelligente e la cultura
                  attraverso l'ambientazione fantastica."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Photos — overlapping collage */}
          <ScrollReveal className="lg:col-span-5" delay={0.2} from="right">
            <div className="relative" style={{ minHeight: '500px' }}>
              <div className="absolute top-0 left-0 w-[65%] overflow-hidden" style={{ border: '1px solid rgba(200,169,81,0.1)', zIndex: 1 }}>
                <img src={foto2} alt="Maestro di magia" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="absolute top-[20%] right-0 w-[55%] overflow-hidden" style={{ border: '1px solid rgba(200,169,81,0.1)', zIndex: 2, boxShadow: '0 0 40px rgba(0,0,0,0.4)' }}>
                <img src={foto14} alt="Staff in costume" className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="absolute bottom-0 left-[10%] w-[50%] overflow-hidden" style={{ border: '1px solid rgba(200,169,81,0.1)', zIndex: 3, boxShadow: '-10px 10px 40px rgba(0,0,0,0.5)' }}>
                <img src={foto13} alt="Attore legge una lettera" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats — dramatic numbers */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(200,169,81,0.06)' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="stat-number p-8 sm:p-10 text-center" style={{ background: 'var(--void)', opacity: 0 }}>
              <span className="block text-gold-gradient" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700 }}>
                {stat.number}
              </span>
              <span className="block mt-2" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', letterSpacing: '0.1em', opacity: 0.5 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
