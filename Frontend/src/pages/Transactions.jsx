import { useEffect, useState } from "react";
import TransactionList from "../components/TransactionList";
import FilterBar from "../components/FilterBar";
import { Link } from "react-router-dom";
import {
  getTransactions,
  deleteTransaction,
  updateTransaction,
} from "../service/api";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
      setFiltered(data);
    } catch (err) {
      console.error("Error loading transactions", err);
    }
  };

  const handleFilter = (filters) => {
    let result = [...transactions];
    if (filters.category) {
      result = result.filter((tx) =>
        tx.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    }
    if (filters.from) {
      result = result.filter(
        (tx) => new Date(tx.date) >= new Date(filters.from)
      );
    }
    if (filters.to) {
      result = result.filter((tx) => new Date(tx.date) <= new Date(filters.to));
    }
    setFiltered(result);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      loadTransactions();
    } catch (err) {
      console.error("Error deleting transaction", err);
    }
  };
  const handleUpadte = async (id, updatedData) => {
    try {
      await updateTransaction(id, updatedData);
      loadTransactions();
    } catch (err) {
      console.error("Error updating transaction", err);
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Transactions</h1>

        <Link to="/addtransction">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add Transaction
          </button>
        </Link>
      </div>

      <FilterBar onFilter={handleFilter} />
      <TransactionList
        transactions={filtered}
        onDelete={handleDelete}
        onUpdate={handleUpadte}
      />
    </div>
  );
}
