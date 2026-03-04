import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 40,
  duration = 0.6,
  from = 'bottom', // 'bottom', 'left', 'right', 'fade'
  scrub = false,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const initial = { opacity: 0 }
    const final = { opacity: 1, duration, delay, ease: 'power3.out' }

    if (from === 'bottom') { initial.y = y; final.y = 0 }
    if (from === 'left') { initial.x = -40; final.x = 0 }
    if (from === 'right') { initial.x = 40; final.x = 0 }
    if (from === 'fade') { initial.filter = 'blur(4px)'; final.filter = 'blur(0px)' }

    gsap.set(el, initial)

    if (scrub) {
      gsap.to(el, {
        ...final,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'top 40%',
          scrub: 1,
        },
      })
    } else {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => gsap.to(el, final),
      })
    }

    return () => ScrollTrigger.getAll().forEach(st => {
      if (st.trigger === el) st.kill()
    })
  }, [delay, y, duration, from, scrub])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
