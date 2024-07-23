import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section charity">
          <h1>Charity<span>.</span></h1>
        </div>
        <div className="footer-section contact-info">
          <h2>Contact Info</h2>
          <p>Address: Your address goes here, your demo address.</p>
          <p>Phone: +8880 44338899</p>
          <p>Email: info@colorlib.com</p>
        </div>
        <div className="footer-section important-link">
          <h2>Important Link</h2>
          <ul>
            <li><a href="#view-project">View Project</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with <span role="img" aria-label="heart">❤️</span> by Colorlib</p>
      </div>
    </footer>
  );
};

export default Footer;
