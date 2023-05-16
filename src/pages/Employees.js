import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import Layout from '../components/Layout'
import { toast } from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import { CSVLink } from "react-csv";
import { formatUserType, tagColor } from '../lib/utils';

function Employees() {
  const columns_name = ["id", "username", "type", "email", "phone"];
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { userDetails } = useAuth();

  const modal_data = {
    name: "Employee",
    fields: [
      {
        label: "name",
        type: "text",
        placeholder: "John Carter",
        req: true
      },
      {
        label: "userName",
        type: "text",
        placeholder: "john109",
        req: true
      },
      {
        label: "email",
        type: "text",
        placeholder: "John007@gmail.com",
        req: true
      },
      {
        label: "password",
        type: "password",
        placeholder: "••••••••",
        req: true
      },
      {
        label: "phoneNo",
        type: "text",
        placeholder: "9218381309",
        req: true
      },
      {
        label: "type",
        type: "text",
        placeholder: "0 for admin, 1 for employee",
        req: true,
        select: true
      }
    ]
  }

  const csvReport = {
    filename: "Employees.csv",
    headers: modal_data.fields.map((field) => field.label),
    data: data,

  };

  const getEmployees = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/employees`;
      const res = await fetch(url);
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEmployees();
  }, [modal])

  const handleDelete = async (id) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/employees/${id}`;
      const res = await fetch(url, {
        method: 'DELETE'
      })
      console.log(res);
      toast.success("Deleted successfully");
      getEmployees();
    } catch (error) {
      toast.error("Unable to delete")
      console.log(error);
    }
  }

  const openEditModal = (id) => {
    const edit_obj = data.filter(item => item.id === id);
    setModalData(edit_obj[0]);
    console.log(modalData);
    setModal(!modal);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchInput);
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/employees/search?name=${searchInput}`;
      console.log(url);
      const res = await fetch(url, {
        method: 'GET'
      })
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <main className="bg-gray-50 py-3 sm:py-5">
        <div className="sm:mt-2 px-4 mx-auto max-w-screen-2xl font-Inter lg:px-12">
          <Modal modal={modal} setModal={setModal} modal_data={modal_data} modalData={modalData} setModalData={setModalData} />
          <div className="relative overflow-hidden bg-white border border-gray-200 shadow-sm sm:rounded-md min-h-[80vh]">
            <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
              <div className="flex items-center flex-1 space-x-4">
                <h5 className="text-gray-500 font-bold mb-0">Employees</h5>
              </div>
              <div className="w-full md:w-1/2">
                <form onSubmit={handleSearch} className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <button type='submit' className="absolute cursor-pointer inset-y-0 left-0 flex items-center pl-3">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2" placeholder="Search" />
                  </div>
                </form>
              </div>
              {(userDetails?.type === 0) && (
                <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                  <button onClick={() => setModal(true)} type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                    Add
                  </button>
                  <CSVLink className='flex items-center no-underline justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-blue-600 hover:bg-blue-700' {...csvReport}>Export Data</CSVLink>
                </div>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    {columns_name.map(column => {
                      return (
                        <th key={column} scope="col" className="px-4 py-3 whitespace-nowrap">{column}</th>
                      )
                    })}
                    {userDetails?.type === 0 && (
                      <>
                        <th scope="col" className="px-2 py-3"></th>
                        <th scope="col" className="px-2 py-3"></th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {data?.map(row => {
                    return (
                      <tr key={row.id} className="border-b hover:bg-gray-100">
                        <th scope='row' className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                          {row.id}
                        </th>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">{row.userName}</td>
                        <td className="px-4 py-2">
                          <span className={` ${tagColor(row.type)} text-xs font-medium px-2 py-0.5 rounded-md whitespace-nowrap`}>{formatUserType(row.type)}</span>
                        </td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{row.email}</td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{row.phoneNo}</td>
                        {userDetails?.type === 0 && (
                          <>
                            <td onClick={() => openEditModal(row.id)} className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                            </td>
                            <td onClick={() => handleDelete(row.id)} className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                            </td>
                          </>
                        )}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Employees