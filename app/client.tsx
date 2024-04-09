"use client";

import React, { useState } from "react";
import { useStateProvider } from "./context/StateContext";
// import { handleAuthToggle } from "./context/helper/handleAuthToggle";
import { useAuthToggle } from "./useAuthToggle";

const ClientAuthWrapper = ({ type }: any) => {
  const { handleAuthToggle } = useAuthToggle();

  return (
    <div className="py-5 w-full flex items-center justify-center border-t border-r-slate-400">
      <span className="text-sm text-green-400">
        {type === "login" ? (
          <>
            <span>
              Not a member yet?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={() => handleAuthToggle("signup")}
              >
                Join now
              </span>
            </span>
          </>
        ) : (
          <>
            <span>
              Already a member?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={() => handleAuthToggle("login")}
              >
                Login
              </span>
            </span>
          </>
        )}
      </span>
    </div>
  );
};

export default ClientAuthWrapper;
