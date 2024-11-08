import React from 'react';
import useStore from '../store/Mainstore';
import '../styles/ordermodal.css';
import { useState } from 'react';


const OrderModal = ({ subtotal, tax, total, orderId ,items }) => {
  const { isModalOpen, toggleModal, categories ,confirmOrder } = useStore();
   const [customerName, setCustomerName] = useState("");
  const filteredItems = categories.flatMap(category =>
    category.items.filter(item => item.quantity > 0)
  );

  if (!isModalOpen) return null;
  const handleConfirmOrder = () => {
    if (customerName.trim() === "") {
      alert("Please enter customer name");
      return;
    }
    confirmOrder(customerName, orderId, items, subtotal, tax, total);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
       <div> <h2>Order Summary</h2>
        </div>
        <div className='modal-name-order-wrapper'>
           <div className='modal-name-wrapper'> 
             <div><label>
          Name: </label>
         
       </div>
       <div>
 <input type="text"  placeholder="Enter customer name"    value={customerName}
            onChange={(e) => setCustomerName(e.target.value)} />
       </div>
            </div>

 <div className="order-id">
          <label>Order ID:</label> <span>{orderId}</span>
        </div>
           
        </div>
        
        
        {/* Order ID Display */}
        
        <div className="modal-summary">
          <div className='modal-summary-items'>

            {filteredItems.map((item) => (
              <li key={item.id} className="modal-item">
                <span>{item.title} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </div>

          <div className="modal-subtotal">
            <span>Subtotal</span>
            <span>${subtotal?.toFixed(2) ||"0.00"}</span>
          </div>
          <div className="modal-tax">
            <span>Tax (10%)</span>
            <span>${tax?.toFixed(2) ||"0.00"}</span>
          </div>
          <div className="modal-total divider">
            <span><h2>Total
              </h2></span>
            <span><h2>
              ${total} </h2></span>
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={toggleModal}>Back</button>
          <button onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
      </div> 
    </div>
  );
};

export default OrderModal;
