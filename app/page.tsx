import React from "react";
import Topbar from "../components/Topbar";
import HeroSearch from "../components/HeroSearch";
import PropertyGridSection from "../components/PropertyGridSection";
import FooterCTA from "../components/FooterCTA";

const imgRectangle14 = "/1.png";
const imgRectangle15 = "/2.png";
const imgRectangle16 = "/3.png";
const imgRectangle17 = "/4.png";
const imgImage2 = "/5.png";
const imgImage1 = "/6.png";

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
