import React from 'react';
import '../CSS/EcommerceMaster.css';


export default function NewsLetter() {
  return (
    <>
      <div className="news-letter">
        <h2>Get Exclusive Offers On Your Email</h2>
        <p>Subscribe To Our News Letter And Stay Updated</p>
        <div className='contact'>
          <input type='email' placeholder='Your Email'/>
          <button>Subscribe</button>
        </div>
      </div>
    </>
  )
}
