"use client"
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideBriefcase, LucideUsers, LucideGlobe } from "lucide-react";

const InfoSection = ({ title, content }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="bg-purple-800 p-6 rounded-2xl shadow-lg">
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <p className="text-gray-300">{content}</p>
  </motion.div>
);

const ListSection = ({ title, items }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="bg-purple-700 p-6 rounded-2xl shadow-lg">
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <ol className="text-gray-300 list-decimal pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  </motion.div>
);

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-10"
      >
        <h1 className="text-5xl font-bold mt-5">Precious Global Consortium LTD</h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Enhancing the socio-economic landscape of Sierra Leone through innovation and entrepreneurship.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl w-full">
        <InfoSection 
          title="Company Overview" 
          content="Precious Global Consortium Services Ltd is a private company owned by nationals of Sierra Leone. It focuses on enhancing socio-economic development through education, business, and infrastructure."
        />
        <InfoSection 
          title="Vision & Mission" 
          content="To be a leading force in transforming lives in Sierra Leone through education, employment, and sustainable development. Providing innovative solutions for socio-economic growth and entrepreneurship."
        />
        <InfoSection 
          title="Strategy" 
          content="PGCS bridges the gap between local needs and international expertise, introducing business opportunities for Sierra Leoneans. With the support of global funding, we empower local entrepreneurs to establish sustainable businesses."
        />
        <ListSection 
          title="Registered Addresses" 
          items={[ 
            "Sierra Leone: Xyz St, Freetown, Sierra Leone", 
            "UK: 2nd Floor College House, 17 King Edwards Road, Ruislip, London, HA4 7AE, United Kingdom", 
            "Telephone: +447947609127"
          ]} 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 max-w-4xl w-full bg-purple-800 p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Key Personnel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ListSection 
            title="UK Team" 
            items={[ 
              "Ms Màry Veronica Sowa (Director & CEO) - +447947609127", 
              "Mr Ibrahim Kamara (Director) - +44 7947 838034", 
              "Mr David Neil Smith (Chairman - British African Business Alliance UK) - +44 7957 871470" 
            ]} 
          />
          <ListSection 
            title="Sierra Leone Team" 
            items={[ 
              "Ms Màry Veronica Sowa (Director & CEO) - +447947609127", 
              "Mr Ibrahim Kamara (Director) - +44 7947 838034", 
              "Mr Abdul Kudus (Country Manager Sierra Leone) - +232 74 134654", 
              "Mr David Conteh (Assistant Manager Sierra Leone) - +232 77 833890", 
              "Mr Alpha Bockarie (Company Project Manager Sierra Leone) - +232 77 905914" 
            ]} 
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10"
      >
        <a href="/contact">
          <Button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full text-lg">
          Contact Us
        </Button>
          </a>
      </motion.div>


 <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10"
      >
        <h2 className="text-2xl text-center font-semibold mb-4">Key Areas of Business Operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ListSection 
            title="Vocational Institutions for Young People" 
            items={[ 
              "We establish and manage vocational training centers that equip young individuals with practical skills, enhancing their employability and fostering entrepreneurship.", 
              "Beyond training, our model creates employment in construction, real estate development, agriculture and food production and community services", 
              "We combine the skills, funds and technology to deliver much needed services to communities in Sierra Leone" 
            ]} 
          />
          <ListSection 
            title="Employment opportunities" 
            items={[ 
              "Through liaisons with Chambers of Commerce, Business Organizations and established entrepreneurs we are establishing opportunites for Mentorship between students and local business managers. This will provide the introductions of potential new employees to those businesses and at the same time access to potential job opportunities for Students", 
              "We help to bridge the gap between education and the workforce particularly between the unemployed young people who have left education and opportunities in Business, The Arts, Agriculture, Health Services, Government Office and Agency and the Education Sector. As our programmes develop across the districts of Sierra Leone, di\erent industrial sectors will be addresses and our network of Training Centres will improve access to jobs for our registered students", 
            ]} 
          />
          <ListSection 
            title="Student Hostels"
            items = {[
                "While our intention is to create local colleges for local people, who will live at home during their studies with us, we recognise that some young people will travel to our centres from outlying areas to access the courses we offer. We intend to build some affordable accommodation where such students can stay",
                "We will provide affordable and safe student accommodation, to ensure that young learners have access to a conducive living environment where they can focus on their education."
            ]}
        />

          <ListSection
            title="Low-Cost Housing and Estate Construction"
            items = {[
              "Sierra Leone and its people need low-cost housing solutions that helps improve the standard of housing for people to enjoy",
              "We address this by designing and building suitable accommodation at competitive prices and we intend to sell these homes with the support of affordable mortgage funding",
              "By employing young people in training-led programmes, we up skill the workforce, supply homes that meet the needs of the community and create profitable businesses in the process ",
              "We are committed to addressing the housing crisis by developing low-cost housing solutions and sustainable estates, making home ownership accessible to more families."
            ]}
            />

        <ListSection
          title="Educational Services"
          items = {[
            "We offer a range of educational services across Real Estate and Construction, Agriculture and Community Development",
            "We have incorporated a curriculum that will provide students with qualifications that are recognised internationally.",
            "We will deliver an educational resource, aimed at improving the quality of vocational education in Sierra Leone",
            "As part of the development process we will deliver Teacher Training | Education Management Training | Sport and Fitness Training | Finance and Business Management Training and Train the Trainers Programmes"
          ]}

          />

        <ListSection
        title="Business Services"
        items = {[
          "Our consultancy services assist entrepreneurs and organizations in navigating the legal framework for establishing and registering businesses in Sierra Leone, promoting economic growth and investment",
          "We provide a service to diaspora and foreign companies who need to recognise and understand the cultural and business processes that prevail in Serra Leone.",
          "We are also able to work with potential Migrants from Sierra Leone who wish to set up legitimate travel to the UK and Europe. This is particularly relevant for people with skills in healthcare and for those wishing to extend their education beyond what is available in Sierra Leone",
          "We recognise this is often a dangerous process for those who choose to adventure into Europe, where are work with refugees and other migrants to legitimise their status makes us experts in the provision of advice NOT to travel informally."
        ]}
        />

          </div>
          </motion.div>


    </div>
  );
}





  
