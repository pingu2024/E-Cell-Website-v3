// app/events/page.tsx
"use client";

import { useState } from "react";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="bg-neutral-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative text-center text-white py-24 px-6 mb-12 bg-cover bg-center bg-[url('/Assets/E-Cell-assets/bits_campus.jpg')]">
        <div className="absolute inset-0 bg-neutral-800/50 dark:bg-neutral-900/60" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Events</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover our entrepreneurial journey through exciting events
          </p>
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

        {/*
          Original Upcoming Events grid commented out
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Startup Weekend"
              date="May 15-17, 2025"
              location="BITS Pilani Dubai Campus"
              description="A 54-hour weekend event where entrepreneurs, developers, and designers come together to share ideas, form teams, and launch startups."
              img="/Assets/test-placeholder-pics/cat-placeholder.jpg"
              action="register"
            />
            <EventCard
              title="Pitch Perfect"
              date="June 5, 2025"
              location="BITS Pilani Dubai Campus"
              description="A pitching competition where startups present their ideas to a panel of judges and investors for feedback and potential funding."
              img="/Assets/test-placeholder-pics/cat-placeholder.jpg"
              action="register"
            />
            <EventCard
              title="Tech Talk Series"
              date="June 20, 2025"
              location="Online Webinar"
              description="A series of talks by industry experts on emerging technologies and their impact on entrepreneurship and business."
              img="/Assets/test-placeholder-pics/cat-placeholder.jpg"
              action="register"
            />
          </div>
        */}

      {/* Past Events */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          Past Events
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <EventCard
            title="Wolves of Wallstreet"
            date="Sept. 18-25, 2025"
            location="BITS Pilani Dubai Campus"
            description="Finance trading simulation event"
            img="/Assets/Events/e-summit.jpg"
            action="view"
          />
        </div>

        {/* Show More */}
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

        {showMore && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <EventCard
              title="Investor Meetup"
              date="Nov 20, 2024"
              location="Downtown Dubai"
              description="A networking event for startups to connect with potential investors and venture capitalists from the UAE ecosystem."
              img="/Assets/Events/investor-meetup.jpg"
              action="view"
            />
            <EventCard
              title="Hackathon"
              date="Oct 15-16, 2024"
              location="BITS Pilani Dubai Campus"
              description="A 24-hour coding marathon where teams compete to build innovative software solutions for given problem statements."
              img="/Assets/Events/hackathon.jpg"
              action="view"
            />
            <EventCard
              title="Startup Fair"
              date="Sep 25, 2024"
              location="BITS Pilani Dubai Campus"
              description="An exhibition where student startups showcase their products and services to the campus community and industry professionals."
              img="/Assets/Events/startup-fair.jpg"
              action="view"
            />
          </div>
        )}
      </section>
    </main>
  );
}

// Reusable Event Card Component
function EventCard({
  title,
  date,
  location,
  description,
  img,
  action,
}: {
  title: string;
  date: string;
  location: string;
  description: string;
  img: string;
  action: "register" | "view";
}) {
  return (
    <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
      <div className="h-52 relative">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
        <p className="text-sm text-gray-400 mb-1 flex items-center">
          <Calendar className="w-4 h-4 text-[#ffd700] mr-2" /> {date}
        </p>
        <p className="text-sm text-gray-400 mb-3 flex items-center">
          <MapPin className="w-4 h-4 text-[#ffd700] mr-2" /> {location}
        </p>
        <p className="text-white-700 mb-4 leading-relaxed">{description}</p>
        {action === "register" ? (
          <Button 
            variant="outline"
            className="bg-neutral-800 border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-black">
            Register Now
          </Button>
        ) : (
          <Button
            variant="outline"
            className="border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-black"
          >
            View Details
          </Button>
        )}
      </div>
    </div>
  );
}