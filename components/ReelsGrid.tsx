import React from "react";

const img1 = "/7.png";
const img2 = "/8.png";

export default function ReelsGrid() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {[img1, img2, img1, img2].map((src, i) => (
        <div key={i} className="aspect-[360/640] rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('${src}')` }} />
      ))}
    </div>
  );
}


