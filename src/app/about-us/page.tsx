
import { Team } from "@/components/Team";

export default function AboutUs() {
  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-20">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mt-4">
        <h1 className="text-4xl font-bold text-purple-400">About Us</h1>
        <p className="text-gray-400 mt-4">
          Our Consortium Companies operates in different business area like Consultancy Services,International Recruitment Services,Travel agency Services,Professional assistance,Work & Study abroad, Import and Export services, Clearing and Forwarding Services, Exportation of Mineral Resources,Real Estate services,Educational services , Managements & Brokers services, Project Managements etc. 
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-purple-400">Our Mission</h3>
          <p className="text-gray-400 mt-2">
            To simplify and streamline various services, ensuring a hassle-free experience
            for all applicants worldwide.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-purple-400">Our Vision</h3>
          <p className="text-gray-400 mt-2">
            A world where access to diverse professional is seamless, transparent, and accessible to everyone.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-purple-400">Our Values</h3>
          <p className="text-gray-400 mt-2">
            Integrity, transparency, and innovation drive everything we do to support our clients.
          </p>
        </div>
      </div>

      {/* Media Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-purple-400">Media</h2>
        <p className="text-gray-400 mt-4">Watch our latest insights and updates.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <iframe
              className="rounded-lg shadow-lg w-full"
              height="315"
              src="https://www.youtube.com/embed/gueeHTZWxv4?si"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          <div>
            <iframe
              className="rounded-lg shadow-lg w-full"
              height="315"
              src="https://www.youtube.com/embed/_ndOAo2VL3c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          <div>
            <iframe
              className="rounded-lg shadow-lg w-full"
              height="315"
              src="https://www.youtube.com/embed/WbxQ9X_XomQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          <div>
            <iframe
              className="rounded-lg shadow-lg w-full"
              height="315"
              src="https://www.youtube.com/embed/8mm6OG9LF2o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
           <div>
            <iframe
              className="rounded-lg shadow-lg w-full"
              height="315"
              src="https://www.youtube.com/embed/ufF4Zj_PCA4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-purple-400 text-center">Meet Our Team</h2>
        <p className="text-gray-400 text-center mt-4">
          Our team of experts is dedicated to providing exceptional services.
        </p>
        <Team />
      </div>
    </div>
  );
}
