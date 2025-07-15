import React from "react";
import "./Footer.css";
import Logo from "../assets/Logo-future-steps.png";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import PhoneIcon from '../assets/Footer/phone.png'
import MailIcon from '../assets/Footer/mail.png'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-col">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <p className="footer-address">
            Shabiya 12 – Opposite Model School <br />
            Building No. 203, <br /> M Floor – M2, M3
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
             <li><a href="#home">Home</a></li>
  <li><a href="#about">About Us</a></li>
  <li><a href="#programs">Programs</a></li>
  <li><a href="#courses">Courses </a></li>
  <li><a href="#admissions">Admissions</a></li>
  <li><a href="#contact-section">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <div className="footer-contact">
            <img className="footer-icon" src={MailIcon} alt="mail" />
            <span>futuresteps.kg@gmail.com</span>
          </div>
          <div className="footer-contact">
            <img className="footer-icon" src={PhoneIcon} alt="phone" />
            <span>974 050 528 0523</span>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        © 2025 Future Steps. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
