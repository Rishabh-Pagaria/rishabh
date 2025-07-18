import React from 'react';

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  description: string;
  role: string;
  services: string[];
  demoLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
  role,
  services,
  demoLink,
  githubLink
}) => {
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
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Demo↗
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                View↗
              </a>
            )}
          </div>
        </div>
        
        <p className="project-description">{description}</p>
        
        <div className="project-section">
          <h4 className="section-heading">Role</h4>
          <p className="section-content">{role}</p>
        </div>
        
        <div className="project-section">
          <h4 className="section-heading">Services</h4>
          <p className="section-content">
            {services.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
