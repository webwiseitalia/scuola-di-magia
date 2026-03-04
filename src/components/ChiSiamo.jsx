import { Users, Theater, Sparkles, Calendar } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'
import foto14 from '../assets/foto/foto-14.webp'
import foto13 from '../assets/foto/foto-13.webp'
import foto2 from '../assets/foto/foto-2.webp'

const stats = [
  { number: '10+', label: 'Anni di attività', icon: Calendar },
  { number: '100+', label: 'Eventi realizzati', icon: Theater },
  { number: '25', label: 'Professionisti nello staff', icon: Users },
  { number: '7', label: 'Edizioni della Scuola', icon: Sparkles },
]

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="section-padding bg-magic-gradient relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Chi Siamo"
          subtitle="L'associazione culturale dietro la magia."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-16">
          {/* Text */}
          <ScrollReveal>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-gold mb-6">
                Associazione Culturale<br />Caraval Spettacoli
              </h3>
              <div className="space-y-4 font-body text-parchment/70 text-lg leading-relaxed">
                <p>
                  La <strong className="text-parchment/90">Scuola di Magia Italiana</strong> è organizzata dall'Associazione Culturale
                  Caraval Spettacoli, realtà <strong className="text-parchment/90">No Profit</strong> attiva da oltre 10 anni nel campo
                  dell'intrattenimento per adulti e ragazzi.
                </p>
                <p>
                  Nel curriculum dell'associazione: oltre 100 eventi tra spettacoli teatrali, animazioni,
                  spettacoli pirotecnici, feste pubbliche e private e LARP (Live Action Role Playing).
                </p>
                <p>
                  Lo staff di <strong className="text-parchment/90">25 professionisti</strong> — attori, educatori, teatranti e scenografi —
                  accompagna i ragazzi durante l'intero weekend, gestendo intrattenimento, sicurezza e logistica
                  con passione e competenza.
                </p>
              </div>

              {/* Mission */}
              <div className="mt-8 p-5 rounded-xl bg-gold/5 border border-gold/20">
                <h4 className="font-serif text-lg text-gold mb-2">La Nostra Missione</h4>
                <p className="font-body text-parchment/60 text-base leading-relaxed italic">
                  "Dimostrare che divertimento e cultura possono sposarsi in un'esperienza indimenticabile.
                  Incoraggiare la lettura, la socializzazione, il gioco intelligente e la cultura
                  attraverso l'ambientazione fantastica."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Photos */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-xl overflow-hidden magic-border aspect-[3/4]">
                  <img
                    src={foto2}
                    alt="Maestro di magia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden magic-border aspect-square">
                  <img
                    src={foto13}
                    alt="Attore legge una lettera"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden magic-border aspect-square">
                  <img
                    src={foto14}
                    alt="Staff in costume"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl bg-gold/5 border border-gold/20 p-5 flex flex-col items-center justify-center text-center aspect-[3/4]">
                  <span className="font-display text-3xl sm:text-4xl text-gold font-bold">2018</span>
                  <span className="font-body text-parchment/50 text-sm mt-2">Prima edizione a Soncino</span>
                  <div className="w-8 h-px bg-gold/30 my-3" />
                  <span className="font-display text-3xl sm:text-4xl text-gold font-bold">2025</span>
                  <span className="font-body text-parchment/50 text-sm mt-2">Settima edizione</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-card p-6 sm:p-8 magic-border text-center group hover:bg-white/10 transition-all duration-500">
                <stat.icon className="text-gold/60 mx-auto mb-3 group-hover:text-gold transition-colors" size={28} />
                <div className="font-display text-3xl sm:text-4xl text-gold font-bold mb-1">{stat.number}</div>
                <div className="font-body text-parchment/50 text-sm">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
