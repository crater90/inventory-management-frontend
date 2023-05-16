import React, { useState } from "react";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    supplierName: "",
    itemName: "",
    orderDate: "",
    rating: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your code for submitting the feedback
    console.log(feedback);
    setFeedback({
      supplierName: "",
      itemName: "",
      orderDate: "",
      rating: "",
      comment: "",
    });
    alert("Thank you for your feedback!");
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Feedback</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 flex">
          <div className="w-1/2 mr-2">
            <label className="block text-gray-700 font-bold mb-2">
              Supplier Name:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={feedback.supplierName}
              onChange={(e) =>
                setFeedback({ ...feedback, supplierName: e.target.value })
              }
              required
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-gray-700 font-bold mb-2">
              Item Name:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={feedback.itemName}
              onChange={(e) =>
                setFeedback({ ...feedback, itemName: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="mb-6 flex">
          <div className="w-1/2 mr-2">
            <label className="block text-gray-700 font-bold mb-2">
              Order Date:
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={feedback.orderDate}
              onChange={(e) =>
                setFeedback({ ...feedback, orderDate: e.target.value })
              }
              required
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-gray-700 font-bold mb-2">
              Rating:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={feedback.rating}
              onChange={(e) =>
                setFeedback({ ...feedback, rating: e.target.value })
              }
              required
            >
              <option value="">Select rating</option>
              <option value="1">1 star</option>
              <option value="2">2 stars</option>
              <option value="3">3 stars</option>
              <option value="4">4 stars</option>
              <option value="5">5 stars</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Comment:</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={feedback.comment}
            onChange={(e) =>
              setFeedback({ ...feedback, comment: e.target.value })
            }
            required
          ></textarea>
        </div>

        <br />
        <button
          className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          type="submit"
        >
          Submit Feedback
        </button>
        <Link to="/returns">
          <button className="my-4 px-4 py-2 text-sm font-medium text-white rounded-md bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none">
            Back
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Feedback;
