import React, { useState } from 'react';
import "./authstyles.css";
import useUserStore from './Authstore';
import Signup from './Signup'; 
import { useNavigate } from 'react-router-dom';


function Login() {
  const { user, setUser } = useUserStore(); 

  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
  // e.preventDefault();

  
    console.log('Login successful');

    
    setUser({ ...user, loggedIn: true });

    navigate('/');
  } 

// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (user.email === email && user.password === password) {
//     console.log('Login successful');

    
//     setUser({ ...user, loggedIn: true });

//     navigate('/');
//   } else {
//     console.error('Invalid credentials');
   
//   }
// };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="authcontainer">
    <div className="authcard">
      <h2>Hello there, welcome back</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="email-padding">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
           
          />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            required   

            minLength={6}
         
          />
          <i className="fas fa-eye toggle-password" onClick={togglePassword}></i>
        </div>
        <div>
          {/* <a href="#">Forgot your Password?</a> */}
        </div>
        <div>
          <button type="submit" id="login-button"
          // developmet purpose
          onClick={()=>navigate("/")}
          >Sign In</button>
        </div>
      </form>
      <div className="footer">
        {/* New here? <a href="/Signup">Sign Up instead</a> */}
        New here? <a onClick={()=>navigate("/signup")}>Sign Up instead</a>
      </div>
    </div>
        </div>

  );
}

export default Login;