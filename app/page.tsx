import Homepage from "@/Components/Homepage";
import OurApproch from "@/Components/OurApproch";
import OurCompanyPartnership from "@/Components/OurCompanyPartnership";
import OurImpact from "@/Components/OurImpact";
import OurProcess from "@/Components/OurProcess";
import OurWork from "@/Components/OurWork";
import ReadyToLaunch from "@/Components/ReadyToLaunch";
import TestimonialsSection from "@/Components/TestimonialsSection";
import WhyLaunchPadLabs from "@/Components/WhyLaunchPadLabs";
import React from "react";

const page = () => {
  return (
    <>
      <Homepage />
      <OurCompanyPartnership />
      <OurImpact />
      <OurWork />
      <WhyLaunchPadLabs />
      <OurProcess />
      <OurApproch />
      <TestimonialsSection />
      <ReadyToLaunch />
    </>
  );
};

export default page;
