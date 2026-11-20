import React from 'react';

const activities = [
  { title: 'Graduate Teaching Assistant, Texas A&M', detail: 'Helped students work through technical material, Sep 2025 – May 2026.' },
  { title: 'Conference speaker, ICAIR 2025', detail: 'Presented PhishGuard to technical and non-technical audiences.' },
  { title: 'Hackathons and builder communities', detail: 'Regular at AITX Community events and Houston builder nights; five hackathon wins and podium finishes since 2025.' },
];

const ActivitiesSection: React.FC = () => (
  <section id="activities" className="section activities-section">
    <div className="container">
      <h2 className="section-title">Extracurricular Activities</h2>
      <p className="section-subtitle">Teaching, speaking and building with the community</p>
      <div className="activities-list">
        {activities.map((a) => (
          <div className="activity-item" key={a.title}>
            <h3 className="activity-title">{a.title}</h3>
            <p className="activity-detail">{a.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
