import React from "react";

export default function FilterBar({ filter, setFilter }) {
  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        name="category"
        value={filter.category}
        onChange={handleChange}
        placeholder="Filter by category"
        className="border p-2"
      />
      <input
        type="date"
        name="startDate"
        value={filter.startDate}
        onChange={handleChange}
        className="border p-2"
      />
      <input
        type="date"
        name="endDate"
        value={filter.endDate}
        onChange={handleChange}
        className="border p-2"
      />
    </div>
  );
}
