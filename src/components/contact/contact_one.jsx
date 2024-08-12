import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Three = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_o8elwif', 'template_30chs8l', templateParams, 'VXIYGeyY-Ot7aByXH')
      .then((response) => {
        console.log('SUCCESS:', response);
        alert('Message sent successfully!');
        // Clear form
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('FAILED:', error);
        alert('Failed to send the message. Please try again.');
      });
  };


  return (
    <div className='contact'>
      <div className="contact_one">
        <h3>AVAILABLE FOR WORK&nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp;AVAILABLE FOR WORK</h3>
        <h1>GET IN <span>TOUCH</span></h1>
      </div>
      <div className="message">
      <form onSubmit={handleSubmit}>
        <div className="five">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="six">
          <textarea
            placeholder="Message"
            rows="4"
            cols="50"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send message</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Three;