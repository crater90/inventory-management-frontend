import React from 'react'
import { useState } from 'react'

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('credentials are', credentials);

  }

  return (
    <section className="bg-slate-100 font-Inter">
      <div className="flex items-center justify-center mx-auto min-h-screen">
        <div className="w-full bg-white border border-slate-300 rounded-md shadow-sm md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-bold leading-tight">
              Inventory Management System
            </h3>
            <h1 className="text-base text-gray-600 font-semibold text-center">
              Enter credentials to sign in
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium ">Username</label>
                <input type="text" name="username" id="username" value={credentials.username} onChange={handleChange} className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="crater90" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                <input type="password" name="password" id="password" value={credentials.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
              </div>
              <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md text-sm px-5 py-2.5 text-center">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Login