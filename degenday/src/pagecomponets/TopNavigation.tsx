import React from "react";
import { usePrivy } from "@privy-io/react-auth";
import "../App.css";
function TopNavigation() {
  const { login, logout, ready, authenticated } = usePrivy();
  return (
    <div className="title-bar inactive" style={{ padding: "10px" }}>
      <img
        src="https://i.postimg.cc/28xn0Sqr/Qm-Tqu-RGUdy-B7-ERF3-Hj-Lc-Ad1w-DVE17us-XC7x-Pqv-PQszf-Tpq-removebg-preview.png"
        alt=""
        className="w-8 h-8"
      />
      <div className="title-bar-text  mt-1 flex justify-center gap-2">
        <img
          src="https://www.icegif.com/wp-content/uploads/2023/01/icegif-130.gif"
          alt=""
          className="md:w-7 lg:w-7 md:h-7 lg:h-7 w-5 h-5"
        />
        <h3 className=" text-[8px] md:text-[15px] lg:text-[15px] mt-0.5">
          A degens playground
        </h3>
        <img
          src="https://www.icegif.com/wp-content/uploads/2023/01/icegif-130.gif"
          alt=""
          className="md:w-7 lg:w-7 md:h-7 lg:h-7 w-5 h-5"
        />
      </div>

      <div className="title-bar-controls">
        <button className="w-20" style={{ padding: "5px" }} onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default TopNavigation;
