import React from "react";

function HomePage() {
  return (
    <div className="mt-10 grid grid-flow-row p-4  gap-8">
      <div>
        <a
          href=""
          className="grid grid-flow-row bg-transparent"
          style={{ borderColor: "transparent" }}
        >
          {/* new pairs is this  */}
          <img
            src="https://win98icons.alexmeub.com/icons/png/entire_network_globe-0.png"
            alt=""
            className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] md:w-[60px] md:h-[60px]"
          />
          <h3
            className="text-white lg:text-[15px] md:text-[15px] text-[10px] ms-0.5"
            style={{ fontFamily: "Pixelify Sans, sans-serif" }}
          >
            New Pairs
          </h3>
        </a>
      </div>
      <div>
        <a
          href=""
          className="grid grid-flow-row bg-transparent"
          style={{ borderColor: "transparent" }}
        >
          {/* create a new pair is this  */}
          <img
            src="https://win98icons.alexmeub.com/icons/png/address_book_pad.png"
            alt=""
            className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] md:w-[60px] md:h-[60px] ms-1"
          />
          <h3
            className="text-white  lg:text-[15px] md:text-[15px] text-[10px] ms-1 lg:ms-0 md:ms-0"
            style={{ fontFamily: "Pixelify Sans, sans-serif" }}
          >
            New Token
          </h3>
        </a>
      </div>
      <div>
        <a
          href=""
          className="grid grid-flow-row bg-transparent"
          style={{ borderColor: "transparent" }}
        >
          {/* create a new pair is this  */}
          <img
            src="https://win98icons.alexmeub.com/icons/png/directory_open_cool-0.png"
            alt=""
            className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] md:w-[60px] md:h-[60px] ms-1"
          />
          <h3
            className="text-white  lg:text-[15px] md:text-[15px] text-[10px] lg:ms-1 md:ms-1 ms-2"
            style={{ fontFamily: "Pixelify Sans, sans-serif" }}
          >
            Threads
          </h3>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
