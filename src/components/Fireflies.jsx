import { useEffect, useRef } from 'react'

export default function Fireflies({ count = 20, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let fireflies = []

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const goldColors = [
      [212, 168, 67],
      [240, 208, 120],
      [232, 160, 48],
      [196, 149, 48],
      [255, 220, 100],
      [200, 160, 255],
      [140, 200, 255],
    ]

    class Firefly {
      constructor() {
        this.reset()
      }

      reset() {
        const w = canvas.offsetWidth
        const h = canvas.offsetHeight
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.size = Math.random() * 4 + 1.5
        this.baseSize = this.size
        this.color = goldColors[Math.floor(Math.random() * goldColors.length)]
        this.vx = (Math.random() - 0.5) * 0.6
        this.vy = (Math.random() - 0.5) * 0.5
        this.pulseSpeed = Math.random() * 0.03 + 0.015
        this.pulseOffset = Math.random() * Math.PI * 2
        this.opacity = 0
        this.targetOpacity = Math.random() * 0.85 + 0.15
        this.life = 0
        this.maxLife = Math.random() * 500 + 250
        this.noiseX = Math.random() * 1000
        this.noiseY = Math.random() * 1000
        this.noiseSpeed = Math.random() * 0.004 + 0.002
        this.wobbleAmplitude = Math.random() * 2.5 + 1
        this.isBright = Math.random() < 0.25
      }

      update() {
        this.life++
        this.noiseX += this.noiseSpeed
        this.noiseY += this.noiseSpeed

        const wobbleX = Math.sin(this.noiseX * 2.1) * this.wobbleAmplitude +
                        Math.sin(this.noiseX * 0.7) * this.wobbleAmplitude * 0.5
        const wobbleY = Math.cos(this.noiseY * 1.8) * this.wobbleAmplitude +
                        Math.cos(this.noiseY * 0.5) * this.wobbleAmplitude * 0.3

        this.x += this.vx + wobbleX * 0.35
        this.y += this.vy + wobbleY * 0.35

        const pulse = Math.sin(this.life * this.pulseSpeed + this.pulseOffset)
        this.size = this.baseSize * (0.5 + pulse * 0.5)

        const lifeRatio = this.life / this.maxLife
        if (lifeRatio < 0.1) {
          this.opacity = (lifeRatio / 0.1) * this.targetOpacity
        } else if (lifeRatio > 0.8) {
          this.opacity = ((1 - lifeRatio) / 0.2) * this.targetOpacity
        } else {
          this.opacity = this.targetOpacity * (0.7 + pulse * 0.3)
        }

        const w = canvas.offsetWidth
        const h = canvas.offsetHeight
        if (this.life >= this.maxLife || this.x < -60 || this.x > w + 60 || this.y < -60 || this.y > h + 60) {
          this.reset()
        }
      }

      draw(ctx) {
        if (this.opacity <= 0) return
        const [r, g, b] = this.color

        const glowMultiplier = this.isBright ? 16 : 10
        const glowSize = this.size * glowMultiplier
        const glow = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowSize)
        glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.3})`)
        glow.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.12})`)
        glow.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.04})`)
        glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        ctx.fillStyle = glow
        ctx.fillRect(this.x - glowSize, this.y - glowSize, glowSize * 2, glowSize * 2)

        const coreSize = this.size * 2.5
        const core = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, coreSize)
        core.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.95})`)
        core.addColorStop(0.2, `rgba(255, 255, 240, ${this.opacity * 0.7})`)
        core.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.5})`)
        core.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        ctx.fillStyle = core
        ctx.beginPath()
        ctx.arc(this.x, this.y, coreSize, 0, Math.PI * 2)
        ctx.fill()

        if (this.isBright && this.opacity > 0.3) {
          ctx.save()
          ctx.globalAlpha = this.opacity * 0.4
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.6)`
          ctx.lineWidth = 0.5
          const rayLen = this.size * 5
          for (let angle = 0; angle < 4; angle++) {
            const a = (angle * Math.PI / 2) + (this.life * 0.01)
            ctx.beginPath()
            ctx.moveTo(this.x - Math.cos(a) * rayLen, this.y - Math.sin(a) * rayLen)
            ctx.lineTo(this.x + Math.cos(a) * rayLen, this.y + Math.sin(a) * rayLen)
            ctx.stroke()
          }
          ctx.restore()
        }
      }
    }

    for (let i = 0; i < count; i++) {
      const f = new Firefly()
      f.life = Math.floor(Math.random() * f.maxLife)
      fireflies.push(f)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      fireflies.forEach(f => {
        f.update()
        f.draw(ctx)
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
