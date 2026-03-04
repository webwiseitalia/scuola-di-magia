import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react'
import MagicParticles from './MagicParticles'
import logo from '../assets/logosdmi.webp'
import heroImg from '../assets/foto/foto-1.webp'

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const badgesRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        badgesRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ragazzi alla Scuola di Magia Italiana"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-night-dark/80 via-night-dark/60 to-night-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-deep/40 to-transparent" />
      </div>

      {/* Particles */}
      <MagicParticles count={40} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-16">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={logo}
            alt="Scuola di Magia Italiana"
            className="h-16 sm:h-20 lg:h-24 w-auto mx-auto drop-shadow-[0_0_20px_rgba(200,169,81,0.3)]"
          />
        </div>

        {/* Headline */}
        <h1
          ref={titleRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6 text-shadow-magic"
          style={{ opacity: 0 }}
        >
          <span className="text-parchment-light">Non sognare la magia.</span>
          <br />
          <span className="gold-gradient-text">Vivila.</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-body text-lg sm:text-xl lg:text-2xl text-parchment/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ opacity: 0 }}
        >
          La Scuola di Magia Italiana ti aspetta. Tre giorni da protagonista in un vero castello,
          tra incantesimi, pozioni, creature fantastiche e misteri da risolvere.
          <span className="block mt-2 text-gold/80 font-serif text-base sm:text-lg">
            Per ragazze e ragazzi dai 6 ai 14 anni.
          </span>
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ opacity: 0 }}>
          <a href="#iscrizioni" className="btn-primary text-base sm:text-lg">
            Iscriviti Ora
          </a>
          <a href="#esperienza" className="btn-secondary text-base sm:text-lg">
            Scopri l'Esperienza
          </a>
        </div>

        {/* Trust Badges */}
        <div
          ref={badgesRef}
          className="flex flex-wrap justify-center gap-3 sm:gap-6"
          style={{ opacity: 0 }}
        >
          {[
            'Settima Edizione',
            'Sempre Sold Out',
            '100 ragazzi per turno',
            '25 attori professionisti',
          ].map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-gold/20 text-parchment/70 font-serif text-xs sm:text-sm tracking-wider"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#esperienza" className="flex flex-col items-center gap-2 text-gold/50 hover:text-gold/80 transition-colors">
          <span className="font-serif text-xs tracking-widest uppercase">Scopri</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  )
}
