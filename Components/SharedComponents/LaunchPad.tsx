import React from "react";

const LaunchPad = () => {
  return (
    <footer className="w-full bg-white text-center pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10">
      {/* Gradient Text */}
      <h1
        className="font-bold bg-gradient-to-b from-[#C2DCFF] to-[#FFFFFF] 
                   bg-clip-text text-transparent leading-none
                   text-[48px] sm:text-[72px] md:text-[120px] lg:text-[177px]"
      >
        LaunchPad Labs
      </h1>

      {/* Centered Gradient Divider */}
      <div
        className="h-[1px] md:h-[2px] mt-4 mb-6 
                   w-3/4 sm:w-2/3 md:w-1/2 mx-auto 
                   bg-gradient-to-r from-[#F3F7F800] via-[#93B3D8] to-[#F3F7F800]"
      />

      {/* Copyright */}
      <p className="text-center text-zinc-500 text-[10px] sm:text-xs font-medium leading-8">
        © 2025 LinkVerse. All rights reserved.
      </p>
    </footer>
  );
};

export default LaunchPad;
