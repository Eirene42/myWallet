import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

function BaseTransaction() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const email = useParams();
  const this_email = email.email;
  console.log("++++", this_email);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isTransaction = location.pathname.endsWith('/profile') || location.pathname.endsWith('/addTransaction') || location.pathname.endsWith('/transactionHistory') || location.pathname.endsWith('/balance') || location.pathname.endsWith('/transactions');

  const newMenuItems = (
    <div className="dropdown-content" >
      <span>
        <Link to={`/${this_email}/transactions/profile`}>Profile</Link>
      </span>
      <span>
        <Link to={`/${this_email}/transactions/addTransaction`}>Add Transaction</Link>
      </span>
      <span>
        <Link to={`/${this_email}/transactions/transactionHistory`}>Transaction History</Link>
      </span>
      <span>
        <Link to={`/${this_email}/transactions/balance`}>Balance</Link>
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
  };

  return (
    <div>
      {renderMenu}
    </div>
  );
}

export default BaseTransaction;
