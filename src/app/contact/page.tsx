// app/contact/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    newsletter: false,
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you within 24-48 hours.");
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const faqData = [
    {
      question: "How can students join the E-Cell team?",
      answer:
        "We recruit new members at the beginning of each semester. Watch for announcements on our social media channels or visit the \"Join Us\" page for application details.",
    },
    {
      question: "Can non-BITS students participate in E-Cell events?",
      answer:
        "Yes, most of our events are open to students from all universities. However, some competitions may have specific eligibility criteria, which will be mentioned in the event details.",
    },
    {
      question: "How can I get mentorship for my startup idea?",
      answer:
        'Fill out our contact form selecting "Mentorship Opportunity" or email us at incubator@ecellbitspilanidubai.com with details about your idea and the specific guidance you\'re seeking.',
    },
    {
      question: "Does E-Cell provide funding for student startups?",
      answer:
        "While we don't directly fund startups, we connect promising ventures with potential investors and organize pitch competitions where you can win seed funding.",
    },
    {
      question: "How can my company sponsor an E-Cell event?",
      answer:
        'Please contact our partnerships team at partnerships@ecellbitspilanidubai.com with your proposal or use our contact form selecting "Sponsorship Inquiry".',
    },
    {
      question: "Can E-Cell organize workshops for specific student groups?",
      answer:
        "Yes, we can arrange customized workshops on entrepreneurship, innovation, and business skills. Send your request via the contact form or email events@ecellbitspilanidubai.com.",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We're here to help you with any questions on your journey towards entrepreneurship and
            innovation
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form Section */}
          <div className="bg-neutral-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-white text-center relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:border-[#ffd700] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:border-[#ffd700] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:border-[#ffd700] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block mb-2 font-medium">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:border-[#ffd700] transition-colors"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="event-partnership">Event Partnership</option>
                  <option value="mentorship">Mentorship Opportunity</option>
                  <option value="startup-idea">Startup Idea Submission</option>
                  <option value="sponsorship">Sponsorship Inquiry</option>
                  <option value="workshop">Workshop/Seminar Request</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:border-[#ffd700] transition-colors resize-none"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-4 h-4 mr-3 accent-[#ffd700]"
                />
                <label htmlFor="newsletter" className="cursor-pointer">
                  Subscribe to our newsletter
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#ffd700] text-black hover:bg-[#e6c200] font-semibold py-3"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-neutral-700">
              <p className="text-sm text-gray-400 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[#ffd700]" />
                We typically respond within 24-48 hours on weekdays.
              </p>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            {/* Location Info */}
            <div className="bg-neutral-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-white text-center relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                Visit Us
              </h2>

              <div className="mb-6 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.0645650689953!2d55.419134498569015!3d25.131324837916832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f63ecaf0b7683%3A0x178903db8ef63bc7!2sBirla%20Institute%20of%20Technology%20and%20Science%2C%20Pilani-%20Dubai!5e0!3m2!1sen!2sae!4v1741945771432!5m2!1sen!2sae"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-100">
                  E-Cell Office
                </h3>
                <p className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-[#ffd700] flex-shrink-0" />
                  BITS Pilani Dubai Campus, Dubai International Academic City,
                  Dubai, UAE
                </p>

                <div className="mt-12">
                  <h4 className="text-lg font-semibold mb-6 text-gray-100">
                    Directions:
                  </h4>
                  <ul className="space-y-4 text-gray-400 text-sm">
                    <li>
                      • From Main Campus Entrance: Head to Building 1, 1st Floor,
                      Room E-123
                    </li>
                    <li>
                      • From Library: Exit towards Building 1, take the stairs to
                      1st floor
                    </li>
                    <li>• From Academic Block: Cross the courtyard to Building 1</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h4 className="text-lg font-semibold mb-6 text-gray-100">
                    Office Hours:
                  </h4>
                  <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-[#ffd700]" />
                      Monday - Thursday: 10:00 AM - 4:00 PM
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-[#ffd700]" />
                      Friday: 10:00 AM - 1:00 PM
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-[#ffd700]" />
                      Weekend: By appointment only
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
        Alternative Contact Section
        <div className="mt-8 bg-neutral-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-white relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a
                  href="mailto:info@ecellbitspilanidubai.com"
                  className="flex items-center text-gray-300 hover:text-[#ffd700] transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-[#ffd700]" />
                  info@ecellbitspilanidubai.com
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[#ffd700] transition-colors"
                >
                  <Instagram className="w-5 h-5 mr-3 text-[#ffd700]" />
                  @ecell_bitsdubai
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[#ffd700] transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-3 text-[#ffd700]" />
                  E-Cell BITS Pilani Dubai
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[#ffd700] transition-colors"
                >
                  <Facebook className="w-5 h-5 mr-3 text-[#ffd700]" />
                  ECellBITSPilaniDubai
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[#ffd700] transition-colors"
                >
                  <Twitter className="w-5 h-5 mr-3 text-[#ffd700]" />
                  @ecell_bpdc
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="text-gray-400">
                  We respond to messages within 24 hours on our social platforms
                </p>
              </div>
            </div>
          </div>
        </div>
        */}

        {/* FAQ Section */}
        <div className="mt-12 bg-neutral-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10 relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-b border-neutral-700 last:border-b-0"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-4 text-left hover:text-[#ffd700] transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <span className="text-[#ffd700] flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-48 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 bg-neutral-800 rounded-xl p-8 shadow-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white relative pb-4 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#ffd700] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates on events,
              workshops, and entrepreneurial opportunities.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-md focus:outline-none focus:border-[#ffd700] transition-colors"
              />
              <Button
                type="submit"
                className="bg-neutral-900 hover:bg-black text-white font-semibold px-6"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
