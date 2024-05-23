import React from "react";
function StartMenu() {
  return (
    <div className=" border bg-gray-400 w-[200px] h-[300px]">
      <div className="grid grid-flow-col">
        <div className="h-[300px] w-[30px] border border-transparent bg-blue-700">
          <div className="grid grid-rows-2 ">
            <div className="border border-transparent"></div>
            <div className="border border-transparent h-[190px] p-1">
              <img
                src="https://i.postimg.cc/28xn0Sqr/Qm-Tqu-RGUdy-B7-ERF3-Hj-Lc-Ad1w-DVE17us-XC7x-Pqv-PQszf-Tpq-removebg-preview.png"
                alt=""
                className="w-6 h-6 mt-[72px]"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-flow-row w-[170px]">
            <button className="border p-2">
              <span className="flex justify-between">
                <h3
                  className="text-black text-[13px] font-lighter"
                  style={{ fontFamily: "Pixelify Sans, sans-serif" }}
                >
                  Twitter
                </h3>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-1024.png"
                  alt=""
                  className="w-5 h-5"
                />
              </span>
            </button>
            <button className="border p-1">
              <span className="flex justify-between">
                <h3
                  className="text-black text-[12px] font-lighter mt-2 ms-2"
                  style={{ fontFamily: "Pixelify Sans, sans-serif" }}
                >
                  Farcaster
                </h3>
                <img
                  src="https://www.dockhunt.com/_next/image?url=https%3A%2F%2Fdockhunt-images.nyc3.cdn.digitaloceanspaces.com%2F84cc64af-2488-42c3-860d-3e40388b8240&w=384&q=75"
                  alt=""
                  className="w-8 h-8"
                />
              </span>
            </button>
            <button className="border p-2 visible md:hidden lg:hidden">
              <span className="flex justify-between">
                <h3
                  className="text-black text-[12px] font-lighter mt-1 ms-1"
                  style={{ fontFamily: "Pixelify Sans, sans-serif" }}
                >
                  Documentation
                </h3>
                <img
                  src="https://win98icons.alexmeub.com/icons/png/address_book-0.png"
                  alt=""
                  className="w-5 h-5"
                />
              </span>
            </button>
            <button className="border p-1">
              <span className="flex justify-between">
                <h3
                  className="text-black text-[12px] font-lighter mt-2 ms-1"
                  style={{ fontFamily: "Pixelify Sans, sans-serif" }}
                >
                  How it works
                </h3>
                <img
                  src="https://i.postimg.cc/ZqhrKvyk/flat-750x-075-f-pad-750x1000-f8f8f8-removebg-preview.png"
                  alt=""
                  className="w-10 h-10"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartMenu;
