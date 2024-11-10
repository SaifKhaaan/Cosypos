import React, { useState } from 'react';
import "../styles/Foodcategories.css";
import useStore from '../store/Mainstore';

function Categories() {
  const categories = useStore((state) => state.categories);
  const { addCategory, editCategory, deleteCategory } = useStore();

  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryIcon, setNewCategoryIcon] = useState('fa-coffee');
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const paginatedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const iconOptions = [
    'fa-coffee', 'fa-utensil-spoon', 'fa-pizza-slice', 'fa-fish',
    'fa-drumstick-bite', 'fa-ice-cream', 'fa-wine-glass-alt', 'fa-beer',
    'fa-apple-alt', 'fa-hamburger', 'fa-birthday-cake', 'fa-cookie'
  ];

  const handleAddCategory = () => {
    if (newCategoryName) {
      addCategory(newCategoryName, newCategoryIcon);
      setNewCategoryName('');
      setNewCategoryIcon('fa-coffee');
    }
  };

  const startEditingCategory = (category) => {
    setEditingCategoryId(category.id);
    setEditedCategoryName(category.name);
  };

  const saveEditedCategory = (id) => {
    if (editedCategoryName) {
      editCategory(id, editedCategoryName, newCategoryIcon);
      setEditingCategoryId(null);
    }
  };

  const handleDeleteCategory = (id) => {
    deleteCategory(id);
  };

  return (
    <div className="admincategories">
      <div className="food-categories-body">
        <h2>Manage Categories</h2>

        <div className="food-category admin-add-category">
          <h3>ADD NEW</h3>
          <input
            type="text"
            placeholder="New Category Name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <select
            value={newCategoryIcon || "Select Icon"}
            onChange={(e) => setNewCategoryIcon(e.target.value)}
          >
            <option value="">Select Icon</option>
            {iconOptions.map((icon) => (
              <option key={icon} value={icon}>
                {icon.replace("fa-", "").replace(/-/g, " ")}
              </option>
            ))}
          </select>
          <button onClick={handleAddCategory}>Add New Category</button>
        </div>

        <div className="food-categories">
          {paginatedCategories.map((category) => (
            <div className="food-category admin-category" key={category.id}>
              <div className="icon">
                <i className={`fas ${category.icon}`}></i>
              </div>
              <div className="details">
                {editingCategoryId === category.id ? (
                  <input
                    type="text"
                    value={editedCategoryName}
                    onChange={(e) => setEditedCategoryName(e.target.value)}
                    onBlur={() => saveEditedCategory(category.id)}
                  />
                ) : (
                  <div className="name">{category.name}</div>
                )}
                <div className="items">{category.items.length} items</div>
              </div>
              <div className="admin-actions">
                {editingCategoryId === category.id ? (
                  <button className='product-edit-btn' onClick={() => saveEditedCategory(category.id)}>
                    Save
                  </button>
                ) : (
                  <button className='product-edit-btn' onClick={() => startEditingCategory(category)}>
                    Edit
                  </button>
                )}
                <button className='product-delete-btn' onClick={() => handleDeleteCategory(category.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <span className="arrow" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
            &laquo;
          </span>
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              className={`pagination-number ${currentPage === index + 1 ? 'current' : ''}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          <span className="arrow" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
            &raquo;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Categories;
