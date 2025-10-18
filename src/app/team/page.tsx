// app/team/page.tsx
"use client";

import Image from "next/image";
import MemberCard from '@/components/MemberCard';

export default function Page() {
  const councilMembers = [
    {
      imgSrc: "/assets/council/vaibhav2.png",
      name: "Vaibhav Shrestha",
      position: "President",
      linkedinUrl: "http://www.linkedin.com/in/vaibhav-shrestha-263b3b255",
      instagramUrl: "https://instagram.com/vaibhav_shrestha?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      imgSrc: "/assets/council/Omer_Ali - VP.jpg",
      name: "Mohammed Omer",
      position: "Vice President",
      linkedinUrl: "https://www.linkedin.com/in/omer-ali-a5a0ba237/",
      instagramUrl: "https://www.instagram.com/omerali.js?igsh=MW1tZ2xyam0xMjdkYQ==",
    },
    {
      imgSrc: "/assets/council/Samhita.jpg",
      name: "Samhita Kakumani",
      position: "General Secretary",
      linkedinUrl: "http://www.linkedin.com/in/samhita-kakumani-a725482b0",
      instagramUrl: "https://www.instagram.com/samhita_k9?igsh=MTEzaDJzYjk0MWxzdg%3D%3D&utm_source=qr",
    },
    {
      imgSrc: "/assets/council/Abhiram Ex Officio.jpg",
      name: "Abhiram Smitha",
      position: "Ex-Officio",
      linkedinUrl: "https://www.linkedin.com/in/abhiram-s-smitha-749918185",
      instagramUrl: "https://www.instagram.com/abhe.e.e.e",
    },
    {
      imgSrc: "/assets/council/Kritika Rathi Ex-Officio.jpeg",
      name: "Kritika Rathi",
      position: "Ex-Officio",
      linkedinUrl: "https://www.linkedin.com/in/kritika-rathi-a07660265",
      instagramUrl: "https://www.instagram.com/akkushla_",
    },
    {
      imgSrc: "/assets/council/Aditya Bansal_.jpg",
      name: "Aditya Bansal",
      position: "Deputy Vice President",
      linkedinUrl: "https://www.linkedin.com/in/binarybarrd/",
      instagramUrl: "https://www.instagram.com/binarybarrd2.0/",
    },
    {
      imgSrc: "/assets/council/Manav Arya Singh- Head of Marketing.jpg",
      name: "Manav Arya Singh",
      position: "Head of Marketing",
      linkedinUrl: "https://www.linkedin.com/in/manav-arya-singh-3579b4291?",
      instagramUrl: "https://www.instagram.com/manav_arya_singh",
    },
    {
      imgSrc: "/assets/council/Manavkrishna.jpeg",
      name: "Manavkrishna Manoj",
      position: "Co-Head Marketing",
      linkedinUrl: "https://www.linkedin.com/in/manavkrishna-manoj-1680782b5/",
      instagramUrl: "https://www.instagram.com/Manavkrish141",
    },
    {
      imgSrc: "/assets/council/Trisha Thakkar _ Co-Head Marketing.jpg",
      name: "Trisha Thakkar",
      position: "Co-Head Marketing",
      linkedinUrl: "#",
      instagramUrl: "https://www.instagram.com/thakkar_trishaa",
    },
    {
      imgSrc: "/assets/council/Avishi Aggarwal_Marketing Executive.jpeg",
      name: "Avishi Aggarwal",
      position: "Marketing Executive",
      linkedinUrl: "http://www.linkedin.com/in/avishiagg",
      instagramUrl: "https://www.instagram.com/avishiaggarwal_",
    },
    {
      imgSrc: "/assets/council/Gayathri Gopakumar-Marketing Executive.jpeg",
      name: "Gayathri Gopakumar",
      position: "Marketing Executive",
      linkedinUrl: "https://www.linkedin.com/in/gayathri-gopakumar-0b37b9355/",
      instagramUrl: "https://www.instagram.com/gayaxhriii/",
    },
    {
      imgSrc: "/assets/council/Shrutika Vichare E-Cell Picture.jpg",
      name: "Shrutika Vichare",
      position: "Marketing Executive",
      linkedinUrl: "http://www.linkedin.com/in/shrutika-nilesh-vichare-80aaa6340",
      instagramUrl: "https://www.instagram.com/_sol_starr/#",
    },
    {
      imgSrc: "/assets/council/Veer marketing executive.jpeg",
      name: "Veer Rohilla",
      position: "Marketing Executive",
      linkedinUrl: "#",
      instagramUrl: "https://www.instagram.com/veer_02496/#",
    },
    {
      imgSrc: "/assets/council/Prerana Srikrishnan - Marketing (Updated).jpg",
      name: "Prerana Srikrishnan",
      position: "Marketing Executive",
      linkedinUrl: "https://www.linkedin.com/in/prerana-cs-0934b5366?trk=contact-info",
      instagramUrl: "https://www.instagram.com/_itz_me_prerana__",
    },
    {
      imgSrc: "/assets/council/Adhya Varshney marketing executive.jpg",
      name: "Adhya Varshney",
      position: "Marketing Executive",
      linkedinUrl: "https://www.linkedin.com/in/adhya-varshney-ba210b297?",
      instagramUrl: "https://www.instagram.com/adhya_varshney",
    },
    {
      imgSrc: "/assets/council/Aaryan Gupta - Head of PR and Sponsorship .jpg",
      name: "Aaryan Gupta",
      position: "Head of PR and Sponsorship",
      linkedinUrl: "https://www.linkedin.com/in/aaryan-gupta-4a4b9028a/",
      instagramUrl: "https://www.instagram.com/aaryxn.gupta?igsh=bDBwdHVvMG50dXV5&utm_source=qr",
    },
    {
      imgSrc: "/assets/council/Ananya Kadam Co Head PR.jpeg",
      name: "Ananya Kadam",
      position: "Co-Head PR",
      linkedinUrl: "http://www.linkedin.com/in/ananya-k-8bb617311",
      instagramUrl: "https://www.instagram.com/_.ananya.k._/?hl=en#",
    },
    {
      imgSrc: "/assets/council/Bhoomika Singh-Co Head PR.jpg",
      name: "Bhoomika Singh",
      position: "Co-Head PR",
      linkedinUrl: "#",
      instagramUrl: "https://www.instagram.com/bhoomiikaa.s",
    },
    {
      imgSrc: "/assets/council/Siya, sponsorship cohead.jpeg",
      name: "Siya Attarde",
      position: "Co-Head Sponsorship",
      linkedinUrl: "#",
      instagramUrl: "https://www.instagram.com/siyaa_sta",
    },
    {
      imgSrc: "/assets/council/Anannya Pareek Co-head Sponsorship 2.jpg",
      name: "Anannya Pareek",
      position: "Co-Head Sponsorship",
      linkedinUrl: "https://www.linkedin.com/in/anannya-pareek-828711238/",
      instagramUrl: "https://www.instagram.com/anannya.pareek?igsh=MTMxaGNqMzV6NTlucg%3D%3D&utm_source=qr",
    },
    {
      imgSrc: "/assets/council/Vrinda Gorripati PR & sponsorship executive.jpg",
      name: "Vrinda Gorripati",
      position: "PR and Sponsorship Executive",
      linkedinUrl: "https://www.linkedin.com/in/vrinda-gorripati-22b077234",
      instagramUrl: "https://www.instagram.com/vrindagorripati",
    },
    {
      imgSrc: "/assets/council/Mariah Shania PR Sponsorship executive.jpg",
      name: "Mariah Shania Thadayus",
      position: "PR and Sponsorship Executive",
      linkedinUrl: "https://www.linkedin.com/in/mariah-shania-thadayus-654061310",
      instagramUrl: "https://www.instagram.com/mariah.shania",
    },
    {
      imgSrc: "/assets/council/Isharjot.jpeg",
      name: "Isharjot Singh Paricha",
      position: "Head of Event Planning and Technical",
      linkedinUrl: "https://www.linkedin.com/in/isharjotpasricha",
      instagramUrl: "https://www.instagram.com/isharjotpasricha",
    },
    {
      imgSrc: "/assets/council/Tanay Sinha - Co-Head Event Planning & Management.jpg",
      name: "Tanay Sinha",
      position: "Co-Head Event Planning and Management",
      linkedinUrl: "http://linkedin.com/in/tanay-sinha-236286285",
      instagramUrl: "https://www.instagram.com/tansssseee",
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
      linkedinUrl: "https://www.linkedin.com/in/shauryasrivastava05/",
      instagramUrl: "https://www.instagram.com/simply.shaurya",
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
      linkedinUrl: "https://www.linkedin.com/in/manasi-bagga-877419353",
      instagramUrl: "https://www.instagram.com/manasi71105?igsh=bHdlbzEwbzJodWY1",
    },
    {
      imgSrc: "/assets/council/Devashish Event Planning & Management Executive  .png",
      name: "Devashish Sundaram",
      position: "Event Planning & Management Executive",
      linkedinUrl: "https://www.linkedin.com/in/devashish-sundaram-906b21295/",
      instagramUrl: "https://www.instagram.com/devashish._.14",
    },
    {
      imgSrc: "/assets/council/suhas simha s event planning and management executive .png",
      name: "Suhas Simha S",
      position: "Event Planning & Management Executive",
      linkedinUrl: "https://www.linkedin.com/in/suhas-simha-s-301931325",
      instagramUrl: "https://www.instagram.com/suhas.simha_",
    },
    {
      imgSrc: "/assets/council/Naman Head of creative.jpg",
      name: "Naman Chawla",
      position: "Head of Creative",
      linkedinUrl: "https://www.linkedin.com/in/naman1729/",
      instagramUrl: "https://www.instagram.com/naman._.2005_?igsh=ajR5OTlmbnJ5ejQ4&utm_source=qr",
    },
    {
      imgSrc: "/assets/council/Chaitanya Dahiya. Co-Head Creative.jpg",
      name: "Chaitanya Dahiya",
      position: "Co-Head Creative",
      linkedinUrl: "https://www.linkedin.com/in/chaitanya-dahiya-7a55a4376",
      instagramUrl: "https://www.instagram.com/chaitanya.dahiya",
    },
    {
      imgSrc: "/assets/council/liana pearl dsouza- creative executive_.jpg",
      name: "Liana Pearl D Souza",
      position: "Creative Executive",
      linkedinUrl: "https://www.linkedin.com/in/liana-d-souza-696b69371",
      instagramUrl: "https://www.instagram.com/pearl.li_xna",
    },
    {
      imgSrc: "/assets/council/khyaati rungta_creative executive.jpg",
      name: "Khyaati Rungta",
      position: "Creative Executive",
      linkedinUrl: "http://linkedin.com/in/khyaatirungta-4a2a6021b",
      instagramUrl: "https://www.instagram.com/khyaati_rungta",
    },
    {
      imgSrc: "/assets/council/Brianna Joan -Creative Executive .jpg",
      name: "Brianna Joan Mathew",
      position: "Creative Executive",
      linkedinUrl: "https://ae.linkedin.com/in/brianna-joan-mathew-026b18319",
      instagramUrl: "https://www.instagram.com/bri.xnnx._",
    },
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Team</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Meet the dedicated council behind E-Cell BITS Pilani Dubai
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          Council Members 2025-26
        </h2>
      <div className="council-members flex flex-wrap justify-center gap-8">
        {councilMembers.map((member, index) => (
          <MemberCard
            key={index}
            imgSrc={member.imgSrc.replace('/assets/', '/Assets/')}
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
};
