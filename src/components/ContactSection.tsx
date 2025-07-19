import React from 'react';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <>
      {/* Sticky Contact Menu */}
      <div className="sticky-contact-menu">
        <a 
          href="mailto:rpagaria2000@gmail.com" 
          className="sticky-contact-link"
          title="Email"
        >
          <img src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=000000" className='sticky-contact-icon' alt="Email Button" />
        </a>
        <a 
          href="https://www.linkedin.com/in/rishabhpagaria/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sticky-contact-link"
          title="LinkedIn"
        >
          <img src="https://img.icons8.com/?size=100&id=98960&format=png&color=000000" className='sticky-contact-icon' alt="LinkedIn Button" />
        </a>
        <a 
          href="https://github.com/Rishabh-Pagaria" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sticky-contact-link"
          title="GitHub"
        >
          <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" className='sticky-contact-icon' alt="GitHub Button" />
        </a>
      </div>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          
          <div className="contact-content">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
