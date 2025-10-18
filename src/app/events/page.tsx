// app/events/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, ChevronDown, ChevronUp, Users, Trophy, Building2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function EventsPage() {
  const [showMore, setShowMore] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const eventFilters = ["All", "Workshops", "Competitions", "Networking", "Seminars"];

  const stats = [
    { icon: Users, value: "500+", label: "Students Impacted" },
    { icon: Trophy, value: "50+", label: "Events Hosted" },
    { icon: Building2, value: "20+", label: "Industry Partners" },
  ];

  return (
    <main className="bg-neutral-900 text-gray-100">
      {/* Hero Section - Static with Black Overlay */}
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
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Events</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover our exciting lineup of events where innovation meets action
          </p>
        </div>
      </section>

      {/* Social Proof Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center justify-center p-6 bg-neutral-800/50 rounded-xl border border-neutral-700/50 hover:border-[#ffd700]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffd700]/20">
                  <stat.icon className="w-12 h-12 text-[#ffd700] mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-[#ffd700] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base text-center">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* Upcoming Events section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          Upcoming Events
        </h2>

        <div className="flex justify-center items-center py-16">
          <p className="text-2xl font-bold text-[#ffd700]">Coming Soon..</p>
        </div>
      </section>

      {/* Past Events */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          Past Events
        </h2>

        {/* Event Filters - Moved to Past Events */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {eventFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 ${
                activeFilter === filter
                  ? "bg-[#ffd700] text-black border-[#ffd700] shadow-lg shadow-[#ffd700]/50"
                  : "bg-neutral-800 text-gray-300 border-neutral-700 hover:border-[#ffd700]/50 hover:text-[#ffd700]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <EventCard
            title="Wolves of Wallstreet"
            date="Sept. 18-25, 2025"
            location="BITS Pilani Dubai Campus"
            description={<p>Finance trading event<br/> <br/> <br/> <br/> </p>}
            img="/assets/Events/e-summit.jpg"
            action="view"
            index={0}
          />
          <EventCard
            title="Hackathon"
            date="Oct 15-16, 2024"
            location="BITS Pilani Dubai Campus"
            description={<p>A 24-hour coding marathon where teams compete to build innovative software solutions for given problem statements.<br/> <br/> </p>}
            img="/assets/Events/hackathon.jpg"
            action="view"
            index={1}
          />
          <EventCard
            title="Investor Meetup"
            date="Nov 20, 2024"
            location="Downtown Dubai"
            description={<p>A networking event for startups to connect with potential investors and venture capitalists from the UAE ecosystem. </p>}
            img="/assets/Events/investor-meetup.jpg"
            action="view"
            index={2}
          />  
        </div>

        {showMore && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <EventCard
              title="Investor Meetup"
              date="Nov 20, 2024"
              location="Downtown Dubai"
              description="A networking event for startups to connect with potential investors and venture capitalists from the UAE ecosystem."
              img="/assets/Events/investor-meetup.jpg"
              action="view"
              index={1}
            />
            <EventCard
              title="Hackathon"
              date="Oct 15-16, 2024"
              location="BITS Pilani Dubai Campus"
              description={<p>A 24-hour coding marathon where teams compete to build innovative software solutions for given problem statements. <br/> <br/> </p>}
              img="/assets/Events/hackathon.jpg"
              action="view"
              index={2}
            />
            <EventCard
              title="Startup Fair"
              date="Sep 25, 2024"
              location="BITS Pilani Dubai Campus"
              description="An exhibition where student startups showcase their products and services to the campus community and industry professionals."
              img="/assets/Events/startup-fair.jpg"
              action="view"
              index={3}
            />
          </div>
        )}

        {/* Show More Button - Now positioned after the expanded content */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-black bg-neutral-900"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <>
                Show Less <ChevronUp className="ml-2 h-5 w-5" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </section>
    </main>
  );
}

// Fade In Animation Component
function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Reusable Event Card Component with Glassmorphism
function EventCard({
  title,
  date,
  location,
  description,
  img,
  action,
  index,
}: {
  title: string;
  date: string;
  location: string;
  description: string | React.ReactNode;
  img: string;
  action: "register" | "view";
  index: number;
}) {
  return (
    <FadeInWhenVisible delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.2 }}
        className="group relative bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#ffd700]/30 transition-all duration-200"
      >
        {/* Glassmorphism overlay that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none" />

        <div className="h-52 relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full"
          >
            <Image src={img} alt={title} fill className="object-cover" />
          </motion.div>
        </div>
        
        <div className="p-5 relative z-20">
          <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-[#ffd700] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mb-1 flex items-center">
            <Calendar className="w-4 h-4 text-[#ffd700] mr-2" /> {date}
          </p>
          <p className="text-sm text-gray-400 mb-3 flex items-center">
            <MapPin className="w-4 h-4 text-[#ffd700] mr-2" /> {location}
          </p>
          <div className="text-white-700 mb-4 leading-relaxed">{description}</div>
          {action === "register" ? (
            <Button
              variant="outline"
              className="bg-neutral-800 border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-all duration-200"
            >
              Register Now
            </Button>
          ) : (
            <Button
              variant="outline"
              className="border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-all duration-200"
            >
              View Details
            </Button>
          )}
        </div>
      </motion.div>
    </FadeInWhenVisible>
  );
}