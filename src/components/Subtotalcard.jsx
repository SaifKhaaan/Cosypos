import React from 'react'
import '../styles/subtotalcard.css';
import useOrderStore from './store';
// import  { useRef } from 'react';
// import useReactToPrint from 'react-to-print';
// import Invoice from './Invoice';
// import Ordersummary from './Ordersummary'; // Import here
// import  { useRef } from 'react';


const Subtotalcard = () => {

    // const contentRef = useRef(null);
//  const handlePrint = useReactToPrint({
//     content: () => contentRef.current,
//   });


  const { items } = useOrderStore();
    const filteredItems = items.filter(item => item.quantity > 0);
    

const subtotal = (Number(filteredItems.reduce((acc, item) => acc + item.price * item.quantity, 0)));
const tax = (Number(subtotal * 0.1));
const total = (Number(tax.toFixed(2)) + Number(subtotal.toFixed(2))).toFixed(2);

// #write a function to add number


  return (
    <div className='subtotal'>
      <div class="container">
        <div>
            <div class="summary spacing">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary spacing">
                <span>Tax 10%</span>
                <span>${tax.toFixed(2)}</span>
            </div>
            <div class="divider spacing"></div>
            <div class="total spacing">
                <span>Total</span>
                <span>${total}</span>
            </div>
        </div>
        <div>
            <div class="payment-method spacing">
                <h3>Payment Method</h3>
                <div class="payment-options">
                    <div class="payment-option">
                        <i class="fas fa-money-bill-wave"></i>
                        <span>Cash</span>
                    </div>
                    <div class="payment-option">
                        <i class="fas fa-credit-card"></i>
                        <span>Debit Card</span>
                    </div>
                    <div class="payment-option">
                        <i class="fas fa-qrcode"></i>
                        <span>E-Wallet</span>
                    </div>
                </div>
            </div>
            <button class="place-order" >Place Order</button>

{/* onClick={handlePrint}  */}




    {/* <div className="invoice-container" ref={contentRef}>
      <div className="invoice-header">
        <h2>Your Company Name</h2>
        <p>Address, Phone Number, Email</p>
      </div>

      <div className="invoice-details">
        <h2>Customer Information</h2>
        <p>Customer Name</p>
        <p>Customer Address</p>
      </div>

      <div className="invoice-summary">
        <h2>Order Summary</h2>
        <Ordersummary />
        <Subtotalcard contentRef={contentRef} />
      </div>
    </div> */}






        </div>
    </div>
    
    
    </div>
  )
}

export default Subtotalcard