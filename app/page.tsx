import React from "react";
import Topbar from "../components/Topbar";
import HeroSearch from "../components/HeroSearch";
import PropertyGridSection from "../components/PropertyGridSection";
import FooterCTA from "../components/FooterCTA";

const imgRectangle14 = "http://localhost:3845/assets/1ae110579b4d78c5f313e1bbab2feb169259531e.png";
const imgRectangle15 = "http://localhost:3845/assets/49b3ad2d452071eee8c4b639648371eb7b1df630.png";
const imgRectangle16 = "http://localhost:3845/assets/5c1e600f87b491879be3f7fccd1ab8925328a361.png";
const imgRectangle17 = "http://localhost:3845/assets/238fdda7d30386fc3a8d8cc71f264be82ab4e561.png";
const imgImage2 = "http://localhost:3845/assets/339ba5b9954d99620e7b5a7c7dd19c8b35ca23b9.png";
const imgImage1 = "http://localhost:3845/assets/3aa6019dab066998985ae5491f082afb93c9779b.png";

export default function Home() {
  const kochiCards = [
    { imageUrl: imgRectangle14, badgeLogoUrl: imgImage2, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹3.85Cr" },
    { imageUrl: imgRectangle15, badgeLogoUrl: imgImage1, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹5.13Cr" },
    { imageUrl: imgRectangle14, badgeLogoUrl: imgImage2, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹3.85Cr" },
    { imageUrl: imgRectangle16, badgeLogoUrl: imgImage1, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹1.93Cr" },
    { imageUrl: imgRectangle15, badgeLogoUrl: imgImage1, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹5.13Cr" },
    { imageUrl: imgRectangle17, badgeLogoUrl: imgImage2, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹3.85Cr" },
    { imageUrl: imgRectangle16, badgeLogoUrl: imgImage1, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹1.93Cr" },
    { imageUrl: imgRectangle17, badgeLogoUrl: imgImage2, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹3.85Cr" }
  ];

  const puneCards = [
    { imageUrl: imgRectangle14, badgeLogoUrl: imgImage2, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹3.85Cr" },
    { imageUrl: imgRectangle15, badgeLogoUrl: imgImage1, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹5.13Cr" },
    { imageUrl: imgRectangle14, badgeLogoUrl: imgImage2, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹3.85Cr" },
    { imageUrl: imgRectangle16, badgeLogoUrl: imgImage1, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹1.93Cr" },
    { imageUrl: imgRectangle15, badgeLogoUrl: imgImage1, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹5.13Cr" },
    { imageUrl: imgRectangle17, badgeLogoUrl: imgImage2, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹3.85Cr" },
    { imageUrl: imgRectangle16, badgeLogoUrl: imgImage1, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹1.93Cr" },
    { imageUrl: imgRectangle17, badgeLogoUrl: imgImage2, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹3.85Cr" }
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      <Topbar />
      <HeroSearch />
      <PropertyGridSection title="Popular Properties in Kochi" cards={kochiCards} />
      <PropertyGridSection title="Popular Properties in Pune" cards={puneCards} />
      <FooterCTA />
    </main>
  );
}
