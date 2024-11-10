import React, { useState } from 'react';
import useStore from '../store/Mainstore';
import '../styles/transactions.css';

const Transactionsdetails = () => {
  const { transactions } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        {currentTransactions.map((transaction) => (
          <div key={transaction.id} className="transaction-card">
            <p><strong>Order ID:</strong> {transaction.id}</p>
            <p><strong>Name:</strong> {transaction.name}</p>
            <p><strong>Date & Time:</strong> {transaction.date}</p>
            <div className="margin-top">
              <p><strong>Summary:</strong></p>
              <ul className="transaction-items">
                {transaction.items.map((item) => (
                  <li key={item.id}>
                    {item.title} x{item.quantity} - ${(item.price * item.quantity).toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
            <p><strong>Subtotal:</strong> ${transaction.subtotal.toFixed(2)}</p>
            <p><strong>Tax:</strong> ${transaction.tax.toFixed(2)}</p>
            <div>
              <p className="divider padding-top"><strong>Total:</strong> ${transaction.total}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span 
          className={`arrow ${currentPage === 1 ? 'disabled' : ''}`} 
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        >
          &laquo; Prev
        </span>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            className={`page-number ${currentPage === index + 1 ? 'current' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span
          className={`arrow ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
        >
          Next &raquo;
        </span>
      </div>
    </div>
  );
};

export default Transactionsdetails;
