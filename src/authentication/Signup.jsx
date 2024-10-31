import React, { useState } from 'react';
import "./authstyles.css"
import useUserStore from './Authstore'; 
import Login from './Login';
import { useNavigate } from 'react-router-dom';



function Signup() {
     const { user, setUser } = useUserStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);   

      const navigate = useNavigate();


 
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (password === confirmPassword) {
     
      console.log('Signup successful'); 
      setUser({ name, email, password }); // Update user state in Zustand
      navigate('/login')
    
    } else {
      console.error('Invalid credentials');
    
    }
  };
   const togglePassword = (type) => {
    if (type === 'password') {
      setShowPassword(!showPassword);
    } else if (type === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="authcontainer">

      <div className="authcard">
        <h2>Get on Board</h2>
        <form id="signup-form" onSubmit={handleSubmit}>
          <div className="name-padding">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='emaillabel'>   

            <label htmlFor="email">E-mail</label>   

            <input
              type="email"
              id="email-signup"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password-signup">Enter Password</label>
            <input
              type="password"
              id="password-signup"
              name="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <i className="fas fa-eye toggle-password" onClick={() => togglePassword('password-signup')}></i> */}
          </div>
          <div className="password-container">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"   

              required
              minLength={6}   

              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <i className="fas fa-eye toggle-password" onClick={() => togglePassword('confirm-password')}></i> */}
          </div>
          <p style={{ color: '#bdc3c7', fontSize: '12px' }}>
            By creating an account, you agree to the <a href="#" style={{ color: '#3498db' }}>Terms and Use</a> and <a href="#" style={{ color: '#3498db' }}>Privacy Policy</a>.
          </p>
          <div>
            <button type="submit" id="signup-button">Sign Up</button>
          </div>
        </form>
        <div className="footer">
          <a onClick={()=>navigate("/login")}>I am already a member</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;