import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'

function Stocks() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  const getStocks = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/stock`;
      const res = await fetch(url);
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStocks();
  })

  // const filteredData = data.filter((item) =>
  //   // item.item_id.toString().includes(search) ||
  //   item.itemName.toLowerCase().includes(search.toLowerCase())
  //   // || item.quantity.toString().includes(search)
  // );

  return (
    <Layout>
      <main className="bg-gray-50 py-3 sm:py-5">
        <div class="sm:mt-2 px-4 mx-auto max-w-screen-2xl font-Inter lg:px-12">
        <div className="relative overflow-hidden bg-white border border-gray-200 shadow-sm sm:rounded-md min-h-[80vh]">
            <div class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
              <div class="flex items-center flex-1 space-x-4">
                <h5 className="text-gray-500 font-bold mb-0">Stocks</h5>
              </div>
              <div class="w-full md:w-1/2">
                <form class="flex items-center">
                  <label for="simple-search" class="sr-only">Search</label>
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      required="" />
                  </div>
                </form>
              </div>
            </div>
            <div className="overflow-x-auto">
              {/* <h2 className="text-xl font-bold bg-gray-100 p-3">Stocks</h2> */}
              <table className="w-full text-sm text-left text-gray-500">
                <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                  <tr>
                    <th scope="col" className="px-4 py-3 whitespace-nowrap">Item id</th>
                    <th scope="col" className="px-4 py-3 whitespace-nowrap">Item name</th>
                    <th scope="col" className="px-4 py-3 whitespace-nowrap">quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((stock) => {
                    return (
                      <tr key={stock.itemId} className='border-b hover:bg-gray-100'>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{stock.itemId}</td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{stock.itemName}</td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                          {stock.quantity}
                        </td>
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

export default Stocks;