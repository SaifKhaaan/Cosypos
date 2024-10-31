
import React from 'react';
import "../styles/countercard.css"
import useOrderStore from './store';

function Countercard(){


  const { items, updateItemQuantity } = useOrderStore();

  const handleIncrement = (index) => {
    updateItemQuantity(items[index].id, 1); // Call updateItemQuantity from store
  };

  const handleDecrement = (index) => {
    updateItemQuantity(items[index].id, -1); // Call updateItemQuantity from store
  };





  return (
    <div className="counter-container-counter">
      <div className="container-counter">
        {items.map((item, index) => (
          <div
            key={index}
            className={`card-counter ${item.quantity > 0 ? 'active' : ''}`} 
          >
            <div className="path-counter">{item.path}</div>
            <div className="title-counter">{item.title}</div>
            <div className="price-counter">{item.price}$</div>
            <div className="quantity-counter">
              <i
                className="fas fa-minus counter-minus"
                onClick={() => handleDecrement(index)}
              ></i>
              <span className="counter-value">{item.quantity}</span>
              <i
                className="fas fa-plus counter-plus"
                onClick={() => handleIncrement(index)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countercard;