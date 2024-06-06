import React from "react";

const Pagination = ({ currentPage, totalCases, setPage }) => {
  const totalPages = Math.ceil(totalCases / 10);

  return (
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
