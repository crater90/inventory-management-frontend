import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Layout from "../components/Layout";

function Stocks() {
  const columns_name = ["item_id", "itemName", "quantity"];
  const [search, setSearch] = useState("");
  // const [data, setData] = useState(null);
  // const [modal, setModal] = useState(false);
  // const [modalData, setModalData] = useState(null);

  // const modal_data = {
  //   name: "Stocks",
  //   fields: [
  //     {
  //       label: "item_id",
  //       type: "text",
  //       placeholder: "578",
  //       req: true,
  //     },
  //     {
  //       label: "itemName",
  //       type: "text",
  //       placeholder: "John Carter",
  //       req: true,
  //     },
  //     {
  //       label: "quantity",
  //       type: "text",
  //       placeholder: "john109",
  //       req: true,
  //     }
  //   ]
  // }

  const stocks = [
    {
      item_id: 503,
      itemName: "TV",
      quantity: 50,
    },
    {
      item_id: 502,
      itemName: "Shirt",
      quantity: 105,
    },
    {
      item_id: 552,
      itemName: "Phone",
      quantity: 25,
    },
  ];

  const filteredData = stocks.filter(
    (item) =>
      // item.item_id.toString().includes(search) ||
      item.itemName.toLowerCase().includes(search.toLowerCase())
    // || item.quantity.toString().includes(search)
  );

  // const getStocks = async () => {
  //   try {
  //     const url = 'http://10.25.240.191:8085/api/employees';
  //     const res = await fetch(url);
  //     const resData = await res.json();
  //     setData(resData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getStocks();
  // }, [modal])

  return (
    <Layout>
      <main className="bg-gray-50 py-3 sm:py-5">
        <div class="sm:mt-2 px-4 mx-auto max-w-screen-2xl font-Inter lg:px-12">
          {/* <Modal modal={modal} setModal={setModal} modal_data={modal_data} modalData={modalData} setModalData={setModalData} /> */}
          <div class="relative overflow-hidden bg-white border border-gray-200 shadow-sm sm:rounded-md">
            <div class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
              <div class="flex items-center flex-1 space-x-4">
                <h5 className="text-gray-500 font-bold mb-0">Stocks</h5>
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
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      required=""
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* <h2 className="text-xl font-bold bg-gray-100 p-3">Stocks</h2> */}
              <table className="table-fixed w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Item_id</th>
                    <th className="px-4 py-2">itemName</th>
                    <th className="px-4 py-2">quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((stocks) => (
                    <tr key={stocks.id}>
                      {/* {stocks.map((stocks) => (
                      <tr key={stocks.id}> */}
                      <td className="border px-4 py-2">{stocks.item_id}</td>
                      <td className="border px-4 py-2">{stocks.itemName}</td>
                      <td className="border px-4 py-2">{stocks.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Stocks;
