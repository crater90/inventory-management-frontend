import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Chatbox from "./Chatbot";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='flex h-screen bg-gray-50  overflow-hidden"'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>{children}</main>
        <Chatbox></Chatbox>
      </div>
    </div>
  );
}

export default Layout;
