import React from 'react';
import '../styles/sidebar.css';

// development purpose
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

  // development purpose
         const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fas fa-hamburger"></i>
        <span>CosyPOS</span>
      </div>
      <div className="menu-item">Reservation</div>
      <div className="menu-item">Table services</div>
      <div className="menu-item">Menu</div>
      <div className="menu-item">Delivery</div>



      <div className="footer">
        <div class="user-list">
        {/* <div class="user">
            <div class="avatar leslie">L</div>
            <div class="name">Leslie K.</div>
        </div> */}
        <div class="user">
            <div class="avatar cameron">C</div>
            <div class="name">Cameron W.</div>
        </div>
        <div class="user">
            <div class="avatar jacob">J</div>
            <div class="name">Jacob J.</div>
        </div>

        {/* // development purpose */}
        <div>
               <button className='dev-btn' onClick={()=>navigate("/login")}>Signin</button>
        </div>
         <div>
               <button className='dev-btn' onClick={()=>navigate("/adminportal")}>Admin</button>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Sidebar;