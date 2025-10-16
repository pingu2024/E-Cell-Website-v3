import React from "react";
import Image from "next/image";
import { Hero } from "@/components/tedx/Hero";
import { Section } from "@/components/tedx/Section";
import MemberCard from "@/components/MemberCard";
import { Instagram, Linkedin } from "lucide-react";

export default function TedxPage() {
  const councilMembers = [
    {
      imgSrc: "/assets/council/vaibhav2.png",
      name: "Vaibhav Shrestha",
      position: "President",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Omer_Ali - VP.jpg",
      name: "Mohammed Omer",
      position: "Vice President",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Samhita.jpg",
      name: "Samhita Kakumani",
      position: "General Secretary",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Abhiram Ex Officio.jpg",
      name: "Abhiram Smitha",
      position: "Ex-Officio",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Kritika Rathi Ex-Officio.jpeg",
      name: "Kritika Rathi",
      position: "Ex-Officio",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Aditya Bansal_.jpg",
      name: "Aditya Bansal",
      position: "Deputy Vice President",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Manav Arya Singh- Head of Marketing.jpg",
      name: "Manav Arya Singh",
      position: "Head of Marketing",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Manavkrishna.jpeg",
      name: "Manavkrishna Manoj",
      position: "Co-Head Marketing",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Trisha Thakkar _ Co-Head Marketing.jpg",
      name: "Trisha Thakkar",
      position: "Co-Head Marketing",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Avishi Aggarwal_Marketing Executive.jpeg",
      name: "Avishi Aggarwal",
      position: "Marketing Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Gayathri Gopakumar-Marketing Executive.jpeg",
      name: "Gayathri Gopakumar",
      position: "Marketing Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Shrutika Vichare E-Cell Picture.jpg",
      name: "Shrutika Vichare",
      position: "Marketing Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Veer marketing executive.jpeg",
      name: "Veer Rohilla",
      position: "Marketing Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Prerana Srikrishnan - Marketing (Updated).jpg",
      name: "Prerana Srikrishnan",
      position: "Marketing Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Adhya Varshney marketing executive.jpg",
      name: "Adhya Varshney",
      position: "Marketing Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Aaryan Gupta - Head of PR and Sponsorship .jpg",
      name: "Aaryan Gupta",
      position: "Head of PR and Sponsorship",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Ananya Kadam Co Head PR.jpeg",
      name: "Ananya Kadam",
      position: "Co-Head PR",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Bhoomika Singh-Co Head PR.jpg",
      name: "Bhoomika Singh",
      position: "Co-Head PR",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Siya, sponsorship cohead.jpeg",
      name: "Siya Attarde",
      position: "Co-Head Sponsorship",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Anannya Pareek Co-head Sponsorship 2.jpg",
      name: "Anannya Pareek",
      position: "Co-Head Sponsorship",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Vrinda Gorripati PR & sponsorship executive.jpg",
      name: "Vrinda Gorripati",
      position: "PR and Sponsorship Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Mariah Shania PR Sponsorship executive.jpg",
      name: "Mariah Shania Thadayus",
      position: "PR and Sponsorship Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Isharjot.jpeg",
      name: "Isharjot Singh Paricha",
      position: "Head of Event Planning and Technical",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Tanay Sinha - Co-Head Event Planning & Management.jpg",
      name: "Tanay Sinha",
      position: "Co-Head Event Planning and Management",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Harshwardhan Mohadikar Co Head Event Management.jpg",
      name: "Harshwardhan Mohadikar",
      position: "Co-Head Event Planning and Management",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Shaurya Srivastava - Co Head Technical.JPG",
      name: "Shaurya Srivastava",
      position: "Co-Head Technical",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Raghubir_Prasad_Technical.JPG",
      name: "Raghubir Prasad",
      position: "Co-Head Technical",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/manasi-bagga.jpg",
      name: "Manasi Bagga",
      position: "Event Planning & Management Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Devashish Event Planning & Management Executive  .png",
      name: "Devashish Sundaram",
      position: "Event Planning & Management Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/suhas simha s event planning and management executive .png",
      name: "Suhas Simha S",
      position: "Event Planning & Management Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Naman Head of creative.jpg",
      name: "Naman Chawla",
      position: "Head of Creative",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Chaitanya Dahiya. Co-Head Creative.jpg",
      name: "Chaitanya Dahiya",
      position: "Co-Head Creative",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/liana pearl dsouza- creative executive_.jpg",
      name: "Liana Pearl D Souza",
      position: "Creative Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/khyaati rungta_creative executive.jpg",
      name: "Khyaati Rungta",
      position: "Creative Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      imgSrc: "/assets/council/Brianna Joan -Creative Executive .jpg",
      name: "Brianna Joan Mathew",
      position: "Creative Executive",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col text-black">
      <Hero />

      <Section
        id="about"
        bg="light"
        title={
          <>
            What is <span className="text-[#EB0028]">TEDx</span>?
          </>
        }
      >
        <div className="flex items-center gap-12 max-lg:flex-col">
          <div className="flex-1">
            <p className="mb-6">
              TEDx is a program of local, self-organized events that bring people together to share a TED-like
              experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and
              connection in a small group.
            </p>
            <p>
              These self-organized events are branded TEDx, where x = independently organized TED event. The TED
              Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized
              (subject to certain rules and regulations).
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/tedx/logo-black.png"
              alt="TEDx Event"
              width={800}
              height={450}
              className="w-full rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </Section>

      <Section
        title={
          <>
            <span className="text-[#EB0028]">TEDx</span> <span>BITS-Pilani Dubai</span>
          </>
        }
        description="TEDxBITSPILANI is an independently organized TED event operated under license from TED. Our goal is to bring together the brightest minds from our campus and beyond to share ideas that matter, spark conversation, and build community."
      >
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "💡", title: "Innovation", desc: "Encouraging new ideas and perspectives" },
            { icon: "💬", title: "Dialogue", desc: "Fostering meaningful conversations" },
            { icon: "👥", title: "Community", desc: "Building connections across disciplines" },
            { icon: "🌍", title: "Impact", desc: "Creating change through ideas" },
          ].map((v) => (
            <div key={v.title} className="rounded-md p-8 text-center transition-all hover:-translate-y-1 hover:shadow-[var(--shadow)]">
              <div className="mb-3 text-3xl">{v.icon}</div>
              <h3 className="mb-1 text-lg font-semibold">{v.title}</h3>
              <p className="text-sm text-zinc-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="events" bg="light" title={<><span className="text-[#EB0028]">Upcoming</span> Events</>}>
        <div className="mb-8 overflow-hidden rounded-md bg-white shadow-sm transition hover:shadow-md">
          <div className="flex max-lg:flex-col">
            <div className="flex min-w-[100px] flex-col items-center justify-center bg-[#EB0028] px-6 py-4 text-white">
              <span className="text-sm font-medium uppercase">APR</span>
              <span className="text-3xl font-bold leading-none">15</span>
              <span className="text-sm">2025</span>
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-xl font-semibold">TEDxBITSPILANI 2025: Reimagine</h3>
              <p className="mt-1 text-sm text-zinc-500">BITS Pilani Dubai Campus Auditorium</p>
              <p className="mt-2 text-zinc-700">
                Join us for a day of inspiring talks, engaging performances, and meaningful connections as we explore
                the theme &quot;Reimagine&quot; - challenging our perspectives and envisioning new possibilities.
              </p>
              <a href="#" className="mt-4 inline-block rounded bg-zinc-900 px-4 py-2 text-white transition hover:bg-[#EB0028]">Register Now</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            { month: "MAR", day: "28", title: "Speaker Workshop", location: "Innovation Lab" },
            { month: "MAR", day: "30", title: "TEDx Watch Party", location: "Student Center" },
          ].map((e) => (
            <div key={e.title} className="overflow-hidden rounded-md bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex">
                <div className="flex min-w-[84px] flex-col items-center justify-center bg-[#EB0028] px-4 py-4 text-white">
                  <span className="text-xs font-medium uppercase">{e.month}</span>
                  <span className="text-2xl font-bold leading-none">{e.day}</span>
                </div>
                <div className="flex-1 p-5">
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{e.location}</p>
                  <a href="#" className="mt-3 inline-block rounded bg-zinc-900 px-3 py-1.5 text-white transition hover:bg-[#EB0028]">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={<><span className="text-[#EB0028]">Past</span> Events</>}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative h-[250px] overflow-hidden rounded-md">
              <Image src={`https://via.placeholder.com/400/320?text=Past+${i}`} alt="Past event" width={400} height={320} className="h-full w-full object-cover transition group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 translate-y-24 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transition group-hover:translate-y-0">
                <h3 className="text-lg font-semibold">TEDx BITSPILANI 2017</h3>
                <p className="text-sm opacity-80">Breakthrough</p>
                <a href="#" className="mt-3 inline-block border border-white px-3 py-1 text-sm transition hover:bg-white hover:text-black">View Talks</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={<><span className="text-[#EB0028]">Featured</span> Speakers</>} bg="light">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="overflow-hidden rounded-md bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-[250px] overflow-hidden">
                <Image src="https://via.placeholder.com/400/320" alt="Speaker" width={400} height={320} className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Speaker Name</h3>
                <p className="text-sm text-[#EB0028]">Title</p>
                <p className="mt-1 text-sm italic text-zinc-600">Talk Title</p>
                <div className="mt-3 flex gap-3 text-zinc-500">
                  <a href="#" className="transition hover:text-[#EB0028]">LinkedIn</a>
                  <a href="#" className="transition hover:text-[#EB0028]">Twitter</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-block rounded bg-zinc-900 px-4 py-2 text-white transition hover:bg-[#EB0028]">View All Speakers</a>
        </div>
      </Section>

      <Section bg="dark">
        <div className="rounded-md bg-[#EB0028] px-6 py-12 text-center text-white">
          <h2 className="mb-2 text-3xl font-bold">Want to speak at TEDxBITSPILANI?</h2>
          <p className="mx-auto mb-6 max-w-[700px] text-lg opacity-90">
            We&apos;re always looking for innovative ideas and passionate speakers. Share your story with us.
          </p>
          <a href="#" className="inline-block rounded bg-white px-5 py-2 font-semibold text-[#EB0028] transition hover:bg-zinc-900 hover:text-white">Apply to Speak</a>
        </div>
      </Section>

      <Section title={<><span className="text-[#EB0028]">Our</span> Sponsors</>}>
        <p className="section-description mx-auto mb-8 max-w-[800px] text-center text-lg text-zinc-500">
          Thanks to our sponsors for making TEDxBITSPILANI possible.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center justify-center rounded-md p-6 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
              <Image src="https://via.placeholder.com/400/320" alt="Sponsor" width={400} height={320} className="h-auto max-h-[100px] w-auto max-w-full" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-block rounded bg-zinc-900 px-4 py-2 text-white transition hover:bg-[#EB0028]">Become a Sponsor</a>
        </div>
      </Section>

      <Section title={<><span className="text-[#EB0028]">TEDx</span> Committee</>} bg="light">
        <div className="mx-auto max-w-[1200px] text-center">
          <div className="mb-10">
            <p className="mx-auto max-w-[800px] text-zinc-600">
              Meet the team behind TEDxBITSPILANI. Connect with us on social media and follow our journey.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {councilMembers.map((member, index) => (
              <div key={index} className="w-72 rounded-xl shadow-[0_0_18px_0_rgba(235,0,40,0.35)] hover:shadow-[0_0_26px_2px_rgba(235,0,40,0.55)] transition-[transform,box-shadow] hover:scale-105 border-4 border-red-500 overflow-hidden" style={{backgroundColor: 'white'}}>
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                  width={288}
                  height={288}
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-black">{member.name}</h3>
                  <p className="text-red-500 font-medium">{member.position}</p>
                  <div className="flex justify-center gap-3 mt-2">
                    {member.linkedinUrl && (
                      <a href={member.linkedinUrl} className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-200 hover:scale-125 hover:bg-[#0077b5] hover:text-white transition-transform" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 text-black" aria-hidden="true" />
                      </a>
                    )}
                    {member.instagramUrl && (
                      <a href={member.instagramUrl} className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-200 hover:scale-125 hover:bg-gradient-to-r from-[#f09433] to-[#bc1888] hover:text-white transition-transform" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4 text-black" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="light" title={<><span className="text-[#EB0028]">Stay</span> Connected</>}>
        <p className="mx-auto mb-8 max-w-[600px] text-center text-lg">
          Subscribe to our newsletter for updates on upcoming events and speaker announcements.
        </p>
        <form className="mx-auto flex max-w-[600px] gap-0 max-sm:flex-col">
          <input type="email" placeholder="Your Email Address" required className="flex-1 rounded-l border border-zinc-200 p-4 max-sm:rounded max-sm:border-b max-sm:border-r-0" />
          <button type="submit" className="rounded-r bg-[#EB0028] px-6 text-white transition hover:bg-zinc-900 max-sm:rounded max-sm:px-4">Subscribe</button>
        </form>
      </Section>

      <footer className="bg-[#222] px-[5%] py-8 text-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-8">
          <div>
            <h3 className="mb-4 text-lg">Navigate</h3>
            <ul className="space-y-2 text-zinc-300">
              {['Home','Events','Incubator','Our Team','Join Us','Contact Us','TEDx'].map((l) => (
                <li key={l}><a href="#" className="transition hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg">Connect With Us</h3>
            <div className="flex gap-3">
              {['IG','YT','Email','IN'].map((s) => (
                <a key={s} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#333] transition hover:-translate-y-[3px] hover:bg-[#e62b1e]">{s}</a>
              ))}
            </div>
          </div>
          <div className="max-w-sm">
            <h3 className="mb-4 text-lg">Find Us</h3>
            <div className="overflow-hidden rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.0645650689953!2d55.419134498569015!3d25.131324837916832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f63ecaf0b7683%3A0x178903db8ef63bc7!2sBirla%20Institute%20of%20Technology%20and%20Science%2C%20Pilani-%20Dubai!5e0!3m2!1sen!2sae!4v1741945771432!5m2!1sen!2sae"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-sm text-zinc-400">BITS Pilani Dubai Campus, Dubai International Academic City, Dubai, UAE</p>
          </div>
        </div>
        <div className="border-t border-[#444] pt-4 text-center text-sm text-[#999]">Entrepreneurship Cell BITS Pilani Dubai</div>
      </footer>
    </div>
  );
}


