import React from "react";

const imgVector = "http://localhost:3845/assets/295398bf5b77192b5e472c9945fe6d197639d0b2.svg";
const imgVector1 = "http://localhost:3845/assets/3318315d3f707dbca355a1f5c71eb9273585026f.svg";

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


