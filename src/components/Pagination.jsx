const Pagination = ({ total = 0, perPage = 10, currentPage = 1, onPageChange }) => {
  // Ensure valid numbers
  const validTotal = Math.max(0, total);
  const validPerPage = Math.max(1, perPage);
  const totalPages = Math.ceil(validTotal / validPerPage);
  
  // Ensure current page is within valid range
  const validCurrentPage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const showMax = 5; // Max number of page buttons to show
    
    if (totalPages <= showMax) {
      // Show all pages if total pages are less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate start and end of current page group
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the start
      if (currentPage <= 3) {
        end = Math.min(showMax - 1, totalPages - 1);
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        start = Math.max(2, totalPages - (showMax - 2));
      }
      
      // Add ellipsis if needed at start
      if (start > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed at end
      if (end < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  // Handler for safe page changes
  const handlePageChange = (newPage) => {
    if (typeof onPageChange !== 'function') return;
    const validPage = Math.min(Math.max(1, newPage), totalPages);
    if (validPage !== currentPage) {
      onPageChange(validPage);
    }
  };

  // Don't render if there's only one page or no items
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2 my-8">
      <button
        onClick={() => handlePageChange(validCurrentPage - 1)}
        disabled={validCurrentPage === 1}
        className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        ← Prev
      </button>
      
      <div className="flex space-x-1">
        {pageNumbers.map((page, idx) => (
          page === '...' ? (
            <span key={`ellipsis-${idx}`} className="px-3 py-1 text-gray-600 dark:text-gray-400">
              {page}
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-lg transition-colors ${
                validCurrentPage === page
                  ? 'bg-blue-500 dark:bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {page}
            </button>
          )
        ))}
      </div>
      
      <button
        onClick={() => handlePageChange(validCurrentPage + 1)}
        disabled={validCurrentPage === totalPages}
        className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;