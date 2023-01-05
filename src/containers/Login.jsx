import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center h-full ">
      <div className="form-container  ">
        <img
          src="https://svgshare.com/i/ekB.svg"
          alt="logo"
          className=" px-20 mb-5 h-10"
        />
        <h1 className="title font-bold flex justify-center">
          Create a new password
        </h1>
        <p className="subtitle text-slate-300 flex justify-center">
          Enter a new passwrd for yue account
        </p>
        <form action="/" className="form mt-5 flex flex-col gap-3">
          <label htmlFor="password" className="label font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password bg-slate-100 rounded-md px-1 flex items-center h-8"
          />
          <label htmlFor="new-password" className="label font-semibold">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input input-password bg-slate-100 rounded-md px-1 flex items-center h-8"
          />
          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button bg-lime-400 rounded-md h-9"
          />
        </form>
      </div>
    </div>
  );
}

export default Login
