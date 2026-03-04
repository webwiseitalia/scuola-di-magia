import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'
import MagicParticles from './MagicParticles'
import Fireflies from './Fireflies'
import FloatingRunes from './FloatingRunes'
import { Send } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const [formData, setFormData] = useState({ nome: '', email: '', oggetto: 'Informazioni evento', messaggio: '', privacy: false })
  const [submitted, setSubmitted] = useState(false)
  const headingRef = useRef(null)

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  useEffect(() => {
    const heading = headingRef.current
    if (!heading) return
    const split = new SplitType(heading, { types: 'chars' })
    gsap.set(split.chars, { opacity: 0, y: 40 })
    gsap.to(split.chars, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.02, ease: 'power3.out',
      scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
    })
  }, [])

  const inputStyle = {
    width: '100%',
    padding: '0.9rem 1.2rem',
    background: 'rgba(237,224,200,0.03)',
    border: '1px solid rgba(212,168,67,0.12)',
    borderRadius: '0.75rem',
    color: 'var(--parchment)',
    fontFamily: '"Cormorant Garamond", serif',
    fontSize: '1.05rem',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  }

  return (
    <section id="contatti" className="relative bg-great-hall section-glow-top" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <MagicParticles count={15} className="opacity-40" />
      <Fireflies count={8} />
      <FloatingRunes count={4} />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Heading — left-aligned, big */}
        <div className="mb-16 sm:mb-24">
          <p className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Scrivici
          </p>
          <h2 ref={headingRef} style={{
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
            fontWeight: 700, lineHeight: 0.85,
            letterSpacing: '-0.03em',
            color: 'var(--parchment)',
          }}>
            Contatti
          </h2>
          <p className="mt-5 max-w-md" style={{ color: 'var(--parchment-dim)', lineHeight: 1.8 }}>
            Hai domande? Scrivici, rispondiamo entro 24 ore.
          </p>
        </div>

        {/* Form + Info */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <ScrollReveal className="lg:col-span-7" from="left">
            <div className="p-7 sm:p-10 rounded-2xl" style={{
              border: '1px solid rgba(212,168,67,0.1)',
              background: 'rgba(237,224,200,0.03)',
            }}>
              {submitted ? (
                <div className="text-center py-14">
                  <Send className="mx-auto mb-4" size={36} style={{ color: 'var(--gold)', strokeWidth: 1.5 }} />
                  <h4 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.2rem', color: 'var(--parchment)' }}>Messaggio Inviato!</h4>
                  <p style={{ color: 'var(--parchment-dim)', opacity: 0.7, lineHeight: 1.8 }}>Ti rispondiamo entro 24 ore.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>Nome</label>
                      <input type="text" required value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} placeholder="Il tuo nome" style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(212,168,67,0.35)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(212,168,67,0.12)' }}
                      />
                    </div>
                    <div>
                      <label className="block mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="La tua email" style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(212,168,67,0.35)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(212,168,67,0.12)' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>Oggetto</label>
                    <select value={formData.oggetto} onChange={(e) => setFormData({ ...formData, oggetto: e.target.value })} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(212,168,67,0.35)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(212,168,67,0.12)' }}
                    >
                      <option value="Informazioni evento">Informazioni evento</option>
                      <option value="Collaborazioni">Collaborazioni</option>
                      <option value="Stampa">Stampa</option>
                      <option value="Altro">Altro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>Messaggio</label>
                    <textarea required rows={5} value={formData.messaggio} onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })} placeholder="Scrivi il tuo messaggio..." style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(212,168,67,0.35)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(212,168,67,0.12)' }}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required checked={formData.privacy} onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })} id="privacy" style={{ accentColor: 'var(--gold)', marginTop: '0.25rem' }} />
                    <label htmlFor="privacy" style={{ color: 'var(--parchment-dim)', lineHeight: 1.7, opacity: 0.6 }}>
                      Acconsento al trattamento dei miei dati personali come descritto nell'informativa sulla privacy.
                    </label>
                  </div>
                  <button type="submit" className="btn-magic">Invia Messaggio</button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Info sidebar */}
          <ScrollReveal className="lg:col-span-5" from="right" delay={0.15}>
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="p-7 rounded-2xl" style={{ background: 'rgba(237,224,200,0.03)', border: '1px solid rgba(212,168,67,0.08)' }}>
                <h3 className="mb-5" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.1rem', color: 'var(--parchment)' }}>Seguici</h3>
                <div className="space-y-4">
                  {[
                    { label: '@scuoladimagiaitaliana', href: 'https://www.instagram.com/scuoladimagiaitaliana', platform: 'Instagram' },
                    { label: 'Scuola di Magia Italiana', href: 'https://www.facebook.com/scuoladimagiaitaliana', platform: 'Facebook' },
                  ].map((s) => (
                    <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors duration-300" style={{ color: 'var(--parchment-dim)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--parchment-dim)' }}
                    >
                      <span className="w-8 h-8 flex items-center justify-center shrink-0 rounded-full" style={{ border: '1px solid rgba(212,168,67,0.15)', fontFamily: '"Cinzel", serif', fontSize: '0.65rem', color: 'var(--gold-dim)' }}>{s.platform[0]}</span>
                      <span style={{ fontSize: 'var(--fs-body)' }}>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-7 rounded-2xl" style={{ background: 'rgba(237,224,200,0.03)', border: '1px solid rgba(212,168,67,0.08)' }}>
                <h3 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.1rem', color: 'var(--parchment)' }}>Associazione</h3>
                <p className="mb-1" style={{ color: 'var(--parchment-dim)', opacity: 0.6 }}>Caraval Spettacoli (No Profit)</p>
                <a href="https://caraval.it" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300" style={{ color: 'var(--gold-dim)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gold-dim)' }}
                >caraval.it</a>
              </div>

              <div className="p-7 rounded-2xl" style={{
                background: 'rgba(237,224,200,0.04)',
                border: '1px solid rgba(212,168,67,0.1)',
              }}>
                <h3 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.1rem', color: 'var(--parchment)' }}>Resta Aggiornato</h3>
                <p className="mb-5" style={{ color: 'var(--parchment-dim)', opacity: 0.6, lineHeight: 1.7 }}>Ricevi le date di apertura iscrizioni.</p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="La tua email" style={{ ...inputStyle, flex: 1, padding: '0.7rem 1rem' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(212,168,67,0.35)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(212,168,67,0.12)' }}
                  />
                  <button type="submit" className="rounded-xl px-4" style={{ background: 'var(--gold)', color: 'var(--void)', fontFamily: '"Cinzel", serif', fontSize: '0.8rem', fontWeight: 700, border: 'none' }}>→</button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
