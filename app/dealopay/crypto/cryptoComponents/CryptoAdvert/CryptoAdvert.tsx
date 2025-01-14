import React from "react";
import "./CryptoAdvert.css";
import cryptoImages from "../../../../../public/cryptoAssets/cryptoImages";
import Image from "next/image";
import { Reveal } from "@/app/reveal";

const CryptoAdvert: React.FC = () => {
  return (
    <div>
      <>
        <div className="mobile-advert-crypto-container text-white">
          <div className="mobile_advert-crypto-wrap">
            <div className="label-text_wrapper">
              <Reveal>
                <div className="label-text_wrapper-left text-white">
                  <Image
                    src={cryptoImages.wonderBoy}
                    alt="image of a phone with dealo"
                    className="crypto-mobile_img"
                  />
                </div>
              </Reveal>
              <div className="label-text_wrapper-section_right">
                <Reveal>
                  <h3 className="crypto-mobile-h3-text text-center">
                    Make Cryptocurrency payments using Ethereum.
                  </h3>
                </Reveal>
                <Reveal>
                  <h5 className="mobile-h5-text_crypto">
                    More options for payment.
                  </h5>
                </Reveal>
                <Reveal>
                  <p className="crypto-label-text_wrapper-text">
                    Explore Cryptocurrency in your payment options by offering
                    Ethereum to those who are willing to receive it as a payment
                    option.
                  </p>
                </Reveal>
                {/* <div className="label-btn_wrapper">
                  <Link to="/signup">
                    <button className="label-btn">
                      Open a free account{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CryptoAdvert;
