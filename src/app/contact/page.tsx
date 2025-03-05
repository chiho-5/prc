import Contact from '@/components/contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center pt-20 px-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="space-y-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-100">Get in Touch</h1>
            <p className="text-gray-400 mt-2 text-lg">
              We'd love to hear from you! Reach out via the details below.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-8 text-gray-300">
            {/* UK */}
            <div>
              <h2 className="text-xl font-semibold text-gray-100">🇬🇧 UK Address</h2>
              <p className="mt-2">2nd Floor College House, 17 King Edwards Road, Ruislip</p>
              <p>HA4 7AE London, United Kingdom, +447947609127</p>
            </div>

            {/* Sierra Leone */}
            <div>
              <h2 className="text-xl font-semibold text-gray-100">🇸🇱 Sierra Leone</h2>
              <p className="mt-2">No 37 Pademba Road</p>
              <p>Freetown, Sierra Leone, West Africa, +23279402424</p>
            </div>

            {/* Italy */}
            <div>
              <h2 className="text-xl font-semibold text-gray-100">🇮🇹 Italy</h2>
              <p className="mt-2">Via Montimitro 37, 00132, +393515110837</p>
              <p>Italia</p>
            </div>

            {/* Nigeria */}
            <div>
              <h2 className="text-xl font-semibold text-gray-100">🇳🇬 Nigeria</h2>
              <p className="mt-2">22 Abeokuta St. Garki 900103</p>
              <p>Abuja, Federal Capital Territory, Nigeria,  +2348103790238</p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-100">📞 Phone</h2>
                <p className="mt-2">+44 7947 838034</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-100">📧 Email</h2>
                <p className="mt-2 break-all sm:break-words">
                contactpreciousglobalservices@gmail.com
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-100">⏳ Business Hours</h2>
                <p className="mt-2">Mon - Fri: 9 AM - 6 PM</p>
                <p>Sat - Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-100 text-center md:text-left">Send Us a Message</h2>
          <div className="mt-4">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
