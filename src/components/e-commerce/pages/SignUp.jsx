import React from 'react';
import '../CSS/EcommerceMaster.css';


export default function SignUp() {
  return (
    <>
    <div className="signUp">
      <div className="signUp-container">
        <h2>Sign Up</h2>
        <div className="signUp-field">
          <input type='text' id="username" placeholder='User Name'/>
          <input type='email' id="email" placeholder='User Email'/>
          <input type='password' id="password" placeholder='User Password'/>
        </div>
        <button>Continue</button>
        <p className='signUp-before'>Already Have An Account? <span>Login Here</span></p>
        <div className="signUp-agree">
          <input type='checkbox' id="continue" name='continue' />
          <p>By Continuing, I Agree To The Terms & Privacy Policy</p>
        </div>
      </div>
    </div>
    </>
  )
}
