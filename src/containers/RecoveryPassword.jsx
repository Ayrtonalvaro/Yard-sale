import React from 'react'

const RecoveryPassword = () => {
  return (
    <div className="login flex justify-center items-center h-full">
      <div className="form-container">
        <img
          src="https://svgshare.com/i/ekB.svg"
          alt="logo"
          className="logo h-10 m-auto mb-20"
        />
        <h1 className="title flex justify-center font-semibold">
          Email has been sent!
        </h1>
        <p className="subtitle mt-5 text-slate-700 text-lg flex justify-center items-center">
          Please check your inbox for instructions <br></br> on how to reset the
          password
        </p>
        <div className="email-image flex justify-center bg-slate-100 rounded-full mt-10">
          <img src="https://svgshare.com/i/ejA.svg" alt="email" className='p-5'/>
        </div>
        <button className="primary-button login-button w-full h-12 mt-10 bg-lime-400 text-white rounded-md ">Login</button>
        <p className="resend mt-5 flex justify-center">
          <span>Didn't receive the email?</span>
          <a className='text-lime-400 ml-1' href="/">Resend</a>
        </p>
      </div>
    </div>
  );
}

export default RecoveryPassword
