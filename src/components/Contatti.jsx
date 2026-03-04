import { useState } from 'react'
import { Mail, Phone, Instagram, Facebook, Send } from 'lucide-react'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

const contactInfo = [
  {
    icon: Instagram,
    label: '@scuoladimagiaitaliana',
    href: 'https://www.instagram.com/scuoladimagiaitaliana',
  },
  {
    icon: Facebook,
    label: 'Scuola di Magia Italiana',
    href: 'https://www.facebook.com/scuoladimagiaitaliana',
  },
]

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    oggetto: 'Informazioni evento',
    messaggio: '',
    privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission would be handled by external service
    setSubmitted(true)
  }

  return (
    <section id="contatti" className="section-padding bg-parchment-texture relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Contatti"
          subtitle="Hai domande? Scrivici, rispondiamo con un gufo entro 24 ore."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass-card p-6 sm:p-8 magic-border">
                <h3 className="font-serif text-xl text-gold mb-6">Seguici</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors">
                        <item.icon className="text-gold" size={20} />
                      </div>
                      <span className="font-body text-parchment/70 group-hover:text-gold transition-colors">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 sm:p-8 magic-border">
                <h3 className="font-serif text-xl text-gold mb-3">Sito Associazione</h3>
                <a
                  href="https://caraval.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-parchment/70 hover:text-gold transition-colors"
                >
                  caraval.it
                </a>
              </div>

              {/* Newsletter */}
              <div className="glass-card p-6 sm:p-8 magic-border bg-gold/5">
                <h3 className="font-serif text-xl text-gold mb-3">Resta Aggiornato</h3>
                <p className="font-body text-parchment/60 text-sm mb-4">
                  Iscriviti per ricevere le date di apertura delle iscrizioni
                  e le novità sulle prossime edizioni.
                </p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="La tua email"
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-gold/20 rounded-lg text-parchment font-body text-sm placeholder:text-parchment/30 focus:outline-none focus:border-gold/50"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-gold text-night-dark rounded-lg hover:bg-gold-light transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <div className="glass-card p-6 sm:p-8 magic-border">
              <h3 className="font-serif text-xl sm:text-2xl text-gold mb-6">Scrivici un Messaggio</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🦉</div>
                  <h4 className="font-serif text-xl text-gold mb-2">Messaggio Inviato!</h4>
                  <p className="font-body text-parchment/60">
                    Il nostro gufo è già in volo. Ti risponderemo entro 24 ore.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-serif text-sm text-parchment/60 mb-1.5">Nome</label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-parchment font-body placeholder:text-parchment/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label className="block font-serif text-sm text-parchment/60 mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-parchment font-body placeholder:text-parchment/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="La tua email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-serif text-sm text-parchment/60 mb-1.5">Oggetto</label>
                    <select
                      value={formData.oggetto}
                      onChange={(e) => setFormData({ ...formData, oggetto: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-parchment font-body focus:outline-none focus:border-gold/50 transition-colors"
                    >
                      <option value="Informazioni evento">Informazioni evento</option>
                      <option value="Collaborazioni">Collaborazioni</option>
                      <option value="Stampa">Stampa</option>
                      <option value="Altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-serif text-sm text-parchment/60 mb-1.5">Messaggio</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.messaggio}
                      onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-parchment font-body placeholder:text-parchment/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder="Scrivi il tuo messaggio..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacy}
                      onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                      className="mt-1 accent-gold"
                      id="privacy"
                    />
                    <label htmlFor="privacy" className="font-body text-parchment/50 text-sm leading-relaxed">
                      Acconsento al trattamento dei miei dati personali come descritto
                      nell'informativa sulla privacy.
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Invia Messaggio
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
