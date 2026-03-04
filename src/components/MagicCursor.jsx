import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MagicCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const trailsRef = useRef([])

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = -100
    let mouseY = -100

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      })

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.6,
        ease: 'power3.out',
      })
    }

    const onMouseEnterInteractive = () => {
      gsap.to(cursor, { scale: 0.5, opacity: 0.5, duration: 0.3 })
      gsap.to(follower, { scale: 2, opacity: 1, duration: 0.4, ease: 'elastic.out(1, 0.5)' })
    }

    const onMouseLeaveInteractive = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 })
      gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.3 })
    }

    document.addEventListener('mousemove', onMouseMove)

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [data-cursor]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    // Re-query on DOM changes
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('a, button, input, textarea, select, [data-cursor]')
      newElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
        el.addEventListener('mouseenter', onMouseEnterInteractive)
        el.addEventListener('mouseleave', onMouseLeaveInteractive)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Main dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--gold)',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(200, 169, 81, 0.6)',
        }}
      />
      {/* Follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(200, 169, 81, 0.25)',
          transform: 'translate(-50%, -50%)',
          opacity: 0.5,
        }}
      />
    </>
  )
}
