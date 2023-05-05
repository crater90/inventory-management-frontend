import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import {
  faWarehouse,
  faUsers,
  faBoxes,
  faUser,
  faTruck,
  faExchangeAlt,
  faChartBar,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const username = "User01";
  const firstChar = username.charAt(0).toUpperCase();
  const [showEmail, setShowEmail] = React.useState(false);

  const handleMouseEnter = () => {
    setShowEmail(true);
  };

  const handleMouseLeave = () => {
    setShowEmail(false);
  };
  const navigate = useNavigate();

  return (
    <>
      <header className="fixed z-50 top-0 left-0 w-full h-14 backgroundColor:'transparent'">
        <div className="max-w-screen-lg mx-auto flex items-center justify-end h-full px-4">
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
          <Link
            to="/updates"
            className="text-black hover:text-gray-400 font-medium mx-2"
            style={{ textDecoration: "none", textAlign: "left" }}
          >
            Updates
          </Link>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative mx-2"
            style={{ textAlign: "left" }}
          >
            <span className="text-black hover:text-gray-400 font-medium">
              Contact
            </span>
            {showEmail && (
              <div className="absolute z-10 bg-white rounded-lg shadow-lg p-4">
                <a href="mailto:help@support.com">help@support.com</a>
              </div>
            )}
          </div>
        </div>
      </header>

      <aside
        id="default-sidebar"
        className={`absolute z-40 top-0 left-0 sm:static sm:left-auto sm:top-auto w-64 h-screen transition-transform border-r border-gray-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        } bg-sky-950`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto text-white">
          {/* heading for sidebar */}
          <div className="flex items-center justify-between h-14 px-3">
            <a className="text-xl font-semibold no-underline text-white">
              Dashboard
            </a>
            <button
              className="sm:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          {/* sidebar navigations */}
          <ul className="space-y-2 font-medium px-3 pt-2">
            <li>
              <Link
                to="/godowns"
                className="flex items-center p-2 rounded-lg no-underline text-white hover:bg-gray-400"
              >
                <FontAwesomeIcon icon={faWarehouse} />
                <span className="flex-1 ml-3 whitespace-nowrap ">Godowns</span>
              </Link>
            </li>
            <li>
              <Link
                to="/employees"
                className="flex items-center p-2 rounded-lg no-underline text-white hover:bg-gray-400"
              >
                <FontAwesomeIcon icon={faUsers} />
                <span className="flex-1 ml-3 whitespace-nowrap">Employees</span>
              </Link>
            </li>
            <li>
              <Link
                to="/inwards"
                className="flex items-center p-2 rounded-lg no-underline text-white hover:bg-gray-400"
              >
                <FontAwesomeIcon icon={faBoxes} />
                <span className="flex-1 ml-3 whitespace-nowrap">Inwards</span>
              </Link>
            </li>
            <li>
              <Link
                to="/outwards"
                className="flex items-center p-2 rounded-lg no-underline text-white hover:bg-gray-400"
              >
                <FontAwesomeIcon icon={faTruck} />
                <span className="flex-1 ml-3 whitespace-nowrap">Outwards</span>
              </Link>
            </li>
            {/* <li>
              <Link
                to="/employees"
                class="flex items-center p-2 rounded-lg no-underline  text-white hover:bg-gray-400"
              >
                <FontAwesomeIcon icon={faUserAlt} />
                <span class="flex-1 ml-3 whitespace-nowrap">Admin</span>
              </Link>
            </li> */}
            <li>
              <Link
                to="/returns"
                class="flex items-center p-2 rounded-lg no-underline  text-white hover:bg-gray-400"
              >
                <FontAwesomeIcon icon={faExchangeAlt} />
                <span class="flex-1 ml-3 whitespace-nowrap">Returns</span>
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className="flex items-center p-2 rounded-lg no-underline  text-white hover:bg-gray-400"
              >
                <FontAwesomeIcon icon={faChartBar} />
                <span class="flex-1 ml-3 whitespace-nowrap ">Report</span>
              </Link>
            </li>
          </ul>

          {/* footer for sidebar */}
          <div className="flex items-center justify-between px-3 mt-32">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h1 className="text-base mb-0 pl-2">User01</h1>
            </div>

            <button className="mr-0" onClick={() => navigate("/login")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
