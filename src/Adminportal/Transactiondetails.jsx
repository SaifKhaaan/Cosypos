import React, { useState } from 'react';
import useStore from '../store/Mainstore';
import '../styles/transactions.css';

const Transactionsdetails = () => {
  const { transactions } = useStore();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter(transaction =>
    transaction.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      
      {/* Search Bar */}
      <input 
        type="text"
        placeholder="Search by Order ID, Name, or Date"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="transaction-search-bar"
      />

      <div className="transactions-list">
        {filteredTransactions.map((transaction) => (
          <div key={transaction.id} className="transaction-card">
            <p><strong>Order ID:</strong> {transaction.id}</p>
            <p><strong>Name:</strong> {transaction.name}</p>
            <p><strong>Date & Time:</strong> {transaction.date}</p>
            <div className='margin-top'>
              <p><strong>Summary:</strong></p>
            <ul className="transaction-items">
              {transaction.items.map(item => (
                <li key={item.id}>{item.title} x{item.quantity} - ${(item.price * item.quantity).toFixed(2)}</li>
              ))}
            </ul>

            </div>
            
            <p > <strong>Subtotal:</strong> ${transaction.subtotal.toFixed(2)}</p>
            <p><strong>Tax:</strong> ${transaction.tax.toFixed(2)}</p>
            <div >
               <p className='divider padding-top'><strong>Total:</strong> ${transaction.total}</p>

            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactionsdetails;
