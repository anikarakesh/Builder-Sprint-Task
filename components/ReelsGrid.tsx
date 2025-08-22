import React from "react";

const img1 = "http://localhost:3845/assets/be088e0ad030d2abc3afffb864c8fe39134aaf89.png";
const img2 = "http://localhost:3845/assets/dbf76db98df2e30b9ba65c68c1ab91033dd914c7.png";

export default function ReelsGrid() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {[img1, img2, img1, img2].map((src, i) => (
        <div key={i} className="aspect-[360/640] rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('${src}')` }} />
      ))}
    </div>
  );
}


