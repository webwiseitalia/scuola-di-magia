import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

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
  { src: foto1, alt: 'Foto di gruppo', cat: 'all', span: 'col-span-2 row-span-2' },
  { src: foto10, alt: 'Castello di Thiene', cat: 'location', span: '' },
  { src: foto6, alt: 'Lezione di formule', cat: 'lezioni', span: '' },
  { src: foto9, alt: 'Cerimonia casate', cat: 'casate', span: 'row-span-2' },
  { src: foto2, alt: 'Maestro di magia', cat: 'lezioni', span: '' },
  { src: foto11, alt: 'Lezione con bacchetta', cat: 'lezioni', span: '' },
  { src: foto5, alt: 'Segrete del castello', cat: 'lezioni', span: 'col-span-2' },
  { src: foto15, alt: 'Xmas Edition', cat: 'xmas', span: '' },
  { src: foto7, alt: 'Sala affrescata', cat: 'lezioni', span: '' },
  { src: foto8, alt: 'Professoressa creature', cat: 'lezioni', span: '' },
  { src: foto13, alt: 'Attore con lettera', cat: 'spettacoli', span: '' },
  { src: foto14, alt: 'Staff in costume', cat: 'staff', span: 'col-span-2' },
  { src: foto4, alt: 'Bacchette magiche', cat: 'oggetti', span: '' },
  { src: foto16, alt: 'Stemma e Natale', cat: 'xmas', span: '' },
  { src: foto12, alt: 'Lanterna medievale', cat: 'atmosfera', span: '' },
  { src: foto3, alt: 'Creatura fantastica', cat: 'location', span: '' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll('.gallery-item')
      if (items) {
        items.forEach((item, i) => {
          gsap.fromTo(item,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.7,
              delay: (i % 4) * 0.08,
              ease: 'power3.out',
              scrollTrigger: { trigger: item, start: 'top 90%', once: true },
            }
          )
        })
      }
    })
    return () => ctx.revert()
  }, [])

  // Close lightbox on escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="gallery" className="relative overflow-hidden" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--void) 0%, var(--night) 30%, var(--purple-deep) 50%, var(--night) 70%, var(--void) 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Rivivere la Magia" subtitle="Immagini dalle edizioni passate. L'atmosfera, le emozioni, i volti dei nostri piccoli maghi." />

        {/* Masonry-like grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(photo)}
              className={`gallery-item group relative overflow-hidden ${photo.span}`}
              style={{ aspectRatio: photo.span?.includes('row-span-2') ? '3/4' : photo.span?.includes('col-span-2') ? '2/1' : '1/1', opacity: 0, border: '1px solid rgba(200,169,81,0.06)' }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay — magical reveal */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(to top, rgba(8,7,14,0.8) 0%, rgba(8,7,14,0.2) 40%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.85rem', color: 'var(--parchment-dim)' }}>{photo.alt}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram */}
        <ScrollReveal className="text-center mt-16 sm:mt-20">
          <p className="mb-5" style={{ color: 'var(--parchment-dim)', opacity: 0.5, fontSize: 'var(--fs-small)' }}>
            Segui le nostre avventure in tempo reale
          </p>
          <a
            href="https://www.instagram.com/scuoladimagiaitaliana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ fontSize: '0.75rem' }}
          >
            @scuoladimagiaitaliana — 9.800+ follower
          </a>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(8,7,14,0.96)', backdropFilter: 'blur(30px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center transition-colors z-50"
            onClick={() => setLightbox(null)}
            style={{ color: 'var(--parchment-dim)', border: '1px solid rgba(200,169,81,0.2)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'rgba(200,169,81,0.5)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--parchment-dim)'; e.currentTarget.style.borderColor = 'rgba(200,169,81,0.2)' }}
            aria-label="Chiudi"
          >
            ×
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '0 0 80px rgba(0,0,0,0.5)' }}
          />
        </div>
      )}
    </section>
  )
}
