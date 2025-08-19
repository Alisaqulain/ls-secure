import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import InstagramButton from "./components/InstagramButton";

export const metadata = {
	title: {
		default: "Laptop Secure",
		template: "%s | Laptop Secure",
	},
	description: "Buy quality used laptops, desktops, and accessories at the best prices. Trusted source for pre-owned devices.",
	keywords: [
		"Laptop Secure",
		"used laptops",
		"refurbished laptops",
		"desktop",
		"computer accessories",
		"best price laptops",
    "old laptops"
	],
	applicationName: "Laptop Secure",
	creator: "Laptop Secure",
	publisher: "Laptop Secure",
	category: "technology",
	icons: {
		icon: "/l.png",
		shortcut: "/l.png",
		apple: "/l.png",
	},
	openGraph: {
		title: "Laptop Secure",
		description: "Buy quality used laptops, desktops, and accessories at the best prices.",
		type: "website",
		images: [
			{
				url: "/l.png",
				width: 512,
				height: 512,
				alt: "Laptop Secure Logo",
			},
		],
	},
	twitter: {
		card: "summary",
		title: "Laptop Secure",
		description: "Quality used laptops and desktops at great prices.",
		images: ["/l.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	themeColor: "#2563eb",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 5,
		viewportFit: "cover",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="overflow-x-hidden">
				{/* Header is fixed, so add padding dynamically */}
				<div className="pt-16 sm:pt-20">
					<Header />
					<main>{children}</main>
					<Footer />
				</div>

				{/* Floating Buttons - responsive placement */}
				<div className="fixed bottom-4 right-4 flex flex-col gap-3 sm:gap-4 z-50">
					<InstagramButton />
					<WhatsAppButton />
				</div>
			</body>
		</html>
	);
}
