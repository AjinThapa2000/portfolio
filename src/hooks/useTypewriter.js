import { useEffect, useState } from 'react'

/**
 * Cycles through an array of strings with a typing / deleting effect.
 */
export function useTypewriter(words, { typingSpeed = 65, deletingSpeed = 35, pause = 1600 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] ?? '')
      return
    }

    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}
