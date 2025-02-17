"use client";

import { useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"; // Import des icônes
import usePagination from "@/app/hooks/usePagination";
import "./Pagination.css";

export default function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const { currentPage, totalPages, nextPage, previousPage, jumpToPage } =
    usePagination(totalItems, itemsPerPage);

  useEffect(() => {
    if (totalItems > 0 && onPageChange) {
      onPageChange(currentPage);
    }
  }, [currentPage, totalItems, onPageChange]);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 2) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages.map((page, index) => (
      <button
        key={index}
        className={`pagination-number ${page === currentPage ? "active" : ""}`}
        onClick={() => typeof page === "number" && jumpToPage(page)}
        disabled={page === "..."}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={previousPage}
        disabled={currentPage === 1}
      >
        <LuChevronLeft size={20} />
      </button>
      {renderPageNumbers()}
      <button
        className="pagination-button"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        <LuChevronRight size={20} />
      </button>
    </div>
  );
}
