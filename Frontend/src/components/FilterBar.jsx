import { useState } from "react";

export default function FilterBar({ onFilter }) {
  const [filters, setFilters] = useState({ category: "", from: "", to: "" });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="bg-white p-4 shadow mb-4 flex flex-col md:flex-row gap-4">
      <input
        className="border p-2 flex-1"
        name="category"
        placeholder="Category"
        onChange={handleChange}
      />
      <input
        className="border p-2"
        type="date"
        name="from"
        onChange={handleChange}
      />
      <input
        className="border p-2"
        type="date"
        name="to"
        onChange={handleChange}
      />
      <button
        onClick={applyFilter}
        className="bg-green-500 text-white px-4 py-2"
      >
        Filter
      </button>
    </div>
  );
}
