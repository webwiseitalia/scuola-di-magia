import { MapPin, Calendar } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'
import fotoThiene from '../assets/foto/foto-10.webp'
import fotoLezione from '../assets/foto/foto-7.webp'
import fotoXmas from '../assets/foto/foto-15.webp'

const locations = [
  {
    name: 'Castello di Thiene',
    city: 'Thiene, Vicenza',
    period: 'Fine agosto / Inizio settembre',
    tag: 'La "Hogwarts Italiana"',
    description:
      'Location principale e più iconica della Scuola di Magia Italiana. Dimora storica con sale affrescate, giardini e un fascino senza tempo. Il castello viene interamente allestito con ambienti tematici: aule, dormitori, segrete e sale comuni delle casate.',
    image: fotoThiene,
    accent: 'from-bordeaux to-bordeaux-light',
  },
  {
    name: 'Palazzo Barbo',
    city: 'Torre Pallavicina, Bergamo',
    period: 'Maggio',
    tag: 'Edizione Primaverile',
    description:
      'Dimora storica dal fascino rinascimentale, location delle edizioni primaverili. Ampi spazi, giardini e sale che si prestano perfettamente all\'allestimento dell\'accademia di magia.',
    image: fotoLezione,
    accent: 'from-purple-deep to-purple-light',
  },
  {
    name: 'Castel Mareccio',
    city: 'Bolzano',
    period: 'Inizio gennaio (Ponte dell\'Epifania)',
    tag: 'Xmas Edition',
    description:
      'Castello medievale nel cuore di Bolzano. Mura antiche, atmosfera medievale, neve e magia natalizia: la cornice perfetta per un\'esperienza unica durante le festività.',
    image: fotoXmas,
    accent: 'from-night-light to-night',
  },
]

export default function Location() {
  return (
    <section id="location" className="section-padding bg-parchment-texture relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Le Location"
          subtitle="Castelli e dimore storiche italiane che diventano accademie di magia. Ogni location è un'edizione speciale con la sua identità unica."
        />

        <div className="space-y-8 sm:space-y-12">
          {locations.map((loc, i) => (
            <ScrollReveal key={loc.name} delay={i * 0.15}>
              <div className={`glass-card overflow-hidden magic-border group ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className={`lg:w-2/5 relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-64 sm:h-72 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night-dark/60 to-transparent" />
                    <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${loc.accent} text-parchment-light font-serif text-xs sm:text-sm tracking-wider`}>
                      {loc.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`lg:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="font-display text-2xl sm:text-3xl text-gold mb-2">{loc.name}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-5 text-parchment/60 font-body text-sm sm:text-base">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-gold/60" />
                        {loc.city}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-gold/60" />
                        {loc.period}
                      </span>
                    </div>
                    <p className="font-body text-parchment/70 text-lg leading-relaxed mb-6">
                      {loc.description}
                    </p>
                    <a
                      href="#iscrizioni"
                      className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-serif text-sm tracking-wider transition-colors group/link"
                    >
                      Vedi le date disponibili
                      <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
