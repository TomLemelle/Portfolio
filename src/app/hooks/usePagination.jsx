const { useState } = require("react");

const usePagination = (totalItems, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const jumpToPage = (jumpPage) => {
    if (jumpPage >= 1 && jumpPage <= totalPages) {
      setCurrentPage(jumpPage);
    }
  };

  return {
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    jumpToPage,
  };
};

export default usePagination;
