import React from 'react';
import ContactMethod from './ContactMethod';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'rishabh@example.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/rishabh'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/rishabh'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Ready to start your next project? Let's work together!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you're a company looking to hire, or you're a fellow developer
              wanting to collaborate, I'd love to hear from you.
            </p>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <ContactMethod
                  key={index}
                  icon={method.icon}
                  title={method.title}
                  value={method.value}
                />
              ))}
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
