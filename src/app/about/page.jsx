"use client";

import { motion } from "framer-motion";
import { FaLaptop, FaDesktop, FaHeadset, FaShieldAlt, FaTools } from "react-icons/fa";

export const metadata = {
	title: "About Us - Laptop Secure",
	description: "Learn about Laptop Secure - your trusted destination for quality used laptops, desktops, and computer accessories. We provide reliable, secure, and affordable tech solutions.",
	keywords: [
		"about laptop secure",
		"laptop store",
		"computer store",
		"used laptop dealer",
		"refurbished laptop seller",
		"computer accessories store",
		"laptop warranty",
		"customer support"
	],
	openGraph: {
		title: "About Us - Laptop Secure",
		description: "Learn about Laptop Secure - your trusted destination for quality used laptops, desktops, and computer accessories.",
		type: "website",
		url: "https://laptopsecure.com/about",
	},
	twitter: {
		title: "About Us - Laptop Secure",
		description: "Your trusted destination for quality used laptops, desktops, and computer accessories.",
	},
	alternates: {
		canonical: "/about",
	},
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-yellow-50 text-gray-900 min-h-screen px-6 py-12">
      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-blue-600 text-center mb-10"
      >
        About Us
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12"
      >
        <strong>Laptop Secure</strong> is your trusted destination for{" "}
        <span className="font-semibold text-blue-600">Used Laptops 💻, Desktops 🖥️, and Accessories</span> 
        in excellent condition at the best prices.  
        We aim to provide reliable, secure, and affordable tech solutions for everyone.
      </motion.p>

      {/* Icon Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <FaLaptop className="text-5xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Laptops</h3>
          <p>Pre-owned laptops in excellent condition, tested for performance.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <FaDesktop className="text-5xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Desktops & PCs</h3>
          <p>Affordable desktop systems, perfect for home and office use.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <FaHeadset className="text-5xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
          <p>Friendly service and guidance to help you choose the right device.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <FaShieldAlt className="text-5xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure & Trusted</h3>
          <p>Every device is checked for reliability and guaranteed safe to use.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <FaTools className="text-5xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Accessories</h3>
          <p>All necessary accessories and add-ons available at the best price.</p>
        </motion.div>
      </div>
    </main>
  );
}
