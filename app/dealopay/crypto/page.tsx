import React from "react";
import Welcome from "./cryptoComponents/Welcome/Welcome";
import CryptoAdvert from "./cryptoComponents/CryptoAdvert/CryptoAdvert";
import Services from "./cryptoComponents/Services/Services";
// import Transactions from "../../app/crypto/cryptoComponents/Transactions";
import images from "@/public/assets/images";
import Image from "next/image";
import { TransactionProvider } from "@/context/TransactionContext";
import { FaArrowLeft } from "react-icons/fa";
import MobileAdvert from "@/components/FreelanceComponents/MobileAdvert/MobileAdvert";
import "./page.css";

type Props = {};

const page = (props: Props) => {
  return (
    <TransactionProvider>
      <div>
        <div className="crypto-header_wrapper_">
          <a href="/dealopay" className="link_my_link">
            <span className="breadcrumbs_ link_my_link">
              <FaArrowLeft className="arrow-left" />
            </span>
          </a>
          <Image
            src="/cryptoAssets/dealopay-white.png"
            alt="dealo-pay logo"
            width={94}
            height={94}
          />
          <Welcome />
          <Services />
          <CryptoAdvert />
          {/* <Transactions /> */}
          <MobileAdvert />
        </div>
      </div>
    </TransactionProvider>
  );
};

export default page;
