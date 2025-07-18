import React from 'react';

interface ContactMethodProps {
  icon: string;
  title: string;
  value: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, title, value }) => {
  return (
    <div className="contact-method">
      <div className="contact-icon">{icon}</div>
      <div className="contact-details">
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ContactMethod;
