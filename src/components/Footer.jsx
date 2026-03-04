import logo from '../assets/logosdmi.webp'
import ScrollReveal from './ScrollReveal'

const quickLinks = [
  { label: "L'Esperienza", href: '#esperienza' },
  { label: 'Le Location', href: '#location' },
  { label: 'Iscrizioni', href: '#iscrizioni' },
  { label: 'Genitori', href: '#genitori' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Footer() {
  return (
    <footer className="relative" style={{ background: 'var(--void)' }}>
      {/* Final CTA */}
      <div style={{ borderTop: '1px solid rgba(200,169,81,0.08)', borderBottom: '1px solid rgba(200,169,81,0.08)', background: 'linear-gradient(135deg, rgba(200,169,81,0.04) 0%, transparent 50%, rgba(200,169,81,0.04) 100%)' }}>
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="text-gold-gradient mb-6" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'var(--fs-subheading)', fontWeight: 700 }}>
            Le iscrizioni sono aperte.
          </p>
          <p className="mb-8" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-body)', opacity: 0.6 }}>
            Non perdere il tuo posto nella prossima edizione.
          </p>
          <a href="#iscrizioni" className="btn-magic">Iscriviti Ora</a>
        </ScrollReveal>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Scuola di Magia Italiana" className="h-10 w-auto mb-5" style={{ filter: 'drop-shadow(0 0 10px rgba(200,169,81,0.15))' }} />
            <p style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.4, lineHeight: 1.7 }}>
              Associazione Culturale<br />Caraval Spettacoli (No Profit)
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { letter: 'I', href: 'https://www.instagram.com/scuoladimagiaitaliana', label: 'Instagram' },
                { letter: 'F', href: 'https://www.facebook.com/scuoladimagiaitaliana', label: 'Facebook' },
              ].map((s) => (
                <a key={s.letter} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid rgba(200,169,81,0.12)', fontFamily: '"Cinzel", serif', fontSize: '0.65rem', color: 'var(--gold-dim)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.4)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(200,169,81,0.1)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.12)'; e.currentTarget.style.color = 'var(--gold-dim)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  {s.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Link Rapidi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.4, transition: 'all 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--gold)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; e.currentTarget.style.color = 'var(--parchment-dim)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Le Sedi</h4>
            <ul className="space-y-3" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.4 }}>
              <li>Castello di Thiene — Vicenza</li>
              <li>Palazzo Barbo — Bergamo</li>
              <li>Castel Mareccio — Bolzano</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Legale</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Cookie Policy', 'Termini e Condizioni'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.4, transition: 'all 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--gold)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; e.currentTarget.style.color = 'var(--parchment-dim)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(200,169,81,0.06)' }}>
          <p style={{ color: 'var(--parchment-dim)', fontSize: '0.7rem', opacity: 0.25 }}>
            &copy; {new Date().getFullYear()} Scuola di Magia Italiana — Associazione Culturale Caraval Spettacoli. Tutti i diritti riservati.
          </p>
          <p style={{ color: 'var(--parchment-dim)', fontSize: '0.65rem', opacity: 0.15 }}>
            Evento liberamente ispirato all'universo fantasy. Non affiliato a marchi registrati.
          </p>
        </div>
      </div>
    </footer>
  )
}
