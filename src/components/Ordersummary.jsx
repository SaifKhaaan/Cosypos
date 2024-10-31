import React from 'react';
import '../styles/ordersummary.css';

import useOrderStore from './store';

const Ordersummary = () => {
    const { items ,updateItemQuantity } = useOrderStore();

 

   const filteredItems = items.filter((item) => item.quantity > 0);

   const handleDelete = (id) => {
    updateItemQuantity(id, -items.find((item) => item.id === id).quantity);
  };

  return (
    
    <div className="order-summary-container">
      <div className="order-summary">
        <h2>Table 5 <i className="fas fa-pen edit-icon"></i></h2>
        <p>Leslie K.</p>
        {filteredItems.map((item,index) => (
                        <div className="order-item-container" key={item.id}>

          <div className="order-item" >
  <div className="item-info">
              <i className="fas fa-trash-alt delete-icon" onClick={() => handleDelete(item.id)}></i>
              <div className="item-number">{index+1}</div>
              <div className="item-name">
                {item.title} <span className="item-quantity">x{item.quantity}</span>
              </div>
            </div>
           <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>

                 
          
          </div>

               </div> /* /outer */
        ))}
      </div>
    </div>
  );
};

export default Ordersummary;