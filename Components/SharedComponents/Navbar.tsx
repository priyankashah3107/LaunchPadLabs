"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import SharedButton from "./SharedButton";

const navItems = [
  { name: "How It Works", link: "/" },
  { name: "Our Work", link: "/" },
  { name: "Our Process", link: "/" },
  { name: "Founder", link: "/" },
  { name: "Pricing", link: "/" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F3F7F8] w-full py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-[46px] h-[42px]">
            <Image
              src="/icon.png"
              alt="LaunchPad Labs logo"
              width={42}
              height={42}
              className="shadow-md rounded-md "
            />
          </div>
          <h1 className="text-2xl font-semibold flex gap-1">
            <span className="bg-gradient-to-r from-[#2209A7] to-[#03BDF7] bg-clip-text text-transparent font-semibold">
              LaunchPad
            </span>
            <span className="text-stone-900">Labs</span>
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-stone-900 text-base font-semibold hover:text-[#2209A7] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <SharedButton
            label="Book A Call"
            size="small"
            className="cursor-pointer"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-2 pb-4 max-w-6xl mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="block text-stone-900 text-base font-semibold hover:text-[#2209A7] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <SharedButton label="Book A Call" size="small" className="w-full" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
