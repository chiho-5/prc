"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Lizzy",
    quote: "Precious Global Services has been a lifesaver for me! They have helped me with so many different issues and they always seem to know the right thing to do. I would highly recommend them to anyone.",
  },
  {
    name: "Emily",
    quote: "Precious Global Services has been a great resource for me. They have always been able to help me with whatever I've needed and their customer service is fantastic. I would definitely recommend them to others.",
  },

];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-change every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 px-4 bg-gray-900 text-white flex justify-center items-center">
      <div className="w-full max-w-6xl p-8 bg-gray-800 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-8">
          Our Testimonials
        </h1>

        {/* Testimonial Content */}
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
        >
          {/* Quote Icon */}
         

          {/* Quote Text */}
          <div className="flex-1">
            <p className="text-lg text-center md:text-xl text-gray-300 italic">"{testimonials[index].quote}"</p>
            <div className="mt-4 text-center md:text-right">
              <h3 className="text-gray-100 font-semibold text-lg">{testimonials[index].name}</h3>
              {/*<p className="text-gray-400 text-sm">{testimonials[index].position}</p>*/}
            </div>
          </div>

          {/* Quote Icon */}
        
        </motion.div>

        {/* Dots for Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-white scale-125" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
