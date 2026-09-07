import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view so the nav can mark it active.
 * `ids` are section ids without the leading '#'.
 */
export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (ids.length === 0) return

    const onScroll = () => {
      // Bottom of the page: the last section is the intended target.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      if (atBottom) {
        setActiveId(ids[ids.length - 1])
        return
      }

      const current = ids
        .map((id) => {
          const element = document.getElementById(id)
          return element ? { id, top: element.getBoundingClientRect().top } : null
        })
        .filter((entry) => entry !== null)
        .filter((entry) => entry.top <= offset)
        .pop()

      setActiveId(current?.id ?? null)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return activeId
}
