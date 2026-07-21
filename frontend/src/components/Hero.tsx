import { PROFILE, TRUSTED_BY, type Stat } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'

function StatCard({ stat }: { stat: Stat }) {
  const { value, ref } = useCountUp(stat.num)
  return (
    <div className="stat" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="num">
        {stat.prefix}{value}{stat.suffix}
      </div>
      <div className="lbl">{stat.label}</div>
    </div>
  )
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="home" className="hero wrap">
      <span className="status reveal">
        <span className="pulse" />
        {PROFILE.availability}
      </span>

      <h1 className="reveal" style={{ '--delay': '70ms' } as React.CSSProperties}>
        Software &amp; AI, <span className="text-grad">built to ship.</span>
      </h1>

      <p className="lede reveal" style={{ '--delay': '140ms' } as React.CSSProperties}>
        {PROFILE.tagline}
      </p>

      <div className="hero-cta reveal" style={{ '--delay': '210ms' } as React.CSSProperties}>
        <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
          Start a project
        </button>
        <button className="btn btn-ghost" onClick={() => scrollTo('work')}>
          See the work
        </button>
      </div>

      <div className="stat-strip reveal" style={{ '--delay': '280ms' } as React.CSSProperties}>
        {PROFILE.stats.map((s) => (
          <StatCard key={s.label} stat={s} />
        ))}
      </div>

      <div className="trust-bar reveal" style={{ '--delay': '340ms' } as React.CSSProperties}>
        <span className="trust-label">Experience shipping at</span>
        <div className="trust-logos">
          {TRUSTED_BY.map((org) => (
            <span className="trust-logo" key={org}>{org}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
