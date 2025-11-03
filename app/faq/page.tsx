"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { PlusIcon, Minus, Phone } from "lucide-react";
import TitleButton from "@/Components/SharedComponents/TitleButton";
import SharedButton from "@/Components/SharedComponents/SharedButton";

const accordiandata = [
  {
    title: "How long does it take to launch my MVP with LaunchPad Labs?",
    description:
      "We specialize in speed. Most MVPs are launched in as little as 2–4 weeks, depending on complexity.",
  },
  {
    title: "What exactly is included in the MVP package?",
    description:
      "Our MVP package includes product strategy, design, development, and deployment — everything you need to launch fast.",
  },
  {
    title: "Do I need to have all my ideas finalized before starting?",
    description:
      "Not at all! We help you refine and validate your ideas during the discovery phase.",
  },
  {
    title: "How involved will I be during the development process?",
    description:
      "We collaborate closely with you, sharing updates, prototypes, and progress every week.",
  },
  {
    title: "Can I scale my MVP into a full product later?",
    description:
      "Absolutely! Every MVP we build is designed with scalability in mind for future growth.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F3F7F8] w-full py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-6">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col items-center lg:items-start gap-4 mb-8 ">
            <TitleButton text="FAQ" />
            <h2 className="text-neutral-800 text-2xl md:text-3xl font-semibold text-center lg:text-left">
              Got Questions? We’ve Got Answers
            </h2>
            <p className="justify-start text-neutral-600 text-sm md:text-base font-medium ">
              Simple explanations for your most important questions
            </p>
          </div>

          {/* Accordion Section */}
          <div className="flex flex-col gap-4">
            {accordiandata.map((val, index) => {
              const isOpen = openIndex === index;
              return (
                <Card
                  key={index}
                  className="rounded-xl py-3 shadow-sm border border-gray-200 bg-white transition-all"
                >
                  <button
                    className="flex justify-between items-center w-full text-left px-6 py-4"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <h3 className="text-neutral-800 text-base md:text-lg font-medium">
                      {val.title}
                    </h3>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <PlusIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {isOpen && (
                    <CardContent className="px-6 pb-4">
                      <div className="border border-dashed border-gray-200 rounded-lg p-4 ">
                        <p className="text-zinc-700 text-sm leading-6">
                          {val.description}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE - CALL CARD */}
        <div className="lg:w-[320px] flex-shrink-0 mt-1 md:mt-15">
          <Card className="rounded-2xl p-6 bg-white shadow-sm ">
            <CardContent className="flex flex-col gap-3 items-start p-0  mt-24">
              <p className="text-neutral-400 text-lg font-semibold">
                Still not sure?
              </p>
              <p className="text-black text-xl font-semibold">
                Book a free call.
              </p>
              <p className="text-black text-sm leading-5">
                Learn more about how we work and how we can help you and your
                startup.
              </p>
              <div className="flex w-full items-center gap-2 mt-3">
                <Phone className="w-4 h-4 text-white absolute left-4" />
                <SharedButton
                  label="Book A Call"
                  size="small"
                  className="w-[70%] flex justify-center items-center gap-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
