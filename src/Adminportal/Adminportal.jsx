import React from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import '../styles/sidebar.css';
import Categories from './Categories';

const Adminportal = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-portal-container">
      <div className="sidebar">
        <div className="logo">
          <i className="fas fa-hamburger"></i>
          <span>Admin Portal</span>
        </div>
        <div className="sidebar-items">
          <Link to="categories">
            <div className="menu-item">Categories</div>
          </Link>
        </div>
        <div className="sidebar-items">
          <Link to="products">
            <div className="menu-item">Products</div>
          </Link>
        </div>
        <div className="sidebar-items">
          <Link to="transactions">
            <div className="menu-item">Transactions</div>
          </Link>
        </div>
        <div className="footer">
          <button className='dev-btn' onClick={() => navigate("/")}>Homepage</button>
        </div>
      </div>
      <div className="content">
        <Outlet /> 
        {/* This renders the nested route content */}
      </div>
    </div>
  );
}

export default Adminportal;
