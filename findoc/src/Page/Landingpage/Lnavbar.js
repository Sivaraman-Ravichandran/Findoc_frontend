import React from "react";
import "./Lnavbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://graph.org/file/8998a48e103ccf565ec2b.jpg"
          alt="error"
        />
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home" className="link1">
            Home
          </a>
        </li>
        <li>
          <a href="#hospital" className="link2">
            Our Doctors
          </a>
        </li>
        <li>
          <a href="#doctors" className="link3">
            Features
          </a>
        </li>
        <li>
          <a href="#specialist" className="link4">
            Review
          </a>
        </li>
        <li>
          <a href="#events" className="link5">
            Contact Us
          </a>
        </li>
        <li>
          <img
            src="https://graph.org/file/013ab34a2d54cf6c62955.jpg"
            width={"50px"}
            height={"50px"}
            style={{ borderRadius: "80px" }}
            alt="error"
          ></img>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
