import React from "react";
import Image from "next/image";

import TitleButton from "./SharedComponents/TitleButton";
import { Card, CardContent } from "./ui/card";

const LaunchProcess = [
  {
    image: "/launch/l1.png",
    title: "MVP Package",
    description:
      "Everything you need SaaS, web app, or landing page build and launch-ready in 2 weeks.",
  },
  {
    image: "/launch/l2.png",
    title: "Integrations",
    description:
      "Payments, logins, emails & more. We connect everything so you’re ready to onboard users from day one.",
  },
  {
    image: "/launch/l3.png",
    title: "Modern Stack",
    description:
      "Built with the latest tech and AI delivering speed, stability, and scalability for real growth.",
  },
];

const WhyLaunchPadLabs = () => {
  return (
    <section className="w-full bg-[#F3F7F8]">
      <div className="max-w-6xl mx-auto py-16 md:py-20 px-4 sm:px-6 flex flex-col items-center gap-12">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <TitleButton
            text="Why LaunchPad Labs"
            size="large"
            className="text-neutral-800"
          />
          <h2 className="text-neutral-800 text-xl sm:text-2xl md:text-3xl font-semibold">
            Built faster Built smarter Built by founders
          </h2>
          <p className="text-neutral-600 text-base font-medium leading-8 max-w-2xl">
            MVPs built faster, smarter, and better — by founders who’ve done it
            before. <br className="hidden lg:block" />
            We turn your idea into a launch-ready product in just <b>2 weeks</b>
            , using modern tech and proven systems trusted by{" "}
            <b>50+ funded startups.</b>
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-32 justify-items-center">
          {LaunchProcess.map((item, index) => (
            <Card
              key={index}
              className="md:w-[381px] h-[420px] rounded-3xl shadow-sm border border-gray-200 bg-white flex flex-col items-center"
            >
              <CardContent className="p-0 flex flex-col items-center">
                {/* Image */}
                <div className="mt-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={365}
                    height={260}
                    className="rounded-2xl object-cover"
                  />
                </div>

                {/* Title */}
                <div className="mt-3 text-neutral-700 text-lg font-semibold leading-8">
                  {item.title}
                </div>

                {/* Description */}
                <div className="w-87 text-center text-zinc-700 text-sm font-normal leading-6 ">
                  {item.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLaunchPadLabs;
