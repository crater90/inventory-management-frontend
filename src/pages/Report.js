import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Report() {
  // dummy data
  const godowns = [
    { id: 1, year: "2019", godowns: "20" },
    { id: 2, year: "2020", godowns: "50" },
    { id: 3, year: "2021", godowns: "30" },
    { id: 4, year: "2022", godowns: "20" },
    { id: 5, year: "2023", godowns: "40" },
  ];

  const employees = [
    { id: 1, year: "2019", employees: "80" },
    { id: 2, year: "2020", employees: "210" },
    { id: 3, year: "2021", employees: "140" },
    { id: 4, year: "2022", employees: "90" },
    { id: 5, year: "2023", employees: "180" },
  ];

  const deliveries = [
    { id: 1, year: "2019", deliveries: "1000" },
    { id: 2, year: "2020", deliveries: "3400" },
    { id: 3, year: "2021", deliveries: "4500" },
    { id: 4, year: "2022", deliveries: "3500" },
    { id: 5, year: "2023", deliveries: "2500" },
  ];

  const getArrowIcon = (current, prev) => {
    if (current > prev) {
      return (
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-green-500 inline-block ml-1"
        />
      );
    } else if (current < prev) {
      return (
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-red-500 inline-block ml-1"
        />
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Layout>
        <div className="font-Inter p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Report Page</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <h2 className="text-xl font-bold bg-gray-100 p-3">Godowns</h2>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Year</th>
                    <th className="px-4 py-2">Godowns</th>
                  </tr>
                </thead>
                <tbody>
                  {godowns.map((godown, index) => (
                    <tr key={godown.id}>
                      <td className="border px-4 py-2">{godown.id}</td>
                      <td className="border px-4 py-2">{godown.year}</td>
                      <td className="border px-4 py-2">
                        {godown.godowns}
                        {index > 0 &&
                          getArrowIcon(
                            godown.godowns,
                            godowns[index - 1].godowns
                          )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <h2 className="text-xl font-bold bg-gray-100 p-3">Employees</h2>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Year</th>
                    <th className="px-4 py-2">Employees</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={employee.id}>
                      <td className="border px-4 py-2">{employee.id}</td>
                      <td className="border px-4 py-2">{employee.year}</td>
                      <td className="border px-4 py-2">{employee.employees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <h2 className="text-xl font-bold bg-gray-100 p-3">
                Transactions
              </h2>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Year</th>
                    <th className="px-4 py-2">Transactions</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveries.map((deliveries) => (
                    <tr key={deliveries.id}>
                      <td className="border px-4 py-2">{deliveries.id}</td>
                      <td className="border px-4 py-2">{deliveries.year}</td>
                      <td className="border px-4 py-2">
                        {deliveries.deliveries}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Report;
