import React, { useState } from 'react';
import './App.css';
import LoginForm from './user/login';
import RegisterForm from './user/register';
import BaseTransaction from './transaction/baseTransaction';
import Profile from './user/profile';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import AddTransaction from './transaction/addTransaction';
import Balance from './transaction/balance';
import TransactionHistory from './transaction/transactionHistory';

function App() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isLoginOrRegister = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/';

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const menuItems = (
    <div className="dropdown-content">
      <span><Link to="/login">Login</Link></span>
      <span><Link to="/register">Register</Link></span>
    </div>
  );

  let renderMenu;

  if (isLoginOrRegister) {
    renderMenu = (
      <div className="dropdown">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          <span className="menu-icon">☰</span>
        </div>
        {isDropdownOpen && menuItems}
      </div>
    );
  };

  return (
    <div className="App">
      {renderMenu}
      <h1>Income and Expense Management</h1>
      <Routes>
        <Route path="/" element={<h3>Welcome!</h3>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path='/:email/transactions/*' element={<BaseTransaction />} />
        <Route path='/:email/transactions/profile' element={<Profile />} />
        <Route path='/:email/transactions/addTransaction' element={<AddTransaction />} />
        <Route path='/:email/transactions/transactionHistory' element={<TransactionHistory />} />
        <Route path='/:email/transactions/balance' element={<Balance />} />
      </Routes>
    </div>
  );
}

export default App;
