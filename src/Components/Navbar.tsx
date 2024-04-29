import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../Style/Sidebar.css";
import "../Style/Navbar.css";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">NOYERA</div>
      <div className="navbar-contact-info">
        <div>
          <p>KARL GUSTAVSGATAN 1B</p>
          <p className="under-tag">411 25 GÖTEBORG</p>
        </div>
        <div>
          <p>+46 (0)10 264 47 00</p>
          <p className="under-tag">HEY@NOYERA.COM</p>
        </div>

        <div className="navbar-social-links">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link under-tag"
          >
            INSTAGRAM
          </a>
        </div>
      </div>

      <button className="sidebar-btn" onClick={toggleSidebar}>
        &#9776;
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Navbar;
