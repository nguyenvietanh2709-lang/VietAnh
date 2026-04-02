import React from 'react';

export default function Pagination({ currentPage = 1, setCurrentPage, totalPages = 2 }) {
  return (
    <div className="text-center py-8">
      <div className="inline-flex">
        <button
          onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage(Math.max(1, currentPage - 1)); }}
          className="px-5 py-3 hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          &laquo;
        </button>
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage(pageNum); }}
              className={`px-5 py-3 transition-colors cursor-pointer ${currentPage === pageNum
                ? 'bg-black text-white'
                : 'hover:bg-black hover:text-white'
                }`}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage(Math.min(totalPages, currentPage + 1)); }}
          className="px-5 py-3 hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}
