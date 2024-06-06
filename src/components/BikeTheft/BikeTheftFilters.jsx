import { useState } from "react";

const BikeTheftFilters = ({ setFilters }) => {
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const applyFilters = () => {
    setFilters({ query, startDate, endDate });
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter by case title"
        className="p-2 mr-2 border"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="p-2 mr-2 border"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="p-2 mr-2 border"
      />
      <button
        onClick={applyFilters}
        className="p-2 text-white bg-blue-500 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default BikeTheftFilters;
