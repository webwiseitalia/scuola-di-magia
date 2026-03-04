import { useState } from 'react'
import { X } from 'lucide-react'
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

const photos = [
  { src: foto1, alt: 'Foto di gruppo dei partecipanti', category: 'gruppo' },
  { src: foto10, alt: 'Castello di Thiene con stendardi', category: 'location' },
  { src: foto6, alt: 'Lezione di formule magiche', category: 'lezioni' },
  { src: foto9, alt: 'Cerimonia delle casate', category: 'casate' },
  { src: foto2, alt: 'Maestro di magia durante una lezione', category: 'lezioni' },
  { src: foto11, alt: 'Lezione con bacchetta e ragazzo', category: 'lezioni' },
  { src: foto5, alt: 'Lezione nelle segrete del castello', category: 'lezioni' },
  { src: foto15, alt: 'Cerimonia natalizia - Xmas Edition', category: 'xmas' },
  { src: foto7, alt: 'Lezione in sala affrescata', category: 'lezioni' },
  { src: foto8, alt: 'Professoressa con illustrazione di creature', category: 'lezioni' },
  { src: foto13, alt: 'Attore legge una lettera', category: 'spettacoli' },
  { src: foto14, alt: 'Staff in costume medievale', category: 'staff' },
  { src: foto3, alt: 'Statua di creatura fantastica nel giardino', category: 'location' },
  { src: foto4, alt: 'Bacchette magiche esposte', category: 'oggetti' },
  { src: foto16, alt: 'Stemma della scuola con albero di Natale', category: 'xmas' },
  { src: foto12, alt: 'Lanterna in atmosfera medievale', category: 'atmosfera' },
]

const filters = [
  { label: 'Tutto', value: 'all' },
  { label: 'Lezioni', value: 'lezioni' },
  { label: 'Location', value: 'location' },
  { label: 'Casate', value: 'casate' },
  { label: 'Spettacoli', value: 'spettacoli' },
  { label: 'Xmas Edition', value: 'xmas' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'all' ? photos : photos.filter((p) => p.category === filter)

  return (
    <section id="gallery" className="section-padding bg-magic-gradient relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Rivivere la Magia"
          subtitle="Immagini dalle edizioni passate. L'atmosfera, le emozioni, i volti dei nostri piccoli maghi."
        />

        {/* Filters */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-full font-serif text-sm tracking-wider transition-all duration-300 ${
                filter === f.value
                  ? 'bg-gold text-night-dark font-bold shadow-[0_0_15px_rgba(200,169,81,0.3)]'
                  : 'bg-white/5 border border-gold/20 text-parchment/60 hover:border-gold/40 hover:text-parchment/80'
              }`}
            >
              {f.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((photo, i) => (
            <ScrollReveal key={photo.src + filter} delay={i * 0.05}>
              <button
                onClick={() => setLightbox(photo)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden magic-border cursor-pointer w-full"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Instagram CTA */}
        <ScrollReveal className="text-center mt-12 sm:mt-16">
          <p className="font-body text-parchment/50 text-base mb-4">
            Segui le nostre avventure in tempo reale
          </p>
          <a
            href="https://www.instagram.com/scuoladimagiaitaliana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm sm:text-base"
          >
            @scuoladimagiaitaliana — 9.800+ follower
          </a>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-night-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-parchment/60 hover:text-parchment transition-colors z-50"
            onClick={() => setLightbox(null)}
            aria-label="Chiudi"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
