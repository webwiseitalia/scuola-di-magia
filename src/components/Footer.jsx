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
      {/* CTA — left-aligned, not centered */}
      <div style={{ borderTop: '1px solid rgba(200,169,81,0.06)', background: 'linear-gradient(135deg, rgba(200,169,81,0.03) 0%, transparent 50%, rgba(200,169,81,0.02) 100%)' }}>
        <ScrollReveal>
          <div className="max-w-7xl mx-auto py-16 sm:py-24" style={{ paddingLeft: 'clamp(2rem, 8vw, 10rem)', paddingRight: 'clamp(2rem, 4vw, 4rem)' }}>
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-gold-gradient mb-3" style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 'var(--fs-subheading)', fontWeight: 700 }}>
                  Le iscrizioni sono aperte.
                </p>
                <p style={{ color: 'var(--parchment-dim)', opacity: 0.5, maxWidth: '400px' }}>
                  Non perdere il tuo posto nella prossima edizione.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <a href="#iscrizioni" className="btn-magic">Iscriviti Ora</a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer content — 5/2/2/3 split */}
      <div className="max-w-7xl mx-auto py-14 sm:py-18" style={{ paddingLeft: 'clamp(2rem, 8vw, 10rem)', paddingRight: 'clamp(2rem, 4vw, 4rem)' }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand — wider */}
          <div className="lg:col-span-5">
            <img src={logo} alt="Scuola di Magia Italiana" className="h-10 w-auto mb-4" style={{ filter: 'drop-shadow(0 0 10px rgba(200,169,81,0.15))' }} />
            <p className="mb-4" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.35, lineHeight: 1.7, maxWidth: '280px' }}>
              Associazione Culturale<br />Caraval Spettacoli (No Profit)
            </p>
            <div className="flex gap-3">
              {[
                { letter: 'I', href: 'https://www.instagram.com/scuoladimagiaitaliana', label: 'Instagram' },
                { letter: 'F', href: 'https://www.facebook.com/scuoladimagiaitaliana', label: 'Facebook' },
              ].map((s) => (
                <a key={s.letter} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid rgba(200,169,81,0.12)', fontFamily: '"Cinzel", serif', fontSize: '0.6rem', color: 'var(--gold-dim)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.4)'; e.currentTarget.style.color = 'var(--gold)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,81,0.12)'; e.currentTarget.style.color = 'var(--gold-dim)' }}
                >{s.letter}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Link Rapidi</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.4, transition: 'all 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--gold)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; e.currentTarget.style.color = 'var(--parchment-dim)' }}
                  >{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h4 className="mb-4" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Le Sedi</h4>
            <ul className="space-y-2.5" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.4 }}>
              <li>Castello di Thiene — Vicenza</li>
              <li>Palazzo Barbo — Bergamo</li>
              <li>Castel Mareccio — Bolzano</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3">
            <h4 className="mb-4" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)' }}>Legale</h4>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Cookie Policy', 'Termini e Condizioni'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: 'var(--parchment-dim)', fontSize: 'var(--fs-small)', opacity: 0.4, transition: 'all 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--gold)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; e.currentTarget.style.color = 'var(--parchment-dim)' }}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2" style={{ borderTop: '1px solid rgba(200,169,81,0.05)' }}>
          <p style={{ color: 'var(--parchment-dim)', fontSize: '0.7rem', opacity: 0.2 }}>
            &copy; {new Date().getFullYear()} Scuola di Magia Italiana — Associazione Culturale Caraval Spettacoli.
          </p>
          <p style={{ color: 'var(--parchment-dim)', fontSize: '0.6rem', opacity: 0.12 }}>
            Evento liberamente ispirato all'universo fantasy. Non affiliato a marchi registrati.
          </p>
        </div>
      </div>
    </footer>
  )
}
