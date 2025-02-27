"use client"
import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "International Recruitment Services", description: "Our International recruiting services connotes Human Resources Management (HRM), identifying, attracting, interviewing, selecting, hiring and on-boarding employees from across the world, and Jobs in your desired location that matches your profession such as job seekers visas, National D visas,vacations etc" },
  { title: "professional Assistance", description: "Our Company provides professional services such as occasional assistance, General Assistance,Personal assistance services, Medical assistant, technical assistance, Housing assistance, Public assistance,Substantial Assistance, Nonprofessional services Professional development." },
  { title: "Exportation of SIERRA LEONE Mineral Resources", description: "Our Consortium services can also help in the exportation and assistance of acquiring and  essential documentations  of our country's known mineral such as RutileIlmenite,Bauxite,Iron Ore,Gold,Diamond,Zircon,Columbite,-Tantalite (coltan) as well as Base Metals & Elements Chromite Platinum Nickel Manganese Dimension Stone etc." },
  { title: "Clearing and forwarding services", description: " Our experts provide assistance to get goods cleared through customs formalities, coordinate with the carrier and handle shipping and delivery in your designated country." },
  { title: "Consultancy services", description: "We provide professional and expert advice and service in a multiple areas such as security, management, accountancy, law, human resources, marketing, financial control, engineering, digital transformation, exit planning or any of many other specialized fields. " },
  { title: "Travel Agency Services", description: "Assistance in organizing your travel can be found at travel agencies and online.reserving, booking, and ticketing air travel. Hotel and car rental services. Reconciling accounts. Planning services for meetings. Providing help desk support" },
  { title: "Work and Travel abroad" , description: "Contact our Consortium for Work and study programs are an excellent alternative for young people desiring to travel and spend time overseas. Whether as an adventure during your gap year or for college credit, working and studying abroad is a great way to step out of your comfort zone and receive a life-changing experience."},
  { title: "Import and Export Services", description: "We provide Import & Export Services in the following markets:Exporting your products? our consortium can help you comply with import and export requirements, assisting smooth customs clearances and documentations. we can also help in obtaining  all related and necessary certificates to meet your countries' standards and ensure smooth customs clearance."},
  { title: "Educational Services", description: "Our Educational Services has the responsibility for representing the matters related to professional development with specific terms of reference as established in the constitution and/or by approved by the Sierra Leone constitution." },
  { title: "Real Estate Services", description: "Our Consortium services has gained strong expertise in the provision of technical, organizational and commercial services in support of the management of its real estate assets and of the improvement projects carried out in partnership or as provider of other companies of the sector" },
  { title: "Conferences and Events", description:"Conferences, exhibitions, trade fairs, and training events are all types of gatherings that serve specific purposes in various industries. Each of these events plays a unique role in bringing together professionals, businesses, and organizations to network, showcase products and services, exchange knowledge, and enhance skills. Here is an overview of each type of event:"}
];

export default function ServicesPage()  {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-400">Our Services</h1>
        <p className="text-gray-400 mt-4">
          We provide a range of services to simplify your needs and make sure you get the best there is.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-purple-700 transition"
          >
            <h3 className="text-xl font-semibold text-purple-400">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
