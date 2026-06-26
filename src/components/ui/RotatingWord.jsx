import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedUnderline from './AnimatedUnderline'

// Cycles through phrases under an animated underline.
export default function RotatingWord({ words, interval = 2600 }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="relative inline-block align-bottom text-primary">
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
      <span className="absolute inset-0 flex items-end">
        <AnimatePresence mode="wait">
          <motion.span
            key={i}
            className="whitespace-nowrap"
            initial={{ opacity: 0, y: '0.4em', rotateX: -40 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: '-0.4em', rotateX: 40 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
      <AnimatedUnderline className="absolute -bottom-3 left-0 h-4 w-full md:-bottom-4" />
    </span>
  )
}
