import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import StartMenu from "./StartMenu";
function Layout() {
  const [open, setOpen] = useState(false);
  const date = new Date();
  console.log();
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <TopNavigation />
      </div>
      <div className="h-full">
        <Outlet />
      </div>
      <div>
        {open ? <StartMenu /> : null}
        <footer className="border bg-black h-10">
          <div className="title-bar inactive">
            <div className="ms-2 flex">
              <button
                className="md:mt-1 lg:mt-1 mt-1"
                onClick={() => {
                  console.log("clicked");
                  if (open) {
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                <span className="flex justify-center gap-2">
                  <img
                    src="https://i.postimg.cc/28xn0Sqr/Qm-Tqu-RGUdy-B7-ERF3-Hj-Lc-Ad1w-DVE17us-XC7x-Pqv-PQszf-Tpq-removebg-preview.png"
                    alt=""
                    className="lg:w-5 md:w-5 lg:h-5 md:h-5 w-4 h-4 mt-1"
                  />
                  <h3
                    className="text-black md:text-[10px] lg:text-[10px] text-[8px] font-bold mt-0.5"
                    style={{ padding: "5px" }}
                  >
                    Degen.day
                  </h3>
                </span>
              </button>
              <button className="mt-1 ms-3 hidden md:block lg:block">
                <span className="flex justify-center gap-2">
                  <img
                    src="https://win98icons.alexmeub.com/icons/png/address_book-0.png"
                    alt=""
                    className="w-5 h-5 mt-1"
                  />
                  <h3
                    className="text-black text-[10px] font-bold mt-0.5"
                    style={{ padding: "5px" }}
                  >
                    Documentation
                  </h3>
                </span>
              </button>
            </div>
            <div className="flex justify-end gap-2 me-2 mb-2 md:mt-0 lg:mt-0 mt-1">
              <div className="mt-1 md:mt-1 lg:mt-1">
                <button className="mt-2 flex justify-center gap-1">
                  <img
                    src="https://win98icons.alexmeub.com/icons/png/outlook_express-5.png"
                    alt=""
                    className="w-5 h-5 mt-0.5"
                  />
                  <h3
                    className="text-black text-[8px] md:text-[10px] lg:text-[10px] font-bold mt-0.5"
                    style={{ padding: "5px" }}
                  >
                    Inbox
                  </h3>
                </button>
              </div>
              <div className="flex mt-2">
                <img
                  src="https://31.media.tumblr.com/3ac4cdb71b5b782a15f04904ba04e4be/tumblr_mswlj88awM1ssdigko1_400.gif"
                  alt=""
                  className="w-8 h-8"
                />
                <h3 className="text-black text-[8px]  md:text-[10px] lg:text-[10px] font-bold mt-2">
                  {String(date).slice(0, 15)}
                </h3>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
