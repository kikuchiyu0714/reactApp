import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a
        className="pagination-previous"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </a>
      <a
        className="pagination-next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </a>
      <ul className="pagination-list">
        {pages.map((page) => (
          <li key={page}>
            <a
              className={`pagination-link ${
                page === currentPage ? 'is-current' : ''
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;