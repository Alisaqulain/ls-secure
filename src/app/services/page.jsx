"use client";
import { motion } from "framer-motion";
import {
  Laptop,
  Monitor,
  Cpu,
  HardDrive,
  Headphones,
  Wrench,
} from "lucide-react";

export const metadata = {
	title: "Our Services - Laptop Secure",
	description: "Explore our comprehensive services: Used Laptops, Desktops, Computer Accessories, Parts, Storage Devices, and Repair Services. Best prices with warranty.",
	keywords: [
		"laptop services",
		"used laptop services",
		"desktop services",
		"computer accessories",
		"laptop repair services",
		"computer parts",
		"storage devices",
		"laptop warranty services",
		"computer maintenance"
	],
	openGraph: {
		title: "Our Services - Laptop Secure",
		description: "Explore our comprehensive services: Used Laptops, Desktops, Computer Accessories, Parts, Storage Devices, and Repair Services.",
		type: "website",
		url: "https://laptopsecure.com/services",
	},
	twitter: {
		title: "Our Services - Laptop Secure",
		description: "Comprehensive laptop and computer services: Used devices, accessories, parts, and repair services.",
	},
	alternates: {
		canonical: "/services",
	},
};

export default function ServicesPage() {
  const services = [
    {
      title: "Used Laptops",
      description: "Best deals on second-hand laptops in excellent condition.",
      icon: <Laptop className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Used Desktops",
      description: "High-performance desktops at unbeatable prices.",
      icon: <Monitor className="w-12 h-12 text-yellow-500" />,
    },
    {
      title: "Laptop Accessories",
      description: "Chargers, bags, keyboards, mice, and more.",
      icon: <Headphones className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Computer Parts",
      description: "Processors, RAM, SSDs, and other components available.",
      icon: <Cpu className="w-12 h-12 text-yellow-500" />,
    },
    {
      title: "Storage Devices",
      description: "Hard drives, SSDs, and external storage at low cost.",
      icon: <HardDrive className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Repair & Support",
      description: "Quick fixes, maintenance, and system support services.",
      icon: <Wrench className="w-12 h-12 text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12"
      >
        Our Services
      </motion.h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
