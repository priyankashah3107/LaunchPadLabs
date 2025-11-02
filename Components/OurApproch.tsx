import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/Components/ui/card";
import TitleButton from "./SharedComponents/TitleButton";

const processData = [
  {
    count: "01",
    title: "Launch Call",
    description:
      "Kick off with a direct call with our founder. We clarify your idea, goals, and success metrics so we build exactly what investors and users will love.",
    image: "/process/p1.png",
    className: "w-[360px] h-[418px]",
    imageWidth: 260,
    imageHeight: 216,
  },
  {
    count: "02",
    title: "Launch Plan",
    description:
      "We map your MVP blueprint and deliver a clear PRD defining features, flows, and timelines with zero fluff, zero surprises.",
    image: "/process/p2.png",
    className: "w-[360px] h-[418px]",
    imageWidth: 327,
    imageHeight: 216,
  },
  {
    count: "03",
    title: "Launch Sprint",
    description:
      "Our dev team moves fast with daily updates, transparent progress, and agile feedback loops. You’ll see your product take shape in real time.",
    image: "/process/p3.png",
    className: "w-[360px] h-[418px]",
    imageWidth: 327,
    imageHeight: 216,
  },
  {
    count: "04",
    title: "Launch Delivery",
    description:
      "Your MVP goes live — fully functional, tested, and ready for demos, users, or fundraising. We handle deployment and hosting so you focus on traction.",
    image: "/process/p4.png",
    className: " w-[360px] h-[418px] lg:w-[558px] lg:h-[418px]",
    imageWidth: 480,
    imageHeight: 241,
  },
  {
    count: "05",
    title: "Launch Support",
    description:
      "You get 4 weeks of free maintenance and optimization. We fix, tune, and upgrade ensuring your MVP runs smoothly post-launch.",
    image: "/process/p5.png",
    className: " w-[360px] h-[418px] lg:w-[558px] lg:h-[418px]",
    imageWidth: 480,
    imageHeight: 241,
  },
];

const OurApproch = () => {
  return (
    <section className="w-full bg-[#F3F7F8] py-16 md:py-20 px-4 sm:px-6 flex flex-col items-center gap-12">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <TitleButton text="Our Process" />
        <h2 className="text-neutral-800 text-xl sm:text-2xl md:text-3xl font-semibold">
          The LaunchPad Process
        </h2>
        <p className="text-neutral-600 text-base font-medium leading-8 max-w-2xl">
          A transparent, founder-friendly journey from idea to live MVP in just{" "}
          <b>2 weeks.</b>
        </p>
      </div>

      {/* Process Cards */}
      <div className="flex flex-col gap-10 items-center">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-6">
          {processData.slice(0, 3).map((item, index) => (
            <Card
              key={index}
              className={`${item.className} relative border-0 shadow-md rounded-2xl overflow-hidden`}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#EFF5FF] to-white"></div>

              {/* 12x12 Grid Lines */}
              <div className="absolute inset-0 opacity-60">
                {/* Vertical lines */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute top-0 h-full w-px bg-[#CAE3FF]"
                    style={{ left: `${(i + 1) * (100 / 13)}%` }}
                  />
                ))}
                {/* Horizontal lines */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute left-0 w-full h-px bg-[#CAE3FF]"
                    style={{ top: `${(i + 1) * (100 / 13)}%` }}
                  />
                ))}
              </div>

              <CardContent className="relative flex flex-col justify-between h-full z-10 p-6">
                <div className="flex flex-col gap-4">
                  {/* Count */}
                  <div className="w-7 h-7 flex items-center justify-center bg-gradient-to-l from-blue-700 via-sky-500 to-blue-300 rounded-md shadow-[0px_4px_11px_0px_rgba(0,0,0,0.09)]">
                    <span className="text-white text-base font-bold leading-8">
                      {item.count}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-neutral-700 text-lg font-semibold leading-8">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="w-80 text-zinc-700 text-sm font-normal leading-6">
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                <div className="mt-6 flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-6">
          {processData.slice(3).map((item, index) => (
            <Card
              key={index}
              className={`${item.className} relative border-0 shadow-md rounded-2xl overflow-hidden`}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#EFF5FF] to-white"></div>

              {/* 12x12 Grid Lines */}
              <div className="absolute inset-0 opacity-60">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`v2-${i}`}
                    className="absolute top-0 h-full w-px bg-[#CAE3FF]"
                    style={{ left: `${(i + 1) * (100 / 13)}%` }}
                  />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`h2-${i}`}
                    className="absolute left-0 w-full h-px bg-[#CAE3FF]"
                    style={{ top: `${(i + 1) * (100 / 13)}%` }}
                  />
                ))}
              </div>

              <CardContent className="relative flex flex-col justify-between h-full z-10 p-6">
                <div className="flex flex-col gap-4">
                  <div className="w-7 h-7 flex items-center justify-center bg-gradient-to-l from-blue-700 via-sky-500 to-blue-300 rounded-md shadow-[0px_4px_11px_0px_rgba(0,0,0,0.09)]">
                    <span className="text-white text-base font-bold leading-8">
                      {item.count}
                    </span>
                  </div>
                  <h2 className="text-neutral-700 text-lg font-semibold leading-8">
                    {item.title}
                  </h2>
                  <p className="w-96 text-zinc-700 text-sm font-normal leading-6">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproch;
