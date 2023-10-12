import React, { useState, useEffect } from 'react';

const Partners = () => {
  const partners = ['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5', 'Partner 6', 'Partner 7', 'Partner 8', 'Partner 9', 'Partner 10'];
  const [itemsPerPage, setItemsPerPage] = useState(1);  // Change to 1 for mobile
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Update items per page based on screen width
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);  // Mobile view
      } else {
        setItemsPerPage(5);  // Larger screens like laptops
      }
    };

    // Initial setup
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(partners.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  return (
    <div id="partners" name="Experience" className="bg-black min-h-screen flex justify-center items-center">
      <div className="max-w-screen-lg mx-auto p-4 w-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold p-2">Our Partners</p>
        </div>
        <div className="flex justify-center items-center py-8 overflow-x-auto">
          <button
            onClick={handlePrevPage}
            className={`mr-2 disabled:opacity-50 rounded-lg p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white`}
            disabled={totalPages <= 1}
          >
            {"<"}
          </button>
          <div className="flex space-x-8 max-w-full overflow-x-auto">
            {partners.slice(startIndex, endIndex).map((partner, index) => (
              <div key={index} className="bg-white p-4 rounded-lg max-w-xs">
                <p className='text-black'>{partner}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleNextPage}
            className={`ml-2 disabled:opacity-50 rounded-lg p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white`}
            disabled={totalPages <= 1}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
