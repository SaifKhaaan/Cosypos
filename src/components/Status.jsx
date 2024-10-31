import React from 'react';
import '../styles/status.css';

const Status = () => {
  return (
    <div className="status-container">
      <div className="status-card">
        <div className="status-icon" style={{ backgroundColor: '#b0a8d4' }}>
          T4
        </div>
        <div className="status-card-content">
          <div className="status-name">Leslie K.</div>
          <div className="status-details">6 items → Kitchen</div>
        </div>
      </div>
      <div className="status-card">
        <div className="status-icon" style={{ backgroundColor: '#4a4a4a' }}>
          T2
        </div>
        <div className="status-card-content">
          <div className="status-name">Jacob J.</div>
          <div className="status-details">4 items → Kitchen</div>
        </div>
        <div className="status-status">In process</div>
      </div>
      <div className="status-card">
        <div className="status-icon" style={{ backgroundColor: '#4a4a4a' }}>
          T4
        </div>
        <div className="status-card-content">
          <div className="status-name">Cameron W.</div>
          <div className="status-details">6 items → Kitchen</div>
        </div>
        <div className="status-status">In process</div>
      </div>
    </div>
  );
};

export default Status;