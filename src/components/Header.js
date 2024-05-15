import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src="/images/logo1.png" alt="Little Lemon Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>          <li><Link to="/reservations" onClick={toggleMenu}>Reservations</Link></li>
          <li><Link to="/order-online" onClick={toggleMenu}>Order Online</Link></li>        </ul>
      </nav>
    </header>
  );
};

export default Header;
