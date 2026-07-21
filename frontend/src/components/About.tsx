import { PROFILE, CONTACT } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="wrap">
      <span className="eyebrow reveal">About</span>
      <h2 className="section-title reveal" style={{ '--delay': '60ms' } as React.CSSProperties}>
        One engineer, <span className="text-grad">the whole build</span>.
      </h2>

      <div className="about-grid">
        <div className="about-copy reveal" style={{ '--delay': '120ms' } as React.CSSProperties}>
          <p>{PROFILE.summary}</p>
          <p>
            Working with a studio-of-one means you talk to the person actually writing the code.
            No account managers, no telephone game — just fast decisions, clear updates, and work
            you can trust from the database policy to the LLM fine-tune to the interface.
          </p>
        </div>

        <aside className="about-card reveal" style={{ '--delay': '180ms' } as React.CSSProperties}>
          <h3>At a glance</h3>
          <div className="row"><span>Studio</span><span>brewcase</span></div>
          <div className="row"><span>Focus</span><span>Software · AI · Data</span></div>
          <div className="row"><span>Experience</span><span>4+ yrs · 2 papers</span></div>
          <div className="row"><span>Education</span><span>M.S. CS · Texas A&M</span></div>
          <div className="row"><span>Based in</span><span>{CONTACT.location}</span></div>
          <div className="row"><span>Availability</span><span>{PROFILE.availability}</span></div>
        </aside>
      </div>
    </section>
  )
}
