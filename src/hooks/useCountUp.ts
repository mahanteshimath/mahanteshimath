import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Counts from 0 to `target` once `active` becomes true.
 * Respects the reduced-motion preference by jumping straight to the value.
 */
export function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    if (!active || reduced) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // Ease-out cubic: fast start, gentle settle.
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration, reduced])

  if (reduced) return active ? target : 0
  return value
}
