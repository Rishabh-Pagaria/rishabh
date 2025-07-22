import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      thumbnail: 'images/EventNXT.png',
      title: 'EventNXT',
      description: 'The customer is looking for an event management application similar to Ticketmaster, but specifically designed for the fashion industry. The platform enables users to manage guest lists, ticket sales, RSVPs, customer rewards, and send emails in one centralized space.',
      role: 'This project being a legacy project was developed as part of my Software Engineering course where the client was FashioNXT from Fashion Tech, I worked as software developer, driving client calls, and leading the team using agile methodologies. This legacy project we developed using Ruby on Rails, PostgreSQL, Rspec & Cucumber for Software Testing, and Web Hosting on Heroku.',
      services: ['Full Stack Development using Ruby on Rails', 'Unit Testing using Rspec & Cucumber', 'Project Management using Linear - an agile methodology tool', 'Web Hosting using Heroku', 'Pitch Creation and Presentation'],
      demoLink: 'https://www.youtube.com/watch?v=h4WR0lMknIk',
      githubLink: 'https://github.com/FashioNXT/EventNXT-Fall2024/tree/main'
    },
    {
      thumbnail: 'images/Calorie.png',
      title: 'LSTM-CNN Model for Caloric Prediction: A Multi-Modal Approach',
      description: 'This is a multimodal deep learning system designed to predict lunch calorie intake by integrating continuous glucose monitoring (CGM) time series data with breakfast and lunch food images. The system utilizes CNN for spatial feature extraction from meal images and LSTM for temporal pattern recognition from CGM data. These outputs are fused and passed through a fully connected network to provide accurate caloric predictions. The project leverages diverse data types like demographics, microbiome, and nutritional data for enhanced robustness and interpretability.',
      role: 'Accurately estimating calorie intake from diverse input data is challenging and vital for healthcare applications. As a Deep Learning Researcher, I contributed to designing and implementing the dual-pathway architecture using CNN and LSTM, led preprocessing for multimodal input fusion, and performed hyperparameter tuning and model evaluation. I also collaborated on presenting the final results and visualizations to demonstrate model effectiveness.',
      services: ['Deep Learning (CNN + LSTM)', 'Multimodal Data Fusion', 'Preprocessing & Normalization', 'Model Evaluation & Optimization', 'Hyperparameter Tuning', 'Team Collaboration & Presentation'],
      demoLink: 'https://www.youtube.com/watch?v=Fon2hM_gY-o',
      githubLink: 'https://github.com/Rishabh-Pagaria/calorie-estimation'
    },
    {
      thumbnail: 'images/seatFlex.png',
      title: 'SeatFlex',
      description: 'As part of the TAMUHACK 2025 hackathon, our team developed an Airline Overbooking Volunteer System as American Airline Challenge. This application is part of a MVP that allows users to volunteer for overbooked flights, helping airlines manage passenger loads efficiently.',
      role: 'Led a team of 3 to work on this project in a 2 day Hacathon Setting. My team was involved from ideation, development of MVP and presenting the solution to the judges. The project was built using HTML, CSS, and JavaScript. Won the Best Begineer Software Category with a $200 worth JBL Speakers as a prize. Furthermore, working on this project to add authentication, database and other features to make it a full fledged application.',
      services: ['Frontend Development through JavaScript', 'UI/UX using Figma', 'Project Lead', 'Prototyping and Presentation'],
      demoLink: 'https://www.youtube.com/watch?v=Ges_APbVLbk',
      githubLink: 'https://devpost.com/software/seat-flex'
    },
    {
      thumbnail: 'images/LithiScanner.jpg',
      title: 'LithiScan',
      description: 'The work was part of a competition AGGIES Invent hosted by Los Alamos National Laboratory, where our problem statement was to develop a radiation monitoring system prototype to detect leak of harmful nuclear radiations through a Small Modular Nuclear Reactor (SMR).',
      role: 'We were a interdisciplinary team of 7 students, where I was responsible to gather subject matter expertise and prepare a pitch deck for the prototype. This pitch was presented to the pannel consisting of Research Nuclear Scientists from Los Alamos National Laboratory. Our team LithiScan won 2nd place and raised $2500 in prize money.',
      services: ['Project Management', 'Research and Development', 'Pitch Deck Creation', 'Branding & Video Editing'],
      demoLink: 'https://drive.google.com/file/d/1XxDcdYuahEP7muHYCYupcpbGyVabTHvK/view?usp=sharing',
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
