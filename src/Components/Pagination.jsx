import React from "react";
import "./Pagination.css";
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav className="pagination-component">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button className="page-link">
            <a onClick={prevPage} href="#">
              Previous
            </a>
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
          >
            <button className="page-link">
              <a onClick={() => setCurrentPage(pgNumber)} href="#">
                {pgNumber}
              </a>
            </button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link">
            <a onClick={nextPage} href="#">
              Next
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
