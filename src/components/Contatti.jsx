import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import ScrollReveal from './ScrollReveal'

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
    gsap.set(split.chars, { opacity: 0, y: 30 })
    gsap.to(split.chars, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.02, ease: 'power3.out',
      scrollTrigger: { trigger: heading, start: 'top 82%', once: true },
    })
  }, [])

  const inputStyle = {
    width: '100%',
    padding: '0.8rem 1rem',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(200,169,81,0.12)',
    color: 'var(--parchment)',
    fontFamily: '"Cormorant Garamond", serif',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  return (
    <section id="contatti" className="relative" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)', background: 'linear-gradient(180deg, var(--void) 0%, var(--abyss) 50%, var(--void) 100%)' }}>
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: 'clamp(2rem, 8vw, 10rem)', paddingRight: 'clamp(2rem, 4vw, 4rem)' }}>

        {/* Heading — right-aligned for contrast */}
        <div className="flex justify-end mb-16 sm:mb-24">
          <div className="text-right max-w-xl">
            <div className="flex items-center justify-end gap-6 mb-6">
              <div>
                <p style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem' }}>
                  Scrivici
                </p>
                <h2 ref={headingRef} className="text-gold-gradient" style={{
                  fontSize: 'var(--fs-heading)',
                  fontFamily: '"Cinzel Decorative", "Cinzel", Georgia, serif',
                  fontWeight: 700, lineHeight: 1.1,
                }}>
                  Contatti
                </h2>
              </div>
              <span className="hidden sm:block text-gold-gradient" style={{
                fontFamily: '"Cinzel Decorative", serif', fontSize: 'clamp(4rem, 8vw, 7rem)',
                fontWeight: 700, lineHeight: 0.85, opacity: 0.15,
              }}>06</span>
            </div>
            <p style={{ color: 'var(--parchment-dim)', lineHeight: 1.9 }}>
              Hai domande? Scrivici, rispondiamo con un gufo entro 24 ore.
            </p>
          </div>
        </div>

        {/* Content — 8/4 split, form left wide, info right narrow */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form — wide */}
          <ScrollReveal className="lg:col-span-8" from="left">
            <div className="p-6 sm:p-8 lg:p-10" style={{ border: '1px solid rgba(200,169,81,0.08)', background: 'rgba(13,11,24,0.4)' }}>
              <h3 className="mb-6" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>Scrivici un Messaggio</h3>

              {submitted ? (
                <div className="text-center py-14">
                  <span className="block mb-3" style={{ fontSize: '2.5rem' }}>&#x1F989;</span>
                  <h4 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.1rem', color: 'var(--gold)' }}>Messaggio Inviato!</h4>
                  <p style={{ color: 'var(--parchment-dim)', opacity: 0.6 }}>Il nostro gufo è in volo. Ti rispondiamo entro 24 ore.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-1.5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Nome</label>
                      <input type="text" required value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} placeholder="Il tuo nome" style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.4)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.12)' }}
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="La tua email" style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.4)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.12)' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1.5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Oggetto</label>
                    <select value={formData.oggetto} onChange={(e) => setFormData({ ...formData, oggetto: e.target.value })} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.4)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.12)' }}
                    >
                      <option value="Informazioni evento">Informazioni evento</option>
                      <option value="Collaborazioni">Collaborazioni</option>
                      <option value="Stampa">Stampa</option>
                      <option value="Altro">Altro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1.5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Messaggio</label>
                    <textarea required rows={5} value={formData.messaggio} onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })} placeholder="Scrivi il tuo messaggio..." style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.4)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.12)' }}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required checked={formData.privacy} onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })} id="privacy" style={{ accentColor: 'var(--gold)', marginTop: '0.25rem' }} />
                    <label htmlFor="privacy" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.6, opacity: 0.5 }}>
                      Acconsento al trattamento dei miei dati personali come descritto nell'informativa sulla privacy.
                    </label>
                  </div>
                  <button type="submit" className="btn-magic">Invia Messaggio</button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Info sidebar — narrow, sticky */}
          <ScrollReveal className="lg:col-span-4" from="right" delay={0.15}>
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="p-6" style={{ borderLeft: '2px solid rgba(200,169,81,0.15)', background: 'rgba(200,169,81,0.01)' }}>
                <h3 className="mb-4" style={{ fontFamily: '"Cinzel", serif', fontSize: '1rem', color: 'var(--gold)' }}>Seguici</h3>
                <div className="space-y-3">
                  {[
                    { label: '@scuoladimagiaitaliana', href: 'https://www.instagram.com/scuoladimagiaitaliana', platform: 'Instagram' },
                    { label: 'Scuola di Magia Italiana', href: 'https://www.facebook.com/scuoladimagiaitaliana', platform: 'Facebook' },
                  ].map((s) => (
                    <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--parchment-dim)' }}
                    >
                      <span className="w-7 h-7 flex items-center justify-center shrink-0" style={{ border: '1px solid rgba(200,169,81,0.15)', fontFamily: '"Cinzel", serif', fontSize: '0.6rem', color: 'var(--gold-dim)' }}>{s.platform[0]}</span>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6" style={{ borderLeft: '2px solid rgba(200,169,81,0.15)', background: 'rgba(200,169,81,0.01)' }}>
                <h3 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '1rem', color: 'var(--gold)' }}>Associazione</h3>
                <a href="https://caraval.it" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--parchment-dim)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--parchment-dim)' }}
                >caraval.it</a>
              </div>

              <div className="p-6" style={{ background: 'rgba(200,169,81,0.02)', border: '1px solid rgba(200,169,81,0.08)' }}>
                <h3 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '1rem', color: 'var(--gold)' }}>Resta Aggiornato</h3>
                <p className="mb-4" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.6 }}>Ricevi le date di apertura iscrizioni.</p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="La tua email" style={{ ...inputStyle, flex: 1, padding: '0.6rem 0.8rem', fontSize: '0.9rem' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.4)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.12)' }}
                  />
                  <button type="submit" style={{ padding: '0.6rem 0.8rem', background: 'var(--gold)', color: 'var(--void)', fontFamily: '"Cinzel", serif', fontSize: '0.7rem', fontWeight: 700, border: 'none' }}>&rarr;</button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
