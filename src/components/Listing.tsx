"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Travel Services",
    description:
      "We use Travelocity, Sky Scanner, Kiwi, Jet-cost, and Booking to find the best deals on flights and hotels, as well as different recommended insurance companies for safety trips abroad.",
    price: "$85 - $500",
  },
  {
    title: "Import and Export Consultancy",
    description:
      "Import and export services are essential for businesses that want to expand their reach and increase their earnings.",
    price: "$100 - $1000",
  },
  {
    title: "Consulting Services",
    description:
      "Business and management consulting services help tackle complex issues and drive positive outcomes for businesses and projects. Connect with us to make it excellent.",
    price: "$200 - $1000",
  },
  {
    title: "Study Abroad & Exchange Programs",
    description:
      "Study abroad services can help you explore new cultures and learn new skills while you are away from home.",
    price: "$200 - $500",
  },
];

export default function Listing() {
  return (
    <div className="w-full py-12 px-6 bg-gray-900 text-white flex justify-center">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-100">
          Service Pricing
        </h1>

        {/* Listing Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-100">{service.title}</h2>
              <p className="text-gray-300 mt-2">{service.description}</p>
              <p className="mt-4 text-lg font-bold text-yellow-400">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
