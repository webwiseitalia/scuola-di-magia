import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'
import fotoThiene from '../assets/foto/foto-10.webp'
import fotoLezione from '../assets/foto/foto-7.webp'
import fotoXmas from '../assets/foto/foto-15.webp'

gsap.registerPlugin(ScrollTrigger)

const locations = [
  {
    name: 'Castello di Thiene',
    city: 'Thiene, Vicenza',
    period: 'Agosto — Settembre',
    tag: 'La "Hogwarts Italiana"',
    description: 'Location principale e più iconica della Scuola di Magia Italiana. Dimora storica con sale affrescate, giardini e un fascino senza tempo. Il castello viene interamente allestito con ambienti tematici: aule, dormitori, segrete e sale comuni delle casate.',
    image: fotoThiene,
  },
  {
    name: 'Palazzo Barbo',
    city: 'Torre Pallavicina, Bergamo',
    period: 'Maggio',
    tag: 'Edizione Primaverile',
    description: 'Dimora storica dal fascino rinascimentale, location delle edizioni primaverili. Ampi spazi, giardini e sale che si prestano perfettamente all\'allestimento dell\'accademia di magia.',
    image: fotoLezione,
  },
  {
    name: 'Castel Mareccio',
    city: 'Bolzano',
    period: 'Gennaio',
    tag: 'Xmas Edition',
    description: 'Castello medievale nel cuore di Bolzano. Mura antiche, atmosfera medievale, neve e magia natalizia: la cornice perfetta per un\'esperienza unica durante le festività.',
    image: fotoXmas,
  },
]

export default function Location() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal reveal for each location card
      gsap.utils.toArray('.loc-card').forEach((card, i) => {
        const img = card.querySelector('.loc-img')
        if (img) {
          gsap.fromTo(img,
            { scale: 1.2, opacity: 0.7 },
            {
              scale: 1, opacity: 1,
              scrollTrigger: { trigger: card, start: 'top 80%', end: 'bottom 20%', scrub: 1.5 },
            }
          )
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="location" className="relative overflow-hidden" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--void) 0%, var(--abyss) 50%, var(--void) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(200,169,81,0.03) 0%, transparent 50%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Le Location"
          subtitle="Castelli e dimore storiche che si trasformano in accademie di magia. Ogni edizione ha la sua identità unica."
        />

        <div className="space-y-20 sm:space-y-32">
          {locations.map((loc, i) => (
            <div key={loc.name} className="loc-card">
              {/* Alternating layout */}
              <div className={`grid lg:grid-cols-12 gap-6 lg:gap-0 items-center ${i % 2 === 1 ? 'direction-reverse' : ''}`}>
                {/* Image — dramatic reveal */}
                <ScrollReveal
                  className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:col-start-6' : 'lg:col-start-1'} relative`}
                  from={i % 2 === 0 ? 'left' : 'right'}
                >
                  <div className="relative overflow-hidden group" style={{ aspectRatio: '16/10' }}>
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="loc-img w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(${i % 2 === 0 ? 'to right' : 'to left'}, rgba(8,7,14,0.7) 0%, transparent 40%, transparent 60%, rgba(8,7,14,0.4) 100%)` }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,7,14,0.6) 0%, transparent 40%)' }} />

                    {/* Tag overlay */}
                    <span className="absolute top-6 left-6 px-3 py-1.5 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: '"Cinzel", serif', color: 'var(--gold)', border: '1px solid rgba(200,169,81,0.3)', background: 'rgba(8,7,14,0.7)', backdropFilter: 'blur(8px)' }}>
                      {loc.tag}
                    </span>
                  </div>
                </ScrollReveal>

                {/* Text — overlapping the image */}
                <ScrollReveal
                  className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-6'} relative z-10`}
                  from={i % 2 === 0 ? 'right' : 'left'}
                  delay={0.2}
                >
                  <div className="glass-dark p-8 sm:p-10 lg:p-12" style={{ marginTop: '-2rem', marginLeft: i % 2 === 0 ? undefined : undefined }}>
                    <h3 style={{ fontFamily: '"Cinzel Decorative", "Cinzel", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                      {loc.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-5" style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.6 }}>
                      <span>{loc.city}</span>
                      <span>·</span>
                      <span>{loc.period}</span>
                    </div>
                    <p style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                      {loc.description}
                    </p>
                    <a href="#iscrizioni" className="inline-flex items-center gap-2 group/link" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: 'var(--gold-dim)', letterSpacing: '0.1em', transition: 'color 0.4s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gold-dim)' }}
                    >
                      Vedi le date
                      <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-2">&rarr;</span>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
