import Reveal from './Reveal'

// Standard section header: pill label + big display heading.
export default function SectionHeading({ label, children, center = false }) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      {label && (
        <span className="pill mb-5 text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {label}
        </span>
      )}
      <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
        {children}
      </h2>
    </Reveal>
  )
}
