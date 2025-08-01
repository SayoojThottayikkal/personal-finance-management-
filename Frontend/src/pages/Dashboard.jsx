import React from "react";
import ChartComponent from "../components/ChartComponent";
function Dashboard() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center text-black my-6">
        Dashboard
      </h1>
      <div className="flex items-center flex-col md:flex-row gap-1 justify-center md:gap-10 mb-4">
        <p className="text-xl font-bold ">
          <strong>Total Income:</strong>₹{300}
        </p>
        <p className="text-xl text-black font-bold ">
          {" "}
          <strong className="text-red-500">Total Expense:</strong> ₹{200}
        </p>
        <p className="text-xl font-bold ">
          {" "}
          <strong>Balance: </strong>₹{300 - 200}
        </p>
      </div>
      <ChartComponent
        income={300}
        expense={200}
        categoryData={[
          { category: "Food", amount: 200 },
          { category: "Travel", amount: 300 },
          { category: "Gaming", amount: 900 },
          { category: "cinema", amount: 800 },
          { category: "Fuel", amount: 100 },
          { category: "Vehicle", amount: 500 },
        ]}
      />
    </div>
  );
}

export default Dashboard;
