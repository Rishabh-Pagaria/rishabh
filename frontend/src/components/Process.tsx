import { PROCESS } from '../data/portfolio'

export default function Process() {
  return (
    <section id="process" className="wrap">
      <span className="eyebrow reveal">How we work</span>
      <h2 className="section-title reveal" style={{ '--delay': '60ms' } as React.CSSProperties}>
        A simple, <span className="text-grad">honest</span> process.
      </h2>
      <p className="section-sub reveal" style={{ '--delay': '110ms' } as React.CSSProperties}>
        No jargon, no surprises. Just clear steps from first call to a shipped product.
      </p>

      <div className="process">
        {PROCESS.map((p, i) => (
          <div
            className="process-step reveal"
            key={p.step}
            style={{ '--delay': `${i * 90}ms` } as React.CSSProperties}
          >
            <span className="step-num">{p.step}</span>
            <div className="step-body">
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
