"use client";
import React from "react";
import AiNavbar from "./ai-navbar";
import { useState } from "react";
import HamburgerMenu from "./FreelanceComponents/HamburgerMenu";

type Props = {};

const Wrapper = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <HamburgerMenu isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <AiNavbar />
    </div>
  );
};

export default Wrapper;
