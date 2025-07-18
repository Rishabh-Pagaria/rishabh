import React from 'react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <div className="hero-content">
          <div className="floating-elements">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="highlight">Rishabh Pagaria</span>
            </h1>
            <p className="hero-subtitle">
              Brewing and developinng smoother experiences
            </p>
            <div className="hero-description">
              <p>
                To me, crafting great user experiences is like brewing the perfect cup: it takes the right blend of design, logic, and a little bit of magic. 
                I’m gonna be the King of the Classic Brews. Listening to...
              </p>
            </div>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <span className="window-title">portfolio.tsx</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">const</span> 
                  <span className="code-variable"> developer</span> 
                  <span className="code-operator"> = </span>
                  <span className="code-string">"Rishabh"</span>
                  <span className="code-semicolon">;</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span> 
                  <span className="code-variable"> skills</span> 
                  <span className="code-operator"> = </span>
                  <span className="code-bracket">[</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-string">"React"</span>
                  <span className="code-comma">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-string">"TypeScript"</span>
                  <span className="code-comma">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-string">"Innovation"</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">];</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
