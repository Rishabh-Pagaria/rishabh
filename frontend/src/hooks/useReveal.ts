import { useEffect } from 'react'

// Adds `.in` to `.reveal` elements as they enter the viewport.
// Anything already on-screen at mount is revealed immediately, so
// above-the-fold content (the hero) never gets stuck invisible.
export function useReveal() {
  useEffect(() => {
    const reveal = (el: Element) => el.classList.add('in')
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (!('IntersectionObserver' in window)) {
      els.forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    )

    els.forEach((el) => {
      const r = el.getBoundingClientRect()
      // Already visible → show now; otherwise animate in on scroll.
      if (r.top < window.innerHeight && r.bottom > 0) reveal(el)
      else io.observe(el)
    })

    return () => io.disconnect()
  }, [])
}
