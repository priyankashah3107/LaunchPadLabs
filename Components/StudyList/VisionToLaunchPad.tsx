"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import { ArrowUpRight } from "lucide-react";
import TitleButton from "../SharedComponents/TitleButton";
import SharedButton from "../SharedComponents/SharedButton";

const studylistdata = [
  {
    image: "/studylist/study.png",
    title: "FitAI",
    description:
      "FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere.",
    courseTags: ["UI/UX", "Web Development", "Mobile App"],
  },
  {
    image: "/studylist/study.png",
    title: "FitAI",
    description:
      "FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere.",
    courseTags: ["UI/UX", "Web Development", "Mobile App"],
  },
  {
    image: "/studylist/study.png",
    title: "FitAI",
    description:
      "FitAI brings personalized, AI-powered home workouts to your fingertips — tailored plans, real-time guidance, and progress tracking to help you stay fit anytime, anywhere.",
    courseTags: ["UI/UX", "Web Development", "Mobile App"],
  },
];

const VisionToLaunchPad = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <section className="bg-[#F3F7F8] w-full py-10 px-4 pb-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* ===== Header Section ===== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 relative">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
              From vision to{" "}
              <span className="bg-gradient-to-r from-[#2209A7] to-[#03BDF7] bg-clip-text text-transparent font-bold">
                Launchpad
              </span>
            </h1>
            <p className="text-stone-600 text-lg">
              Explore some of the MVPs and products we’ve brought to life
            </p>
          </div>

          <div className="flex flex-row items-start lg:gap-4 relative">
            {/* Button slightly higher */}
            <div className="flex flex-col justify-start">
              <SharedButton
                label="Book My Free MVP Call"
                size="large"
                className="text-sm lg:w-60 relative  lg:top-30 lg:left-32 z-10"
              />
            </div>

            {/* Calendar slightly lower */}
            <div className="mt-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="w-full h-1/2 shadow-md rounded-xl bg-white relative right-42 sm:right-0 mt-12 sm:mt-0 "
              />
            </div>
          </div>
        </div>

        {/* ===== Cards Section ===== */}
        <div className="flex flex-col gap-10 justify-between">
          {studylistdata.map((item, index) => (
            <Card
              key={index}
              className="border-0  transition-all duration-300 rounded-2xl bg-white overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center gap-6 max-w-xl">
                    <h3 className="text-neutral-900 text-2xl lg:text-3xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-base leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.courseTags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-sky-100 text-neutral-800 text-sm font-medium rounded-full px-4 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* <Button
                      variant="outline"
                      className="w-1/2 rounded-full mt-2 border-2 bg-white hover:bg-gray-50 text-neutral-800 font-semibold px-6 py-5  group transition-all"
                      style={{
                        borderImage:
                          "linear-gradient(to right, #9CC6FF, #00D0FF) 1",
                        borderImageSlice: 1,
                      }}
                    >
                      <span className="flex items-center gap-2">
                        View Case Study
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                    </Button> */}
                    <Button
                      variant="outline"
                      className="relative w-1/2 inline-flex items-center gap-2 px-6 py-5 font-semibold text-neutral-800 rounded-full 
             bg-gradient-to-r from-[#9CC6FF] to-[#00D0FF] p-[2px] group transition-all duration-300"
                    >
                      <span className="flex items-center gap-2 w-full h-full rounded-full bg-white hover:bg-gray-50 transition-all justify-center">
                        View Case Study
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>

                  {/* Right Image */}
                  <div className="relative  overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionToLaunchPad;
