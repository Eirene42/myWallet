import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FirstMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isLoginOrRegister = window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/';

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

  return <div>{renderMenu}</div>;
}

export default FirstMenu;
