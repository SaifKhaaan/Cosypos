import React, { useState } from 'react';
import "../styles/Foodcategories.css";
import useStore from '../store/Mainstore';

const Products = ({ searchTerm = "", handleInputChange }) => {
  const categories = useStore((state) => state.categories) || [];
    // const categories = useStore((state) => state.categories); // Place it here

  const addItem = useStore((state) => state.addItem);
  const editItem = useStore((state) => state.editItem);
  const deleteItem = useStore((state) => state.deleteItem);

  



  const [newItem, setNewItem] = useState({
  title: "",
  price: "",
  categoryId: null,
});

const [editItemFields, setEditItemFields] = useState({
  title: "",
  price: "",
  categoryId: null,
});

const [editingItem, setEditingItem] = useState(null);


  // const handleAddItem = (categoryId) => {
  //   if (newItem.title && newItem.price && categoryId) {
  //     addItem(categoryId, newItem.title, parseFloat(newItem.price));
  //     setNewItem({ title: "", price: "", categoryId: null });
  //   }
  // };

  const handleAddItem = (categoryId) => {
  if (newItem.title && newItem.price && categoryId) {
    addItem(categoryId, newItem.title, parseFloat(newItem.price));
    setNewItem({ title: "", price: "", categoryId: null });
  }
};


  // const handleUpdateItem = () => {
  //   if (editingItem && newItem.title && newItem.price) {
  //     editItem(editingItem.categoryId, editingItem.id, newItem.title, parseFloat(newItem.price));
  //     setNewItem({ title: "", price: "", categoryId: null });
  //     setEditingItem(null);
  //   }
  // };

  // const handleEditItem = (categoryId, item) => {
  //   if (item) {
  //     setEditingItem(item);
  //     setNewItem({ title: item.title, price: item.price, categoryId });
  //   }
  // };



//   const handleUpdateItem = () => {
//   if (editingItem && editItemFields.title && editItemFields.price) {
//     editItem(editingItem.categoryId, editingItem.id, editItemFields.title, parseFloat(editItemFields.price));
//     setEditItemFields({ title: "", price: "", categoryId: null });
//     setEditingItem(null);
//   }
// };


const handleUpdateItem = () => {
  if (editingItem && editItemFields.title && editItemFields.price) {
    editItem(
      editingItem.categoryId,
      editingItem.id,
      editItemFields.title,
      parseFloat(editItemFields.price)
    );
    setEditItemFields({ title: "", price: "", categoryId: null });
    setEditingItem(null);
  }
};


// const handleEditItem = (categoryId, item) => {
//   if (item) {
//     setEditingItem(item);
//     setEditItemFields({ title: item.title, price: item.price, categoryId });
//   }
// };


const handleEditItem = (categoryId, item) => {
  if (item) {
    setEditingItem({ ...item, categoryId });
    setEditItemFields({ title: item.title, price: item.price, categoryId });
  }
};


  const filteredCategories = categories.filter((category) =>
    category?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  console.log(categories)

  return (
    <div className="adminproducts">
      <div><h2>Products</h2></div>
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

      <div className="forms-container">
        
       <div className="add-item-form">
  <h3>Add New Item</h3>
  <input
    type="text"
    className="item-input"
    placeholder="Title"
    value={newItem.title || ""}
    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
  />
  <input
    type="number"
    className="item-input"
    placeholder="Price"
    value={newItem.price || ""}
    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
  />
  <select
    className="item-select"
    value={newItem.categoryId || ''}
    onChange={(e) => setNewItem({ ...newItem, categoryId: parseInt(e.target.value) })}
  >
    <option value="" disabled>Select Category</option>
    {categories.map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ))}
  </select>
  <button className="item-button" onClick={() => handleAddItem(newItem.categoryId)}>
    Add Item
  </button>
</div>


       <div className="add-item-form">
  <h3>Edit Item</h3>
  <input
    type="text"
    className="item-input"
    placeholder="Title"
    value={editItemFields.title || ""}
    onChange={(e) => setEditItemFields({ ...editItemFields, title: e.target.value })}
  />
  <input
    type="number"
    className="item-input"
    placeholder="Price"
    value={editItemFields.price || ""}
    onChange={(e) => setEditItemFields({ ...editItemFields, price: e.target.value })}
  />
  <select
    className="item-select"
    value={editItemFields.categoryId || ''}
    onChange={(e) => setEditItemFields({ ...editItemFields, categoryId: parseInt(e.target.value) })}
  >
    <option value="" disabled>Select Category</option>
    {categories.map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ))}
  </select>
  <button className="item-button" onClick={handleUpdateItem}>
    Update Item
  </button>
  <button className="cancel-button" onClick={() => setEditingItem(null)}>
    Cancel
  </button>
</div>

      </div>

      <div className="counter-container-counter">
        <div className="container-counter">
          {filteredCategories.map((category) => {
            const filteredItems = category?.items?.filter((item) =>
              item?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
            ) || [];
            if (filteredItems.length === 0) return null;

            return (
              <div key={category.id} className="category-section">
                <h3 className="category-title">{category.name}</h3>
                {filteredItems.map((item) => (
                  <div key={item.id} className={`card-counter ${item.quantity > 0 ? 'active' : ''}`}>
                    <div className="path-counter">{category.name}</div>
                    <div className="title-counter">{item.title}</div>
                    <div className="price-counter">{item.price}$</div>
                    <div className="admin-product-wrapper">
                      <button className="product-edit-btn" onClick={() => handleEditItem(category.id, item)}>Edit</button>
                      <button className="product-delete-btn" onClick={() => deleteItem(category.id, item.id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
