import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement);

export default function ChartComponent({ income, expense, categoryData }) {
  const pieChartData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#22c55e", "#ef4444"],
      },
    ],
  };

  const barChartData = {
    labels: categoryData?.map((item) => item.category),

    datasets: [
      {
        label: "Amount",

        data: categoryData?.map((item) => item.amount),
        backgroundColor: "#ef4444",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-3 pl-2 pr-2">
      <div className="bg-white p-5 rounded-xl shadow h-90 flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold mb-2 text-center ">
          <span className="text-green-800 font-bold">Income</span> vs
          <span className="text-red-700 font-bold">Expense</span>
        </h2>
        <Pie data={pieChartData} width={400} height={400} />
      </div>
      <div className="bg-white p-4 rounded-xl shadow h-90">
        <h2 className="text-lg text-black font-semibold mb-2 text-center">
          <span className="font-bold">Category Breakdown</span>
        </h2>
        <Bar data={barChartData} />
      </div>
    </div>
  );
}
