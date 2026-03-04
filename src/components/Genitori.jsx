import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'
import FloatingCandles from './FloatingCandles'
import Fireflies from './Fireflies'
import MagicDivider from './MagicDivider'
import FloatingRunes from './FloatingRunes'
import foto9 from '../assets/foto/foto-9.webp'
import foto11 from '../assets/foto/foto-11.webp'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  { title: 'Sicurezza e Affidabilità', desc: "Organizzato dall'Associazione Culturale Caraval Spettacoli, attiva da oltre 10 anni con più di 100 eventi. Staff di 25 professionisti — attori, educatori, scenografi. Associazione No Profit.", icon: '🛡️' },
  { title: 'Valore Educativo', desc: 'Non solo divertimento. Laboratori artistici, visite guidate ai luoghi storici, attività che stimolano creatività, collaborazione, lettura e curiosità.', icon: '📚' },
  { title: 'Tutto Incluso', desc: 'Soggiorno di 3 giorni nel castello, tutte le attività e spettacoli, materiali e oggetti di scena, assistenza continua. Nessuna sorpresa.', icon: '🏰' },
]

const faqs = [
  { q: 'Che età deve avere mio figlio?', a: 'Dai 6 ai 14 anni, dalla prima elementare alla terza media. È necessario saper scrivere per trascrivere le formule magiche.' },
  { q: 'Mio figlio dormirà nel castello?', a: "Sì! I dormitori sono allestiti nella location, con assistenza continua dello staff per l'intero soggiorno." },
  { q: 'Come funzionano gli anni accademici?', a: 'Chi partecipa per la prima volta è al I anno. Chi torna avanza (fino al V), con attività progressivamente diverse e più complesse.' },
  { q: 'Posso iscrivere più figli?', a: 'Certamente! Con la promozione Biglietto Famiglia: secondo figlio -€30, terzo figlio -€60.' },
  { q: "L'evento è sold out, cosa faccio?", a: "È possibile inserirsi in lista d'attesa contattandoci. In caso di rinunce, i posti vengono riassegnati in ordine di lista." },
  { q: 'Quanto costa?', a: 'Circa €300 a partecipante, tutto incluso: soggiorno, attività, intrattenimento, spettacoli e materiali.' },
]

function FAQItem({ faq }) {
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
    <div style={{ borderBottom: '1px solid rgba(212,168,67,0.06)' }}>
      <button onClick={toggle} className="w-full flex items-center justify-between py-5 text-left">
        <span className="pr-4 transition-colors duration-300" style={{ fontFamily: '"Cinzel", serif', fontSize: 'var(--fs-small)', color: open ? 'var(--gold)' : 'var(--parchment)', letterSpacing: '0.02em' }}>
          {faq.q}
        </span>
        <span className="shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-500" style={{ color: 'var(--gold-dim)', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
      </button>
      <div ref={contentRef} style={{ height: 0, opacity: 0, overflow: 'hidden' }}>
        <p className="pb-5" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8, fontSize: 'var(--fs-small)', opacity: 0.7 }}>{faq.a}</p>
      </div>
    </div>
  )
}

export default function Genitori() {
  const headingRef = useRef(null)

  useEffect(() => {
    const heading = headingRef.current
    if (!heading) return
    const split = new SplitType(heading, { types: 'chars' })
    gsap.set(split.chars, { opacity: 0, x: 30 })
    gsap.to(split.chars, {
      opacity: 1, x: 0, duration: 0.5, stagger: 0.02, ease: 'power3.out',
      scrollTrigger: { trigger: heading, start: 'top 82%', once: true },
    })
  }, [])

  return (
    <section id="genitori" className="relative bg-dungeon section-glow-top" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <FloatingCandles count={5} className="opacity-30" />
      <Fireflies count={10} />
      <FloatingRunes count={5} />

      {/* Heading */}
      <div className="relative z-10 max-w-[90rem] mx-auto mb-20 sm:mb-28 px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6">
            <div className="flex items-start gap-6 mb-6">
              <span className="hidden sm:block text-gold-gradient" style={{
                fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(4rem, 8vw, 7rem)',
                fontWeight: 700, lineHeight: 0.85, opacity: 0.15,
              }}>04</span>
              <div>
                <p style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem' }}>
                  Per le famiglie
                </p>
                <h2 ref={headingRef} className="text-gold-gradient heading-glow" style={{
                  fontSize: 'var(--fs-heading)',
                  fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
                  fontWeight: 700, lineHeight: 1.1,
                }}>
                  Per i Genitori
                </h2>
              </div>
            </div>
            <p className="max-w-lg" style={{ color: 'var(--parchment-dim)', lineHeight: 1.9 }}>
              Sappiamo che affidare i propri figli per un weekend è una grande decisione. Ecco tutto ciò che serve.
            </p>
          </div>
          <ScrollReveal className="lg:col-span-6" from="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden shape-blob-3" style={{ transform: 'rotate(1deg)' }}>
                <img src={foto9} alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="overflow-hidden mt-12 clip-angle-right" style={{ transform: 'rotate(-1deg)' }}>
                <img src={foto11} alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Pillars — with magical icons */}
      <div className="relative z-10 max-w-[90rem] mx-auto mb-24 sm:mb-32 px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="p-8 h-full transition-all duration-300" style={{
                background: 'linear-gradient(165deg, rgba(237,224,200,0.04) 0%, rgba(10,10,18,0.5) 100%)',
                border: '1px solid rgba(212,168,67,0.08)',
                borderTop: '2px solid rgba(212,168,67,0.15)',
                position: 'relative',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.15)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(212,168,67,0.04)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.08)'; e.currentTarget.style.borderTopColor = 'rgba(212,168,67,0.15)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <span className="block mb-4 text-2xl">{p.icon}</span>
                <h3 className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.05rem', color: 'var(--parchment)' }}>{p.title}</h3>
                <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.8, opacity: 0.65 }}>{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <MagicDivider symbol="📜" className="max-w-3xl mx-auto px-8" />

      {/* FAQ */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <ScrollReveal className="lg:col-span-4" from="left">
            <div className="lg:sticky lg:top-32">
              <h3 className="mb-4" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>Domande Frequenti</h3>
              <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.8, opacity: 0.5 }}>
                Le risposte alle domande più comuni dei genitori.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-px" style={{ background: 'rgba(212,168,67,0.3)' }} />
                <span style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--gold-dim)' }}>6 domande</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-8" from="right" delay={0.1}>
            <div style={{ borderTop: '1px solid rgba(212,168,67,0.06)' }}>
              {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
