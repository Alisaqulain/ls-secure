"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), { ssr: false });
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100 flex flex-col items-center py-16 px-6">
      {/* Animated Heading */}
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-blue-800 mb-6"
      >
        Contact Us
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-700 mb-12 text-center max-w-2xl"
      >
        Have questions or want to get in touch? Reach us anytime through call,
        WhatsApp, or email. For Muzaffarnagar & nearby areas, we offer laptop repairing and old laptop purchase.
      </motion.p>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl w-full">
        {/* Contact Details */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg p-6 rounded-2xl space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Get in Touch</h2>
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600" size={28} />
            <p className="text-gray-800">+91 7417211291</p>
          </div>
          <div className="flex items-center space-x-4">
            <MessageCircle className="text-green-600" size={28} />
            <a
              href="https://wa.me/917417211291"
              target="_blank"
              className="text-gray-800 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-red-500" size={28} />
            <a
              href="mailto:laptopsecurels@gmail.com"
              className="text-gray-800 hover:underline"
            >
              laptopsecurels@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Instagram className="text-pink-600" size={28} />
            <a
              href="https://www.instagram.com/laptopsecure?igsh=MTRmYmhqMzdid25oaQ%3D%3D&utm_source=qr"
              target="_blank"
              className="text-gray-800 hover:underline"
            >
              @laptopsecure
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-yellow-600" size={28} />
            <p className="text-gray-800">
              Tara Chand Petrol Pump, Muzaffarnagar, Uttar Pradesh 251001
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg p-6 rounded-2xl flex flex-col space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Send Us a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 w-full sm:w-auto"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Map Section */}
      <div className="max-w-5xl w-full mt-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Our Location</h2>
        <Map query="Tara Chand Petrol Pump, Muzaffarnagar, Uttar Pradesh 251001" height={420} />
      </div>
    </div>
  );
}
