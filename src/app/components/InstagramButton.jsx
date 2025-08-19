"use client";
import { FaInstagram } from "react-icons/fa";

export default function InstagramButton() {
  return (
    <a
      href="https://www.instagram.com/laptopsecure?igsh=MTRmYmhqMzdid25oaQ%3D%3D&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Instagram"
      className="fixed bottom-24 right-6 z-50 bg-pink-500 hover:bg-pink-600 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400"
    >
      <FaInstagram size={26} />
    </a>
  );
}


