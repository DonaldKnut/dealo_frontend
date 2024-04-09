"use client";
import React from "react";
import Link from "next/link";
import "./DealoArt.css";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

// import { Reveal } from "../../app/reveal";

type Props = {};

const DealoArt = (props: Props) => {
  return (
    <div>
      <div className="dealo-art text-white">
        <div className="first-wrap">
          <h1 className="label-top">Join Us in Advancing Healthcare</h1>
          <p className="bait-label_second">
            Our Health Hub is a dedicated space for healthcare professionals,
            researchers, and organizations to connect, collaborate, and advance
            medical knowledge and treatments. Whether you're a physician,
            researcher, or healthcare institution, Dealo Health Hub provides the
            tools and resources you need to make breakthroughs in healthcare.
          </p>
          <a href="/auth/login">
            <button className="learn-btn_second">
              Get Started{" "}
              <MdOutlineArrowOutward className="text-2xl text-green-600" />
            </button>
          </a>
        </div>
        <div className="second-wrap">
          <Image
            src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712604026/axgckzzj6rjsw9udd1vh.png"
            alt="art image"
            className="art-img"
            width={1900}
            height={1900}
          />
        </div>
      </div>
    </div>
  );
};

export default DealoArt;
