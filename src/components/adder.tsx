import { LucideSearch, ChevronRight } from "lucide-react";

const services = [
  { title: "Our company", desc: "Precious Global Consulting Services Sierra Leone is a Consortium Company" },
  { title: "UK collaboration", desc: "Precious Global and Think Better services United Kingdom" },
  { title: "Italy collaboration", desc: "Precious Global Services Di Sowa Mary Veronica Italy Rome" },
  { title: "UK alliances", desc: "The British African Business Alliance United Kingdom," },
  { title: "Sierra Leone Alliances", desc: "The Monic Investment and logistics Company Sierra Leone," },
  { title: "Ivory Coast and Sierra Leone Alliances", desc: "The MKD Enterprise Ivory coast and Sierra Leone." },
  { title: "In Partnership with", desc: "The Global Empowerment & Development Organization ;"}
];

export function Adder() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white p-6">
      <h2 className="text-3xl font-bold text-center text-purple-900">Precious Global Consortium Services International</h2>
      <p className="text-gray-400 text-center mt-2 max-w-lg">
        Precious Global Consortium is in partnership and startegic alliance with the following companies.
      </p>

      <button className="mt-6 flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-600 transition shadow-lg">
        {/*<LucideSearch className="w-5 h-5" />*/}
        <span>Reach to us for any of our services</span>
      </button>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        {services.map((service, index) => (
          <div key={index} className="bg-[#1a0a33] p-4 rounded-xl flex justify-between items-center shadow-md hover:bg-[#28104d] transition cursor-pointer">
            <div>
              <h3 className="text-lg font-semibold text-purple-300">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
            <ChevronRight className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
