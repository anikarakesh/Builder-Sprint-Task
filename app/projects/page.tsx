import React from "react";
import Topbar from "../../components/Topbar";
import Breadcrumbs from "../../components/Breadcrumbs";
import PropertyHeader from "../../components/PropertyHeader";
import ImageGallery from "../../components/ImageGallery";
import ContactCard from "../../components/ContactCard";
import FeatureChips from "../../components/FeatureChips";
import PropertyAttributes from "../../components/PropertyAttributes";
import NeighbourhoodSection from "../../components/NeighbourhoodSection";
import PropertyGridSection from "../../components/PropertyGridSection";
import FooterCTA from "../../components/FooterCTA";

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

      {/* Property Detail Header */}
      <section className="w-full">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-4 md:py-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "#" },
              { label: "Projects", href: "#" },
              { label: "3 BHK Apartment for Sale at Assetz Canvas and Cove" },
            ]}
          />
          <div className="mt-3">
            <PropertyHeader
              title="3 BHK Apartment for Sale at Assetz Canvas and Cove"
              subtitle="Begur, South Bangalore"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ImageGallery
            images={[
              { src: imgRectangle14 },
              { src: imgRectangle15 },
              { src: imgRectangle16, withPlay: true },
              { src: imgRectangle17 },
            ]}
          />
        </div>
      </section>


      {/* Neighbourhood */}
      <section className="w-full py-4">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="gap-8 md:grid-cols-[1fr_320px]">
            <NeighbourhoodSection
              places={[
                { name: "Yelachenahalli Metro Station", distance: "14 mins (13.2 kms)" },
                { name: "Jaya Prakash Nagar Metro Station", distance: "23.5 mins (16.4 kms)" },
                { name: "Bommasandra Metro Station", distance: "08 mins (5.2 kms)" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Popular Properties */}
      <PropertyGridSection title="Popular Properties in Pune" cards={puneCards} />
      <PropertyGridSection title="Popular Properties in Kochi" cards={kochiCards} />
      <FooterCTA />
    </main>
  );
}
