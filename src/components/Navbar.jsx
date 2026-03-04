import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logosdmi.webp'

const navLinks = [
  { label: "L'Esperienza", href: '#esperienza' },
  { label: 'Le Location', href: '#location' },
  { label: 'Date e Iscrizioni', href: '#iscrizioni' },
  { label: 'Per i Genitori', href: '#genitori' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-night-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Scuola di Magia Italiana" className="h-10 sm:h-12 w-auto" />
          </a>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-parchment/70 hover:text-gold font-serif text-sm tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href="#iscrizioni"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-night-dark font-serif font-bold text-sm rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,169,81,0.4)] hover:scale-105"
            >
              Iscriviti Ora
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-parchment/80 hover:text-gold transition-colors"
              aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed inset-0 top-0 bg-night-dark/98 backdrop-blur-xl transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-parchment/80 hover:text-gold transition-colors"
            aria-label="Chiudi menu"
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 pt-8">
          <img src={logo} alt="Scuola di Magia Italiana" className="h-14 w-auto mb-4" />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-parchment/80 hover:text-gold font-serif text-xl tracking-wide transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iscrizioni"
            onClick={() => setMobileOpen(false)}
            className="mt-4 btn-primary text-base"
          >
            Iscriviti Ora
          </a>
        </div>
      </div>
    </nav>
  )
}
