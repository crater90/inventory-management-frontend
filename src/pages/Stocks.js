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