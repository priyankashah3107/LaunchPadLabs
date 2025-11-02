import React from "react";
import Image from "next/image";
import { Card } from "@/Components/ui/card";
import { Star } from "lucide-react";
import { Marquee } from "./ui/marquee";
import TitleButton from "./SharedComponents/TitleButton";

const marqueeCardData = [
  {
    person: "/women.png",
    icon: "/bluetick.png",
    name: "Sarah Johnson",
    role: "Software Developer",
    description:
      "“Launchpad Labs turned our idea into a working MVP in record time. Couldn’t have asked for a smoother process.”",
  },
  {
    person: "/women.png",
    icon: "/bluetick.png",
    name: "Sarah Johnson",
    role: "Software Developer",
    description:
      "“Launchpad Labs turned our idea into a working MVP in record time. Couldn’t have asked for a smoother process.”",
  },
  {
    person: "/women.png",
    icon: "/bluetick.png",
    name: "Sarah Johnson",
    role: "Software Developer",
    description:
      "“Launchpad Labs turned our idea into a working MVP in record time. Couldn’t have asked for a smoother process.”",
  },
  {
    person: "/women.png",
    icon: "/bluetick.png",
    name: "Sarah Johnson",
    role: "Software Developer",
    description:
      "“Launchpad Labs turned our idea into a working MVP in record time. Couldn’t have asked for a smoother process.”",
  },
  {
    person: "/women.png",
    icon: "/bluetick.png",
    name: "Sarah Johnson",
    role: "Software Developer",
    description:
      "“Launchpad Labs turned our idea into a working MVP in record time. Couldn’t have asked for a smoother process.”",
  },
];

const MarqueeTestimonials = () => {
  return (
    <div className="flex flex-col items-center gap-6 lg:gap-14">
      <div className="w-full flex justify-start px-4 sm:px-10">
        <TitleButton text="Testimonials" />
      </div>
      {/* <TitleButton text="Testimonials" /> */}

      {/* Two-column vertical marquee */}
      <div className="flex gap-5">
        {/* Left column – normal direction (top to bottom) */}
        <Marquee pauseOnHover vertical className="h-[600px] [--duration:20s]">
          {marqueeCardData.map((item, index) => (
            <Card
              key={index}
              className="w-[302px] h-[225px] border-2 border-dashed border-[#ACD8FF] bg-white 
              rounded-xl p-4 flex flex-col justify-between shadow-[0_4px_30px_rgba(255,255,255,0.5)]"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.person}
                  alt={item.name}
                  width={41}
                  height={41}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col ">
                  <div className="flex flex-row items-center gap-2">
                    <h2 className="text-black text-base font-semibold leading-8">
                      {item.name}
                    </h2>
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={16}
                      height={16}
                      className="ml-auto rounded-full"
                    />
                  </div>

                  <p className="text-neutral-500 text-xs font-normal ">
                    {item.role}
                  </p>
                </div>
                {/* <Image
                  src={item.icon}
                  alt="icon"
                  width={14}
                  height={14}
                  className="ml-auto rounded-full"
                /> */}
              </div>

              <p className=" text-zinc-900 text-sm font-medium leading-6 px-2">
                {item.description}
              </p>

              <div className="flex -mt-6 px-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBF24" stroke="none" />
                ))}
              </div>
            </Card>
          ))}
        </Marquee>

        {/* Right column – reversed content, but same scroll direction */}
        <Marquee
          pauseOnHover
          vertical
          reverse
          className="h-[600px] hidden sm:flex [--duration:20s]"
        >
          {[...marqueeCardData].reverse().map((item, index) => (
            <Card
              key={index}
              className="w-[302px] h-[225px] border-2 border-dashed border-[#ACD8FF] bg-white 
              rounded-xl p-4 flex flex-col justify-between shadow-[0_4px_30px_rgba(255,255,255,0.5)]"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.person}
                  alt={item.name}
                  width={41}
                  height={41}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col ">
                  <div className="flex flex-row items-center gap-2">
                    <h2 className="text-black text-base font-semibold leading-8">
                      {item.name}
                    </h2>
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={16}
                      height={16}
                      className="ml-auto rounded-full"
                    />
                  </div>

                  <p className="text-neutral-500 text-xs font-normal ">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className=" text-zinc-900 text-sm font-medium  leading-6">
                {item.description}
              </p>

              <div className=" flex -mt-6 px-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBF24" stroke="none" />
                ))}
              </div>
            </Card>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeTestimonials;
