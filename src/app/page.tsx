"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrustSection } from "@/components/TrustSection";
import { Features } from "@/components/features";
import { Navbar } from "@/components/Nav";
import { Adder } from "@/components/adder";
import Testimonial from "@/components/Testimonial"
import Listing from "@/components/Listing"
const faqData = [
  {
    question: "What is Precious Global Consortium?",
    answer:
      "Precious Global Consortium is a global organization specializing in consultancy, travel assistance, work and study abroad programs, import and export services, and more.",
  },
  {
    question: "How can I contact Precious Global Consortium?",
    answer:
      "You can reach out to us via email at info@preciousglobal.com or call us at +123 456 7890.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including consultancy, recruitment, real estate, education advising, and project management.",
  },
  {
    question: "Do you have international partnerships?",
    answer:
      "Yes, we have strategic alliances with organizations in the UK, Italy, and other countries.",
  },
];

export default function HomePage() {
  const images = ["/logo3.jpeg", "/logo4.webp", "/logo5.jpeg", "/logo6.jpeg", "/logo7.jpeg"];

  return (
    <>
      <Navbar />
      {/* Hero Section */}
  <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 mt-16 md:mt-20">
  <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-12 text-center md:text-left">
    <div className="md:w-1/2 mb-6 md:mb-0">
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
        Seize control of your precious time and experiences <span className="text-purple-400">with us</span>
      </h1>
      <p className="mt-4 text-gray-300">
      Precious Global provides customised services tailored them to individual client needs, delivered by our passionate and experienced team dedicated to quality and affordability.
      </p>
      <div className="mt-6 flex flex-col md:flex-row md:justify-center gap-4">
        <a href="/about-us">
          <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition">
            About Us
          </Button>
        </a>
        <a href="/contact">
          <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition">
            Contact Us
          </Button>
        </a>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
      <Image
      src="/hero.jpg"
      alt="Doctor Online"
      width={400}
      height={400}
      className="rounded-xl shadow-xl w-full max-w-[90%] sm:max-w-sm md:max-w-md"
/>

    </div>
  </div>
</section>


      {/* Trust Section */}
      <TrustSection />
      <Features />
      <Testimonial />
      <Listing />

      <section className="py-20 bg-gray-800 text-white text-center overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Businesses We Partner With</h2>
        <div className="relative w-full flex justify-center overflow-hidden px-4">
          <div className="slider-container w-full max-w-6xl">
            <div className="slider-track flex">
              {[...images, ...images].map((img, index) => (
                <div key={index} className="slide flex-shrink-0 w-[250px] md:w-[300px] h-[100px] md:h-[150px] flex items-center justify-center">
                  <Image src={img} alt="Partner Logo" width={300} height={150} className="object-contain rounded-lg shadow-lg w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .slider-container {
            overflow: hidden;
          }
          .slider-track {
            display: flex;
            animation: scroll 20s linear infinite;
          }
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      <div className="bg-gray-900 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Have questions? Here are some answers to the most common ones!
          </p>
          <div className="space-y-5">
            {faqData.map((item, index) => (
              <Adder key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
