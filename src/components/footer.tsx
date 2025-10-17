import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-[5%] py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li>
                <a href="/tedx" className="font-semibold text-[#e62b1e] hover:text-[#ff6b5e] transition-colors">
                  TED<span className="font-normal">x</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ecell_bpdc/" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-[#e62b1e] transition-all hover:-translate-y-1">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-[#e62b1e] transition-all hover:-translate-y-1">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="mailto:info@ecellbitspilanidubai.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-[#e62b1e] transition-all hover:-translate-y-1">
                <HiMail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/e-cell-bpdc/" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-[#e62b1e] transition-all hover:-translate-y-1">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Find Us</h3>
            <div className="rounded-lg overflow-hidden mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.0645650689953!2d55.419134498569015!3d25.131324837916832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f63ecaf0b7683%3A0x178903db8ef63bc7!2sBirla%20Institute%20of%20Technology%20and%20Science%2C%20Pilani-%20Dubai!5e0!3m2!1sen!2sae!4v1741945771432!5m2!1sen!2sae"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-sm text-gray-400">
              BITS Pilani Dubai Campus, Dubai International Academic City, Dubai, UAE
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-800 text-center">
          <p className="text-sm text-gray-500">Copyright © 2025 Entrepreneurship Cell, BITS Pilani Dubai</p>
        </div>
      </div>
    </footer>
  );
}
