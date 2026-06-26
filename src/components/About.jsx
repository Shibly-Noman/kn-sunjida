import { motion } from 'framer-motion'
import { education, profile, skillGroups } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function About() {
  return (
    <section id="about" className="bg-background-alt py-24 md:py-32">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Narrative */}
          <div>
            <SectionHeading label="About">
              Journalist’s rigor, <span className="text-primary">marketer’s</span> aim.
            </SectionHeading>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Education
                </h3>
                <div className="mt-4 space-y-4">
                  {education.map((e) => (
                    <div key={e.degree} className="border-l-2 border-primary pl-4">
                      <p className="font-bold">{e.degree}</p>
                      <p className="text-sm text-muted-foreground">
                        {e.field} · {e.detail}
                      </p>
                      <p className="text-sm font-semibold text-primary">{e.school}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <motion.div whileHover={{ x: 4 }} className="card p-6">
                  <h3 className="font-bold">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
