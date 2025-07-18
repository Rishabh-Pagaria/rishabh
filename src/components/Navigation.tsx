import React from 'react';
import logoImage from '/images/logo.png';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logoImage} alt="Rishabh Logo" className="logo-image" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
