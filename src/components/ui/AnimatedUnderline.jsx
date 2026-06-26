import { motion } from 'framer-motion'

// Hand-drawn underline swash that draws itself in.
export default function AnimatedUnderline({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 24"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M4 16 C 60 6, 120 6, 180 12 C 230 17, 280 18, 316 9"
        stroke="var(--primary)"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: 'easeInOut' }}
      />
    </svg>
  )
}
