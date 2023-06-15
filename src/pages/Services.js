import React from 'react';
import { Link } from 'react-router-dom';
import '../services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-overlay"></div>
      <div className="services-content">
        <h2 className="services">Transforming Your Windows: Our Premier Services</h2>
        <h5 className="services-description">Discover our top-notch window cleaning services and experience the difference it makes for your home or business.</h5>

        <div className="service">
          <h3>Window Cleaning</h3>
          <img src={`${process.env.PUBLIC_URL}/images/cleaningwindow.jpg`} alt="Window Cleaning" />
          <div className="service-details">
            <p>Experience streak-free windows that enhance the beauty of your space. Our professional team ensures a thorough and meticulous cleaning for every window.</p>
          </div>
        </div>

        <div className="service">
          <h3>Screen Cleaning</h3>
          <img src={`${process.env.PUBLIC_URL}/images/screencleanpose.jpg`} alt="Screen Cleaning" />
          <div className="service-details">
            <p>Let your windows breathe with clean and well-maintained screens. We remove dust, debris, and grime to improve the clarity and functionality of your screens.</p>
          </div>
        </div>

        <div className="service">
          <h3>Hard Water Removal</h3>
          <img src={`${process.env.PUBLIC_URL}/images/polework2.jpg`} alt="Hard Water Removal" />
          <div className="service-details">
            <p>Say goodbye to stubborn hard water stains on your windows. Our expert technicians employ effective techniques to restore the clarity and brilliance of your glass surfaces.</p>
          </div>
        </div>

        <div className="testimonial">
          <h4>Client Testimonial</h4>
          <p>"The team at Your Window Washing Company transformed our windows! They provided exceptional service, leaving our windows spotless. Highly recommended!"</p>
          <p className="testimonial-author">- John Doe</p>
        </div>

        <Link to="/get-a-quote" type='button' className='text-reset button' style={{textDecoration: 'none'}}>
            Get a Free Quote
          </Link>
      </div>
    </div>
  );
};

export default Services;
