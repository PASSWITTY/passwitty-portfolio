import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="trade__cta">
    <div className="trade__cta-content">
      <h2 className='Gradient__text'>Submit the form to get intouch with Us</h2>
    </div>
    <div>
        <form action="https://getform.io/f/6edda0ed-230f-49f5-b26e-9eb0134612c7" method='POST' className='trade__cta-form'>
          <input type="text"
            name='name'
            placeholder='Enter your name'
            className='trade__cta-form-1' 
          />
          <input type="text"
            name='email'
            placeholder='Enter your email'
            className='trade__cta-form-2'
          />
          <textarea name="message" id="" placeholder='Enter your message' rows="10" className='trade__cta-form-textarea'></textarea>
          <button className="trade__cta-btn" type="button">Lets Talk</button>
        </form>
    </div>
  </div>
);

export default CTA;