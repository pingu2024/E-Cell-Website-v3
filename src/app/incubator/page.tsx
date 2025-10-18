// app/incubator/page.tsx
"use client";

import Image from "next/image";

export default function IncubatorPage() {
  return (
    <main className="bg-neutral-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative text-center text-white py-16 px-6 mb-12 overflow-hidden h-[400px]">
        {/* Static Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/ecell_assets/bits_campus.jpg"
            alt="BITS Campus"
            fill
            className="object-cover object-[center_30%]"
            priority
          />
        </div>
        
        {/* Subtle Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Incubator</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Nurturing innovative ideas and entrepreneurial ventures
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          Coming Soon
        </h2>
        <div className="flex justify-center items-center py-16">
          <p className="text-2xl font-bold text-[#ffd700]">Stay tuned for exciting updates!</p>
        </div>
      </section>
    </main>
  );
}
