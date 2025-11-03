// import React from "react";
// import { Button } from "../ui/button";
// import { ArrowLeft, ArrowUpRight } from "lucide-react";
// import Image from "next/image";
// import { Card } from "../ui/card";

// const cardData = [
//   {
//     year: "2025",
//     expertise: [["UI/UX", "Web Development", "Mobile App"]],
//     platform: "Web App",
//   },
//   {
//     year: "2025",
//     expertise: [["UI/UX", "Web Development", "Mobile App"]],
//     platform: "Web App",
//   },
//   {
//     year: "2025",
//     expertise: [["UI/UX", "Web Development", "Mobile App"]],
//     platform: "Web App",
//   },
// ];

// const CaseStudyHomePage = () => {
//   return (
//     <>
//       <section className="bg-[#F3F7F8] w-full">
//         <div className="flex flex-col max-w-7xl mx-auto">
//           <div className="flex flex-col">
//             <Button
//               variant="outline"
//               className="relative w-1/7 inline-flex items-center gap-2 px-6 py-5 font-semibold text-neutral-800 rounded-full border-dashed
//              bg-gradient-to-r from-[#9CC6FF] to-[#00D0FF] p-[px] group transition-all duration-300"
//             >
//               <span className="flex items-center gap-2 w-full h-full rounded-full bg-white hover:bg-gray-50 transition-all justify-center">
//                 <ArrowLeft className="w-4 h-4 " />
//                 Back To Our Work
//               </span>
//             </Button>

//             <Image
//               src={"/casestudy.png"}
//               alt="casestudy"
//               width={100}
//               height={100}
//               className="w-full h-full rounded-md  object-cover "
//             />
//           </div>

//           <div className="flex flex-row justify-between">
//             <h1 className="justify-start text-neutral-700 text-2xl lg:text-4xl font-semibold leading-8">
//               BillFlow
//             </h1>
//             <Button
//               variant="outline"
//               className="relative w-1/6 inline-flex items-center gap-2 px-6 py-5 font-semibold text-neutral-800 rounded-full
//                          bg-gradient-to-r from-[#9CC6FF] to-[#00D0FF] p-[2px] group transition-all duration-300"
//             >
//               <span className="flex items-center gap-2 w-full h-full rounded-full bg-white hover:bg-gray-50 transition-all justify-center">
//                 View Case Study
//                 <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//               </span>
//             </Button>
//           </div>

//           <div className="w-full mt-8"></div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CaseStudyHomePage;
"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/Components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/Components/ui/button";

const ProjectCard = () => {
  const project = {
    image: "/images/laptop.png",
    title: "BillFlow",
    year: "2025",
    expertise: ["UI/UX", "Web Development", "Mobile App"],
    platform: "Web App",
  };

  return (
    <section className="bg-[#F3F7F8] w-full p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="flex justify-between items-center mb-4">
          <button className="text-sm font-medium border border-[#00D0FF] rounded-full px-4 py-1 border-dashed transition">
            ← Back To Our Work
          </button>
        </div>

        {/* Image */}
        {/* <div className="relative w-full h-[350px] rounded-2xl overflow-hidden mb-6">
          <Image
            src={"/casestudy.png"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div> */}

        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] xl:h-[550px] rounded-2xl overflow-hidden mb-10 mt-10">
          <Image
            src="/casestudy.png"
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Title + Button */}
        <div className="flex justify-between items-center mb-8  mt-10 ">
          <h2 className="text-3xl font-semibold">{project.title}</h2>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 text-sm font-medium border-dashed border-[#00D0FF] border"
          >
            View Project <ArrowUpRight className="ml-2 h-4 w-4 " />
          </Button>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start border-2 border-[#BDE6FF] rounded-2xl p-5 sm:p-6 md:p-8 lg:px-16 gap-6 text-center sm:text-left">
          {/* Year */}
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">YEAR</p>
            <p className="text-lg font-semibold">{project.year}</p>
          </div>

          {/* Expertise */}
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">
              EXPERTISE
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {project.expertise.map((item, i) => (
                <span
                  key={i}
                  className="bg-[#e0f2fe] text-sm font-medium px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="sm:text-right">
            <p className="text-xs font-semibold text-gray-500 mb-1">PLATFORM</p>
            <p className="text-lg font-semibold">{project.platform}</p>
          </div>
        </div>

        {/* overview */}

        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24 px-4 md:px-10 lg:px-0 mt-24 pb-20">
          {/* Overview Section */}
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center ">
            <h1 className="text-zinc-500 text-3xl md:text-4xl lg:text-5xl font-semibold">
              Overview
            </h1>
            <p className="text-black text-base md:text-lg lg:text-lg font-medium leading-8 md:leading-10 max-w-4xl text-justify md:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Product Section */}
          <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
            <h2 className="text-zinc-500 text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
              The Product
            </h2>

            {/* Block 1 */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10">
              {/* Image */}
              <div className="relative w-full md:w-[420px] lg:w-[542px] h-[280px] md:h-[400px] lg:h-[552px] rounded-2xl overflow-hidden">
                <Image
                  src="/product.png"
                  alt="Product"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 md:gap-4 max-w-xl text-left px-2 md:px-0">
                <h3 className="text-black text-xl md:text-2xl font-semibold leading-8 md:leading-10">
                  Hero Section
                </h3>
                <p className="text-black text-base md:text-lg font-medium leading-8 md:leading-10 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* Block 2 (reversed on large) */}
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 md:gap-10">
              {/* Image */}
              <div className="relative w-full md:w-[420px] lg:w-[542px] h-[280px] md:h-[400px] lg:h-[552px] rounded-2xl overflow-hidden">
                <Image
                  src="/product.png"
                  alt="Product"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 md:gap-4 max-w-xl text-left px-2 md:px-0">
                <h3 className="text-black text-xl md:text-2xl font-semibold leading-8 md:leading-10">
                  Hero Section
                </h3>
                <p className="text-black text-base md:text-lg font-medium leading-8 md:leading-10 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
