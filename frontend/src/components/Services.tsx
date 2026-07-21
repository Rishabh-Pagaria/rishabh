import { SERVICES, type Service } from '../data/portfolio'

// Minimal line icons, stroked with currentColor so they inherit the accent.
const ICONS: Record<Service['icon'], React.ReactNode> = {
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="6" r="1.6" /><circle cx="19" cy="6" r="1.6" />
      <circle cx="5" cy="18" r="1.6" /><circle cx="19" cy="18" r="1.6" />
      <path d="M6.3 7 10 10.3M17.7 7 14 10.3M6.3 17 10 13.7M17.7 17 14 13.7" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8h18" /><circle cx="6" cy="6" r="0.5" fill="currentColor" /><circle cx="8" cy="6" r="0.5" fill="currentColor" />
      <path d="M9 13l-2 2 2 2M15 13l2 2-2 2" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      <path d="M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17.5 9.5 3.5 3.5 0 0 1 17 18H7z" />
      <path d="M12 12v4M10 14l2-2 2 2" />
    </svg>
  ),
}

export default function Services() {
  return (
    <section id="services" className="wrap">
      <span className="eyebrow reveal">What I do</span>
      <h2 className="section-title reveal" style={{ '--delay': '60ms' } as React.CSSProperties}>
        Services built to <span className="text-grad">move you forward</span>.
      </h2>
      <p className="section-sub reveal" style={{ '--delay': '110ms' } as React.CSSProperties}>
        Full-stack, AI, data, and cloud — one senior engineer across the whole build, so nothing falls between the cracks.
      </p>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <article
            className="service-card reveal"
            key={s.title}
            style={{ '--delay': `${i * 70}ms` } as React.CSSProperties}
          >
            <span className="service-icon">{ICONS[s.icon]}</span>
            <h3>{s.title}</h3>
            <p>{s.blurb}</p>
            <div className="stack">
              {s.tags.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
