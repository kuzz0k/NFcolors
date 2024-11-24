import React from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page); // Callback для изменения страницы
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // Если страниц мало, показываем все
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage < 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage === 3) {
        pages.push(1, 2, currentPage, currentPage + 1, "...", totalPages);
      } else if (currentPage === totalPages - 2) {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, totalPages);
      } else if (currentPage > totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return (
      <div className="pages">
        {
          pages.map((page, index) => (
            <button
              key={index}
              disabled={page === currentPage || page === "..."}
              onClick={() => page !== "..." && handlePageChange(page)}
              className={`page-color ${page === "..." ? "" : "number"}`}
            >
              {page}
            </button>
          ))
        }
      </div>
    )
  };

  return (
    <div className="pagination-container">
      {/* Кнопка Previous */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="previous-button"
      >
        previous
      </button>

      {/* Номера страниц */}
      {renderPageNumbers()}

      {/* Кнопка Next */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="next-button"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
