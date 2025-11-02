"use client";

import Image from "next/image";
import Link from "next/link";
import linkedin from "@/public/Footer/linkedin.png";
import x from "@/public/Footer/x.png";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "MVP Development", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Web Development", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "Consulting", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Our Process", href: "#" },
      { name: "How We Work", href: "#" },
      { name: "Contact", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { name: "Case Studies", href: "#" },
      { name: "Success Stories", href: "#" },
      { name: "MVP Showcase", href: "#" },
      { name: "Testimonials", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-7xl mx-auto px-14 sm:px-1  py-16 grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Left Section */}
        <div className="space-y-5 md:col-span-2">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="LaunchPad logo"
              width={70}
              height={70}
            />
            <h2 className="text-xl font-semibold text-black">
              <span className="bg-gradient-to-r from-[#2209A7] to-[#03BDF7] bg-clip-text text-transparent font-semibold">
                LaunchPad
              </span>{" "}
              Labs
            </h2>
          </div>
          <p className="text-neutral-600 text-sm font-medium leading-8 w-72">
            We build high-quality MVPs to transform your ideas into reality.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-xl shadow-lg hover:border-[#2209A7] transition"
            >
              <Image src={x} alt="X (Twitter)" width={18} height={18} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-xl border shadow-lg hover:border-[#2209A7] transition"
            >
              <Image src={linkedin} alt="LinkedIn" width={18} height={18} />
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-black text-base font-semibold leading-8 mb-2">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 text-sm font-medium leading-8 hover:text-[#2209A7] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
