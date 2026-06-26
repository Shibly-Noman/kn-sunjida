import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { chapters } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function Stories() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  // Track which chapter is centered in the scroller.
  const onScroll = () => {
    const el = trackRef.current
    if (!el) return
    const cards = Array.from(el.children)
    const center = el.scrollLeft + el.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    cards.forEach((c, i) => {
      const cCenter = c.offsetLeft + c.offsetWidth / 2
      const d = Math.abs(cCenter - center)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    })
    setActive(best)
  }

  const scrollTo = (i) => {
    const el = trackRef.current
    if (!el) return
    const card = el.children[i]
    if (card) el.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' })
  }

  useEffect(() => {
    onScroll()
  }, [])

  const go = (dir) => scrollTo(Math.min(Math.max(active + dir, 0), chapters.length - 1))

  return (
    <section id="stories" className="overflow-hidden py-24 md:py-32">
      <div className="container-content">
        <SectionHeading label="An interactive archive">
          <span className="text-primary">Stories</span> behind the work
        </SectionHeading>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Drag, scroll, hover. Each chapter is a chapter of the career — from the newsroom desk to
            owning the full content lifecycle.
          </p>
        </Reveal>
      </div>

      {/* Scroller */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-4 md:px-10"
        style={{ scrollbarWidth: 'none' }}
      >
        {/* leading spacer to center first card on wide screens */}
        <div className="hidden shrink-0 md:block md:w-[max(0px,calc((100vw-1200px)/2))]" />
        {chapters.map((ch, i) => (
          <motion.article
            key={ch.n}
            className={`relative flex w-[85vw] shrink-0 snap-center flex-col overflow-hidden rounded-4xl border p-7 transition-colors sm:w-[420px] md:p-9 ${
              active === i ? 'border-primary bg-background-alt shadow-lg' : 'border-border bg-background-alt/60'
            }`}
            animate={{ scale: active === i ? 1 : 0.97, opacity: active === i ? 1 : 0.7 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          >
            {/* ghost chapter number */}
            <span className="pointer-events-none absolute right-4 top-2 font-display text-[7rem] font-extrabold leading-none text-primary/5">
              {String(ch.n).padStart(2, '0')}
            </span>

            <div className="relative flex items-center justify-between">
              <span className="pill text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Chapter {ch.n}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {ch.kicker}
              </span>
            </div>

            <h3 className="relative mt-6 text-2xl font-extrabold md:text-3xl">{ch.title}</h3>
            <p className="relative mt-1 font-semibold text-primary">{ch.company}</p>
            <p className="relative text-sm font-medium text-muted-foreground">
              {ch.role} · {ch.period}
            </p>

            <p className="relative mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {ch.desc}
            </p>

            <ul className="relative mt-5 space-y-2">
              {ch.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-auto grid grid-cols-3 gap-2 pt-7">
              {ch.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl bg-success-muted px-3 py-3 text-center">
                  <div className="font-display text-lg font-extrabold text-success">{m.value}</div>
                  <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
        <div className="shrink-0 pr-2" />
      </div>

      {/* Controls + progress timeline */}
      <div className="container-content mt-8 flex items-center gap-6">
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            disabled={active === 0}
            aria-label="Previous chapter"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background-alt text-lg transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
          >
            ‹
          </button>
          <button
            onClick={() => go(1)}
            disabled={active === chapters.length - 1}
            aria-label="Next chapter"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background-alt text-lg transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
          >
            ›
          </button>
        </div>

        <div className="flex flex-1 items-center gap-3">
          <div className="relative h-0.5 flex-1 rounded-full bg-border">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-primary"
              animate={{ width: `${((active + 1) / chapters.length) * 100}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            />
            <div className="absolute inset-0 flex items-center justify-between">
              {chapters.map((ch, i) => (
                <button
                  key={ch.n}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to chapter ${ch.n}`}
                  className={`h-3 w-3 rounded-full border-2 transition-colors ${
                    i <= active ? 'border-primary bg-primary' : 'border-border bg-background-alt'
                  }`}
                />
              ))}
            </div>
          </div>
          <span className="hidden shrink-0 text-sm font-semibold text-muted-foreground sm:block">
            {chapters[active].company}
          </span>
        </div>
      </div>
    </section>
  )
}
