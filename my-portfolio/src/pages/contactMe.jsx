import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="user_name">
        Name
        <input type="text" name="user_name" />
      </label>
      <label htmlFor="user_email">
        Email
        <input type="email" name="user_email" />
      </label>
      <label htmlFor="message">
        Message
        <textarea name="message" />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactMe;
