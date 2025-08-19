"use client";

import { motion } from "framer-motion";
import { FaLaptop, FaHeadset, FaShieldAlt, FaTruck } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-yellow-50 text-gray-900 relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-4"
        >
          Laptop Secure 💻
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl"
        >
          Deals in: Used Laptops 💻 / Desktops 🖥️ (Good Condition) & Accessories at the Best Prices
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/services" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition text-center">
            Browse Laptops
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500 transition text-center">
            Contact Us
          </Link>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Why Choose Laptop Secure?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaLaptop />, title: "Certified Devices", desc: "All laptops are tested & quality checked." },
            { icon: <FaTruck />, title: "Fast Delivery", desc: "Quick shipping with safe packaging." },
            { icon: <FaShieldAlt />, title: "Warranty Support", desc: "Peace of mind with after-sales service." },
            { icon: <FaHeadset />, title: "24/7 Support", desc: "Always here to help with your queries." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-xl text-center"
            >
              <div className="text-4xl text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-yellow-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "20K+", label: "Laptops Sold" },
            { number: "50+", label: "Brands Available" },
            { number: "24/7", label: "Customer Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Laptops */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Featured Laptops
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Dell Latitude i5", price: "₹18,000", img: "/dell.jpeg" },
            { name: "HP EliteBook i7", price: "₹22,000", img: "/HP EliteBook i7.jpeg" },
            { name: "Lenovo ThinkPad", price: "₹20,500", img: "/Lenovo ThinkPad.webp" },
          ].map((laptop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-50 rounded-xl shadow-lg overflow-hidden"
            >
              <img src={laptop.img} alt={laptop.name} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{laptop.name}</h3>
                <p className="text-gray-700 mb-4">{laptop.price}</p>
                <Link href="/contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block">
                  Buy Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-6 bg-yellow-50">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-12">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { name: "Ramesh", review: "Best laptop at low cost, works like new!" },
            { name: "Priya", review: "Laptop Secure is trustworthy and fast." },
            { name: "Amit", review: "Great after-sales service and warranty support." },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="p-6 bg-white rounded-xl shadow"
            >
              <p className="italic text-gray-700">"{review.review}"</p>
              <h4 className="mt-4 font-bold text-blue-600">- {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "Do you provide warranty?", a: "Yes, we provide a limited warranty on selected devices." },
            { q: "Can I exchange my old laptop?", a: "Yes, we offer exchange deals based on your old device condition." },
            { q: "Do you deliver outside the city?", a: "Yes, we deliver across India with safe packaging." },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded"
            >
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 bg-blue-600 text-white text-center px-4">
        <motion.h2
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Looking for Affordable Laptops?
        </motion.h2>
        <p className="mb-6 text-lg">Order now from Laptop Secure</p>
        <Link href="/services" className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition inline-block">
          Shop Now
        </Link>
      </section>
    </main>
  );
}
