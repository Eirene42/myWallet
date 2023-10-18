import React, { useState } from 'react';
import './App.css';
import LoginForm from './user/login';
import RegisterForm from './user/register';
import BaseTransaction from './transaction/baseTransaction';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="App">
      <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <span className="menu-icon">☰</span>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
            <span><Link to="/login">Login</Link></span>
            <span><Link to="/register">Register</Link></span>
        </div>
      )}
    </div>
      <h1>Income and Expense Management</h1>
      <Routes>
        <Route path="/" element={<h3>Welcome!</h3>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path='/:email/transactions' element={<BaseTransaction/>}/>
      </Routes>
    </div>
  );
}

export default App;
