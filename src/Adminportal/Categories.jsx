import React, { useState } from 'react';
import "../styles/Foodcategories.css";
import useStore from '../store/Mainstore';

function Categories() {
  const categories = useStore((state) => state.categories);
  const { addCategory, editCategory, deleteCategory } = useStore();

  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryIcon, setNewCategoryIcon] = useState('fa-coffee'); // Default icon
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState('');

  // List of available Font Awesome icons
  const iconOptions = [
    'fa-coffee', 'fa-utensil-spoon', 'fa-pizza-slice', 'fa-fish',
    'fa-drumstick-bite', 'fa-ice-cream', 'fa-wine-glass-alt', 'fa-beer',
    'fa-apple-alt', 'fa-hamburger', 'fa-birthday-cake', 'fa-cookie'
  ];

  // Handler for adding a new category
  const handleAddCategory = () => {
    if (newCategoryName) {
      addCategory(newCategoryName, newCategoryIcon);
      setNewCategoryName('');
      setNewCategoryIcon('fa-coffee');
    }
  };

  // Handler for entering edit mode
  const startEditingCategory = (category) => {
    setEditingCategoryId(category.id);
    setEditedCategoryName(category.name);
  };

  // Handler for saving the edited category
  const saveEditedCategory = (id) => {
    if (editedCategoryName) {
      editCategory(id, editedCategoryName, newCategoryIcon);
      setEditingCategoryId(null);
    }
  };

  // Handler for deleting a category
  const handleDeleteCategory = (id) => {
    deleteCategory(id);
  };

  return (
    <div className="admincategories">

    
    <div className="food-categories-body">
    <div><h2>Manage Categories</h2>
        </div>  
        
     
       <div className="food-category admin-add-category">
       <div><h3>ADD NEW</h3>
        </div> 
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
      


        {categories.map((category) => (
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
                <button className='product-edit-btn'  onClick={() => saveEditedCategory(category.id)}>
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
    </div>
    </div>

    
  );
}

export default Categories;
