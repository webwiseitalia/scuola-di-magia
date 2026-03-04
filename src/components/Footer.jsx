import { Instagram, Facebook } from 'lucide-react'
import logo from '../assets/logosdmi.webp'

const quickLinks = [
  { label: "L'Esperienza", href: '#esperienza' },
  { label: 'Le Location', href: '#location' },
  { label: 'Date e Iscrizioni', href: '#iscrizioni' },
  { label: 'Per i Genitori', href: '#genitori' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Footer() {
  return (
    <footer className="bg-night-dark border-t border-gold/10">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-center">
          <p className="font-display text-xl sm:text-2xl text-gold mb-4">
            Le iscrizioni sono aperte. Non perdere il tuo posto.
          </p>
          <a href="#iscrizioni" className="btn-primary text-sm sm:text-base">
            Iscriviti Ora
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Scuola di Magia Italiana" className="h-12 w-auto mb-4" />
            <p className="font-body text-parchment/40 text-sm leading-relaxed">
              Associazione Culturale<br />Caraval Spettacoli (No Profit)
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/scuoladimagiaitaliana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center text-parchment/50 hover:text-gold hover:border-gold/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/scuoladimagiaitaliana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center text-parchment/50 hover:text-gold hover:border-gold/40 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm text-gold/80 tracking-widest uppercase mb-4">
              Link Rapidi
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-parchment/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-serif text-sm text-gold/80 tracking-widest uppercase mb-4">
              Le Nostre Sedi
            </h4>
            <ul className="space-y-2.5 font-body text-parchment/50 text-sm">
              <li>Castello di Thiene — Thiene (VI)</li>
              <li>Palazzo Barbo — Torre Pallavicina (BG)</li>
              <li>Castel Mareccio — Bolzano (BZ)</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-sm text-gold/80 tracking-widest uppercase mb-4">
              Legale
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="font-body text-parchment/50 hover:text-gold text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-parchment/50 hover:text-gold text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-parchment/50 hover:text-gold text-sm transition-colors">
                  Termini e Condizioni
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-parchment/30 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Scuola di Magia Italiana — Associazione Culturale Caraval Spettacoli.
            Tutti i diritti riservati.
          </p>
          <p className="font-body text-parchment/20 text-xs">
            Evento liberamente ispirato all'universo fantasy. Non affiliato a marchi registrati.
          </p>
        </div>
      </div>
    </footer>
  )
}
