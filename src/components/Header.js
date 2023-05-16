import React from "react";
import { Link } from "react-router-dom";

function Header({ setSidebarOpen, sidebarOpen }) {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-end h-14 -mb-px">
          {/* Hamburger button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="default-sidebar"
            className="inline-flex sm:hidden items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <div className="hidden sm:flex">
            <Link
              to="/"
              className="text-black hover:text-gray-400 font-medium mx-2"
              style={{ textDecoration: "none", textAlign: "left" }}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-black hover:text-gray-400 font-medium mx-2"
              style={{ textDecoration: "none", textAlign: "left" }}
            >
              Features
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
