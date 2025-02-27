import React from "react";
import { motion } from "framer-motion";

export function TrustSection() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl font-bold text-white"
        >
          Catch a glimpse of our Services
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-2 text-gray-400"
        >
          Get to know about us
        </motion.p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[ 
            { title: "Professional Consultancy", desc: "General consulting services." },
            { title: "Private & Secure", desc: "Travel assistant Services." },
            { title: "Overseas guide", desc: "Study/Work abroad services." },
            { title: "Work Placement", desc: "Recruitment and Placement supports." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: false, amount: 0.2 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-400">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
