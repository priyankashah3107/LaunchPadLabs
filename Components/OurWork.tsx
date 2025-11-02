"use client";

import React, { useState } from "react";
import Image from "next/image";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import TitleButton from "./SharedComponents/TitleButton";
import { Card } from "./ui/card";
import { Marquee } from "./ui/marquee";
import Link from "next/link";

const cardinfo = [
  { image: "/work/work1.png", cardtitle: "FitAI" },
  { image: "/work/work1.png", cardtitle: "FinSub" },
  { image: "/work/work1.png", cardtitle: "BillFlow" },
  { image: "/work/work1.png", cardtitle: "FinSub" },
  { image: "/work/work1.png", cardtitle: "BillFlow" },
  { image: "/work/work1.png", cardtitle: "FinSub" },
];

const OurWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F3F7F8]">
      <div className="w-full mx-auto py-16 md:py-20 px-4 sm:px-6 flex flex-col items-center gap-8">
        {/* Title + Description */}
        <div className="flex flex-col items-center gap-3 text-center">
          <TitleButton text="Our Work" />
          <h2 className="text-neutral-800 text-xl sm:text-2xl md:text-3xl font-semibold">
            Every product here went from idea to live in 2 weeks
          </h2>
          <p className="text-neutral-600 text-base font-medium leading-8">
            Built, launched, and loved by real users
          </p>
        </div>

        {/* Marquee Card Section */}
        <div className="w-full mt-10">
          <Marquee pauseOnHover className="[--duration:35s]">
            {cardinfo.map((card, index) => (
              <Card
                key={index}
                className="relative w-[381px] h-[316px] flex-shrink-0 bg-white rounded-2xl shadow-sm mx-3 overflow-hidden border border-[#E5E7EB] transition-transform hover:scale-[1.02]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <div className="w-[365px] h-[258px] mx-auto mt-2 overflow-hidden rounded-xl">
                  <Image
                    src={card.image}
                    alt={card.cardtitle}
                    width={365}
                    height={258}
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* Title + Arrow */}
                <Link
                  href={"#"}
                  className="flex justify-between items-center px-4 py-2"
                >
                  <div className="text-neutral-700 text-base font-semibold leading-8">
                    {card.cardtitle}
                  </div>
                  {hoveredIndex === index ? (
                    <ArrowRight className="w-4 h-4 text-neutral-700 transition-transform duration-200" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-neutral-700 transition-transform duration-200" />
                  )}
                </Link>
              </Card>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
