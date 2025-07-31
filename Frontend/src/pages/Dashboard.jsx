import React from "react";

function Dashboard() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center text-blue-500 my-6">
        Dashboard
      </h1>
      <div className="text-center mb-4">
        <p className="text-xl">Total Income:</p>
        <p className="text-xl text-red-500">Total Expense:</p>
        <p className="text-xl font-semibold">Balance:</p>
      </div>
    </div>
  );
}

export default Dashboard;
