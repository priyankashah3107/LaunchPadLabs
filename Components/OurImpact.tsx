"use client";

import CountUp from "react-countup";
import TitleButton from "./SharedComponents/TitleButton";

const cardData = [
  {
    value: 25,
    suffix: "M+",
    labelBold: "Raised",
    labelText: "by founders who launched with us",
  },
  {
    value: 50,
    suffix: "+",
    labelBold: "MVPs Build",
    labelText: "- live in market within 2 weeks",
  },
  {
    value: 5,
    suffix: "",
    labelBold: "Startups Acquired",
    labelText: "after launching through LaunchPad Labs",
  },
];

const OurImpact = () => {
  return (
    <section className="bg-white max-w-5xl mx-auto py-20 px-6">
      {/* Title + Button */}
      <div className="flex flex-col items-center gap-4">
        <TitleButton text="Our Impact" />
        <h2 className="text-neutral-800 text-2xl md:text-2xl font-semibold text-center">
          Fast launches Real results
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="relative w-72 h-60 rounded-[24px] overflow-hidden"
            style={{
              background: `
      conic-gradient(
        from 0deg at 50% 50%,
        #B9E8FF   0deg,
        #8CB4FFED 90deg,
        #B9E8FF   180deg,
        #8CB4FFED 270deg,
        #B9E8FF   360deg
      ) padding-box,
      linear-gradient(transparent, transparent) border-box
    `,
              padding: "5px", // thickness of the border
              border: "6px solid transparent",
              borderRadius: "30px",
            }}
          >
            {/* Inner card (content) */}
            <div className="h-full  rounded-[22px] bg-gradient-to-b from-[#E6F3FF] to-[#FFFFFF] w-full   flex flex-col items-center justify-center">
              <h3 className="text-[#0766DB] text-5xl font-bold mb-3 ">
                <CountUp end={card.value} duration={2.5} suffix={card.suffix} />
              </h3>

              <p className="text-center mx-6">
                <span className="text-zinc-900 text-base font-bold">
                  {card.labelBold}
                </span>{" "}
                <span className="text-neutral-600 text-base font-medium">
                  {card.labelText}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurImpact;
