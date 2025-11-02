"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/Components/ui/card";
import { Play } from "lucide-react";

const testimonialsdata = [
  {
    image: "/man.png",
    personname: "John Doe",
    work: "Software Developer",
  },
  {
    image: "/man.png",
    personname: "Jane Smith",
    work: "Software Engineer",
  },
  {
    image: "/man.png",
    personname: "Chris Brown",
    work: "Frontend Developer",
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index: number) => setCurrent(index);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-neutral-800 text-center lg:text-left text-xl sm:text-2xl md:text-3xl font-semibold leading-tight max-w-[90%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none lg:w-96 lg:h-20">
        What Founders Are Saying About LaunchPad Labs
      </div>

      <div className="relative mt-6">
        {/* Responsive card */}
        <Card
          className="relative w-[90vw] sm:w-[350px] md:w-[380px] lg:w-[405px] h-[300px] sm:h-[340px] md:h-[360px] lg:h-[383px]
          flex items-center justify-center shadow-lg overflow-hidden rounded-2xl"
        >
          <Image
            src={testimonialsdata[current].image}
            alt="testimonial"
            width={389}
            height={370}
            className="object-cover w-full h-full rounded-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl">
            <Play
              size={40}
              className="bg-black/40 rounded-full p-2 text-white sm:size-10"
            />
          </div>

          <div className="absolute bottom-4 left-4">
            <p className="text-white text-base sm:text-lg font-semibold leading-8">
              {testimonialsdata[current].personname}
            </p>
            <p className="text-gray-300 text-sm sm:text-base font-normal">
              {testimonialsdata[current].work}
            </p>
          </div>
        </Card>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonialsdata.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
