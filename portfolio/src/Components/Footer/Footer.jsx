// src/Footer.js
import React from "react";
import styels from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styels.footer}>
      <div className={styels.footerContainer}>
        <div className={styels.footerSection}>
          <h3>About Me</h3>
          <p>I am a backend and frontend developer...</p>
        </div>
        <div className={styels.footerSection}>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#skills">Skill</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </div>
        <div className={styels.footerSection}>
          <h3>Contact</h3>
          <p>Email: ranaharsh020@gmail.com</p>
          <p>Phone: +91 83204 38996</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
