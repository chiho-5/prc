import Contact from '@/components/contact';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl w-full space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-100">Get in Touch</h1>
          <p className="text-gray-400 mt-2 text-lg">
            We'd love to hear from you! Reach out via the details below.
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-gray-100">UK Address</h2>
            <p className="mt-2">2nd Floor College House, 17 King Edwards Road, Ruislip</p>
            <p>HA4 7AE London , United Kingdom </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Phone</h2>
            <p className="mt-2">+1 (234) 567-890</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Email</h2>
            <p className="mt-2">contact@example.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Business Hours</h2>
            <p className="mt-2">Mon - Fri: 9 AM - 6 PM</p>
            <p>Sat - Sun: Closed</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Sierra Leone Address</h2>
            <p className="mt-2">No 37 Pademba Road</p>
            <p>Freetown, Sierra Leone, West Africa</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Phone</h2>
            <p className="mt-2">+1 (234) 567-890</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Email</h2>
            <p className="mt-2">contact@example.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Business Hours</h2>
            <p className="mt-2">Mon - Fri: 9 AM - 6 PM</p>
            <p>Sat - Sun: Closed</p>
          </div>
        </div>

      <div className="grid md:grid-cols-2 gap-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Italy Address</h2>
            <p className="mt-2">Via Montimitro 37, 00132</p>
            <p>Italia</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Phone</h2>
            <p className="mt-2">+1 (234) 567-890</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Email</h2>
            <p className="mt-2">contact@example.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Business Hours</h2>
            <p className="mt-2">Mon - Fri: 9 AM - 6 PM</p>
            <p>Sat - Sun: Closed</p>
          </div>
        </div>


          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Nigerian Address</h2>
            <p className="mt-2">22 Abeokuta St.Garki 900103</p>
            <p>Abuja, Federal Capital Territory, Nigeria </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Phone</h2>
            <p className="mt-2">+1 (234) 567-890</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Email</h2>
            <p className="mt-2">contact@example.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Business Hours</h2>
            <p className="mt-2">Mon - Fri: 9 AM - 6 PM</p>
            <p>Sat - Sun: Closed</p>
          </div>
        </div>

        {/* Form Placeholder */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-100">Contact Form</h2>
          <p className="text-gray-400 mt-2">
             <Contact />
          </p>
        </div>
      </div>
    </div>
  );
}
