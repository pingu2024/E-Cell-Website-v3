// app/team/page.tsx
"use client";

import MemberCard from '@/components/MemberCard';

export default function Page() {
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
    <main className="bg-neutral-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative text-center text-white py-24 px-6 mb-12 bg-cover bg-center bg-[url('/Assets/E-Cell-assets/bits_campus.jpg')]">
        <div className="absolute inset-0 bg-neutral-800/50 dark:bg-neutral-900/60" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Meet Our E-Cell Council</h1>
          <p className="text-lg max-w-2xl mx-auto">
            The Entrepreneurship Cell at BITS Pilani Dubai Campus is led by a dedicated team of passionate students committed to fostering innovation and entrepreneurship.
          </p>
        </div>
      </section>

      {/* Council Members Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          Council Members 2025-26
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {councilMembers.map((member, index) => (
            <MemberCard
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              position={member.position}
              linkedinUrl={member.linkedinUrl}
              instagramUrl={member.instagramUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
