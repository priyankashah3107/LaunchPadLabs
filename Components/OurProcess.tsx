import React from "react";
import SharedButton from "./SharedComponents/SharedButton";
import TitleButton from "./SharedComponents/TitleButton";

const OurProcess = () => {
  const traditionalPoints = [
    "Months of Planning",
    "Too Many Cooks",
    "Design–Then–Build Bottlenecks",
    "Huge Upfront Fees",
    "Complex Tech Setup",
  ];

  const launchPadPoints = [
    "2–Week Launch System",
    "Focused Founder–Led Pods",
    "Real–Time Prototyping",
    "Flat $4,997 Transparent Pricing",
    "Modern, Scalable Stack",
  ];

  return (
    <section className="w-full bg-[#F3F7F8]">
      <div className="max-w-6xl mx-auto py-16 md:py-20 px-4 sm:px-6 flex flex-col items-center gap-8">
        {/* Title + Button */}
        <div className="flex flex-col items-center gap-3 text-center">
          <TitleButton text="Our Approach" />
          <h2 className="text-neutral-800 text-xl sm:text-2xl md:text-3xl font-semibold">
            Why founders launch faster with LaunchPad Labs
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-0 mt-8 md:mt-10 w-full justify-items-center">
          {/* Traditional Development */}
          <div className="rounded-3xl border-2 border-dashed border-[#FFACAC] p-5 sm:p-6 md:p-8 w-full sm:w-[380px] md:w-[420px] lg:w-[458px] min-h-[370px] md:h-[411px]">
            <div className="flex w-[90%] sm:w-[80%] mx-auto bg-white shadow-sm px-4 sm:px-6 py-1 rounded-full mb-5 justify-center items-center">
              <p className="text-neutral-800 text-sm sm:text-base font-semibold leading-8">
                Traditional Development
              </p>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {traditionalPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-black text-sm sm:text-base font-semibold leading-7 sm:leading-8"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-gradient-to-br from-[#FF0B0B]/20 to-[#FFD4D4]/50 rounded-sm shadow-sm">
                    <span className="text-[#FF0B0B] text-base sm:text-lg font-bold">
                      ×
                    </span>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* LaunchPad Labs Approach */}
          <div className="rounded-3xl border-2 border-dashed border-[#55E294] p-5 sm:p-6 md:p-8 w-full sm:w-[380px] md:w-[420px] lg:w-[458px] min-h-[370px] md:h-[411px]">
            <div className="flex w-[90%] sm:w-[80%] mx-auto bg-white shadow-sm px-4 sm:px-6 py-1 rounded-full mb-5 justify-center items-center">
              <p className="text-neutral-800 text-sm sm:text-base font-semibold leading-8">
                LaunchPad Labs Approach
              </p>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {launchPadPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-black text-sm sm:text-base font-semibold leading-7 sm:leading-8"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-sm shadow-sm bg-gradient-to-br from-[#5BF36D] via-[#90E9A4] to-[#C2FFCB]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="#26A400"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 md:mt-10">
          <SharedButton
            label="Book My Free MVP Call"
            size="medium"
            className="cursor-pointer text-xs sm:text-sm px-5 sm:px-6 md:w-[218px] md:h-[48px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
