import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
 


const Adminportal = () => {
           const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fas fa-hamburger"></i>
                <span>Admin Portal</span>

        
      </div>
             <div   className='sidebar-items'>

        <Link to="categories"> <div className="menu-item">Categories</div></Link> </div>
      <div   className='sidebar-items'>
        <Link to="products"> <div className="menu-item">Products</div></Link>
      </div>
      <div className='sidebar-items'>
        <Link to="transactions">
        <div className="menu-item">
          Transactions </div></Link>
      </div>

      <div className="footer">
        <div class="user-list">
        {/* <div class="user">
            <div class="avatar leslie">L</div>
            <div class="name">Leslie K.</div>
        </div>
        <div class="user">
            <div class="avatar cameron">C</div>
            <div class="name">Cameron W.</div>
        </div>
        <div class="user">
            <div class="avatar jacob">J</div>
            <div class="name">Jacob J.</div>
        </div> */}

        {/* // development purpose */}
        <div>
               <button className='dev-btn' onClick={()=>navigate("/")}>Homepage</button>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Adminportal