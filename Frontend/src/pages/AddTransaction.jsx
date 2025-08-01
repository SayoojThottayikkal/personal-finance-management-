import React, { useState } from "react";
import TransactionForm from "../components/TransactionForm";

function AddTransaction() {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-100 mt-5 rounded-2xl shadow shadow-fuchsia-900">
      <h2 className="text-2xl font-bold mb-6">Add Transaction</h2>
      <TransactionForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddTransaction;
