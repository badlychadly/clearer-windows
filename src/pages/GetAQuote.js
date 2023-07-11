import React, { useState } from 'react';
import '../getaquote.css';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }






  const GetAQuote = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData })
      })
        .then(() => alert('Success!'))
        .catch((error) => alert(error));
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const { name, email, message } = formData;
  
    return (
      <form name="contact" method="post" onSubmit={handleSubmit} data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <input name='bot-field'/>
        </div>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  };










// const GetAQuote = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     alert('Thank you for submitting your request! We will get back to you shortly.');
//   };

//   return (
//     <div className="get-a-quote">
//       <h2>Get a Quote</h2>
//       <p>At our window cleaning business, we charge around $9 per window, although prices may vary based on different conditions such as window size and location. For accurate pricing, we recommend scheduling an appointment to have us provide an in-person quote. To request a quote, please fill in the information below and we will get in touch with you shortly:</p>
//       <form onSubmit={handleSubmit} name="contact" netlify="true">
//         <input type="hidden" name="form-name" value="contact" />
//         <label>
//           Name: <br />
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Email: <br />
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Phone: <br />
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//         </label>
//         <br />
//         <label>
//           Message: <br />
//           <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

export default GetAQuote;
