import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { formatUserType, tagColor } from "../lib/utils";

import {
  faUsers,
  faBoxes,
  faUser,
  faTruck,
  faExchangeAlt,
  faChartBar,
  faUserAlt,
  faIndustry,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserDetails, setRoles, userDetails } = useAuth();


  const firstTwoLetters = userDetails.email?.substring(0, 2).toUpperCase();
  const username = userDetails.userName;


  const handleLogout = () => {
    localStorage.removeItem("userLogged");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    setUserDetails(null);
    setRoles([]);
    navigate("/login")
  };

  const formatCase = (str) => {
    return str.split("_").join(" ");
  }

  return (
    <aside
      className={`absolute z-40 top-0 left-0 sm:static sm:left-auto sm:top-auto w-64 h-screen transition-transform border-r border-gray-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        } bg-sky-950`}
      aria-label="Sidebar"
    >
      <div className="h-[90%] overflow-y-auto text-white">
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
        <ul className="space-y-2 font-medium px-3">
          <span className="p-2 uppercase text-xs text-gray-400">Transactions</span>
          <li>
            <NavLink
              to="/inwards"
              className={({ isActive }) => `flex items-center p-2 rounded-lg no-underline ${isActive ? 'bg-gray-300 text-gray-700 font-bold hover:text-gray-700' : 'text-white hover:bg-gray-400 hover:text-gray-700'}`
              }
            >
              <FontAwesomeIcon icon={faBoxes} />
              <span className="flex-1 ml-3 whitespace-nowrap">Inwards</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/outwards"
              className={({ isActive }) => `flex items-center p-2 rounded-lg no-underline ${isActive ? 'bg-gray-300 text-gray-700 font-bold hover:text-gray-700' : 'text-white hover:bg-gray-400 hover:text-gray-700'}`
              }
            >
              <FontAwesomeIcon icon={faTruck} />
              <span className="flex-1 ml-3 whitespace-nowrap">Outwards</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/returns"
              className={({ isActive }) => `flex items-center p-2 rounded-lg no-underline ${isActive ? 'bg-gray-300 text-gray-700 font-bold hover:text-gray-700' : 'text-white hover:bg-gray-400 hover:text-gray-700'}`
              }
            >
              <FontAwesomeIcon icon={faExchangeAlt} />
              <span className="flex-1 ml-3 whitespace-nowrap">Returns</span>
            </NavLink>
          </li>
          <hr />
          <span className="p-2 uppercase text-xs text-gray-400">Analytics</span>
          <li>
            <NavLink
              to="/stocks"
              className={({ isActive }) => `flex items-center p-2 rounded-lg no-underline ${isActive ? 'bg-gray-300 text-gray-700 font-bold hover:text-gray-700' : 'text-white hover:bg-gray-400 hover:text-gray-700'}`
              }
            >
              <FontAwesomeIcon icon={faMoneyBillTrendUp} />
              <span className="flex-1 ml-3 whitespace-nowrap ">Stocks</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) => `flex items-center p-2 rounded-lg no-underline ${isActive ? 'bg-gray-300 text-gray-700 font-bold hover:text-gray-700' : 'text-white hover:bg-gray-400 hover:text-gray-700'}`
              }
            >
              <FontAwesomeIcon icon={faChartBar} />
              <span className="flex-1 ml-3 whitespace-nowrap ">Report</span>
            </NavLink>
          </li>

          {(userDetails.type === 0 || userDetails.type === 1) && (
            <>
              <hr />
              <span className="p-2 uppercase text-xs text-gray-400">Admin controls</span>
              <li>
                <NavLink
                  to="/employees"
                  className={({ isActive }) => `flex items-center p-2 rounded-lg no-underline ${isActive ? 'bg-gray-300 text-gray-700 font-bold hover:text-gray-700' : 'text-white hover:bg-gray-400 hover:text-gray-700'}`
                  }
                >
                  <FontAwesomeIcon icon={faUsers} />
                  <span className="flex-1 ml-3 whitespace-nowrap">Employees</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/godowns"
                  className={({ isActive }) => `flex items-center p-2 rounded-lg no-underline ${isActive ? 'bg-gray-300 text-gray-700 font-bold hover:text-gray-700' : 'text-white hover:bg-gray-400 hover:text-gray-700'}`
                  }
                >
                  <FontAwesomeIcon icon={faIndustry} />
                  <span className="flex-1 ml-3 whitespace-nowrap ">Godowns</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* footer for sidebar */}
      <div className="flex items-center justify-between text-white px-3">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full border border-slate-500 bg-gray-300 font-medium text-sky-950 flex items-center justify-center">
            {firstTwoLetters}
          </div>
          <div className="flex flex-col">

            <h1 className="text-base mb-0 pl-2">{formatCase(username)}</h1>
            <div>

              <span className={` ${tagColor(userDetails.type)} ml-2 text-xs font-medium px-2 py-0.5 rounded-md whitespace-nowrap`}>{formatUserType(userDetails.type)}</span>
            </div>
          </div>
        </div>

        <button className="mr-0" onClick={handleLogout}>
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;