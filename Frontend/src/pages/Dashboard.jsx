import React, { useEffect, useState } from "react";
import ChartComponent from "../components/ChartComponent";
import { getTransactions } from "../service/api";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);

      let totalIncome = 0;
      let totalExpense = 0;
      const categoryMap = {};

      data.forEach((tx) => {
        const amount = Number(tx.amount);
        if (tx.type === "income") {
          totalIncome += amount;
        } else if (tx.type === "expense") {
          totalExpense += amount;

          if (categoryMap[tx.category]) {
            categoryMap[tx.category] += amount;
          } else {
            categoryMap[tx.category] = amount;
          }
        }
      });

      setIncome(totalIncome);
      setExpense(totalExpense);

      const categoryArr = Object.entries(categoryMap).map(
        ([category, amount]) => ({
          category,
          amount,
        })
      );

      setCategoryData(categoryArr);
    } catch (err) {
      console.error("Failed to load transactions", err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-black my-6">
        Dashboard
      </h1>
      <div className="flex items-center flex-col md:flex-row gap-1 justify-center md:gap-10 mb-4">
        <p className="text-xl font-bold">
          <strong>Total Income:</strong> ₹{income}
        </p>
        <p className="text-xl text-black font-bold">
          <strong className="text-red-500">Total Expense:</strong> ₹{expense}
        </p>
        <p className="text-xl font-bold">
          <strong>Balance:</strong> ₹{income - expense}
        </p>
      </div>

      <ChartComponent
        income={income}
        expense={expense}
        categoryData={categoryData}
      />
    </div>
  );
}

export default Dashboard;
