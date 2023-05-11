import React from "react";
import { useState } from "react";
import Sidebaru from "./Sidebaru";
import Headeru from "./Headeru";
import Chatbot from "../components/Chatbot";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='flex h-screen bg-gray-50  overflow-hidden"'>
      <Sidebaru sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Headeru sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Chatbot></Chatbot>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
