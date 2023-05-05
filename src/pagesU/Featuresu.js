import React from "react";
import Layoutu from "../componentsU/Layoutu";

function Featuresu() {
  return (
    <Layoutu>
      <div className="font-Inter">
        <div className="p-4">
          <div className="p-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-blue-950">Features</h1>
            </div>
            <div className="flex items-center justify-center mb-8">
              <ul className="list-disc text-lg text-gray-800 font-normal">
                <li>
                  Easy CRUD operations for managing godowns, employees, inwards,
                  outwards, and returns
                </li>
                <li>
                  Showcase of different reports for better decision-making
                </li>
                <li>Multiple user logins with role-based access control</li>
                <li>
                  User-friendly interface for seamless inventory management
                </li>
                <li>Real-time tracking of inventory and sales data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layoutu>
  );
}

export default Featuresu;
