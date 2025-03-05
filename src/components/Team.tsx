const teamMembers = [
  {
    name: "Mary Veronica Sowa",
    role: "Chief Executive Officer  Precious Global consortium Services LTD United Kingdom. Precious Global Consulting Services LTD, Precious Global Services Di Sowa Mary Veronica Italy.",
    image: "mary_shaw.jpeg",
  },
  {
    name: "David Othniel Smith",
    role: "Senior Consortium Corporate Partner and Representative United Kingdom. Chaiman/Founder of the  British African Business Alliance Organisation United Kingdom",
    image: "othniel.jpeg",
  },
  {
    name: "Alhaji Ibrahim Kamara.",
    role: "Precious Global Consortium Services Corporate partner and Representative United Kingdom",
    image: "alhaji.jpeg",
  },
  {
    name: "Mr. Inegbedion isi Ehimen",
    role: " Nigeria Representative",
    image: "Nigerian.jpeg",
  },
   {
    name: "Miss Shalom-Margaret Ijeoma Ejiogu Maryland",
    role: "U.S.A Child advocate for African street and poor children in collaboration with Precious Global Consortium Services and Global Empowerment & Development Organization",
    image: "shalom.jpeg",
  }
];

export function Team() {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-xl text-center shadow-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 mx-auto rounded-full object-contain border-4 border-purple-500"
          />
          <h3 className="text-lg font-semibold text-white mt-4">{member.name}</h3>
          <p className="text-purple-400 text-sm">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
