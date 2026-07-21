import { PROJECTS, type Project } from '../data/portfolio'

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="card reveal"
      style={{ '--delay': `${index * 60}ms` } as React.CSSProperties}
    >
      <div className="card-top">
        <span className="card-kind">{project.kind}</span>
        <span className="card-year">{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.metrics.length > 0 && (
        <div className="metrics">
          {project.metrics.map((m) => (
            <span className="metric" key={m}>{m}</span>
          ))}
        </div>
      )}

      <div className="stack">
        {project.stack.map((s) => (
          <span className="chip" key={s}>{s}</span>
        ))}
      </div>

      <div className="card-links">
        {project.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
            {l.label} <span className="arrow">↗</span>
          </a>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="wrap">
      <span className="eyebrow reveal">Selected work</span>
      <h2 className="section-title reveal" style={{ '--delay': '60ms' } as React.CSSProperties}>
        Real projects, <span className="text-grad">real outcomes</span>.
      </h2>
      <p className="section-sub reveal" style={{ '--delay': '110ms' } as React.CSSProperties}>
        A sample of what I've designed, built, and shipped — each one measured by the result it delivered.
      </p>

      <div className="work-grid">
        {PROJECTS.map((p, i) => (
          <Card key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
