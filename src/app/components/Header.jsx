"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo with animation */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Image src="/l.png" alt="LS Logo" width={50} height={50} />
            <span className="text-xl md:text-2xl font-bold text-yellow-400">
              Laptop Secure
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:block"
        >
          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-yellow-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-300">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
            </li>
          </ul>
        </motion.nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Panel */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 border-t border-blue-500">
          <nav className="px-6 py-4">
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <Link href="/" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="/about" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>About</Link>
              </li>
              <li>
                <Link href="/services" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Services</Link>
              </li>
              <li>
                <Link href="/contact" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
