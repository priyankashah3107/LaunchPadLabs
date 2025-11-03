"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar } from "@/Components/ui/calendar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/Components/ui/tabs";
import GreenDotTitleButton from "./SharedComponents/GreenDotTitleButton";
import SharedButton from "./SharedComponents/SharedButton";

const imagedata = [
  { image: "/women.png" },
  { image: "/women.png" },
  { image: "/women.png" },
];

const Homepage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [tab, setTab] = useState("12h");

  const timeSlots12h = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "02:30 PM",
    "03:30 PM",
    "04:30 PM",
  ];
  const timeSlots24h = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "02:30 PM",
    "05:30 PM",
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#F3F7F8] flex flex-col items-center justify-start overflow-hidden py-16">
      {/* Hero background image (only visible on large screens) */}
      <div className="hidden lg:block absolute inset-0">
        <div className="w-full h-full flex justify-center">
          <div className="relative w-full max-w-7xl mx-auto">
            <Image
              src="/hero.png"
              alt="LaunchPad background"
              width={1600}
              height={900}
              className="w-full h-full opacity-100 pointer-events-none"
              priority
            />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto px-4 flex flex-col items-center">
        {/* Green Dot Button */}
        <div className="mb-8">
          <GreenDotTitleButton
            size="large"
            text="5 Founders booked the call this week"
          />
        </div>

        {/* Heading */}
        <div className="w-full flex flex-col items-center text-center mb-6">
          <div className="flex flex-wrap justify-center items-center gap-3 text-black text-2xl md:text-6xl lg:text-6xl font-semibold leading-tight">
            <span>We Build and</span>
            <Image
              src="/logo.png"
              alt="LaunchPad logo"
              width={100}
              height={100}
              className="-rotate-8 inline-block w-10 h-10 md:w-[90px] md:h-[80px]"
            />
            <span>Launch Your</span>
          </div>
          <div className="text-black text-2xl md:text-6xl lg:text-6xl font-semibold leading-tight">
            Startup MVP in Just{" "}
            <span className="bg-gradient-to-r from-[#231BAF] to-[#0FA6EC] bg-clip-text text-transparent font-bold">
              2 Weeks
            </span>
          </div>
        </div>

        {/* Paragraph */}
        <p className="max-w-4xl text-center text-zinc-700 text-sm md:text-xl font-medium leading-relaxed mb-4 px-5 md:px-0">
          LaunchPad Labs builds and ships investor-ready MVPs for founders
        </p>

        {/* Three Circle Avatars + Trusted Text */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex -space-x-2">
            {imagedata.map((val, i) => (
              <Image
                key={i}
                src={val.image}
                alt="founder avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
            ))}
          </div>
          <p className="text-sm md:text-md text-zinc-600 font-semibold">
            Trusted by 50+ VC-backed founders
          </p>
        </div>

        {/* CTA Button */}
        <SharedButton
          label="Book My Free MVP Call"
          size="large"
          className="w-60  relative z-10 top-10 md:top-14"
        />

        {/* Calendar + Time Selection Card */}
        <div className="relative backdrop-blur rounded-3xl p-8 flex flex-col lg:flex-row items-start justify-center gap-8 mb-8 border border-gray-100">
          {/* Calendar */}
          <div className="bg-white rounded-xl border border-gray-200 w-full md:w-auto p-4 overflow-hidden">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </div>

          {/* Time Selection */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 w-full md:w-[320px] overflow-hidden">
            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-gray-100">
                <TabsTrigger value="12h">12h</TabsTrigger>
                <TabsTrigger value="24h">24h</TabsTrigger>
              </TabsList>

              <TabsContent value="12h" className="mt-0">
                <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto pr-2">
                  {timeSlots12h.map((time, index) => (
                    <button
                      key={time}
                      className={`rounded-lg py-2.5 px-4 font-medium transition-all text-sm ${
                        index === 2
                          ? "bg-blue-500 text-white shadow-md"
                          : "bg-gray-50 text-gray-700 hover:bg-blue-50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="24h" className="mt-0">
                <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto pr-2">
                  {timeSlots24h.map((time) => (
                    <button
                      key={time}
                      className="rounded-lg py-2.5 px-4 bg-gray-50 hover:bg-blue-50 transition font-medium text-gray-700 text-sm"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-sm text-zinc-600 font-semibold relative top-12">
          Trusted by Founders from
        </p>
      </div>
    </section>
  );
};

export default Homepage;
