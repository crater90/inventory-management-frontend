import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarehouse,
  faUsers,
  faBoxes,
  faTruck,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({sidebarOpen, setSidebarOpen}) {
  return (
    <aside id="default-sidebar" class={`absolute z-40 top-0 left-0 sm:static sm:left-auto sm:top-auto w-64 h-screen transition-transform border-r border-gray-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`} aria-label="Sidebar">
        <div class="h-full overflow-y-auto bg-white">
          {/* heading for sidebar */}
          <div className='flex items-center justify-between h-14 px-3'>
            <a className='text-xl font-semibold text-black no-underline'>Dashboard</a>
            <button className='sm:hidden' onClick={() => setSidebarOpen(!sidebarOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          {/* sidebar navigations */}
          <ul class="space-y-2 font-medium px-3 pt-2">
            <li>
              <Link to='/godowns' class="flex items-center p-2 text-gray-900 rounded-lg no-underline hover:bg-gray-100">
                <FontAwesomeIcon icon={faWarehouse} />
                <span class="flex-1 ml-3 whitespace-nowrap ">Godowns</span>
              </Link>
            </li>
            <li>
              <Link to='/employees' class="flex items-center p-2 text-gray-900 rounded-lg no-underline hover:bg-gray-100">
                <FontAwesomeIcon icon={faUsers} />
                <span class="flex-1 ml-3 whitespace-nowrap">Employees</span>
              </Link>
            </li>
            <li>
              <Link to='/godowns' class="flex items-center p-2 text-gray-900 rounded-lg no-underline hover:bg-gray-100">
                <FontAwesomeIcon icon={faBoxes} />
                <span class="flex-1 ml-3 whitespace-nowrap">Inwards</span>
              </Link>
            </li>
            <li>
              <Link to='/godowns' class="flex items-center p-2 text-gray-900 rounded-lg no-underline hover:bg-gray-100">
                <FontAwesomeIcon icon={faTruck} />
                <span class="flex-1 ml-3 whitespace-nowrap">Outwards</span>
              </Link>
            </li>
            <li>
              <Link to='/godowns' class="flex items-center p-2 text-gray-900 rounded-lg no-underline hover:bg-gray-100">
                <FontAwesomeIcon icon={faExchangeAlt} />
                <span class="flex-1 ml-3 whitespace-nowrap">Returns</span>
              </Link>
            </li>
          </ul>
          {/* footer for sidebar */}
          <div className='flex items-center justify-between px-3 mt-32'>
            <div className='flex items-center'>
              <div className='w-10 h-10 rounded-full border border-slate-500'></div>
              <h1 className='text-base mb-0 pl-2'>crater90</h1>
            </div>
            <button className='mr-0'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </button>
          </div>
        </div>
      </aside>
  )
}

export default Sidebar