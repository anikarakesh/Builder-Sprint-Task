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

      {/* Actions + Config filters */}
      <section className="w-full py-4">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex items-center gap-3">
            <button className="rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px]">Call</button>
            <button className="rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px]">Schedule Visit</button>
            <button className="rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px]">Download Brochure</button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map((c, idx) => (
              <button key={c} className={"rounded-[10px] border px-3 py-1.5 text-[12px] " + (idx === 2 ? "border-[#e1e4ea] bg-[#f5f7fa] text-[#0e121b]" : "border-[#e1e4ea] bg-white text-[#525866]")}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Description + Attributes + Contact */}
      <section className="w-full py-6">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_320px]">
            <div>
              <p className="text-[14px] leading-6 text-[#525866]">
                Craft your own piece of majestic living beneath the clouds. It is exceptionally unique and available only through exclusive invitation.
              </p>
              <div className="mt-4">
                <FeatureChips
                  items={["8795 Sqft", "17 acres", "85% Open", "03 Bath", "Gym", "80+ More"]}
                />
              </div>
              <div className="mt-6">
                <PropertyAttributes
                  items={[
                    { label: "Configuration", value: "3 BHK" },
                    { label: "Status", value: "New" },
                    { label: "Car Parking", value: "2" },
                    { label: "Possession", value: "Jan 2025" },
                    { label: "RERA", value: "Approved" },
                    { label: "Area", value: "1,640 sq.ft" },
                  ]}
                />
              </div>
            </div>
            <div className="md:pl-2">
              <ContactCard price="₹3.75 Cr" />
            </div>
          </div>
        </div>
      </section>

      {/* Neighbourhood */}
      <section className="w-full py-4">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_320px]">
            <NeighbourhoodSection
              places={[
                { name: "Yelachenahalli Metro Station", distance: "14 mins (13.2 kms)" },
                { name: "Jaya Prakash Nagar Metro Station", distance: "23.5 mins (16.4 kms)" },
                { name: "Bommasandra Metro Station", distance: "08 mins (5.2 kms)" },
              ]}
            />
            <div className="hidden md:block" />
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
