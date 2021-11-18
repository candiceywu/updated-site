import React from 'react';
import './Footer.css';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Have questions or comments?
        </p>
        <p className='footer-subscription-text'>
          Please feel free to call, email or text us at any time.
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/sign-up'>Call</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
