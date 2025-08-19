"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-yellow-300 py-14 px-6 sm:px-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        
        {/* About Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Laptop Secure</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Deals in <span className="font-semibold">Used Laptops 💻, Desktops 🖥️, and Accessories</span> in good condition at the <span className="font-semibold">best price</span>.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>
          <p className="flex items-start gap-2 mb-2 text-gray-300">
            <MdLocationOn className="text-yellow-400 text-lg mt-1" />
            116/6, Opposite Tara Chand Petrol Pump,<br />Eidgah Chowk, Shamli Road,<br />Muzaffarnagar (U.P)
          </p>
          <p className="flex items-center gap-2 mb-2 text-gray-300">
            <FaPhoneAlt className="text-yellow-400 text-lg" /> 7417211291
          </p>
          <p className="flex items-center gap-2 mb-2 text-gray-300">
            <FaEnvelope className="text-yellow-400 text-lg" /> laptopsecurels@gmail.com
          </p>
          <a
            href="https://www.instagram.com/laptopsecure?igsh=MTRmYmhqMzdid25oaQ%3D%3D&utm_source=qr"
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition"
          >
            <FaInstagram className="text-yellow-400 text-lg" /> Laptop Secure
          </a>
        </motion.div>

        {/* Credit Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >
          <h3 className="text-lg md:text-xl font-bold mb-4">About</h3>
          <p className="text-gray-300 text-sm">
            Trusted source for high-quality pre-owned laptops and desktops.
          </p>
          <p className="mt-6 text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://devspheresolutions.in"
              target="_blank"
              className="text-yellow-400 hover:underline"
            >
              devspheresolutions.in
            </a>
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-yellow-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Laptop Secure. All rights reserved.
      </div>
    </footer>
  );
}
