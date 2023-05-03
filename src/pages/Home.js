import React from "react";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="font-Inter">
        <div className="p-4">
          <div className="p-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-blue-950">
                Welcome to the SIM
              </h1>
            </div>
            <div className="flex items-center justify-center h-48 mb-8 rounded bg-gray-50">
              <p className="text-2xl text-center text-bg-gray-800 font-normal">
                Hello there! Welcome to our Smart Inventory Management system,
                where you can easily manage your inventory, employees, inwards,
                outwards, returns, and view reports. We are serving clients with
                our tech since past 5 years. Our goal is to help you streamline
                your inventory management process and save you time and money!
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4">
                <p className="text-3xl font-bold mb-2">30+</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Clients Served
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4">
                <p className="text-3xl font-bold mb-2">500%</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Increase in Godowns
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4">
                <p className="text-3xl font-bold mb-2">300%</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Profit increase in Deliveries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
