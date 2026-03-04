import { useEffect, useRef } from 'react'

export default function WandTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) return

    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let mouse = { x: -100, y: -100 }
    let prevMouse = { x: -100, y: -100 }

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio
      canvas.height = window.innerHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const goldColors = [
      [212, 168, 67],
      [240, 208, 120],
      [255, 220, 100],
      [232, 160, 48],
      [255, 255, 200],
      [180, 140, 255],
    ]

    class Spark {
      constructor(x, y, velocity) {
        this.x = x + (Math.random() - 0.5) * 8
        this.y = y + (Math.random() - 0.5) * 8
        this.size = Math.random() * 2.5 + 0.5
        this.color = goldColors[Math.floor(Math.random() * goldColors.length)]
        this.vx = velocity.x * 0.3 + (Math.random() - 0.5) * 1.5
        this.vy = velocity.y * 0.3 + (Math.random() - 0.5) * 1.5 - Math.random() * 0.8
        this.gravity = 0.02 + Math.random() * 0.02
        this.friction = 0.97
        this.opacity = Math.random() * 0.6 + 0.4
        this.life = 0
        this.maxLife = Math.random() * 40 + 20
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.1
        // Star shape probability
        this.isStar = Math.random() > 0.7
      }

      update() {
        this.life++
        this.x += this.vx
        this.y += this.vy
        this.vy += this.gravity
        this.vx *= this.friction
        this.vy *= this.friction
        this.rotation += this.rotationSpeed
        this.size *= 0.98

        const lifeRatio = this.life / this.maxLife
        if (lifeRatio > 0.5) {
          this.opacity *= 0.95
        }
      }

      draw(ctx) {
        if (this.opacity <= 0.01 || this.size <= 0.1) return
        const [r, g, b] = this.color

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)

        if (this.isStar) {
          // Draw a tiny 4-point star
          const s = this.size
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`
          ctx.beginPath()
          for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2 - Math.PI / 2
            const outerX = Math.cos(angle) * s * 2
            const outerY = Math.sin(angle) * s * 2
            const innerAngle = angle + Math.PI / 4
            const innerX = Math.cos(innerAngle) * s * 0.6
            const innerY = Math.sin(innerAngle) * s * 0.6
            if (i === 0) ctx.moveTo(outerX, outerY)
            else ctx.lineTo(outerX, outerY)
            ctx.lineTo(innerX, innerY)
          }
          ctx.closePath()
          ctx.fill()
        } else {
          // Draw glowing dot
          const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 4)
          glow.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.5})`)
          glow.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.6})`)
          glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
          ctx.fillStyle = glow
          ctx.fillRect(-this.size * 4, -this.size * 4, this.size * 8, this.size * 8)
        }

        ctx.restore()
      }

      isDead() {
        return this.life >= this.maxLife || this.opacity <= 0.01 || this.size <= 0.1
      }
    }

    const onMouseMove = (e) => {
      prevMouse.x = mouse.x
      prevMouse.y = mouse.y
      mouse.x = e.clientX
      mouse.y = e.clientY

      const velocity = {
        x: (mouse.x - prevMouse.x) * 0.5,
        y: (mouse.y - prevMouse.y) * 0.5,
      }
      const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2)

      // Emit particles based on speed
      const count = Math.min(Math.floor(speed * 0.4) + 1, 5)
      for (let i = 0; i < count; i++) {
        if (particles.length < 200) {
          particles.push(new Spark(mouse.x, mouse.y, velocity))
        }
      }
    }

    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      particles.forEach(p => {
        p.update()
        p.draw(ctx)
      })

      particles = particles.filter(p => !p.isDead())
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9998 }}
      aria-hidden="true"
    />
  )
}
