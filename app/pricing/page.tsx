// "use client";

// import TitleButton from "@/Components/SharedComponents/TitleButton";
// import { Check, Rocket, TrendingUp } from "lucide-react";

// const pricingPlans = [
//   {
//     id: 1,
//     icon: "rocket",
//     title: "MVP Development",
//     subtitle: "MVP Development Package",
//     oldPrice: "$6500",
//     newPrice: "$4997",
//     note: "Complete MVP Delivered in just 2 weeks",
//     button: "Book a Free MVP Call",
//     highlight: false,
//     badge: "One Time",
//     featuresTitle: "What's Included:",
//     features: [
//       "Full web or mobile MVP - built to scale",
//       "Modern, reliable tech stack (AI-ready)",
//       "Seamless integrations (payments, auth, email, etc)",
//       "30 days of free post-launch support",
//       "Direct founder-led development & weekly updates",
//       "Transparent progress tracking - no surprises",
//     ],
//   },
//   {
//     id: 2,
//     icon: "grow",
//     title: "Growth Retainer Package",
//     subtitle: "Continuous Growth Package",
//     oldPrice: "$5000/m",
//     newPrice: "$3997/m",
//     note: "No long-term commitment—cancel anytime",
//     button: "Book My MVP Build",
//     highlight: true,
//     featuresTitle: "Monthly Services:",
//     features: [
//       "60 hours of flexible dev time monthly",
//       "Priority feature updates & bug fixes",
//       "Weekly strategy + product calls",
//       "Continuous performance optimization",
//       "Same-day emergency support",
//       "Cancel anytime - zero hassle",
//     ],
//   },
// ];

// const PricingPage = () => {
//   return (
//     <section className="bg-[#F3F7F8] w-full py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col items-center gap-4 mb-12">
//           <div className="flex flex-col items-center gap-4">
//             <TitleButton text="Pricing" />
//             <h2 className="text-neutral-800 text-2xl md:text-3xl font-semibold text-center max-w-3xl">
//               Two ways to launch fast - and keep growing even faster
//             </h2>
//             <p className="text-center text-neutral-600 text-base font-normal leading-relaxed">
//               Choose the perfect package to launch and grow your startup
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
//           {pricingPlans.map((plan) => (
//             <div
//               key={plan.id}
//               className={`relative bg-white rounded-3xl w-full lg:w-[392px] flex flex-col ${
//                 plan.highlight
//                   ? "border-2 border-[#B5DEFF] shadow-[0_0_30px_rgba(181,222,255,0.6)]"
//                   : "border border-gray-200 shadow-sm"
//               }`}
//             >
//               {plan.highlight && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
//                   Most Popular
//                 </div>
//               )}

//               <div className="flex flex-col h-full">
//                 <div className="p-8 flex-grow flex flex-col">
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl">
//                       {plan.icon === "rocket" ? (
//                         <Rocket className="w-6 h-6 text-gray-700" />
//                       ) : (
//                         <TrendingUp className="w-6 h-6 text-gray-700" />
//                       )}
//                     </div>
//                     {plan.badge && (
//                       <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
//                         {plan.badge}
//                       </span>
//                     )}
//                   </div>

//                   <h3 className="text-neutral-800 text-xl font-semibold mb-1">
//                     {plan.title}
//                   </h3>
//                   <p className="text-neutral-600 text-sm font-normal mb-6">
//                     {plan.subtitle}
//                   </p>

//                   <div className="flex items-center gap-3 mb-2">
//                     <p className="text-zinc-400 text-lg font-semibold line-through">
//                       {plan.oldPrice}
//                     </p>
//                     <div className="flex items-baseline gap-1">
//                       <span className="text-zinc-800 text-4xl font-bold">
//                         {plan.newPrice.split("/")[0]}
//                       </span>
//                       {plan.newPrice.includes("/") && (
//                         <>
//                           <span className="text-zinc-800 text-3xl font-light">
//                             /
//                           </span>
//                           <span className="text-zinc-600 text-lg font-normal">
//                             m
//                           </span>
//                         </>
//                       )}
//                     </div>
//                   </div>

//                   <p className="text-neutral-600 text-sm font-normal mb-8">
//                     {plan.note}
//                   </p>

//                   <button
//                     className={`w-full font-semibold py-3.5 px-6 rounded-full transition-all duration-200 ${
//                       plan.highlight
//                         ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md hover:shadow-lg"
//                         : "bg-white text-gray-800 border-2 border-dashed border-gray-300 hover:border-gray-400"
//                     }`}
//                   >
//                     {plan.button}
//                   </button>
//                 </div>

//                 <div className="border-t border-gray-200">
//                   <div className="px-8 py-4 bg-gray-50/50">
//                     <p className="text-black text-base font-semibold">
//                       {plan.featuresTitle}
//                     </p>
//                   </div>

//                   <ul className="space-y-4 px-8 py-6">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                         <p className="text-neutral-600 text-sm font-normal leading-relaxed">
//                           {feature}
//                         </p>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingPage;

"use client";

import TitleButton from "@/Components/SharedComponents/TitleButton";
import { Check, Rocket, TrendingUp } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    icon: "rocket",
    title: "MVP Development",
    subtitle: "MVP Development Package",
    oldPrice: "$6500",
    newPrice: "$4997",
    note: "Complete MVP Delivered in just 2 weeks",
    button: "Book a Free MVP Call",
    highlight: false,
    badge: "One Time",
    featuresTitle: "What's Included:",
    features: [
      "Full web or mobile MVP - built to scale",
      "Modern, reliable tech stack (AI-ready)",
      "Seamless integrations (payments, auth, email, etc)",
      "30 days of free post-launch support",
      "Direct founder-led development & weekly updates",
      "Transparent progress tracking - no surprises",
    ],
  },
  {
    id: 2,
    icon: "grow",
    title: "Growth Retainer Package",
    subtitle: "Continuous Growth Package",
    oldPrice: "$5000/m",
    newPrice: "$3997/m",
    note: "No long-term commitment—cancel anytime",
    button: "Book My MVP Build",
    highlight: true,
    featuresTitle: "Monthly Services:",
    features: [
      "60 hours of flexible dev time monthly",
      "Priority feature updates & bug fixes",
      "Weekly strategy + product calls",
      "Continuous performance optimization",
      "Same-day emergency support",
      "Cancel anytime - zero hassle",
    ],
  },
];

const PricingPage = () => {
  return (
    <section className="bg-[#F3F7F8] w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        {/* <div className="flex flex-col items-center gap-4 mb-12">
          <TitleButton text="Pricing" />
          <h2 className="text-neutral-800 text-2xl md:text-3xl font-semibold text-center max-w-3xl">
            Two ways to launch fast - and keep growing even faster
          </h2>
          <p className="text-center text-neutral-600 text-base font-normal leading-relaxed">
            Choose the perfect package to launch and grow your startup
          </p>
        </div> */}

        <div className="flex flex-col items-center gap-4 mb-12">
          <TitleButton text="Pricing" />
          <h2 className="text-neutral-800 text-xl md:text-3xl font-semibold text-center">
            Two ways to launch fast - and keep growing even faster
          </h2>
          <p className="text-center justify-start text-neutral-600 text-sm  md:text-base font-medium leading-8">
            Choose the perfect package to launch and grow your startup
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-start gap-8 px-0  md:px-40">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl w-full flex flex-col ${
                plan.highlight
                  ? "border-2 border-[#B5DEFF] shadow-[0_0_30px_rgba(181,222,255,0.6)]"
                  : "border border-gray-200 shadow-sm"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-8 md:-top-11  rounded-tl-4xl right-0  bg-gradient-to-r from-[#0660D7] to-[#0D88F6] text-white text-sm font-semibold px-10 py-2  md:px-16 md:py-3  shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}

              {/* Card Top Content */}
              <div className="p-8 flex flex-col justify-between min-h-[420px]  ">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl">
                      {plan.icon === "rocket" ? (
                        <Rocket className="w-6 h-6 text-gray-700" />
                      ) : (
                        <TrendingUp className="w-6 h-6 text-gray-700" />
                      )}
                    </div>
                    {plan.badge && (
                      <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className=" justify-start text-neutral-800 text-base md:text-xl font-semibold leading-8 mb-2">
                    {plan.title}
                  </h3>
                  <p className="justify-start text-neutral-600 text-sm md:text-base font-normal leading-8 mb-2">
                    {plan.subtitle}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center gap-3 mb-2">
                    <p className="ustify-start text-zinc-500 text-xl font-semibold  line-through">
                      {plan.oldPrice}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-zinc-800 text-4xl font-bold">
                        {plan.newPrice.split("/")[0]}
                      </span>
                      {plan.newPrice.includes("/") && (
                        <>
                          <span className="text-zinc-800 text-3xl font-light">
                            /
                          </span>
                          <span className="text-zinc-600 text-lg font-normal">
                            m
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="b ustify-start text-neutral-600 text-base font-medium">
                    {plan.note}
                  </p>
                </div>

                {/* Button */}
                {/* <button
                  className={`w-full md:w-[60%] flex justify-center items-center font-semibold py-3.5 px-6 rounded-full transition-all duration-200 mb-10 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-[#0660D7] to-[#0D88F6]  text-white shadow-md hover:shadow-lg"
                      : "bg-white text-gray-800 border-2 border-dashed border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {plan.button}
                </button> */}
                {/* Centered Button */}
                <div className="flex justify-center">
                  <button
                    className={`w-full md:w-[60%] flex justify-center items-center font-semibold py-3.5 px-6 rounded-full transition-all duration-200 mb-10 ${
                      plan.highlight
                        ? "bg-gradient-to-r from-[#0660D7] to-[#0D88F6] text-white shadow-md hover:shadow-lg"
                        : "bg-white text-gray-800 border-2 border-dashed border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {plan.button}
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className=" rounded-tl-[50px] rounded-tr-[50px] rounded-br-2xl rounded-bl-2xl border-gray-300 border-2 ">
                <div className="px-8 py-4 bg-gray-50/50">
                  <p className=" justify-start text-black text-base font-semibold">
                    {plan.featuresTitle}
                  </p>
                </div>

                <ul className="space-y-4 px-8 py-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="ustify-start text-neutral-600 text-sm font-normal leading-re">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
