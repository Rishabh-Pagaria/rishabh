import { useEffect, useRef, useState } from 'react'

// Counts a number up from 0 to `target` when the element is in view.
// Starts immediately if it's already on-screen at mount; respects
// prefers-reduced-motion by snapping straight to the final value.
export function useCountUp(target: number, durationMs = 1400) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLElement | null>(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }

    const animate = () => {
      if (done.current) return
      done.current = true
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / durationMs, 1)
        const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
        setValue(Math.round(eased * target))
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    // Already visible → count now; otherwise wait for scroll.
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) {
      animate()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          io.disconnect()
          animate()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, durationMs])

  return { value, ref }
}
