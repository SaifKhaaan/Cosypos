// Countercard.js
import React from 'react';
import "../styles/countercard.css";
import useStore from '../store/Mainstore';

function Countercard({ searchTerm }) {
  const { categories, updateItemQuantity, addOrder } = useStore();

  const handleIncrement = (categoryId, itemId) => {
    updateItemQuantity(categoryId, itemId, 1);
   const category = categories.find(c => c.id === categoryId);
    const item = category.items.find(i => i.id === itemId);
    addOrder({ title: item.title, price: item.price.toFixed(2) || 0,
       quantity: 1 }); 
    // Add to order
  };

  const handleDecrement = (categoryId, itemId) => {
    updateItemQuantity(categoryId, itemId, -1);
  };

  return (
    <div className="counter-container-counter">
      <div className="container-counter">
        {categories.map((category) => {
          const filteredItems = category.items.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filteredItems.length === 0) return null;

          return (
            <div key={category.id} className="category-section">
              <h3 className="category-title">{category.name}</h3>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`card-counter ${item.quantity > 0 ? 'active' : ''}`}
                >
                  <div className="path-counter">{category.name}</div>
                  <div className="title-counter">{item.title}</div>
                  <div className="price-counter">{item.price}$</div>
                  <div className="quantity-counter">
                    <i
                      className="fas fa-minus counter-minus"
                      onClick={() => handleDecrement(category.id, item.id)}
                    ></i>
                    <span className="counter-value">{item.quantity}</span>
                    <i
                      className="fas fa-plus counter-plus"
                      onClick={() => handleIncrement(category.id, item.id)}
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countercard;
