"use client";
import React, { FC, useState } from "react";
import Heading from "../components/FreelanceComponents/Heading";
import Navbar from "../components/FreelanceComponents/Navbar";
import Featured from "../components/FreelanceComponents/Featured";
import Footer from "../components/FreelanceComponents/Footer";
import DealoArt from "../components/FreelanceComponents/DealoArt";
import Slider from "../components/FreelanceComponents/Slider/Slider";
import Menu from "@/components/FreelanceComponents/Menu/Menu";
import BadAss from "@/components/FreelanceComponents/BadAss/BadAss";
import Advert from "@/components/FreelanceComponents/Advert/Advert";
import VideoAdvert from "@/components/FreelanceComponents/VideoAdvert/VideoAdvert";
import Partners from "@/components/FreelanceComponents/Partners/Partners";
import "./globals.css";
import MobileAdvert from "@/components/FreelanceComponents/MobileAdvert/MobileAdvert";
import CryptoAdvert from "@/components/FreelanceComponents/CryptoAdvert/CryptoAdvert";
// import { useStateProvider } from "./context/StateContext";
import { useContext } from "react";
import { StateContext } from "@/context/StateContext";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("login");
  const { state } = useContext(StateContext);
  const { showLoginModal, showSignUpModal } = state;

  return (
    <div>
      <Heading
        title="Dealo"
        description="A Multinational Freelancing Platform for Professionals"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
      <Navbar
        route={route}
        activeItem={activeItem}
        setOpen={setOpen}
        setRoute={setRoute}
        open={open}
      />
      <Featured />
      <Slider />
      <CryptoAdvert />
      <DealoArt />
      <Menu />
      <Advert />
      <VideoAdvert />
      <Partners />
      <BadAss />
      <MobileAdvert />
      {/* {(showLoginModal || showSignUpModal) && (
        <AuthWrapper type={showLoginModal ? "login" : "signup"} />
      )} */}
      <Footer />
    </div>
  );
};

export default Page;
