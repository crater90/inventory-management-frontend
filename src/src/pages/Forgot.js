import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="bg-slate-100 font-Inter">
      <div className="flex items-center justify-center mx-auto min-h-screen">
        <div className="w-full bg-white border border-slate-300 rounded-md shadow-sm md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-bold leading-tight text-center">
              Inventory Management System
            </h3>
            <h1 className="text-base text-gray-600 font-semibold text-center">
              Forgot Your Password?
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Please email support@gmail.com with your username or email and we
              will get back to you.
            </p>
            <div className="text-center">
              <Link to="/login" className="text-blue-600 hover:underline">
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
