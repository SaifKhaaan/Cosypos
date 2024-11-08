// src/components/Ordersummary.jsx
import React from 'react';
import '../styles/ordersummary.css';
import useStore from '../store/Mainstore'; // Adjust to your store path

const Ordersummary = () => {
  const { categories, updateItemQuantity } = useStore(); // Access categories and update function from the store

  const filteredItems = categories.flatMap(category => 
    category.items.filter(item => item.quantity > 0)
  );

  const handleDelete = (id) => {
    const category = categories.find(category => 
      category.items.some(item => item.id === id)
    );

    if (category) {
      const item = category.items.find(item => item.id === id);
      if (item) {
        // Update the quantity of the item to zero, effectively removing it
        updateItemQuantity(category.id, id, -item.quantity);
      }
    }
  };

  return (
    <div className="order-summary-container">
      <div className="order-summary">
        <h2>Table 5 <i className="fas fa-pen edit-icon"></i></h2>
        <p>Leslie K.</p>
        {filteredItems.map((item, index) => (
          <div className="order-item-container" key={item.id}>
            <div className="order-item">
              <div className="item-info">
                <i className="fas fa-trash-alt delete-icon" onClick={() => handleDelete(item.id)}></i>
                <div className="item-number">{index + 1}</div>
                <div className="item-name">
                  {item.title} <span className="item-quantity">x{item.quantity}</span>
                </div>
              </div>
              <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ordersummary;
