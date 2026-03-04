import { useState } from 'react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

export default function Contatti() {
  const [formData, setFormData] = useState({ nome: '', email: '', oggetto: 'Informazioni evento', messaggio: '', privacy: false })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  const inputStyle = {
    width: '100%',
    padding: '0.8rem 1rem',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(200,169,81,0.12)',
    color: 'var(--parchment)',
    fontFamily: '"Cormorant Garamond", serif',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.4s',
  }

  return (
    <section id="contatti" className="relative overflow-hidden" style={{ paddingTop: 'var(--space-theatrical)', paddingBottom: 'var(--space-theatrical)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--void) 0%, var(--abyss) 50%, var(--void) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 40% 60%, rgba(200,169,81,0.03) 0%, transparent 50%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contatti" subtitle="Hai domande? Scrivici, rispondiamo con un gufo entro 24 ore." />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Info column */}
          <ScrollReveal className="lg:col-span-4" from="left">
            <div className="space-y-6">
              {/* Social */}
              <div className="glass-dark p-6 sm:p-8" style={{ borderLeft: '2px solid rgba(200,169,81,0.12)' }}>
                <h3 className="mb-5" style={{ fontFamily: '"Cinzel", serif', fontSize: '1rem', letterSpacing: '0.1em', color: 'var(--gold)' }}>Seguici</h3>
                <div className="space-y-4">
                  {[
                    { label: '@scuoladimagiaitaliana', href: 'https://www.instagram.com/scuoladimagiaitaliana', platform: 'Instagram' },
                    { label: 'Scuola di Magia Italiana', href: 'https://www.facebook.com/scuoladimagiaitaliana', platform: 'Facebook' },
                  ].map((s) => (
                    <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                      <span className="w-8 h-8 flex items-center justify-center transition-all duration-300" style={{ border: '1px solid rgba(200,169,81,0.15)', color: 'var(--gold-dim)', fontSize: '0.7rem', fontFamily: '"Cinzel", serif' }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.15)'; e.currentTarget.style.color = 'var(--gold-dim)' }}
                      >
                        {s.platform[0]}
                      </span>
                      <span className="transition-colors duration-300" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)' }}>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Association */}
              <div className="glass-dark p-6 sm:p-8" style={{ borderLeft: '2px solid rgba(200,169,81,0.12)' }}>
                <h3 className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '1rem', letterSpacing: '0.1em', color: 'var(--gold)' }}>Associazione</h3>
                <a href="https://caraval.it" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--parchment-dim)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--parchment-dim)' }}
                >
                  caraval.it
                </a>
              </div>

              {/* Newsletter */}
              <div className="p-6 sm:p-8" style={{ background: 'rgba(200,169,81,0.03)', border: '1px solid rgba(200,169,81,0.1)' }}>
                <h3 className="mb-3" style={{ fontFamily: '"Cinzel", serif', fontSize: '1rem', letterSpacing: '0.1em', color: 'var(--gold)' }}>Resta Aggiornato</h3>
                <p className="mb-4" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.6 }}>
                  Ricevi le date di apertura iscrizioni per le prossime edizioni.
                </p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="La tua email" style={{ ...inputStyle, flex: 1 }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.4)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.12)' }}
                  />
                  <button type="submit" style={{ padding: '0.8rem 1rem', background: 'var(--gold)', color: 'var(--void)', fontFamily: '"Cinzel", serif', fontSize: '0.7rem', fontWeight: 700, border: 'none', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(200,169,81,0.3)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
                  >
                    &rarr;
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="lg:col-span-8" delay={0.15} from="right">
            <div className="glass-dark p-6 sm:p-8 lg:p-10" style={{ borderLeft: '2px solid rgba(200,169,81,0.12)' }}>
              <h3 className="mb-8" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'var(--fs-subheading)', color: 'var(--gold)' }}>Scrivici un Messaggio</h3>

              {submitted ? (
                <div className="text-center py-16">
                  <span className="block mb-4" style={{ fontSize: '3rem' }}>&#x1F989;</span>
                  <h4 className="mb-2" style={{ fontFamily: '"Cinzel", serif', fontSize: '1.2rem', color: 'var(--gold)' }}>Messaggio Inviato!</h4>
                  <p style={{ color: 'var(--parchment-dim)', opacity: 0.6 }}>Il nostro gufo è in volo. Ti rispondiamo entro 24 ore.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-1.5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Nome</label>
                      <input type="text" required value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} placeholder="Il tuo nome" style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.4)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.12)' }}
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="La tua email" style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.4)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.12)' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1.5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Oggetto</label>
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
                    <label className="block mb-1.5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Messaggio</label>
                    <textarea required rows={5} value={formData.messaggio} onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })} placeholder="Scrivi il tuo messaggio..." style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.4)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(200,169,81,0.12)' }}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required checked={formData.privacy} onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })} id="privacy-check" style={{ accentColor: 'var(--gold)', marginTop: '0.25rem' }} />
                    <label htmlFor="privacy-check" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', lineHeight: 1.6, opacity: 0.5 }}>
                      Acconsento al trattamento dei miei dati personali come descritto nell'informativa sulla privacy.
                    </label>
                  </div>
                  <button type="submit" className="btn-magic">Invia Messaggio</button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
