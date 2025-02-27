import React from "react"

export function Footer() {
	return(
	 <footer className="py-12 bg-gray-900 text-gray-400 border-t border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Navigation Section */}
      <div className="mb-8 md:mb-0">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Navigation</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-indigo-400 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition duration-300">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition duration-300">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition duration-300">Contact</a>
          </li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div className="mb-8 md:mb-0">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Follow Us</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-indigo-400 transition duration-300">Facebook</a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition duration-300">Twitter</a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition duration-300">Instagram</a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition duration-300">LinkedIn</a>
          </li>
        </ul>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="mb-8 md:mb-0">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Subscribe to Our Newsletter</h3>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="mt-8 border-t border-gray-700 pt-8 text-center md:text-right">
      <p className="text-sm">
        &copy; 2025 Precious Global Consortium. All rights reserved.
      </p>
      <p className="text-sm mt-2">
        <a href="#" className="hover:text-indigo-400 transition duration-300">Privacy Policy</a> |{" "}
        <a href="#" className="hover:text-indigo-400 transition duration-300">Terms of Service</a>
      </p>
    </div>
  </div>
</footer>
	)
}