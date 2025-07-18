import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      thumbnail: 'images/Rakuun.png',
      title: 'Rakuun',
      description: 'The customer is looking for an event management application similar to Ticketmaster, but specifically designed for the fashion industry. The platform enables users to manage guest lists, ticket sales, RSVPs, customer rewards, and send emails in one centralized space.',
      role: 'The project was developed as part of the Software Engineering final project where the client was FashioNXT, where we were supposed to work on legacy codebase, debugging, and implementing new features using agile methodologies.',
      services: ['Full Stack Development using Ruby on Rails', 'Software Testing', 'Project Management', 'Scrum Master', 'Pitch deck Creation and Presentation'],
      demoLink: 'https://www.youtube.com/watch?v=h4WR0lMknIk',
      githubLink: 'https://github.com/FashioNXT/EventNXT-Fall2024/tree/main'
    },
    {
      thumbnail: 'images/EventNXT.png',
      title: 'EventNXT',
      description: 'The customer is looking for an event management application similar to Ticketmaster, but specifically designed for the fashion industry. The platform enables users to manage guest lists, ticket sales, RSVPs, customer rewards, and send emails in one centralized space.',
      role: 'The project was developed as part of the Software Engineering final project where the client was FashioNXT, where we were supposed to work on legacy codebase, debugging, and implementing new features using agile methodologies.',
      services: ['Full Stack Development using Ruby on Rails', 'Software Testing', 'Project Management', 'Scrum Master', 'Pitch deck Creation and Presentation'],
      demoLink: 'https://www.youtube.com/watch?v=h4WR0lMknIk',
      githubLink: 'https://github.com/FashioNXT/EventNXT-Fall2024/tree/main'
    },
    {
      thumbnail: 'images/seatFlex.png',
      title: 'SeatFlex',
      description: 'An Airline Overbooking Volunteer System that allows users to volunteer for overbooked flights, helping airlines manage passenger loads efficiently.',
      role: 'Project Lead and UI/UX Designer responsible for leading the project from conception to implementation.',
      services: ['Web Design using Figma', 'Project Lead', 'Development through JavaScript'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      thumbnail: 'images/LithiScanner.jpg',
      title: 'LithiScan',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      role: 'Frontend Developer focused on creating intuitive user interfaces and implementing real-time collaboration features.',
      services: ['React', 'TypeScript', 'Firebase'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and personal projects
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              thumbnail={project.thumbnail}
              title={project.title}
              description={project.description}
              role={project.role}
              services={project.services}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
