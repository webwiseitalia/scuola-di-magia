import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../assets/logosdmi.webp'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { label: "L'Esperienza", href: '#esperienza' },
  { label: 'Le Location', href: '#location' },
  { label: 'Iscrizioni', href: '#iscrizioni' },
  { label: 'Genitori', href: '#genitori' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    // Navbar appears after scrolling past hero
    gsap.fromTo(nav,
      { y: -100, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: {
          trigger: 'body',
          start: '80vh top',
          toggleActions: 'play none none reverse',
        },
      }
    )
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
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ opacity: 0, backdropFilter: 'blur(16px)', background: 'rgba(8,7,14,0.85)', borderBottom: '1px solid rgba(200,169,81,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="shrink-0">
            <img src={logo} alt="Scuola di Magia Italiana" className="h-9 sm:h-10 w-auto" style={{ filter: 'drop-shadow(0 0 8px rgba(200,169,81,0.2))' }} />
          </a>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group py-1"
                style={{ fontFamily: '"Cinzel", serif', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--parchment-dim)', transition: 'color 0.4s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--parchment-dim)' }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500" style={{ background: 'var(--gold)' }} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#iscrizioni" className="hidden sm:inline-flex px-5 py-2 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: '"Cinzel", serif', fontWeight: 700, background: 'linear-gradient(135deg, var(--gold-dim), var(--gold))', color: 'var(--void)', transition: 'all 0.4s', boxShadow: '0 0 15px rgba(200,169,81,0.15)' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(200,169,81,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 15px rgba(200,169,81,0.15)' }}
            >
              Iscriviti
            </a>

            {/* Mobile hamburger — three lines */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
              <span className="block w-6 h-px transition-all duration-300" style={{ background: 'var(--gold)', transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none' }} />
              <span className="block w-6 h-px transition-all duration-300" style={{ background: 'var(--gold)', opacity: mobileOpen ? 0 : 1 }} />
              <span className="block w-6 h-px transition-all duration-300" style={{ background: 'var(--gold)', transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — curtain drop */}
      <div
        className="xl:hidden fixed inset-0 flex flex-col items-center justify-center gap-8 transition-all duration-700"
        style={{
          background: 'rgba(8,7,14,0.97)',
          backdropFilter: 'blur(30px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 p-3" aria-label="Chiudi">
          <span className="block w-6 h-px rotate-45 translate-y-px" style={{ background: 'var(--gold)' }} />
          <span className="block w-6 h-px -rotate-45 -translate-y-px" style={{ background: 'var(--gold)' }} />
        </button>

        <img src={logo} alt="" className="h-14 w-auto mb-4" style={{ filter: 'drop-shadow(0 0 20px rgba(200,169,81,0.3))' }} />

        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: '"Cinzel", serif',
              fontSize: '1.1rem',
              letterSpacing: '0.15em',
              color: 'var(--parchment-dim)',
              transition: `all 0.3s ${i * 0.05}s`,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            {link.label}
          </a>
        ))}

        <a href="#iscrizioni" onClick={() => setMobileOpen(false)} className="btn-magic mt-4" style={{ fontSize: '0.8rem' }}>
          Iscriviti Ora
        </a>
      </div>
    </nav>
  )
}
