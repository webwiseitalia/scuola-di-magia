import { useState, useRef } from 'react'
import gsap from 'gsap'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'
import foto9 from '../assets/foto/foto-9.webp'
import foto11 from '../assets/foto/foto-11.webp'

const pillars = [
  { symbol: '◈', title: 'Sicurezza e Affidabilità', desc: 'Organizzato dall\'Associazione Culturale Caraval Spettacoli, attiva da oltre 10 anni con più di 100 eventi. Staff di 25 professionisti — attori, educatori, scenografi. Associazione No Profit.' },
  { symbol: '✦', title: 'Valore Educativo', desc: 'Non solo divertimento. Laboratori artistici, visite guidate ai luoghi storici, attività che stimolano creatività, collaborazione, lettura e curiosità.' },
  { symbol: '⟡', title: 'Tutto Incluso', desc: 'Soggiorno di 3 giorni nel castello, tutte le attività e spettacoli, materiali e oggetti di scena, assistenza continua. Nessuna sorpresa.' },
]

const faqs = [
  { q: 'Che età deve avere mio figlio?', a: 'Dai 6 ai 14 anni, dalla prima elementare alla terza media. È necessario saper scrivere per trascrivere le formule magiche.' },
  { q: 'Mio figlio dormirà nel castello?', a: 'Sì! I dormitori sono allestiti nella location, con assistenza continua dello staff per l\'intero soggiorno.' },
  { q: 'Come funzionano gli anni accademici?', a: 'Chi partecipa per la prima volta è al I anno. Chi torna avanza (fino al V), con attività progressivamente diverse e più complesse.' },
  { q: 'Posso iscrivere più figli?', a: 'Certamente! Con la promozione Biglietto Famiglia: secondo figlio -€30, terzo figlio -€60.' },
  { q: 'L\'evento è sold out, cosa faccio?', a: 'È possibile inserirsi in lista d\'attesa contattandoci. In caso di rinunce, i posti vengono riassegnati in ordine di lista.' },
  { q: 'Quanto costa?', a: 'Circa €300 a partecipante, tutto incluso: soggiorno, attività, intrattenimento, spettacoli e materiali.' },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)

  const toggle = () => {
    const next = !open
    setOpen(next)
    if (next) {
      gsap.fromTo(contentRef.current, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' })
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' })
    }
  }

  return (
    <div style={{ borderBottom: '1px solid rgba(200,169,81,0.06)' }}>
      <button onClick={toggle} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="pr-4 transition-colors duration-300" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: open ? 'var(--gold)' : 'var(--parchment)', letterSpacing: '0.02em' }}>
          {faq.q}
        </span>
        <span className="shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-500" style={{ color: 'var(--gold-dim)', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          +
        </span>
      </button>
      <div ref={contentRef} style={{ height: 0, opacity: 0, overflow: 'hidden' }}>
        <p className="pb-5" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, fontSize: 'var(--fs-small)', opacity: 0.7 }}>
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function Genitori() {
  return (
    <section id="genitori" className="relative overflow-hidden" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--void) 0%, var(--abyss) 50%, var(--void) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(200,169,81,0.03) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Per i Genitori" subtitle="Sappiamo che affidare i propri figli per un weekend è una grande decisione. Ecco tutto ciò che serve per scegliere con serenità." />

        {/* Pillars */}
        <div className="grid lg:grid-cols-3 gap-px mb-20 sm:mb-28" style={{ background: 'rgba(200,169,81,0.06)' }}>
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1} from="fade">
              <div className="p-8 sm:p-10 h-full transition-all duration-500" style={{ background: 'var(--void)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(200,169,81,0.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--void)' }}
              >
                <span className="block mb-5" style={{ fontSize: '1.3rem', color: 'var(--gold-dim)' }}>{p.symbol}</span>
                <h3 className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.1rem', color: 'var(--parchment)', letterSpacing: '0.02em' }}>{p.title}</h3>
                <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.8, opacity: 0.7 }}>{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Images + FAQ — broken layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Images */}
          <ScrollReveal className="lg:col-span-5" from="left">
            <div className="relative">
              <div className="overflow-hidden mb-4" style={{ border: '1px solid rgba(200,169,81,0.1)' }}>
                <img src={foto9} alt="Cerimonia delle casate" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="overflow-hidden" style={{ border: '1px solid rgba(200,169,81,0.1)', marginLeft: '15%', marginTop: '-20%', position: 'relative', zIndex: 10, boxShadow: '0 0 40px rgba(0,0,0,0.5)' }}>
                <img src={foto11} alt="Ragazzo con bacchetta" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal className="lg:col-span-7" delay={0.15} from="right">
            <div className="glass-dark p-6 sm:p-8 lg:p-10" style={{ borderLeft: '2px solid rgba(200,169,81,0.12)' }}>
              <h3 className="mb-8" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>
                Domande Frequenti
              </h3>
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
