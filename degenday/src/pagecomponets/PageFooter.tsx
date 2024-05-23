import React from "react";

function PageFooter() {
  return (
    <div>
      <footer className="border bg-black h-10">
        <div className="title-bar inactive">
          <div className="">
            <button className="mt-1">
              <span className="flex justify-center gap-2">
                <img
                  src="https://i.postimg.cc/28xn0Sqr/Qm-Tqu-RGUdy-B7-ERF3-Hj-Lc-Ad1w-DVE17us-XC7x-Pqv-PQszf-Tpq-removebg-preview.png"
                  alt=""
                  className="w-5 h-5 mt-1"
                />
                <h3
                  className="text-black text-[10px] font-bold mt-0.5"
                  style={{ padding: "5px" }}
                >
                  Degen.day
                </h3>
              </span>
            </button>
            <button className="mt-1 ms-3">
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
          <div className="flex justify-end">
            <img
              src="https://31.media.tumblr.com/3ac4cdb71b5b782a15f04904ba04e4be/tumblr_mswlj88awM1ssdigko1_400.gif"
              alt=""
              className="w-8 h-8"
            />
            <h3 className="text-black text-[10px] font-bold mt-2">
              {String(date).slice(0, 15)}
            </h3>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PageFooter;
