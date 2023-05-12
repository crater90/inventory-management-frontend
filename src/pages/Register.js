import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Register() {

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    delete data.confirmPassword;
    console.log(data);
    let url = `${process.env.REACT_APP_API_URL}/api/employees`
    const toastId = toast.loading("registering user...")
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if(res.status === 200) {
        toast.success("User registered successfully !", {
          id: toastId
        })
        navigate('/login');
      } else {
        toast.error("username already exists, please try again...", {
          id: toastId
        })
      }
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Unable to register user", {
        id: toastId
      })
    }
  }
  return (
    <section className="bg-slate-100 font-Inter">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white border border-slate-300 rounded-md shadow-sm md:mt-0 sm:max-w-xl lg:max-w-2xl xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account..
            </h1>
            <form className="grid gap-4 mb-4 sm:grid-cols-2" onSubmit={handleSubmit(handleRegister)}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                <input
                  name="email"
                  {...register("email", {
                    required: "email is required..",
                    pattern: {
                      value: /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                      message: "invalid email address"
                    }
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="kamran@incedo.com" />
                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                <input type="text" name="username"
                  {...register("userName", {
                    required: "username is required..",
                    minLength: {
                      value: 5,
                      message: "should have more than 5 characters"
                    }
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="kamran89" />
                {errors.userName && <span className="text-red-500 text-sm mt-1">{errors.userName.message}</span>}
              </div>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Full name</label>
                <input type="text" name="name" 
                  {...register("name", { 
                    required: "Full name is required..", 
                    minLength: {
                      value: 5,
                      message: "should have more than 5 characters"
                    } 
                  })} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="mohd kamran" />
                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
              </div>
              <div>
                <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium text-gray-900 ">Phone no</label>
                <input type="tel" name="phoneNo"
                  {...register("phoneNo", {
                    required: "phone no is required..",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "please enter 10 digit number"
                    }
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="9151553786" />
                {errors.phoneNo && <span className="text-red-500 text-sm mt-1">{errors.phoneNo.message}</span>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password"  id="password"
                  {...register("password", { 
                    required: "password is required..", 
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
                      message: "min length = 5, atleast one number and one letter"
                    }
                  })} 
                  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input type="password" name="confirmPassword"  id="confirmPassword"
                  {...register("confirmPassword", { 
                    required: "confirm password is required..", 
                    validate: (val) => {
                      if (watch('password') !== val) {
                        return "Your passwords do no match";
                      }
                    },
                  })} 
                  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                {errors.confirmPassword && <span className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</span>}
              </div>
              <div>
                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 ">User type</label>
                <select id="type" {...register("type", { required: "type is required.." })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                  <option value="">Select category</option>
                  <option value={0}>Employee</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Super Admin</option>
                </select>
                {errors.type && <span className="text-red-500 text-sm mt-1">{errors.type.message}</span>}
              </div>
              <div className='sm:col-start-1'>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>

              </div>
              <p className="text-sm sm:pt-2 font-light text-gray-500">
                Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register