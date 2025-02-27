// "use client";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { TrustSection } from "@/components/TrustSection";
// import { Features } from "@/components/features";
// import { Navbar } from "@/components/Nav";
// import { Adder } from "@/components/adder";

// export default function HomePage() {
//   const images = ["/think.jpeg", "/british.webp", "/prc.jpeg"];

//   return (
//     <>
//       {/*<Navbar />*/}
//       {/* Hero Section */}
//       <section className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-20">
//         <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
//           <div className="md:w-1/2 text-center md:text-left">
//             <h1 className="text-5xl font-extrabold leading-tight">
//               Sieze control of your precious time and experiences <span className="text-purple-400">with us</span>
//             </h1>
//             <p className="mt-4 text-gray-300">
//               Customized services tailored to individual client needs, delivered by a passionate and experienced team dedicated to quality and affordability.
//             </p>
//             <div className="mt-6 flex flex-col md:flex-row gap-4">
//               <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition">Get a quote</Button>
//               <Button variant="outline" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition">Contact US</Button>
//             </div>
//           </div>
//           <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
//             <Image
//               src="/agency.png"
//               alt="Doctor Online"
//               width={400}
//               height={400}
//               className="rounded-xl shadow-xl"
//             />
//           </div>
//         </div>
//       </section>

//        {/* Trust Section */}
//       <TrustSection />
//       <Features />

//       <section className="py-20 bg-gray-800 text-white text-center overflow-hidden">
//         <h2 className="text-4xl font-bold mb-6">Businesses We Partner With</h2>
//         <div className="relative w-full flex justify-center overflow-hidden">
//           <div className="slider-container">
//             <div className="slider-track">
//               {[...images, ...images].map((img, index) => (
//                 <div key={index} className="slide">
//                   <div className="w-[300px] h-[150px] flex items-center justify-center">
//                     <Image src={img} alt="Partner Logo" width={300} height={150} className="object-contain rounded-lg shadow-lg" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <style jsx>{`
//           .slider-container {
//             display: flex;
//             overflow: hidden;
//             width: 100%;
//           }

//           .slider-track {
//             display: flex;
//             width: calc(300px * ${images.length * 2});
//             animation: scroll 20s linear infinite;
//           }

//           .slide {
//             min-width: 300px;
//             height: 150px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             margin-right: 20px;
//           }

//           @keyframes scroll {
//             from {
//               transform: translateX(0);
//             }
//             to {
//               transform: translateX(-50%);
//             }
//           }
//         `}</style>
//       </section>

//       <Adder/>
    

      
//     </>
//   );
// }


"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrustSection } from "@/components/TrustSection";
import { Features } from "@/components/features";
import { Navbar } from "@/components/Nav";
import { Adder } from "@/components/adder";

export default function HomePage() {
  const images = ["/think.jpeg", "/british.webp", "/prc.jpeg"];

  return (
    <>
      {/* <Navbar /> */}
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-10 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Sieze control of your precious time and experiences <span className="text-purple-400">with us</span>
            </h1>
            <p className="mt-4 text-gray-300">
              Customized services tailored to individual client needs, delivered by a passionate and experienced team dedicated to quality and affordability.
            </p>
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <Button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition">Get a quote</Button>
              <Button variant="outline" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition">Contact US</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image
              src="/agency.png"
              alt="Doctor Online"
              width={400}
              height={400}
              className="rounded-xl shadow-xl max-w-full md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />
      <Features />

      <section className="py-10 md:py-20 bg-gray-800 text-white text-center overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Businesses We Partner With</h2>
        <div className="relative w-full flex justify-center overflow-hidden">
          <div className="slider-container">
            <div className="slider-track">
              {[...images, ...images].map((img, index) => (
                <div key={index} className="slide">
                  <div className="w-[200px] md:w-[300px] h-[100px] md:h-[150px] flex items-center justify-center">
                    <Image src={img} alt="Partner Logo" width={300} height={150} className="object-contain rounded-lg shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .slider-container {
            display: flex;
            overflow: hidden;
            width: 100%;
          }

          .slider-track {
            display: flex;
            width: calc(200px * ${images.length * 2});
            animation: scroll 20s linear infinite;
          }

          .slide {
            min-width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
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

      <Adder />
    </>
  );
}

