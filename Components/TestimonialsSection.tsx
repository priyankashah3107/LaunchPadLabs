import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import MarqueeTestimonials from "./MarqueeTestimonials";

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start gap-10 py-16 px-6">
      <TestimonialsCarousel />
      <MarqueeTestimonials />
    </section>
  );
};

export default TestimonialsSection;
