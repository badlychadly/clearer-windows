import React from 'react';
import { useForm } from 'react-hook-form';
import '../getaquote.css';

const GetAQuote = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for submitting your request! We will get back to you shortly.');
  };

  return (
    <div className="get-a-quote">
      <h2>Get a Quote</h2>
      <p>At our window cleaning business, we charge around $9 per window, although prices may vary based on different conditions such as window size and location. For accurate pricing, we recommend scheduling an appointment to have us provide an in-person quote. To request a quote, please fill in the information below and we will get in touch with you shortly:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name: <br />
          <input type="text" name="name" {...register('test', { required: true })} />
          {errors.name && <span className="error">Name is required</span>}
        </label>
        <br />
        <label>
          Email: <br />
          <input type="email" name="email" {...register('test', { required: true })} />
          {errors.email && <span className="error">Email is required</span>}
        </label>
        <br />
        <label>
          Phone: <br />
          <input type="tel" name="phone" {...register('test', { required: true })} />
          {errors.phone && <span className="error">Phone is required</span>}
        </label>
        <br />
        <label>
          Message: <br />
          <textarea name="message" {...register('test', { required: true })} />
          {errors.message && <span className="error">Message is required</span>}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetAQuote;
