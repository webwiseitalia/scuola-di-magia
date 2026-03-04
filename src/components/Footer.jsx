import logo from '../assets/logosdmi.webp'
import ScrollReveal from './ScrollReveal'

const quickLinks = [
  { label: "L'Esperienza", href: '#esperienza' },
  { label: "L'Evento", href: '#evento' },
  { label: 'Le Location', href: '#location' },
  { label: 'Iscrizioni', href: '#iscrizioni' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Footer() {
  return (
    <footer className="relative" style={{ background: 'var(--void)' }}>
      {/* CTA banner */}
      <ScrollReveal>
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h3 style={{
                fontFamily: '"Cinzel Decorative", serif',
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                fontWeight: 700, lineHeight: 1,
                color: 'var(--parchment)',
              }}>
                Le iscrizioni sono aperte.
              </h3>
              <p className="mt-4" style={{ color: 'var(--parchment-dim)', opacity: 0.6, maxWidth: '400px', lineHeight: 1.8 }}>
                Non perdere il tuo posto nella prossima edizione.
              </p>
            </div>
            <a href="#iscrizioni" className="btn-magic shrink-0">Iscriviti Ora</a>
          </div>
        </div>
      </ScrollReveal>

      {/* Divider */}
      <div className="mx-6 sm:mx-10 lg:mx-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.15), transparent)' }} />

      {/* Footer content */}
      <div className="max-w-[90rem] mx-auto py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <img src={logo} alt="Scuola di Magia Italiana" className="h-10 w-auto mb-5" style={{ filter: 'drop-shadow(0 0 15px rgba(212,168,67,0.2))' }} />
            <p className="mb-5" style={{ color: 'var(--parchment-dim)', opacity: 0.45, lineHeight: 1.8, maxWidth: '280px' }}>
              Associazione Culturale<br />Caraval Spettacoli (No Profit)
            </p>
            <div className="flex gap-3">
              {[
                { letter: 'I', href: 'https://www.instagram.com/scuoladimagiaitaliana', label: 'Instagram' },
                { letter: 'F', href: 'https://www.facebook.com/scuoladimagiaitaliana', label: 'Facebook' },
              ].map((s) => (
                <a key={s.letter} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300"
                  style={{ border: '1px solid rgba(212,168,67,0.12)', fontFamily: '"Cinzel", serif', fontSize: '0.65rem', color: 'var(--gold-dim)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.4)'; e.currentTarget.style.color = 'var(--gold)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(212,168,67,0.12)'; e.currentTarget.style.color = 'var(--gold-dim)' }}
                >{s.letter}</a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>Link Rapidi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors duration-300" style={{ color: 'var(--parchment-dim)', opacity: 0.5 }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--gold)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.color = 'var(--parchment-dim)' }}
                  >{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>Le Sedi</h4>
            <ul className="space-y-3" style={{ color: 'var(--parchment-dim)', opacity: 0.5, lineHeight: 1.7 }}>
              <li>Castello di Thiene — Vicenza</li>
              <li>Palazzo Barbo — Bergamo</li>
              <li>Castel Mareccio — Bolzano</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>Legale</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Cookie Policy', 'Termini e Condizioni'].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors duration-300" style={{ color: 'var(--parchment-dim)', opacity: 0.5 }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--gold)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.color = 'var(--parchment-dim)' }}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(212,168,67,0.06)' }}>
          <p style={{ color: 'var(--parchment-dim)', fontSize: '0.75rem', opacity: 0.25 }}>
            © {new Date().getFullYear()} Scuola di Magia Italiana — Associazione Culturale Caraval Spettacoli.
          </p>
          <p style={{ color: 'var(--parchment-dim)', fontSize: '0.65rem', opacity: 0.15 }}>
            Evento liberamente ispirato all'universo fantasy. Non affiliato a marchi registrati.
          </p>
        </div>
      </div>
    </footer>
  )
}
