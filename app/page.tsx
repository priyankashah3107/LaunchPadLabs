import OurApproch from "@/Components/OurApproch";
import OurImpact from "@/Components/OurImpact";
import OurProcess from "@/Components/OurProcess";
import OurWork from "@/Components/OurWork";
import TestimonialsSection from "@/Components/TestimonialsSection";
import WhyLaunchPadLabs from "@/Components/WhyLaunchPadLabs";
import React from "react";

const page = () => {
  return (
    <>
      <OurImpact />
      <OurWork />
      <WhyLaunchPadLabs />
      <OurProcess />
      <OurApproch />
      <TestimonialsSection />
    </>
  );
};

export default page;
