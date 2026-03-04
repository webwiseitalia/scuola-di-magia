import { useState } from 'react'
import { Calendar, MapPin, Users, Tag, Gift, Award, UserPlus } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'
import MagicParticles from './MagicParticles'

const editions = [
  {
    location: 'Castel Mareccio',
    city: 'Bolzano (BZ)',
    tag: 'Xmas Edition',
    dates: [
      { range: '2 - 4 Gennaio 2025', status: 'soldout', note: 'Tutti gli anni' },
    ],
  },
  {
    location: 'Palazzo Barbo',
    city: 'Torre Pallavicina (BG)',
    tag: 'Edizione Primaverile',
    dates: [
      { range: '16 - 18 Maggio 2025', status: 'available', note: 'I - II Anno' },
      { range: '23 - 25 Maggio 2025', status: 'available', note: 'III - V Anno' },
    ],
  },
  {
    location: 'Castello di Thiene',
    city: 'Thiene (VI)',
    tag: 'Edizione Estiva',
    dates: [
      { range: '26 - 28 Agosto 2025', status: 'available', note: 'I Anno' },
      { range: '29 - 31 Agosto 2025', status: 'few', note: 'II - III Anno' },
      { range: '5 - 7 Settembre 2025', status: 'available', note: 'IV - V Anno' },
    ],
  },
]

const statusLabels = {
  available: { text: 'Disponibile', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  few: { text: 'Ultimi posti', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  soldout: { text: 'Sold Out', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
}

const promos = [
  {
    icon: Gift,
    title: 'Sostenitore',
    price: '€300',
    desc: 'Gadget personalizzato + menzione nei ringraziamenti ufficiali + riconoscimento "Famiglia di Maghi".',
  },
  {
    icon: Award,
    title: 'Primo della Classe',
    price: 'Sconto speciale',
    desc: 'Per chi ha una media del 9+ nell\'ultima pagella. La magia premia lo studio!',
  },
  {
    icon: UserPlus,
    title: 'Biglietto Famiglia',
    price: 'Risparmi fino a €60',
    desc: 'Secondo figlio: -€30. Terzo figlio: -€60. Più maghi ci sono in famiglia, più si risparmia!',
  },
]

export default function DateIscrizioni() {
  return (
    <section id="iscrizioni" className="section-padding relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-dark via-purple-deep/30 to-night-dark" />
      <MagicParticles count={20} />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Date e Iscrizioni"
          subtitle="Scegli la tua edizione e prenota il tuo posto. Le edizioni vanno storicamente sold out: non aspettare troppo!"
        />

        {/* Urgency Banner */}
        <ScrollReveal className="mb-10 sm:mb-14">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bordeaux/20 border border-bordeaux/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-red-400" />
              </span>
              <span className="font-serif text-sm sm:text-base text-red-300 tracking-wider">
                Posti limitati — Storicamente Sold Out in tutte le edizioni
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Editions */}
        <div className="space-y-6 sm:space-y-8 mb-16 sm:mb-20">
          {editions.map((edition, i) => (
            <ScrollReveal key={edition.location} delay={i * 0.1}>
              <div className="glass-card magic-border overflow-hidden">
                {/* Edition Header */}
                <div className="px-6 sm:px-8 py-5 border-b border-gold/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-xl sm:text-2xl text-gold">{edition.location}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20 font-serif text-xs text-gold/80">
                        {edition.tag}
                      </span>
                    </div>
                    <p className="flex items-center gap-1.5 text-parchment/50 font-body text-sm mt-1">
                      <MapPin size={14} />
                      {edition.city}
                    </p>
                  </div>
                </div>

                {/* Dates */}
                <div className="divide-y divide-white/5">
                  {edition.dates.map((date) => (
                    <div
                      key={date.range}
                      className="px-6 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <span className="flex items-center gap-2 font-body text-parchment/90 text-lg">
                          <Calendar size={18} className="text-gold/60 shrink-0" />
                          {date.range}
                        </span>
                        {date.note && (
                          <span className="flex items-center gap-1.5 text-parchment/50 font-body text-sm">
                            <Users size={14} />
                            {date.note}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full border text-xs font-serif tracking-wider ${statusLabels[date.status].color}`}
                        >
                          {statusLabels[date.status].text}
                        </span>
                        {date.status !== 'soldout' ? (
                          <a
                            href="#contatti"
                            className="px-5 py-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-night-dark font-serif font-bold text-sm rounded-lg hover:shadow-[0_0_20px_rgba(200,169,81,0.4)] hover:scale-105 transition-all duration-300"
                          >
                            Iscriviti
                          </a>
                        ) : (
                          <span className="px-5 py-2 bg-white/5 border border-white/10 text-parchment/40 font-serif text-sm rounded-lg cursor-not-allowed">
                            Esaurito
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Price & Promos */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl sm:text-3xl gold-gradient-text mb-3">Quota di Partecipazione</h3>
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-display text-4xl sm:text-5xl text-gold font-bold">€300</span>
              <span className="font-body text-parchment/50 text-lg">/ partecipante</span>
            </div>
            <p className="font-body text-parchment/60 text-base mt-3 max-w-xl mx-auto">
              Tutto incluso: soggiorno nel castello per 3 giorni, tutte le attività,
              intrattenimento, spettacoli e materiali.
            </p>
          </div>
        </ScrollReveal>

        {/* Promo Cards */}
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {promos.map((promo, i) => (
            <ScrollReveal key={promo.title} delay={i * 0.1}>
              <div className="glass-card p-6 sm:p-8 magic-border h-full text-center group hover:bg-white/10 transition-all duration-500">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                  <promo.icon className="text-gold" size={26} />
                </div>
                <h4 className="font-serif text-xl text-parchment-light mb-1">{promo.title}</h4>
                <span className="font-serif text-sm text-gold/80 block mb-3">{promo.price}</span>
                <p className="font-body text-parchment/60 text-base leading-relaxed">{promo.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Age Note */}
        <ScrollReveal className="mt-10 text-center">
          <p className="font-body text-parchment/50 text-sm max-w-2xl mx-auto">
            <strong className="text-parchment/70">Età:</strong> 6-14 anni (dalla prima elementare alla terza media).
            Requisito: saper scrivere (per trascrivere le formule magiche durante le lezioni).
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
