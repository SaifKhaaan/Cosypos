// Foodcategories.js
import React from 'react';
import "../styles/Foodcategories.css";
import useStore from '../store/Mainstore';

function Foodcategories({ searchTerm, handleInputChange }) {
  const categories = useStore((state) => state.categories);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filteredCategories.map((category) => (
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
    </div>
  );
}

export default Foodcategories;
