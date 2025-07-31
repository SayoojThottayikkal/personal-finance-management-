import React, { useState } from "react";

function AddTransaction() {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "income",
    category: "",
    date: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Transaction</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2"
          required
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="w-full border p-2"
          required
        />
        <select name="type" value={form.type} className="w-full border p-2">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-2"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 w-full"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
