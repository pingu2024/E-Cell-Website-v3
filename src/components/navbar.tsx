"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-neutral-900 shadow-lg z-50 h-[7vh] border-b border-neutral-800">
      <div className="flex justify-between items-center h-full px-[5%]">
        <div className="logo">
          <Image
            src="/assets/ecell_assets/e-cell_logoanimated_cropped.gif"
            alt="E-Cell Logo"
            width={120}
            height={60}
            className="max-h-[5.5vh] w-auto"
          />
        </div>
        <div className="flex gap-8 items-center">
          <Link
            href="/"
            className="text-gray-200 font-medium hover:text-[#d8a444] transition-colors text-[2.2vh]"
          >
            Home
          </Link>
          <Link
            href="/team"
            className="text-gray-200 font-medium hover:text-[#d8a444] transition-colors text-[2.2vh]"
          >
            Our Team
          </Link>
          <Link
            href="/events"
            className="text-gray-200 font-medium hover:text-[#d8a444] transition-colors text-[2.2vh]"
          >
            Events
          </Link>
          <Link
            href="/incubator"
            className="text-gray-200 font-medium hover:text-[#d8a444] transition-colors text-[2.2vh]"
          >
            Incubator
          </Link>
          <Link
            href="/esummit"
            className="text-gray-200 font-medium hover:text-[#d8a444] transition-colors text-[2.2vh]"
          >
            E-Summit
          </Link>
          <Link
            href="/tedx"
            className="font-semibold text-[1.5rem] text-[#e62b1e] hover:text-[#ff6b5e] transition-colors tracking-tight"
          >
            TED<span className="font-normal text-[1.3rem]">x</span>
          </Link>
          <Link
            href="/contact"
            className="text-gray-200 font-medium hover:text-[#d8a444] transition-colors text-[2.2vh]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
