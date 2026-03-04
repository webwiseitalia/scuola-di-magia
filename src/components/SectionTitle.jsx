import ScrollReveal from './ScrollReveal'

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <ScrollReveal className="text-center mb-12 sm:mb-16">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/50" />
        <div className="w-2 h-2 rotate-45 bg-gold/60" />
        <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/50" />
      </div>
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-wide ${
          light ? 'text-night-dark' : 'gold-gradient-text'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
            light ? 'text-night/70' : 'text-parchment/70'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/50" />
        <div className="w-2 h-2 rotate-45 bg-gold/60" />
        <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/50" />
      </div>
    </ScrollReveal>
  )
}
