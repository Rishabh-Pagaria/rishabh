import React from 'react';

const activities = [
  { title: 'Conference speaker, ICAIR 2025', detail: 'Presented PhishGuard to technical and non-technical audiences.' },
  { title: 'Hackathons and builder communities', detail: 'Active in Houston\'s builder community, from AITX hackathons to Proof of Build dev nights, with five hackathon wins and podium finishes since 2025.' },
];

const ActivitiesSection: React.FC = () => (
  <section id="activities" className="section activities-section">
    <div className="container">
      <h2 className="section-title">Extracurricular Activities</h2>
      <p className="section-subtitle">Speaking and building with the community</p>
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
