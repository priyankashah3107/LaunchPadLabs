import React from "react";
import Image from "next/image";
import { Marquee } from "@/Components/ui/marquee";

const imagedata = [
  { image: "/logos/qu.png" },
  { image: "/logos/walmart.png" },
  { image: "/logos/amazon.png" },
  { image: "/logos/ad.png" },
  { image: "/logos/de.png" },
];

const OurCompanyPartnership = () => {
  return (
    <section className="w-full bg-[#F3F7F8] py-16 relative">
      <div className="max-w-5xl mx-auto relative">
        {/* Left side white blur effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F3F7F8] to-transparent z-10 pointer-events-none" />

        {/* Right side white blur effect */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F3F7F8] to-transparent z-10 pointer-events-none" />

        {/* Marquee Container */}
        <div className="w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {imagedata.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-8"
              >
                <Image
                  src={item.image}
                  alt={`Company logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default OurCompanyPartnership;
