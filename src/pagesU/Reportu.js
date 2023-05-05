import React from "react";
import Layoutu from "../componentsU/Layoutu";

function Reportu() {
  // dummy data
  const godowns = [
    { id: 1, year: "2019", godowns: "20" },
    { id: 2, year: "2020", godowns: "30" },
    { id: 3, year: "2021", godowns: "50" },
    { id: 4, year: "2022", godowns: "75" },
    { id: 5, year: "2023", godowns: "100" },
  ];

  const employees = [
    { id: 1, year: "2019", employees: "80" },
    { id: 2, year: "2020", employees: "140" },
    { id: 3, year: "2021", employees: "210" },
    { id: 4, year: "2022", employees: "380" },
    { id: 5, year: "2023", employees: "490" },
  ];

  const deliveries = [
    { id: 1, year: "2019", deliveries: "1000" },
    { id: 2, year: "2020", deliveries: "3400" },
    { id: 3, year: "2021", deliveries: "4500" },
    { id: 4, year: "2022", deliveries: "6800" },
    { id: 5, year: "2023", deliveries: "9800" },
  ];

  return (
    <>
      <Layoutu>
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
                  {godowns.map((godown) => (
                    <tr key={godown.id}>
                      <td className="border px-4 py-2">{godown.id}</td>
                      <td className="border px-4 py-2">{godown.year}</td>
                      <td className="border px-4 py-2">{godown.godowns}</td>
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
                  {employees.map((employees) => (
                    <tr key={employees.id}>
                      <td className="border px-4 py-2">{employees.id}</td>
                      <td className="border px-4 py-2">{employees.year}</td>
                      <td className="border px-4 py-2">
                        {employees.employees}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <h2 className="text-xl font-bold bg-gray-100 p-3">Deliveries</h2>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Year</th>
                    <th className="px-4 py-2">Deliveries</th>
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
      </Layoutu>
    </>
  );
}
export default Reportu;
