import React, { useEffect } from 'react'
import './User.css'
import { useState , useRef } from 'react';

function User() {

const [emaildata, setEmaildata] = useState('');

 const isValidGmail = emaildata.endsWith('@gmail.com');


const inputChange = (e) =>{
  setEmaildata(e.target.value);
  e.preventDefault();
}


const handleEmailChange = (e) => {



  if (!emaildata.endsWith('@gmail.com')) {
    
    alert('Please enter a valid email address');
  } 
}

  return (
    <div className='full-page'>

      <div className="login-page">

        <div className="logo-container">
          <img src="Allbirds_logo.png" alt="All Birds Logo" />
        </div>

        <div className="sign-in-container">
          <h1>Sign in</h1>
          <p>Choose how you'd like to sign in</p>
          <button className='sign-in-button'>Sign in with shop</button>
        </div>

        <div className="or-container">
          <div className="empty"></div>
          <p>or</p>
          <div className="empty"></div>
        </div>

        <div className="email-container">
          <form action="" className='email-form'>
            <input value={emaildata} onChange={inputChange} type="email" placeholder='Email' className={isValidGmail ? 'valid-input' : 'invalid-input'} />
            <button onClick={handleEmailChange} className={isValidGmail ? 'invalid-email' : 'valid-email'} disabled={!isValidGmail}>Continue</button>
          </form>

          <p>Privacy <span>Terms</span></p>
        </div>

      </div>

    </div>
  )
}

export default User
