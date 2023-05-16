import React, { useState } from "react";
import Layout from "../components/Layout";
import { CSVLink, CSVDownload } from "react-csv";

function Invoice(props) {
  const { items } = props;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Invoice</h1>
      <div className="border border-gray-400 rounded-md p-4">
        <div className="flex justify-between mb-4">
          <p className="text-gray-600 font-bold">Item</p>
          <p className="text-gray-600 font-bold">Quantity</p>
          <p className="text-gray-600 font-bold">Price</p>
          <p className="text-gray-600 font-bold">Total</p>
        </div>
        <div className="flex flex-col">
          {items &&
            items.map((item) => (
              <div key={item.itemId} className="flex justify-between mb-2">
                <p>{item.itemName}</p>
                <p>{item.quantity}</p>
                <p>{item.price}</p>
                <p>{item.quantity * item.price}</p>
              </div>
            ))}
        </div>
        <hr className="my-4" />
        <div className="flex justify-end">
          <p className="text-gray-600 font-bold mr-4">Subtotal:</p>
          <p className="text-gray-600">{getSubtotal(items)}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-600 font-bold mr-4">Tax:</p>
          <p className="text-gray-600">{getTax(items)}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-600 font-bold mr-4">Total:</p>
          <p className="text-gray-600">{getTotal(items)}</p>
        </div>
      </div>
    </div>
  );
}

function getSubtotal(items) {
  let subtotal = 0;
  if (items) {
    items.forEach((item) => {
      subtotal += item.quantity * item.price;
    });
  }
  return parseFloat(subtotal.toFixed(2));
}

function getTax(items) {
  const taxRate = 0.07; // 7% tax rate
  const subtotal = getSubtotal(items);
  const tax = subtotal * taxRate;
  return parseFloat(tax.toFixed(2));
}

function getTotal(items) {
  const subtotal = getSubtotal(items);
  const tax = getTax(items);
  const total = subtotal + tax;
  return parseFloat(total.toFixed(2));
}

function App() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [supplier, setSupplier] = useState("");

  const [items, setItems] = useState([]);
  const [csvData, setCsvData] = useState([]);

  const addItem = () => {
    const newItem = {
      itemId: items.length + 1,
      itemName: item,
      quantity: quantity,
      price: price,
      supplier: supplier,
    };
    setItems([...items, newItem]);
    setCsvData([...csvData, newItem]); // add new item to csvData
    setItem("");
    setQuantity(0);
    setPrice(0);
    setSupplier("");
  };

  return (
    <Layout>
      <div className="App">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Add Item</h1>
          <CSVLink data={csvData} filename={"invoice.csv"}>
            Download CSV
          </CSVLink>
          <form>
            <div className="flex mb-4">
              <div className="flex-1 mr-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="item"
                >
                  Item Name
                </label>
                <input
                  className="border rounded-md py-2 px-3 w-full"
                  type="text"
                  id="item"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                />
              </div>
              <div className="w-1/4 mr-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  className="border rounded-md py-2 px-3 w-full"
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
              <div className="w-1/4 mr-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="border rounded-md py-2 px-3 w-full"
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="supplier"
                >
                  Supplier
                </label>
                <input
                  className="border rounded-md py-2 px-3 w-full"
                  type="text"
                  id="supplier"
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={addItem}
            >
              Add Item
            </button>
          </form>
        </div>
        <Invoice items={items} />
      </div>
    </Layout>
  );
}

export default App;
