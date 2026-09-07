import { useEffect, useRef, useState } from 'react'

interface Options {
  /** Fraction of the element that must be visible before it counts as in view. */
  threshold?: number
  /** Stop observing after the first intersection. Defaults to true. */
  once?: boolean
}

/**
 * Tracks whether an element has entered the viewport.
 * Used for staggered reveals and the stat count-up.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0.2,
  once = true,
}: Options = {}) {
  const ref = useRef<T>(null)
  // Without IntersectionObserver, show the content rather than hiding it forever.
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, inView }
}
