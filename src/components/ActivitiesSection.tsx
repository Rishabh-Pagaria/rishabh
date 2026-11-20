import React, { useState } from 'react';

const slides = [
  {
    image: 'images/codered.jpg',
    position: 'center 30%',
    title: 'Hackathon judge, CodeRED Origin',
    detail: 'Judged student teams at the University of Houston, from participating in hackathons to evaluating them.',
  },
  {
    image: 'images/srw.jpg',
    position: 'center 35%',
    title: '1st place, TAMU Student Research Week 2026',
    detail: 'Recognized for research presented at Texas A&M.',
  },
  {
    image: '',
    position: '',
    title: 'Conference speaker, ICAIR 2025',
    detail: 'Presented PhishGuard to technical and non-technical audiences.',
  },
  {
    image: '',
    position: '',
    title: 'Houston builder community',
    detail: 'Active from AITX hackathons to Proof of Build dev nights, with five hackathon wins and podium finishes since 2025.',
  },
];

const ActivitiesSection: React.FC = () => {
  const [i, setI] = useState(0);
  const s = slides[i];
  const go = (n: number) => setI((n + slides.length) % slides.length);

  return (
    <section id="activities" className="section activities-section">
      <div className="container">
        <h2 className="section-title">Extracurricular Activities</h2>
        <p className="section-subtitle">Judging, speaking and building with the community</p>
        <div className="carousel">
          <div className="carousel-frame">
            {s.image ? (
              <img src={s.image} alt={s.title} className="carousel-image" style={{ objectPosition: s.position }} />
            ) : (
              <div className="carousel-placeholder">{s.title}</div>
            )}
            <button className="carousel-btn prev" onClick={() => go(i - 1)} aria-label="Previous">‹</button>
            <button className="carousel-btn next" onClick={() => go(i + 1)} aria-label="Next">›</button>
          </div>
          <div className="carousel-caption">
            <h3 className="activity-title">{s.title}</h3>
            <p className="activity-detail">{s.detail}</p>
          </div>
          <div className="carousel-dots">
            {slides.map((sl, n) => (
              <button
                key={sl.title}
                className={`carousel-dot ${n === i ? 'active' : ''}`}
                onClick={() => go(n)}
                aria-label={`Show ${sl.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
