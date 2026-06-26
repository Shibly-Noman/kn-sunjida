import { nav, profile } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-content flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <a href="#home" className="font-display text-xl font-extrabold tracking-tight">
            {profile.wordmark.first}
            <span className="text-primary">.</span>
            {profile.wordmark.second}
          </a>
          <p className="mt-1 text-sm text-muted-foreground">{profile.tagline}</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
