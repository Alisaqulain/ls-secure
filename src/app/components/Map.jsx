"use client";

import { motion } from "framer-motion";

export default function Map({ query, height = 380, rounded = "rounded-2xl" }) {
	const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			className={`w-full shadow-xl ${rounded} overflow-hidden ring-1 ring-black/5`}
		>
			<iframe
				title="Laptop Secure Location Map"
				src={src}
				width="100%"
				height={height}
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</motion.div>
	);
}


