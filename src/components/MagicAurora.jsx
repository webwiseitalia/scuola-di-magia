import { useEffect, useRef } from 'react'

export default function MagicAurora({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      time += 0.004
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const layers = [
        { color: [212, 168, 67], opacity: 0.12, yOffset: 0.25, speed: 1, amplitude: 50 },
        { color: [180, 140, 255], opacity: 0.08, yOffset: 0.3, speed: 0.7, amplitude: 60 },
        { color: [232, 160, 48], opacity: 0.10, yOffset: 0.35, speed: 1.3, amplitude: 45 },
        { color: [140, 200, 255], opacity: 0.06, yOffset: 0.4, speed: 0.9, amplitude: 55 },
        { color: [255, 200, 80], opacity: 0.07, yOffset: 0.2, speed: 0.5, amplitude: 70 },
      ]

      layers.forEach(layer => {
        const { color, opacity, yOffset, speed, amplitude } = layer
        const [r, g, b] = color
        const baseY = h * yOffset

        ctx.beginPath()
        ctx.moveTo(0, h)

        for (let x = 0; x <= w; x += 2) {
          const normalX = x / w
          const y = baseY +
            Math.sin(normalX * 3 + time * speed) * amplitude +
            Math.sin(normalX * 5 + time * speed * 1.5) * amplitude * 0.5 +
            Math.sin(normalX * 1.5 + time * speed * 0.5) * amplitude * 0.8
          ctx.lineTo(x, y)
        }

        ctx.lineTo(w, h)
        ctx.closePath()

        const grad = ctx.createLinearGradient(0, baseY - amplitude * 2, 0, h)
        const pulseOpacity = opacity * (0.6 + Math.sin(time * speed * 0.5) * 0.4)
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${pulseOpacity * 0.3})`)
        grad.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, ${pulseOpacity})`)
        grad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${pulseOpacity * 0.5})`)
        grad.addColorStop(0.8, `rgba(${r}, ${g}, ${b}, ${pulseOpacity * 0.15})`)
        grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        ctx.fillStyle = grad
        ctx.fill()
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
