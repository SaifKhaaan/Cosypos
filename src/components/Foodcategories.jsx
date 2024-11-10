import React, { useState } from 'react';
import "../styles/Foodcategories.css";
import useStore from '../store/Mainstore';

function Foodcategories({ searchTerm, handleInputChange }) {
  const categories = useStore((state) => state.categories);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 8; // Adjust based on your layout

  // Filter and paginate categories
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory);

  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="food-categories-body">
      <div className="food-categories-search-bar">
        <i className="fas fa-search"></i>
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>

      <div className="food-categories" id="categories">
        {currentCategories.map((category) => (
          <div className="food-category" key={category.id}>
            <div className="icon">
              <i className={`fas ${category.icon}`}></i>
            </div>
            <div className="details">
              <div className="name">{category.name}</div>
              <div className="items">{category.items.length} items</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <a href="#" onClick={handlePreviousPage} className="arrow" disabled={currentPage === 1}>
          &lt; Previous
        </a>
        {Array.from({ length: totalPages }, (_, index) => (
          <a
            href="#"
            key={index + 1}
            className={currentPage === index + 1 ? 'current' : ''}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </a>
        ))}
        <a href="#" onClick={handleNextPage} className="arrow" disabled={currentPage === totalPages}>
          Next &gt;
        </a>
        <span className="results">
          Showing {indexOfFirstCategory + 1}-{Math.min(indexOfLastCategory, filteredCategories.length)} of {filteredCategories.length} results
        </span>
      </div>
    </div>
  );
}

export default Foodcategories;
