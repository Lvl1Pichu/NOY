import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <a className="closebtn" href="#" onClick={onClose}>
        <span></span>
      </a>
      <a href="#">WE</a>
      <a href="#">PROCESS</a>
      <a href="#">CULTURE</a>
      <a href="#">LET’S CHAT</a>
      <div className="divider"></div>
      <a href="#">Instagram</a>
      <a href="#">LinkedIn</a>
      <a href="#">Blog</a>
    </div>
  );
};

export default Sidebar;
