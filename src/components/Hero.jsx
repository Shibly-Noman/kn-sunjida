import { motion } from 'framer-motion'
import { profile, stats, education } from '../data/site'
import RotatingWord from './ui/RotatingWord'
import MagneticButton from './ui/MagneticButton'
import Counter from './ui/Counter'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 md:pt-44">
      {/* soft warm glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-content relative">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pill text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {profile.badge}
        </motion.span>

        <h1 className="mt-7 max-w-4xl text-[2rem] font-extrabold leading-[1.05] sm:text-5xl sm:leading-[1.02] md:text-6xl lg:text-7xl xl:text-[5.25rem]">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="block"
          >
            {profile.heroLead}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 block"
          >
            <RotatingWord words={profile.rotating} />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {profile.heroSub}
        </motion.p>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {education.map((e) => (
            <div
              key={e.degree}
              className="flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="font-semibold text-foreground">{e.field}</span>
              <span className="text-muted-foreground">·</span>
              <span className="font-bold text-primary">{e.degree.match(/\(([^)]+)\)/)?.[1]}</span>
            </div>
          ))}
        </motion.div>

        {/* Real stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
            >
              <div className="font-display text-4xl font-extrabold text-primary md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
