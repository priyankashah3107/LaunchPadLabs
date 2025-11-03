import Image from "next/image";
import React from "react";
import TitleButton from "../SharedComponents/TitleButton";

export default function OurFounder() {
  return (
    <section className="w-full bg-[#F3F7F8] py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Button */}
        <div className="flex justify-center mb-14">
          <TitleButton
            text="Our Founder"
            size="medium"
            className="text-base font-medium"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Heading */}
            <div className="mb-8 p-5 md:p-0">
              <h1 className="text-neutral-800 text-lg md:text-2xl font-semibold leading-9 mb-3">
                Meet{" "}
                <i className="text-[#0051FF]  text-4xl font-normal font-['Instrument_Serif'] ">
                  Harsh
                </i>{" "}
                founder of LaunchPad Labs
              </h1>
              <p className="text-neutral-600 text-sm md:text-base font-medium leading-9">
                Your Strategic Tech Partner for Building MVPs That Scale
              </p>
            </div>

            {/* Image and Note Card */}

            {/* Note Label */}
            {/* <div className="inline-block bg-blue-100 px-4 py-2 rounded-lg mb-4">
                <p className="text-sm font-medium text-gray-800">
                  A Note from our Founder
                </p>
              </div> */}

            {/* Quote Card */}
            <div className="inline-block w-1/2 lg:w-1/3 bg-blue-100 px-4 py-2 rounded-lg mb-4 relative md:top-48 md:left-21 ">
              <p className="text-sm font-medium text-gray-800">
                A Note from our Founder
              </p>
            </div>
            <div className="flex flex-col md:flex-row  ">
              <div className="bg-white w-full z-10 relative md:top-1/2 md:left-20 p-6 rounded-lg h-48 border-l-4 border-gray-300 max-w-md ">
                <p className=" leading-relaxed text-black text-base font-medium  ">
                  Most startups don't fail from bad ideas - they fail because
                  they launch too slow. With LaunchPad Labs, you can go live in
                  just 2 weeks.
                </p>
              </div>
              <div className="">
                {/* Founder Image */}
                <div className="relative w-full  mb-6 ">
                  <Image
                    src="/founder.png"
                    alt="Harsh - Founder"
                    className="w-full h-auto rounded-lg object-cover "
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bio Card */}
          {/*  */}
          {/* Right Column - Bio Card */}
          <div className="flex items-start lg:items-center bg-white p-4 shadow-md rounded-2xl">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative w-full">
              {/* Timeline Decoration */}
              <div className="absolute left-8 top-0 bottom-0 md:flex flex-col justify-between items-center py-10 hidden">
                <div className="w-7 h-7 bg-white rounded-full border-4 border-gray-200 shadow-inner"></div>
                <div className="w-7 h-7 bg-white rounded-full border-4 border-gray-200 shadow-inner"></div>
              </div>

              {/* 🌐 Mobile & Tablet Bio */}
              <div className="flex flex-col space-y-4   text-black text-sm font-medium leading-relaxed md:hidden">
                <p>
                  I’m Harshdeep, founder of LaunchPad Labs - a builder at heart
                  and a partner to founders who move fast.
                </p>
                <p>
                  After delivering scalable digital products for Fortune 500
                  companies and Shark Tank–backed startups, I realized one
                  thing: speed and clarity win markets.
                </p>
                <p>
                  That’s why LaunchPad Labs exists to help non-technical
                  founders turn ideas into investor-ready MVPs without the tech
                  chaos or agency bloat.
                </p>
                <p>
                  We only take a limited number of clients each month to
                  maintain focus and quality. If you’re ready to move fast and
                  build smart, let’s connect.
                </p>

                {/* Signature */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-black text-base font-semibold">
                    Harshdeep
                  </h3>
                  <p className="text-neutral-400 text-xs font-medium ">
                    Founder, LaunchPad Labs
                  </p>
                </div>
              </div>

              {/* 💻 Desktop Bio (unchanged) */}
              <div className="ml-16 border-l-4 border-[#007EE5] pl-6 hidden md:flex">
                <div className="space-y-6 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    I'm Harshdeep, founder of LaunchPad Labs - a builder at
                    heart and a partner to founders who move fast.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    After delivering scalable digital products for Fortune 500
                    companies and Shark Tank–backed startups, I realized one
                    thing: speed and clarity win markets.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    That's why LaunchPad Labs exists to help non-technical
                    founders turn ideas into investor-ready MVPs without the
                    tech chaos or agency bloat.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We only take a limited number of clients each month to
                    maintain focus and quality. If you're ready to move fast and
                    build smart, let's connect.
                  </p>
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900">
                      Harshdeep
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Founder, LaunchPad Labs
                    </p>
                  </div>
                </div>

                {/* Signature */}
                {/* <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Harshdeep</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Founder, LaunchPad Labs
                  </p>
                </div> */}
              </div>

              {/* Decorative tape */}
              <div className="absolute -top-10 right-0 w-48 h-10 bg-blue-300/40 rounded-sm transform rotate-12 shadow-sm hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
