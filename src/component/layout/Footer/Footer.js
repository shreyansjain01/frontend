import React from 'react';
import './Footer.css';
import companyLogo from "../../layout/company-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="#">Returns and Refunds</a>
        <hr className="footer-line" />
        <a href="#">Shipping</a>
        <hr className="footer-line" />
        <a href="#">Terms and Conditions</a>
        <hr className="footer-line" />
        <a href="#">Privacy policy</a>
      </div>
      <div className="footer-logo">
        <img src={companyLogo} alt="Company Logo" />
      </div>
      <div className="footer-right">
        <a href="#" className="footer-link">Know more about us</a>
        <hr className="footer-line" />
        <a href="#" className="footer-link">Visit store</a>
        <hr className="footer-line" />
        <a href="#" className="footer-link">Let's connect</a>
      </div>
      <div>
        <p className="footer-copyright">Copyright © 2023 Hype Chowk</p>
      </div>
    </footer>
  );
};

export default Footer;
