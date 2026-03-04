import { Star, Quote, Newspaper } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    text: "Mio figlio non ha smesso di parlarne per settimane. Ha trovato amici da tutta Italia e non vede l'ora di tornare per il secondo anno. Un'esperienza che gli ha acceso la fantasia.",
    author: 'Mamma di Lorenzo, 9 anni',
    edition: 'Castello di Thiene 2024',
    rating: 5,
  },
  {
    text: "Eravamo preoccupati a lasciarlo tre giorni, ma lo staff è stato incredibile. Professionale, attento, divertente. Nostro figlio è tornato con gli occhi che brillavano.",
    author: 'Genitori di Sofia, 11 anni',
    edition: 'Palazzo Barbo 2024',
    rating: 5,
  },
  {
    text: "L'atmosfera nel castello è pazzesca. Ogni angolo è curato nei minimi dettagli. È come entrare davvero in un mondo magico. I ragazzi erano tutti entusiasti.",
    author: 'Papà di Marco e Giulia',
    edition: 'Xmas Edition Bolzano 2024',
    rating: 5,
  },
  {
    text: "La cosa che mi ha colpita di più è il valore educativo. Non è solo divertimento: i laboratori, il lavoro di squadra, la creatività... tutto è pensato per far crescere i ragazzi.",
    author: 'Mamma di Alessia, 8 anni',
    edition: 'Castello di Thiene 2023',
    rating: 5,
  },
]

const press = [
  { name: 'Giornale di Vicenza', quote: 'La magia prende vita nelle sale del Castello di Thiene' },
  { name: 'Corriere Nazionale', quote: 'Un evento unico per i giovani appassionati del fantasy' },
  { name: 'BergamoNews', quote: 'Palazzo Barbo si trasforma in un\'accademia di magia' },
  { name: 'La Voce di Bolzano', quote: 'Castel Mareccio ospita la Xmas Edition della Scuola di Magia' },
  { name: 'NordEst24', quote: 'Un progetto culturale che unisce teatro, educazione e fantasia' },
  { name: 'La Piazza Web', quote: 'Sold out per la Scuola di Magia: ragazzi da tutta Italia' },
]

export default function Recensioni() {
  return (
    <section id="recensioni" className="section-padding bg-parchment-texture relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Dicono di Noi"
          subtitle="Le parole dei genitori e della stampa. Il feedback più prezioso viene da chi ha vissuto l'esperienza."
        />

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card p-6 sm:p-8 magic-border h-full flex flex-col">
                <Quote className="text-gold/30 mb-4 shrink-0" size={32} />
                <p className="font-body text-parchment/80 text-lg leading-relaxed italic mb-6 flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between border-t border-gold/10 pt-4">
                  <div>
                    <p className="font-serif text-sm text-parchment-light">{t.author}</p>
                    <p className="font-body text-xs text-parchment/40 mt-0.5">{t.edition}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Press */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 text-gold/60">
              <div className="h-px w-12 bg-gold/30" />
              <Newspaper size={20} />
              <span className="font-serif text-sm tracking-widest uppercase">Rassegna Stampa</span>
              <Newspaper size={20} />
              <div className="h-px w-12 bg-gold/30" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {press.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.05}>
              <div className="glass-card p-5 magic-border text-center hover:bg-white/10 transition-all duration-300">
                <h4 className="font-serif text-base text-gold mb-2">{item.name}</h4>
                <p className="font-body text-parchment/50 text-sm italic">"{item.quote}"</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
