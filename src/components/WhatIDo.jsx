import { motion } from 'framer-motion'
import { lifecycle } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function WhatIDo() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-content">
        <SectionHeading label="What I do">
          The full content <span className="text-primary">lifecycle</span>, owned end to end.
        </SectionHeading>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            From the first interview to the last performance report — one person who can take a
            blank page all the way to measurable results.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycle.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card h-full p-7"
              >
                <span className="font-display text-2xl font-extrabold text-primary/30">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
