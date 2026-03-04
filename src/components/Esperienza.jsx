import { Sparkles, FlaskConical, Ghost, Puzzle, Theater, Paintbrush, Swords, GraduationCap } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'

const activities = [
  {
    icon: Sparkles,
    title: 'Incantesimi e Pozioni',
    desc: 'Laboratori interattivi con formule da trascrivere, miscele da preparare ed esperimenti creativi.',
  },
  {
    icon: Ghost,
    title: 'Creature Fantastiche',
    desc: 'Esplorazioni guidate con incontri scenografici e creature magiche.',
  },
  {
    icon: Puzzle,
    title: 'Misteri ed Enigmi',
    desc: 'Avventure da risolvere in squadra, prove di logica e coraggio.',
  },
  {
    icon: Theater,
    title: 'Spettacoli e Illusionismo',
    desc: 'Performance serali con effetti speciali e momenti di grande meraviglia.',
  },
  {
    icon: Paintbrush,
    title: 'Laboratori Artistici',
    desc: 'Attività manuali, creatività e visite guidate ai luoghi storici del castello.',
  },
  {
    icon: Swords,
    title: 'Tornei tra Casate',
    desc: 'Competizione sana, collaborazione e spirito di squadra in sfide epiche.',
  },
]

export default function Esperienza() {
  return (
    <section id="esperienza" className="section-padding bg-magic-gradient relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="L'Esperienza"
          subtitle="Un evento unico in Italia: un weekend residenziale di 3 giorni all'interno di un vero castello, interamente allestito per trasformarsi in un'accademia di magia."
        />

        {/* Intro narrative */}
        <ScrollReveal className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-6 sm:p-10 magic-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/30">
                <GraduationCap className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-gold mb-3">La Lettera di Ammissione</h3>
                <p className="font-body text-parchment/70 text-lg leading-relaxed">
                  Dopo aver ricevuto la lettera di ammissione, i ragazzi varcano le porte del castello
                  e vengono assegnati a una delle quattro casate. Da quel momento inizia l'avventura:
                  <strong className="text-parchment/90"> tre giorni come protagonisti di una storia magica</strong>,
                  in compagnia di ragazze e ragazzi provenienti da tutta Italia.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {[foto5, foto6, foto7, foto8].map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt="Momenti dall'esperienza magica"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Activities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {activities.map((activity, i) => (
            <ScrollReveal key={activity.title} delay={i * 0.1}>
              <div className="group glass-card p-6 sm:p-8 magic-border h-full hover:bg-white/10 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-5 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-500">
                  <activity.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-serif text-xl text-parchment-light mb-3 group-hover:text-gold transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="font-body text-parchment/60 text-base leading-relaxed">
                  {activity.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Academic Years callout */}
        <ScrollReveal className="mt-12 sm:mt-16">
          <div className="text-center glass-card p-6 sm:p-8 magic-border max-w-3xl mx-auto">
            <FlaskConical className="text-gold mx-auto mb-4" size={32} />
            <h3 className="font-serif text-xl sm:text-2xl text-gold mb-3">Sistema ad Anni Accademici</h3>
            <p className="font-body text-parchment/70 text-lg leading-relaxed">
              Chi torna avanza di anno (dal I al V), con attività progressivamente più complesse e sfide sempre
              più avvincenti. Un percorso magico che cresce con ogni partecipante.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              {['I', 'II', 'III', 'IV', 'V'].map((year) => (
                <div
                  key={year}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold/40 flex items-center justify-center font-serif text-sm sm:text-base text-gold/80"
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
