import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";
// import Login from "../login/page";
import { LuChevronDownCircle } from "react-icons/lu";
import { UserRole } from "@prisma/client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

interface NavbarProps {
  route: string;
  setOpen: (open: boolean) => void;
  open: boolean;
  activeItem: any;
  setRoute?: (route: string) => void;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // setRoute: (route: string) => void;
  // component: React.ComponentType<any>;
}

const Navbar: React.FC<NavbarProps> = ({
  route,
  setOpen,
  open,
  activeItem,
  setRoute,
}) => {
  const { data: user } = useSession();
  const userName = user?.user?.name || "Guest";
  const activeUser = useCurrentUser();
  const userImageUrl = activeUser?.image || "";
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  // const [active, setActive] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isOptionsDropdownOpen, setIsOptionsDropdownOpen] = useState(false);
  // const [route, setRoute] = useState("Login");
  const userImage =
    "https://res.cloudinary.com/dtujpq8po/image/upload/v1704475890/cydcfqcyolhrc3opawe7.jpg";

  const checkIfActive = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  // const currentUser = {
  //   id: 1,
  //   username: "Mogbojuri",
  //   isSeller: true,
  // };

  useEffect(() => {
    window.addEventListener("scroll", checkIfActive);
    return () => {
      window.removeEventListener("scroll", checkIfActive);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsOptionsDropdownOpen(true);
  };

  const toggleOptionsDropdown = () => {
    setIsOptionsDropdownOpen(!isOptionsDropdownOpen);
  };

  return (
    <nav
      className={`navbar ${isOpen ? "is-active" : ""} ${
        isActive ? "navbar active" : "navbar"
      }`}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link href="/">
            <Image
              // src={cloudinaryDealoImageUrl}
              src="/dealo_logo.png"
              alt="dealo's logo"
              className="logo"
              width={100}
              height={40}
            />
          </Link>
        </div>
        <div className="navbar-menu_sec">
          <div className="navbar-list_sec">
            <a href="/learn">
              <span className="navbar-item">Education</span>
            </a>
            <a href="/forge">
              <span className="navbar-item">Forge</span>
            </a>
            <a href="/explore">
              <span className="navbar-item">Dealo Travels</span>
            </a>
            <a href="/dealopay">
              <span className="navbar-item">Crypto</span>
            </a>
            <div className="user-sec">
              {userImageUrl ? (
                <Avatar>
                  <AvatarImage src={userImageUrl} />
                  <AvatarFallback className="bg-green-700">
                    <FaUser className="text-white" />
                  </AvatarFallback>
                </Avatar>
              ) : (
                <Image
                  src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712528054/ucbbnu8rshpzsyl9tvz3.png"
                  alt="user logo"
                  className="user-logo"
                  width={30}
                  height={30}
                />
              )}
              <span className="navbar-item" onClick={toggleUserDropdown}>
                {userName}
              </span>
              <LuChevronDownCircle className="ml-2" />
            </div>
            {!UserRole.ADMIN && (
              <Link href="/auth/register">
                <span className="navbar-item">
                  <Image
                    src={userImage}
                    alt="icon of a seller"
                    className="seller-icon"
                    width={20}
                    height={20}
                  />
                  Become a seller
                </span>
              </Link>
            )}
            {!userName && (
              <Link href="/about">
                <span className="navbar-item navbar-item_cta">Join</span>
              </Link>
            )}
            {user && (
              <div className="user">
                {isUserDropdownOpen && (
                  <div className="options">
                    {user && (
                      <>
                        <Link href="/mygigs">
                          <span className="link_for-small-icons">
                            <Image
                              src="/assets/gig.png"
                              alt="icon for messaging"
                              className="small__icons"
                              width={20}
                              height={20}
                            />
                            Gigs
                          </span>
                        </Link>
                        <Link href="/add">
                          <span className="link_for-small-icons">
                            <Image
                              src="/assets/addgig.png"
                              alt="icon for messaging"
                              className="small__icons"
                              width={20}
                              height={20}
                            />
                            Add New Gigs
                          </span>
                        </Link>
                      </>
                    )}
                    <Link href="/orders">
                      <span className="link_for-small-icons">
                        <Image
                          src="/assets/orders.png" // Adjust the path accordingly
                          alt="icon for messaging"
                          className="small__icons"
                          width={20}
                          height={20}
                        />
                        Orders
                      </span>
                    </Link>
                    <Link href="/messages">
                      <span className="link_for-small-icons">
                        <Image
                          src="/assets/message.png"
                          alt="icon for messaging"
                          className="small__icons"
                          width={20}
                          height={20}
                        />
                        Messages
                      </span>
                    </Link>
                    <Link href="/settings">
                      <span className="link_for-small-icons">
                        <Image
                          src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712655780/zrtsrsfalnxa18ilovoh.png"
                          alt="icon for logout"
                          className="small__icons"
                          width={20}
                          height={20}
                        />
                        Dashboard
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
          <div className="">
            <div className="mobile-menu">
              <Link href="/education">
                <span className="navbar-item">Education</span>
              </Link>
              <Link href="/forge">
                <span className="navbar-item">Forge</span>
              </Link>
              <Link href="/explore">
                <span className="navbar-item">Dealo Travels</span>
              </Link>
              <Link href="/dealopay">
                <span className="navbar-item">Crypto</span>
              </Link>
              <Link href="/register" className="navbar-item special-link">
                <Image
                  src="https://res.cloudinary.com/dtujpq8po/image/upload/v1705310797/seller-icon_ptqd0i.png"
                  alt="icon of a seller"
                  className="seller-icon"
                  width={20}
                  height={20}
                />
                Become a seller
              </Link>
              <div className="user-sec user_sec">
                {userImageUrl ? (
                  <Avatar>
                    <AvatarImage src={userImageUrl} />
                    <AvatarFallback className="bg-green-700">
                      <FaUser className="text-white" />
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <Image
                    src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712528054/ucbbnu8rshpzsyl9tvz3.png"
                    alt="user logo"
                    className="user-logo"
                    width={30}
                    height={30}
                  />
                )}
                <span className="navbar-item" onClick={toggleUserDropdown}>
                  {userName}
                </span>
                <LuChevronDownCircle
                  onClick={toggleUserDropdown}
                  className="m-4"
                />
                {user && (
                  <div className="user">
                    {isUserDropdownOpen && (
                      <div className="options">
                        {UserRole.ADMIN && (
                          <>
                            <Link href="/mygigs">
                              <span className="link_for-small-icons">
                                <Image
                                  src="/assets/gig.png" // Adjust the path accordingly
                                  alt="icon for messaging"
                                  className="small__icons"
                                  width={20}
                                  height={20}
                                />
                                Gigs
                              </span>
                            </Link>
                            <Link href="/add">
                              <span className="link_for-small-icons">
                                <Image
                                  src="/assets/addgig.png" // Adjust the path accordingly
                                  alt="icon for messaging"
                                  className="small__icons"
                                  width={20}
                                  height={20}
                                />
                                Add New Gigs
                              </span>
                            </Link>
                          </>
                        )}
                        <Link href="/orders">
                          <span className="link_for-small-icons">
                            <Image
                              src="/assets/orders.png" // Adjust the path accordingly
                              alt="icon for messaging"
                              className="small__icons"
                              width={20}
                              height={20}
                            />
                            Orders
                          </span>
                        </Link>
                        <Link href="/messages">
                          <span className="link_for-small-icons">
                            <Image
                              src="/assets/message.png" // Adjust the path accordingly
                              alt="icon for messaging"
                              className="small__icons"
                              width={20}
                              height={20}
                            />
                            Messages
                          </span>
                        </Link>
                        <Link href="/settings">
                          <span className="link_for-small-icons">
                            <Image
                              src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712655780/zrtsrsfalnxa18ilovoh.png" // Adjust the path accordingly
                              alt="icon for logout"
                              className="small__icons"
                              width={20}
                              height={20}
                            />
                            Dashboard
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <Link href="/login" className="navbar-item_cta-mobile">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="ham-menu_wrapper">
          <div
            className={`navbar-burger ${isOpen ? "is-active" : ""}`}
            onClick={toggleNavbar}
          >
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
          </div>
          {/* <ThemeSwitcher /> */}
          <a href={"/access"}>
            <HiOutlineUserCircle
              className="user_icon_image_icon"
              onClick={() => {
                setOpen(true);
              }}
            />
          </a>
        </div>
      </div>
      {isActive && (
        <>
          <hr />
          <div className="menu">
            <div className="menu-wrapper">
              <Link href="/" className="navbar-item">
                <span>Engineering & Law</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Graphics & Design</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Video & Animation</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Writing & Translation</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>AI Services</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Digital Marketing</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Music & Fashion</span>
              </Link>
              <Link href="/" className="navbar-item">
                <span>Programming & Tech</span>
              </Link>
            </div>
          </div>
          {/* <div>
            {route === "Login" && (
              <>
                {open && (
                  <CustomModal
                    component={Login}
                    activeItem={activeItem}
                    setOpen={setOpen}
                    setRoute={setRoute}
                    open={open}
                  />
                )}
              </>
            )}
          </div> */}
        </>
      )}
    </nav>
  );
};

export default Navbar;
