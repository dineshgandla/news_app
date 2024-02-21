
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqodveo");
  if (state.succeeded) {
      return (
            <div className='successfulContainer'>
                <p className='successful'>Thanks for contacting</p>
            </div>
      )
      
  }
  return (
    <div className="contact">
      <h1>Contact me!</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Full Name
        </label>
        <input
            id="name"
            type="text" 
            name="name" placeholder='first and last'
            />
        <label htmlFor="email">
            Email Address
        </label>
        <input
            id="email"
            type="email" 
            name="email" placeholder='name@gmail.com'
            />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
            <br/>
        <textarea
            id="message"
            name="message" placeholder='Write a message'
            />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
        <button className='btnContact' type="submit" disabled={state.submitting}>
            Send Message
        </button>
        </form>
    </div>
  );
}

export default Contact
