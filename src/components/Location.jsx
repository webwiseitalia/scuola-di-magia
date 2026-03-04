import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'
import FloatingCandles from './FloatingCandles'
import Fireflies from './Fireflies'
import FloatingRunes from './FloatingRunes'
import fotoThiene from '../assets/foto/foto-10.webp'
import fotoLezione from '../assets/foto/foto-7.webp'
import fotoXmas from '../assets/foto/foto-15.webp'

gsap.registerPlugin(ScrollTrigger)

const castles = [
  {
    name: 'Castello di Thiene',
    city: 'Thiene, Vicenza',
    season: 'Agosto — Settembre',
    tag: 'La "Hogwarts Italiana"',
    desc: 'Location principale e più iconica della Scuola di Magia. Dimora storica con sale affrescate, giardini e un fascino senza tempo. Il castello viene interamente allestito con ambienti tematici.',
    img: fotoThiene,
    align: 'right',
  },
  {
    name: 'Palazzo Barbo',
    city: 'Torre Pallavicina, Bergamo',
    season: 'Maggio',
    tag: 'Edizione Primaverile',
    desc: 'Dimora rinascimentale, location delle edizioni primaverili. Ampi spazi, giardini e sale che si prestano perfettamente all\'allestimento dell\'accademia di magia.',
    img: fotoLezione,
    align: 'left',
  },
  {
    name: 'Castel Mareccio',
    city: 'Bolzano',
    season: 'Gennaio',
    tag: 'Xmas Edition',
    desc: 'Castello medievale nel cuore di Bolzano. Mura antiche, neve e magia natalizia: la cornice perfetta per un\'esperienza unica durante le festività.',
    img: fotoXmas,
    align: 'center',
  },
]

export default function Location() {
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

      gsap.utils.toArray('.loc-img').forEach((img) => {
        gsap.fromTo(img, { scale: 1.12 }, {
          scale: 1, scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 2 },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="location" className="relative bg-great-hall section-glow-top" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <FloatingCandles count={6} className="opacity-40" />
      <Fireflies count={10} />
      <FloatingRunes count={5} />

      {/* Section heading — right-aligned */}
      <div className="relative z-10 max-w-[90rem] mx-auto mb-20 sm:mb-28 px-6 sm:px-10 lg:px-16">
        <div className="flex justify-end">
          <div className="text-right max-w-2xl">
            <p className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              I castelli
            </p>
            <h2 ref={headingRef} style={{
              fontSize: 'clamp(2.8rem, 8vw, 7rem)',
              fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
              fontWeight: 700, lineHeight: 0.85,
              letterSpacing: '-0.03em',
              color: 'var(--parchment)',
            }}>
              Le Location
            </h2>
            <p className="mt-5" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8 }}>
              Castelli e dimore storiche che si trasformano in accademie di magia.
            </p>
          </div>
        </div>
      </div>

      {/* Castle blocks */}
      <div className="relative z-10 space-y-32 sm:space-y-40">
        {castles.map((castle, i) => (
          <div key={castle.name}>
            {castle.align === 'right' && (
              <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-start">
                  {/* Photo — spans most of the width */}
                  <ScrollReveal className="lg:col-span-8">
                    <div className="overflow-hidden rounded-2xl relative" style={{ height: 'clamp(350px, 50vh, 550px)' }}>
                      <img src={castle.img} alt={castle.name} className="loc-img w-full h-full object-cover" />
                      <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to right, transparent 40%, rgba(5,5,8,0.4) 100%)' }} />
                      <span className="absolute top-5 left-5 px-4 py-2 rounded-full text-xs tracking-[0.15em] uppercase" style={{
                        fontFamily: '"Cinzel", serif', color: 'var(--gold)', background: 'rgba(5,5,8,0.8)', backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(212,168,67,0.2)',
                      }}>
                        {castle.tag}
                      </span>
                    </div>
                  </ScrollReveal>

                  {/* Text — overlaps the photo */}
                  <ScrollReveal className="lg:col-span-5 lg:-ml-8 lg:mt-20 relative z-10" from="right" delay={0.15}>
                    <div className="p-8 sm:p-10 rounded-2xl" style={{
                      background: 'rgba(10, 10, 18, 0.85)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(212,168,67,0.1)',
                    }}>
                      <h3 style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--parchment)', lineHeight: 1.1, marginBottom: '0.75rem' }}>
                        {castle.name}
                      </h3>
                      <div className="flex items-center gap-3 mb-5" style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.6 }}>
                        <span>{castle.city}</span>
                        <span style={{ width: '1.5rem', height: '1px', background: 'rgba(212,168,67,0.3)', display: 'inline-block' }} />
                        <span>{castle.season}</span>
                      </div>
                      <p className="mb-6" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, fontSize: 'var(--fs-body)' }}>
                        {castle.desc}
                      </p>
                      <a href="#iscrizioni" className="btn-magic" style={{ fontSize: '0.7rem', padding: '0.6rem 1.8rem' }}>Vedi le date</a>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            )}

            {castle.align === 'left' && (
              <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-start">
                  {/* Text — left side, overlaps photo */}
                  <ScrollReveal className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:mt-20 relative z-10 lg:order-1" from="left" delay={0.15}>
                    <div className="p-8 sm:p-10 rounded-2xl" style={{
                      background: 'rgba(10, 10, 18, 0.85)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(212,168,67,0.1)',
                    }}>
                      <h3 style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--parchment)', lineHeight: 1.1, marginBottom: '0.75rem' }}>
                        {castle.name}
                      </h3>
                      <div className="flex items-center gap-3 mb-5" style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.6 }}>
                        <span>{castle.city}</span>
                        <span style={{ width: '1.5rem', height: '1px', background: 'rgba(212,168,67,0.3)', display: 'inline-block' }} />
                        <span>{castle.season}</span>
                      </div>
                      <p className="mb-6" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, fontSize: 'var(--fs-body)' }}>
                        {castle.desc}
                      </p>
                      <a href="#iscrizioni" className="btn-magic" style={{ fontSize: '0.7rem', padding: '0.6rem 1.8rem' }}>Vedi le date</a>
                    </div>
                  </ScrollReveal>

                  {/* Photo — right side */}
                  <ScrollReveal className="lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:order-2">
                    <div className="overflow-hidden rounded-2xl relative" style={{ height: 'clamp(350px, 50vh, 550px)' }}>
                      <img src={castle.img} alt={castle.name} className="loc-img w-full h-full object-cover" />
                      <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to left, transparent 40%, rgba(5,5,8,0.4) 100%)' }} />
                      <span className="absolute top-5 right-5 px-4 py-2 rounded-full text-xs tracking-[0.15em] uppercase" style={{
                        fontFamily: '"Cinzel", serif', color: 'var(--gold)', background: 'rgba(5,5,8,0.8)', backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(212,168,67,0.2)',
                      }}>
                        {castle.tag}
                      </span>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            )}

            {castle.align === 'center' && (
              <div>
                {/* Full-width immersive photo */}
                <ScrollReveal>
                  <div className="relative overflow-hidden rounded-3xl mx-4 sm:mx-8 lg:mx-16" style={{ height: 'clamp(400px, 60vh, 650px)' }}>
                    <img src={castle.img} alt={castle.name} className="loc-img w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, rgba(5,5,8,0.2) 50%, rgba(5,5,8,0.3) 100%)' }} />
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
                      <div className="max-w-xl">
                        <span className="inline-block px-4 py-2 mb-5 rounded-full text-xs tracking-[0.15em] uppercase" style={{
                          fontFamily: '"Cinzel", serif', color: 'var(--gold)', background: 'rgba(5,5,8,0.7)', backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(212,168,67,0.2)',
                        }}>
                          {castle.tag}
                        </span>
                        <h3 style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--parchment)', lineHeight: 1, marginBottom: '0.75rem' }}>
                          {castle.name}
                        </h3>
                        <div className="flex items-center gap-3 mb-5" style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.7 }}>
                          <span>{castle.city}</span>
                          <span style={{ width: '1.5rem', height: '1px', background: 'rgba(212,168,67,0.3)', display: 'inline-block' }} />
                          <span>{castle.season}</span>
                        </div>
                        <p className="mb-6" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, maxWidth: '400px' }}>
                          {castle.desc}
                        </p>
                        <a href="#iscrizioni" className="btn-magic" style={{ fontSize: '0.7rem', padding: '0.6rem 1.8rem' }}>Vedi le date</a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
