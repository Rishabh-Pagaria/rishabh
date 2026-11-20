import React from 'react';

const achievements = [
  { title: '1st place, Agents Track', event: 'AITX Community Hackathon, Houston (2026)', note: 'Loupein' },
  { title: '2nd place', event: 'Base Power x AITX Hackathon, Austin Deep Tech Week (2026)', note: 'OpenGrid' },
  { title: '1st place, all-time category', event: 'BUILD Halloween Hacks (2025)', note: 'Tricko · $1,294' },
  { title: '2nd place', event: 'Aggies Invent, Los Alamos National Laboratory Challenge', note: 'LithiScan · $2,500' },
  { title: '1st place', event: 'TAMU Student Research Week (2026)', note: '$300' },
  { title: 'Best Beginner Software Engineer Track', event: 'TAMUHACK (2025)', note: 'SeatFlex' },
  { title: 'Published paper', event: 'ICAIR 2025: Adaptive AI Sentinels Against Phishing Attacks', note: 'PhishGuard', url: 'https://papers.academic-conferences.org/index.php/icair/article/view/4373' },
  { title: 'Certification', event: 'Databricks Certified Generative AI Engineer Associate', note: '' },
];

const AchievementsSection: React.FC = () => (
  <section id="achievements" className="section achievements-section">
    <div className="container">
      <h2 className="section-title">Achievements</h2>
      <p className="section-subtitle">Hackathon wins, research and certifications</p>
      <ul className="awards-list">
        {achievements.map((a) => (
          <li key={a.event}>
            <strong className="award-title">{a.title}</strong>
            <span className="award-event">
              {a.url ? <a href={a.url} target="_blank" rel="noopener noreferrer">{a.event}↗</a> : a.event}
            </span>
            {a.note && <span className="award-note">{a.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AchievementsSection;
