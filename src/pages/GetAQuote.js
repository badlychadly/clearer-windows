import React from 'react';
import { useForm } from 'react-hook-form';
import '../getaquote.css';

const GetAQuote = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(data)
      });

      if (response.ok) {
        console.log('Form submission successful');
        alert('Thank you for submitting your request! We will get back to you shortly.');
      } else {
        console.error('Form submission failed');
        alert('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Oops! Something went wrong. Please try again later.');
    }
  };

  const encodeFormData = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <div className="get-a-quote">
      <h2>Get a Quote</h2>
      <p>At our window cleaning business, we charge around $9 per window, although prices may vary based on different conditions such as window size and location. For accurate pricing, we recommend scheduling an appointment to have us provide an in-person quote. To request a quote, please fill in the information below and we will get in touch with you shortly:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name: <br />
          <input type="text" name="name" {...register('name', { required: true })} />
          {errors.name && <span className="error">Name is required</span>}
        </label>
        <br />
        <label>
          Email: <br />
          <input type="email" name="email" {...register('email', { required: true })} />
          {errors.email && <span className="error">Email is required</span>}
        </label>
        <br />
        <label>
          Phone: <br />
          <input type="tel" name="phone" {...register('phone', { required: true })} />
          {errors.phone && <span className="error">Phone is required</span>}
        </label>
        <br />
        <label>
          Message: <br />
          <textarea name="message" {...register('message', { required: true })} />
          {errors.message && <span className="error">Message is required</span>}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetAQuote;
