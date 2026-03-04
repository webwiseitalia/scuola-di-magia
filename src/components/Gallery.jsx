import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto12 from '../assets/foto/foto-12.webp'
import foto13 from '../assets/foto/foto-13.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto15 from '../assets/foto/foto-15.webp'
import foto16 from '../assets/foto/foto-16.webp'

gsap.registerPlugin(ScrollTrigger)

const photos = [
  { src: foto1, alt: 'Foto di gruppo', span: 'col-span-2 row-span-2' },
  { src: foto10, alt: 'Castello di Thiene', span: '' },
  { src: foto6, alt: 'Lezione di formule', span: '' },
  { src: foto9, alt: 'Cerimonia casate', span: 'row-span-2' },
  { src: foto2, alt: 'Maestro di magia', span: '' },
  { src: foto11, alt: 'Lezione con bacchetta', span: '' },
  { src: foto5, alt: 'Segrete del castello', span: 'col-span-2' },
  { src: foto15, alt: 'Xmas Edition', span: '' },
  { src: foto7, alt: 'Sala affrescata', span: '' },
  { src: foto8, alt: 'Professoressa creature', span: '' },
  { src: foto13, alt: 'Attore con lettera', span: '' },
  { src: foto14, alt: 'Staff in costume', span: 'col-span-2' },
  { src: foto4, alt: 'Bacchette magiche', span: '' },
  { src: foto16, alt: 'Stemma e Natale', span: '' },
  { src: foto12, alt: 'Lanterna medievale', span: '' },
  { src: foto3, alt: 'Creatura fantastica', span: '' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const gridRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      const heading = headingRef.current
      if (heading) {
        const split = new SplitType(heading, { types: 'chars' })
        gsap.set(split.chars, { opacity: 0, y: 30 })
        gsap.to(split.chars, {
          opacity: 1, y: 0, duration: 0.5, stagger: { each: 0.015, from: 'random' }, ease: 'power3.out',
          scrollTrigger: { trigger: heading, start: 'top 82%', once: true },
        })
      }

      // Grid items
      const items = gridRef.current?.querySelectorAll('.gal-item')
      if (items) {
        items.forEach((item, i) => {
          gsap.fromTo(item,
            { opacity: 0, y: 40, scale: 0.95 },
            {
              opacity: 1, y: 0, scale: 1, duration: 0.7, delay: (i % 4) * 0.06, ease: 'power3.out',
              scrollTrigger: { trigger: item, start: 'top 92%', once: true },
            }
          )
        })
      }
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="gallery" className="relative" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)', background: 'linear-gradient(180deg, var(--void) 0%, var(--night) 50%, var(--void) 100%)' }}>

      {/* Heading — oversized, edge-to-edge feel */}
      <div className="mb-16 sm:mb-24 overflow-hidden px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem' }}>
              Le edizioni passate
            </p>
            <h2 ref={headingRef} className="text-gold-gradient" style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
              fontWeight: 700, lineHeight: 1,
            }}>
              Rivivere la Magia
            </h2>
          </div>
          <p className="max-w-sm lg:text-right" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, opacity: 0.6, fontSize: 'var(--fs-small)' }}>
            Immagini dalle edizioni passate. L'atmosfera, le emozioni, i volti dei nostri piccoli maghi.
          </p>
        </div>
      </div>

      {/* Grid — keep same masonry but with more visual padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {photos.map((photo, i) => {
            const isTall = photo.span.includes('row-span-2')
            const isWide = photo.span.includes('col-span-2')
            return (
              <button
                key={i}
                onClick={() => setLightbox(photo)}
                className={`gal-item group relative overflow-hidden ${photo.span}`}
                style={{ aspectRatio: isTall ? '3/4' : isWide && isTall ? '1/1' : isWide ? '2/1' : '1/1', opacity: 0 }}
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: 'linear-gradient(to top, rgba(8,7,14,0.8) 0%, transparent 50%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.85rem', color: 'var(--parchment-dim)' }}>{photo.alt}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Instagram — left-aligned */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-16 sm:mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-px hidden sm:block" style={{ background: 'rgba(200,169,81,0.3)' }} />
          <p style={{ color: 'var(--parchment-dim)', opacity: 0.4, fontSize: 'var(--fs-small)' }}>Segui le nostre avventure in tempo reale</p>
          <a href="https://www.instagram.com/scuoladimagiaitaliana" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '0.75rem', padding: '0.7rem 1.8rem' }}>
            @scuoladimagiaitaliana
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(8,7,14,0.97)', backdropFilter: 'blur(20px)' }} onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center z-50 transition-colors" onClick={() => setLightbox(null)} aria-label="Chiudi"
            style={{ color: 'var(--parchment-dim)', border: '1px solid rgba(200,169,81,0.2)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--parchment-dim)' }}
          >×</button>
          <img src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-[85vh] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
