import { useState } from 'react'
import { Shield, BookOpen, Package, ChevronDown, Heart } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'
import foto9 from '../assets/foto/foto-9.webp'
import foto11 from '../assets/foto/foto-11.webp'

const pillars = [
  {
    icon: Shield,
    title: 'Sicurezza e Affidabilità',
    desc: 'L\'evento è organizzato dall\'Associazione Culturale Caraval Spettacoli, attiva da oltre 10 anni con più di 100 eventi all\'attivo. Lo staff di 25 professionisti — attori, educatori, scenografi — accompagna i ragazzi per l\'intera durata del weekend. Associazione No Profit.',
  },
  {
    icon: BookOpen,
    title: 'Valore Educativo e Culturale',
    desc: 'Non solo divertimento. L\'evento include laboratori artistici, visite guidate ai luoghi storici dei castelli, attività che stimolano creatività, collaborazione, lettura e curiosità. Perfettamente allineabile con un programma scolastico.',
  },
  {
    icon: Package,
    title: 'Cosa è Incluso nella Quota',
    desc: 'Soggiorno di 3 giorni nel castello (dormitori allestiti), tutte le attività e gli spettacoli, materiali e oggetti di scena, assistenza continua dello staff. Tutto compreso, nessuna sorpresa.',
  },
]

const faqs = [
  {
    q: 'Che età deve avere mio figlio?',
    a: 'Dai 6 ai 14 anni, dalla prima elementare alla terza media. È necessario saper scrivere per poter trascrivere le formule magiche durante le lezioni.',
  },
  {
    q: 'Mio figlio dormirà nel castello?',
    a: 'Sì! I dormitori sono allestiti all\'interno della location, con assistenza continua dello staff per tutta la durata del soggiorno.',
  },
  {
    q: 'Come funziona il sistema degli anni accademici?',
    a: 'Chi partecipa per la prima volta è iscritto al I anno. Chi torna avanza di anno (fino al V), con attività progressivamente diverse e più complesse. I turni sono dedicati per livello.',
  },
  {
    q: 'Posso iscrivere più figli?',
    a: 'Certamente! Con la promozione Biglietto Famiglia il secondo figlio ha uno sconto di €30 e il terzo figlio di €60.',
  },
  {
    q: 'L\'evento è sold out, cosa posso fare?',
    a: 'È possibile inserirsi in lista d\'attesa contattandoci direttamente. In caso di rinunce, i posti vengono riassegnati in ordine di lista.',
  },
  {
    q: 'Quanto costa l\'evento?',
    a: 'La quota è di circa €300 a partecipante, tutto incluso: soggiorno nel castello per 3 giorni, tutte le attività, intrattenimento, spettacoli e materiali.',
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gold/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left group"
      >
        <span className="font-serif text-base sm:text-lg text-parchment/90 group-hover:text-gold transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gold/50 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-60 pb-5' : 'max-h-0'
        }`}
      >
        <p className="font-body text-parchment/60 text-base leading-relaxed px-1">{faq.a}</p>
      </div>
    </div>
  )
}

export default function Genitori() {
  return (
    <section id="genitori" className="section-padding bg-parchment-texture relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Per i Genitori"
          subtitle="Sappiamo che affidare i propri figli per un weekend è una grande decisione. Ecco tutte le informazioni per scegliere con serenità."
        />

        {/* Pillars */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1}>
              <div className="glass-card p-6 sm:p-8 magic-border h-full">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 border border-gold/20">
                  <pillar.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-serif text-xl text-parchment-light mb-3">{pillar.title}</h3>
                <p className="font-body text-parchment/60 text-base leading-relaxed">{pillar.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Image + FAQ */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Images */}
          <ScrollReveal>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden magic-border">
                <img
                  src={foto9}
                  alt="Lezione nella Scuola di Magia"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden magic-border">
                <img
                  src={foto11}
                  alt="Ragazzi durante l'evento"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <div className="inline-flex items-center gap-2 text-gold/60 font-body text-sm">
                  <Heart size={16} />
                  <span>Divertimento e cultura possono sposarsi in un'esperienza indimenticabile</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-6 sm:p-8 magic-border">
              <h3 className="font-serif text-xl sm:text-2xl text-gold mb-6 flex items-center gap-3">
                <span className="text-2xl">?</span>
                Domande Frequenti
              </h3>
              <div>
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} faq={faq} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
