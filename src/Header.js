// Header.js

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.css"; // Make sure to create a Header.css file for styling
import logoImg from "./images/logo-la-focacceria.jpg";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navigation">
        <div className="nav-left">
          {/* Use Link for client-side routing */}
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>{" "}
          {/* Assuming you want /products instead of / as the route */}
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="logo-container">
          {/* You can replace src with your actual logo in the future */}
          <img src={logoImg} alt="La Focacceria Logo" className="site-logo" />
        </div>
        <div className="nav-right">
          <a href="//facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          </a>
          <a href="//twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a href="//instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <button className="preorder-button">
            Pre-Order/Curbside Pick Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
