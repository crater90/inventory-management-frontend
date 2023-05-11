import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Layouta from "../componentsa/Layouta";

function Employeesa() {
  const columns_name = ["id", "username", "type", "email", "phone"];
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const getEmployees = async () => {
    try {
      const url = "http://localhost:8085/api/employees";
      const res = await fetch(url);
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, [modal]);

  const handleDelete = async (id) => {
    try {
      const url = `http://localhost:8085/api/employees/${id}`;
      const res = await fetch(url, {
        method: "DELETE",
      });
      console.log(res);
      getEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal = (id) => {
    const edit_obj = data.filter((item) => item.id === id);
    setModalData(edit_obj[0]);
    console.log(modalData);
    setModal(!modal);
  };
  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.userName.localeCompare(b.userName);
      } else {
        return b.userName.localeCompare(a.userName);
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Layouta>
      <main className="bg-gray-50 py-3 sm:py-5">
        <div class="sm:mt-2 px-4 mx-auto max-w-screen-2xl font-Inter lg:px-12">
          {/* <Modal
            modal={modal}
            setModal={setModal}
            modal_data={modal_data}
            modalData={modalData}
            setModalData={setModalData}
          /> */}
          <div class="relative overflow-hidden bg-white border border-gray-200 shadow-sm sm:rounded-md">
            <div class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
              <div class="flex items-center flex-1 space-x-4">
                <h5 className="text-gray-500 font-bold mb-0">Employees</h5>
              </div>
              <div class="w-full md:w-1/2">
                <form class="flex items-center">
                  <label for="simple-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2"
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
              </div>
              <div class="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                <button
                  onClick={handleSort}
                  type="button"
                  class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none text-center"
                >
                  Sort
                </button>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    {columns_name.map((column) => {
                      return (
                        <th scope="col" class="px-4 py-3">
                          {column}
                        </th>
                      );
                    })}
                    <th scope="col" class="px-2 py-3"></th>
                    <th scope="col" class="px-2 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((row) => {
                    return (
                      <tr class="border-b hover:bg-gray-100">
                        <th
                          scope="row"
                          class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {row.id}
                        </th>
                        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">
                          {row.userName}
                        </td>
                        <td class="px-4 py-2">
                          {row.type === 0 ? (
                            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                              Sadmin
                            </span>
                          ) : row.type === 1 ? (
                            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                              admin
                            </span>
                          ) : (
                            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                              employee
                            </span>
                          )}
                        </td>

                        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                          {row.email}
                        </td>
                        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                          {row.phoneNo}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Layouta>
  );
}

export default Employeesa;
