import React from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
