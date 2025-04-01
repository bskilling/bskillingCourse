import Link from 'next/link';
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0D1B2A] to-[#2E1A47] text-white py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left - Branding & Vision */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">bSkilling</h2>
          <p className="mt-3 text-gray-300">
            Empowering professionals with cutting-edge knowledge & real-world
            skills.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
          <Link href="/about" className="hover:text-[#F8B400] transition">
            About Us
          </Link>
          <Link href="/courses" className="hover:text-[#F8B400] transition">
            Courses
          </Link>
          <Link href="/faq" className="hover:text-[#F8B400] transition">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-[#F8B400] transition">
            Contact
          </Link>
        </div>

        {/* Right - Newsletter & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Stay Updated</h3>
          <p className="text-gray-300 mt-2">
            Subscribe to get the latest updates and offers.
          </p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
            />
            <button className="bg-[#F8B400] px-4 py-2 rounded-r-lg hover:bg-[#FF6B35] transition">
              <FaArrowRight />
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="text-gray-300 hover:text-[#F8B400] transition"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#F8B400] transition"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#F8B400] transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#F8B400] transition"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} NexaCollab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
