import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import { addTransaction, updateTransaction } from "../service/api";

function AddTransaction() {
  const location = useLocation();
  const navigate = useNavigate();
  const editingTransaction = location.state;

  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });

  useEffect(() => {
    if (editingTransaction) {
      setForm({
        title: editingTransaction.title || "",
        amount: editingTransaction.amount || "",
        type: editingTransaction.type || "expense",
        category: editingTransaction.category || "",
        date: editingTransaction.date?.substring(0, 10) || "",
      });
    }
  }, [editingTransaction]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTransaction?._id) {
        await updateTransaction(editingTransaction._id, form);
        alert("Transaction updated successfully!");
      } else {
        await addTransaction(form);
        alert("Transaction added successfully!");
      }
      navigate("/transactions");
    } catch (error) {
      console.error("Error submitting transaction:", error);
      alert("Error: Could not save transaction.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-100 mt-5 rounded-2xl shadow shadow-fuchsia-900">
      <h2 className="text-2xl font-bold mb-6">
        {editingTransaction ? "Edit Transaction" : "Add Transaction"}
      </h2>
      <TransactionForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddTransaction;
