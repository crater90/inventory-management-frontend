import React from "react";
import { useState } from "react";
import Sidebara from "./Sidebara";
import Headera from "./Headera";
import Chatbox from "./Chatbot";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='flex h-screen bg-gray-50  overflow-hidden"'>
      <Sidebara sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Headera sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>{children}</main>
        <Chatbox></Chatbox>
      </div>
    </div>
  );
}

export default Layout;
