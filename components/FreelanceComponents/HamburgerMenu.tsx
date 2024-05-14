import React from "react";
import "./HamburgerMenu.css";

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  toggleNavbar,
}) => {
  return (
    <div className="ham-menu_wrapper">
      <div
        className={`navbar-burger ${isOpen ? "is-active" : ""}`}
        onClick={toggleNavbar}
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
