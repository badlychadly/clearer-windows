import React from 'react';
import './contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h2 className="contact-us-title">Get in Touch</h2>
        <p className="contact-us-description">For any inquiries or collaborations, feel free to reach out to us:</p>

        <div className="contact-us-details">
          <div className="contact-us-info">
            <h4>Name:</h4>
            <p>Chad Montoya</p>
          </div>

          <div className="contact-us-info">
            <h4>Phone:</h4>
            <p>303-437-0623</p>
          </div>

          <div className="contact-us-info">
            <h4>Email:</h4>
            <p>clearerwindowsnow@gmail.com</p>
          </div>

          <div className="contact-us-info">
            <h4>Facebook:</h4>
            <p>
              <a href="https://m.facebook.com/profile.php?id=100086582676025" target="_blank" rel="noopener noreferrer">Clearer Windows</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
