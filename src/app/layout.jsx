import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import InstagramButton from "./components/InstagramButton";

export const metadata = {
	title: {
		default: "💻 Laptop Secure - Best Used Laptops & Desktops at Affordable Prices",
		template: "%s | 💻 Laptop Secure",
	},
	description: "Buy quality used laptops, desktops, and computer accessories at the best prices in India. Trusted source for refurbished devices with warranty. Free delivery across India.",
	keywords: [
		"Laptop Secure",
		"used laptops",
		"refurbished laptops",
		"second hand laptops",
		"desktop computers",
		"computer accessories",
		"best price laptops",
		"old laptops",
		"cheap laptops",
		"laptop deals",
		"computer store",
		"laptop warranty",
		"India laptops",
		"pre-owned laptops",
		"laptop repair",
		"computer parts"
	],
	applicationName: "Laptop Secure",
	creator: "Laptop Secure",
	publisher: "Laptop Secure",
	category: "technology",
	authors: [{ name: "Laptop Secure Team" }],
	generator: "Next.js",
	referrer: "origin-when-cross-origin",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://laptopsecure.com'),
	alternates: {
		canonical: '/',
	},
	icons: {
		icon: [
			{ url: "/l.png", sizes: "32x32", type: "image/png" },
			{ url: "/l.png", sizes: "16x16", type: "image/png" }
		],
		shortcut: "/l.png",
		apple: [
			{ url: "/l.png", sizes: "180x180", type: "image/png" }
		],
		other: [
			{ rel: "mask-icon", url: "/l.png", color: "#2563eb" }
		]
	},
	manifest: "/manifest.json",
	openGraph: {
		title: "💻 Laptop Secure - Best Used Laptops & Desktops at Affordable Prices",
		description: "Buy quality used laptops, desktops, and computer accessories at the best prices in India. Trusted source for refurbished devices with warranty.",
		type: "website",
		url: "https://laptopsecure.com",
		siteName: "Laptop Secure",
		locale: "en_IN",
		countryName: "India",
		images: [
			{
				url: "/l.png",
				width: 1200,
				height: 630,
				alt: "Laptop Secure - Best Used Laptops & Desktops",
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "💻 Laptop Secure - Best Used Laptops & Desktops",
		description: "Quality used laptops and desktops at great prices with warranty. Free delivery across India.",
		images: ["/l.png"],
		creator: "@laptopsecure",
		site: "@laptopsecure",
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
		yandex: "your-yandex-verification-code",
		yahoo: "your-yahoo-verification-code",
	},
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#2563eb" },
		{ media: "(prefers-color-scheme: dark)", color: "#1d4ed8" }
	],
	colorScheme: "light dark",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 5,
		viewportFit: "cover",
		userScalable: true,
	},
	other: {
		"mobile-web-app-capable": "yes",
		"apple-mobile-web-app-capable": "yes",
		"apple-mobile-web-app-status-bar-style": "default",
		"apple-mobile-web-app-title": "Laptop Secure",
		"msapplication-TileColor": "#2563eb",
		"msapplication-config": "/browserconfig.xml",
	},
};

export default function RootLayout({ children }) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Laptop Secure",
		"description": "Buy quality used laptops, desktops, and computer accessories at the best prices in India. Trusted source for refurbished devices with warranty.",
		"url": "https://laptopsecure.com",
		"logo": "https://laptopsecure.com/l.png",
		"image": "https://laptopsecure.com/l.png",
		"telephone": "+91-7417211291",
		"email": "laptopsecurels@gmail.com",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Tara Chand Petrol Pump",
			"addressCountry": "IN"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "28.6139",
			"longitude": "77.2090"
		},
		"openingHours": "Mo-Su 09:00-21:00",
		"priceRange": "₹5000-₹50000",
		"paymentAccepted": "Cash, Credit Card, UPI, Net Banking",
		"currenciesAccepted": "INR",
		"areaServed": {
			"@type": "Country",
			"name": "India"
		},
		"serviceArea": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": "28.6139",
				"longitude": "77.2090"
			},
			"geoRadius": "1000000"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Laptop and Computer Products",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Product",
						"name": "Used Laptops",
						"description": "Quality refurbished laptops in excellent condition"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Product",
						"name": "Used Desktops",
						"description": "High-performance desktop computers at affordable prices"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Product",
						"name": "Computer Accessories",
						"description": "Laptop accessories, chargers, bags, and computer parts"
					}
				}
			]
		},
		"sameAs": [
			"https://www.instagram.com/laptopsecure",
			"https://wa.me/917417211291"
		],
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.8",
			"reviewCount": "150"
		}
	};

	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</head>
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

