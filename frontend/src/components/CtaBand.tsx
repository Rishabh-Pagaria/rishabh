import { PROFILE } from '../data/portfolio'

const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

// Bold conversion band that sits just above the contact form.
export default function CtaBand() {
  return (
    <section className="wrap" aria-label="Call to action">
      <div className="cta-band reveal">
        <div className="cta-inner">
          <span className="cta-badge">
            <span className="pulse" /> {PROFILE.availability}
          </span>
          <h2>
            Have an idea worth <span className="text-grad">building</span>?
          </h2>
          <p>Tell me what you're working on. I'll come back with a clear plan, timeline, and honest pricing — usually within a day.</p>
          <button className="btn btn-primary" onClick={scrollToContact}>
            Start a project →
          </button>
        </div>
      </div>
    </section>
  )
}
