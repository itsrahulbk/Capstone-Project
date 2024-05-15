import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Little Lemon Logo" />
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className="footer-links">
          <h4>Important Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Address: 123 Town Street, Chicago</p>
          <p>Phone: +00 123 456 789</p>
          <p>Email: little@lemon.com</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
