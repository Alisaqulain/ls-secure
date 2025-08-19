"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917417211291"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}


