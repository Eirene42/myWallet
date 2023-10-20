import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SecondMenu({ email }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isTransaction = window.location.pathname.endsWith('/profile') || window.location.pathname.endsWith('/addTransaction') || window.location.pathname.endsWith('/transactionHistory') || window.location.pathname.endsWith('/balance') || window.location.pathname.endsWith('/transactions');

  const newMenuItems = (
    <div className="dropdown-content">
      <span>
        <Link to={`/${email}/transactions/profile`}>Profile</Link>
      </span>
      <span>
        <Link to={`/${email}/transactions/addTransaction`}>Add Transaction</Link>
      </span>
      <span>
        <Link to={`/${email}/transactions/transactionHistory`}>Transaction History</Link>
      </span>
      <span>
        <Link to={`/${email}/transactions/balance`}>Balance</Link>
      </span>
    </div>
  );

  let renderMenu;

  if (isTransaction) {
    renderMenu = (
      <div className="dropdown">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          <span className="menu-icon">☰</span>
        </div>
        {isDropdownOpen && newMenuItems}
      </div>
    );
  }

  return <div>{renderMenu}</div>;
}

export default SecondMenu;
