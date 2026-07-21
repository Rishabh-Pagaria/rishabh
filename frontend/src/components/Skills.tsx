import { SKILLS } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="wrap">
      <span className="eyebrow reveal">Toolkit</span>
      <h2 className="section-title reveal" style={{ '--delay': '60ms' } as React.CSSProperties}>
        The stack I <span className="text-grad">reach for</span>.
      </h2>
      <p className="section-sub reveal" style={{ '--delay': '110ms' } as React.CSSProperties}>
        Battle-tested tools I use to ship fast without cutting corners.
      </p>

      <div className="skills-grid">
        {SKILLS.map((group, i) => (
          <div
            className="skill-card reveal"
            key={group.group}
            style={{ '--delay': `${i * 60}ms` } as React.CSSProperties}
          >
            <h3>{group.group}</h3>
            <div className="stack">
              {group.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
