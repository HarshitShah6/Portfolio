import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactSection.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ftofpeh',
        'template_k2ex7d8',
        form.current,
        'm2fLzt9Ta9QdVQiyL'
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          toast.success('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log('Email error:', error.text);
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Have a project or question? Let’s talk!</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default ContactSection;
