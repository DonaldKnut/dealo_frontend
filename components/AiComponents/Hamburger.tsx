"use client";
import React, { useState } from "react";
import "./Hamburger.css";

const BurgerMenu: React.FC<{ setOpen: (open: boolean) => void }> = ({
  setOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

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

export default BurgerMenu;
