import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'
import fotoThiene from '../assets/foto/foto-10.webp'
import fotoLezione from '../assets/foto/foto-7.webp'
import fotoXmas from '../assets/foto/foto-15.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Location() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = headingRef.current
      if (heading) {
        const split = new SplitType(heading, { types: 'chars' })
        gsap.set(split.chars, { opacity: 0, y: 40 })
        gsap.to(split.chars, {
          opacity: 1, y: 0, duration: 0.7, stagger: { each: 0.02, from: 'end' }, ease: 'power3.out',
          scrollTrigger: { trigger: heading, start: 'top 82%', once: true },
        })
      }

      gsap.utils.toArray('.loc-img').forEach((img) => {
        gsap.fromTo(img, { scale: 1.15 }, {
          scale: 1, scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 2 },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="location" className="relative" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)', background: 'linear-gradient(180deg, var(--void) 0%, var(--abyss) 50%, var(--void) 100%)' }}>

      {/* Section heading — right-aligned for variety */}
      <div className="max-w-7xl mx-auto mb-20 sm:mb-28" style={{ paddingLeft: 'clamp(2rem, 4vw, 4rem)', paddingRight: 'clamp(2rem, 8vw, 10rem)' }}>
        <div className="flex justify-end">
          <div className="text-right max-w-2xl">
            <div className="flex items-center justify-end gap-6 mb-6">
              <div>
                <p style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem' }}>
                  I castelli
                </p>
                <h2 ref={headingRef} className="text-gold-gradient" style={{
                  fontSize: 'var(--fs-heading)',
                  fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
                  fontWeight: 700, lineHeight: 1.1,
                }}>
                  Le Location
                </h2>
              </div>
              <span className="hidden sm:block text-gold-gradient" style={{
                fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(4rem, 8vw, 7rem)',
                fontWeight: 700, lineHeight: 0.85, opacity: 0.15,
              }}>02</span>
            </div>
            <p style={{ color: 'var(--parchment-dim)', lineHeight: 1.9 }}>
              Castelli e dimore storiche che si trasformano in accademie di magia.
            </p>
          </div>
        </div>
      </div>

      {/* CASTLE 1: Thiene — full-bleed image left, text right, 8/4 split */}
      <div className="mb-24 sm:mb-32">
        <div className="grid lg:grid-cols-12 items-start">
          <ScrollReveal className="lg:col-span-8" from="left">
            <div className="overflow-hidden relative" style={{ border: '1px solid rgba(200,169,81,0.08)' }}>
              <img src={fotoThiene} alt="Castello di Thiene" className="loc-img w-full aspect-[16/9] object-cover" />
              <span className="absolute top-5 left-5 px-3 py-1.5" style={{
                fontFamily: '"Cinzel", serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--gold)', border: '1px solid rgba(200,169,81,0.3)', background: 'rgba(8,7,14,0.8)', backdropFilter: 'blur(8px)',
              }}>
                La "Hogwarts Italiana"
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-4 px-6 sm:px-8 lg:px-10 py-8 lg:py-0 lg:pt-12" from="right" delay={0.2}>
            <h3 className="mb-2" style={{ fontFamily: '"Cinzel Decorative", "Cinzel", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>
              Castello di Thiene
            </h3>
            <div className="flex items-center gap-3 mb-5" style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.5 }}>
              <span>Thiene, Vicenza</span>
              <span style={{ width: '1.5rem', height: '1px', background: 'rgba(200,169,81,0.3)', display: 'inline-block' }} />
              <span>Agosto — Settembre</span>
            </div>
            <p className="mb-6" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, fontSize: 'var(--fs-small)' }}>
              Location principale e più iconica della Scuola di Magia Italiana. Dimora storica con sale affrescate, giardini e un fascino senza tempo. Il castello viene interamente allestito con ambienti tematici: aule, dormitori, segrete e sale comuni delle casate.
            </p>
            <a href="#iscrizioni" className="inline-flex items-center gap-2 group" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: 'var(--gold-dim)', letterSpacing: '0.1em', transition: 'color 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gold-dim)' }}
            >
              Vedi le date <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* CASTLE 2: Palazzo Barbo — text left narrow, image right wide, reversed weight */}
      <div className="mb-24 sm:mb-32">
        <div className="grid lg:grid-cols-12 items-start">
          <ScrollReveal className="lg:col-span-4 px-6 sm:px-8 lg:px-10 py-8 lg:py-0 lg:pt-8 order-2 lg:order-1" from="left" delay={0.1}>
            <h3 className="mb-2" style={{ fontFamily: '"Cinzel Decorative", "Cinzel", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>
              Palazzo Barbo
            </h3>
            <div className="flex items-center gap-3 mb-5" style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.5 }}>
              <span>Torre Pallavicina, Bergamo</span>
              <span style={{ width: '1.5rem', height: '1px', background: 'rgba(200,169,81,0.3)', display: 'inline-block' }} />
              <span>Maggio</span>
            </div>
            <p className="mb-6" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, fontSize: 'var(--fs-small)' }}>
              Dimora storica dal fascino rinascimentale, location delle edizioni primaverili. Ampi spazi, giardini e sale che si prestano perfettamente all'allestimento dell'accademia di magia.
            </p>
            <a href="#iscrizioni" className="inline-flex items-center gap-2 group" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: 'var(--gold-dim)', letterSpacing: '0.1em', transition: 'color 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gold-dim)' }}
            >
              Vedi le date <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-8 order-1 lg:order-2" from="right">
            <div className="overflow-hidden relative" style={{ border: '1px solid rgba(200,169,81,0.08)' }}>
              <img src={fotoLezione} alt="Palazzo Barbo" className="loc-img w-full aspect-[16/9] object-cover" />
              <span className="absolute top-5 right-5 px-3 py-1.5" style={{
                fontFamily: '"Cinzel", serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--gold)', border: '1px solid rgba(200,169,81,0.3)', background: 'rgba(8,7,14,0.8)', backdropFilter: 'blur(8px)',
              }}>
                Edizione Primaverile
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* CASTLE 3: Castel Mareccio — full-width image, text overlay bottom-left */}
      <div>
        <ScrollReveal>
          <div className="relative overflow-hidden mx-6 sm:mx-8 lg:mx-16" style={{ border: '1px solid rgba(200,169,81,0.08)' }}>
            <img src={fotoXmas} alt="Castel Mareccio" className="loc-img w-full aspect-[21/9] object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,7,14,0.85) 0%, rgba(8,7,14,0.3) 60%, transparent 100%)' }} />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 max-w-xl">
              <span className="inline-block px-3 py-1.5 mb-4" style={{
                fontFamily: '"Cinzel", serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--gold)', border: '1px solid rgba(200,169,81,0.3)', background: 'rgba(8,7,14,0.6)',
              }}>
                Xmas Edition
              </span>
              <h3 className="mb-2" style={{ fontFamily: '"Cinzel Decorative", "Cinzel", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>
                Castel Mareccio
              </h3>
              <div className="flex items-center gap-3 mb-4" style={{ fontSize: 'var(--fs-small)', color: 'var(--parchment-dim)', opacity: 0.6 }}>
                <span>Bolzano</span>
                <span style={{ width: '1.5rem', height: '1px', background: 'rgba(200,169,81,0.3)', display: 'inline-block' }} />
                <span>Gennaio</span>
              </div>
              <p className="mb-5" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, fontSize: 'var(--fs-small)' }}>
                Castello medievale nel cuore di Bolzano. Mura antiche, atmosfera medievale, neve e magia natalizia: la cornice perfetta per un'esperienza unica durante le festività.
              </p>
              <a href="#iscrizioni" className="inline-flex items-center gap-2 group" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: 'var(--gold-dim)', letterSpacing: '0.1em', transition: 'color 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gold-dim)' }}
              >
                Vedi le date <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
