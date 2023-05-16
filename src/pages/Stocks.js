import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Layout from "../components/Layout";




function Stocks() {

  const [search, setSearch] = useState("");

  const [data, setData] = useState(null);

  const [lowStockItems, setLowStockItems] = useState([]);




  const getStocks = async () => {

    try {

      const url = `${process.env.REACT_APP_API_URL}/api/stock`;

      const res = await fetch(url);

      const resData = await res.json();

      setData(resData.slice(1)); // Exclude first line of table

    } catch (error) {

      console.log(error);

    }

  };




  useEffect(() => {

    getStocks();

  }, []);




  const handleLowStockButtonClick = () => {

    if (data === null) {

      return;

    }

    const filteredData = data.filter((item) => item.quantity < 5);

    setLowStockItems(filteredData);

  };




  const PopUp = () => {

    return (

      <div className="fixed z-10 inset-0 overflow-y-auto">

        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

          <div className="fixed inset-0 transition-opacity" aria-hidden="true">

            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>

          </div>

          <span

            className="hidden sm:inline-block sm:align-middle sm:h-screen"

            aria-hidden="true"

          >

            &#8203;

          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

              <div className="sm:flex sm:items-start">

                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">

                    Low stock items:

                  </h3>

                  <div className="flex flex-col">

                    {lowStockItems.map((item) => (

                      <div key={item.itemId} className="flex items-center mb-2">

                        <div className="flex-1">{item.itemName}</div>

                        <div className="text-gray-500">{item.quantity}</div>

                      </div>

                    ))}

                  </div>

                  {lowStockItems.length > 0 && (

                    <div className="mt-4">

                      <Link

                        to="/invoice"

                        className="inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 no-underline"

                      >

                        Generate Invoice

                      </Link>

                    </div>

                  )}

                </div>

              </div>

            </div>

            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

              <button

                type="button"

                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"

                onClick={() => setLowStockItems([])}

              >

                Close

              </button>

            </div>

          </div>

        </div>

      </div>

    );

  };


  return (

    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold leading-tight text-gray-900">
            Stocks
          </h2>
          <div className="flex">
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg focus:outline-none hover:bg-blue-700"

              onClick={handleLowStockButtonClick}

            >

              Low Stock

            </button>

          </div>

        </div>

        <div className="overflow-hidden bg-white shadow-md rounded-lg">

          <table className="min-w-full divide-y divide-gray-200">

            <thead className="bg-gray-50">

              <tr>

                <th scope="col" className="px-4 py-3 whitespace-nowrap">

                  Item Id

                </th>

                <th scope="col" className="px-4 py-3 whitespace-nowrap">

                  Item Name

                </th>

                <th scope="col" className="px-4 py-3 whitespace-nowrap">

                  Quantity

                </th>

              </tr>

            </thead>

            <tbody className="bg-white divide-y divide-gray-200">

              {data &&

                data

                  .filter((item) => item.itemName.includes(search))

                  .map((item) => (

                    <tr

                      key={item.itemId}

                      className="border-b hover:bg-gray-100"

                    >

                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">

                        {item.itemId}

                      </td>

                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">

                        {item.itemName}

                      </td>

                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">

                        {item.quantity}

                      </td>

                    </tr>

                  ))}

            </tbody>

          </table>

          {lowStockItems.length > 0 && <PopUp />}

        </div>

      </div>

    </Layout>

  );

}

export default Stocks;