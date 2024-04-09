"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import images from "../../public/assets/images";
import Image from "next/image";
import "./page.css";
import { FaEnvelope } from "react-icons/fa";
import { UserRole } from "@prisma/client";
import { currentUser } from "@/lib/auth";

type Props = {};

const page = (props: Props) => {
  // const currentUser = {
  //   id: 1,
  //   username: "Mogbojuri",
  //   isSeller: true,
  // };
  const [userRole, setUserRole] = useState<UserRole | undefined>();

  useEffect(() => {
    const fetchUserRole = async () => {
      const user = await currentUser();
      if (user) {
        setUserRole(user.role);
      }
    };

    fetchUserRole();
  }, []);

  return (
    <div className="my-gigs">
      <div className="my-gig_container">
        <div className="gig-container_title">
          <div className="my-gig_wrapper">
            <h1 className="order_text">Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{userRole === UserRole.ADMIN ? "Seller" : "Buyer"}</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <Link href="/messages/:id">
                <td>
                  <FaEnvelope
                    style={{
                      backgroundColor: "#40813f",
                      cursor: "pointer",
                      padding: "8px 12px",
                      borderRadius: "15px",
                      fontSize: "42px",
                      margin: "11px 0",
                    }}
                  />
                </td>
              </Link>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <Link href="/message/123">
                <td>
                  <FaEnvelope
                    style={{
                      backgroundColor: "#40813f",
                      cursor: "pointer",
                      padding: "8px 12px",
                      borderRadius: "15px",
                      fontSize: "42px",
                      margin: "11px 0",
                    }}
                  />
                </td>
              </Link>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <Link href="/message/123">
                <td>
                  <FaEnvelope
                    style={{
                      backgroundColor: "#40813f",
                      cursor: "pointer",
                      padding: "8px 12px",
                      borderRadius: "15px",
                      fontSize: "42px",
                      margin: "11px 0",
                    }}
                  />
                </td>
              </Link>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <Link href="/message/123">
                <td>
                  <FaEnvelope
                    style={{
                      backgroundColor: "#40813f",
                      cursor: "pointer",
                      padding: "8px 12px",
                      borderRadius: "15px",
                      fontSize: "42px",
                      margin: "11px 0",
                    }}
                  />
                </td>
              </Link>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <Link href="/message/123">
                <td>
                  <FaEnvelope
                    style={{
                      backgroundColor: "#40813f",
                      cursor: "pointer",
                      padding: "8px 12px",
                      borderRadius: "15px",
                      fontSize: "42px",
                      margin: "11px 0",
                    }}
                  />
                </td>
              </Link>
            </tr>
            <tr>
              <td>
                <Image
                  src={images.yekpa_image}
                  alt="thumbnail of gig"
                  className="yekpa_image"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <Link href="/message/123">
                <td>
                  <FaEnvelope
                    style={{
                      backgroundColor: "#40813f",
                      cursor: "pointer",
                      padding: "8px 12px",
                      borderRadius: "15px",
                      fontSize: "42px",
                      margin: "11px 0",
                    }}
                  />
                </td>
              </Link>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
