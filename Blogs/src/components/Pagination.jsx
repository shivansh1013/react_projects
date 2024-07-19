import React, { useContext } from 'react';
import { Appcontext } from '../context/Appcontext';

const Pagination = () => {
  const { currentPage, handlePageChange, totalPages } = useContext(Appcontext);

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full">
    <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
      {currentPage > 1 && (
        <button
          className='border-2 border-gray-300 py-1 px-4 rounded-md'
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
      )}

      {currentPage < totalPages && (
        <button
          className='border-2 border-gray-300 py-1 px-4 rounded-md'
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
      <p className='text-sm font-semibold ml-auto'>Page {currentPage} of {totalPages}</p>
    </div>
  </div>
  );
}

export default Pagination;
