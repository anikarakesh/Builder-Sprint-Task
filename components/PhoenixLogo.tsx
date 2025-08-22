import React from "react";


const imgVector = "/2.svg";
const imgVector1 = "/1.svg";

export default function PhoenixLogo() {
  return (
    <div className="relative size-full overflow-clip rounded-full">
      <div className="absolute inset-[20.21%_20.23%_20.23%_20.23%]">
        <img alt="phoenix-outer" className="block size-full max-w-none" src={imgVector} />
      </div>
      <div className="absolute inset-[10%] flex items-center justify-center">
        <div className="size-8 rotate-90">
          <div className="relative size-full">
            <img alt="phoenix-inner" className="block size-full max-w-none" src={imgVector1} />
          </div>
        </div>
      </div>
    </div>
  );
}


