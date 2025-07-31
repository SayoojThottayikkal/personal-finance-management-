import React from "react";

export default function TransactionForm({ form, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="w-full border p-2"
      >
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
        Save Transaction
      </button>
    </form>
  );
}
