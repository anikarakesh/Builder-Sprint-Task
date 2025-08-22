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

      {/* Gallery + Contact */}
      <section className="w-full">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_320px]">
            <ImageGallery
              images={[
                { src: imgRectangle14 },
                { src: imgRectangle15 },
                { src: imgRectangle16, withPlay: true },
                { src: imgRectangle17 },
              ]}
            />
            <div className="md:pl-2">
              <ContactCard price="₹3.75 Cr" />
            </div>
          </div>
        </div>
      </section>

      {/* Description + Attributes */}
      <section className="w-full py-6">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_320px]">
            <div>
              <p className="text-[14px] leading-6 text-[#525866]">
                Craft your new way of living. Polished, elegant interiors with double-height spaces. Homes crafted at Cove create cheery, cozy spaces and invite ample daylight and fresh air.
              </p>
              <div className="mt-4">
                <FeatureChips
                  items={["3 BHK", "2 Car Parks", "84% Open", "East Facing", "Sea View"]}
                />
              </div>
              <div className="mt-6">
                <PropertyAttributes
                  items={[
                    { label: "Configuration", value: "3 BHK" },
                    { label: "Status", value: "New" },
                    { label: "Car Parking", value: "2" },
                    { label: "Possession", value: "Dec 2026" },
                    { label: "RERA", value: "Approved" },
                    { label: "Area", value: "1,640 sq.ft" },
                  ]}
                />
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>

      {/* Neighbourhood */}
      <section className="w-full py-4">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <NeighbourhoodSection
            places={[
              { name: "Hosa Road Metro", distance: "1.1 km" },
              { name: "Royal Meenakshi Mall", distance: "2.6 km" },
              { name: "Fortis Hospital", distance: "2.0 km" },
              { name: "Bommanahalli Main Junction", distance: "2.9 km" },
            ]}
          />
        </div>
      </section>

      {/* Popular Properties */}
      <PropertyGridSection title="Popular Properties in Pune" cards={puneCards} />
      <FooterCTA />
    </main>
  );
}
