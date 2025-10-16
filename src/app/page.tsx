// app/page.tsx
"use client";

import { useState } from "react";
import { ChevronDown, Users, Coins, Laptop } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [showMoreStories, setShowMoreStories] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-neutral-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center bg-[url('/Assets/test-placeholder-pics/cat-placeholder.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/70 to-black/70" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="max-w-7xl w-full flex items-center justify-start">
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffd700] mb-6">
                E-CELL BITS Pilani, Dubai Campus
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                Welcome to the Entrepreneurship Cell of BITS Pilani Dubai
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <Button
                  onClick={() => scrollToSection("about")}
                  className="bg-[#ffd700] text-black hover:bg-white hover:text-[#ffd700] font-semibold px-8 py-6 text-lg rounded-full transition-all"
                >
                  Know More →
                </Button>
                <Button
                  onClick={() => scrollToSection("incubator")}
                  className="bg-[#ffd700] text-black hover:bg-white hover:text-[#ffd700] font-semibold px-8 py-6 text-lg rounded-full transition-all"
                >
                  Apply to Incubator →
                </Button>
              </div>
              <div className="text-4xl animate-bounce">↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section id="about" className="bg-neutral-900 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#ffd700]">
            Who Are We?
          </h2>
          <hr className="w-20 h-1 bg-[#ffd700] mx-auto mb-8" />

          <div className="text-base md:text-lg leading-relaxed space-y-6">
            <div>
              <p className="font-bold mb-2">
                Entrepreneurship Cell (E-Cell) - BITS Pilani, Dubai Campus
              </p>
              <p>
                E-Cell at BITS Pilani, Dubai Campus, is a dynamic hub for
                aspiring entrepreneurs, fostering innovation and equipping
                students with the skills to develop, manage, and scale business
                ventures. Our mission is to cultivate an entrepreneurial
                mindset by providing hands-on experiences, industry insights,
                and networking opportunities.
              </p>
            </div>

            <p>
              Through workshops, seminars, and speaker series featuring
              industry leaders, E-Cell empowers students to transform ideas
              into impactful ventures. Whether you're exploring product
              development, business strategy, or market analysis, E-Cell offers
              the resources and community to support your entrepreneurial
              journey.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-center mt-16 mb-4 text-[#ffd700]">
            Previous Success Stories
          </h3>
          <hr className="w-20 h-1 bg-[#ffd700] mx-auto mb-8" />
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="px-6 py-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <SuccessStoryCard
              title="TechSolutions"
              description="AI-powered logistics solutions that reduced delivery costs by 35%"
              img="/Assets/test-placeholder-pics/cat-placeholder.jpg"
            />
            <SuccessStoryCard
              title="EcoInnovate"
              description="Sustainable packaging alternatives now used by over 200 businesses in UAE"
              img="/Assets/test-placeholder-pics/cat-placeholder.jpg"
            />
            <SuccessStoryCard
              title="FinTech Solutions"
              description="Revolutionizing payment systems for small businesses across the MENA region"
              img="/Assets/test-placeholder-pics/cat-placeholder.jpg"
            />
          </div>

          {/* Hidden Stories - Using transition and opacity instead of animate-in */}
          {showMoreStories && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8 transition-opacity duration-500 opacity-100">
              <SuccessStoryCard
                title="HealthTech Innovations"
                description="Digital healthcare platform connecting patients with specialists across the Middle East"
                img="/Assets/test-placeholder-pics/cat-placeholder.jpg"
              />
              <SuccessStoryCard
                title="Smart Education"
                description="E-learning platform that has helped over 10,000 students access quality education"
                img="/Assets/test-placeholder-pics/cat-placeholder.jpg"
              />
              <SuccessStoryCard
                title="Urban Farming"
                description="Innovative vertical farming technology reducing water usage by 90% in desert regions"
                img="/Assets/startups/startup6.jpg"
              />
              <SuccessStoryCard
                title="CleanEnergy"
                description="Solar solution provider that has installed over 5,000 units across residential communities"
                img="/Assets/startups/startup7.jpg"
              />
              <SuccessStoryCard
                title="Travel Tech"
                description="AI-powered travel platform that has transformed tourism experiences in the region"
                img="/Assets/startups/startup8.jpg"
              />
              <SuccessStoryCard
                title="Retail Revolution"
                description="Omnichannel retail solution adopted by major shopping centers in Dubai and Abu Dhabi"
                img="/Assets/startups/startup9.jpg"
              />
            </div>
          )}

          {/* View More Button */}
          <div id="incubator" className="text-center mt-8">
            <Button
              onClick={() => {
                setShowMoreStories(!showMoreStories);
                if (showMoreStories) {
                  scrollToSection("about");
                }
              }}
              variant="outline"
              className="border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-black bg-neutral-900 px-6 py-3"
            >
              {showMoreStories ? "Show Less" : "View More Success Stories"}
              <ChevronDown
                className={`ml-2 h-5 w-5 transition-transform ${
                  showMoreStories ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        </div>
      </section>

      {/* Incubator Section */}
      <section className="px-6 py-16 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/Assets/test-placeholder-pics/cat-placeholder.jpg"
                  alt="BITS Pilani Dubai Incubator"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-left">
              <h3 className="text-3xl font-bold text-[#ffd700] mb-4">
                Turning Ideas Into Reality
              </h3>
              <p className="text-base md:text-lg leading-relaxed mb-8">
                The BITS Pilani Dubai Incubator provides a nurturing
                environment for student entrepreneurs to transform innovative
                ideas into viable businesses. With dedicated mentoring, seed
                funding opportunities, and state-of-the-art facilities, we give
                startups the foundation they need to thrive.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <FeatureCard
                  icon={<Users className="text-[#ffd700]" size={32} />}
                  title="Expert Mentorship"
                  description="Access to industry experts and successful entrepreneurs"
                />
                <FeatureCard
                  icon={<Coins className="text-[#ffd700]" size={32} />}
                  title="Funding Support"
                  description="Connect with angel investors and venture capitalists"
                />
                <FeatureCard
                  icon={<Laptop className="text-[#ffd700]" size={32} />}
                  title="Workspace"
                  description="Modern collaborative spaces with necessary resources"
                />
              </div>

              {/* Application Status */}
              <div className="mt-6">
                <p className="font-semibold mb-3 text-gray-300">
                  Applications are currently closed in this cycle.
                </p>
                <Button
                  disabled
                  className="bg-neutral-700 text-gray-400 cursor-not-allowed opacity-50 px-8 py-3 rounded-full"
                >
                  Apply to the Incubator
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In Partnership With Section */}
      <section className="px-6 py-16 bg-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#ffd700] mb-4">
            In Partnership With
          </h2>
          <hr className="w-20 h-1 bg-[#ffd700] mx-auto mb-12" />
          <div className="flex justify-center">
            <Image
              src="/Assets/E-Cell-assets/Hi Incubator.svg"
              alt="Hi Incubator Logo"
              width={400}
              height={200}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

// Success Story Card Component
function SuccessStoryCard({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) {
  return (
    <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="h-48 relative">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3 text-gray-100">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-neutral-800 p-5 rounded-lg text-center hover:bg-neutral-700 transition-colors">
      <div className="flex justify-center mb-3">{icon}</div>
      <h4 className="font-semibold mb-2 text-gray-100">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

