import React from "react";
import { useRouter } from "next/router";

function calculateTotalBill(bill) {
  // Calculate the total bill based on the prices of items in the bill array
  return bill
    .reduce((total, item) => total + parseFloat(item.price), 0)
    .toFixed(2);
}

function BillPage() {
  const router = useRouter();
  const { bill } = router.query; // Get the bill query parameter

  // Parse the bill JSON string into an array
  const billArray = JSON.parse(bill || "[]");

  // Calculate total bill based on the parsed bill array
  const totalBill = calculateTotalBill(billArray);

  return (
    <div className="max-w-md mx-auto h-screen p-4 border rounded-lg bg-white flex flex-col justify-between">
      <div>
      <h1 className="text-2xl font-bold my-8 text-center text-blue-900">
        Bill Summary
      </h1>
      <ul className="list-disc pl-4">
        {billArray.map((item, index) => (
          <li
            key={index}
            className="mb-2 flex justify-between items-center text-gray-800"
          >
            {/* Display food item name, quantity, and price */}
            <span className="text-lg font-medium">{item.name}</span>
            <span className="text-lg font-semibold">{item.price} Rs.</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center text-xl font-semibold text-[#f00]">
        <span className="font-bold pl-4">Total Bill:</span>
        <span>{totalBill} Rs.</span>
      </div>
      </div>
      <div className="m-2 mt-6">
        <button
          className="w-full py-[16px] rounded-full text-white bg-red-800 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={() => {
            router.push('/success');
          }}
        >
          Pay Bill
        </button>
        <button
          className="w-full py-[16px] rounded-full mt-5 text-white bg-red-400 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={() => window.print()}
        >
          Download Bill
        </button>
      </div>
    </div>
  );
}

export default BillPage;
