import React, { useState } from 'react';
import "../styles/Foodcategories.css"


const categories = [
  {
    id: 1,
    name: 'Breakfast',
    icon: 'fa-coffee',
    items: 13,
  },
  {
    id: 2,
    name: 'Soups',
    icon: 'fa-utensil-spoon',
    items: 8,
  },
  {
    id: 3,
    name: 'Pasta',
    icon: 'fa-pizza-slice',
    items: 10,
  },
  {
    id: 4,
    name: 'Sushi',
    icon: 'fa-fish',
    items: 15,
  },
  {
    id: 5,
    name: 'Main course',
    icon: 'fa-drumstick-bite',
    items: 7,
  },
  {
    id: 6,
    name: 'Desserts',
    icon: 'fa-ice-cream',
    items: 9,
  },
  {
    id: 7,
    name: 'Drinks',
    icon: 'fa-coffee',
    items: 11,
  },
  {
    id: 8,
    name: 'Alcohol',
    icon: 'fa-wine-glass-alt',
    items: 12,
  },
];

function Foodcategories() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
              <div className="items">{category.items} items</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foodcategories;