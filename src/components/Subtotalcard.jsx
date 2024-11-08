import React from 'react';
import '../styles/subtotalcard.css';
import useStore from '../store/Mainstore'; // Import the store
import OrderModal from './OrderModal';

const Subtotalcard = () => {
  const { categories, toggleModal, addOrder,orderId } = useStore(); // Access categories from the store

 const calculateTotals = () => {
  const filteredItems = categories.flatMap(category => 
    category.items.filter(item => item.quantity > 0)
  );
 



    const subtotal = filteredItems.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
  const tax = subtotal * 0.1 || 0;
  const total = subtotal + tax || 0;

  return { subtotal, tax, total: total.toFixed(2), filteredItems };
};


  const { subtotal, tax, total, filteredItems } = calculateTotals(); // Get totals

 
 

const handlePlaceOrder = () => {
  if (filteredItems.length > 0) {
    const orderId = new Date().getTime();
    addOrder({ id: orderId, items: filteredItems, subtotal: subtotal || 0, tax: tax || 0, total: total || 0  });
    toggleModal();
  } else {
    alert("No items in order.");
  }
};



  console.log("Filtered Items:", filteredItems);
console.log("Subtotal:", subtotal, "Tax:", tax, "Total:", total);


  return (
    <div className='subtotal'>
      <div className="container">
        <div>
          <div className="summary spacing">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary spacing">
            <span>Tax 10%</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="divider spacing"></div>
          <div className="total spacing">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
        <div>
          <div className="payment-method spacing">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <div className="payment-option">
                <i className="fas fa-money-bill-wave"></i>
                <span>Cash</span>
              </div>
              <div className="payment-option">
                <i className="fas fa-credit-card"></i>
                <span>Debit Card</span>
              </div>
              <div className="payment-option">
                <i className="fas fa-qrcode"></i>
                <span>E-Wallet</span>
              </div>
            </div>
          </div>
          <button className="place-order" 
          onClick={handlePlaceOrder}
          >Place Order</button>
        </div>
      </div>
      <OrderModal subtotal={subtotal} tax={tax} total={total} items={filteredItems} orderId={new Date().getTime()} />
       {/* Pass the orderId and items to the modal */}
      {/* <OrderModal subtotal={subtotal} tax={tax} total={total} items={filteredItems} orderId={orderId} /> */}

    </div>
  );
};

export default Subtotalcard;
