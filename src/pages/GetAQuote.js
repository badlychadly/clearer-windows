import React, { useState } from 'react';
import '../getaquote.css';

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for submitting your request! We will get back to you shortly.');
  };

  return (
    <div className="get-a-quote">
      <h2>Get a Quote</h2>
      <p>At our window cleaning business, we charge around $9 per window, although prices may vary based on different conditions such as window size and location. For accurate pricing, we recommend scheduling an appointment to have us provide an in-person quote. To request a quote, please fill in the information below and we will get in touch with you shortly:</p>
      <form onSubmit={handleSubmit} netlify>
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name: <br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email: <br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone: <br />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Message: <br />
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetAQuote;
