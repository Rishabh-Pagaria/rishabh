import React from 'react';

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  description: string;
  role: string;
  services: string[];
  demoLink?: string;
  githubLink?: string;
  links?: { label: string; url: string }[];
  badge?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
  role,
  services,
  demoLink,
  githubLink,
  links,
  badge
}) => {
  const allLinks = links ?? [
    ...(demoLink && demoLink !== '#' ? [{ label: 'Demo', url: demoLink }] : []),
    ...(githubLink && githubLink !== '#' ? [{ label: 'View', url: githubLink }] : []),
  ];
  return (
    <div className="project-card">
      <div className="project-image">
        <img 
          src={thumbnail} 
          alt={`${title} preview`} 
          className="project-thumbnail"
        />
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <div className="project-links">
            {allLinks.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="project-link">
                {l.label}↗
              </a>
            ))}
          </div>
        </div>
        
        {badge && <p className="project-badge">{badge}</p>}
        <p className="project-description">{description}</p>
        
        <div className="project-section">
          <h4 className="section-heading">Role</h4>
          <p className="section-content">{role}</p>
        </div>
        
        <div className="project-section">
          <h4 className="section-heading">Stack &amp; skills</h4>
          <p className="section-content">
            {services.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
